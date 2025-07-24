'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { ButtonHTMLAttributes, FC, LinkHTMLAttributes, ReactNode } from 'react'

import { useAnimatedRouter } from '@/shared/helpers'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  LinkHTMLAttributes<HTMLAnchorElement> & {
    btnType: 'primary' | 'secondary' | 'clear' | 'gray'
    children: ReactNode
    href?: string
    className?: string
  }

export const Button: FC<ButtonProps> = ({
  btnType,
  children,
  href,
  className,
  ...rest
}) => {
  let btnColor = ''

  switch (btnType) {
    case 'primary':
      btnColor =
        'bg-(--primary-main) hover:bg-(--primary-700) active:bg-(--primary-800)'
      break
    case 'secondary':
      btnColor =
        'bg-(--secondary-main) hover:bg-(--secondary-700) active:bg-(--secondary-800)'
      break
    case 'clear':
      btnColor = 'bg-none'
      break
    case 'gray':
      btnColor =
        'bg-(--white-300) hover:bg-(--white-200) active:bg-(--white-100)'
      break
  }

  const classNames = clsx(
    btnColor,
    'rounded-[8px] px-[14px] py-[12px] sm:px-[16px] sm:py-[14px] md:px-[18px] md:py-[16px] h-[48px] lg:h-[56px] flex justify-center items-center cursor-pointer transition-all duration-300 ease-out',
    className
  )

  const { push } = useAnimatedRouter()

  if (href) {
    return (
      <Link
        className={classNames}
        {...rest}
        href={href}
        onClick={e => {
          e.preventDefault()
          push(href)
        }}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  )
}
