import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ViewTransitions } from 'next-view-transitions'

const groteskSans = Space_Grotesk({
  weight: '500',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Internship manager',
  description: 'Academy task'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${groteskSans.className} antialiased`}>
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}
