'use client'

import { GenerationData } from '@/entities/generation'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/components'

import { useRatingMentor } from '../helpers/ratingMentorContext'

export const RatingGenerationSelect = ({}) => {
  const { ratingGenerationSelect, setRatingGenerationSelect } =
    useRatingMentor()

  return (
    <Select
      defaultValue={ratingGenerationSelect}
      onValueChange={setRatingGenerationSelect}>
      <SelectTrigger className="lg:max-w-48 w-full bg-stone-800 border-none">
        <SelectValue placeholder="Выбрать поток" defaultValue="gen-4" />
      </SelectTrigger>
      <SelectContent className="bg-stone-800 border-none">
        <SelectGroup>
          <SelectItem
            value="empty"
            className="focus:bg-stone-900 active:bg-stone-950 text-white focus:text-white">
            <span>Удалить фильтр</span>
          </SelectItem>
          {GenerationData.map((data, index) => (
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
