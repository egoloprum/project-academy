'use client'

import { motion } from 'framer-motion'
import { ArrowBigLeft } from 'lucide-react'

import { useTableContext } from '../helpers/ratingFinalContext'

export const RatingFinalToSelectBtn = ({}) => {
  const { moveToSelect, hasSelectedInFinal } = useTableContext()

  return (
    <motion.button
      className={`w-fit p-4 rounded-md ${hasSelectedInFinal ? 'bg-lime-300 hover:bg-lime-400 active:bg-lime-500 cursor-pointer' : 'bg-stone-500 cursor-not-allowed'}`}
      onClick={moveToSelect}
      disabled={!hasSelectedInFinal}
      whileHover={{ scale: hasSelectedInFinal ? 1.05 : 1 }}
      whileTap={{ scale: hasSelectedInFinal ? 0.95 : 1 }}>
      <ArrowBigLeft className="w-5 h-5 text-stone-800 rotate-90 lg:rotate-0" />
    </motion.button>
  )
}
