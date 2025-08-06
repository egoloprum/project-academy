'use client'

import { AnimatePresence, motion } from 'framer-motion'

import {
  UsersDeleteBtn,
  UsersEditBtn,
  useUsersSearchContext
} from '@/features/(users)'

export const UsersTable = ({}) => {
  const { usernameSearch, currentUsers } = useUsersSearchContext()

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[450px] overflow-hidden">
        <thead>
          <tr className="bg-stone-800">
            <th className="px-4 py-2 text-start rounded-l-md w-48">ФИО</th>
            <th className="px-4 py-2 text-start text-nowrap w-80">
              Электронная почта
            </th>
            <th className="px-4 py-2 text-start text-nowrap w-48">Роль</th>
            <th className="px-4 py-2 text-start text-nowrap w-80">
              Направление
            </th>
            <th className="px-4 py-2 text-start text-nowrap">Набор</th>
            <th className="rounded-r-md"></th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence mode="wait">
            {currentUsers.length === 0 && (
              <motion.tr
                key="empty-state"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="h-48 relative">
                <td colSpan={6} className="text-center">
                  Нет пользователей с именем ({usernameSearch})
                </td>
              </motion.tr>
            )}

            {currentUsers.map((data, index) => (
              <motion.tr
                key={index}
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.1, ease: 'easeInOut' }}
                className="border-b border-stone-800 text-sm sm:text-base">
                <td className="px-4 md:py-6 text-nowrap">{data.name}</td>
                <td className="px-4 md:py-6 text-nowrap">{data.email}</td>
                <td className="px-4 md:py-6 text-nowrap">{data.role}</td>
                <td className="px-4 md:py-6 text-nowrap">{data.direction}</td>
                <td className="px-4 md:py-6 text-nowrap">{data.generation}</td>
                <td className="px-4 md:py-6 text-end">
                  <div className="flex justify-end gap-2">
                    <UsersEditBtn id={index + 1} />
                    <UsersDeleteBtn />
                  </div>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  )
}
