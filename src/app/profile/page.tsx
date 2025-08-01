import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { ProfileSidebar } from '@/features/(profile)'
import { ProfileFormProvider } from '@/features/(profile)'
import { isUserType } from '@/shared/lib'
import { ProfileContent } from '@/widgets/(profile)'

const page = async ({}) => {
  const cookieStore = await cookies()
  const auth = cookieStore.get('authUser')

  const userType = auth && isUserType(auth.value) ? auth.value : undefined

  if (!userType) {
    redirect('/login')
  }

  return (
    <div className="bg-black min-h-screen text-white px-6 sm:px-12 md:px-24 py-10 flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-8 lg:gap-16">
      <ProfileFormProvider>
        <ProfileSidebar />
        <ProfileContent userType={userType} />
      </ProfileFormProvider>
    </div>
  )
}

export default page
