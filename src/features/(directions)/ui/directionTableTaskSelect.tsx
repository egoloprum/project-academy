'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/components'

export const DirectionTableTaskSelect = ({ tasks }: { tasks: string[] }) => {
  return (
    <Select>
      <SelectTrigger className="sm:max-w-64 w-full bg-stone-800 border-none text-md">
        <div className="flex items-center gap-2 w-40 truncate md:w-full ">
          <SelectValue placeholder="Выбирай поток" className="w-40 truncate" />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-stone-800 border-none">
        {tasks.map((task, index) => (
          <SelectItem
            key={task}
            value={task}
            className="focus:bg-stone-900 active:bg-stone-950 text-white focus:text-white text-md max-w-64 w-full">
            <span className="">{task}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
