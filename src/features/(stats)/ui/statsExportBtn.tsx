'use client'

import { motion } from 'framer-motion'

export const StatsExportBtn = ({}) => {
  return (
    <motion.button
      className="px-4 py-2 text-black text-nowrap rounded-md cursor-pointer font-medium bg-lime-300 hover:bg-lime-400 active:bg-lime-500"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      Экспортировать в xlsx
    </motion.button>
  )
}
