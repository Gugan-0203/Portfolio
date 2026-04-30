import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, MeshDistortMaterial, Float, PerspectiveCamera, Torus } from '@react-three/drei'

const COLORS = {
  orange: '#e87c4e',
  blue:   '#6c8ef5',
  violet: '#a78bfa',
  green:  '#34d399',
}

function Gem({ color }) {
  const outer = useRef()
  const inner = useRef()
  useFrame((s) => {
    const t = s.clock.getElapsedTime()
    outer.current.rotation.y = t * 0.6
    outer.current.rotation.z = t * 0.3
    inner.current.rotation.y = -t * 0.4
  })
  return (
    <>
      <Icosahedron ref={outer} args={[1.1, 0]}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} wireframe transparent opacity={0.5} />
      </Icosahedron>
      <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
        <Icosahedron ref={inner} args={[0.85, 1]}>
          <MeshDistortMaterial color={color} distort={0.3} speed={3} roughness={0} metalness={1} />
        </Icosahedron>
      </Float>
      <Torus args={[1.4, 0.025, 8, 60]}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
      </Torus>
    </>
  )
}

export default function Project3D({ color }) {
  const resolvedColor = COLORS[color] || color || COLORS.orange
  return (
    <div style={{ height: 140, width: '100%' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 4.5]} fov={55} />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color={resolvedColor} />
        <pointLight position={[-5, -5, 5]} intensity={1} color="#ffffff" />
        <Gem color={resolvedColor} />
      </Canvas>
    </div>
  )
}
