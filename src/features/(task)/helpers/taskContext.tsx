'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

import { tasksOfGenerations } from './data'

interface TaskContextType {
  selectedGeneration: string
  setSelectedGeneration: (id: string) => void
  currentTasks: string[]
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [selectedGeneration, setSelectedGeneration] = useState('4')

  const currentTasks =
    tasksOfGenerations.find(gen => gen.id === selectedGeneration)?.tasks || []

  return (
    <TaskContext.Provider
      value={{
        selectedGeneration,
        setSelectedGeneration,
        currentTasks
      }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskContext = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider')
  }
  return context
}
