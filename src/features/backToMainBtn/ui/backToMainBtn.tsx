'use client'

import { Arrow } from '@/shared'
import { Button } from '@/shared/ui'

export const BackToMainBtn = ({}) => {
  return (
    <Button
      btnType="clear"
      href="/"
      className="text-(--white-main) gap-[4px] w-fit absolute top-[56px] left-[65px] text-[18px]">
      <Arrow />
      <span className="px-[8px]">Назад на главную</span>
    </Button>
  )
}
