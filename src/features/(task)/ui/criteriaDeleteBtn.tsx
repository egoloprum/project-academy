'use client'

import { motion } from 'framer-motion'
import { Trash2 } from 'lucide-react'

export const CriteriaDeleteBtn = ({}) => {
  return (
    <motion.button
      className="p-4 pr-0 sm:px-4 cursor-pointer text-red-500"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      <Trash2 />
    </motion.button>
  )
}
