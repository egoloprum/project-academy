'use client'

import { motion } from 'framer-motion'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/shared/components'

export const TaskSaveDialog = ({}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          className="px-4 py-2 bg-lime-300 hover:bg-lime-400 active:bg-lime-500 text-black font-medium rounded-md cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          Сохранить
        </motion.button>
      </DialogTrigger>
      <DialogContent className="bg-black border-stone-900 outline-stone-900 max-w-[90%] sm:max-w-[400px] w-full p-8 overflow-y-auto max-h-[90%] text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl mb-4">
            Вы точно хотите сохранить изменения?
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex gap-4">
          <DialogClose asChild>
            <motion.button
              className="px-4 py-2 bg-lime-100 hover:bg-lime-200 active:bg-lime-300 text-black font-medium rounded-md cursor-pointer w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}>
              Назад
            </motion.button>
          </DialogClose>
          <DialogClose asChild>
            <motion.button
              className="px-4 py-2 bg-lime-300 hover:bg-lime-400 active:bg-lime-500 text-black font-medium rounded-md cursor-pointer w-full text-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}>
              Сохранить изменения
            </motion.button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
