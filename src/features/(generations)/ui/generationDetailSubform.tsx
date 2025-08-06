'use client'

import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'

import {
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea
} from '@/shared/components'
import { useAnimatedRouter } from '@/shared/lib'

import {
  SelectDirectionData,
  SelectMentorData,
  SelectTaskData
} from '../helpers/data'
import { useGenerationFormToggler } from '../helpers/generationFormTogglerContext'

export const GenerationDetailSubform = ({}) => {
  const { push } = useAnimatedRouter()
  const { setActiveForm } = useGenerationFormToggler()

  const [tableRows, setTableRows] = useState([
    {
      id: 1,
      direction: '',
      mentor: '',
      count: '',
      task: '',
      comment: ''
    }
  ])

  const addTableRow = () => {
    if (tableRows.length >= 7) return

    setTableRows(prev => [
      ...prev,
      {
        id: Date.now(),
        direction: '',
        mentor: '',
        count: '',
        task: '',
        comment: ''
      }
    ])
  }

  return (
    <section className="flex flex-col gap-4 md:gap-8">
      <div className="w-full overflow-auto">
        <table className="w-full min-w-[450px] relative">
          <thead className="sticky top-0">
            <tr className="bg-stone-800 text-nowrap">
              <th className="px-4 py-2 text-start rounded-l-md">Направление</th>
              <th className="px-4 py-2 text-start text-nowrap">
                Наставник направления
              </th>
              <th className="px-4 py-2 text-start text-nowrap">
                Количество стажеров
              </th>
              <th className="px-4 py-2 text-start text-nowrap">
                Тестовое задание
              </th>
              <th className="px-4 py-2 text-start rounded-r-md">Комментарий</th>
            </tr>
          </thead>
          <tbody className="overflow-auto min-w-[450px]">
            {tableRows.map(row => (
              <tr key={row.id} className="border-b border-stone-800">
                <td className="p-4 md:py-6 text-nowrap">
                  <Select>
                    <SelectTrigger className="w-full bg-stone-800 border-none self-end text-sm md:text-base">
                      <div className="max-w-32 w-full flex items-center gap-2 truncate overflow-hidden">
                        <SelectValue placeholder="Направление" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-stone-800 border-none">
                      {SelectDirectionData.map(data => (
                        <SelectItem
                          key={data.value}
                          value={data.value}
                          className="focus:bg-stone-900 active:bg-stone-950 text-white focus:text-white text-sm md:text-base">
                          <span>{data.content}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </td>
                <td className="p-4 md:py-6 text-nowrap">
                  <Select>
                    <SelectTrigger className="w-full bg-stone-800 border-none self-end text-sm md:text-base">
                      <div className="flex items-center gap-2 truncate overflow-hidden">
                        <SelectValue placeholder="Наставник" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-stone-800 border-none">
                      {SelectMentorData.map(data => (
                        <SelectItem
                          key={data.value}
                          value={data.value}
                          className="focus:bg-stone-900 active:bg-stone-950 text-white focus:text-white text-sm md:text-base">
                          <span>{data.content}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </td>
                <td className="p-4 md:py-6 text-nowrap">
                  <Input
                    type="number"
                    placeholder="Количество стажеров"
                    className="border-none bg-stone-800 text-sm md:text-base"
                    min={0}
                    max={100}
                    maxLength={3}
                    defaultValue={0}
                  />
                </td>
                <td className="p-4 md:py-6 text-nowrap">
                  <Select>
                    <SelectTrigger className="w-full bg-stone-800 border-none self-end text-sm md:text-base">
                      <div className="max-w-40 w-full flex items-center gap-2 truncate overflow-hidden">
                        <SelectValue placeholder="Тестовое задание" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-stone-800 border-none">
                      {SelectTaskData.map(data => (
                        <SelectItem
                          key={data.value}
                          value={data.value}
                          className="focus:bg-stone-900 active:bg-stone-950 text-white focus:text-white text-sm md:text-base">
                          <span>{data.content}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </td>
                <td className="p-4 md:py-6 text-nowrap">
                  <Textarea
                    className="border-none bg-stone-800 min-w-40 min-h-20 max-h-28 text-sm md:text-base"
                    defaultValue={row.comment}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <motion.button
        type="button"
        className={`px-4 py-2 w-fit cursor-pointer bg-stone-800 rounded-md flex gap-1 items-center font-medium ${
          tableRows.length >= 7
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-stone-900 active:bg-stone-950'
        }`}
        whileHover={{ scale: tableRows.length < 7 ? 1.02 : 1 }}
        whileTap={{ scale: tableRows.length < 7 ? 0.98 : 1 }}
        onClick={addTableRow}
        disabled={tableRows.length >= 7}>
        <Plus className="w-4 h-4" />
        <span>Добавить направление</span>
        {tableRows.length >= 7 && (
          <span className="text-xs text-red-400 ml-2">(макс. 7)</span>
        )}
      </motion.button>

      <div className="flex gap-4 mt-4">
        <motion.button
          type="button"
          className="px-4 py-2 w-40 bg-lime-100 hover:bg-lime-200 active:bg-lime-300 text-black font-medium cursor-pointer rounded-md"
          onClick={() => setActiveForm('initial')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          Назад
        </motion.button>
        <motion.button
          type="button"
          className="px-4 py-2 w-48 bg-lime-300 hover:bg-lime-400 active:bg-lime-500 text-black font-medium cursor-pointer rounded-md"
          onClick={() => push('/generations')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          Запустить набор
        </motion.button>
      </div>
    </section>
  )
}
