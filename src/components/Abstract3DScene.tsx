"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function MeshCenterpiece() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for camera/object transformations
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / (maxScroll || 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor mouse movements
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Compute 250 orbit particles
  const particleCount = 250;
  const particles = useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.5 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // 1. Centerpiece mesh: rotate + deform
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.15;
      meshRef.current.rotation.x = time * 0.08;
      
      // Interpolate position relative to scroll progress (translates out of hero as user scrolls)
      const targetY = -scrollProgress * 6.5;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.08;

      // Mouse reactivity: subtle scale & tilt
      const targetScale = 1.0 + (mouse.current.y * 0.05);
      meshRef.current.scale.setScalar(targetScale);
    }

    // 2. Orbital particles: slow spin + morph
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.rotation.z = time * 0.02;

      const targetY = -scrollProgress * 6.5;
      pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.08;
    }
  });

  return (
    <group>
      {/* Dynamic Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#10b981" />
      <directionalLight position={[-5, -5, -5]} intensity={1.0} color="#3b82f6" />
      <pointLight position={[0, 0, 5]} intensity={0.8} color="#ffffff" />

      {/* Morphing Centerpiece Structure */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.5, 4]} />
        <MeshDistortMaterial
          color="#0d0d0e"
          distort={0.4}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          bumpScale={0.05}
          clearcoat={1.0}
        />
      </mesh>

      {/* Wireframe wrapper mesh for depth */}
      {meshRef.current && (
        <mesh position={meshRef.current.position} rotation={meshRef.current.rotation}>
          <icosahedronGeometry args={[1.55, 2]} />
          <meshBasicMaterial
            color="#14b8a6"
            wireframe
            transparent
            opacity={0.06}
          />
        </mesh>
      )}

      {/* Outer Particle Shell */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#3b82f6"
          size={0.035}
          sizeAttenuation
          transparent
          opacity={0.35}
        />
      </points>
    </group>
  );
}

export default function Abstract3DScene() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <MeshCenterpiece />
      </Canvas>
    </div>
  );
}
