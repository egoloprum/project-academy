'use client'

import { motion } from 'framer-motion'

import { useChecking } from '../helpers/checkingContext'

export const CheckingToggler = ({}) => {
  const { checkingToggler, setCheckingToggler } = useChecking()

  return (
    <div className="flex flex-col sm:flex-row">
      <motion.button
        className={`w-full cursor-pointer hover:bg-stone-900 active:bg-stone-950`}
        onClick={() => setCheckingToggler('pending')}>
        <motion.div
          className="relative p-4 h-full flex justify-start sm:justify-center items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          <span
            className={`font-medium text-gray-400 ${checkingToggler === 'pending' && 'text-lime-300'}`}>
            Ожидают проверки
          </span>
          {checkingToggler === 'pending' && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 sm:h-[1.5px] sm:w-full w-[1.5px] h-full bg-lime-300"
              layoutId="checkingToggler-underline"
            />
          )}
        </motion.div>
      </motion.button>
      <motion.button
        className={`w-full cursor-pointer hover:bg-stone-900 active:bg-stone-950`}
        onClick={() => setCheckingToggler('done')}>
        <motion.div
          className="relative p-4 h-full flex justify-start sm:justify-center items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          <span
            className={`font-medium text-gray-400 ${checkingToggler === 'done' && 'text-lime-300'}`}>
            Оценено
          </span>
          {checkingToggler === 'done' && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 sm:h-[1.5px] sm:w-full w-[1.5px] h-full bg-lime-300"
              layoutId="checkingToggler-underline"
            />
          )}
        </motion.div>
      </motion.button>
    </div>
  )
}
