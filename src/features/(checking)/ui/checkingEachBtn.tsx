'use client'

import { useAnimatedRouter } from '@/shared/lib'

export const CheckingEachBtn = ({
  name,
  index
}: {
  name: string
  index: number
}) => {
  const { push } = useAnimatedRouter()

  return (
    <button
      onClick={() => push(`/checking/${index}`)}
      className="cursor-pointer underline underline-offset-2 hover:text-lime-400 active:text-lime-500">
      {name}
    </button>
  )
}
