'use client'

import { createContext, useContext, useState, ReactNode, useMemo } from 'react'

import { CheckingTableType } from '@/entities/checking'

import { checkingTableDoneData, checkingTablePendingData } from './data'

type CheckingTogglerType = 'pending' | 'done'
type CheckingSortingType =
  | 'newest'
  | 'oldest'
  | 'highest-score'
  | 'lowest-score'
  | 'a-z'
  | 'z-a'

interface CheckingContextType {
  checkingToggler: CheckingTogglerType
  setCheckingToggler: (form: CheckingTogglerType) => void
  checkingSorting: CheckingSortingType
  setCheckingSorting: (form: CheckingSortingType) => void
  checkingCurrentTable: CheckingTableType[]
}

const CheckingContext = createContext<CheckingContextType | undefined>(
  undefined
)

export const CheckingProvider = ({ children }: { children: ReactNode }) => {
  const [checkingToggler, setCheckingToggler] =
    useState<CheckingTogglerType>('pending')

  const [checkingSorting, setCheckingSorting] =
    useState<CheckingSortingType>('newest')

  const checkingCurrentTable = useMemo(() => {
    const tableData =
      checkingToggler === 'pending'
        ? [...checkingTablePendingData]
        : [...checkingTableDoneData]

    switch (checkingSorting) {
      case 'newest':
        return tableData.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )

      case 'oldest':
        return tableData.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        )

      case 'highest-score':
        return tableData.sort((a, b) => parseInt(b.result) - parseInt(a.result))

      case 'lowest-score':
        return tableData.sort((a, b) => parseInt(a.result) - parseInt(b.result))

      case 'a-z':
        return tableData.sort((a, b) => a.name.localeCompare(b.name))

      case 'z-a':
        return tableData.sort((a, b) => b.name.localeCompare(a.name))

      default:
        return tableData
    }
  }, [checkingToggler, checkingSorting])

  return (
    <CheckingContext.Provider
      value={{
        checkingToggler,
        setCheckingToggler,
        checkingSorting,
        setCheckingSorting,
        checkingCurrentTable
      }}>
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
