import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { cookies } from 'next/headers'
import { ViewTransitions } from 'next-view-transitions'

import { Navbar } from '@/widgets/navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Internship planner',
  description: 'Internship project'
}

function isUserType(value: string): value is 'intern' | 'mentor' | 'admin' {
  return ['intern', 'mentor', 'admin'].includes(value)
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const auth = cookieStore.get('authUser')

  const userType = auth && isUserType(auth.value) ? auth.value : undefined

  console.log('userType', userType)

  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-lime-300`}>
          {userType && <Navbar userType={userType} />}
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}
