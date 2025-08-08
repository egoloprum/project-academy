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
    'text-white font-medium text-base px-10 py-2 bg-stone-800 hover:bg-stone-900 active:bg-stone-950 flex gap-2 items-center justify-center sm:justify-start rounded-md w-full sm:w-fit cursor-pointer',
    className
  )

  return (
    <motion.button
      className={criteriaAddBtnClassname}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      <Plus className="w-4 h-4" />
      <span className="">Добавить критерий</span>
    </motion.button>
  )
}
