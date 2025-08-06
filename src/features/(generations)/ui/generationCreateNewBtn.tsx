'use client'

import { FC } from 'react'

import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useAnimatedRouter } from '@/shared/lib'

export const GenerationCreateNewBtn = ({}) => {
  const { push } = useAnimatedRouter()

  return (
    <motion.button
      className="bg-stone-800 hover:bg-stone-900 active:bg-stone-950 cursor-pointer rounded-md text-white font-medium flex gap-1 items-center w-fit px-4 py-2"
      onClick={() => push('/generations/create')}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      <Plus className="w-4 h-4" />
      <span>Создать новый набор</span>
    </motion.button>
  )
}
