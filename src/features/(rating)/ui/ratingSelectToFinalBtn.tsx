'use client'

import { motion } from 'framer-motion'
import { ArrowBigRight } from 'lucide-react'

import { useTableContext } from '../helpers/ratingFinalContext'

export const RatingSelectToFinalBtn = ({}) => {
  const { moveToFinal, hasSelectedInSelect } = useTableContext()

  return (
    <motion.button
      className={`w-fit p-4 rounded-md ${hasSelectedInSelect ? 'bg-lime-300 hover:bg-lime-400 active:bg-lime-500 cursor-pointer' : 'bg-stone-500 cursor-not-allowed'}`}
      onClick={moveToFinal}
      disabled={!hasSelectedInSelect}
      whileHover={{ scale: hasSelectedInSelect ? 1.05 : 1 }}
      whileTap={{ scale: hasSelectedInSelect ? 0.95 : 1 }}>
      <ArrowBigRight className="w-5 h-5 text-stone-800 rotate-90 lg:rotate-0" />
    </motion.button>
  )
}
