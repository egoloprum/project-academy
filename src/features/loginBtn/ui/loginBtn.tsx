'use client'

import { Button } from '@/shared/ui'
import { FC } from 'react'

interface LoginBtnProps {}

export const LoginBtn: FC<LoginBtnProps> = ({}) => {
  return (
    <Button btnType="primary" href="/login">
      Вход
    </Button>
  )
}
