'use client'

import { FC, InputHTMLAttributes, ReactNode } from 'react'

import { X } from '@/shared'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isDisabled?: boolean
  isError?: boolean
  children?: ReactNode
  label: string
  content?: string
}

export const Input: FC<InputProps> = ({
  isDisabled,
  isError,
  children,
  label,
  content,
  id,
  placeholder,
  ...rest
}) => {
  return (
    <div className="">
      <label htmlFor={id} className="mb-[4px] text-[18px] text-(--white-600)">
        {label}
      </label>
      <div className="w-full flex items-center gap-[8px] px-[18px] py-[14px] bg-(--white-300) rounded-[8px] outline outline-transparent has-[:focus]:outline-(--primary-main) transition-all duration-300 ease-out">
        <input
          id={id}
          className="w-full outline-none border-none text-(--white-500) hover:text-(--white-main) focus:text-(--white-main) not-[placeholder]:text-(--white-main)"
          placeholder={placeholder}
          {...rest}
        />
        {children ? (
          children
        ) : (
          <button type="button" className="cursor-pointer">
            <X />
          </button>
        )}
      </div>
      {content && <span>{content}</span>}
    </div>
  )
}
