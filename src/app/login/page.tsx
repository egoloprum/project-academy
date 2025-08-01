import { cookies } from 'next/headers'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import { LoginAsBtn } from '@/features/(auth)'
import { ReturnToMainBtn } from '@/features/(unauth)'
import { PageWrapper } from '@/widgets/pageWrapper'

const page = async ({}) => {
  const cookieStore = await cookies()
  const auth = cookieStore.get('authUser')

  if (auth) {
    return redirect('/profile')
  }

  return (
    <PageWrapper>
      <div className="bg-black min-h-[100vh] flex justify-center items-center relative px-4">
        <ReturnToMainBtn />

        <div className="p-6 sm:p-8 md:p-12 max-w-108 w-full flex flex-col items-center gap-4 bg-stone-900 border-stone-800 rounded-xl">
          <Image src="/logo.svg" width={120} height={120} alt="logo" />
          <p className="text-3xl text-white text-center mb-4">Вход в профиль</p>
          <LoginAsBtn type="admin" />
          <LoginAsBtn type="mentor" />
          <LoginAsBtn type="intern" />
        </div>
      </div>
    </PageWrapper>
  )
}

export default page
