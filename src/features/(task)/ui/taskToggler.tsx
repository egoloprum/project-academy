'use client'

import { motion } from 'framer-motion'

import { useTaskCompletion } from '../helpers/taskCompletionContext'

export const TaskToggler = ({
  userType
}: {
  userType: 'mentor' | 'intern'
}) => {
  const { activeForm, setActiveForm } = useTaskCompletion()

  return (
    <div className="flex">
      <motion.button
        className={`w-full text-center cursor-pointer hover:bg-stone-900 active:bg-stone-950`}
        onClick={() => setActiveForm('taskLeft')}>
        <motion.div
          className="relative p-4 h-full flex justify-center items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          <span
            className={`font-medium text-gray-400 ${activeForm === 'taskLeft' && 'text-lime-300'}`}>
            Тестовое задание
          </span>
          {activeForm === 'taskLeft' && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[1.5px] w-full bg-lime-300"
              layoutId="taskToggler-underline"
            />
          )}
        </motion.div>
      </motion.button>
      <motion.button
        className={`w-full text-center cursor-pointer hover:bg-stone-900 active:bg-stone-950`}
        onClick={() => setActiveForm('taskRight')}>
        <motion.div
          className="relative p-4 h-full flex justify-center items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          <span
            className={`font-medium text-gray-400 ${activeForm === 'taskRight' && 'text-lime-300'}`}>
            {userType === 'mentor' ? 'Критерии оценки' : 'История прохождения'}
          </span>
          {activeForm === 'taskRight' && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[1.5px] w-full bg-lime-300"
              layoutId="taskToggler-underline"
            />
          )}
        </motion.div>
      </motion.button>
    </div>
  )
}
