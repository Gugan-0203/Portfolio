import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, PerspectiveCamera } from '@react-three/drei'

function Cube() {
  const m = useRef()
  useFrame(() => {
    m.current.rotation.x += 0.025
    m.current.rotation.y += 0.025
  })
  return (
    <>
      <Box ref={m} args={[1, 1, 1]}>
        <meshStandardMaterial color="#cc785c" emissive="#cc785c" emissiveIntensity={0.4} wireframe />
      </Box>
      <Box args={[0.85, 0.85, 0.85]}>
        <meshStandardMaterial color="#cc785c" metalness={1} roughness={0} transparent opacity={0.3} />
      </Box>
    </>
  )
}

export default function Mini3DLogo({ size = 20 }) {
  return (
    <div style={{ width: size, height: size, display: 'inline-block', flexShrink: 0 }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 3]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 2, 2]} intensity={1} color="#cc785c" />
        <Cube />
      </Canvas>
    </div>
  )
}
