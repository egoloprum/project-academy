import { GraduationCap, MapPin, Send, User } from 'lucide-react'

const data = [
  {
    logo: <User />,
    label: 'Средний возраст',
    content: '24 года'
  },
  {
    logo: <MapPin />,
    label: 'Топ регион',
    content: 'Томск'
  },
  {
    logo: <Send />,
    label: 'Топ направление',
    content: 'Менеджер проектов'
  },
  {
    logo: <GraduationCap />,
    label: 'Тип занятости',
    content: 'Студент'
  }
]

export const DashboardPortraitWidget = ({}) => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-xl sm:text-2xl text-white font-semibold">
        Портрет кандидата
      </p>
      <p className="flex flex-col gap-2">
        <span className="font-medium">Обобщенный портрет кандидата</span>
        <span className="text-gray-400">
          Типичный кандидат на стажировку - студент или выпускник вуза из
          Томска, интересующийся IT сферой.
        </span>
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-16 gap-y-4">
        {data.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="p-2 rounded-full w-10 h-10 flex justify-center items-center text-black bg-lime-100">
              {item.logo}
            </span>
            <p className="flex flex-col text-nowrap">
              <span className="text-gray-300">{item.label}</span>
              <span className="text-base sm:text-lg font-medium">
                {item.content}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
