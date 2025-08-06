'use client'

import { motion } from 'framer-motion'

import { useGenerationFormToggler } from '../helpers/generationFormTogglerContext'

export const GenerationFormToggler = ({ className }: { className: string }) => {
  const { activeForm, setActiveForm } = useGenerationFormToggler()

  return (
    <section className={`flex gap-4 justify-end ${className}`}>
      <div className="flex flex-col sm:flex-row w-full lg:w-fit">
        <motion.button
          type="button"
          className="text-start sm:text-center text-nowrap cursor-pointer hover:bg-stone-900 active:bg-stone-950 w-full lg:w-fit"
          onClick={() => setActiveForm('initial')}>
          <motion.div
            className="relative p-4 sm:py-2 h-full flex sm:justify-center items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}>
            <span
              className={`font-medium text-gray-400 ${activeForm === 'initial' && 'text-lime-300'}`}>
              Стартовые значения
            </span>
            {activeForm === 'initial' && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-full w-[1.5px] sm:h-[1.5px] sm:w-full bg-lime-300"
                layoutId="generationFormToggler-underline"
              />
            )}
          </motion.div>
        </motion.button>
        <motion.button
          type="button"
          className="text-start sm:text-center text-nowrap cursor-pointer hover:bg-stone-900 active:bg-stone-950 w-full lg:w-fit"
          onClick={() => setActiveForm('detail')}>
          <motion.div
            className="relative p-4 sm:py-2 h-full flex sm:justify-center items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}>
            <span
              className={`font-medium text-gray-400 ${activeForm === 'detail' && 'text-lime-300'}`}>
              Параметры набора
            </span>
            {activeForm === 'detail' && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-full w-[1.5px] sm:h-[1.5px] sm:w-full bg-lime-300"
                layoutId="generationFormToggler-underline"
              />
            )}
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
