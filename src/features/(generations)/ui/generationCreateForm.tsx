'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { Input, Label } from '@/shared/components'

import { useGenerationFormToggler } from '../helpers/generationFormTogglerContext'

import { GenerationDetailSubform } from './generationDetailSubform'
import { GenerationFormToggler } from './generationFormToggler'
import { GenerationInitialSubform } from './generationInitialSubform'

export const GenerationCreateForm = ({}) => {
  const { activeForm } = useGenerationFormToggler()

  return (
    <form action="" className="flex flex-col gap-8">
      <div className="grid lg:grid-cols-2 gap-4 sm:gap-8">
        <section className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <p className="font-medium text-nowrap mt-4">Создать новый набор</p>
          <div className="w-full">
            <Label htmlFor="new-generation-name" className="text-gray-400 mb-2">
              Название набора
            </Label>
            <Input
              id="new-generation-name"
              className="bg-stone-800 hover:bg-stone-900 focus:bg-stone-950 border-none outline-none w-full"
              placeholder="Поток"
            />
          </div>
        </section>

        <motion.p
          className="text-xl font-medium p-4 py-2 bg-stone-950 rounded-md lg:row-start-2 hidden lg:block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}>
          {activeForm === 'initial' ? 'Стартовые значения' : 'Параметры набора'}
        </motion.p>

        <GenerationFormToggler className="row-start-2 lg:col-start-2" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeForm}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}>
          {activeForm === 'initial' ? (
            <GenerationInitialSubform />
          ) : (
            <GenerationDetailSubform />
          )}
        </motion.div>
      </AnimatePresence>
    </form>
  )
}
