import { DashboardGoBackBtn } from '@/features/(stats)'
import { isUserType } from '@/shared/lib'
import {
  DashboardAlltimeWidget,
  DashboardApplicationRatioChart,
  DashboardTable,
  DashboardTaskPointChart
} from '@/widgets/(stats)'
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
      <DashboardTable />

      <section className="grid xl:grid-cols-2 gap-x-8">
        <DashboardApplicationRatioChart />
        <DashboardTaskPointChart />
      </section>
    </main>
  )
}

export default page
