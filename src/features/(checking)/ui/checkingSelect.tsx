'use client'

import { ArrowUpDown } from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/components'

import { useChecking } from '../helpers/checkingContext'

const selectData = [
  {
    value: 'newest',
    content: 'Сначала новые'
  },
  {
    value: 'oldest',
    content: 'Сначала старые'
  },
  {
    value: 'highest-score',
    content: 'По убыванию процентов'
  },
  {
    value: 'lowest-score',
    content: 'По возрастанию процентов'
  },
  {
    value: 'a-z',
    content: 'От А до Я'
  },
  {
    value: 'z-a',
    content: 'От Я до А'
  }
]

export const CheckingSelect = ({}) => {
  const { checkingSorting, setCheckingSorting } = useChecking()

  return (
    <Select defaultValue={checkingSorting} onValueChange={setCheckingSorting}>
      <SelectTrigger className="sm:max-w-72 w-full bg-stone-800 border-none">
        <SelectValue placeholder="Сортировка" />
      </SelectTrigger>
      <SelectContent className="bg-stone-800 border-none">
        <SelectGroup>
          {selectData.map((data, index) => (
            <SelectItem
              key={index}
              value={data.value}
              className="focus:bg-stone-900 active:bg-stone-950 text-white focus:text-white">
              <ArrowUpDown className="w-4 h-4 text-white" />
              <span>{data.content}</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
