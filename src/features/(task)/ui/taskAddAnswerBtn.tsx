'use client'

import { motion } from 'framer-motion'

import { useTaskAddAnswer } from '../helpers/taskAddAnswerContext'

export const TaskAddAnswerBtn = ({}) => {
  const { setActiveForm } = useTaskAddAnswer()

  return (
    <motion.button
      className="px-4 py-2 w-fit rounded-md font-medium text-black bg-lime-300 hover:bg-lime-400 active:bg-lime-500 cursor-pointer"
      onClick={() => setActiveForm('formOpen')}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      Добавить ответ
    </motion.button>
  )
}
