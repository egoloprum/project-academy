'use client'

import {
  CriteriaAddBtn,
  CriteriaDeleteBtn,
  CriteriaEditBtn
} from '@/features/(task)'

import { taskCriteriaData } from '../helpers/data'

export const CriteriaWidget = ({}) => {
  return (
    <>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[450px]">
          <thead>
            <tr className="bg-stone-800">
              <th className="px-4 py-2 text-start rounded-l-md">Критерий</th>
              <th className="px-4 py-2 text-start text-nowrap">
                Максимальный балл
              </th>
              <th className="rounded-r-md"></th>
            </tr>
          </thead>
          <tbody>
            {taskCriteriaData.map((criteria, index) => (
              <tr key={index} className="border-b border-stone-800">
                <td className="px-4 md:py-6 text-nowrap">{criteria.name}</td>
                <td className="px-4 md:py-6">{criteria.points}</td>
                <td className="px-4 md:py-6 text-end">
                  <div className="flex justify-end gap-2">
                    <CriteriaEditBtn />
                    <CriteriaDeleteBtn />
                  </div>
                </td>
              </tr>
            ))}
            <tr className="border-b border-stone-800 font-bold">
              <td className="px-4 py-4 md:py-6">Итого</td>
              <td className="px-4 py-4 md:py-6">30</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <CriteriaAddBtn className="mt-8 sm:mt-12 md:mt-8 lg:mt-16" />
    </>
  )
}
