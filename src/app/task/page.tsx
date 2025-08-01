import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { TaskCriteriaProvider, TaskToggler } from '@/features/(task)'
import { isUserType } from '@/shared/lib'
import { TaskCriteriaContent } from '@/widgets/(task)'

const page = async ({}) => {
  const cookieStore = await cookies()
  const auth = cookieStore.get('authUser')

  const userType = auth && isUserType(auth.value) ? auth.value : undefined

  if (!userType) {
    redirect('/login')
  }

  return (
    <div className="bg-black min-h-screen text-white px-6 sm:px-12 md:px-24 py-10 flex flex-col gap-8 sm:gap-12 md:gap-8 lg:gap-16">
      <p className="text-2xl font-bold">Тестовое System Analyst / Поток 3</p>
      <TaskCriteriaProvider>
        <TaskToggler />
        <TaskCriteriaContent />
      </TaskCriteriaProvider>
    </div>
  )
}

export default page
