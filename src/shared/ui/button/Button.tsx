'use client'

import clsx from 'clsx'
import { useTransitionRouter } from 'next-view-transitions'
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

  const router = useTransitionRouter()

  if (href) {
    return (
      <Link
        className={classNames}
        {...rest}
        href={href}
        onClick={e => {
          e.preventDefault()
          router.push(href, {
            onTransitionReady: pageAnimation
          })
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

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: 'translateY(0)'
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: 'translateY(-100px)'
      }
    ],
    {
      duration: 1000,
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
      fill: 'forwards',
      pseudoElement: '::view-transition-old(root)'
    }
  )

  document.documentElement.animate(
    [
      {
        transform: 'translateY(100%)'
      },
      {
        transform: 'translateY(0)'
      }
    ],
    {
      duration: 1000,
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
      fill: 'forwards',
      pseudoElement: '::view-transition-new(root)'
    }
  )
}
