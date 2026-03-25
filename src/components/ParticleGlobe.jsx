import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Planet() {
  const groupRef = useRef()

  const radius = 8

  // Surface particles — full sphere but we only see the top from our camera angle
  const surfaceData = useMemo(() => {
    const count = 80000
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const siz = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / count)
      const theta = Math.PI * (1 + Math.sqrt(5)) * i

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.cos(phi)
      const z = radius * Math.sin(phi) * Math.sin(theta)

      const jitter = 0.015
      pos[i * 3] = x + (Math.random() - 0.5) * jitter
      pos[i * 3 + 1] = y + (Math.random() - 0.5) * jitter
      pos[i * 3 + 2] = z + (Math.random() - 0.5) * jitter

      const variation = Math.random() * 0.03
      col[i * 3] = 0.03 + variation
      col[i * 3 + 1] = 0.015 + variation * 0.5
      col[i * 3 + 2] = 0.1 + variation

      siz[i] = 0.6 + Math.random() * 0.4
    }
    return { positions: pos, colors: col, sizes: siz }
  }, [])

  // Rim — a great circle (full ring) wrapping around the sphere, tilted
  // so it rises above the visible top. Like an orbital ring.
  const rimTilt = Math.PI * 0.18 // tilt angle from vertical

  function getRimPoint(t, r) {
    // Start with a circle in the XY plane (vertical great circle)
    const angle = t * Math.PI * 2
    let x = r * Math.cos(angle)
    let y = r * Math.sin(angle)
    let z = 0

    // Rotate around Z axis to tilt the ring
    const cz = Math.cos(rimTilt)
    const sz = Math.sin(rimTilt)
    const rx = x * cz - y * sz
    const ry = x * sz + y * cz

    return { x: rx, y: ry, z }
  }

  // Rim arc core — tight thin bright line
  const arcCoreData = useMemo(() => {
    const count = 4000
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const siz = new Float32Array(count)
    const arcRadius = radius + 0.8

    for (let i = 0; i < count; i++) {
      const t = i / count
      const p = getRimPoint(t, arcRadius)

      pos[i * 3] = p.x
      pos[i * 3 + 1] = p.y
      pos[i * 3 + 2] = p.z

      // Brightest where the arc is above the surface (positive y region)
      const brightness = Math.pow(Math.max(0, p.y / arcRadius + 0.3), 0.6)

      col[i * 3] = (0.4 + brightness * 0.6) * brightness
      col[i * 3 + 1] = (0.25 + brightness * 0.5) * brightness
      col[i * 3 + 2] = (0.8 + brightness * 0.2) * brightness

      siz[i] = 0.1 + brightness * 0.25
    }
    return { positions: pos, colors: col, sizes: siz }
  }, [])

  // Rim arc glow — wider soft glow around the core
  const arcGlowData = useMemo(() => {
    const count = 6000
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const siz = new Float32Array(count)
    const arcRadius = radius + 0.8

    for (let i = 0; i < count; i++) {
      const t = i / count
      const p = getRimPoint(t, arcRadius)

      // Spread around the core for glow
      const spread = 0.3
      pos[i * 3] = p.x + (Math.random() - 0.5) * spread
      pos[i * 3 + 1] = p.y + (Math.random() - 0.5) * spread
      pos[i * 3 + 2] = p.z + (Math.random() - 0.5) * spread

      const brightness = Math.pow(Math.max(0, p.y / arcRadius + 0.3), 0.5)

      col[i * 3] = 0.2 * brightness
      col[i * 3 + 1] = 0.1 * brightness
      col[i * 3 + 2] = 0.5 * brightness

      siz[i] = 0.3 + brightness * 0.8
    }
    return { positions: pos, colors: col, sizes: siz }
  }, [])

  // Horizon glow — at y=0 level, a wide atmospheric band
  const horizonData = useMemo(() => {
    const count = 5000
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const siz = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 24
      const y = (Math.random() - 0.5) * 0.25
      const z = (Math.random() - 0.5) * 2

      pos[i * 3] = x
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = z

      const distFromCenter = Math.abs(x) / 12
      const intensity = Math.pow(Math.max(0, 1 - distFromCenter), 2.5)

      col[i * 3] = 0.2 * intensity
      col[i * 3 + 1] = 0.1 * intensity
      col[i * 3 + 2] = 0.5 * intensity

      siz[i] = 0.4 + intensity * 1.5
    }
    return { positions: pos, colors: col, sizes: siz }
  }, [])

  // Center bright glow
  const centerGlowData = useMemo(() => {
    const count = 2000
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const siz = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const spread = Math.pow(Math.random(), 2.5)
      const angle = Math.random() * Math.PI * 2
      const r = spread * 2.0

      pos[i * 3] = r * Math.cos(angle)
      pos[i * 3 + 1] = r * Math.sin(angle) * 0.06
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.2

      const dist = r
      const intensity = Math.pow(Math.max(0, 1 - dist / 2.0), 2)

      col[i * 3] = 0.5 * intensity + 0.05
      col[i * 3 + 1] = 0.35 * intensity + 0.02
      col[i * 3 + 2] = 0.9 * intensity + 0.1

      siz[i] = 0.6 + intensity * 2.0
    }
    return { positions: pos, colors: col, sizes: siz }
  }, [])

  const surfaceShader = useMemo(() => ({
    uniforms: {
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
    },
    vertexShader: `
      attribute float aSize;
      uniform float uPixelRatio;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uPixelRatio * (50.0 / -mvPos.z);
        gl_Position = projectionMatrix * mvPos;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float alpha = 1.0 - smoothstep(0.2, 0.5, dist);
        gl_FragColor = vec4(vColor, alpha);
      }
    `,
  }), [])

  const rimShader = useMemo(() => ({
    uniforms: {
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
    },
    vertexShader: `
      attribute float aSize;
      uniform float uPixelRatio;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uPixelRatio * (40.0 / -mvPos.z);
        gl_Position = projectionMatrix * mvPos;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
        alpha = pow(alpha, 1.5);
        gl_FragColor = vec4(vColor, alpha);
      }
    `,
  }), [])

  // Boomerang rotation: oscillate between 270deg and 300deg (in radians)
  const minAngle = (270 / 180) * Math.PI // 4.712
  const maxAngle = (360 / 180) * Math.PI // 5.236
  const range = maxAngle - minAngle
  const speed = 0.1 // controls how fast the oscillation is

  useFrame((state) => {
    if (groupRef.current) {
      // Smooth ping-pong using sine wave: oscillates 0→1→0→...
      const t = (Math.sin(state.clock.elapsedTime * speed) + 1) / 2
      groupRef.current.rotation.y = minAngle + t * range
    }
  })

  return (
    // Position the sphere so its center is well below the camera
    // Camera sees just the top cap curving away = nearly flat horizon
    <group ref={groupRef} position={[0, -6.5, 0]}>
      {/* Solid dark sphere */}
      <mesh>
        <sphereGeometry args={[radius - 0.05, 64, 64]} />
        <meshBasicMaterial color="#05020d" transparent opacity={0.08} depthWrite={false} />
      </mesh>

      {/* Surface particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[surfaceData.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[surfaceData.colors, 3]} />
          <bufferAttribute attach="attributes-aSize" args={[surfaceData.sizes, 1]} />
        </bufferGeometry>
        <shaderMaterial
          args={[surfaceShader]}
          vertexColors
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Rim arc glow (soft outer) */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[arcGlowData.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[arcGlowData.colors, 3]} />
          <bufferAttribute attach="attributes-aSize" args={[arcGlowData.sizes, 1]} />
        </bufferGeometry>
        <shaderMaterial
          args={[rimShader]}
          vertexColors
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Rim arc core (bright thin line) */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[arcCoreData.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[arcCoreData.colors, 3]} />
          <bufferAttribute attach="attributes-aSize" args={[arcCoreData.sizes, 1]} />
        </bufferGeometry>
        <shaderMaterial
          args={[rimShader]}
          vertexColors
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Horizon glow at y=0 */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[horizonData.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[horizonData.colors, 3]} />
          <bufferAttribute attach="attributes-aSize" args={[horizonData.sizes, 1]} />
        </bufferGeometry>
        <shaderMaterial
          args={[rimShader]}
          vertexColors
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Center glow */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[centerGlowData.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[centerGlowData.colors, 3]} />
          <bufferAttribute attach="attributes-aSize" args={[centerGlowData.sizes, 1]} />
        </bufferGeometry>
        <shaderMaterial
          args={[rimShader]}
          vertexColors
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

export default function ParticleGlobe() {
  return (
    <div className="globe-container">
      <Canvas
        camera={{ position: [5, 5, 3], fov: 45, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0)
        }}
      >
        <Planet />
      </Canvas>
      <div className="globe-fade-bottom" />
    </div>
  )
}
