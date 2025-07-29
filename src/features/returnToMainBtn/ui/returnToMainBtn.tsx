'use client'

import { Undo2 } from 'lucide-react'

import { Button } from '@/shared/components/ui/button'
import { useAnimatedRouter } from '@/shared/lib/hooks'

export const ReturnToMainBtn = ({}) => {
  const { push } = useAnimatedRouter()

  return (
    <Button
      className="fixed top-6 left-6 text-md cursor-pointer hover:bg-stone-800 active:bg-stone-900"
      onClick={() => push('/')}>
      <Undo2 />
      <span>Назад на главную</span>
    </Button>
  )
}
