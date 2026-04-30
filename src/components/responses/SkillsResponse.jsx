import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, PerspectiveCamera } from '@react-three/drei'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts'

const CATS = [
  { key: 'frontend', label: '⚛️ Front-End',       color: '#e87c4e' },
  { key: 'ui',       label: '🎨 UI Frameworks',   color: '#6c8ef5' },
  { key: 'api',      label: '🔌 API & Real-Time',  color: '#a78bfa' },
  { key: 'build',    label: '🛠 Build Tools',      color: '#34d399' },
  { key: 'testing',  label: '🧪 Testing',          color: '#fbbf24' },
  { key: 'devops',   label: '🚀 DevOps',           color: '#f43f5e' },
]

function SkillOrb({ level, color }) {
  const m = useRef()
  useFrame((s) => {
    m.current.rotation.y += 0.02
    m.current.rotation.x = Math.sin(s.clock.getElapsedTime() * 0.5) * 0.2
  })
  const scale = 0.6 + (level / 100) * 0.7
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <Sphere ref={m} args={[scale, 64, 64]}>
        <MeshDistortMaterial color={color} distort={0.3} speed={2} roughness={0} metalness={0.9} />
      </Sphere>
    </Float>
  )
}

function AnimatedBar({ level, color }) {
  const [w, setW] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setW(level); obs.disconnect() }
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [level])
  return (
    <div ref={ref} className="h-1.5 bg-card-light dark:bg-card rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
        initial={{ width: 0 }}
        animate={{ width: `${w}%` }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
    </div>
  )
}

export default function SkillsResponse({ data, radar }) {
  const [tab, setTab] = useState('radar')
  const radarData = radar.map(s => ({ subject: s.subject, value: s.level }))
  const tabs = [['radar', '📊 Radar'], ['bars', '📈 Progress'], ['pills', '🏷 Tags']]

  return (
    <div>
      <p className="text-[14px] text-ink-l-muted dark:text-ink-muted leading-[1.75] mb-4">
        My complete technical toolkit — built through <strong className="text-ink-l dark:text-white">4+ years</strong> of production work:
      </p>

      {/* Tab switcher */}
      <div className="flex gap-1 bg-surface-light dark:bg-surface border border-black/[0.09] dark:border-white/[0.08] rounded-xl p-1 mb-5">
        {tabs.map(([id, label]) => (
          <button key={id} onClick={() => setTab(id)}
            className={`flex-1 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${tab === id
              ? 'bg-accent text-white shadow-sm'
              : 'text-ink-l-dim dark:text-ink-dim hover:text-ink-l dark:hover:text-ink'}`}>
            {label}
          </button>
        ))}
      </div>

      {/* Radar Chart */}
      {tab === 'radar' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="relative rounded-2xl border border-accent/20 overflow-hidden card-hover"
            style={{ background: 'var(--glow-color)' }}>
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={radarData} margin={{ top: 15, right: 40, bottom: 15, left: 40 }}>
                <PolarGrid stroke="rgba(108,142,245,0.15)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} />
                <Radar name="Skill" dataKey="value" stroke="#6c8ef5" fill="#6c8ef5" fillOpacity={0.25} strokeWidth={2.5}
                  dot={{ r: 4, fill: '#e87c4e', strokeWidth: 0 }} />
                <Tooltip
                  contentStyle={{ background: 'var(--bg-panel)', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--text-primary)', fontSize: 12, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
                  formatter={v => [`${v}%`, 'Proficiency']}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      )}

      {/* Progress Bars */}
      {tab === 'bars' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-3">
          {radar.map((s, i) => (
            <div key={i}>
              <div className="flex justify-between text-[12px] text-ink-l-muted dark:text-ink-muted mb-1.5">
                <span>{s.name}</span>
                <span className="font-bold text-accent">{s.level}%</span>
              </div>
              <AnimatedBar level={s.level} color="#cc785c" />
            </div>
          ))}
        </motion.div>
      )}

      {/* Pill Tags */}
      {tab === 'pills' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 xs:grid-cols-2 gap-2.5">
          {CATS.map(cat => (
            <div key={cat.key}
              className="rounded-xl p-3.5 border border-white/[0.06]"
              style={{ background: `linear-gradient(135deg, ${cat.color}12, ${cat.color}05)` }}>
              <div className="text-[11px] font-bold uppercase tracking-widest mb-2.5" style={{ color: cat.color }}>{cat.label}</div>
              <div className="flex flex-wrap gap-1.5">
                {data[cat.key]?.map(sk => (
                  <motion.span key={sk} whileHover={{ scale: 1.1, y: -1 }}
                    className="text-[11px] px-2 py-1 rounded-full border text-ink-l-muted dark:text-ink-muted cursor-default transition-colors hover:text-white"
                    style={{ borderColor: cat.color + '44', background: cat.color + '14' }}>
                    {sk}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
