'use client'

import { motion } from 'framer-motion'
import { Trash2 } from 'lucide-react'

export const TasksDeleteBtn = ({}) => {
  return (
    <motion.button
      className="py-4 sm:px-4 pr-0 cursor-pointer text-red-500"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      <Trash2 />
    </motion.button>
  )
}
