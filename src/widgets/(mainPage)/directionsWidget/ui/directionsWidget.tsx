import {
  ChartNoAxesColumnIncreasing,
  Figma,
  FileBox,
  Presentation,
  Settings,
  ShieldCheck,
  Wrench
} from 'lucide-react'

import { DirectionDialog } from '@/features/directionDialog'

export const DirectionsWidget = ({}) => {
  const directions = [
    { icon: <Settings />, content: 'Backend' },
    { icon: <Wrench />, content: 'Frontend' },
    { icon: <FileBox />, content: 'System Analyst' },
    { icon: <Presentation />, content: 'Project Manager' },
    { icon: <ChartNoAxesColumnIncreasing />, content: 'CEO' },
    { icon: <ShieldCheck />, content: 'QA Engineer' },
    { icon: <Figma />, content: 'UI/UX Designer' }
  ]

  return (
    <div className="mx-6 sm:mx-12 md:mx-24 py-10 sm:my-15 md:my-20 gap-5 md:gap-10 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl text-white">Направления</h2>
      <ul className="flex flex-wrap justify-center gap-4 md:gap-y-6">
        {directions.map((direction, index) => (
          <li key={index} className="md:max-w-84 w-full">
            <DirectionDialog direction={direction} />
            {/* <Button className="w-full px-18 py-6 text-md cursor-pointer flex gap-2 items-center">
              <span>{direction.icon}</span>
              <span>{direction.content}</span>
            </Button> */}
          </li>
        ))}
      </ul>
    </div>
  )
}
