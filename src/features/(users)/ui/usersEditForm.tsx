'use client'

import { motion } from 'framer-motion'

import { Input, Label, Textarea } from '@/shared/components'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/components'
import { useAnimatedRouter } from '@/shared/lib'

import { UsersEditData } from '../helpers/data'

const usersRoleData = [
  {
    value: 'applicant',
    content: 'Кандидат'
  },
  {
    value: 'intern',
    content: 'Стажер'
  },
  {
    value: 'mentor',
    content: 'Наставник'
  },
  {
    value: 'admin',
    content: 'Администратор'
  }
]

const usersGenerationData = [
  {
    value: 'generation-4',
    content: 'Поток 4'
  },
  {
    value: 'generation-3',
    content: 'Поток 3'
  },
  {
    value: 'generation-2',
    content: 'Поток 2'
  },
  {
    value: 'generation-1',
    content: 'Поток 1'
  }
]

const usersDirectionData = [
  {
    value: 'frontend',
    content: 'Frontend'
  },
  {
    value: 'backend',
    content: 'Backend'
  },
  {
    value: 'ceo',
    content: 'CEO'
  },
  {
    value: 'project-manager',
    content: 'Project Manager'
  },
  {
    value: 'system-analyst',
    content: 'System Analyst'
  },
  {
    value: 'designer',
    content: 'UI/UX Designer'
  },
  {
    value: 'qa-engineer',
    content: 'QA Engineer'
  }
]

export const UsersEditForm = ({}) => {
  const { push } = useAnimatedRouter()

  return (
    <form>
      <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-8">
        <section className="grid gap-4 md:gap-8">
          <div>
            <Label className="mb-2 text-gray-400" htmlFor="firstName">
              Фамилия
            </Label>
            <Input
              className="border-none bg-stone-800 w-full"
              type="text"
              id="firstName"
              defaultValue={UsersEditData.firstName}
            />
          </div>
          <div>
            <Label className="mb-2 text-gray-400" htmlFor="middleName">
              Имя
            </Label>
            <Input
              className="border-none bg-stone-800 w-full"
              type="text"
              id="middleName"
              defaultValue={UsersEditData.middleName}
            />
          </div>
          <div>
            <Label className="mb-2 text-gray-400" htmlFor="lastName">
              Отчество
            </Label>
            <Input
              className="border-none bg-stone-800 w-full"
              type="text"
              id="lastName"
              defaultValue={UsersEditData.lastName}
            />
          </div>
        </section>

        <section className="grid gap-4 md:gap-8">
          <div>
            <Label className="mb-2 text-gray-400" htmlFor="birthday">
              Дата рождения
            </Label>
            <Input
              className="border-none bg-stone-800 w-full"
              type="text"
              id="birthday"
              defaultValue={UsersEditData.birthday}
            />
          </div>
          <div>
            <Label className="mb-2 text-gray-400" htmlFor="email">
              Почта
            </Label>
            <Input
              className="border-none bg-stone-800 w-full"
              type="text"
              id="email"
              defaultValue={UsersEditData.email}
            />
          </div>
          <div>
            <Label className="mb-2 text-gray-400" htmlFor="city">
              Город
            </Label>
            <Input
              className="border-none bg-stone-800 w-full"
              type="text"
              id="city"
              defaultValue={UsersEditData.city}
            />
          </div>
        </section>

        <section className="grid gap-4 md:gap-8">
          <div>
            <Label className="mb-2 text-gray-400" htmlFor="role">
              Роль
            </Label>
            <Select>
              <SelectTrigger
                className="border-none bg-stone-800 w-full"
                id="role">
                <SelectValue
                  placeholder="Выбрать"
                  defaultValue={UsersEditData.role}
                />
              </SelectTrigger>
              <SelectContent className="border-none bg-stone-800 text-white">
                {usersRoleData.map(data => (
                  <SelectItem
                    key={data.value}
                    className="focus:bg-stone-900 focus:text-white"
                    value={data.value}>
                    {data.content}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-2 text-gray-400" htmlFor="generation">
              Набор
            </Label>
            <Select>
              <SelectTrigger
                className="border-none bg-stone-800 w-full"
                id="generation">
                <SelectValue
                  placeholder="Выбрать"
                  defaultValue={UsersEditData.generation}
                />
              </SelectTrigger>
              <SelectContent className="border-none bg-stone-800 text-white">
                {usersGenerationData.map(data => (
                  <SelectItem
                    key={data.value}
                    className="focus:bg-stone-900 focus:text-white"
                    value={data.value}>
                    {data.content}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-2 text-gray-400" htmlFor="direction">
              Направление
            </Label>
            <Select>
              <SelectTrigger
                className="border-none bg-stone-800 w-full"
                id="direction">
                <SelectValue
                  placeholder="Выбрать"
                  defaultValue={UsersEditData.direction}
                />
              </SelectTrigger>
              <SelectContent className="border-none bg-stone-800 text-white">
                {usersDirectionData.map(data => (
                  <SelectItem
                    key={data.value}
                    className="focus:bg-stone-900 focus:text-white"
                    value={data.value}>
                    {data.content}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </section>

        <div className="xl:col-span-2 h-full flex flex-col">
          <Label className="mb-2 text-gray-400" htmlFor="comment">
            Комментарии
          </Label>
          <Textarea
            id="comment"
            className="border-none bg-stone-800 h-full max-h-60 min-h-24"
            defaultValue={UsersEditData.comment}
          />
        </div>
      </div>
      <motion.button
        type="button"
        className="rounded-md px-4 py-2 mt-8 text-black font-medium cursor-pointer bg-lime-300 hover:bg-lime-400 active:bg-lime-500 w-full sm:w-fit"
        onClick={() => push('/users')}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}>
        <span>Сохранить изменения</span>
      </motion.button>
    </form>
  )
}
