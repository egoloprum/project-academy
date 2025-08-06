'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type GenerationFormTogglerType = 'initial' | 'detail'

interface GenerationFormTogglerContextType {
  activeForm: GenerationFormTogglerType
  setActiveForm: (form: GenerationFormTogglerType) => void
}

const GenerationFormTogglerContext = createContext<
  GenerationFormTogglerContextType | undefined
>(undefined)

export const GenerationFormTogglerProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [activeForm, setActiveForm] =
    useState<GenerationFormTogglerType>('initial')

  return (
    <GenerationFormTogglerContext.Provider
      value={{ activeForm, setActiveForm }}>
      {children}
    </GenerationFormTogglerContext.Provider>
  )
}

export const useGenerationFormToggler = () => {
  const context = useContext(GenerationFormTogglerContext)
  if (!context) {
    throw new Error(
      'useGenerationFormToggler must be used within a GenerationFormTogglerProvider'
    )
  }
  return context
}
