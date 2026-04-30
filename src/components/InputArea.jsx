import React, { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useVoiceInput } from '../hooks/useVoiceInput'
import { useChatStore } from '../store/useChatStore'

export default function InputArea({ onSend }) {
  const [text, setText] = useState('')
  const ref = useRef(null)
  const { addToast } = useChatStore()

  const handleResult = useCallback(t => { setText(t); addToast(`🎙️ Heard: "${t}"`) }, [addToast])
  const { listening, supported, start, stop } = useVoiceInput(handleResult)

  const submit = () => { if (!text.trim()) return; onSend(text.trim()); setText(''); if (ref.current) ref.current.style.height = 'auto' }
  const onKey = e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit() } }
  const resize = () => { if (ref.current) { ref.current.style.height = 'auto'; ref.current.style.height = Math.min(ref.current.scrollHeight, 180) + 'px' } }

  useEffect(() => {
    const h = (e) => {
      if (e.key === '/' && document.activeElement !== ref.current) { e.preventDefault(); ref.current?.focus() }
      if (e.key === 'Escape') { setText(''); ref.current?.blur() }
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [])

  return (
    <div className="px-4 pb-3.5 pt-2.5 flex-shrink-0 glass-input">
      <div className="max-w-[800px] mx-auto">
        <div className={`flex items-end gap-2 bg-surface-light dark:bg-surface border rounded-3xl px-4 py-2.5 transition-all
          ${listening ? 'border-red-400/50 shadow-[0_0_0_3px_rgba(220,50,50,0.07)]'
                      : 'border-black/[0.09] dark:border-white/[0.08] focus-within:border-accent/40 focus-within:shadow-[0_0_0_3px_rgba(108,142,245,0.06)]'}`}>
          <textarea ref={ref} value={text} onChange={e => { setText(e.target.value); resize() }} onKeyDown={onKey} rows={1} maxLength={500}
            placeholder={listening ? '🎙️ Listening...' : 'Ask me anything about Gugan... (press / to focus)'}
            className="flex-1 text-[14px] text-ink-l dark:text-ink bg-transparent outline-none max-h-[180px] leading-relaxed
              placeholder-ink-l-dim dark:placeholder-ink-dim resize-none overflow-y-auto" />
          <div className="flex items-center gap-1 flex-shrink-0">
            {supported && (
              <button onClick={listening ? stop : start} className="text-base p-1 rounded-md transition-colors hover:bg-hover-light dark:hover:bg-hover">
                {listening ? <motion.span animate={{ scale: [1,1.3,1] }} transition={{ repeat: Infinity, duration: 0.8 }}>🔴</motion.span> : '🎙️'}
              </button>
            )}
            <motion.button onClick={submit} disabled={!text.trim()} whileTap={{ scale: 0.9 }}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 transition-colors
                ${text.trim() ? 'bg-accent hover:bg-accent-h' : 'bg-card-light dark:bg-card cursor-not-allowed text-ink-l-dim dark:text-ink-dim'}`}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </div>
        </div>
        <p className="text-center text-[11px] text-ink-l-dim dark:text-ink-dim mt-1.5">
          Press <kbd className="bg-card-light dark:bg-card border border-black/[0.09] dark:border-white/[0.08] rounded px-1 text-[10px]">/</kbd> to focus ·{' '}
          <kbd className="bg-card-light dark:bg-card border border-black/[0.09] dark:border-white/[0.08] rounded px-1 text-[10px]">Enter</kbd> to send ·{' '}
          <kbd className="bg-card-light dark:bg-card border border-black/[0.09] dark:border-white/[0.08] rounded px-1 text-[10px]">Shift+Enter</kbd> new line
        </p>
      </div>
    </div>
  )
}
