import { GenerationsAllTableData } from '../helpers/data'

export const GenerationsAllTable = ({}) => {
  return (
    <ul>
      {GenerationsAllTableData.map((item, index) => (
        <li
          key={index}
          className="px-4 py-6 sm:py-8 flex justify-between border-b border-stone-800 font-medium">
          <p>{item.name}</p>
          <p className="text-lime-500">{item.content}</p>
        </li>
      ))}
    </ul>
  )
}
