'use client'

import { motion } from 'framer-motion'
import { Pencil } from 'lucide-react'

export const CriteriaEditBtn = ({}) => {
  return (
    <motion.button
      className="py-4 sm:px-4 px-4 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      <Pencil className="w-5 sm:w-6" />
    </motion.button>
  )
}
