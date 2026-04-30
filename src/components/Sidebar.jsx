import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useChatStore } from '../store/useChatStore'
import { NAV_ITEMS, QUICK_PROMPTS } from '../data/portfolio'
import Mini3DLogo from './Mini3DLogo'

export default function Sidebar({ onSend }) {
  const { sessions, activeSessionId, activeNav, theme, newSession,
    switchSession, deleteSession, setActiveNav, toggleTheme,
    goHome, showHome, toggleSidebar } = useChatStore()
  const [hoveredDel, setHoveredDel] = useState(null)

  const handleNav = (id) => { setActiveNav(id); onSend(id) }
  const handleHome = () => { goHome() }

  return (
    <motion.aside
      initial={{ x: -260 }} animate={{ x: 0 }} exit={{ x: -260 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="w-[260px] flex-shrink-0 h-screen flex flex-col overflow-y-auto overflow-x-hidden glass-sidebar"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3.5 py-3.5 border-b border-black/[0.05] dark:border-white/[0.05]">
        <div className="flex items-center gap-2 font-bold text-sm text-ink-l dark:text-ink">
          <img src="/avatar.png" alt="Logo" className="w-6 h-6 rounded-full object-cover border border-white/10" /> Portfolio
        </div>

        <div className="flex gap-1 items-center">
          {/* Mobile Close Button */}
          <button onClick={toggleSidebar}
            className="md:hidden p-1.5 mr-1 rounded-md text-ink-l-dim dark:text-ink-dim hover:bg-hover-light dark:hover:bg-hover transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button onClick={toggleTheme}
            className="p-1.5 rounded-md text-ink-l-dim dark:text-ink-dim hover:bg-hover-light dark:hover:bg-hover transition-colors text-sm">
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <button onClick={() => newSession()}
            className="flex items-center justify-center p-1.5 rounded-md border border-black/[0.09] dark:border-white/[0.08]
              text-ink-l-dim dark:text-ink-dim hover:bg-hover-light dark:hover:bg-hover transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      {/* Explore Nav */}
      <div className="px-2.5 pt-3">
        <p className="text-[10px] font-bold tracking-widest uppercase text-ink-l-dim dark:text-ink-dim px-1.5 mb-1.5">Explore</p>
        <nav className="flex flex-col gap-0.5">

          {/* ─── Home button ─── */}
          <button
            onClick={handleHome}
            className={`relative flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] w-full text-left transition-all
              ${showHome
                ? 'bg-accent/[0.12] text-accent'
                : 'text-ink-l-muted dark:text-ink-muted hover:bg-hover-light dark:hover:bg-hover hover:text-ink-l dark:hover:text-ink'}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" stroke="currentColor" strokeWidth="2"/>
              <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Home</span>
            {showHome && <motion.div className="nav-indicator" layoutId="navInd" />}
          </button>

          {/* ─── Section nav items ─── */}
          {NAV_ITEMS.map(item => (
            <button key={item.id} onClick={() => handleNav(item.id)}
              className={`relative flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] w-full text-left transition-all
                ${activeNav === item.id && !showHome
                  ? 'bg-accent/[0.12] text-accent'
                  : 'text-ink-l-muted dark:text-ink-muted hover:bg-hover-light dark:hover:bg-hover hover:text-ink-l dark:hover:text-ink'}`}>
              <span className="text-sm flex-shrink-0">{item.icon}</span>
              <span>{item.label}</span>
              {activeNav === item.id && !showHome && <motion.div className="nav-indicator" layoutId="navInd" />}
            </button>
          ))}
        </nav>
      </div>

      {/* Quick Prompts */}
      <div className="px-2.5 pt-3">
        <p className="text-[10px] font-bold tracking-widest uppercase text-ink-l-dim dark:text-ink-dim px-1.5 mb-1.5">Quick Questions</p>
        <div className="flex flex-col gap-1">
          {QUICK_PROMPTS.map((p, i) => (
            <button key={i} onClick={() => onSend(p.query)}
              className="text-left px-2.5 py-1.5 rounded-md text-xs text-ink-l-dim dark:text-ink-dim
                border border-black/[0.05] dark:border-white/[0.05] hover:bg-hover-light dark:hover:bg-hover
                hover:text-ink-l-muted dark:hover:text-ink-muted transition-colors truncate">
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* History */}
      {sessions.length > 0 && (
        <div className="px-2.5 pt-3 flex-1 overflow-y-auto">
          <p className="text-[10px] font-bold tracking-widest uppercase text-ink-l-dim dark:text-ink-dim px-1.5 mb-1.5">History</p>
          <div className="flex flex-col gap-0.5">
            <AnimatePresence>
              {sessions.map(s => (
                <motion.div key={s.id}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                  onMouseEnter={() => setHoveredDel(s.id)} onMouseLeave={() => setHoveredDel(null)}
                  className={`flex items-center rounded-lg overflow-hidden transition-colors
                    ${s.id === activeSessionId ? 'bg-accent/[0.12]' : 'hover:bg-hover-light dark:hover:bg-hover'}`}>
                  <button onClick={() => switchSession(s.id)}
                    className="flex-1 flex items-center gap-2 px-2.5 py-1.5 text-xs text-ink-l-muted dark:text-ink-muted text-left min-w-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="truncate">{s.title || 'New Chat'}</span>
                  </button>
                  {hoveredDel === s.id && (
                    <button onClick={() => deleteSession(s.id)}
                      className="px-2 py-1.5 text-xs text-ink-l-dim dark:text-ink-dim hover:text-ink-l dark:hover:text-ink flex-shrink-0">✕</button>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-auto p-3 border-t border-black/[0.05] dark:border-white/[0.05]">
        <div className="flex items-center gap-2.5">
          <img src="/avatar.png" alt="Avatar" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-[13px] font-semibold text-ink-l dark:text-ink truncate">Gugan S.</span>
            <span className="text-[10px] text-ink-l-dim dark:text-ink-dim">Front-End Dev</span>
          </div>
          <a href="/resume.pdf" download="resume.pdf" onClick={() => useChatStore.getState().addToast('📄 Downloading Resume...')}
            className="p-1.5 rounded-md border border-black/[0.09] dark:border-white/[0.08] text-ink-l-dim dark:text-ink-dim
              hover:text-accent hover:border-accent transition-all flex items-center justify-center">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </motion.aside>
  )
}
