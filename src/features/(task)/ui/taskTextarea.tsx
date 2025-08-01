'use client'

import { Textarea } from '@/shared/components'

export const TaskTextarea = ({}) => {
  return (
    <Textarea
      placeholder="Type your message here."
      className="border-stone-800 hover:border-stone-900 active:border-stone-950 min-h-72"
    />
  )
}
