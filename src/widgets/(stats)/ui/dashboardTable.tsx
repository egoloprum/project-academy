import { dashboardTableData } from '../helpers/data'

export const DashboardTable = ({}) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[450px]">
        <thead>
          <tr className="bg-stone-800 text-nowrap">
            <th className="px-4 py-2 text-start rounded-l-md">Город</th>
            <th className="px-4 py-2 text-start">Количество заявок</th>
            <th className="px-4 py-2 text-start rounded-r-md">
              % от общего числа
            </th>
          </tr>
        </thead>
        <tbody>
          {dashboardTableData.map((data, index) => (
            <tr key={index} className="border-b border-stone-800">
              <td className="p-4 md:py-6 text-nowrap">{data.city}</td>
              <td className="p-4 md:py-6 text-nowrap">
                {data.applicationCount}
              </td>
              <td className="p-4 md:py-6 text-nowrap">
                {data.percentOfApplications}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
