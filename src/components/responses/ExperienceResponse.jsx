import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Cylinder, MeshDistortMaterial, Float, PerspectiveCamera } from '@react-three/drei'

const TIMELINE_COLORS = ['#e87c4e', '#6c8ef5', '#a78bfa']

function TimelineOrb({ color }) {
  const m = useRef()
  useFrame((s) => {
    m.current.rotation.y += 0.03
  })
  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
      <Cylinder ref={m} args={[0.5, 0.5, 0.2, 32]}>
        <MeshDistortMaterial color={color} distort={0.2} speed={3} roughness={0} metalness={1} />
      </Cylinder>
    </Float>
  )
}

export default function ExperienceResponse({ data }) {
  const [expanded, setExpanded] = useState(null)

  return (
    <div>
      <p className="text-[14px] text-ink-l-muted dark:text-ink-muted leading-[1.75] mb-5">
        <strong className="text-ink-l dark:text-white">4+ years</strong> building production UIs across fintech, CRM, and enterprise domains:
      </p>

      <div className="relative flex flex-col gap-0">
        {/* Glowing vertical line */}
        <div className="absolute left-[18px] top-4 bottom-4 w-px z-0"
          style={{ background: 'linear-gradient(to bottom, #e87c4e, #6c8ef5, #a78bfa)' }} />

        {data.map((exp, i) => (
          <motion.div
            key={exp.id}
            className="flex gap-4 relative pb-5"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.14, type: 'spring', stiffness: 120 }}
          >
            {/* 3D Orb */}
            <div style={{ width: 38, height: 38, flexShrink: 0, marginTop: 8 }}>
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 3]} fov={60} />
                <ambientLight intensity={0.5} />
                <pointLight position={[2, 2, 2]} intensity={2} color={exp.color} />
                <TimelineOrb color={exp.color} />
              </Canvas>
            </div>

            {/* Card */}
            <motion.div
              className="flex-1 rounded-2xl p-4 cursor-pointer transition-all border"
              style={{
                background: `linear-gradient(135deg, ${exp.color}12, ${exp.color}05)`,
                borderColor: expanded === exp.id ? exp.color + '66' : 'rgba(255,255,255,0.07)',
                borderLeftWidth: exp.current ? 3 : 1,
                borderLeftColor: exp.current ? exp.color : undefined,
              }}
              onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
              whileHover={{ y: -2 }}
            >
              <div className="flex justify-between items-start gap-2 flex-wrap">
                <div>
                  <div className="text-[14px] font-bold text-ink-l dark:text-white">{exp.role}</div>
                  <div className="text-[13px] mt-0.5 font-medium" style={{ color: exp.color }}>{exp.company}</div>
                  <div className="text-[11px] text-ink-l-dim dark:text-ink-dim mt-0.5">📍 {exp.location} · {exp.type}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[11px] px-2 py-0.5 rounded-full text-ink-l dark:text-white font-semibold" style={{ background: exp.color + '33', border: `1px solid ${exp.color}66` }}>
                    {exp.period}
                  </span>
                  {exp.current && <span className="text-[10px] text-success font-bold">● Live</span>}
                  <span className="text-[10px] text-ink-l-dim dark:text-ink-dim">{expanded === exp.id ? '▲ less' : '▼ more'}</span>
                </div>
              </div>

              <AnimatePresence>
                {expanded === exp.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="text-[12px] font-bold mt-3 mb-1.5" style={{ color: exp.color }}>🗂 {exp.project}</div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {exp.tech.map(t => (
                        <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-info/10 text-info border border-info/20 font-medium">{t}</span>
                      ))}
                    </div>
                    <ul className="flex flex-col gap-2">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="text-[13px] text-ink-l-muted dark:text-ink-muted pl-4 relative leading-relaxed"
                          style={{ '::before': { content: '▸', position: 'absolute', left: 0, color: exp.color } }}>
                          <span className="absolute left-0" style={{ color: exp.color }}>▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {expanded !== exp.id && (
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {exp.tech.slice(0, 4).map(t => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-info/10 text-info border border-info/20 font-medium">{t}</span>
                  ))}
                  {exp.tech.length > 4 && (
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-info/10 text-info border border-info/20 font-medium">+{exp.tech.length - 4}</span>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
