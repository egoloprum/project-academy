'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { ProfileInfoForm, ProfileSettingsForm } from '@/features/(profile)'
import { useProfileForm } from '@/features/(profile)/helpers/profileContext'

export const ProfileFormsWidget = () => {
  const { activeForm } = useProfileForm()

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeForm}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="w-full">
          {activeForm === 'info' ? (
            <ProfileInfoForm />
          ) : (
            <ProfileSettingsForm />
          )}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
