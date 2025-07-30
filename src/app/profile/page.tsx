import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const page = async ({}) => {
  const cookieStore = await cookies()
  const auth = cookieStore.get('authUser')

  if (!auth) {
    redirect('/login')
  }

  return <div className="bg-black min-h-screen text-white">PROFILE</div>
}

export default page
