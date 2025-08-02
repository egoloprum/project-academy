'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type TaskAddAnswerType = 'formOpen' | 'formClose'

interface TaskAddAnswerContextType {
  activeForm: TaskAddAnswerType
  setActiveForm: (form: TaskAddAnswerType) => void
}

const TaskAddAnswerContext = createContext<
  TaskAddAnswerContextType | undefined
>(undefined)

export const TaskAddAnswerProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [activeForm, setActiveForm] = useState<TaskAddAnswerType>('formClose')

  return (
    <TaskAddAnswerContext.Provider value={{ activeForm, setActiveForm }}>
      {children}
    </TaskAddAnswerContext.Provider>
  )
}

export const useTaskAddAnswer = () => {
  const context = useContext(TaskAddAnswerContext)
  if (!context) {
    throw new Error(
      'useTaskAddAnswer must be used within a TaskAddAnswerProvider'
    )
  }
  return context
}
