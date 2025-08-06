import {
  DirectionAddDialog,
  DirectionGenerationSelect
} from '@/features/(directions)'
import { isUserType } from '@/shared/lib'
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
    <main className="bg-black min-h-screen text-white px-6 sm:px-12 md:px-24 py-10 flex flex-col gap-4">
      <p className="text-2xl font-bold mb-4 sm:mb-8">
        Информация о направлениях
      </p>
      <DirectionGenerationSelect />
      <div>
        <DirectionAddDialog />
      </div>
    </main>
  )
}

export default page
