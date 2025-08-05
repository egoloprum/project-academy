'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

import { useAnimatedRouter } from '@/shared/lib'

export const DashboardGoBackBtn = ({}) => {
  const { push } = useAnimatedRouter()

  return (
    <motion.button
      className="hover:bg-stone-900 active:bg-stone-950 text-white w-fit pl-2 pr-4 py-2 rounded-md flex items-center gap-1 cursor-pointer font-medium"
      onClick={() => push('/stats')}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      <ArrowLeft className="w-5 h-5" />
      <span>Назад к списку</span>
    </motion.button>
  )
}
