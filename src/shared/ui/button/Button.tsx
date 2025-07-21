'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { ButtonHTMLAttributes, FC, LinkHTMLAttributes, ReactNode } from 'react'

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
      btnColor = 'bg-(--gray-300) hover:bg-(--gray-200) active:bg-(--gray-100)'
      break
  }

  const classNames = clsx(
    btnColor,
    'rounded-[8px] px-[14px] py-[12px] sm:px-[16px] sm:py-[14px] md:px-[18px] md:py-[16px] h-[32px] sm:h-[40px] md:h-[48px] flex justify-center items-center cursor-pointer',
    className
  )

  if (href) {
    return (
      <Link className={classNames} {...rest} href={href}>
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
