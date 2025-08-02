'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type TaskCompletionType = 'taskLeft' | 'taskRight'

interface TaskCompletionContextType {
  activeForm: TaskCompletionType
  setActiveForm: (form: TaskCompletionType) => void
}

const TaskCompletionContext = createContext<
  TaskCompletionContextType | undefined
>(undefined)

export const TaskCompletionProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [activeForm, setActiveForm] = useState<TaskCompletionType>('taskLeft')

  return (
    <TaskCompletionContext.Provider value={{ activeForm, setActiveForm }}>
      {children}
    </TaskCompletionContext.Provider>
  )
}

export const useTaskCompletion = () => {
  const context = useContext(TaskCompletionContext)
  if (!context) {
    throw new Error(
      'useTaskCompletion must be used within a TaskCompletionProvider'
    )
  }
  return context
}
