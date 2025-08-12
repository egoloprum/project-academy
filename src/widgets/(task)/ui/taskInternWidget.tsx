'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { TaskAddAnswerBtn, TaskAddAnswerForm, useTask } from '@/features/(task)'
import { Textarea } from '@/shared/components'

import { taskTimeData } from '../helpers/data'

export const TaskInternWidget = ({}) => {
  const { addAnswerFlag } = useTask()

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-8">
      <div className="w-full flex flex-col gap-8 sm:gap-12">
        <Textarea
          defaultValue="Пожалуйста, сделайте то и то, вот так и так, будем вам счастье"
          className="border-none bg-stone-800 min-h-40 max-h-48"
          disabled
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={addAnswerFlag}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}>
            {addAnswerFlag === 'formOpen' ? (
              <TaskAddAnswerForm />
            ) : (
              <TaskAddAnswerBtn />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
        <ul className="flex justify-between sm:justify-start w-full gap-4 font-medium">
          {taskTimeData.map((item, index) => (
            <li key={index} className="relative h-24 w-24">
              <svg className="absolute inset-0" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#1c1917"
                  strokeWidth="4"
                />

                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#bef264"
                  strokeWidth="4"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * item.progress) / 360}
                  transform="rotate(-90 50 50)"
                />
              </svg>

              <div className="h-full w-full flex flex-col justify-center items-center">
                <span className="text-3xl">{item.value}</span>
                <span>{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
