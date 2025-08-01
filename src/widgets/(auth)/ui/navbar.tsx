import Image from 'next/image'
import { FC } from 'react'

import { NavbarLinkBtn, UserDropdown } from '@/features/(navbar)'

interface NavbarProps {
  userType: 'intern' | 'mentor' | 'admin'
}

type PathItem = {
  url: string
  content: string
}

const pathConfig = {
  admin: [
    { url: '/users', content: 'Пользователи' },
    { url: '/directions', content: 'Наборы' },
    { url: '/stats', content: 'Статистика' },
    { url: '/rating', content: 'Рейтинг' },
    { url: '/profile', content: 'Профиль' }
  ],
  mentor: [
    { url: '/task', content: 'Тестовое задание' },
    { url: '/checking', content: 'Проверка' },
    { url: '/rating', content: 'Рейтинг' },
    { url: '/tasks', content: 'Все задания' },
    { url: '/profile', content: 'Профиль' }
  ],
  intern: [
    { url: '/task', content: 'Тестовое задание' },
    { url: '/profile', content: 'Профиль' }
  ]
} satisfies Record<'intern' | 'mentor' | 'admin', PathItem[]>

export const Navbar: FC<NavbarProps> = ({ userType }) => {
  const paths = pathConfig[userType] ?? []

  return (
    <div className="py-6 px-6 sm:px-12 md:px-24 flex gap-4 justify-between items-center border-b border-stone-900 bg-black text-white max-h-24">
      <Image src="/logo.svg" width={50} height={50} alt="logo" />

      <ul className="hidden lg:flex flex-wrap justify-center">
        {paths.map((path: PathItem) => (
          <li key={path.url}>
            <NavbarLinkBtn url={path.url} content={path.content} />
          </li>
        ))}
      </ul>
      <UserDropdown paths={paths} userType={userType} />
    </div>
  )
}
