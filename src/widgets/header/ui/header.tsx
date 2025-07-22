'use client'

import { LoginBtn } from '@/features/loginBtn'
import { RegisterBtn } from '@/features/registerBtn'
import { Logo } from '@/shared'
import Image from 'next/image'
import { FC } from 'react'

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="px-[48px] py-[24px] flex justify-between">
      <Logo className="w-[40px] h-[40px]" />
      <div className="flex gap-[16px]">
        <RegisterBtn />
        <LoginBtn />
      </div>
    </header>
  )
}
