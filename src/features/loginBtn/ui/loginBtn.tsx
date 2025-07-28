'use client'

import { Button } from '@/shared/components/ui/button'
import { useAnimatedRouter } from '@/shared/lib/hooks'
import Link from 'next/link'

export const LoginBtn = ({}) => {
  const { push } = useAnimatedRouter()

  return (
    <Button className="bg-transparent w-full max-w-24 cursor-pointer hover:outline-2 outline-white text-base md:text-xl">
      <Link href="/login" onClick={() => push('/login')}>
        Вход
      </Link>
    </Button>
  )
}
