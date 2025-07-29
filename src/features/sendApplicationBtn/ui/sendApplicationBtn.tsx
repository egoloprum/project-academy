'use client'

import { motion } from 'framer-motion'

export const SendApplicationBtn = ({}) => {
  return (
    <motion.button
      className="bg-lime-300 hover:bg-lime-400 active:bg-lime-500 cursor-pointer text-black text-md max-w-48 w-full self-center mt-5 py-4 rounded-md font-medium"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      Подать заявку
    </motion.button>
  )
}
