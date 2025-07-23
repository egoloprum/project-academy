import { SubmitApplicationBtn } from '@/features/submitApplicationBtn'
import { Main2 } from '@/shared'

export const StageWidget = ({}) => {
  const listItems = [
    {
      header: 'Старт',
      content:
        'Первый месяц глубокая адаптация, проверяем твои навыки, даём возможность донабрать теории, начинаем изучать командные взаимодействия, подготавливаемся к проекту.'
    },
    {
      header: 'Погружение в проект',
      content:
        'Со второго месяца у тебя появляется проект. Проект сложный, с настоящим заказчиком, где ты работаешь в полноценной команде. Стажировка в таком цикле, готовит тебя к сложным проектам.'
    },
    {
      header: 'Работа над проектом',
      content:
        'Каждый участник команды развивает компетенции по своему направлению, где ему помогают наставники. Они работают с вами как тимлиды, т.е. вникают в суть, делают ревью вашей работы.'
    },
    {
      header: 'Защита проекта',
      content:
        'Все проекты будут презентованы на специальном мероприятии "Demo day" на которое мы пригласим представителей разных компаний. Это хороший шанс трудоустроиться, а самым лучшим мы предложим работу в процессе стажировки.'
    }
  ]

  return (
    <div className="2xl:mx-[156px] xl:mx-[120px] lg:mx-[74px] mx-[24px] sm:mx-[32px] md:mx-[48px] text-(--white-main) flex flex-col gap-[32px]">
      <p className="text-[36px] font-bold text-center">Этапы стажировки</p>
      <div className="flex 2xl:flex-row flex-col gap-[24px]">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="bg-(--white-200) rounded-[16px] flex flex-col gap-[24px] p-[32px] 2xl:max-w-[455px]">
              <p className="flex gap-[16px] items-center text-[24px] font-bold">
                <span className="border-2 border-(--primary-main) rounded-[12px] h-[66px] aspect-square flex justify-center items-center">
                  {index + 1}
                </span>
                <span>{item.header}</span>
              </p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <Main2 className="hidden lg:block" />
        </div>
      </div>
      <div className="flex justify-center">
        <SubmitApplicationBtn />
      </div>
    </div>
  )
}
