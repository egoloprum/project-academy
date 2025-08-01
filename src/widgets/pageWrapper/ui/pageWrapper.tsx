'use client'

import { HTMLMotionProps, motion } from 'framer-motion'

export const PageWrapper = (props: HTMLMotionProps<'div'>) => {
  return (
    <div className="bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        {...props}
      />
    </div>
  )
}
