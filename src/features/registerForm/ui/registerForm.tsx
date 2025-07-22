'use client'

import { Eye } from '@/shared'
import { Button, Input } from '@/shared/ui'
import { Link } from 'next-view-transitions'
import { FC } from 'react'

interface RegisterFormProps {}

export const RegisterForm: FC<RegisterFormProps> = ({}) => {
  return (
    <div className="flex flex-col gap-[40px]">
      <form action="" className="flex flex-col gap-[16px]">
        <Input label="Электронная почта" type="email" />
        <Input label="Пароль" type="password">
          <button type="button" className="cursor-pointer">
            <Eye />
          </button>
        </Input>
        <Input label="Повторите пароль" type="password">
          <button type="button" className="cursor-pointer">
            <Eye />
          </button>
        </Input>
        <Button btnType="primary" className="mt-[8px]">
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
