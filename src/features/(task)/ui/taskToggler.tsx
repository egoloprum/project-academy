'use client'

import { motion } from 'framer-motion'

import { useTaskCriteria } from '../helpers/taskCriteriaContext'

export const TaskToggler = ({}) => {
  const { activeForm, setActiveForm } = useTaskCriteria()

  return (
    <div className="flex">
      <motion.button
        className={`w-full text-center cursor-pointer hover:bg-stone-900 active:bg-stone-950`}
        onClick={() => setActiveForm('task')}>
        <motion.div
          className="relative p-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          <span>Тестовое задание</span>
          {activeForm === 'task' && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[1.5px] w-full bg-lime-300"
              layoutId="underline"
            />
          )}
        </motion.div>
      </motion.button>
      <motion.button
        className={`w-full text-center cursor-pointer hover:bg-stone-900 active:bg-stone-950`}
        onClick={() => setActiveForm('criteria')}>
        <motion.div
          className="relative p-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          <span>Критерии оценки</span>
          {activeForm === 'criteria' && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[1.5px] w-full bg-lime-300"
              layoutId="underline"
            />
          )}
        </motion.div>
      </motion.button>
    </div>
  )
}
