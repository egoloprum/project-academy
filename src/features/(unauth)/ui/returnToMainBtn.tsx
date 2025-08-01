'use client'

import { motion } from 'framer-motion'
import { Undo2 } from 'lucide-react'

import { useAnimatedRouter } from '@/shared/lib/hooks'

export const ReturnToMainBtn = ({}) => {
  const { push } = useAnimatedRouter()

  return (
    <motion.button
      className="fixed top-6 left-6 text-md cursor-pointer bg-stone-800 hover:bg-stone-900 active:bg-stone-950 rounded-md py-2 px-4 text-white flex gap-2"
      onClick={() => push('/')}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      <Undo2 />
      <span>Назад на главную</span>
    </motion.button>
  )
}
