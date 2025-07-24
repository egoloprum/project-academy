'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { User } from '@/entities/user'
import { Eye, EyeOff } from '@/shared'
import { useAnimatedRouter } from '@/shared/helpers'
import { Button, Checkbox, Input } from '@/shared/ui'

import { loginSchema } from '../helpers/validations'

type FormData = z.infer<typeof loginSchema>

export const LoginForm = ({}) => {
  const { push } = useAnimatedRouter()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [loginError, setLoginError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema)
  })

  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  const onSubmit = (data: FormData) => {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]')

    const hashPassword = (password: string) => {
      return btoa(encodeURIComponent(password))
    }

    const user = users.find(u => u.email === data.email)

    if (!user || user.password !== hashPassword(data.password)) {
      setLoginError('Неверная электронная почта или пароль')
      return
    }

    const cookieOptions = data.rememberMe ? { expires: 30 } : {}

    Cookies.set('authToken', user.id, cookieOptions)

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

        {loginError && (
          <div className="text-red-500 text-[14px] mt-[-8px]">{loginError}</div>
        )}

        <Button type="submit" btnType="primary" className="mt-[8px]">
          <span className="text-(--black-main) px-[8px] text-[18px]">
            Войти
          </span>
        </Button>

        <Button
          type="button"
          href="/reset-password"
          btnType="clear"
          className="mt-[8px] w-fit h-fit !p-0">
          <span className="px-[8px] text-[18px]">Не помню пароль</span>
        </Button>
      </form>
      <div className="flex justify-between items-center">
        <Checkbox label="Запомнить меня" {...register('rememberMe')} />
        <Button
          type="button"
          btnType="clear"
          className="w-fit !px-0"
          href="/register">
          <span className="px-[8px] text-[18px]">Регистрация</span>
        </Button>
      </div>
    </div>
  )
}
