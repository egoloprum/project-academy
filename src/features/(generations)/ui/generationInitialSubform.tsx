'use client'

import { motion } from 'framer-motion'

import { Input, Label, Textarea } from '@/shared/components'
import { useAnimatedRouter } from '@/shared/lib'

import { useGenerationFormToggler } from '../helpers/generationFormTogglerContext'

export const GenerationInitialSubform = ({}) => {
  const { push } = useAnimatedRouter()
  const { setActiveForm } = useGenerationFormToggler()

  return (
    <section className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8">
      <p className="col-span-2 border border-stone-800 p-4 py-2 rounded-md text-xl font-medium">
        План:
      </p>
      <div className="grid gap-4">
        <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:items-center sm:justify-center">
          <p className="mt-0 sm:mt-4 md:mt-0 lg:mt-4 font-medium">Стажировка</p>
          <div className="w-full md:row-start-2 lg:row-start-1 lg:col-start-2">
            <Label
              htmlFor="internship-start-date"
              className="text-gray-400 mb-2">
              С
            </Label>
            <Input
              id="internship-start-date"
              className="bg-stone-800 hover:bg-stone-900 focus:bg-stone-950 border-none outline-none w-full"
              placeholder="дд.мм.гггг"
            />
          </div>
          <div className="md:col-start-2 md:row-start-2 lg:col-start-3 lg:row-start-1">
            <Label htmlFor="internship-end-date" className="text-gray-400 mb-2">
              До
            </Label>
            <Input
              id="internship-end-date"
              className="bg-stone-800 hover:bg-stone-900 focus:bg-stone-950 border-none outline-none w-full"
              placeholder="дд.мм.гггг"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:items-center sm:justify-center">
          <p className="mt-0 sm:mt-4 md:mt-0 lg:mt-4 font-medium">Набор</p>
          <div className="w-full md:row-start-2 lg:row-start-1 lg:col-start-2">
            <Label
              htmlFor="generation-start-date"
              className="text-gray-400 mb-2">
              С
            </Label>
            <Input
              id="generation-start-date"
              className="bg-stone-800 hover:bg-stone-900 focus:bg-stone-950 border-none outline-none w-full"
              placeholder="дд.мм.гггг"
            />
          </div>
          <div className="md:col-start-2 md:row-start-2 lg:col-start-3 lg:row-start-1">
            <Label htmlFor="generation-end-date" className="text-gray-400 mb-2">
              До
            </Label>
            <Input
              id="generation-end-date"
              className="bg-stone-800 hover:bg-stone-900 focus:bg-stone-950 border-none outline-none w-full"
              placeholder="дд.мм.гггг"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:items-center sm:justify-center">
          <p className="mt-0 sm:mt-4 md:mt-0 lg:mt-4 font-medium">
            Продвижение
          </p>
          <div className="w-full md:row-start-2 lg:row-start-1 lg:col-start-2">
            <Label htmlFor="progress-start-date" className="text-gray-400 mb-2">
              С
            </Label>
            <Input
              id="progress-start-date"
              className="bg-stone-800 hover:bg-stone-900 focus:bg-stone-950 border-none outline-none w-full"
              placeholder="дд.мм.гггг"
            />
          </div>
          <div className="md:col-start-2 md:row-start-2 lg:col-start-3 lg:row-start-1">
            <Label htmlFor="progress-end-date" className="text-gray-400 mb-2">
              До
            </Label>
            <Input
              id="progress-end-date"
              className="bg-stone-800 hover:bg-stone-900 focus:bg-stone-950 border-none outline-none w-full"
              placeholder="дд.мм.гггг"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <Label htmlFor="plan-comment" className="text-gray-400 mb-2">
          Комментарии
        </Label>
        <Textarea
          id="plan-comment"
          className="h-full bg-stone-800 border-none min-h-24"
        />
      </div>

      <div className="flex gap-4 mt-4">
        <motion.button
          type="button"
          className="px-4 py-2 w-40 bg-stone-800 hover:bg-stone-900 active:bg-stone-950 text-gray-400 font-medium cursor-pointer rounded-md"
          onClick={() => push('/generations')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          Отмена
        </motion.button>
        <motion.button
          type="button"
          className="px-4 py-2 w-40 bg-lime-100 hover:bg-lime-200 active:bg-lime-300 text-black font-medium cursor-pointer rounded-md"
          onClick={() => setActiveForm('detail')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          Далее
        </motion.button>
      </div>
    </section>
  )
}
