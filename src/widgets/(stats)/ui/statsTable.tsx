import { tableData } from '../helpers/data'

export const StatsTable = ({}) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[450px]">
        <thead>
          <tr className="bg-stone-800 text-nowrap">
            <th className="px-4 py-2 text-start rounded-l-md">№</th>
            <th className="px-4 py-2 text-start">ФИО</th>
            <th className="px-4 py-2 text-start">Направление</th>
            <th className="px-4 py-2 text-start">Результат</th>
            <th className="px-4 py-2 text-start">Отзыв наставника</th>
            <th className="px-4 py-2 text-start">Подача заявки</th>
            <th className="px-4 py-2 text-start rounded-r-md">Дата рождения</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index} className="border-b border-stone-800">
              <td className="p-4 md:py-6">{index + 1}</td>
              <td className="p-4 md:py-6 text-nowrap">{data.name}</td>
              <td className="p-4 md:py-6 text-nowrap">{data.direction}</td>
              <td className="p-4 md:py-6 text-nowrap">{data.result}</td>
              <td className="p-4 md:py-6 max-w-40 min-w-[180px]">
                {data.review}
              </td>
              <td className="p-4 md:py-6 text-nowrap">{data.date}</td>
              <td className="p-4 md:py-6 text-nowrap">{data.birthday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
