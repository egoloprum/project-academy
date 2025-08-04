import { DashboardGoBackBtn } from '@/features/(stats)'
import { isUserType } from '@/shared/lib'
import { DashboardAlltimeWidget } from '@/widgets/(stats)'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const page = async ({}) => {
  const cookieStore = await cookies()
  const auth = cookieStore.get('authUser')

  const userType = auth && isUserType(auth.value) ? auth.value : undefined

  if (!userType) {
    redirect('/login')
  }

  if (userType === 'intern' || userType === 'mentor') {
    redirect('/profile')
  }

  return (
    <main className="bg-black min-h-screen text-white px-6 sm:px-12 md:px-24 py-10 flex flex-col gap-8">
      <DashboardGoBackBtn />
      <DashboardAlltimeWidget />
    </main>
  )
}

export default page
