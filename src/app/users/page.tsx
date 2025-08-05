import { isUserType } from '@/shared/lib'
import { UsersTable } from '@/widgets/(users)'
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
    <main className="bg-black min-h-screen text-white px-6 sm:px-12 md:px-24 py-10 flex flex-col gap-8 sm:gap-12 md:gap-8 lg:gap-16">
      <p className="text-2xl font-bold">Пользователи</p>
      <section>
        <UsersTable />
      </section>
    </main>
  )
}

export default page
