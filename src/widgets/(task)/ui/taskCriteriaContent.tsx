'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { useTaskCriteria } from '@/features/(task)'

import { CriteriaWidget } from './criteriaWidget'
import { TaskWidget } from './taskWidget'

export const TaskCriteriaContent = ({}) => {
  const { activeForm } = useTaskCriteria()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeForm}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}>
        {activeForm === 'task' ? <TaskWidget /> : <CriteriaWidget />}
      </motion.div>
    </AnimatePresence>
  )
}
