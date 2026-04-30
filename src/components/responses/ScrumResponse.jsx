import React from 'react'

export default function ScrumResponse({ data }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-[var(--glow-color)] border border-accent/20 rounded-xl px-4 py-3 text-[13px] text-ink-l-muted dark:text-ink-muted leading-relaxed">
        🎯 Yes! I'm a <strong className="text-ink-l dark:text-ink">Scrum Master</strong> with hands-on Agile leadership at <strong className="text-ink-l dark:text-ink">IAT Technologies</strong>.
      </div>
      <p className="text-[14px] text-ink-l-muted dark:text-ink-muted leading-[1.75]">
        As Scrum Master I facilitated all ceremonies for a 6-member cross-functional team, driving a <strong className="text-accent">30% increase in sprint velocity</strong> over 3 quarters. I decomposed business requirements into clear user stories, reducing mid-sprint scope changes by ~35%.
      </p>
      <div className="flex flex-wrap gap-1.5 mt-1">
        {['Sprint Planning', 'Daily Stand-ups', 'Sprint Reviews', 'Retrospectives', 'Backlog Refinement', 'Stakeholder Communication'].map(item => (
          <span key={item} className="text-[12px] px-2.5 py-1.5 rounded-xl bg-accent/10 text-accent border border-accent/20 font-medium">✓ {item}</span>
        ))}
      </div>
    </div>
  )
}
