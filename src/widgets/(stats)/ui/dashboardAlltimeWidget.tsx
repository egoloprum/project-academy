const data = [
  { label: 'Всего заявок', value: '150' },
  { label: 'Принято стажеров', value: '78' },
  { label: 'Отклонено заявок', value: '72' },
  { label: 'Средний бал по тестовому', value: '74, 5%' },
  { label: 'Процент принятых стажеров', value: '52%' }
]

export const DashboardAlltimeWidget = ({}) => {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {data.map((item, index) => (
        <li key={index} className="p-4 rounded-md bg-stone-800">
          <p>{item.label}</p>
          <p className="font-medium text-2xl">{item.value}</p>
        </li>
      ))}
    </ul>
  )
}
