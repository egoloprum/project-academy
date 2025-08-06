'use client'

import { createContext, useContext, useState, ReactNode, useMemo } from 'react'

import { UsersSearchTableData } from './data'
import { UsersSearchTableType } from './types'

interface UsersSearchContextType {
  usernameSearch: string
  setUsernameSearch: (id: string) => void
  currentUsers: UsersSearchTableType[]
}

const UsersSearchContext = createContext<UsersSearchContextType | undefined>(
  undefined
)

export const UsersSearchProvider = ({ children }: { children: ReactNode }) => {
  const [usernameSearch, setUsernameSearch] = useState('')

  const currentUsers = useMemo(() => {
    if (!usernameSearch.trim()) {
      return UsersSearchTableData
    }

    const searchTerm = usernameSearch.toLowerCase()
    return UsersSearchTableData.filter(user =>
      user.name.toLowerCase().includes(searchTerm)
    )
  }, [usernameSearch])

  return (
    <UsersSearchContext.Provider
      value={{
        usernameSearch,
        setUsernameSearch,
        currentUsers
      }}>
      {children}
    </UsersSearchContext.Provider>
  )
}

export const useUsersSearchContext = () => {
  const context = useContext(UsersSearchContext)
  if (!context) {
    throw new Error(
      'useUsersSearchContext must be used within a UsersSearchProvider'
    )
  }
  return context
}
