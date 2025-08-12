'use client'

import { createContext, useContext, useState, ReactNode, useMemo } from 'react'

import { UserRatingForMentorData, UserRatingType } from '@/entities/user'

type RatingMentorSortingType = 'highest-score' | 'lowest-score' | 'a-z' | 'z-a'
type RatingMentorDirectionSelectType =
  | 'empty'
  | 'Backend'
  | 'Frontend'
  | 'System-Analyst'
  | 'Project-Manager'
  | 'CEO'
  | 'QA-Engineer'
  | 'UI/UX-Designer'

type RatingMentorGenerationSelectType =
  | 'empty'
  | 'gen-4'
  | 'gen-3'
  | 'gen-2'
  | 'gen-1'

interface RatingMentorContextType {
  ratingGenerationSelect: RatingMentorGenerationSelectType
  setRatingGenerationSelect: (form: RatingMentorGenerationSelectType) => void

  ratingDirectionSelect: RatingMentorDirectionSelectType
  setRatingDirectionSelect: (form: RatingMentorDirectionSelectType) => void

  ratingSorting: RatingMentorSortingType
  setRatingSorting: (form: RatingMentorSortingType) => void

  ratingUsernameSearch: string
  setRatingUsernameSearch: (id: string) => void

  ratingCurrentTable: UserRatingType[]
}

const RatingMentorContext = createContext<RatingMentorContextType | undefined>(
  undefined
)

export const RatingMentorProvider = ({ children }: { children: ReactNode }) => {
  const [ratingSorting, setRatingSorting] =
    useState<RatingMentorSortingType>('highest-score')

  const [ratingUsernameSearch, setRatingUsernameSearch] = useState('')

  const [ratingDirectionSelect, setRatingDirectionSelect] =
    useState<RatingMentorDirectionSelectType>('Backend')

  const [ratingGenerationSelect, setRatingGenerationSelect] =
    useState<RatingMentorGenerationSelectType>('gen-4')

  const ratingCurrentTable = useMemo(() => {
    const searchTerm = ratingUsernameSearch.toLowerCase()

    const tableData = UserRatingForMentorData.filter(
      data =>
        ratingGenerationSelect === 'empty' ||
        data.generation.value === ratingGenerationSelect
    )
      .filter(
        data =>
          ratingDirectionSelect === 'empty' ||
          data.direction.value === ratingDirectionSelect
      )
      .filter(
        data =>
          ratingUsernameSearch.trim() === '' ||
          data.userName.toLowerCase().includes(searchTerm)
      )

    switch (ratingSorting) {
      case 'highest-score':
        return tableData.sort((a, b) => parseInt(b.result) - parseInt(a.result))

      case 'lowest-score':
        return tableData.sort((a, b) => parseInt(a.result) - parseInt(b.result))

      case 'a-z':
        return tableData.sort((a, b) => a.userName.localeCompare(b.userName))

      case 'z-a':
        return tableData.sort((a, b) => b.userName.localeCompare(a.userName))

      default:
        return tableData
    }
  }, [
    ratingSorting,
    ratingGenerationSelect,
    ratingDirectionSelect,
    ratingUsernameSearch
  ])

  return (
    <RatingMentorContext.Provider
      value={{
        ratingSorting,
        setRatingSorting,
        ratingCurrentTable,
        ratingDirectionSelect,
        setRatingDirectionSelect,
        ratingGenerationSelect,
        setRatingGenerationSelect,
        ratingUsernameSearch,
        setRatingUsernameSearch
      }}>
      {children}
    </RatingMentorContext.Provider>
  )
}

export const useRatingMentor = () => {
  const context = useContext(RatingMentorContext)
  if (!context) {
    throw new Error(
      'useRatingMentor must be used within a RatingMentorProvider'
    )
  }
  return context
}
