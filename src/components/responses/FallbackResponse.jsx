import React from 'react'

const CARDS = [
  { id: 'about', emoji: '👤', title: 'About Me', sub: 'Background & summary' },
  { id: 'experience', emoji: '💼', title: 'Experience', sub: '4+ years work history' },
  { id: 'skills', emoji: '⚡', title: 'Skills', sub: 'Tech stack' },
  { id: 'contact', emoji: '📬', title: 'Contact', sub: "Let's connect" },
]

export default function FallbackResponse({ onSend }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[14px] text-ink-l-muted dark:text-ink-muted leading-[1.75] mb-1">Here's what I can tell you about:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {CARDS.map(card => (
          <button
            key={card.id}
            className="flex items-center gap-3 bg-surface-light dark:bg-surface border border-black/[0.09] dark:border-white/[0.08] rounded-2xl p-3.5 text-left transition-colors hover:border-accent"
            onClick={() => onSend(card.id)}
          >
            <span className="text-[22px] flex-shrink-0">{card.emoji}</span>
            <div>
              <strong className="block text-[13px] font-semibold text-ink-l dark:text-ink">{card.title}</strong>
              <span className="block text-[11px] text-ink-l-dim dark:text-ink-dim mt-0.5">{card.sub}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
