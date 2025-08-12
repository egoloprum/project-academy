import { cookies } from 'next/headers'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import { ProfileSidebar } from '@/features/(profile)'
import { ProfileFormProvider } from '@/features/(profile)'
import { isUserType } from '@/shared/lib'
import { ProfileFormsWidget } from '@/widgets/(profile)'

const userTypes = {
  intern: 'Стажер',
  mentor: 'Наставник',
  admin: 'Администратор'
}

const page = async ({}) => {
  const cookieStore = await cookies()
  const auth = cookieStore.get('authUser')

  const userType = auth && isUserType(auth.value) ? auth.value : undefined

  if (!userType) {
    redirect('/login')
  }

  return (
    <main className="bg-black min-h-screen text-white px-6 sm:px-12 md:px-24 py-10 flex flex-col gap-8">
      <ProfileFormProvider>
        <section className="flex flex-col-reverse md:flex-row gap-8">
          <ProfileSidebar />
          <div className="flex items-center gap-4 h-36">
            <Image src="/avatar.svg" width={100} height={100} alt="avatar" />
            <p className="flex flex-col">
              <span className="text-2xl font-bold">Иван Иванов</span>
              <span className="text-base">{userTypes[userType]}</span>
            </p>
          </div>
        </section>
        <section className="flex gap-8">
          <div className="max-w-72 w-full hidden lg:block"></div>
          <ProfileFormsWidget />
        </section>
      </ProfileFormProvider>
    </main>
  )
}

export default page
