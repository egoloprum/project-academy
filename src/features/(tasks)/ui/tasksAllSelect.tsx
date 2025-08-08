'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/components'

import { useTasksContext } from '../helpers/tasksContext'

export const TasksAllSelect = ({}) => {
  const { getGenerations, selectedGeneration, setSelectedGeneration } =
    useTasksContext()

  return (
    <Select value={selectedGeneration} onValueChange={setSelectedGeneration}>
      <SelectTrigger className="sm:max-w-72 w-full bg-stone-800 border-none">
        <SelectValue placeholder="Выбрать поток" defaultValue={4} />
      </SelectTrigger>
      <SelectContent className="bg-stone-800 border-none">
        <SelectGroup>
          {getGenerations.map(generation => (
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
