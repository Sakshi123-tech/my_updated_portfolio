import React from 'react';
import * as THREE from 'three';
import GlowMarker from './GlowMarker';

/**
 * DeskWorkstation Component
 * Handles the central developer desk, live monitor screen, studio speakers,
 * RGB keyboard, mouse, gooseneck lamp, ESP32 button, guitar, and gaming chair.
 */
export default function DeskWorkstation({ isDay, lightsOn, monitorTex, onSelectMarker }) {
  return (
    <group position={[0, 0, -0.9]}>
      {/* ══════════════════════════════════════════════
          1. DESK TABLE & LEGS
      ══════════════════════════════════════════════ */}
      {/* Table Top */}
      <mesh position={[0, 0.95, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.2, 0.07, 1.25]} />
        <meshStandardMaterial
          color={isDay ? '#334155' : '#1e293b'}
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>

      {/* Cyan LED Edge Strip along front edge */}
      <mesh position={[0, 0.915, 0.625]}>
        <boxGeometry args={[4.2, 0.025, 0.015]} />
        <meshStandardMaterial
          color={lightsOn ? '#38bdf8' : '#0284c7'}
          emissive={lightsOn ? '#38bdf8' : '#000000'}
          emissiveIntensity={lightsOn ? 1.8 : 0}
        />
      </mesh>

      {/* Desk Metal Legs */}
      {[-1.95, 1.95].map((x, idx) => (
        <group key={idx} position={[x, 0.47, 0]}>
          <mesh position={[0, 0, -0.48]} castShadow>
            <boxGeometry args={[0.07, 0.94, 0.07]} />
            <meshStandardMaterial color="#0f172a" metalness={0.8} />
          </mesh>
          <mesh position={[0, 0, 0.48]} castShadow>
            <boxGeometry args={[0.07, 0.94, 0.07]} />
            <meshStandardMaterial color="#0f172a" metalness={0.8} />
          </mesh>
          <mesh position={[0, -0.44, 0]}>
            <boxGeometry args={[0.07, 0.05, 1.05]} />
            <meshStandardMaterial color="#0f172a" metalness={0.8} />
          </mesh>
        </group>
      ))}

      {/* Acoustic Wooden Guitar Grounded on Floor Leaning on Desk Leg */}
      <group position={[-1.55, 0.28, 0.35]} rotation={[0.15, 0.2, 0.28]}>
        <mesh castShadow>
          <boxGeometry args={[0.3, 0.52, 0.1]} />
          <meshStandardMaterial color="#d97706" roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.44, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 0.48, 8]} />
          <meshStandardMaterial color="#451a03" />
        </mesh>
        {/* Hotspot */}
        <GlowMarker
          position={[0, 0.3, 0.15]}
          label="Acoustic Guitar"
          isPrimary={false}
          onClick={() => onSelectMarker('guitar')}
        />
      </group>

      {/* Standing Blue Yoga Mat / Binder Grounded on Floor */}
      <mesh position={[-1.15, 0.32, 0.35]} rotation={[0, 0, 0.1]}>
        <boxGeometry args={[0.09, 0.62, 0.24]} />
        <meshStandardMaterial color="#0284c7" roughness={0.5} />
      </mesh>

      {/* Large Desk Mat */}
      <mesh position={[0, 0.99, 0.05]} receiveShadow>
        <boxGeometry args={[2.8, 0.01, 0.85]} />
        <meshStandardMaterial color="#090d16" roughness={0.8} />
      </mesh>

      {/* ══════════════════════════════════════════════
          2. ULTRA-WIDE MONITOR & LIVE DISPLAY
      ══════════════════════════════════════════════ */}
      <group position={[0, 0.99, -0.18]}>
        <mesh position={[0, 0.02, 0]} castShadow>
          <boxGeometry args={[0.46, 0.02, 0.26]} />
          <meshStandardMaterial color="#475569" metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.35, -0.05]} castShadow>
          <boxGeometry args={[0.07, 0.68, 0.06]} />
          <meshStandardMaterial color="#475569" metalness={0.8} />
        </mesh>

        {/* Screen Bezel */}
        <mesh position={[0, 0.68, 0]} castShadow>
          <boxGeometry args={[2.1, 1.0, 0.05]} />
          <meshStandardMaterial color="#020617" roughness={0.3} metalness={0.8} />
        </mesh>

        {/* Screen Display Face (Live Updating Canvas Texture) */}
        <mesh position={[0, 0.68, 0.028]}>
          <planeGeometry args={[2.02, 0.93]} />
          <meshBasicMaterial map={monitorTex} toneMapped={false} />
        </mesh>

        {/* Dual Studio Speakers */}
        {[-1.35, 1.35].map((sx, sidx) => (
          <group key={sidx} position={[sx, 0.3, 0.04]} castShadow>
            <mesh>
              <boxGeometry args={[0.22, 0.38, 0.22]} />
              <meshStandardMaterial color="#1e293b" roughness={0.4} />
            </mesh>
            <mesh position={[0, 0.07, 0.115]}>
              <circleGeometry args={[0.065, 16]} />
              <meshStandardMaterial color="#38bdf8" />
            </mesh>
            <mesh position={[0, -0.09, 0.115]}>
              <circleGeometry args={[0.05, 16]} />
              <meshStandardMaterial color="#94a3b8" />
            </mesh>
          </group>
        ))}

        {/* 🌟 GLOWING MARKER: "The dev rig" */}
        <GlowMarker
          position={[0, 1.32, 0.08]}
          label="The dev rig"
          isPrimary={true}
          onClick={() => onSelectMarker('dev-rig')}
        />
      </group>

      {/* Mechanical RGB Keyboard */}
      <group position={[0, 1.0, 0.18]}>
        <mesh castShadow>
          <boxGeometry args={[0.75, 0.02, 0.25]} />
          <meshStandardMaterial color="#0f172a" roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.013, 0]}>
          <boxGeometry args={[0.72, 0.012, 0.22]} />
          <meshStandardMaterial
            color={lightsOn ? '#06b6d4' : '#1e293b'}
            emissive={lightsOn ? '#06b6d4' : '#000000'}
            emissiveIntensity={lightsOn ? 0.8 : 0}
          />
        </mesh>
      </group>

      {/* Ergonomic Mouse */}
      <mesh position={[0.58, 1.005, 0.18]} castShadow>
        <boxGeometry args={[0.09, 0.035, 0.14]} />
        <meshStandardMaterial color="#020617" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* 🔴 EMERGENCY RED BUTTON (ESP32) on Desk */}
      <group position={[-0.62, 1.0, 0.18]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.065, 0.075, 0.025, 16]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.025, 0]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 0.03, 16]} />
          <meshStandardMaterial
            color="#ef4444"
            emissive={lightsOn ? '#ef4444' : '#000000'}
            emissiveIntensity={lightsOn ? 0.8 : 0}
          />
        </mesh>
        {/* Hotspot */}
        <GlowMarker
          position={[0, 0.22, 0]}
          label="Emergency Button (ESP32)"
          isPrimary={false}
          onClick={() => onSelectMarker('esp32')}
        />
      </group>

      {/* Golden Gooseneck Desk Study Lamp */}
      <group position={[-1.4, 0.99, -0.15]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.1, 0.12, 0.025, 16]} />
          <meshStandardMaterial color="#eab308" metalness={0.8} />
        </mesh>
        <mesh position={[0.08, 0.24, 0]} rotation={[0, 0, -0.35]} castShadow>
          <cylinderGeometry args={[0.012, 0.012, 0.46, 8]} />
          <meshStandardMaterial color="#eab308" metalness={0.8} />
        </mesh>
        <mesh position={[0.24, 0.52, 0]} rotation={[0, 0, 0.45]} castShadow>
          <cylinderGeometry args={[0.012, 0.012, 0.42, 8]} />
          <meshStandardMaterial color="#eab308" metalness={0.8} />
        </mesh>
        <mesh position={[0.38, 0.62, 0]} rotation={[0, 0, -Math.PI / 3]} castShadow>
          <coneGeometry args={[0.13, 0.2, 16, 1, true]} />
          <meshStandardMaterial color="#ca8a04" metalness={0.8} side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0.4, 0.59, 0]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color={lightsOn ? '#fef08a' : '#713f12'} />
        </mesh>
        {/* Hotspot */}
        <GlowMarker
          position={[0.3, 0.4, 0.1]}
          label="Desk Lamp"
          isPrimary={false}
          onClick={() => onSelectMarker('desklamp')}
        />
      </group>

      {/* Coffee Mug */}
      <group position={[-0.95, 1.0, 0.12]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.045, 0.04, 0.09, 16]} />
          <meshStandardMaterial color="#f8fafc" />
        </mesh>
        <mesh position={[0, 0.035, 0]}>
          <circleGeometry args={[0.035, 16]} rotation={[-Math.PI / 2, 0, 0]} />
          <meshBasicMaterial color="#451a03" />
        </mesh>
      </group>

      {/* Desk Succulent Plant */}
      <group position={[0.95, 1.0, 0.12]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.05, 0.04, 0.08, 16]} />
          <meshStandardMaterial color="#ea580c" />
        </mesh>
        <mesh position={[0, 0.06, 0]}>
          <dodecahedronGeometry args={[0.045, 1]} />
          <meshStandardMaterial color="#22c55e" roughness={0.6} />
        </mesh>
      </group>

      {/* ══════════════════════════════════════════════
          3. WHITE & RED ERGONOMIC RACING GAMING CHAIR
      ══════════════════════════════════════════════ */}
      <group position={[0.85, 0, 1.1]} rotation={[0, -0.38, 0]}>
        {/* 5-Star Wheeled Base */}
        <mesh position={[0, 0.06, 0]} castShadow>
          <cylinderGeometry args={[0.36, 0.36, 0.03, 5]} />
          <meshStandardMaterial color="#020617" metalness={0.8} />
        </mesh>
        {/* Hydraulic Cylinder */}
        <mesh position={[0, 0.26, 0]} castShadow>
          <cylinderGeometry args={[0.035, 0.035, 0.36, 12]} />
          <meshStandardMaterial color="#64748b" metalness={0.9} />
        </mesh>
        {/* Seat Cushion (White outer shell + Red center cushion) */}
        <mesh position={[0, 0.48, 0]} castShadow>
          <boxGeometry args={[0.68, 0.1, 0.62]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.54, 0]} castShadow>
          <boxGeometry args={[0.48, 0.04, 0.48]} />
          <meshStandardMaterial color="#dc2626" roughness={0.3} />
        </mesh>

        {/* Ergonomic High Backrest (White outer shell + Red center stripe) */}
        <group position={[0, 0.96, 0.28]} rotation={[0.06, 0, 0]} castShadow>
          <mesh>
            <boxGeometry args={[0.62, 0.88, 0.08]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.3} />
          </mesh>
          <mesh position={[0, 0, -0.02]}>
            <boxGeometry args={[0.32, 0.82, 0.06]} />
            <meshStandardMaterial color="#dc2626" roughness={0.3} />
          </mesh>
          {/* White Headrest Pillow */}
          <mesh position={[0, 0.52, 0]}>
            <boxGeometry args={[0.38, 0.18, 0.08]} />
            <meshStandardMaterial color="#f8fafc" />
          </mesh>
          {/* Red Headrest Accent */}
          <mesh position={[0, 0.52, -0.02]}>
            <boxGeometry args={[0.22, 0.12, 0.06]} />
            <meshStandardMaterial color="#dc2626" />
          </mesh>
        </group>

        {/* Armrests */}
        {[-0.36, 0.36].map((ax, aidx) => (
          <group key={aidx} position={[ax, 0.65, 0]}>
            <mesh position={[0, -0.08, 0]}>
              <boxGeometry args={[0.04, 0.22, 0.04]} />
              <meshStandardMaterial color="#020617" />
            </mesh>
            <mesh position={[0, 0.04, 0]}>
              <boxGeometry args={[0.08, 0.03, 0.32]} />
              <meshStandardMaterial color="#1e293b" />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}
