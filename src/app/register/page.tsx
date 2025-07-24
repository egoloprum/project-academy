'use client'

import Cookies from 'js-cookie'
import { redirect } from 'next/navigation'

import { BackToMainBtn } from '@/features/backToMainBtn'
import { RegisterForm } from '@/features/registerForm'
import { Logo } from '@/shared'
import { PageWrapper } from '@/widgets/pageWrapper'

const page = ({}) => {
  const authToken = Cookies.get('authToken')

  if (authToken) {
    redirect('/profile')
  }

  return (
    <PageWrapper>
      <div className="bg-(--black-main) min-h-[100vh] h-full py-20 px-[24px] flex justify-center items-center">
        <BackToMainBtn />

        <div className="bg-(--white-200) rounded-[16px] 2xl:p-[64px] xl:p-[56px] lg:p-[48px] md:p-[40px] sm:p-[32px] p-[24px] text-(--white-main) max-w-[520px] w-full flex flex-col 2xl:gap-[56px] xl:gap-[48px] lg:gap-[40px] gap-[32px]">
          <section className="flex flex-col gap-[24px] items-center">
            <Logo className="w-full h-full max-w-[120px] max-h-[120px]" />
            <h1 className="text-[32px] font-bold">Регистрация</h1>
          </section>

          <RegisterForm />
        </div>
      </div>
    </PageWrapper>
  )
}

export default page
