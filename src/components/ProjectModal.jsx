import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useChatStore } from '../store/useChatStore'
import Project3D from './Project3D'

const PROJECT_COLORS = { 1: '#cc785c', 2: '#5b9bd5', 3: '#9b8bc4', 4: '#4caf7d' }

export default function ProjectModal() {
  const { modalProject: p, closeModal } = useChatStore()
  const color = p?.color || PROJECT_COLORS[p?.id] || '#cc785c'

  return (
    <AnimatePresence>
      {p && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[100]"
            style={{ backdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.7)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 z-[101] w-[92%] max-w-[560px] max-h-[88vh] flex flex-col overflow-hidden rounded-3xl border bg-panel"
            style={{ borderColor: color + '44', background: `linear-gradient(160deg, var(--bg-panel) 0%, ${color}10 100%)` }}
            initial={{ opacity: 0, scale: 0.85, x: '-50%', y: '-40%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.85, x: '-50%', y: '-40%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          >
            {/* 3D Project Preview */}
            <div className="relative shrink-0" style={{ height: 160 }}>
              <Project3D color={color} />
              {/* Gradient overlay on 3D */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent 50%, var(--bg-panel) 100%)' }} />
              {/* Close button */}
              <button onClick={closeModal}
                className="absolute top-3 right-3 z-50 w-8 h-8 rounded-full flex items-center justify-center text-ink-l-muted dark:text-white/70 hover:text-ink-l dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all text-lg font-light border border-black/10 dark:border-white/10">
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="px-5 pb-6 overflow-y-auto flex-1 min-h-0">
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <span className="text-[36px]">{p.emoji}</span>
                <div>
                  <h2 className="text-[18px] font-black text-ink-l dark:text-white leading-tight">{p.title}</h2>
                  <p className="text-[12px] mt-0.5" style={{ color }}>{p.company} · {p.year}</p>
                </div>
              </div>

              {/* Glow divider */}
              <div className="h-px mb-4 opacity-50" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />

              {/* Description */}
              <p className="text-[13px] text-ink-l-muted dark:text-ink-muted leading-relaxed mb-5">{p.details}</p>

              {/* Tech Stack */}
              <div className="mb-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color }}>Tech Stack</h3>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map(t => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-full font-semibold border"
                      style={{ color, borderColor: color + '55', background: color + '1a' }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-widest mb-2 text-success">Key Highlights</h3>
                <div className="flex flex-wrap gap-1.5">
                  {p.highlights.map(h => (
                    <span key={h} className="text-[11px] px-2.5 py-1 rounded-full bg-success/10 text-success border border-success/25 font-medium">✓ {h}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
