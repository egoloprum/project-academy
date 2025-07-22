'use client'

import { FC, InputHTMLAttributes } from 'react'
import { default as Check } from './assets/check.svg'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Checkbox: FC<CheckboxProps> = ({ label, id, ...rest }) => {
  return (
    <div className="flex items-center gap-[8px] w-fit">
      <label
        htmlFor={id}
        className="border border-(--primary-main) hover:border-(--primary-700) active:border-(--primary-800) cursor-pointer rounded-[4px] w-[20px] h-[20px] inline-block relative">
        <input type="checkbox" id={id} className="peer hidden" {...rest} />
        <Check className="max-w-[20px] max-h-[20px] peer-checked:fill-(--primary-main) peer-checked:hover:fill-(--primary-700) peer-active:fill-(--primary-700) opacity-0 peer-checked:opacity-100 transition-all duration-300 ease-out" />
      </label>
      <span className="text-[16px]">{label}</span>
    </div>
  )
}
