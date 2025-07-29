'use client'

import { motion } from 'framer-motion'
import { ChevronsRight, CircleCheckBig, User, Users } from 'lucide-react'

export const AboutWidget = () => {
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
      <motion.ul
        className="grid md:grid-cols-2 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}>
        {list.map((element, index) => (
          <motion.li
            className="bg-stone-950 rounded-xl px-8 py-12 flex flex-col gap-6"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}>
            <p className="flex items-center gap-2">
              <span className="text-lime-300">{element.icon}</span>
              <span className="text-xl text-white">{element.title}</span>
            </p>
            <p className="text-gray-400">{element.content}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
