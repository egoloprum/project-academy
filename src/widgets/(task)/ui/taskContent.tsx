'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { useTask } from '@/features/(task)'

import { CriteriaTable } from './criteriaTable'
import { TaskHistoryTable } from './taskHistoryTable'
import { TaskInternWidget } from './taskInternWidget'
import { TaskMentorWidget } from './taskMentorWidget'

export const TaskContent = ({
  userType
}: {
  userType: 'mentor' | 'intern'
}) => {
  const { taskTogglerFlag } = useTask()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={taskTogglerFlag}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}>
        {userType === 'mentor' ? (
          taskTogglerFlag === 'taskLeft' ? (
            <TaskMentorWidget />
          ) : (
            <CriteriaTable />
          )
        ) : taskTogglerFlag === 'taskLeft' ? (
          <TaskInternWidget />
        ) : (
          <TaskHistoryTable />
        )}
      </motion.div>
    </AnimatePresence>
  )
}
