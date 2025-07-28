'use client'

import Image from 'next/image'

import { LoginBtn } from '@/features/loginBtn'

export const Header = ({}) => {
  return (
    <nav className="py-6 px-6 sm:px-12 md:px-24 flex gap-4 justify-between items-center border-b border-stone-900">
      <div className="flex gap-4 items-center">
        <Image src="/logo.svg" height={50} width={50} alt="logo" />
        <p className="text-lime-300 text-xl">Академия Абдрашитова</p>
      </div>
      <LoginBtn />
    </nav>
  )
}
