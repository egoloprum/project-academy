'use client'

import { motion } from 'framer-motion'

import { SendApplicationBtn } from '@/features/sendApplicationBtn'

import { stagesList } from '../helpers/data'

export const StagesWidget = () => {
  return (
    <div className="mx-6 sm:mx-12 md:mx-24 py-10 sm:my-15 md:my-20 gap-5 md:gap-10 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl text-white">Этапы</h2>
      <motion.ul
        className="flex flex-col gap-4 md:gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}>
        {stagesList.map((stage, index) => (
          <motion.li
            className="flex flex-col sm:flex-row gap-6 items-center"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}>
            <span className="text-white text-xl border border-lime-300 rounded-full h-12 w-12 shrink-0 sm:flex items-center justify-center hidden">
              {++index}
            </span>
            <div className="bg-stone-950 rounded-xl px-8 py-12 flex flex-col gap-6 w-full">
              <p className="text-white text-xl">{stage.title}</p>
              <p className="text-gray-400">{stage.content}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
      <SendApplicationBtn />
    </div>
  )
}
