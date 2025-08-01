'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import { useAnimatedRouter } from '@/shared/lib/hooks'

interface NavbarLinkBtnProps {
  url: string
  content: string
}

export const NavbarLinkBtn: FC<NavbarLinkBtnProps> = ({ url, content }) => {
  const { push } = useAnimatedRouter()

  return (
    <motion.button
      className="text-white text-md px-4 py-2 rounded-md hover:bg-stone-900 active:bg-stone-950 cursor-pointer text-nowrap"
      onClick={() => push(url)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      {content}
    </motion.button>
  )
}
