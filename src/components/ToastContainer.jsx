import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useChatStore } from '../store/useChatStore'

export default function ToastContainer() {
  const { toasts } = useChatStore()
  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 flex flex-col gap-1.5 items-center z-[200] pointer-events-none">
      <AnimatePresence>
        {toasts.map(t => (
          <motion.div key={t.id}
            className="bg-card-light dark:bg-card border border-black/[0.09] dark:border-white/[0.08] text-ink-l dark:text-ink px-4 py-2 rounded-xl text-[13px] whitespace-nowrap shadow-lg pointer-events-auto"
            initial={{ opacity: 0, y: 16, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.25 }}>
            {t.msg}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
