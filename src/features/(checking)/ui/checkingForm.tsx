'use client'

import { motion } from 'framer-motion'

import { Input, Textarea } from '@/shared/components'

export const CheckingForm = ({}) => {
  return (
    <form className="mt-4 sm:mt-8">
      <div className="p-4 sm:p-8 border rounded-md border-stone-800 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        <section className="">
          <p className="text-xl font-medium">Оценка по критериям</p>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-8 mt-4">
            <section className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <p className="flex flex-col">
                  <span className="font-medium">Качество кода</span>
                  <span className="text-sm text-gray-400">
                    Чистота и структурированность кода
                  </span>
                </p>
                <div className="flex gap-4 items-center">
                  <Input
                    id="quality-code"
                    className="w-20 border-none bg-stone-800"
                    defaultValue={8}
                  />
                  <label
                    htmlFor="quality-code"
                    className="text-nowrap text-gray-400">
                    из 10
                  </label>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <p className="flex flex-col">
                  <span className="font-medium">Функциональность</span>
                  <span className="text-sm text-gray-400">
                    Реализация всех требуемых функций
                  </span>
                </p>
                <div className="flex gap-4 items-center">
                  <Input
                    id="functionality"
                    className="w-20 border-none bg-stone-800"
                    defaultValue={8}
                  />
                  <label
                    htmlFor="functionality"
                    className="text-nowrap text-gray-400">
                    из 10
                  </label>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <p className="flex flex-col">
                  <span className="font-medium">Адаптивность</span>
                  <span className="text-sm text-gray-400">
                    Переносимость и кросс-платформенность
                  </span>
                </p>
                <div className="flex gap-4 items-center">
                  <Input
                    id="adaptivity"
                    className="w-20 border-none bg-stone-800"
                    defaultValue={8}
                  />
                  <label
                    htmlFor="adaptivity"
                    className="text-nowrap text-gray-400">
                    из 10
                  </label>
                </div>
              </div>
            </section>
            <div className="flex flex-wrap w-full gap-4 lg:gap-16">
              <p className="flex flex-col gap-4">
                <span className="font-medium text-nowrap">Итоговый бал</span>
                <span>24 из 30</span>
              </p>
              <p className="flex flex-col gap-4">
                <span className="font-medium text-nowrap">В процентах</span>
                <span>80 %</span>
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <label htmlFor="textarea-comment" className="text-xl font-medium">
            Комментарий к заданию
          </label>
          <Textarea
            id="textarea-comment"
            className="bg-stone-800 border-none min-h-24 max-h-48 mt-4"
            defaultValue="Работа хорошая, есть недостатки в структурированности кода"
          />
        </section>
        <section className="lg:col-span-2">
          <label htmlFor="textarea-review" className="text-xl font-medium">
            Отзыв по кандидату
          </label>
          <Textarea
            id="textarea-review"
            className="bg-stone-800 border-none mt-4 max-h-48"
            defaultValue="Хорошая работа. Стоит обратить внимание на структурированность кода"
          />
        </section>
      </div>
      <motion.button
        className="px-4 py-2 bg-lime-300 hover:bg-lime-400 active:bg-lime-500 cursor-pointer text-black font-medium rounded-md mt-8 sm:mt-12"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}>
        Сохранить изменения
      </motion.button>
    </form>
  )
}
