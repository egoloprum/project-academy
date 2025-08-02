import { TaskTextarea } from '@/features/(task)'

import { taskHistoryData } from '../helpers/data'

export const TaskHistoryWidget = ({}) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[450px]">
        <thead>
          <tr className="bg-stone-800">
            <th className="px-4 py-2 text-start rounded-l-md">Набор</th>
            <th className="px-4 py-2 text-start text-nowrap">
              Дата прохождения
            </th>
            <th className="px-4 py-2 text-start text-nowrap">Задание</th>
            <th className="px-4 py-2 text-start text-nowrap">Результат</th>
            <th className="px-4 py-2 text-start text-nowrap rounded-r-md">
              Комментарии
            </th>
          </tr>
        </thead>
        <tbody>
          {taskHistoryData.map((history, index) => (
            <tr
              key={index}
              className={`${taskHistoryData.length !== index + 1 && 'border-b'} border-stone-800`}>
              <td className="px-4 md:py-6 text-nowrap">{history.direction}</td>
              <td className="px-4 md:py-6">{history.date}</td>
              <td className="px-4 md:py-6 text-nowrap">
                <span className="text-lime-300 underline underline-offset-2 cursor-pointer">
                  {history.task}
                </span>
              </td>
              <td className="px-4 md:py-6">{history.result}</td>
              <td className="px-4 py-6 pr-0 max-w-48">
                <TaskTextarea
                  defaultValue={history.comment}
                  classNames="min-h-24 max-h-48 w-full bg-stone-800 hover:bg-stone-900 active:bg-stone-950"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
