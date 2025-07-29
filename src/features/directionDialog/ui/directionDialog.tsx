'use client'

import { FC, JSX } from 'react'

import { Button } from '@/shared/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/shared/components/ui/dialog'

interface DirectionDialogProps {
  direction: {
    icon: JSX.Element
    content: string
  }
}

export const DirectionDialog: FC<DirectionDialogProps> = ({ direction }) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full px-18 py-6 text-md cursor-pointer flex gap-2 items-center justify-center text-white bg-stone-900 rounded-md">
        <span>{direction.icon}</span>
        <span>{direction.content}</span>
      </DialogTrigger>
      <DialogContent className="bg-black border-stone-900 outline-stone-900">
        <DialogHeader>
          <DialogTitle className="text-white text-3xl">
            Системный аналитик
          </DialogTitle>
          <DialogDescription className="text-white">
            Связующее звено между бизнес-потребностями и IT-решениями. Именно он
            анализирует требования.
          </DialogDescription>
          <div></div>
          <DialogFooter className="!justify-center">
            <DialogClose asChild>
              <Button
                type="submit"
                className="cursor-pointer bg-lime-300 hover:bg-lime-400 active:bg-lime-500 text-black px-18 py-6">
                Подать заявку
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
