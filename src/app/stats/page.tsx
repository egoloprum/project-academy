import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import {
  StatsDashboardBtn,
  StatsDirectionSelect,
  StatsExportBtn,
  StatsGenerationSelect,
  StatsSearchInput,
  StatsSortSelect
} from '@/features/(stats)'
import { isUserType } from '@/shared/lib'
import { StatsTable } from '@/widgets/(stats)'

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
    <main className="bg-black min-h-screen text-white px-6 sm:px-12 md:px-24 py-10 flex flex-col gap-4">
      <p className="text-2xl font-bold mb-8">Статистика</p>
      <section className="flex flex-col sm:flex-row gap-4 mb-4">
        <StatsExportBtn />
        <StatsDashboardBtn />
      </section>
      <section className="lg:flex grid grid-cols-1 sm:grid-cols-2 justify-end gap-4 mb-4 sm:mb-0">
        <StatsGenerationSelect />
        <StatsDirectionSelect />
        <StatsSortSelect />
        <StatsSearchInput />
      </section>
      <StatsTable />
    </main>
  )
}

export default page
