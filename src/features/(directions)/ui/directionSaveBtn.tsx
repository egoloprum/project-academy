'use client'

import { motion } from 'framer-motion'

export const DirectionSaveBtn = ({}) => {
  return (
    <motion.button
      type="button"
      className="px-12 py-2 bg-lime-300 hover:bg-lime-400 active:bg-lime-500 text-black font-medium rounded-md cursor-pointer mt-4 sm:w-fit"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      Сохранить
    </motion.button>
  )
}
