'use client'

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
    value: 'gen-1',
    content: 'Поток 1'
  },
  {
    value: 'gen-2',
    content: 'Поток 2'
  },
  {
    value: 'gen-3',
    content: 'Поток 3'
  },
  {
    value: 'gen-4',
    content: 'Поток 4'
  }
]

export const RatingGenerationSelect = ({}) => {
  return (
    <Select>
      <SelectTrigger className="lg:max-w-48 w-full bg-stone-800 border-none">
        <SelectValue placeholder="Выбрать поток" defaultValue="gen-4" />
      </SelectTrigger>
      <SelectContent className="bg-stone-800 border-none">
        <SelectGroup>
          {selectData.map((data, index) => (
            <SelectItem
              key={index}
              value={data.value}
              className="focus:bg-stone-900 active:bg-stone-950 text-white focus:text-white">
              <span>{data.content}</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
