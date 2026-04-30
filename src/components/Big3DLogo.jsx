import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Torus, MeshDistortMaterial, Float, PerspectiveCamera } from '@react-three/drei'

function SpinningTorus({ isDark }) {
  const m = useRef()
  useFrame((s) => {
    m.current.rotation.x = s.clock.getElapsedTime() * 0.8
    m.current.rotation.y = s.clock.getElapsedTime() * 0.5
  })
  const color = isDark ? '#6c8ef5' : '#4f6de0'
  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={2}>
      <Torus ref={m} args={[1, 0.3, 32, 100]}>
        <MeshDistortMaterial color={color} distort={0.3} speed={2} roughness={0} metalness={1} />
      </Torus>
    </Float>
  )
}

import { useChatStore } from '../store/useChatStore'

export default function Big3DLogo({ size = 96 }) {
  const theme = useChatStore(s => s.theme)
  const isDark = theme === 'dark'

  return (
    <div style={{ width: size, height: size }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <ambientLight intensity={isDark ? 0.6 : 0.8} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color={isDark ? '#6c8ef5' : '#4f6de0'} />
        <pointLight position={[-5, -5, 5]} intensity={0.8} color={isDark ? '#a78bfa' : '#7c5ce0'} />
        <SpinningTorus isDark={isDark} />
      </Canvas>
    </div>
  )
}
