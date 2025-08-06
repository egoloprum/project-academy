'use client'

import { AnimatePresence, motion } from 'framer-motion'

import {
  DirectionDeleteBtn,
  DirectionEditBtn,
  DirectionTableTaskSelect,
  useDirection
} from '@/features/(directions)'

import { DirectionTableData } from '../helpers/data'

export const DirectionTable = ({}) => {
  const { selectedGeneration } = useDirection()

  const filteredData =
    DirectionTableData.find(item => item.generation === selectedGeneration)
      ?.data || []

  return (
    <div className="w-full overflow-x-auto mt-4 sm:mt-0">
      <table className="w-full min-w-[450px] overflow-hidden">
        <thead>
          <tr className="bg-stone-800 text-nowrap">
            <th className="px-4 py-2 text-start rounded-l-md">Направление</th>
            <th className="px-4 py-2 text-start">Наставник</th>
            <th className="px-4 py-2 text-start">Тестовое задание</th>
            <th className="px-4 py-2 text-start rounded-r-md"></th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence mode="wait">
            {filteredData.length === 0 && (
              <motion.tr
                key="empty-state"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="h-48 relative">
                <td colSpan={4} className="text-center">
                  {selectedGeneration
                    ? `Нет данных для ${selectedGeneration}`
                    : 'Выберите набор, чтобы посмотреть информацию'}
                </td>
              </motion.tr>
            )}

            {filteredData.map(data => (
              <motion.tr
                key={`${selectedGeneration}-${data.direction}`}
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="border-b border-stone-800">
                <td className="p-4 md:py-6 text-nowrap">{data.direction}</td>
                <td className="p-4 md:py-6 text-nowrap">{data.mentor}</td>
                <td className="p-4 md:py-6">
                  <DirectionTableTaskSelect
                    tasks={data.tasks.filter(
                      task =>
                        !selectedGeneration || task.includes(selectedGeneration)
                    )}
                  />
                </td>
                <td className="p-4 md:py-6 flex justify-end">
                  <DirectionEditBtn />
                  <DirectionDeleteBtn />
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  )
}
