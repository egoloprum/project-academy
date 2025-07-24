'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Cookies from 'js-cookie'
import { Link } from 'next-view-transitions'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { User } from '@/entities/user'
import { Eye, EyeOff } from '@/shared'
import { useAnimatedRouter } from '@/shared/helpers'
import { Button, Input } from '@/shared/ui'

import { registerSchema } from '../helpers/validations'

type FormData = z.infer<typeof registerSchema>

export const RegisterForm = ({}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormData>({ resolver: zodResolver(registerSchema) })

  const togglePasswordVisibility = () => setShowPassword(!showPassword)
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword)

  const { push } = useAnimatedRouter()

  const onSubmit = (data: FormData) => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Пароли не совпадают'
      })
      return
    }

    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]')

    const userExists = users.some((user: User) => user.email === data.email)
    if (userExists) {
      setError('email', {
        type: 'manual',
        message: 'Пользователь с такой электронной почтой уже существует'
      })
      return
    }

    const hashPassword = (password: string) => {
      return btoa(encodeURIComponent(password))
    }

    const nextId =
      users.length > 0 ? Math.max(...users.map(u => parseInt(u.id))) + 1 : 1

    const newUser: User = {
      id: nextId.toString(),
      role: 'intern',
      email: data.email,
      password: hashPassword(data.password),
      firstName: '',
      middleName: '',
      lastName: '',
      birthday: '',
      telephone: '',
      city: ''
    }
    localStorage.setItem('users', JSON.stringify([...users, newUser]))

    Cookies.set('authToken', data.email, { expires: 7 })

    push('/profile')
  }

  return (
    <div className="flex flex-col xl:gap-[40px] lg:gap-[36px] md:gap-[32px] gap-[28px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[16px]">
        <Input
          label="Электронная почта"
          isError={!!errors.email}
          content={errors.email?.message}
          {...register('email')}
        />

        <Input
          label="Пароль"
          type={showPassword ? 'text' : 'password'}
          isError={!!errors.password}
          content={errors.password?.message}
          {...register('password')}>
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="cursor-pointer">
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </Input>

        <Input
          label="Повторите пароль"
          type={showConfirmPassword ? 'text' : 'password'}
          isError={!!errors.confirmPassword}
          content={errors.confirmPassword?.message}
          {...register('confirmPassword')}>
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="cursor-pointer">
            {showConfirmPassword ? <EyeOff /> : <Eye />}
          </button>
        </Input>

        <Button type="submit" btnType="primary" className="mt-[8px]">
          <span className="text-(--black-main) px-[8px] text-[18px]">
            Зарегистрироваться
          </span>
        </Button>

        <p className="text-[14px]">
          <span>Нажимая на кнопку, я соглашаюсь с</span>
          <Link href="#" className="ml-[4px] underline underline-offset-2">
            политикой обработки персональных данных.
          </Link>
        </p>
      </form>
      <p className="text-[16px] flex justify-center">
        <span>Уже есть аккаунт?</span>
        <Button
          btnType="clear"
          href="/login"
          className="ml-[4px] !p-0 inline-block !h-fit w-fit">
          Войдите
        </Button>
      </p>
    </div>
  )
}
