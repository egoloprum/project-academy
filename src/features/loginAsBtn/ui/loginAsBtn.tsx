'use client'

import axios from 'axios'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

interface LoginAsBtnProps {
  type: string
}

export const LoginAsBtn: FC<LoginAsBtnProps> = ({ type }) => {
  const router = useRouter()

  const clickHandler = async (type: string) => {
    try {
      await axios.post('/api/login', {
        params: { userType: type }
      })

      router.refresh()
    } catch {}
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
