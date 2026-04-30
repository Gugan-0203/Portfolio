import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Dodecahedron, MeshDistortMaterial, Float, PerspectiveCamera, Torus } from '@react-three/drei'

const EDU_COLORS = ['#e87c4e', '#6c8ef5', '#a78bfa']

function AcademicOrb({ color }) {
  const m = useRef()
  useFrame((s) => {
    m.current.rotation.y = s.clock.getElapsedTime() * 0.5
    m.current.rotation.x = Math.sin(s.clock.getElapsedTime() * 0.3) * 0.2
  })
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
      <Dodecahedron ref={m} args={[0.8, 0]}>
        <MeshDistortMaterial color={color} distort={0.2} speed={2} roughness={0} metalness={1} />
      </Dodecahedron>
    </Float>
  )
}

export default function EducationResponse({ data, languages }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[14px] text-ink-l-muted dark:text-ink-muted leading-[1.75] mb-2">
        My academic background that shaped my technical foundation:
      </p>

      {data.map((e, i) => {
        const color = EDU_COLORS[i % EDU_COLORS.length]
        return (
          <motion.div
            key={i}
            className="relative flex items-center gap-3 rounded-2xl border overflow-hidden"
            style={{ borderColor: color + '33', background: `linear-gradient(135deg, ${color}12, ${color}05)` }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12, type: 'spring', stiffness: 120 }}
            whileHover={{ x: 4 }}
          >
            {/* 3D orb */}
            <div style={{ width: 64, height: 64, flexShrink: 0 }}>
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 3]} fov={55} />
                <ambientLight intensity={0.4} />
                <pointLight position={[2, 2, 2]} intensity={2} color={color} />
                <AcademicOrb color={color} />
              </Canvas>
            </div>
            <div className="flex-1 pr-4 py-3">
              <div className="text-[11px] uppercase tracking-widest mb-0.5" style={{ color }}>{e.year}</div>
              <div className="text-[14px] font-bold text-ink-l dark:text-white">{e.degree}</div>
              <div className="text-[12px] mt-0.5" style={{ color }}>{e.school}</div>
              <div className="text-[11px] text-ink-l-dim dark:text-ink-dim mt-0.5">{e.detail}</div>
            </div>
            {/* Left glow bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: color }} />
          </motion.div>
        )
      })}

      {/* Language Section */}
      <div className="flex items-center gap-2.5 py-3 text-[11px] font-bold uppercase tracking-widest text-ink-l-dim dark:text-ink-dim">
        <span className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, #6c8ef5)' }} />
        <span>🌐 Languages</span>
        <span className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #6c8ef5, transparent)' }} />
      </div>

      <div className="flex gap-2.5 flex-wrap">
        {languages.map((l, i) => (
          <motion.div
            key={i}
            className="flex-1 min-w-[130px] rounded-xl p-3.5 border border-accent/20 overflow-hidden relative card-hover"
            style={{ background: 'var(--glow-color)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.1 }}
          >
            <div className="text-[14px] font-bold text-ink-l dark:text-white">{l.lang}</div>
            <div className="text-[11px] text-ink-l-dim dark:text-ink-dim mt-0.5 mb-2">{l.level}</div>
            <div className="h-1.5 bg-card-light dark:bg-card rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #6c8ef5, #a78bfa)' }}
                initial={{ width: 0 }}
                animate={{ width: `${l.pct}%` }}
                transition={{ duration: 1.3, delay: 0.5 + i * 0.2, ease: 'easeOut' }}
              />
            </div>
            <div className="text-[12px] font-black text-accent mt-1">{l.pct}%</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
