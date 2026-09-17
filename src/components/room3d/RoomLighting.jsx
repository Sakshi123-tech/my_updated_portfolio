import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RoomLighting = ({ isDay, lightsOn }) => {
  // Light refs for smooth lerping
  const ambientRef = useRef();
  const dirLightRef = useRef();
  const ceilingLightRef = useRef();
  const deskSpotRef = useRef();
  const floorSpotRef = useRef();
  const monitorLightRef = useRef();
  const neonLightRef = useRef();
  const aquariumLightRef = useRef();
  const arcadeLightRef = useRef();

  // Smooth sweeping lighting transition using useFrame
  useFrame((_, delta) => {
    const speed = delta * 5.0; // Smooth 0.5s transition speed

    // 1. Ambient Target
    const targetAmbient = isDay ? (lightsOn ? 1.3 : 1.0) : (lightsOn ? 0.8 : 0.4);
    if (ambientRef.current) {
      ambientRef.current.intensity = THREE.MathUtils.lerp(
        ambientRef.current.intensity,
        targetAmbient,
        speed
      );
    }

    // 2. Window Directional Light Target
    const targetSun = isDay ? 1.8 : 0.5;
    if (dirLightRef.current) {
      dirLightRef.current.intensity = THREE.MathUtils.lerp(
        dirLightRef.current.intensity,
        targetSun,
        speed
      );
    }

    // 3. Ceiling Light (First wave in sweep)
    const targetCeiling = lightsOn ? (isDay ? 1.4 : 2.6) : 0;
    if (ceilingLightRef.current) {
      ceilingLightRef.current.intensity = THREE.MathUtils.lerp(
        ceilingLightRef.current.intensity,
        targetCeiling,
        speed * 1.2
      );
    }

    // 4. Desk Spotlight (Second wave in sweep)
    const targetDesk = lightsOn ? (isDay ? 2.8 : 4.6) : 0;
    if (deskSpotRef.current) {
      deskSpotRef.current.intensity = THREE.MathUtils.lerp(
        deskSpotRef.current.intensity,
        targetDesk,
        speed * 1.0
      );
    }

    // 5. Floor Spotlight (Third wave in sweep)
    const targetFloor = lightsOn ? (isDay ? 2.4 : 4.0) : 0;
    if (floorSpotRef.current) {
      floorSpotRef.current.intensity = THREE.MathUtils.lerp(
        floorSpotRef.current.intensity,
        targetFloor,
        speed * 0.9
      );
    }

    // 6. Monitor Glow
    const targetMonitor = lightsOn ? (isDay ? 1.0 : 2.2) : 0.3;
    if (monitorLightRef.current) {
      monitorLightRef.current.intensity = THREE.MathUtils.lerp(
        monitorLightRef.current.intensity,
        targetMonitor,
        speed * 1.1
      );
    }

    // 7. Neon Glow
    const targetNeon = lightsOn ? (isDay ? 0.8 : 2.0) : 0;
    if (neonLightRef.current) {
      neonLightRef.current.intensity = THREE.MathUtils.lerp(
        neonLightRef.current.intensity,
        targetNeon,
        speed * 0.8
      );
    }

    // 8. Aquarium Glow
    const targetAquarium = lightsOn ? (isDay ? 0.8 : 1.8) : 0.2;
    if (aquariumLightRef.current) {
      aquariumLightRef.current.intensity = THREE.MathUtils.lerp(
        aquariumLightRef.current.intensity,
        targetAquarium,
        speed * 0.9
      );
    }

    // 9. Arcade Glow
    const targetArcade = lightsOn ? (isDay ? 0.6 : 1.6) : 0;
    if (arcadeLightRef.current) {
      arcadeLightRef.current.intensity = THREE.MathUtils.lerp(
        arcadeLightRef.current.intensity,
        targetArcade,
        speed * 0.85
      );
    }
  });

  return (
    <>
      {/* Global Ambient */}
      <ambientLight
        ref={ambientRef}
        intensity={0.8}
        color={isDay ? '#ffffff' : '#94a3b8'}
      />

      {/* Camera Key Fill Light */}
      <directionalLight
        position={[1.5, 4.0, 5.0]}
        intensity={isDay ? 1.3 : lightsOn ? 1.0 : 0.6}
        color={isDay ? '#ffffff' : '#cbd5e1'}
      />

      {/* Window Sun / Moon */}
      <directionalLight
        ref={dirLightRef}
        position={[-3.0, 4.5, -2.5]}
        intensity={1.2}
        color={isDay ? '#fef08a' : '#818cf8'}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Ceiling Point Light */}
      <pointLight
        ref={ceilingLightRef}
        position={[0, 3.2, 0.5]}
        intensity={2.6}
        distance={9}
        decay={1.8}
        color="#fed7aa"
      />

      {/* Desk Lamp Spotlight */}
      <spotLight
        ref={deskSpotRef}
        position={[-1.2, 2.0, -0.2]}
        target-position={[-0.4, 0.9, 0.1]}
        angle={Math.PI / 3.2}
        penumbra={0.6}
        intensity={4.6}
        distance={5.5}
        decay={1.8}
        color="#fbbf24"
        castShadow
      />

      {/* Floor Lamp Spotlight */}
      <spotLight
        ref={floorSpotRef}
        position={[2.8, 2.8, 0.2]}
        target-position={[2.8, 0.4, 1.0]}
        angle={Math.PI / 2.8}
        penumbra={0.7}
        intensity={4.0}
        distance={6.5}
        decay={1.8}
        color="#fed7aa"
      />

      {/* Monitor Screen Glow */}
      <pointLight
        ref={monitorLightRef}
        position={[0, 1.5, 0.1]}
        intensity={2.0}
        distance={3.8}
        decay={1.8}
        color="#38bdf8"
      />

      {/* Neon Sign Glow on Left Wall */}
      <pointLight
        ref={neonLightRef}
        position={[-2.8, 2.2, -0.6]}
        intensity={1.8}
        distance={4.5}
        decay={1.8}
        color="#f43f5e"
      />

      {/* Aquarium Cyan Glow */}
      <pointLight
        ref={aquariumLightRef}
        position={[3.0, 0.8, 0.8]}
        intensity={1.6}
        distance={3.0}
        decay={1.8}
        color="#06b6d4"
      />

      {/* Arcade Cabinet Glow */}
      <pointLight
        ref={arcadeLightRef}
        position={[2.4, 1.3, 1.8]}
        intensity={1.4}
        distance={3.0}
        decay={1.8}
        color="#a855f7"
      />

      {/* Hemisphere Fill */}
      <hemisphereLight
        skyColor={isDay ? '#e0f2fe' : '#334155'}
        groundColor={isDay ? '#64748b' : '#0f172a'}
        intensity={isDay ? 0.6 : 0.35}
      />
    </>
  );
};

export default RoomLighting;
