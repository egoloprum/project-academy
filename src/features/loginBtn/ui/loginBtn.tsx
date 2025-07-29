'use client'

import { Button } from '@/shared/components/ui/button'
import { useAnimatedRouter } from '@/shared/lib/hooks'

export const LoginBtn = ({}) => {
  const { push } = useAnimatedRouter()

  return (
    <Button
      className="bg-transparent w-full max-w-24 cursor-pointer hover:outline-2 outline-white text-base md:text-xl"
      onClick={() => push('/login')}>
      Вход
    </Button>
  )
}
