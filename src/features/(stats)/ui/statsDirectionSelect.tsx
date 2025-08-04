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
    value: 'backend',
    content: 'Backend'
  },
  {
    value: 'frontend',
    content: 'Frontend'
  },
  {
    value: 'system-analyst',
    content: 'System Analyst'
  },
  {
    value: 'project-manager',
    content: 'Project Manager'
  },
  {
    value: 'ceo',
    content: 'CEO'
  },
  {
    value: 'qa-engineer',
    content: 'Qa Engineer'
  },
  {
    value: 'ui/ux-designer',
    content: 'UI/UX Designer'
  }
]

export const StatsDirectionSelect = ({}) => {
  return (
    <Select>
      <SelectTrigger className="lg:max-w-48 w-full bg-stone-800 border-none">
        <SelectValue placeholder="Выбрать направление" defaultValue="backend" />
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
