import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Big3DLogo from './Big3DLogo'

const CARDS = [
  { id: 'about', emoji: '👤', title: 'About Me', sub: 'Background & summary', color: 'from-accent/20 to-accent/5', glow: 'hover:shadow-[0_0_30px_rgba(108,142,245,0.35)]' },
  { id: 'experience', emoji: '💼', title: 'Experience', sub: '4+ years of work history', color: 'from-info/20 to-info/5', glow: 'hover:shadow-[0_0_30px_rgba(96,165,250,0.35)]' },
  { id: 'skills', emoji: '⚡', title: 'Skills', sub: 'Tech stack & expertise', color: 'from-violet/20 to-violet/5', glow: 'hover:shadow-[0_0_30px_rgba(167,139,250,0.35)]' },
  { id: 'projects', emoji: '🚀', title: 'Projects', sub: "What I've built", color: 'from-success/20 to-success/5', glow: 'hover:shadow-[0_0_30px_rgba(52,211,153,0.35)]' },
  { id: 'education', emoji: '🎓', title: 'Education', sub: 'Academic background', color: 'from-accent-orange/20 to-accent-orange/5', glow: 'hover:shadow-[0_0_30px_rgba(232,124,78,0.35)]' },
  { id: 'contact', emoji: '📬', title: 'Contact', sub: 'Get in touch', color: 'from-accent/20 to-info/5', glow: 'hover:shadow-[0_0_30px_rgba(108,142,245,0.35)]' },
]

export default function WelcomeScreen({ onSend }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-start min-h-full px-5 pt-16 pb-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Avatar Hero Logo */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 150, damping: 18, delay: 0.1 }}
        className="mb-6 relative"
      >
        <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full scale-110" />
        <img 
          src="/avatar.png" 
          alt="Gugan Senthilnathan" 
          className="relative w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white/10 shadow-2xl z-10"
        />
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-surface-light dark:border-surface z-20" title="Available for work" />
      </motion.div>

      {/* Glowing ring decoration */}
      <motion.div
        className="relative mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="absolute inset-0 blur-2xl bg-accent/30 rounded-full" />
        <h1 className="relative text-[28px] md:text-[32px] font-black text-ink-l dark:text-white leading-tight">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-accent via-violet to-accent-orange bg-clip-text text-transparent">
            Gugan Senthilnathan
          </span>
        </h1>
      </motion.div>

      {/* Typing animation */}
      <motion.div
        className="text-sm font-semibold text-accent mb-3 min-h-[22px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <TypeAnimation
          sequence={[
            'Senior Front-End Developer 👨‍💻', 2200,
            'Scrum Master 🎯', 2000,
            'React.js Specialist ⚛️', 2000,
            'Real-Time UI Expert 🔌', 2000,
            'WebSocket Engineer ⚡', 2000,
          ]}
          wrapper="span"
          speed={52}
          repeat={Infinity}
        />
      </motion.div>

      {/* Stats bar */}
      <motion.div
        className="flex gap-4 mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {[['4+', 'Years'], ['3', 'Companies'], ['4', 'Projects'], ['30%', 'Sprint ↑']].map(([v, l]) => (
          <div key={l} className="flex flex-col items-center gap-0.5">
            <span className="text-lg font-black text-accent leading-none">{v}</span>
            <span className="text-[10px] text-ink-l-dim dark:text-ink-dim uppercase tracking-widest">{l}</span>
          </div>
        ))}
      </motion.div>

      {/* Summary */}
      <motion.p
        className="text-[13px] text-ink-l-muted dark:text-ink-muted max-w-[520px] leading-relaxed mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
      >
        Ask me anything about my experience, skills, and projects — or explore using the cards below.
      </motion.p>

      {/* Navigation cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-[560px]">
        {CARDS.map((card, i) => (
          <motion.button
            key={card.id}
            onClick={() => onSend(card.id)}
            className={`relative flex flex-col items-start gap-1.5 px-4 py-3.5 bg-gradient-to-br ${card.color} border border-white/[0.07] rounded-2xl text-left overflow-hidden transition-all duration-300 ${card.glow} hover:border-white/20 hover:-translate-y-1`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.07 }}
            whileTap={{ scale: 0.96 }}
          >
            {/* Corner glow */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white/5 blur-xl" />
            <span className="text-[22px]">{card.emoji}</span>
            <div>
              <strong className="block text-[13px] font-bold text-ink-l dark:text-white">{card.title}</strong>
              <span className="block text-[11px] text-ink-l-dim dark:text-ink-dim mt-0.5">{card.sub}</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Scroll hint */}
      <motion.p
        className="mt-8 text-[11px] text-ink-l-dim dark:text-ink-dim"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        ✦ Type a question or click a card to explore ✦
      </motion.p>
    </motion.div>
  )
}
