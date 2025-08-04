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

const selectData = [
  {
    value: 'highest-score',
    content: 'По убыванию'
  },
  {
    value: 'lowest-score',
    content: 'По возрастанию'
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

export const StatsSortSelect = ({}) => {
  return (
    <Select>
      <SelectTrigger className="lg:max-w-48 w-full bg-stone-800 border-none">
        <SelectValue placeholder="Сортировка" defaultValue="highest-score" />
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
