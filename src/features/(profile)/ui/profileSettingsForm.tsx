'use client'

import { motion } from 'framer-motion'

import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'

export const ProfileSettingsForm = ({}) => {
  return (
    <motion.form
      action=""
      className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-y-8 lg:gap-y-8 mt-4 md:mt-8 max-w-160"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}>
      <div className="flex flex-col gap-2">
        <Label className="text-gray-400" htmlFor="email">
          Электронная почта
        </Label>
        <Input
          id="email"
          type="text"
          className="bg-stone-800 hover:bg-stone-900 focus:bg-stone-950 border-none outline-none"
          placeholder="ivan2015@gmail.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-gray-400" htmlFor="password">
          Текущий пароль
        </Label>
        <Input
          id="password"
          type="password"
          className="bg-stone-800 hover:bg-stone-900 focus:bg-stone-950 border-none outline-none"
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
