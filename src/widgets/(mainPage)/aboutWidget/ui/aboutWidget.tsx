export const AboutWidget = ({}) => {
  const listItems = [
    {
      header: 'Команда',
      content:
        'Работай на настоящих проектах, в настоящей команде. Вместе мы решаем задачи, обсуждаем идеи и добиваемся результатов!'
    },
    {
      header: 'Интенсив',
      content:
        'Каждая неделя, вложенная в изучение IT, — это новый этап вашего пути. Тебя ждёт 4 месяца интенсивной стажировки и обучения.'
    },
    {
      header: 'Наставники',
      content:
        'Опытные специалисты, которые всегда готовы помочь. Обращайтесь с любыми вопросами, вместе найдем ответы.'
    },
    {
      header: 'Опыт',
      content:
        'Ты сможешь 4 месяца работать в полноценной команде разработчиков.'
    }
  ]

  return (
    <div className="mx-[156px] text-(--white-main) flex flex-col gap-[32px]">
      <p className="text-[36px] font-bold w-full text-center">О стажировке</p>
      <ul className="flex gap-[24px]">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="p-[24px] flex flex-col gap-[24px] bg-(--white-200) rounded-[12px] w-full">
            <p className="text-[24px] font-bold border-2 border-(--primary-main) rounded-[16px] px-[24px] py-[16px]">
              {item.header}
            </p>
            <p className="text-[18px]">{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
