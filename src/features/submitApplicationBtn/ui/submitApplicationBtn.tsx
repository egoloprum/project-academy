'use client'

import { Button } from '@/shared/ui'
import { FC } from 'react'

interface SubmitApplicationBtnProps {}

export const SubmitApplicationBtn: FC<SubmitApplicationBtnProps> = ({}) => {
  return (
    <Button
      btnType="primary"
      className="2xl:h-[64px] text-(--black-main) w-fit 2xl:mt-[24px]">
      <span className="px-[8px] text-[18px]">Подать заявку</span>
    </Button>
  )
}
