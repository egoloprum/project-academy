'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type ProfileFormType = 'info' | 'settings'

interface ProfileFormContextType {
  activeForm: ProfileFormType
  setActiveForm: (form: ProfileFormType) => void
}

const ProfileFormContext = createContext<ProfileFormContextType | undefined>(
  undefined
)

export const ProfileFormProvider = ({ children }: { children: ReactNode }) => {
  const [activeForm, setActiveForm] = useState<ProfileFormType>('info')

  return (
    <ProfileFormContext.Provider value={{ activeForm, setActiveForm }}>
      {children}
    </ProfileFormContext.Provider>
  )
}

export const useProfileForm = () => {
  const context = useContext(ProfileFormContext)
  if (!context) {
    throw new Error('useProfileForm must be used within a ProfileFormProvider')
  }
  return context
}
