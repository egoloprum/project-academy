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
      className="cursor-pointer hover:underline underline-offset-2">
      {name}
    </button>
  )
}
