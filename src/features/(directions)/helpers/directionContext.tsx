'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type DirectionContextType = {
  selectedGeneration: string
  setSelectedGeneration: (generation: string) => void
}

const DirectionContext = createContext<DirectionContextType | undefined>(
  undefined
)

export const DirectionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedGeneration, setSelectedGeneration] = useState<string>('')

  return (
    <DirectionContext.Provider
      value={{ selectedGeneration, setSelectedGeneration }}>
      {children}
    </DirectionContext.Provider>
  )
}

export const useDirection = () => {
  const context = useContext(DirectionContext)
  if (!context) {
    throw new Error('useDirection must be used within a DirectionProvider')
  }
  return context
}
