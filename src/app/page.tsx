import { ChevronsRight, CircleCheckBig, User, Users } from 'lucide-react'

import { SendApplicationBtn } from '@/features/sendApplicationBtn'
import { DirectionsWidget } from '@/widgets/(mainPage)/directionsWidget'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { PageWrapper } from '@/widgets/pageWrapper'

export default function Home() {
  return (
    <PageWrapper>
      <main className="bg-black">
        <Header />
        <HeroSection />
        <DirectionsWidget />
        <AboutSection />
        <StagesSection />
        <Footer />
      </main>
    </PageWrapper>
  )
}

const HeroSection = () => {
  return (
    <div className="mx-6 sm:mx-12 md:mx-24 py-10 sm:my-15 md:my-20 flex flex-col gap-5 md:gap-10">
      <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
        <span>Стань IT-специалистом с </span>
        <span className="text-lime-300">Академией Абдрашитова</span>
      </h1>
      <p className="text-base md:text-xl text-gray-400 text-center">
        Получи опыт работы в настоящих проектах под руководством опытных
        наставников
      </p>
      <SendApplicationBtn />
    </div>
  )
}

const DirectionsSection = () => {}

const AboutSection = () => {
  const list = [
    {
      icon: <Users />,
      title: 'Команда',
      content:
        'Работай в команде над настоящим проектом. Решайте задачи, обсуждайте идеи и добивайтесь результатов вместе.'
    },
    {
      icon: <ChevronsRight />,
      title: 'Интенсив',
      content:
        'Изучение IT-сферы каждую неделю. Практические задания каждую неделю.'
    },
    {
      icon: <User />,
      title: 'Наставники',
      content:
        'Работай с опытными специалистами, которые всегда готовы помочь найти ответы.'
    },
    {
      icon: <CircleCheckBig />,
      title: 'Опыт',
      content: '4 месяца работы в полноценной команде.'
    }
  ]

  return (
    <div className="mx-6 sm:mx-12 md:mx-24 py-10 sm:my-15 md:my-20 gap-5 md:gap-10 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl text-white">О стажировке</h2>
      <ul className="grid md:grid-cols-2 gap-4">
        {list.map((element, index) => (
          <li
            className="bg-stone-950 rounded-xl px-8 py-12 flex flex-col gap-6"
            key={index}>
            <p className="flex items-center gap-2">
              <span className="text-lime-300">{element.icon}</span>
              <span className="text-xl text-white">{element.title}</span>
            </p>
            <p className="text-gray-400">{element.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

const StagesSection = () => {
  const list = [
    {
      title: 'Старт',
      content:
        'Первый месяц глубокой адаптации. Проверяем твои навыки, даём возможность донабрать теории, начинаем изучать командные взаимодействия и подготавливаемся к проекту.'
    },
    {
      title: 'Погружение в проект',
      content:
        'Со второго месяца у тебя появляется проект. Проект сложный, с настоящим заказчиком. Стажировка в таком цикле готовит тебя к сложным задачам.'
    },
    {
      title: 'Работа над проектом',
      content:
        'Каждый участник команды развивает компетенции по своем направлению, где ему помогают наставники. Они работают с вами как тимлиды: вникают в суть проекта, делают ревью вашей работы.'
    },
    {
      title: 'Защита проекта',
      content:
        'Все проекты будут презентованы на демо дне, куда мы пригласим представителей разных компаний. Это хороший шанс трудоустроиться, а самым лучшим мы  предложим работу после стажировки.'
    }
  ]
  return (
    <div className="mx-6 sm:mx-12 md:mx-24 py-10 sm:my-15 md:my-20 gap-5 md:gap-10 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl text-white">Этапы</h2>
      <ul className="flex flex-col gap-4 md:gap-6">
        {list.map((element, index) => (
          <li
            className="flex flex-col sm:flex-row gap-6 items-center"
            key={index}>
            <span className="text-white text-xl border border-lime-300 rounded-full h-12 w-12 shrink-0 sm:flex items-center justify-center hidden">
              {++index}
            </span>
            <div className="bg-stone-950 rounded-xl px-8 py-12 flex flex-col gap-6 w-full">
              <p className="text-white text-xl">{element.title}</p>
              <p className="text-gray-400">{element.content}</p>
            </div>
          </li>
        ))}
      </ul>
      <SendApplicationBtn />
    </div>
  )
}
