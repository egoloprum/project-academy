'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/components/ui/select'

import { generations } from '../helpers/data'
import { useTaskContext } from '../helpers/taskContext'

export const AllTaskSelect = ({}) => {
  const { selectedGeneration, setSelectedGeneration } = useTaskContext()

  return (
    <Select value={selectedGeneration} onValueChange={setSelectedGeneration}>
      <SelectTrigger className="sm:max-w-72 w-full bg-stone-800 border-none">
        <SelectValue placeholder="Select a generation" />
      </SelectTrigger>
      <SelectContent className="bg-stone-800 border-none">
        <SelectGroup>
          {generations.map(generation => (
            <SelectItem
              value={generation.id}
              key={generation.id}
              className="focus:bg-stone-900 active:bg-stone-950 text-white focus:text-white">
              {generation.content}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
