import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { cookies } from 'next/headers'
import { ViewTransitions } from 'next-view-transitions'

import { Navbar } from '@/widgets/navbar'

const groteskSans = Space_Grotesk({
  weight: '500',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Internship manager',
  description: 'Academy task'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const authToken = cookieStore.get('authToken')

  const userId = authToken?.value

  console.log('authToken', authToken)

  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${groteskSans.className} antialiased`}>
          {userId && <Navbar userId={userId} />}
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}
