import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, MeshDistortMaterial, Float, PerspectiveCamera, Torus } from '@react-three/drei'

const PROJECT_COLORS = ['#e87c4e', '#6c8ef5', '#a78bfa', '#34d399']

function ProjectGem({ color }) {
  const outer = useRef()
  const inner = useRef()
  useFrame((s) => {
    const t = s.clock.getElapsedTime()
    outer.current.rotation.y = t * 0.5
    outer.current.rotation.z = t * 0.25
    inner.current.rotation.y = -t * 0.35
  })
  return (
    <>
      <Icosahedron ref={outer} args={[1, 0]}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} wireframe transparent opacity={0.45} />
      </Icosahedron>
      <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5}>
        <Icosahedron ref={inner} args={[0.75, 1]}>
          <MeshDistortMaterial color={color} distort={0.25} speed={2.5} roughness={0} metalness={1} />
        </Icosahedron>
      </Float>
    </>
  )
}

export default function ProjectsResponse({ data, onOpenModal }) {
  return (
    <div>
      <p className="text-[14px] text-ink-l-muted dark:text-ink-muted leading-[1.75] mb-4">
        Key projects I've delivered — from <strong className="text-ink-l dark:text-white">crypto exchanges</strong> to <strong className="text-ink-l dark:text-white">AI tools</strong>:
      </p>

      <div className="flex flex-col gap-4">
        {data.map((p, i) => {
          const color = PROJECT_COLORS[i % PROJECT_COLORS.length]
          return (
            <motion.div
              key={p.id}
              className="relative rounded-2xl border overflow-hidden transition-all card-hover"
              style={{ borderColor: 'var(--border)', background: 'var(--bg-panel)' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, type: 'spring', stiffness: 120 }}
              whileHover={{ y: -4, borderColor: color + '77' }}
            >
              {/* 3D header */}
              <div className="flex items-center gap-0 relative">
                <div style={{ width: 90, height: 90, flexShrink: 0 }}>
                  <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={55} />
                    <ambientLight intensity={0.4} />
                    <pointLight position={[3, 3, 3]} intensity={2} color={color} />
                    <pointLight position={[-3, -3, 3]} intensity={0.8} />
                    <ProjectGem color={color} />
                  </Canvas>
                </div>
                <div className="flex-1 pr-4 py-3">
                  <div className="text-[11px] uppercase tracking-widest mb-0.5" style={{ color }}>{p.company} · {p.year}</div>
                  <div className="text-[15px] font-bold text-ink-l dark:text-white">{p.title}</div>
                  {/* Glowing line separator */}
                  <div className="h-px mt-2 opacity-40" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
                </div>
              </div>

              <div className="px-4 pb-4">
                <p className="text-[13px] text-ink-l-muted dark:text-ink-muted leading-relaxed mb-3">{p.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tech.map(t => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-full font-medium border" style={{ color, borderColor: color + '44', background: color + '18' }}>{t}</span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.highlights.map(h => (
                    <span key={h} className="text-[11px] px-2 py-0.5 rounded-full bg-success/10 text-success border border-success/20">✓ {h}</span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenModal({ ...p, color })}
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold px-3.5 py-1.5 rounded-lg border transition-all hover:text-white hover:bg-opacity-100"
                  style={{ color, borderColor: color + '55', background: color + '15' }}
                  onMouseEnter={e => { e.currentTarget.style.background = color + '44' }}
                  onMouseLeave={e => { e.currentTarget.style.background = color + '15' }}
                >
                  View Details <span>→</span>
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
