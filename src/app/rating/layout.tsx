import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

import { isUserType } from '@/shared/lib'

const layout = async ({
  admin,
  mentor
}: {
  admin: ReactNode
  mentor: ReactNode
}) => {
  const cookieStore = await cookies()
  const auth = cookieStore.get('authUser')

  const userType = auth && isUserType(auth.value) ? auth.value : undefined

  if (!userType) {
    redirect('/login')
  }

  if (userType === 'intern') {
    redirect('/profile')
  }

  return (
    <main className="bg-black min-h-screen text-white px-6 sm:px-12 md:px-24 py-10 flex flex-col gap-8">
      {userType === 'mentor' && mentor}
      {userType === 'admin' && admin}
    </main>
  )
}

export default layout
