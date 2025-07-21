'use client'

import { Button } from '@/shared/ui'
import { FC } from 'react'

interface RegisterBtnProps {}

export const RegisterBtn: FC<RegisterBtnProps> = ({}) => {
  return (
    <Button btnType="secondary" href="/register">
      Регистрация
    </Button>
  )
}
