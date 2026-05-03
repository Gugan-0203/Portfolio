import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Torus, MeshDistortMaterial, Float, PerspectiveCamera } from '@react-three/drei'
import { useChatStore } from '../../store/useChatStore'

function ContactOrb() {
  const m = useRef()
  useFrame((s) => {
    m.current.rotation.x = s.clock.getElapsedTime() * 0.4
    m.current.rotation.y = s.clock.getElapsedTime() * 0.6
  })
  return (
      <Torus ref={m} args={[0.8, 0.25, 24, 80]}>
        <MeshDistortMaterial color="#6c8ef5" distort={0.25} speed={2} roughness={0} metalness={1} />
      </Torus>
  )
}

function ContactItem({ icon, label, value, href, copyValue, color }) {
  const { addToast } = useChatStore()
  const handleCopy = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(copyValue || value).then(() => addToast(`✅ Copied: ${value}`))
  }
  return (
    <motion.div
      className="flex items-center gap-3 rounded-xl p-3.5 border transition-all cursor-pointer group"
      style={{ borderColor: 'var(--border)', background: `linear-gradient(135deg, ${color}0d, ${color}05)` }}
      whileHover={{ x: 6, borderColor: color + '77' }}
      transition={{ duration: 0.15 }}
    >
      <span className="text-[22px] flex-shrink-0">{icon}</span>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] uppercase tracking-widest mb-0.5" style={{ color }}>{label}</div>
        <div className="text-[13px] font-semibold text-ink-l dark:text-white truncate">
          {href
            ? <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color }}>{value}</a>
            : value
          }
        </div>
      </div>
      <button onClick={handleCopy}
        className="p-2 rounded-lg border border-border text-ink-l-dim dark:text-ink-dim hover:text-accent transition-all opacity-0 group-hover:opacity-100"
        style={{ background: 'var(--bg-surface)' }}
        title="Copy">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
          <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>
    </motion.div>
  )
}

export default function ContactResponse({ data }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contacts = [
    { icon: '📧', label: 'Email', value: data.email, href: `mailto:${data.email}`, copyValue: data.email, color: '#e87c4e' },
    { icon: '📞', label: 'Phone', value: data.phone, href: `tel:${data.phone}`, copyValue: data.phone, color: '#6c8ef5' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/gugan-s', href: data.linkedin, copyValue: data.linkedin, color: '#a78bfa' },
    { icon: '📍', label: 'Location', value: data.location, copyValue: data.location, color: '#34d399' },
  ]

  return (
    <div className="flex flex-col gap-3">
      {/* 3D contact hero */}
      <div className="relative rounded-2xl border border-accent/20 overflow-hidden card-hover"
        style={{ background: 'var(--glow-color)' }}>
        <div className="flex items-center gap-4 px-4 py-3">
          <div style={{ width: 70, height: 70, flexShrink: 0 }}>
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 3.5]} fov={55} />
              <ambientLight intensity={0.5} />
              <pointLight position={[3, 3, 3]} intensity={2} color="#6c8ef5" />
              <pointLight position={[-3, -3, 3]} intensity={0.8} color="#a78bfa" />
              <ContactOrb />
            </Canvas>
          </div>
          <div>
            <p className="text-[14px] text-ink-l-muted dark:text-ink-muted leading-relaxed">
              I'm <strong className="text-ink-l dark:text-white">open to new opportunities!</strong> Reach out through any of these channels:
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {contacts.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
            <ContactItem {...c} />
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.div 
        className="mt-4 p-5 rounded-2xl border border-border bg-surface dark:bg-surface/50 backdrop-blur-sm relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <AnimatePresence>
          {isSubmitted ? (
            <motion.div 
              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-surface-light/95 dark:bg-surface/95 backdrop-blur-md rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="w-12 h-12 rounded-full bg-success/20 text-success flex items-center justify-center text-2xl mb-3">✓</div>
              <h3 className="text-[16px] font-bold text-ink-l dark:text-white mb-2">Thanks for submitting!</h3>
              <p className="text-[13px] text-ink-l-muted dark:text-ink-muted text-center px-6">
                You will receive a message shortly.
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <h3 className="text-sm font-bold text-ink-l dark:text-white mb-4 flex items-center gap-2">
          <span className="text-lg">✍️</span> Send a Message
        </h3>
        
        <form className="flex flex-col gap-3" onSubmit={async (e) => {
          e.preventDefault();
          setIsSubmitting(true);
          const formData = new FormData(e.target);
          
          const payload = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
            _subject: `New Portfolio Inquiry from ${formData.get('name')}`
          };

          try {
            // Send to Gmail via FormSubmit (No redirect)
            await fetch(`https://formsubmit.co/ajax/gugan.qlik23@gmail.com`, {
              method: 'POST',
              headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify(payload)
            });

            // Redirect to WhatsApp
            const waNumber = '919894746314'; // Formatted from +91 98947 46314
            const waText = `Hi Gugan, my name is ${payload.name} (${payload.email}). Phone: ${payload.phone}. Message: ${payload.message}`;
            const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;
            window.open(waUrl, '_blank');
            
            setIsSubmitted(true);
            e.target.reset();
            setTimeout(() => setIsSubmitted(false), 5000);
          } catch (err) {
            console.error(err);
          } finally {
            setIsSubmitting(false);
          }
        }}>
          <div className="grid grid-cols-2 gap-3">
            <input 
              name="name"
              type="text" 
              placeholder="Your Name" 
              required
              className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all text-ink-l dark:text-ink"
            />
            <input 
              name="email"
              type="email" 
              placeholder="Your Email" 
              required
              className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all text-ink-l dark:text-ink"
            />
          </div>
          <input 
            name="phone"
            type="tel" 
            placeholder="Your Contact Number" 
            required
            className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all text-ink-l dark:text-ink"
          />
          <textarea 
            name="message"
            placeholder="How can I help you?" 
            rows="4"
            required
            className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none text-ink-l dark:text-ink"
          ></textarea>
          
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-accent hover:bg-accent-h text-white text-sm font-bold transition-all shadow-lg shadow-accent/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : '🚀 Send Message'}
          </button>
        </form>
      </motion.div>

      <motion.div
        className="bg-success/5 border border-success/20 rounded-xl px-4 py-3 text-[13px] text-ink-l-muted dark:text-ink-muted leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <span className="inline-flex items-center gap-1.5 mb-1">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <strong className="text-ink-l dark:text-white">Currently open to new opportunities!</strong>
        </span>
        <br />
        Interested in Senior Front-End Developer & Scrum Master roles in product companies, startups, and fintech.
      </motion.div>
    </div>
  )
}
