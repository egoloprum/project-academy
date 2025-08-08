import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { TasksProvider, TasksAllSelect } from '@/features/(tasks)'
import { isUserType } from '@/shared/lib'
import { TasksTable } from '@/widgets/(tasks)'

const page = async ({}) => {
  const cookieStore = await cookies()
  const auth = cookieStore.get('authUser')

  const userType = auth && isUserType(auth.value) ? auth.value : undefined

  if (!userType) {
    redirect('/login')
  }

  if (userType === 'admin' || userType === 'intern') {
    redirect('/profile')
  }

  return (
    <TasksProvider>
      <main className="bg-black min-h-screen text-white px-6 sm:px-12 md:px-24 py-10 flex flex-col gap-4 sm:gap-8">
        <div className="flex flex-col sm:flex-row gap-4 gap-y-8 justify-between w-full h-fit">
          <p className="text-2xl font-bold text-nowrap">Все задания</p>
          <TasksAllSelect />
        </div>

        <TasksTable />
      </main>
    </TasksProvider>
  )
}

export default page
