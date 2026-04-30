import React from 'react'
import { useChatStore } from '../store/useChatStore'
import Mini3DLogo from './Mini3DLogo'

export default function Topbar() {
  const { toggleSidebar, newSession, addToast, sidebarOpen, goHome, showHome } = useChatStore()
  const handleShare = () =>
    navigator.clipboard.writeText(window.location.href).then(() => addToast('🔗 Link copied!'))

  return (
    <div className="flex items-center justify-between px-4 py-2.5 flex-shrink-0 glass-topbar gap-3">

      {/* LEFT — hamburger + brand */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleSidebar}
          className="p-1.5 rounded-md text-ink-l-dim dark:text-ink-dim hover:bg-hover-light dark:hover:bg-hover transition-colors"
          title="Toggle sidebar"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {!sidebarOpen && (
          <div className="flex items-center gap-2">
            <img src="/avatar.png" alt="Logo" className="w-6 h-6 rounded-full object-cover border border-white/10" />
            <span className="text-sm font-bold text-ink-l dark:text-ink">⚡ Portfolio</span>
          </div>
        )}
      </div>

      {/* CENTRE — nav links including Home */}
      <nav className="flex items-center gap-1">
        {/* Home */}
        <button
          onClick={goHome}
          title="Home"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200
            ${showHome
              ? 'bg-accent/[0.14] text-accent'
              : 'text-ink-l-dim dark:text-ink-dim hover:bg-hover-light dark:hover:bg-hover hover:text-ink-l dark:hover:text-ink'
            }`}
        >
          {/* House icon */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" stroke="currentColor" strokeWidth="2"/>
            <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span>Home</span>
        </button>

        {/* Version badge */}
        <div className="ml-2 flex items-center gap-1.5 text-xs text-ink-l-muted dark:text-ink-muted bg-surface-light dark:bg-surface border border-black/[0.09] dark:border-white/[0.08] rounded-full px-3 py-1.5 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
          <span className="bg-gradient-to-r from-accent to-accent-orange bg-clip-text text-transparent font-bold">
            GS Portfolio v2.0
          </span>
        </div>
      </nav>

      {/* RIGHT — actions */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => { newSession(); addToast('🆕 New chat started!') }}
          className="p-1.5 rounded-md text-ink-l-dim dark:text-ink-dim hover:bg-hover-light dark:hover:bg-hover transition-colors"
          title="New chat"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </button>
        <button
          onClick={handleShare}
          className="p-1.5 rounded-md text-ink-l-dim dark:text-ink-dim hover:bg-hover-light dark:hover:bg-hover transition-colors"
          title="Share"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2"/>
            <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
            <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2"/>
            <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
