'use client'

import { motion } from 'framer-motion'
import { Pencil } from 'lucide-react'

import { useAnimatedRouter } from '@/shared/lib'

export const UsersEditBtn = ({}) => {
  const { push } = useAnimatedRouter()

  return (
    <motion.button
      className="py-4 sm:px-4 px-4 cursor-pointer"
      onClick={() => push('/users/edit')}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      <Pencil />
    </motion.button>
  )
}
