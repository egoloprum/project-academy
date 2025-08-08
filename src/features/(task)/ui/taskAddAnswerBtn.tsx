'use client'

import { motion } from 'framer-motion'

import { useTask } from '../helpers/taskContext'

export const TaskAddAnswerBtn = ({}) => {
  const { setAddAnswerFlag } = useTask()

  return (
    <motion.button
      className="px-10 py-2 w-fit rounded-md font-medium text-black bg-lime-300 hover:bg-lime-400 active:bg-lime-500 cursor-pointer"
      onClick={() => setAddAnswerFlag('formOpen')}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      Добавить ответ
    </motion.button>
  )
}
