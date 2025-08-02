'use client'

import { AnimatePresence, motion } from 'framer-motion'

import {
  TaskAddAnswerBtn,
  TaskAddAnswerForm,
  useTaskAddAnswer
} from '@/features/(task)'

export const TaskAddAnswerContent = ({}) => {
  const { activeForm } = useTaskAddAnswer()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeForm}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}>
        {activeForm === 'formOpen' ? (
          <TaskAddAnswerForm />
        ) : (
          <TaskAddAnswerBtn />
        )}
      </motion.div>
    </AnimatePresence>
  )
}
