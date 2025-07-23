import { Button, Input } from '@/shared/ui'

export const ResetPasswordForm = ({}) => {
  return (
    <div className="flex flex-col xl:gap-[40px] lg:gap-[36px] md:gap-[32px] gap-[28px]">
      <form action="" className="flex flex-col gap-[16px]">
        <p className="md:text-center text-[18px]">
          Отправим ссылку на восстановление вам на почту
        </p>
        <Input label="Электронная почта" type="email" />

        <Button btnType="primary" className="mt-[8px]">
          <span className="text-(--black-main) px-[8px] text-[18px]">
            Отправить
          </span>
        </Button>
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
