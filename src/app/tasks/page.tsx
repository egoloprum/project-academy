import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { AllTaskSelect } from '@/features/(task)'
import { TaskProvider } from '@/features/(task)/helpers/taskContext'
import { isUserType } from '@/shared/lib'
import { TasksTable } from '@/widgets/(task)'

const page = async ({}) => {
  const cookieStore = await cookies()
  const auth = cookieStore.get('authUser')

  const userType = auth && isUserType(auth.value) ? auth.value : undefined

  if (!userType) {
    redirect('/login')
  }

  return (
    <TaskProvider>
      <div className="bg-black min-h-screen text-white px-6 sm:px-12 md:px-24 py-10 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-between w-full h-fit">
          <p className="text-2xl font-bold text-nowrap">Все задания</p>
          <AllTaskSelect />
        </div>

        <TasksTable />
      </div>
    </TaskProvider>
  )
}

export default page
