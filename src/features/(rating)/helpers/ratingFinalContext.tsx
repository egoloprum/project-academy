'use client'

import { createContext, useContext, useState, ReactNode, useMemo } from 'react'

import { tableFinalData } from './data'
import { TableFinalType } from './types'

interface TableContextType {
  selectTableData: TableFinalType[]
  finalTableData: TableFinalType[]
  toggleSelectRow: (id: number) => void
  toggleFinalRow: (id: number) => void
  toggleAllSelectRows: (checked: boolean) => void
  toggleAllFinalRows: (checked: boolean) => void
  moveToFinal: () => void
  moveToSelect: () => void
  areAllSelectSelected: boolean
  areAllFinalSelected: boolean
  hasSelectedInSelect: boolean
  hasSelectedInFinal: boolean
}

const TableContext = createContext<TableContextType | undefined>(undefined)

export const TableProvider = ({ children }: { children: ReactNode }) => {
  const [selectTableData, setSelectTableData] = useState<TableFinalType[]>(
    tableFinalData.filter(item => item.table === 'select')
  )

  const [finalTableData, setFinalTableData] = useState<TableFinalType[]>(
    tableFinalData.filter(item => item.table === 'final')
  )

  const hasSelectedInSelect = useMemo(
    () => selectTableData.some(item => item.isSelected),
    [selectTableData]
  )

  const hasSelectedInFinal = useMemo(
    () => finalTableData.some(item => item.isSelected),
    [finalTableData]
  )

  const areAllSelectSelected = useMemo(
    () =>
      selectTableData.length > 0 &&
      selectTableData.every(item => item.isSelected),
    [selectTableData]
  )

  const areAllFinalSelected = useMemo(
    () =>
      finalTableData.length > 0 &&
      finalTableData.every(item => item.isSelected),
    [finalTableData]
  )

  const toggleAllSelectRows = (checked: boolean) => {
    setSelectTableData(prev =>
      prev.map(item => ({ ...item, isSelected: checked }))
    )
  }

  const toggleAllFinalRows = (checked: boolean) => {
    setFinalTableData(prev =>
      prev.map(item => ({ ...item, isSelected: checked }))
    )
  }

  const toggleSelectRow = (id: number) => {
    setSelectTableData(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    )
  }

  const toggleFinalRow = (id: number) => {
    setFinalTableData(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    )
  }

  const moveToFinal = () => {
    const selectedItems = selectTableData.filter(item => item.isSelected)
    const updatedSelected = selectedItems.map(item => ({
      ...item,
      isSelected: false,
      table: 'final' as const,
      animate: true
    }))

    setSelectTableData(prev => prev.filter(item => !item.isSelected))
    setFinalTableData(prev => [...prev, ...updatedSelected])

    setTimeout(() => {
      setFinalTableData(prev => prev.map(item => ({ ...item, animate: false })))
    }, 500)
  }

  const moveToSelect = () => {
    const selectedItems = finalTableData.filter(item => item.isSelected)
    const updatedSelected = selectedItems.map(item => ({
      ...item,
      isSelected: false,
      table: 'select' as const,
      animate: true
    }))

    setFinalTableData(prev => prev.filter(item => !item.isSelected))
    setSelectTableData(prev => [...prev, ...updatedSelected])

    setTimeout(() => {
      setSelectTableData(prev =>
        prev.map(item => ({ ...item, animate: false }))
      )
    }, 500)
  }

  const value = {
    selectTableData,
    finalTableData,
    toggleSelectRow,
    toggleFinalRow,
    moveToFinal,
    moveToSelect,
    hasSelectedInSelect,
    hasSelectedInFinal,
    toggleAllSelectRows,
    toggleAllFinalRows,
    areAllSelectSelected,
    areAllFinalSelected
  }

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>
}

export const useTableContext = () => {
  const context = useContext(TableContext)
  if (!context) {
    throw new Error('useTableContext must be used within a TableProvider')
  }
  return context
}
