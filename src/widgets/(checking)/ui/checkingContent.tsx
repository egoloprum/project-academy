'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { useChecking } from '@/features/(checking)'

import {
  checkingTableDoneData,
  checkingTablePendingData
} from '../helpers/data'

import { CheckingTable } from './checkingTable'

export const CheckingContent = ({}) => {
  const { activeForm } = useChecking()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeForm}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}>
        <CheckingTable
          tableData={
            activeForm === 'pending'
              ? checkingTablePendingData
              : checkingTableDoneData
          }
        />
      </motion.div>
    </AnimatePresence>
  )
}
