'use client'

import Cookies from 'js-cookie'
import { redirect } from 'next/navigation'

import { PageWrapper } from '@/widgets/pageWrapper'

const page = ({}) => {
  const authToken = Cookies.get('authToken')

  if (!authToken) {
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
