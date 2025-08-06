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
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/components'

import { SelectDirectionData, SelectMentorsData } from '../helpers/data'

export const DirectionAddDialog = ({}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          className="px-4 py-2 pl-2 bg-stone-800 hover:bg-stone-900 active:bg-stone-950 font-medium rounded-md cursor-pointer flex gap-2 items-center text-sm"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          <Plus className="w-4 h-4" />
          <span className="mb-1">Добавить направление</span>
        </motion.button>
      </DialogTrigger>
      <DialogContent className="bg-black border-stone-900 outline-stone-900 max-w-[90%] sm:max-w-[400px] w-full p-4 sm:p-8 overflow-y-auto max-h-[90%] text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-xl mb-4">
            Добавить направление
          </DialogTitle>
        </DialogHeader>
        <form action="" className="flex flex-col gap-4">
          <div>
            <Label htmlFor="select-direction" className="text-gray-400 mb-2">
              Направление
            </Label>
            <Select>
              <SelectTrigger
                id="select-direction"
                className="w-full bg-stone-800 border-none text-md">
                <div className="flex items-center gap-2">
                  <SelectValue placeholder="Выбирай направление" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-stone-800 border-none">
                {SelectDirectionData.map(data => (
                  <SelectItem
                    key={data.value}
                    value={data.value}
                    className="focus:bg-stone-900 active:bg-stone-950 text-white focus:text-white text-md">
                    <span>{data.content}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="select-mentor" className="text-gray-400 mb-2">
              Наставник
            </Label>
            <Select>
              <SelectTrigger
                id="select-mentor"
                className="w-full bg-stone-800 border-none text-md">
                <div className="flex items-center gap-2">
                  <SelectValue placeholder="Выбирай наставника" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-stone-800 border-none">
                {SelectMentorsData.map(data => (
                  <SelectItem
                    key={data.value}
                    value={data.value}
                    className="focus:bg-stone-900 active:bg-stone-950 text-white focus:text-white text-md">
                    <span>{data.content}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
