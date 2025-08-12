'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type TaskTogglerType = 'taskLeft' | 'taskRight'
type TaskAddAnswerType = 'formOpen' | 'formClose'

interface TaskContextType {
  taskTogglerFlag: TaskTogglerType
  setTaskTogglerFlag: (form: TaskTogglerType) => void

  addAnswerFlag: TaskAddAnswerType
  setAddAnswerFlag: (form: TaskAddAnswerType) => void
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [taskTogglerFlag, setTaskTogglerFlag] =
    useState<TaskTogglerType>('taskLeft')
  const [addAnswerFlag, setAddAnswerFlag] =
    useState<TaskAddAnswerType>('formClose')

  return (
    <TaskContext.Provider
      value={{
        taskTogglerFlag,
        setTaskTogglerFlag,
        addAnswerFlag,
        setAddAnswerFlag
      }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTask = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTask must be used within a TaskProvider')
  }
  return context
}
