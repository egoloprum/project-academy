'use client'

import { motion } from 'framer-motion'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label
} from '@/shared/components'

export const TaskEditDialog = ({}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          className="px-4 py-2 bg-lime-100 hover:bg-lime-200 active:bg-lime-300 text-black font-medium rounded-md cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          Изменить время
        </motion.button>
      </DialogTrigger>
      <DialogContent className="bg-black border-stone-900 outline-stone-900 max-w-[90%] sm:max-w-[400px] w-full p-8 overflow-y-auto max-h-[90%] text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Установить время
          </DialogTitle>
        </DialogHeader>
        <form action="" className="grid gap-4">
          <div className="">
            <Label className="mb-2" htmlFor="days">
              Дни
            </Label>
            <Input
              id="days"
              name="days"
              className="bg-stone-800 hover:bg-stone-900 focus:bg-stone-950 border-none outline-none"
              type="number"
              min={0}
              max={7}
              defaultValue={3}
            />
          </div>
          <div className="">
            <Label className="mb-2" htmlFor="hours">
              Часы
            </Label>
            <Input
              id="hours"
              name="hours"
              className="bg-stone-800 hover:bg-stone-900 focus:bg-stone-950 border-none outline-none"
              type="number"
              min={0}
              max={23}
              defaultValue={15}
            />
          </div>
          <div className="">
            <Label className="mb-2" htmlFor="minutes">
              Минуты
            </Label>
            <Input
              id="minutes"
              name="minutes"
              className="bg-stone-800 hover:bg-stone-900 focus:bg-stone-950 border-none outline-none"
              type="number"
              min={0}
              max={59}
              defaultValue={30}
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <motion.button
                className="px-4 py-2 bg-lime-300 hover:bg-lime-400 active:bg-lime-500 text-black font-medium rounded-md cursor-pointer w-full mt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
                Сохранить
              </motion.button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
