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

export const RatingFinalTable = ({}) => {
  const {
    finalTableData,
    toggleFinalRow,
    toggleAllFinalRows,
    areAllFinalSelected
  } = useTableContext()

  return (
    <div className="w-full overflow-x-auto scrollbar-hidden">
      <table className="w-full min-w-[250px]">
        <thead>
          <tr className="text-nowrap">
            <th className="px-4 py-2 w-10 flex justify-end items-center">
              <Checkbox
                className="border-lime-300 w-5 h-5 cursor-pointer"
                checked={areAllFinalSelected}
                onCheckedChange={toggleAllFinalRows}
              />
            </th>
            <th className="px-4 py-2 text-start rounded-l-md bg-stone-800 w-full">
              Финальный список
            </th>
            <th className="px-4 py-2 text-start rounded-r-md bg-stone-800 w-10"></th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {finalTableData.length === 0 && (
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

            {finalTableData.map(data => (
              <motion.tr
                key={data.id}
                layout
                initial={data.animate ? { opacity: 0, x: 50 } : false}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="border-b border-stone-800">
                <td className="px-4 py-4 w-10 flex justify-end items-center">
                  <Checkbox
                    className="border-lime-300 w-5 h-5 cursor-pointer"
                    checked={data.isSelected}
                    onCheckedChange={() => toggleFinalRow(data.id)}
                  />
                </td>
                <td className="px-4 py-4 text-nowrap">{data.name}</td>
                <td className="px-4 py-4 w-10">
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
