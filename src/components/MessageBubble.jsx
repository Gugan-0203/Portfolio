import React from 'react'
import { motion } from 'framer-motion'
import AboutResponse from './responses/AboutResponse'
import ExperienceResponse from './responses/ExperienceResponse'
import SkillsResponse from './responses/SkillsResponse'
import ProjectsResponse from './responses/ProjectsResponse'
import EducationResponse from './responses/EducationResponse'
import ContactResponse from './responses/ContactResponse'
import ScrumResponse from './responses/ScrumResponse'
import AvailabilityResponse from './responses/AvailabilityResponse'
import FallbackResponse from './responses/FallbackResponse'

function ResponseContent({ content, onSend, onOpenModal }) {
  switch (content?.type) {
    case 'about':        return <AboutResponse data={content.data} />
    case 'experience':   return <ExperienceResponse data={content.data} />
    case 'skills':       return <SkillsResponse data={content.data} radar={content.radar} />
    case 'projects':     return <ProjectsResponse data={content.data} onOpenModal={onOpenModal} />
    case 'education':    return <EducationResponse data={content.data} languages={content.languages} />
    case 'contact':      return <ContactResponse data={content.data} />
    case 'scrum':        return <ScrumResponse data={content.data} />
    case 'availability': return <AvailabilityResponse data={content.data} />
    default:             return <FallbackResponse onSend={onSend} />
  }
}

export function TypingIndicator() {
  return (
    <div className="flex gap-3 px-4 py-3 items-start">
      <img src="/avatar.png" alt="Avatar" className="w-8 h-8 rounded-full object-cover flex-shrink-0 shadow-[0_0_12px_rgba(108,142,245,0.5)]" />
      <div className="msg-assistant inline-flex items-center gap-1.5 px-4 py-2.5">
        {[0,1,2].map(i => (
          <motion.div key={i} className="w-1.5 h-1.5 rounded-full bg-accent"
            animate={{ y: [0,-5,0], opacity: [0.4,1,0.4] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }} />
        ))}
      </div>
    </div>
  )
}

export default function MessageBubble({ message, onSend, onOpenModal }) {
  if (message.role === 'user') {
    return (
      <motion.div className="flex justify-end px-4 py-2"
        initial={{ opacity: 0, y: 10, x: 20 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 0.25 }}>
        <div className="msg-user px-4 py-2.5 text-[14px] max-w-[85%] md:max-w-[480px] leading-relaxed">
          {message.text}
        </div>
      </motion.div>
    )
  }
  return (
    <motion.div className="flex gap-3 px-4 py-3 items-start"
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <img src="/avatar.png" alt="Avatar" className="w-8 h-8 rounded-full object-cover flex-shrink-0 shadow-[0_0_12px_rgba(108,142,245,0.5)]" />
      <div className="flex-1 min-w-0 max-w-[800px]">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-[11px] font-black uppercase tracking-widest text-accent">Gugan</span>
          <span className="text-[11px] text-ink-l-dim dark:text-ink-dim opacity-60">· {message.content?.title}</span>
        </div>
        <div className="text-ink-l dark:text-ink leading-relaxed">
          <ResponseContent content={message.content} onSend={onSend} onOpenModal={onOpenModal} />
        </div>
      </div>
    </motion.div>
  )
}
