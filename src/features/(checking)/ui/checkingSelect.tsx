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

export const CheckingSelect = ({}) => {
  return (
    <Select>
      <SelectTrigger className="sm:max-w-72 w-full bg-stone-800 border-none">
        <SelectValue placeholder="Сортировка" defaultValue="newest" />
      </SelectTrigger>
      <SelectContent className="bg-stone-800 border-none">
        <SelectGroup>
          <SelectItem
            value="newest"
            className="focus:bg-stone-900 active:bg-stone-950 text-white focus:text-white">
            <ArrowUpDown className="w-4 h-4 text-white" />
            <span>Сначала новые</span>
          </SelectItem>
          <SelectItem
            value="oldest"
            className="focus:bg-stone-900 active:bg-stone-950 text-white focus:text-white">
            <ArrowUpDown className="w-4 h-4 text-white" />
            <span>Сначала старые</span>
          </SelectItem>
          <SelectItem
            value="highest-score"
            className="focus:bg-stone-900 active:bg-stone-950 text-white focus:text-white">
            <ArrowUpDown className="w-4 h-4 text-white" />
            <span>По убыванию процентов</span>
          </SelectItem>
          <SelectItem
            value="lowest-score"
            className="focus:bg-stone-900 active:bg-stone-950 text-white focus:text-white">
            <ArrowUpDown className="w-4 h-4 text-white" />
            <span>По возрастанию процентов</span>
          </SelectItem>
          <SelectItem
            value="a-z"
            className="focus:bg-stone-900 active:bg-stone-950 text-white focus:text-white">
            <ArrowUpDown className="w-4 h-4 text-white" />
            <span>От А до Я</span>
          </SelectItem>
          <SelectItem
            value="z-a"
            className="focus:bg-stone-900 active:bg-stone-950 text-white focus:text-white">
            <ArrowUpDown className="w-4 h-4 text-white" />
            <span>От Я до А</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
