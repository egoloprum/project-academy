'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { useRatingMentor } from '@/features/(rating)'

type StatusKey =
  | 'Принят на стажировку'
  | 'На рассмотрении'
  | 'Заявка отклонена'
  | 'Не проверено'

export const RatingMentorTable = ({}) => {
  const { ratingCurrentTable } = useRatingMentor()

  const dataStatusColors: Record<StatusKey, string> = {
    'Принят на стажировку': 'text-lime-400',
    'На рассмотрении': 'text-orange-400',
    'Заявка отклонена': 'text-red-400',
    'Не проверено': 'text-gray-400'
  }

  return (
    <div className="w-full overflow-y-auto max-h-120 scrollbar">
      <table className="w-full min-w-[450px]">
        <thead>
          <tr className="bg-stone-800 text-nowrap">
            <th className="px-4 py-2 text-start rounded-l-md w-20">№</th>
            <th className="px-4 py-2 text-start w-80">ФИО</th>
            <th className="px-4 py-2 text-start w-60">Результат</th>
            <th className="px-4 py-2 text-start w-100">Отзыв</th>
            <th className="px-4 py-2 text-start rounded-r-md">Статус</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence mode="wait">
            {ratingCurrentTable.length === 0 && (
              <motion.tr
                key="empty-state"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-48 relative">
                <td colSpan={6} className="text-center">
                  Нет пользователей
                </td>
              </motion.tr>
            )}

            {ratingCurrentTable.map((data, index) => {
              const statusKey = data.status.content as StatusKey
              const colorClass = dataStatusColors[statusKey] || 'text-gray-400'

              return (
                <motion.tr
                  key={index}
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.1, ease: 'easeInOut' }}
                  className="border-b border-stone-800">
                  <td className="p-4 md:py-6">{index + 1}</td>
                  <td className="p-4 md:py-6 text-nowrap">{data.userName}</td>
                  <td className="p-4 md:py-6">
                    {data.result && `${data.result} %`}
                  </td>
                  <td className="p-4 md:py-6 max-w-40 min-w-[180px]">
                    {data.review}
                  </td>
                  <td className={`p-4 md:py-6 text-nowrap ${colorClass}`}>
                    {data.status.content}
                  </td>
                </motion.tr>
              )
            })}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  )
}
