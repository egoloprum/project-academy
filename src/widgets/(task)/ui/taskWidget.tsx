import { TaskEditDialog, TaskSaveDialog, TaskTextarea } from '@/features/(task)'

import { taskTimeData } from '../helpers/data'

export const TaskWidget = ({}) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-8">
      <TaskTextarea />
      <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
        <ul className="flex gap-4 font-medium">
          {taskTimeData.map((item, index) => (
            <li key={index} className="relative h-24 w-24">
              <svg className="absolute inset-0" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#1c1917"
                  strokeWidth="4"
                />

                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#bef264"
                  strokeWidth="4"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * item.progress) / 360}
                  transform="rotate(-90 50 50)"
                />
              </svg>

              <div className="h-full w-full flex flex-col justify-center items-center">
                <span className="text-3xl">{item.value}</span>
                <span>{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="grid gap-4 w-full">
          <TaskEditDialog />
          <TaskSaveDialog />
        </div>
      </div>
    </div>
  )
}
