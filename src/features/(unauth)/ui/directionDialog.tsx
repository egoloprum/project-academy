'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FC, JSX, useState } from 'react'

import { Button } from '@/shared/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/shared/components/ui/dialog'

import { descriptions, requirements, tasks } from '../helpers/data'

interface DirectionDialogProps {
  direction: {
    icon: JSX.Element
    content: string
    title: string
  }
}

export const DirectionDialog: FC<DirectionDialogProps> = ({ direction }) => {
  const [mode, setMode] = useState<string>('Требования')

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          className="w-full px-18 py-6 text-md cursor-pointer flex gap-2 items-center justify-center text-white bg-stone-900 rounded-md"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          <span>{direction.icon}</span>
          <span>{direction.content}</span>
        </motion.button>
      </DialogTrigger>

      <DialogContent className="bg-black border-stone-900 outline-stone-900 max-w-[90%] lg:!max-w-[800px] w-full p-8 overflow-y-auto max-h-[90%]">
        <DialogHeader>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}>
            <DialogTitle className="text-white text-3xl mb-4">
              {direction.title}
            </DialogTitle>
            <DialogDescription className="text-white text-md">
              {descriptions[direction.content as keyof typeof descriptions]}
            </DialogDescription>
          </motion.div>

          <div className="mt-10">
            <Button
              asChild
              className={`bg-transparent cursor-pointer text-md text-gray-400 rounded-none px-4 ${mode === 'Требования' && 'text-lime-300'}`}
              onClick={() => setMode('Требования')}>
              <motion.div
                className="relative pb-2"
                whileHover={{ scale: 1.05 }}>
                Требования
                {mode === 'Требования' && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime-300"
                    layoutId="directionDialog-underline"
                  />
                )}
              </motion.div>
            </Button>

            <Button
              asChild
              className={`bg-transparent cursor-pointer text-md text-gray-400 rounded-none px-4 ${mode === 'Задачи' && 'text-lime-300'}`}
              onClick={() => setMode('Задачи')}>
              <motion.div
                className="relative pb-2"
                whileHover={{ scale: 1.05 }}>
                Задачи
                {mode === 'Задачи' && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime-300"
                    layoutId="directionDialog-underline"
                  />
                )}
              </motion.div>
            </Button>

            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}>
                {mode === 'Требования' ? (
                  <motion.ul
                    className="grid sm:grid-cols-2 gap-4 mt-6 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}>
                    {requirements[
                      direction.content as keyof typeof requirements
                    ].map((requirement, index) => (
                      <motion.li
                        key={index}
                        className="text-white rounded-xl bg-stone-900 p-2 px-4 min-h-16 flex justify-center items-center text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.03 }}>
                        {requirement}
                      </motion.li>
                    ))}
                  </motion.ul>
                ) : (
                  <motion.ul
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}>
                    {tasks[direction.content as keyof typeof tasks].map(
                      (task, index) => (
                        <motion.li
                          key={index}
                          className="text-white rounded-xl bg-stone-900 p-2 px-4 min-h-16 flex justify-center items-center text-center"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.03 }}>
                          {task}
                        </motion.li>
                      )
                    )}
                  </motion.ul>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <DialogFooter className="!justify-center sticky bottom-0">
            <DialogClose asChild>
              <motion.button
                className="cursor-pointer bg-lime-300 hover:bg-lime-400 active:bg-lime-500 text-black font-medium px-18 py-4 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Подать заявку
              </motion.button>
            </DialogClose>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
