'use client'

import { motion } from 'framer-motion'

import { useProfileForm } from '../helpers/profileContext'

export const ProfileSidebar = ({}) => {
  const { activeForm, setActiveForm } = useProfileForm()

  return (
    <div className="rounded-xl bg-stone-800 sm:max-w-72 w-full p-4 flex flex-col max-h-fit">
      <motion.button
        className={`w-full text-start cursor-pointer hover:bg-stone-900 active:bg-stone-950`}
        onClick={() => setActiveForm('info')}>
        <motion.div
          className="relative p-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          Личная информация
          {activeForm === 'info' && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-full w-[1.5px] bg-lime-300"
              layoutId="profileSidebar-underline"
            />
          )}
        </motion.div>
      </motion.button>
      <motion.button
        className={`w-full text-start cursor-pointer hover:bg-stone-900 active:bg-stone-950`}
        onClick={() => setActiveForm('settings')}>
        <motion.div
          className="relative p-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          Управление аккаунтом
          {activeForm === 'settings' && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-full w-[1.5px] bg-lime-300"
              layoutId="profileSidebar-underline"
            />
          )}
        </motion.div>
      </motion.button>
    </div>
  )
}
