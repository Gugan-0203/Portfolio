import React from 'react'

export default function AvailabilityResponse({ data }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 text-base font-bold text-ink-l dark:text-ink">
        <span className="w-2.5 h-2.5 rounded-full bg-success pulse-dot" />
        <strong>Available for new opportunities!</strong>
      </div>
      <p className="text-[14px] text-ink-l-muted dark:text-ink-muted leading-[1.75]">
        I'm actively looking for Senior Front-End Developer and Scrum Master roles. I'm based in <strong className="text-ink-l dark:text-ink">{data.location}</strong> and open to remote, hybrid, and on-site positions.
      </p>
      <div className="flex flex-wrap gap-1.5 mt-1">
        {['Full-Time Roles', 'Remote / Hybrid', 'Fintech & Product Companies', 'Startups', 'Agile Teams', 'React / TypeScript Projects'].map(p => (
          <span key={p} className="text-[12px] px-2.5 py-1.5 rounded-xl bg-accent/10 text-accent border border-accent/20 font-medium">✓ {p}</span>
        ))}
      </div>
      <p className="text-[13px] text-ink-l-dim dark:text-ink-dim mt-1">📧 Reach out at <a href={`mailto:${data.email}`} className="text-accent hover:underline">{data.email}</a> or <a href={data.linkedin} target="_blank" rel="noopener" className="text-accent hover:underline">connect on LinkedIn</a></p>
    </div>
  )
}
