import { CheckingDataType } from '../helpers/types'

export const CheckingTable = ({
  tableData
}: {
  tableData: CheckingDataType[]
}) => {
  const dataStatusColor = {
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
            <th className="px-4 py-2 text-start rounded-l-md">ФИО</th>
            <th className="px-4 py-2 text-start">Результат</th>
            <th className="px-4 py-2 text-start">Дата загрузки</th>
            <th className="px-4 py-2 text-start">Отзыв</th>
            <th className="px-4 py-2 text-start rounded-r-md">Статус</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index} className="border-b border-stone-800">
              <td className="p-4 md:py-6 text-nowrap">{data.name}</td>
              <td className="p-4 md:py-6">{data.result}</td>
              <td className="p-4 md:py-6 text-nowrap">{data.date}</td>
              <td className="p-4 md:py-6 max-w-40 min-w-[180px]">
                {data.feedback}
              </td>
              <td
                className={`p-4 md:py-6 text-nowrap ${dataStatusColor[data.status]}`}>
                {data.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
