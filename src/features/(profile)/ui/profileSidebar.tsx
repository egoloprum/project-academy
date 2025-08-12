'use client'

import { motion } from 'framer-motion'

import { useProfileForm } from '../helpers/profileContext'

export const ProfileSidebar = ({}) => {
  const { activeForm, setActiveForm } = useProfileForm()

  return (
    <div className="rounded-xl text-nowrap flex bg-transparent flex-col w-full sm:flex-row md:bg-stone-800 md:p-4 md:flex-col md:h-36 md:w-72">
      <motion.button
        className={`w-full text-start sm:text-center md:text-start  font-medium cursor-pointer hover:bg-stone-900 active:bg-stone-950 text-gray-400 ${activeForm === 'info' && 'text-lime-300'}`}
        onClick={() => setActiveForm('info')}>
        <motion.div
          className="relative p-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          Личная информация
          {activeForm === 'info' && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-full w-[1.5px] sm:w-full sm:h-[1.5px] md:h-full md:w-[1.5px] bg-lime-300"
              layoutId="profileSidebar-underline"
            />
          )}
        </motion.div>
      </motion.button>
      <motion.button
        className={`w-full text-start sm:text-center md:text-start font-medium cursor-pointer hover:bg-stone-900 active:bg-stone-950 text-gray-400 ${activeForm === 'settings' && 'text-lime-300'}`}
        onClick={() => setActiveForm('settings')}>
        <motion.div
          className="relative p-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          Управление аккаунтом
          {activeForm === 'settings' && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-full w-[1.5px] sm:w-full sm:h-[1.5px] md:h-full md:w-[1.5px] bg-lime-300"
              layoutId="profileSidebar-underline"
            />
          )}
        </motion.div>
      </motion.button>
    </div>
  )
}
