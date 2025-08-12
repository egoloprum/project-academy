'use client'

import { motion } from 'framer-motion'

import { useTask } from '../helpers/taskContext'

export const TaskToggler = ({
  userType
}: {
  userType: 'mentor' | 'intern'
}) => {
  const { taskTogglerFlag, setTaskTogglerFlag } = useTask()

  return (
    <div className="flex flex-col sm:flex-row text-nowrap">
      <motion.button
        className={`w-full cursor-pointer hover:bg-stone-900 active:bg-stone-950`}
        onClick={() => setTaskTogglerFlag('taskLeft')}>
        <motion.div
          className="relative p-4 h-full flex justify-start sm:justify-center items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          <span
            className={`font-medium text-gray-400 ${taskTogglerFlag === 'taskLeft' && 'text-lime-300'}`}>
            Тестовое задание
          </span>
          {taskTogglerFlag === 'taskLeft' && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-full w-[1.5px] sm:h-[1.5px] sm:w-full bg-lime-300"
              layoutId="taskToggler-underline"
            />
          )}
        </motion.div>
      </motion.button>

      <motion.button
        className={`w-full cursor-pointer hover:bg-stone-900 active:bg-stone-950`}
        onClick={() => setTaskTogglerFlag('taskRight')}>
        <motion.div
          className="relative p-4 h-full flex justify-start sm:justify-center items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          <span
            className={`font-medium text-gray-400 ${taskTogglerFlag === 'taskRight' && 'text-lime-300'}`}>
            {userType === 'mentor' ? 'Критерии оценки' : 'История прохождения'}
          </span>
          {taskTogglerFlag === 'taskRight' && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-full w-[1.5px] sm:h-[1.5px] sm:w-full bg-lime-300"
              layoutId="taskToggler-underline"
            />
          )}
        </motion.div>
      </motion.button>
    </div>
  )
}
