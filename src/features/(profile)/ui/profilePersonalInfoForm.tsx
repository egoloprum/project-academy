'use client'

import { motion } from 'framer-motion'

import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'

export const ProfileInfoForm = ({}) => {
  return (
    <motion.form
      action=""
      className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-y-8 lg:gap-y-8 mt-4 md:mt-8 max-w-160"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}>
      <div className="flex flex-col gap-2">
        <Label className="text-gray-400" htmlFor="firstName">
          Имя
        </Label>
        <Input
          id="firstName"
          type="text"
          className="bg-stone-800 hover:bg-stone-900 focus:bg-stone-950 border-none outline-none"
          placeholder="Иван"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-gray-400" htmlFor="middleName">
          Фамилия
        </Label>
        <Input
          id="middleName"
          type="text"
          className="bg-stone-800 hover:bg-stone-900 focus:bg-stone-950 border-none outline-none"
          placeholder="Иванов"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-gray-400" htmlFor="lastName">
          Отчество
        </Label>
        <Input
          id="lastName"
          type="text"
          className="bg-stone-800 hover:bg-stone-900 focus:bg-stone-950 border-none outline-none"
          placeholder="Иванович"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-gray-400" htmlFor="birthday">
          Дата рождения
        </Label>
        <Input
          id="birthday"
          type="text"
          className="bg-stone-800 hover:bg-stone-900 focus:bg-stone-950 border-none outline-none"
          placeholder="01.01.2000"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-gray-400" htmlFor="telephone">
          Номер телефона
        </Label>
        <Input
          id="telephone"
          type="text"
          className="bg-stone-800 hover:bg-stone-900 focus:bg-stone-950 border-none outline-none"
          placeholder="+7 (900) 000-00-00"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-gray-400" htmlFor="city">
          Город
        </Label>
        <Input
          id="city"
          type="text"
          className="bg-stone-800 hover:bg-stone-900 focus:bg-stone-950 border-none outline-none"
          placeholder="Москва"
        />
      </div>
      <motion.button
        className="w-fit border px-4 py-2 text-sm text-black font-medium rounded-md bg-lime-300 hover:lime-400 active:lime-500 cursor-pointer border-none mt-4 md:mt-8"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}>
        Сохранить
      </motion.button>
    </motion.form>
  )
}
