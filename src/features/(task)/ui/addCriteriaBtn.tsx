'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { FC } from 'react'

interface AddCriteriaBtnProps {
  className: string
}

export const AddCriteriaBtn: FC<AddCriteriaBtnProps> = ({ className }) => {
  const addCriteriaBtnClassname = clsx(
    'text-white px-4 py-2 bg-stone-800 hover:bg-stone-900 active:bg-stone-950 flex gap-2 items-center text-base rounded-md max-w-fit cursor-pointer',
    className
  )

  return (
    <motion.button
      className={addCriteriaBtnClassname}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      <Plus className="w-4 h-4" />
      <span className="mb-1">Добавить критерий</span>
    </motion.button>
  )
}
