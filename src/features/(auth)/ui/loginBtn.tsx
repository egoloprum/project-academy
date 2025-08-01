'use client'

import { motion } from 'framer-motion'

import { useAnimatedRouter } from '@/shared/lib/hooks'

export const LoginBtn = ({}) => {
  const { push } = useAnimatedRouter()

  return (
    <motion.button
      className="bg-transparent w-full max-w-24 cursor-pointer text-base md:text-xl text-white hover:bg-stone-900 active:bg-stone-950 rounded-md py-2"
      onClick={() => push('/login')}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      Вход
    </motion.button>
  )
}
