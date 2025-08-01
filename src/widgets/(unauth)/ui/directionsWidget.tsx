import {
  ChartNoAxesColumnIncreasing,
  Figma,
  FileBox,
  Presentation,
  Settings,
  ShieldCheck,
  Wrench
} from 'lucide-react'

import { DirectionDialog } from '@/features/(unauth)'

export const DirectionsWidget = ({}) => {
  const directions = [
    { icon: <Settings />, content: 'Backend', title: 'Backend-разработчик' },
    { icon: <Wrench />, content: 'Frontend', title: 'Frontend-разработчик' },
    {
      icon: <FileBox />,
      content: 'System Analyst',
      title: 'Cистемный аналитик'
    },
    {
      icon: <Presentation />,
      content: 'Project Manager',
      title: 'Менеджер проектов'
    },
    {
      icon: <ChartNoAxesColumnIncreasing />,
      content: 'CEO',
      title: 'CEO'
    },
    {
      icon: <ShieldCheck />,
      content: 'QA Engineer',
      title: 'Тестировщик (QA-специалист)'
    },
    { icon: <Figma />, content: 'UI/UX Designer', title: 'UX/UI Дизайнер' }
  ]

  return (
    <div className="mx-6 sm:mx-12 md:mx-24 py-10 sm:my-15 md:my-20 gap-5 md:gap-10 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl text-white">Направления</h2>
      <div className="flex flex-col items-center gap-4 md:gap-6 w-full">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full text-nowrap">
          {directions.slice(0, 4).map((direction, index) => (
            <li key={index} className="w-full">
              <DirectionDialog direction={direction} />
            </li>
          ))}
        </ul>

        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full text-nowrap">
          {directions.slice(4).map((direction, index) => (
            <li key={index + 4} className="w-full">
              <DirectionDialog direction={direction} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
