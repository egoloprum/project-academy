'use client'

import Cookies from 'js-cookie'
import { FC } from 'react'

import { Button } from '@/shared/components/ui/button'
import { useAnimatedRouter } from '@/shared/lib/hooks'

interface LoginAsBtnProps {
  type: string
}

export const LoginAsBtn: FC<LoginAsBtnProps> = ({ type }) => {
  const { push } = useAnimatedRouter()

  const clickHandler = (type: string) => {
    Cookies.set('authUser', type, { expires: 7 })

    push('/profile')
  }

  return (
    <Button
      className="bg-lime-300 hover:bg-lime-400 active:bg-lime-500 text-black text-xl max-w-108 w-full py-6 flex gap-1 cursor-pointer"
      onClick={() => clickHandler(type)}>
      <span>Войти как</span>
      <span>{type}</span>
    </Button>
  )
}
