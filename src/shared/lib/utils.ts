import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isUserType(
  value: string
): value is 'intern' | 'mentor' | 'admin' {
  return ['intern', 'mentor', 'admin'].includes(value)
}
