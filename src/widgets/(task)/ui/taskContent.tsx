'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { useTaskCompletion } from '@/features/(task)'

import { CriteriaWidget } from './criteriaWidget'
import { TaskHistoryWidget } from './taskHistoryWidget'
import { TaskInternWidget } from './taskInternWidget'
import { TaskMentorWidget } from './taskMentorWidget'

export const TaskContent = ({
  userType
}: {
  userType: 'mentor' | 'intern'
}) => {
  const { activeForm } = useTaskCompletion()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeForm}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}>
        {userType === 'mentor' ? (
          activeForm === 'taskLeft' ? (
            <TaskMentorWidget />
          ) : (
            <CriteriaWidget />
          )
        ) : activeForm === 'taskLeft' ? (
          <TaskInternWidget />
        ) : (
          <TaskHistoryWidget />
        )}
      </motion.div>
    </AnimatePresence>
  )
}
