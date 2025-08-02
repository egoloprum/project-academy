'use client'

import clsx from 'clsx'

import { Textarea } from '@/shared/components'

export const TaskTextarea = ({
  isDisabled,
  classNames,
  defaultValue,
  id
}: {
  id?: string
  isDisabled?: boolean
  classNames?: string
  defaultValue?: string
}) => {
  const textareaClassnames = clsx(
    'border-stone-800 hover:border-stone-900 active:border-stone-950 min-h-72',
    classNames
  )

  return (
    <Textarea
      id={id}
      placeholder="Type your message here."
      className={textareaClassnames}
      defaultValue={defaultValue}
      disabled={isDisabled}
    />
  )
}
