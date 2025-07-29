'use client'

import { motion } from 'framer-motion'
import Cookies from 'js-cookie'
import { FC } from 'react'

import { useAnimatedRouter } from '@/shared/lib/hooks'

interface LoginAsBtnProps {
  type: string
}

export const LoginAsBtn: FC<LoginAsBtnProps> = ({ type }) => {
  const { push } = useAnimatedRouter()

  const clickHandler = (type: string) => {
    Cookies.set('authUser', type, { expires: 7 })

    push('/profile')
  }

  return (
    <motion.button
      className="bg-lime-300 hover:bg-lime-400 active:bg-lime-500 text-black text-xl max-w-108 w-full py-4 rounded-md flex justify-center gap-1 cursor-pointer font-medium"
      onClick={() => clickHandler(type)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      <span>Войти как</span>
      <span>{type}</span>
    </motion.button>
  )
}
