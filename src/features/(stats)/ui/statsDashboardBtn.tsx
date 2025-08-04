'use client'

import { motion } from 'framer-motion'

import { useAnimatedRouter } from '@/shared/lib'

export const StatsDashboardBtn = ({}) => {
  const { push } = useAnimatedRouter()

  return (
    <motion.button
      className="px-4 py-2 text-black text-nowrap rounded-md cursor-pointer font-medium bg-lime-100 hover:bg-lime-200 active:bg-lime-300"
      onClick={() => push('/stats/dashboard')}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      Посмотреть дашборд
    </motion.button>
  )
}
