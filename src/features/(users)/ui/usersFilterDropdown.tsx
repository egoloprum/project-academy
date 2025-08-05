'use client'

import { PopoverClose } from '@radix-ui/react-popover'
import { motion } from 'framer-motion'
import { Funnel, X } from 'lucide-react'

import { Popover, PopoverContent, PopoverTrigger } from '@/shared/components'

import { UsersFilterForm } from './usersFilterForm'

export const UsersFilterDropdown = ({}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <motion.button
          className="p-2 rounded-md cursor-pointer bg-stone-800 active:bg-stone-900"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <Funnel className="w-5 h-5" />
        </motion.button>
      </PopoverTrigger>
      <PopoverContent
        className="w-60 bg-stone-900 border-stone-800 text-white p-0"
        align="end">
        <div className="flex gap-2 p-2 justify-between items-center">
          <p className="font-semibold">Фильтры</p>
          <PopoverClose className="p-2 cursor-pointer">
            <X className="w-4 h-4" />
          </PopoverClose>
        </div>
        <UsersFilterForm />
      </PopoverContent>
    </Popover>
  )
}
