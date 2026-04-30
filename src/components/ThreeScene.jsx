import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { useChatStore } from '../store/useChatStore'

/* ── Constants ──────────────────────────────────────────────────── */
const DARK_ACCENT  = new THREE.Color('#6c8ef5')
const DARK_ACCENT2 = new THREE.Color('#a78bfa')
const DARK_ORANGE  = new THREE.Color('#e87c4e')
const LIGHT_ACCENT  = new THREE.Color('#4f6de0')
const LIGHT_ACCENT2 = new THREE.Color('#7c5ce0')
const LIGHT_ORANGE  = new THREE.Color('#d06a38')

/* ── Geometric Grid / Constellation ─────────────────────────────── */
function ConstellationWeb({ isDark, isTyping }) {
  const linesRef  = useRef()
  const pointsRef = useRef()

  const { lines, nodes } = useMemo(() => {
    const nodeCount = 60
    const pts = []
    for (let i = 0; i < nodeCount; i++) {
      pts.push(new THREE.Vector3(
        (Math.random() - 0.5) * 26,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 8,
      ))
    }

    const positions = []
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const d = pts[i].distanceTo(pts[j])
        if (d < 5.5) {
          positions.push(pts[i].x, pts[i].y, pts[i].z)
          positions.push(pts[j].x, pts[j].y, pts[j].z)
        }
      }
    }

    const nodePos = new Float32Array(pts.flatMap(p => [p.x, p.y, p.z]))
    return { lines: new Float32Array(positions), nodes: nodePos }
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const speed = isTyping ? 0.6 : 0.15
    if (linesRef.current)  linesRef.current.rotation.y  = t * speed * 0.3
    if (pointsRef.current) pointsRef.current.rotation.y = t * speed * 0.3
    if (linesRef.current)  linesRef.current.rotation.x  = Math.sin(t * 0.1) * 0.08
  })

  const lineColor = isDark ? '#6c8ef5' : '#4f6de0'
  const nodeColor = isDark ? '#a78bfa' : '#7c5ce0'

  return (
    <group>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[lines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color={lineColor}
          transparent
          opacity={isDark ? 0.18 : 0.12}
        />
      </lineSegments>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodes, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={nodeColor}
          size={0.08}
          transparent
          opacity={isDark ? 0.7 : 0.5}
          sizeAttenuation
        />
      </points>
    </group>
  )
}

/* ── Floating Geometric Shapes ───────────────────────────────────── */
function FloatingShape({ position, shape, color, speed, scale }) {
  const mesh = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.x = t * speed * 0.4
    mesh.current.rotation.y = t * speed * 0.6
    mesh.current.position.y = position[1] + Math.sin(t * speed * 0.8 + position[0]) * 0.4
  })

  const geo = useMemo(() => {
    switch (shape) {
      case 'oct':   return new THREE.OctahedronGeometry(scale)
      case 'tet':   return new THREE.TetrahedronGeometry(scale)
      case 'ico':   return new THREE.IcosahedronGeometry(scale, 0)
      case 'torus': return new THREE.TorusGeometry(scale, scale * 0.35, 8, 24)
      default:      return new THREE.OctahedronGeometry(scale)
    }
  }, [shape, scale])

  return (
    <mesh ref={mesh} position={position} geometry={geo}>
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.25}
      />
    </mesh>
  )
}

function FloatingShapes({ isDark }) {
  const shapes = useMemo(() => [
    { pos: [-7, 2, -2],  shape: 'oct',   s: 0.55, sp: 0.4 },
    { pos: [7, -1.5, -1], shape: 'ico',   s: 0.65, sp: 0.35 },
    { pos: [-4, -3, -3], shape: 'tet',   s: 0.45, sp: 0.55 },
    { pos: [4, 3, -2],   shape: 'torus', s: 0.5,  sp: 0.45 },
    { pos: [0, -4, -4],  shape: 'oct',   s: 0.4,  sp: 0.3 },
    { pos: [-8, -2, -3], shape: 'ico',   s: 0.5,  sp: 0.5 },
  ], [])

  const colors = isDark
    ? ['#6c8ef5', '#a78bfa', '#e87c4e', '#6c8ef5', '#34d399', '#a78bfa']
    : ['#4f6de0', '#7c5ce0', '#d06a38', '#4f6de0', '#059669', '#7c5ce0']

  return (
    <>
      {shapes.map((sh, i) => (
        <FloatingShape
          key={i}
          position={sh.pos}
          shape={sh.shape}
          color={colors[i % colors.length]}
          speed={sh.sp}
          scale={sh.s}
        />
      ))}
    </>
  )
}

