import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

type CoverageArcProps = {
  color: string;
  delay?: number;
  radius: number;
  position?: [number, number, number];
};

function useReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

function CoverageArc({ color, delay = 0, radius, position = [0, 0.08, 0] }: CoverageArcProps) {
  const arc = useRef<THREE.Mesh>(null);
  const reducedMotion = useReducedMotion();

  useFrame(({ clock }) => {
    if (reducedMotion || !arc.current) return;
    const wave = (Math.sin(clock.elapsedTime * 0.85 + delay) + 1) / 2;
    arc.current.scale.setScalar(0.96 + wave * 0.08);
    const material = arc.current.material as THREE.MeshBasicMaterial;
    material.opacity = 0.12 + (1 - wave) * 0.14;
  });

  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]} ref={arc}>
      <torusGeometry args={[radius, 0.015, 8, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} />
    </mesh>
  );
}

function SignalPath({
  color,
  points,
  delay = 0,
}: {
  color: string;
  points: [number, number, number][];
  delay?: number;
}) {
  const pulse = useRef<THREE.Mesh>(null);
  const reducedMotion = useReducedMotion();
  const curve = useMemo(
    () => new THREE.CatmullRomCurve3(points.map((point) => new THREE.Vector3(...point))),
    [points],
  );
  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(curve.getPoints(48)), [curve]);
  const initial = curve.getPoint(delay % 1);

  useFrame(({ clock }) => {
    if (reducedMotion || !pulse.current) return;
    const progress = (clock.elapsedTime * 0.16 + delay) % 1;
    pulse.current.position.copy(curve.getPoint(progress));
  });

  return (
    <group>
      <line>
        <primitive object={geometry} attach="geometry" />
        <lineBasicMaterial attach="material" color={color} transparent opacity={0.32} />
      </line>
      <mesh ref={pulse} position={[initial.x, initial.y, initial.z]}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function MeetingTable() {
  const seats: [number, number, number][] = [
    [-1.72, 0.24, -0.82],
    [-0.58, 0.24, -0.92],
    [0.58, 0.24, -0.92],
    [1.72, 0.24, -0.82],
    [-1.72, 0.24, 0.82],
    [-0.58, 0.24, 0.92],
    [0.58, 0.24, 0.92],
    [1.72, 0.24, 0.82],
  ];

  return (
    <group>
      <mesh castShadow receiveShadow position={[0, 0.24, 0]}>
        <boxGeometry args={[4.35, 0.2, 1.68]} />
        <meshStandardMaterial color="#d7e6f8" roughness={0.42} metalness={0.08} />
      </mesh>
      <mesh position={[0, 0.37, 0]}>
        <boxGeometry args={[3.8, 0.04, 1.16]} />
        <meshStandardMaterial color="#ffffff" roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.43, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.07, 36]} />
        <meshStandardMaterial color="#0f172a" emissive="#0369a1" emissiveIntensity={0.16} roughness={0.32} />
      </mesh>
      <mesh position={[-1.18, 0.43, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.055, 0.055, 0.48, 24]} />
        <meshStandardMaterial color="#18324d" roughness={0.34} />
      </mesh>
      <mesh position={[1.18, 0.43, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.055, 0.055, 0.48, 24]} />
        <meshStandardMaterial color="#18324d" roughness={0.34} />
      </mesh>

      {seats.map((position, index) => (
        <group key={index} position={position}>
          <mesh castShadow>
            <cylinderGeometry args={[0.18, 0.18, 0.08, 32]} />
            <meshStandardMaterial color="#10213a" roughness={0.36} />
          </mesh>
          <mesh position={[0, 0.18, 0]}>
            <sphereGeometry args={[0.09, 20, 16]} />
            <meshStandardMaterial color={index % 2 === 0 ? '#38bdf8' : '#93c5fd'} emissive="#0369a1" emissiveIntensity={0.18} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function CeilingSpeaker({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh castShadow rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.33, 0.33, 0.08, 48]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.28} />
      </mesh>
      <mesh position={[0, -0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.19, 0.19, 0.035, 40]} />
        <meshStandardMaterial color="#0f172a" emissive="#0ea5e9" emissiveIntensity={0.18} />
      </mesh>
    </group>
  );
}

function AcousticRoom() {
  const room = useRef<THREE.Group>(null);
  const reducedMotion = useReducedMotion();

  useFrame(({ clock }) => {
    if (reducedMotion || !room.current) return;
    room.current.rotation.y = -0.56 + Math.sin(clock.elapsedTime * 0.18) * 0.035;
    room.current.position.y = Math.sin(clock.elapsedTime * 0.32) * 0.025;
  });

  return (
    <group ref={room} position={[0.2, -0.5, 0]} rotation={[-0.08, -0.56, 0]} scale={1.12}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
        <planeGeometry args={[8.6, 5.8]} />
        <meshStandardMaterial color="#eef6ff" roughness={0.5} />
      </mesh>
      <gridHelper args={[8.6, 10, '#90a9c7', '#d6e2ef']} position={[0, 0.005, 0]} />

      <mesh position={[0, 1.56, -2.88]} receiveShadow>
        <boxGeometry args={[8.6, 3.05, 0.1]} />
        <meshStandardMaterial color="#dce9f7" roughness={0.5} />
      </mesh>
      <mesh position={[-4.28, 1.56, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[5.8, 3.05, 0.1]} />
        <meshStandardMaterial color="#c8d8eb" roughness={0.52} />
      </mesh>

      <MeetingTable />
      <CeilingSpeaker position={[-1.52, 2.42, -0.52]} />
      <CeilingSpeaker position={[1.52, 2.42, -0.52]} />

      <CoverageArc color="#0369a1" delay={0} radius={1.1} position={[-1.52, 0.1, -0.52]} />
      <CoverageArc color="#0ea5e9" delay={0.55} radius={1.62} position={[-1.52, 0.11, -0.52]} />
      <CoverageArc color="#0369a1" delay={0.3} radius={1.1} position={[1.52, 0.1, -0.52]} />
      <CoverageArc color="#0ea5e9" delay={0.85} radius={1.62} position={[1.52, 0.11, -0.52]} />
      <CoverageArc color="#14b8a6" delay={1.05} radius={2.28} />

      <SignalPath
        color="#0369a1"
        points={[[-1.52, 2.25, -0.52], [-0.7, 1.35, -0.15], [0, 0.52, 0]]}
      />
      <SignalPath
        color="#0ea5e9"
        delay={0.36}
        points={[[1.52, 2.25, -0.52], [0.7, 1.35, -0.15], [0, 0.52, 0]]}
      />
      <SignalPath
        color="#14b8a6"
        delay={0.72}
        points={[[-2.4, 0.45, 1.08], [-0.9, 0.58, 0.42], [0, 0.52, 0], [0.9, 0.58, 0.42], [2.4, 0.45, 1.08]]}
      />
    </group>
  );
}

export default function AudioScene() {
  return (
    <Canvas
      camera={{ position: [0, 3.8, 6.2], fov: 39 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      shadows
    >
      <color attach="background" args={['#f7fbff']} />
      <fog attach="fog" args={['#f7fbff', 7, 12]} />
      <ambientLight intensity={1.05} />
      <directionalLight position={[3, 6, 4]} intensity={1.55} castShadow />
      <pointLight position={[-4, 3, 2]} color="#38bdf8" intensity={0.75} />
      <pointLight position={[4, 2, -3]} color="#0f766e" intensity={0.42} />
      <AcousticRoom />
    </Canvas>
  );
}
