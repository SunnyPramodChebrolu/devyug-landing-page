"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function TorusKnot() {
  const ref = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.06 + mouse.y * 0.1;
    ref.current.rotation.y = t * 0.1 + mouse.x * 0.1;
  });

  return (
    <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[1.8, 0.45, 180, 20, 3, 7]} />
        <meshStandardMaterial
          color="#4f46e5"
          wireframe={false}
          metalness={0.6}
          roughness={0.2}
          transparent
          opacity={0.55}
        />
      </mesh>
      <mesh>
        <torusKnotGeometry args={[1.8, 0.46, 80, 8, 3, 7]} />
        <meshStandardMaterial
          color="#818cf8"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
    </Float>
  );
}

export default function InnovationScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 3, 5]} intensity={2} color="#6366f1" />
      <pointLight position={[-5, -3, -5]} intensity={1} color="#312e81" />
      <TorusKnot />
    </Canvas>
  );
}
