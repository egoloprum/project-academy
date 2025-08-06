'use client'

import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label
} from '@/shared/components'

export const DirectionCreateDialog = ({}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          className="px-4 py-2 pl-2 bg-stone-800 hover:bg-stone-900 active:bg-stone-950 font-medium rounded-md cursor-pointer flex gap-2 items-center text-sm"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          <Plus className="w-4 h-4" />
          <span className="mb-1">Создать направление</span>
        </motion.button>
      </DialogTrigger>
      <DialogContent className="bg-black border-stone-900 outline-stone-900 max-w-[90%] sm:max-w-[400px] w-full p-4 sm:p-8 overflow-y-auto max-h-[90%] text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-xl mb-4">
            Создать направление
          </DialogTitle>
        </DialogHeader>
        <form action="" className="flex flex-col gap-4">
          <div>
            <Label htmlFor="input-direction" className="text-gray-400 mb-2">
              Введите название направления
            </Label>
            <Input id="input-direction" className="border-none bg-stone-800" />
          </div>
          <div>
            <Label htmlFor="input-mentor" className="text-gray-400 mb-2">
              Наставник
            </Label>
            <Input
              id="input-mentor"
              className="border-none bg-stone-800"
              disabled
            />
            <p className="text-gray-500 text-xs mt-1">
              Чтобы назначить наставника, перейдите в раздел “Пользователи”
            </p>
          </div>
          <DialogClose asChild>
            <motion.button
              type="button"
              className="px-4 py-2 pl-2 bg-lime-300 hover:bg-lime-400 active:bg-lime-500 text-black font-medium rounded-md cursor-pointer mt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}>
              Сохранить
            </motion.button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  )
}
