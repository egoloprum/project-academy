'use client'

import { DirectionData } from '@/entities/direction'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/components'

import { useRatingMentor } from '../helpers/ratingMentorContext'

export const RatingDirectionSelect = ({}) => {
  const { ratingDirectionSelect, setRatingDirectionSelect } = useRatingMentor()

  return (
    <Select
      defaultValue={ratingDirectionSelect}
      onValueChange={setRatingDirectionSelect}>
      <SelectTrigger className="lg:max-w-48 w-full bg-stone-800 border-none">
        <SelectValue placeholder="Выбрать направление" defaultValue="Backend" />
      </SelectTrigger>
      <SelectContent className="bg-stone-800 border-none">
        <SelectGroup>
          <SelectItem
            value="empty"
            className="focus:bg-stone-900 active:bg-stone-950 text-white focus:text-white">
            <span>Удалить фильтр</span>
          </SelectItem>
          {DirectionData.map((data, index) => (
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
