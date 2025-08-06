'use client'

import { motion } from 'framer-motion'
import { Undo2 } from 'lucide-react'
import { FC, ReactNode } from 'react'

import { useAnimatedRouter } from '@/shared/lib'

interface GoBackBtnProps {
  url: string
  children: ReactNode
}

export const GoBackBtn: FC<GoBackBtnProps> = ({ url, children }) => {
  const { push } = useAnimatedRouter()

  return (
    <motion.button
      className="hover:bg-stone-900 active:bg-stone-950 text-white w-fit px-12 pl-8 py-2 rounded-md flex items-center gap-1 cursor-pointer font-medium"
      onClick={() => push(url)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}>
      <Undo2 className="w-5 h-5" />
      {children}
    </motion.button>
  )
}
