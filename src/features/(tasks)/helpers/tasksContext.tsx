'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

import { TasksGenerations, tasksOfGenerations } from './data'

interface TasksContextType {
  getGenerations: { id: string; content: string }[]
  selectedGeneration: string
  setSelectedGeneration: (id: string) => void
  currentTasks: string[]
}

const TasksContext = createContext<TasksContextType | undefined>(undefined)

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [selectedGeneration, setSelectedGeneration] = useState('4')

  const getGenerations = TasksGenerations

  const currentTasks =
    tasksOfGenerations.find(gen => gen.id === selectedGeneration)?.tasks || []

  return (
    <TasksContext.Provider
      value={{
        getGenerations,
        selectedGeneration,
        setSelectedGeneration,
        currentTasks
      }}>
      {children}
    </TasksContext.Provider>
  )
}

export const useTasksContext = () => {
  const context = useContext(TasksContext)
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider')
  }
  return context
}
