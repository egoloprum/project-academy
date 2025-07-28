'use client'

import { Button } from '@/shared/components/ui/button'

export const SendApplicationBtn = ({}) => {
  return (
    <Button className="bg-lime-300 hover:bg-lime-400 active:bg-lime-500 cursor-pointer text-black text-md max-w-48 w-full self-center mt-5">
      Подать заявку
    </Button>
  )
}
