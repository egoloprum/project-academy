import { UsersDeleteBtn, UsersEditBtn } from '@/features/(users)'
import { UsersTableData } from '../helpers/data'

export const UsersTable = ({}) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[450px]">
        <thead>
          <tr className="bg-stone-800">
            <th className="px-4 py-2 text-start rounded-l-md">ФИО</th>
            <th className="px-4 py-2 text-start text-nowrap">
              Электронная почта
            </th>
            <th className="px-4 py-2 text-start text-nowrap">Роль</th>
            <th className="px-4 py-2 text-start text-nowrap">Направление</th>
            <th className="px-4 py-2 text-start text-nowrap">Набор</th>
            <th className="rounded-r-md"></th>
          </tr>
        </thead>
        <tbody>
          {UsersTableData.map((data, index) => (
            <tr key={index} className="border-b border-stone-800">
              <td className="px-4 md:py-6 text-nowrap">{data.name}</td>
              <td className="px-4 md:py-6 text-nowrap">{data.email}</td>
              <td className="px-4 md:py-6 text-nowrap">{data.role}</td>
              <td className="px-4 md:py-6 text-nowrap">{data.direction}</td>
              <td className="px-4 md:py-6 text-nowrap">{data.generation}</td>
              <td className="px-4 md:py-6 text-end">
                <div className="flex justify-end gap-2">
                  <UsersEditBtn />
                  <UsersDeleteBtn />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
