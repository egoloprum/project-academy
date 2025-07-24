import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { PageWrapper } from '@/widgets/pageWrapper'

const page = async ({}) => {
  const cookieStore = await cookies()
  const authToken = cookieStore.get('authToken')

  const userId = authToken?.value

  console.log('authToken', authToken)

  if (!userId) {
    redirect('/login')
  }

  return (
    <PageWrapper>
      <div className="bg-(--black-main) min-h-[100vh] h-full text-(--white-main)">
        profile
      </div>
    </PageWrapper>
  )
}

export default page
