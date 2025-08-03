'use client'

import axios from 'axios'
import { motion } from 'framer-motion'
import { ChevronDown, LogOut } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/shared/components/ui/dropdown-menu'
import { useAnimatedRouter } from '@/shared/lib/hooks'

type PathItem = {
  url: string
  content: string
}

interface UserDropdownProps {
  paths: PathItem[]
  userType: 'intern' | 'mentor' | 'admin'
}

const userTypes = {
  intern: 'Стажер',
  mentor: 'Наставник',
  admin: 'Администратор'
}

export const UserDropdown: FC<UserDropdownProps> = ({ paths, userType }) => {
  const router = useRouter()

  const { push } = useAnimatedRouter()

  const clickHandler = async () => {
    try {
      await axios.post('/api/logout', {
        params: { userType: userType }
      })

      router.refresh()
    } catch {}
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button className="text-white px-4 py-2 rounded-md hover:bg-stone-900 active:bg-stone-950 cursor-pointer flex items-center gap-4">
          <p className="flex flex-col items-start text-start text-nowrap">
            <span className="text-bold md:text-xl">Иван Иванов</span>
            <span className="text-gray-400">{userTypes[userType]}</span>
          </p>
          <Image src="/avatar.svg" width={50} height={50} alt="avatar" />
          <ChevronDown />
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-68 bg-black hover:bg-black border-stone-800"
        align="end">
        <DropdownMenuGroup className="lg:hidden">
          {paths.map((path: PathItem) => (
            <DropdownMenuItem key={path.content} className="p-0 m-0">
              <motion.button
                className="text-white text-md px-4 py-2 bg-black hover:bg-stone-900 active:bg-stone-950 rounded-sm cursor-pointer flex items-center gap-2 w-full"
                onClick={() => push(path.url)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
                {path.content}
              </motion.button>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
        </DropdownMenuGroup>
        <DropdownMenuItem className="p-0 m-0">
          <motion.button
            className="text-white text-md px-4 py-2 bg-black hover:bg-stone-900 active:bg-stone-950 rounded-sm cursor-pointer flex items-center gap-2 w-full"
            onClick={() => clickHandler()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}>
            <LogOut className="text-white" />
            <span>Выйти</span>
          </motion.button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
