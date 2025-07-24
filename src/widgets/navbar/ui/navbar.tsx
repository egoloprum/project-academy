'use client'

import { FC } from 'react'

interface NavbarProps {
  userId: string
}

const pathsOfAdmin = [
  {
    path: '/users',
    content: 'Пользователи'
  },
  {
    path: '/directions',
    content: 'Наборы'
  },
  {
    path: '/status',
    content: 'Статистика'
  },
  {
    path: '/rating',
    content: 'Рейтинг'
  },
  {
    path: '/profile',
    content: 'Профиль'
  }
]

const pathsOfMentor = [
  {
    path: '/task',
    content: 'Тестовое задание'
  },
  {
    path: '/checking',
    content: 'Проверка'
  },
  {
    path: '/рейтинг',
    content: 'rating'
  },
  {
    path: '/all-tasks',
    content: 'Все задания'
  }
]

const pathsOfIntern = [
  {
    path: '/task',
    content: 'Тестовое задание'
  },
  {
    path: '/profile',
    content: 'Профиль'
  }
]

export const Navbar: FC<NavbarProps> = ({ userId }) => {
  return <nav>qweqw</nav>
}
