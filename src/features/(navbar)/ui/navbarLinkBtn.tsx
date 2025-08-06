'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import { useAnimatedRouter } from '@/shared/lib/hooks'
interface NavbarLinkBtnProps {
  url: string
  content: string
  isActive: boolean
}

export const NavbarLinkBtn: FC<NavbarLinkBtnProps> = ({
  url,
  content,
  isActive
}) => {
  const { push } = useAnimatedRouter()

  return (
    <motion.button
      className="text-md px-4 py-2 rounded-md hover:bg-stone-900 active:bg-stone-950 cursor-pointer text-nowrap"
      onClick={() => push(url)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      <span className={`${isActive ? 'text-lime-300' : 'text-gray-400'}`}>
        {content}
      </span>
    </motion.button>
  )
}
