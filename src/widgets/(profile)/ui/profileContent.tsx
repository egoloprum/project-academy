'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

import { ProfileInfoForm, ProfileSettingsForm } from '@/features/(profile)'
import { useProfileForm } from '@/features/(profile)/helpers/profileContext'

const userTypes = {
  intern: 'Стажер',
  mentor: 'Наставник',
  admin: 'Администратор'
}

export const ProfileContent = ({
  userType
}: {
  userType: 'intern' | 'mentor' | 'admin'
}) => {
  const { activeForm } = useProfileForm()

  return (
    <div className="h-fit w-full">
      <div className="flex items-center gap-4 mb-8">
        <Image src="/avatar.svg" width={100} height={100} alt="avatar" />
        <p className="flex flex-col">
          <span className="text-2xl font-bold">Иван Иванов</span>
          <span className="text-base">{userTypes[userType]}</span>
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeForm}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}>
          {activeForm === 'info' ? (
            <ProfileInfoForm />
          ) : (
            <ProfileSettingsForm />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
