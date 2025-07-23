'use client'

import { Eye } from '@/shared'
import { Button, Checkbox, Input } from '@/shared/ui'

export const LoginForm = ({}) => {
  return (
    <div className="flex flex-col xl:gap-[40px] lg:gap-[36px] md:gap-[32px] gap-[28px]">
      <form action="" className="flex flex-col gap-[16px]">
        <Input label="Электронная почта" type="email" />
        <Input label="Пароль" type="password">
          <button type="button" className="cursor-pointer">
            <Eye />
          </button>
        </Input>

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
        <Checkbox label="Запомнить меня" />
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
