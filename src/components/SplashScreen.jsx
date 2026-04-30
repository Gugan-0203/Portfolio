import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Auto-complete after 3 seconds or on click
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

  const handleExit = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onClick={handleExit}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center cursor-pointer overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(66,133,244,0.03),transparent_70%)]" />

          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative mb-12"
          >
            {/* Stylized GS Logo */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <motion.path
                  d="M80 30C75 22 65 15 50 15C30 15 15 30 15 50C15 70 30 85 50 85C65 85 75 78 80 70"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.path
                  d="M50 50H80V80"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                />
                {/* Subtle Inner 'S' shape logic or just a G for Gugan */}
              </svg>
            </div>
          </motion.div>

          {/* Text Section */}
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="text-white text-3xl md:text-5xl font-black tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Gugan Senthilnathan
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
              className="h-[1px] bg-white/20 mx-auto mb-6"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="text-white/40 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase"
            >
              Senior Front-End Developer & Scrum Master
            </motion.p>
          </div>

          {/* Click to Enter Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
            className="absolute bottom-12 text-white/20 text-[9px] uppercase tracking-widest"
          >
            Click anywhere to enter
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
