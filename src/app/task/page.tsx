import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { TaskProvider, TaskToggler } from '@/features/(task)'
import { isUserType } from '@/shared/lib'
import { TaskContent } from '@/widgets/(task)'

export default async function page({}) {
  const cookieStore = await cookies()
  const auth = cookieStore.get('authUser')

  const userType = auth && isUserType(auth.value) ? auth.value : undefined

  if (!userType) {
    redirect('/login')
  }

  if (userType === 'admin') {
    redirect('/profile')
  }

  return (
    <main className="bg-black min-h-screen text-white px-6 sm:px-12 md:px-24 py-10 flex flex-col gap-8">
      <p className="text-2xl font-bold mb-4">
        Тестовое System Analyst / Поток 3
      </p>
      <TaskProvider>
        <TaskToggler userType={userType} />
        <TaskContent userType={userType} />
      </TaskProvider>
    </main>
  )
}