/* ── Ambient Glow Planes ─────────────────────────────────────────── */
function GlowOrbs({ isDark }) {
  const g1 = useRef(), g2 = useRef(), g3 = useRef()
  useFrame((s) => {
    const t = s.clock.getElapsedTime()
    if (g1.current) g1.current.position.y = Math.sin(t * 0.5) * 1.5
    if (g2.current) g2.current.position.y = Math.cos(t * 0.4) * 1.2
    if (g3.current) g3.current.position.y = Math.sin(t * 0.3 + 1) * 1
  })

  const c1 = isDark ? '#6c8ef5' : '#4f6de0'
  const c2 = isDark ? '#a78bfa' : '#7c5ce0'
  const c3 = isDark ? '#e87c4e' : '#d06a38'

  return (
    <>
      <mesh ref={g1} position={[-5, 0, -6]}>
        <sphereGeometry args={[2.5, 16, 16]} />
        <meshBasicMaterial color={c1} transparent opacity={isDark ? 0.04 : 0.03} />
      </mesh>
      <mesh ref={g2} position={[5, 1, -7]}>
        <sphereGeometry args={[2, 16, 16]} />
        <meshBasicMaterial color={c2} transparent opacity={isDark ? 0.04 : 0.03} />
      </mesh>
      <mesh ref={g3} position={[0, -3, -5]}>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshBasicMaterial color={c3} transparent opacity={isDark ? 0.03 : 0.02} />
      </mesh>
    </>
  )
}

/* ── Mouse-follow Camera Rig ─────────────────────────────────────── */
function CameraRig({ isTyping }) {
  const { camera, mouse } = useThree()
  const vec = useRef(new THREE.Vector3())
  useFrame(() => {
    const intensity = isTyping ? 1.5 : 1
    vec.current.set(mouse.x * intensity, mouse.y * 0.6 * intensity, 7)
    camera.position.lerp(vec.current, 0.03)
    camera.lookAt(0, 0, 0)
  })
  return null
}

/* ── Main Scene Export ───────────────────────────────────────────── */
export default function ThreeScene() {
  const { theme, isTyping } = useChatStore(s => ({ theme: s.theme, isTyping: s.isTyping }))
  const isDark = theme === 'dark'

  const bgColor   = isDark ? '#0c1120' : '#eef1fb'
  const fogColor  = isDark ? '#0c1120' : '#eef1fb'

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, transition: 'background 0.4s ease', background: bgColor }}
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false }}
        style={{ width: '100%', height: '100%' }}
      >
        <PerspectiveCamera makeDefault fov={65} position={[0, 0, 7]} />
        <color attach="background" args={[bgColor]} />
        <fog attach="fog" args={[fogColor, 12, 30]} />

        {/* Lights */}
        <ambientLight intensity={isDark ? 0.3 : 0.8} />
        <directionalLight position={[5, 5, 5]}   intensity={isDark ? 0.5 : 0.6} color={isDark ? '#6c8ef5' : '#4f6de0'} />
        <directionalLight position={[-5, -5, -5]} intensity={isDark ? 0.3 : 0.4} color={isDark ? '#a78bfa' : '#7c5ce0'} />
        <pointLight position={[0, 4, 2]} intensity={isDark ? 0.4 : 0.3} color={isDark ? '#e87c4e' : '#d06a38'} />

        <ConstellationWeb isDark={isDark} isTyping={isTyping} />
        <FloatingShapes    isDark={isDark} />
        <GlowOrbs          isDark={isDark} />
        <CameraRig         isTyping={isTyping} />
      </Canvas>

      {/* Radial vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, rgba(12,17,32,0.65) 100%)'
            : 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, rgba(238,241,251,0.5) 100%)',
          transition: 'background 0.4s ease',
        }}
      />
    </div>
  )
}
