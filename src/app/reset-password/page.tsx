import { BackToMainBtn } from '@/features/backToMainBtn'
import { ResetPasswordForm } from '@/features/resetPasswordForm'
import { Logo } from '@/shared'
import { PageWrapper } from '@/widgets/pageWrapper'

const page = ({}) => {
  return (
    <PageWrapper>
      <div className="bg-(--black-main) min-h-[100vh] h-full py-20 flex justify-center items-center">
        <BackToMainBtn />

        <div className="bg-(--white-200) rounded-[16px] p-[64px] text-(--white-main) max-w-[520px] w-full flex flex-col gap-[40px]">
          <section className="flex flex-col gap-[24px] items-center">
            <Logo className="w-full h-full max-w-[120px] max-h-[120px]" />
            <h1 className="text-[32px] font-bold text-nowrap">
              Восстановление пароля
            </h1>
          </section>

          <ResetPasswordForm />
        </div>
      </div>
    </PageWrapper>
  )
}

export default page
