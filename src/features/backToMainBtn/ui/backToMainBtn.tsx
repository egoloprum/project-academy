'use client'

import { Arrow } from '@/shared'
import { Button } from '@/shared/ui'

export const BackToMainBtn = ({}) => {
  return (
    <Button
      btnType="gray"
      href="/"
      className="text-(--white-main) gap-[4px] w-fit fixed top-[56px] left-[24px] md:left-[65px] text-[18px]">
      <Arrow />
      <span className="px-[8px]">Назад на главную</span>
    </Button>
  )
}
