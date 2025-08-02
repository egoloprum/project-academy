import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import {
  CheckingDropdown,
  CheckingProvider,
  CheckingToggler
} from '@/features/(checking)'
import { isUserType } from '@/shared/lib'
import { CheckingContent } from '@/widgets/(checking)'

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
    <main className="bg-black min-h-screen text-white px-6 sm:px-12 md:px-24 py-10 flex flex-col gap-4">
      <p className="text-2xl font-bold">System Analyst / Поток 3</p>
      <CheckingProvider>
        <CheckingToggler />
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mt-4 sm:mt-8">
          <p className="text-nowrap">
            <span>Количество тестовых заданий</span>
            <span className="font-medium ml-2">96</span>
          </p>
          <CheckingDropdown />
        </div>
        <CheckingContent />
      </CheckingProvider>
    </main>
  )
}

export default page
