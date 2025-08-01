'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'

import { TaskDeleteBtn } from '@/features/(task)'
import { useTaskContext } from '@/features/(task)/helpers/taskContext'

export const TasksTable: FC = () => {
  const { currentTasks, selectedGeneration } = useTaskContext()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedGeneration}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}>
        <motion.ul
          className="grid grid-cols-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}>
          {currentTasks.map((task, index) => (
            <li
              key={index}
              className="sm:px-4 md:px-6 lg:px-8 border-b border-stone-800 flex items-center justify-between">
              <span className="py-4 sm:px-4 px-0">{task}</span>
              <TaskDeleteBtn />
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  )
}
