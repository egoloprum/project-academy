'use client'

import { motion } from 'framer-motion'

import { useChecking } from '../helpers/checkingContext'

export const CheckingToggler = ({}) => {
  const { activeForm, setActiveForm } = useChecking()

  return (
    <div className="flex mt-4 sm:mt-8 md:mt-4 lg:mt-12">
      <motion.button
        className={`w-full text-center cursor-pointer hover:bg-stone-900 active:bg-stone-950`}
        onClick={() => setActiveForm('pending')}>
        <motion.div
          className="relative p-4 h-full flex justify-center items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          <span
            className={`font-medium text-gray-400 ${activeForm === 'pending' && 'text-lime-300'}`}>
            Ожидают проверки
          </span>
          {activeForm === 'pending' && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[1.5px] w-full bg-lime-300"
              layoutId="checkingToggler-underline"
            />
          )}
        </motion.div>
      </motion.button>
      <motion.button
        className={`w-full text-center cursor-pointer hover:bg-stone-900 active:bg-stone-950`}
        onClick={() => setActiveForm('done')}>
        <motion.div
          className="relative p-4 h-full flex justify-center items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          <span
            className={`font-medium text-gray-400 ${activeForm === 'done' && 'text-lime-300'}`}>
            Оценено
          </span>
          {activeForm === 'done' && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[1.5px] w-full bg-lime-300"
              layoutId="checkingToggler-underline"
            />
          )}
        </motion.div>
      </motion.button>
    </div>
  )
}
