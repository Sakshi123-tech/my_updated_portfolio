import React from 'react';
import GlowMarker from './GlowMarker';

/**
 * LoungeZone Component (Left Area)
 * Handles Royal Blue Sofa with pillows, 4-legged Coffee Table with Lantern,
 * Sisal Cat Scratching Tree, Terracotta Monstera Plant, Gym Ball, and Robot Vacuum.
 */
export default function LoungeZone({ lightsOn, vacuumRef, onSelectMarker }) {
  return (
    <group>
      {/* ══════════════════════════════════════════════
          1. ROYAL BLUE MODERN SOFA & PILLOWS
      ══════════════════════════════════════════════ */}
      <group position={[-4.2, 0, -1.2]}>
        {/* Wooden Base */}
        <mesh position={[0, 0.08, 0]} castShadow>
          <boxGeometry args={[2.0, 0.08, 0.9]} />
          <meshStandardMaterial color="#0f172a" roughness={0.7} />
        </mesh>

        {/* Main Seat Cushion */}
        <mesh position={[0, 0.38, 0.02]} castShadow receiveShadow>
          <boxGeometry args={[1.9, 0.44, 0.86]} />
          <meshStandardMaterial color="#1d4ed8" roughness={0.55} />
        </mesh>

        {/* Backrest */}
        <mesh position={[0, 0.82, -0.34]} castShadow receiveShadow>
          <boxGeometry args={[1.9, 0.58, 0.2]} />
          <meshStandardMaterial color="#1e40af" roughness={0.55} />
        </mesh>

        {/* Left & Right Armrests */}
        {[-0.98, 0.98].map((sx, sidx) => (
          <mesh key={sidx} position={[sx, 0.58, 0.02]} castShadow>
            <boxGeometry args={[0.16, 0.42, 0.86]} />
            <meshStandardMaterial color="#1e3a8a" roughness={0.6} />
          </mesh>
        ))}

        {/* Throw Pillows */}
        <mesh position={[-0.68, 0.62, -0.18]} rotation={[0.2, 0.15, -0.1]} castShadow>
          <boxGeometry args={[0.36, 0.36, 0.12]} />
          <meshStandardMaterial color="#38bdf8" roughness={0.6} />
        </mesh>
        <mesh position={[0.68, 0.62, -0.18]} rotation={[0.2, -0.15, 0.1]} castShadow>
          <boxGeometry args={[0.36, 0.36, 0.12]} />
          <meshStandardMaterial color="#60a5fa" roughness={0.6} />
        </mesh>
      </group>

      {/* ══════════════════════════════════════════════
          2. LOW WOODEN COFFEE TABLE & LANTERN
      ══════════════════════════════════════════════ */}
      <group position={[-3.8, 0, 0.3]}>
        {/* Table Top */}
        <mesh position={[0, 0.28, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.0, 0.05, 0.6]} />
          <meshStandardMaterial color="#1e293b" roughness={0.5} />
        </mesh>
        {/* 4 Table Legs */}
        {[-0.42, 0.42].map((lx) =>
          [-0.22, 0.22].map((lz, lidx) => (
            <mesh key={`${lx}-${lz}-${lidx}`} position={[lx, 0.13, lz]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 0.26, 8]} />
              <meshStandardMaterial color="#0f172a" />
            </mesh>
          ))
        )}

        {/* Glowing Table Lantern */}
        <group position={[-0.22, 0.31, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.05, 0.06, 0.03, 12]} />
            <meshStandardMaterial color="#020617" />
          </mesh>
          <mesh position={[0, 0.08, 0]} castShadow>
            <cylinderGeometry args={[0.045, 0.045, 0.13, 12]} />
            <meshStandardMaterial
              color={lightsOn ? '#fbbf24' : '#78350f'}
              emissive={lightsOn ? '#fbbf24' : '#000000'}
              emissiveIntensity={lightsOn ? 1.6 : 0}
              transparent
              opacity={0.85}
            />
          </mesh>
          <mesh position={[0, 0.16, 0]} castShadow>
            <cylinderGeometry args={[0.05, 0.045, 0.03, 12]} />
            <meshStandardMaterial color="#020617" />
          </mesh>
        </group>
      </group>

      {/* ══════════════════════════════════════════════
          3. SISAL CAT SCRATCHING TREE
      ══════════════════════════════════════════════ */}
      <group position={[-2.9, 0, 1.1]}>
        {/* Flat Grounded Base */}
        <mesh position={[0, 0.03, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.55, 0.06, 0.55]} />
          <meshStandardMaterial color="#fef3c7" roughness={0.8} />
        </mesh>
        {/* Sisal Post */}
        <mesh position={[0, 0.58, 0]} castShadow>
          <cylinderGeometry args={[0.065, 0.065, 1.05, 16]} />
          <meshStandardMaterial color="#d97706" roughness={0.95} />
        </mesh>
        {/* Top Perch Platform */}
        <mesh position={[0, 1.12, 0]} castShadow>
          <boxGeometry args={[0.48, 0.05, 0.48]} />
          <meshStandardMaterial color="#fef3c7" roughness={0.8} />
        </mesh>
        {/* Radar Hotspot */}
        <GlowMarker
          position={[0, 0.85, 0.1]}
          label="Cat tree"
          isPrimary={false}
          onClick={() => onSelectMarker('cattree')}
        />
      </group>

      {/* ══════════════════════════════════════════════
          4. TERRACOTTA POT & INDOOR LUSH FOLIAGE
      ══════════════════════════════════════════════ */}
      <group position={[-2.3, 0, 0.4]}>
        {/* Terracotta Planter */}
        <mesh position={[0, 0.18, 0]} castShadow>
          <cylinderGeometry args={[0.15, 0.11, 0.36, 16]} />
          <meshStandardMaterial color="#c2410c" roughness={0.7} />
        </mesh>
        {/* Soil */}
        <mesh position={[0, 0.34, 0]}>
          <circleGeometry args={[0.13, 16]} rotation={[-Math.PI / 2, 0, 0]} />
          <meshBasicMaterial color="#271b12" />
        </mesh>
        {/* Lush Leaf Foliage Clusters */}
        <group position={[0, 0.42, 0]}>
          <mesh position={[0, 0.12, 0]} rotation={[0.2, 0, 0.1]} castShadow>
            <dodecahedronGeometry args={[0.18, 1]} />
            <meshStandardMaterial color="#15803d" roughness={0.5} />
          </mesh>
          <mesh position={[-0.08, 0.28, 0.05]} rotation={[-0.2, 0.4, -0.2]} castShadow>
            <dodecahedronGeometry args={[0.14, 1]} />
            <meshStandardMaterial color="#16a34a" roughness={0.5} />
          </mesh>
          <mesh position={[0.08, 0.32, -0.05]} rotation={[0.3, -0.3, 0.2]} castShadow>
            <dodecahedronGeometry args={[0.15, 1]} />
            <meshStandardMaterial color="#22c55e" roughness={0.5} />
          </mesh>
        </group>
        {/* Radar Hotspot */}
        <GlowMarker
          position={[0, 0.55, 0.1]}
          label="Indoor plants"
          isPrimary={false}
          onClick={() => onSelectMarker('plant')}
        />
      </group>

      {/* ══════════════════════════════════════════════
          5. BLUE GYM EXERCISE BALL
      ══════════════════════════════════════════════ */}
      <mesh position={[-1.65, 0.32, 1.7]} castShadow receiveShadow>
        <sphereGeometry args={[0.32, 24, 24]} />
        <meshStandardMaterial color="#38bdf8" roughness={0.4} metalness={0.05} />
      </mesh>

      {/* ══════════════════════════════════════════════
          6. ROBOT VACUUM CLEANER (ROOMBA)
      ══════════════════════════════════════════════ */}
      <group ref={vacuumRef} position={[0.2, 0.04, 2.3]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.18, 0.18, 0.07, 24]} />
          <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.045, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.02, 16]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
      </group>
    </group>
  );
}

