'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

import {
  Checkbox,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/shared/components'

import { useTableContext } from '../helpers/ratingFinalContext'

const dataStatusColor = {
  'Принят на стажировку': 'text-lime-400',
  'На рассмотрении': 'text-orange-400',
  'Заявка отклонена': 'text-red-400',
  'Не проверено': 'text-gray-400'
}

export const RatingSelectTable = ({}) => {
  const {
    selectTableData,
    toggleSelectRow,
    toggleAllSelectRows,
    areAllSelectSelected
  } = useTableContext()

  return (
    <div className="w-full overflow-x-auto scrollbar-hidden">
      <table className="w-full min-w-[450px]">
        <thead>
          <tr className="text-nowrap">
            <th className="px-4 py-2 w-10 flex justify-end items-center">
              <Checkbox
                className="border-lime-300 w-5 h-5 cursor-pointer"
                checked={areAllSelectSelected}
                onCheckedChange={toggleAllSelectRows}
              />
            </th>
            <th className="bg-stone-800 px-4 py-2 text-start rounded-l-md w-full">
              ФИО
            </th>
            <th className="bg-stone-800 px-4 py-2 text-start w-full">
              Результат
            </th>
            <th className="bg-stone-800 px-4 py-2 text-start w-full">Статус</th>
            <th className="bg-stone-800 px-4 py-2 text-start rounded-r-md w-10"></th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {selectTableData.length === 0 && (
              <motion.tr
                className="h-48 relative"
                layout
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}>
                <td></td>
                <td className="absolute top-1/2 left-1/2 -translate-1/2 text-nowrap">
                  Внесите пользователей в список
                </td>
              </motion.tr>
            )}

            {selectTableData.map(data => (
              <motion.tr
                key={data.id}
                layout
                initial={data.animate ? { opacity: 0, x: -50 } : false}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}>
                <td className="px-4 py-4 w-10 flex justify-end items-center">
                  <Checkbox
                    className="border-lime-300 w-5 h-5 cursor-pointer"
                    checked={data.isSelected}
                    onCheckedChange={() => toggleSelectRow(data.id)}
                  />
                </td>
                <td className="px-4 py-4 text-nowrap border-b border-stone-800">
                  {data.name}
                </td>
                <td className="px-4 py-4 border-b border-stone-800">
                  {data.result}
                </td>
                <td
                  className={`px-4 py-4 text-nowrap border-b border-stone-800 ${dataStatusColor[data.status]}`}>
                  {data.status}
                </td>
                <td className="px-4 py-4 w-10 border-b border-stone-800">
                  <HoverCard>
                    <HoverCardTrigger className="cursor-pointer hover:text-lime-300">
                      <MessageCircle className="w-5 h-5" />
                    </HoverCardTrigger>
                    <HoverCardContent className="text-white bg-stone-800 border-stone-900">
                      {data.comment}
                    </HoverCardContent>
                  </HoverCard>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  )
}
