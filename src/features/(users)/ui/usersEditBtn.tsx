'use client'

import { motion } from 'framer-motion'
import { Pencil } from 'lucide-react'

import { useAnimatedRouter } from '@/shared/lib'

export const UsersEditBtn = ({ id }: { id: number }) => {
  const { push } = useAnimatedRouter()

  return (
    <motion.button
      className="py-4 sm:px-4 px-4 cursor-pointer"
      onClick={() => push(`/users/${id}/edit`)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      <Pencil className="w-5 h-5 md:w-6 md:h-6" />
    </motion.button>
  )
}
