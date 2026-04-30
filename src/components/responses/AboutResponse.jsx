import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Octahedron, MeshDistortMaterial, Float, PerspectiveCamera } from '@react-three/drei'

function Avatar3D({ isDark }) {
  const m = useRef()
  useFrame((s) => {
    m.current.rotation.y = s.clock.getElapsedTime() * 0.4
    m.current.rotation.z = Math.sin(s.clock.getElapsedTime() * 0.5) * 0.1
  })
  const color = isDark ? '#6c8ef5' : '#4f6de0'
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Octahedron ref={m} args={[1.1, 0]}>
        <MeshDistortMaterial color={color} distort={0.25} speed={2} roughness={0} metalness={1} />
      </Octahedron>
    </Float>
  )
}

export default function AboutResponse({ data }) {
  const isDark = document.documentElement.classList.contains('dark')
  
  return (
    <div>
      {/* 3D Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden mb-4 border border-accent/20"
        style={{ background: isDark ? 'linear-gradient(135deg,rgba(108,142,245,0.12),rgba(167,139,250,0.06))' : 'linear-gradient(135deg,rgba(79,109,224,0.1),rgba(124,92,224,0.05))' }}>
        <div className="flex items-center gap-4 p-4">
          <div style={{ width: 80, height: 80, flexShrink: 0 }}>
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
              <ambientLight intensity={isDark ? 0.5 : 0.7} />
              <pointLight position={[5, 5, 5]} intensity={2} color={isDark ? '#6c8ef5' : '#4f6de0'} />
              <Avatar3D isDark={isDark} />
            </Canvas>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-accent/70 mb-1">Developer</div>
            <div className="text-[18px] font-black text-ink-l dark:text-white leading-tight">{data.name}</div>
            <div className="text-[12px] text-accent mt-0.5">{data.title} · {data.subtitle}</div>
            <div className="text-[11px] text-ink-l-dim dark:text-ink-dim mt-1">📍 {data.location}</div>
          </div>
        </div>
        {/* Glow line */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />
        <div className="px-4 py-3">
          <p className="text-[13px] text-ink-l-muted dark:text-ink-muted leading-relaxed">{data.summary}</p>
        </div>
      </div>

      {/* Stats — 3D glowing cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {data.stats.map((s, i) => (
          <motion.div
            key={i}
            className="relative flex flex-col items-center justify-center py-3 rounded-xl border border-white/[0.07] overflow-hidden card-hover"
            style={{ background: isDark ? 'linear-gradient(135deg,rgba(108,142,245,0.1),rgba(108,142,245,0.03))' : 'linear-gradient(135deg,rgba(79,109,224,0.08),rgba(79,109,224,0.02))' }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.09, type: 'spring', stiffness: 200 }}
          >
            <div className="absolute inset-0 bg-accent/5 blur-xl" />
            <div className="relative text-[22px] font-black text-accent leading-none">{s.value}</div>
            <div className="relative text-[10px] text-ink-l-dim dark:text-ink-dim mt-1 text-center leading-tight">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Status bar */}
      <motion.div
        className="flex items-center gap-2 text-[12px] text-success border border-success/20 bg-success/5 rounded-xl px-3 py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="w-2 h-2 rounded-full bg-success animate-pulse flex-shrink-0" />
        <span className="font-medium">Available for new opportunities</span>
        <span className="ml-auto text-ink-l-dim dark:text-ink-dim">· Chennai, Tamil Nadu</span>
      </motion.div>

      <p className="text-[12px] text-ink-l-dim dark:text-ink-dim mt-3">
        💬 Ask about my <strong className="text-ink-l dark:text-white">experience</strong>, <strong className="text-ink-l dark:text-white">skills</strong>, <strong className="text-ink-l dark:text-white">projects</strong> or <strong className="text-ink-l dark:text-white">education</strong>.
      </p>
    </div>
  )
}
