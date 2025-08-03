import { tableData } from '../helpers/data'

type StatusKey =
  | 'Принят на стажировку'
  | 'На рассмотрении'
  | 'Заявка отклонена'
  | 'Не проверено'

export const RatingMentorTable = ({}) => {
  const dataStatusColors: Record<StatusKey, string> = {
    'Принят на стажировку': 'text-lime-400',
    'На рассмотрении': 'text-orange-400',
    'Заявка отклонена': 'text-red-400',
    'Не проверено': 'text-gray-400'
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[450px]">
        <thead>
          <tr className="bg-stone-800 text-nowrap">
            <th className="px-4 py-2 text-start rounded-l-md">№</th>
            <th className="px-4 py-2 text-start">ФИО</th>
            <th className="px-4 py-2 text-start">Результат</th>
            <th className="px-4 py-2 text-start">Отзыв</th>
            <th className="px-4 py-2 text-start rounded-r-md">Статус</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            const statusKey = data.status as StatusKey
            const colorClass = dataStatusColors[statusKey] || 'text-gray-400'

            return (
              <tr key={index} className="border-b border-stone-800">
                <td className="p-4 md:py-6">{index + 1}</td>
                <td className="p-4 md:py-6 text-nowrap">{data.name}</td>
                <td className="p-4 md:py-6">{data.result}</td>
                <td className="p-4 md:py-6 max-w-40 min-w-[180px]">
                  {data.review}
                </td>
                <td className={`p-4 md:py-6 text-nowrap ${colorClass}`}>
                  {data.status}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
