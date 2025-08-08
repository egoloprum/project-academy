'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { FC } from 'react'

interface CriteriaAddBtnProps {
  className: string
}

export const CriteriaAddBtn: FC<CriteriaAddBtnProps> = ({ className }) => {
  const criteriaAddBtnClassname = clsx(
    'text-white px-4 py-2 bg-stone-800 hover:bg-stone-900 active:bg-stone-950 flex gap-2 items-center text-base rounded-md max-w-fit cursor-pointer',
    className
  )

  return (
    <motion.button
      className={criteriaAddBtnClassname}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      <Plus className="w-4 h-4" />
      <span className="mb-1">Добавить критерий</span>
    </motion.button>
  )
}
