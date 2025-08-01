'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type TaskCriteriaType = 'task' | 'criteria'

interface TaskCriteriaContextType {
  activeForm: TaskCriteriaType
  setActiveForm: (form: TaskCriteriaType) => void
}

const TaskCriteriaContext = createContext<TaskCriteriaContextType | undefined>(
  undefined
)

export const TaskCriteriaProvider = ({ children }: { children: ReactNode }) => {
  const [activeForm, setActiveForm] = useState<TaskCriteriaType>('task')

  return (
    <TaskCriteriaContext.Provider value={{ activeForm, setActiveForm }}>
      {children}
    </TaskCriteriaContext.Provider>
  )
}

export const useTaskCriteria = () => {
  const context = useContext(TaskCriteriaContext)
  if (!context) {
    throw new Error(
      'useTaskCriteria must be used within a TaskCriteriaProvider'
    )
  }
  return context
}
