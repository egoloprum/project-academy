'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/components'

type Status =
  | 'Не проверено'
  | 'Принят на стажировку'
  | 'На рассмотрении'
  | 'Заявка отклонена'

const statuses: Status[] = [
  'Не проверено',
  'Принят на стажировку',
  'На рассмотрении',
  'Заявка отклонена'
]

const statusColors: Record<Status, string> = {
  'Принят на стажировку': 'text-lime-400',
  'На рассмотрении': 'text-orange-400',
  'Заявка отклонена': 'text-red-400',
  'Не проверено': 'text-gray-400'
}

export const CheckingProcessSelect = () => {
  return (
    <Select defaultValue="0">
      <SelectTrigger className="sm:max-w-64 w-full bg-stone-800 border-none self-end text-md">
        <div className="flex items-center gap-2">
          <SelectValue placeholder="Статус заявки" />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-stone-800 border-none">
        <SelectGroup>
          {statuses.map((status, index) => (
            <SelectItem
              key={status}
              value={index.toString()}
              className="focus:bg-stone-900 active:bg-stone-950 text-white focus:text-white text-md">
              <span className={statusColors[status]}>{status}</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
