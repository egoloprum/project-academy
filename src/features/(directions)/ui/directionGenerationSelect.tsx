'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/components'

const generations = ['Поток 4', 'Поток 3', 'Поток 2', 'Поток 1']

export const DirectionGenerationSelect = ({}) => {
  return (
    <Select>
      <SelectTrigger className="sm:max-w-64 w-full bg-stone-800 border-none text-md">
        <div className="flex items-center gap-2">
          <SelectValue placeholder="Выбирай поток" />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-stone-800 border-none">
        {generations.map((gen, index) => (
          <SelectItem
            key={gen}
            value={index.toString()}
            className="focus:bg-stone-900 active:bg-stone-950 text-white focus:text-white text-md">
            <span>{gen}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
