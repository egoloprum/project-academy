'use client'

import { Search } from 'lucide-react'

import { Input } from '@/shared/components'

export const UsersSearchInput = ({}) => {
  return (
    <div className="relative lg:max-w-60 w-full">
      <Search className="absolute top-1/2 -translate-y-1/2 left-2 w-4 h-4 text-gray-400" />
      <Input
        className="border-none w-full bg-stone-800 pl-8"
        placeholder="Найти кандидата"
      />
    </div>
  )
}
