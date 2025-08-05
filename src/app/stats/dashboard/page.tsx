import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { GoBackBtn } from '@/shared/components'
import { isUserType } from '@/shared/lib'
import {
  DashboardAgeGroupChart,
  DashboardAlltimeWidget,
  DashboardApplicationRatioChart,
  DashboardDistributionChart,
  DashboardEmploymentTypeChart,
  DashboardPortraitWidget,
  DashboardTable,
  DashboardTaskPointChart
} from '@/widgets/(stats)'

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
    <main className="bg-black min-h-screen text-white px-6 sm:px-12 md:px-24 py-10 flex flex-col gap-12">
      <GoBackBtn url="/stats">
        <span>Назад к списку</span>
      </GoBackBtn>
      <DashboardAlltimeWidget />
      <DashboardTable />

      <section className="grid xl:grid-cols-2 gap-8 gap-y-4">
        <DashboardApplicationRatioChart />
        <DashboardTaskPointChart />
        <DashboardDistributionChart />
      </section>

      <DashboardPortraitWidget />

      <section className="grid xl:grid-cols-2 gap-8 gap-y-4">
        <DashboardAgeGroupChart />
        <DashboardEmploymentTypeChart />
      </section>
    </main>
  )
}

export default page
