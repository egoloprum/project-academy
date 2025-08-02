'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type CheckingType = 'pending' | 'done'

interface CheckingContextType {
  activeForm: CheckingType
  setActiveForm: (form: CheckingType) => void
}

const CheckingContext = createContext<CheckingContextType | undefined>(
  undefined
)

export const CheckingProvider = ({ children }: { children: ReactNode }) => {
  const [activeForm, setActiveForm] = useState<CheckingType>('pending')

  return (
    <CheckingContext.Provider value={{ activeForm, setActiveForm }}>
      {children}
    </CheckingContext.Provider>
  )
}

export const useChecking = () => {
  const context = useContext(CheckingContext)
  if (!context) {
    throw new Error('useChecking must be used within a CheckingProvider')
  }
  return context
}
