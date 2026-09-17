import React, { useMemo } from 'react';
import * as THREE from 'three';
import GlowMarker from './GlowMarker';

// Helper: Create Arcade Marquee & Screen Canvas Textures
function createArcadeTextures(lightsOn) {
  // 1. Marquee Header
  const marqueeCanvas = document.createElement('canvas');
  marqueeCanvas.width = 512;
  marqueeCanvas.height = 128;
  const mCtx = marqueeCanvas.getContext('2d');

  mCtx.fillStyle = '#1e1b4b';
  mCtx.fillRect(0, 0, 512, 128);

  if (lightsOn) {
    mCtx.shadowColor = '#f43f5e';
    mCtx.shadowBlur = 15;
    mCtx.fillStyle = '#f43f5e';
  } else {
    mCtx.fillStyle = '#881337';
  }

  mCtx.font = 'bold 44px "Press Start 2P", "Courier New", monospace';
  mCtx.textAlign = 'center';
  mCtx.textBaseline = 'middle';
  mCtx.fillText('★ ARCADE ★', 256, 64);

  // 2. CRT Game Screen
  const screenCanvas = document.createElement('canvas');
  screenCanvas.width = 512;
  screenCanvas.height = 420;
  const sCtx = screenCanvas.getContext('2d');

  sCtx.fillStyle = '#050510';
  sCtx.fillRect(0, 0, 512, 420);

  if (lightsOn) {
    // Score Bar
    sCtx.fillStyle = '#38bdf8';
    sCtx.font = 'bold 22px monospace';
    sCtx.fillText('1UP 082400   HIGH 999900', 40, 45);

    // Maze / Pixel Game Graphics
    sCtx.strokeStyle = '#2563eb';
    sCtx.lineWidth = 4;
    sCtx.strokeRect(40, 70, 432, 300);

    sCtx.beginPath();
    sCtx.arc(160, 210, 24, 0.25 * Math.PI, 1.75 * Math.PI);
    sCtx.lineTo(160, 210);
    sCtx.fillStyle = '#facc15';
    sCtx.fill();

    // Ghosts
    sCtx.fillStyle = '#ef4444';
    sCtx.beginPath();
    sCtx.arc(280, 210, 18, Math.PI, 0);
    sCtx.lineTo(298, 230);
    sCtx.lineTo(262, 230);
    sCtx.fill();

    sCtx.fillStyle = '#06b6d4';
    sCtx.beginPath();
    sCtx.arc(360, 210, 18, Math.PI, 0);
    sCtx.lineTo(378, 230);
    sCtx.lineTo(342, 230);
    sCtx.fill();

    // Scanlines
    sCtx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    for (let y = 0; y < 420; y += 6) {
      sCtx.fillRect(0, y, 512, 2);
    }
  }

  const marqueeTex = new THREE.CanvasTexture(marqueeCanvas);
  marqueeTex.needsUpdate = true;

  const screenTex = new THREE.CanvasTexture(screenCanvas);
  screenTex.needsUpdate = true;

  return { marqueeTex, screenTex };
}

export default function RightZone({ lightsOn, bubblesRef, onSelectMarker }) {
  const { marqueeTex, screenTex } = useMemo(() => createArcadeTextures(lightsOn), [lightsOn]);

  // Single Smooth 3D CatmullRom Curve for the Floor Lamp Arch
  const lampCurve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 1.6, 0),
      new THREE.Vector3(-0.25, 2.35, 0.15),
      new THREE.Vector3(-0.65, 2.7, 0.35),
      new THREE.Vector3(-1.05, 2.5, 0.5),
      new THREE.Vector3(-1.25, 2.15, 0.55),
    ]);
  }, []);

  return (
    <group>
      {/* ══════════════════════════════════════════════
          1. OPEN WOODEN BOOKSHELF & RICH BOOK COLLECTION
      ══════════════════════════════════════════════ */}
      <group position={[2.8, 0, -1.6]}>
        {/* Backing Board */}
        <mesh position={[0, 1.55, -0.18]} castShadow receiveShadow>
          <boxGeometry args={[1.5, 3.1, 0.05]} />
          <meshStandardMaterial color="#0f172a" roughness={0.7} />
        </mesh>

        {/* Side Panels */}
        {[-0.72, 0.72].map((px, pidx) => (
          <mesh key={pidx} position={[px, 1.55, 0]} castShadow>
            <boxGeometry args={[0.06, 3.1, 0.42]} />
            <meshStandardMaterial color="#1e293b" roughness={0.6} />
          </mesh>
        ))}

        {/* Horizontal Wooden Shelves */}
        {[0.08, 0.68, 1.28, 1.88, 2.48, 3.08].map((sy, sidx) => (
          <mesh key={sidx} position={[0, sy, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.44, 0.05, 0.42]} />
            <meshStandardMaterial color="#1e293b" roughness={0.6} />
          </mesh>
        ))}

        {/* Shelf 1 Books (Vertical Dense Colorful Stack) */}
        <group position={[0, 0.71, 0.02]}>
          {[
            { x: -0.55, w: 0.07, h: 0.38, c: '#ef4444' },
            { x: -0.46, w: 0.09, h: 0.42, c: '#f59e0b' },
            { x: -0.36, w: 0.08, h: 0.35, c: '#10b981' },
            { x: -0.27, w: 0.07, h: 0.40, c: '#3b82f6' },
            { x: -0.18, w: 0.09, h: 0.44, c: '#8b5cf6' },
            { x: -0.07, w: 0.10, h: 0.39, c: '#ec4899' },
            { x: 0.04, w: 0.08, h: 0.41, c: '#06b6d4' },
            { x: 0.14, w: 0.09, h: 0.36, c: '#14b8a6' },
            { x: 0.24, w: 0.08, h: 0.43, c: '#eab308' },
            { x: 0.34, w: 0.09, h: 0.38, c: '#6366f1' },
            { x: 0.45, w: 0.10, h: 0.42, c: '#f97316' },
            { x: 0.55, w: 0.08, h: 0.37, c: '#0284c7' },
          ].map((b, idx) => (
            <mesh key={idx} position={[b.x, b.h / 2, 0]} castShadow>
              <boxGeometry args={[b.w, b.h, 0.28]} />
              <meshStandardMaterial color={b.c} roughness={0.4} />
            </mesh>
          ))}
        </group>

        {/* Shelf 2 Books (Horizontal Piles & Standing Stacks) */}
        <group position={[0, 1.31, 0.02]}>
          {/* Left Horizontal Pile */}
          <group position={[-0.4, 0, 0]}>
            {[0.04, 0.11, 0.18, 0.25].map((hy, hidx) => (
              <mesh key={hidx} position={[0, hy, 0]} castShadow>
                <boxGeometry args={[0.34, 0.06, 0.28]} />
                <meshStandardMaterial
                  color={['#38bdf8', '#fb923c', '#a855f7', '#4ade80'][hidx]}
                  roughness={0.4}
                />
              </mesh>
            ))}
          </group>
          {/* Right Standing Stack */}
          {[
            { x: 0.0, w: 0.08, h: 0.42, c: '#dc2626' },
            { x: 0.1, w: 0.09, h: 0.45, c: '#2563eb' },
            { x: 0.21, w: 0.10, h: 0.39, c: '#059669' },
            { x: 0.32, w: 0.09, h: 0.43, c: '#d97706' },
            { x: 0.43, w: 0.10, h: 0.40, c: '#7c3aed' },
            { x: 0.54, w: 0.08, h: 0.36, c: '#db2777' },
          ].map((b, idx) => (
            <mesh key={idx} position={[b.x, b.h / 2, 0]} castShadow>
              <boxGeometry args={[b.w, b.h, 0.28]} />
              <meshStandardMaterial color={b.c} roughness={0.4} />
            </mesh>
          ))}
        </group>

        {/* Shelf 3 Books (Encyclopedia Multi-Volume Set) */}
        <group position={[0, 1.91, 0.02]}>
          {[-0.55, -0.44, -0.33, -0.22, -0.11, 0.0, 0.11, 0.22, 0.33, 0.44, 0.55].map((bx, idx) => (
            <mesh key={idx} position={[bx, 0.21, 0]} castShadow>
              <boxGeometry args={[0.09, 0.42, 0.28]} />
              <meshStandardMaterial
                color={idx % 2 === 0 ? '#1e3a8a' : '#1e40af'}
                roughness={0.3}
              />
            </mesh>
          ))}
        </group>

        {/* Top Shelf Succulent Plant */}
        <group position={[0.35, 3.12, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.1, 0.07, 0.14, 16]} />
            <meshStandardMaterial color="#c2410c" roughness={0.7} />
          </mesh>
          <mesh position={[0, 0.12, 0]} castShadow>
            <dodecahedronGeometry args={[0.1, 1]} />
            <meshStandardMaterial color="#22c55e" roughness={0.5} />
          </mesh>
        </group>

        {/* Radar Hotspot */}
        <GlowMarker
          position={[-0.75, 1.8, 0.25]}
          label="Greenhouse node"
          isPrimary={false}
          onClick={() => onSelectMarker('bookshelf')}
        />
      </group>

      {/* ══════════════════════════════════════════════
          2. SEAMLESS ARCHED BRASS FLOOR LAMP
      ══════════════════════════════════════════════ */}
      <group position={[3.6, 0, -0.2]}>
        {/* Heavy Circular Marble/Black Base */}
        <mesh position={[0, 0.03, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.26, 0.28, 0.06, 32]} />
          <meshStandardMaterial color="#020617" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.07, 0]}>
          <cylinderGeometry args={[0.08, 0.1, 0.03, 16]} />
          <meshStandardMaterial color="#ca8a04" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Smooth Seamless Metallic Tube Arch */}
        <mesh castShadow>
          <tubeGeometry args={[lampCurve, 32, 0.02, 12, false]} />
          <meshStandardMaterial color="#eab308" metalness={0.9} roughness={0.15} />
        </mesh>

        {/* Golden Fixture Socket Cap at Tip */}
        <mesh position={[-1.25, 2.12, 0.55]} castShadow>
          <cylinderGeometry args={[0.05, 0.035, 0.06, 16]} />
          <meshStandardMaterial color="#ca8a04" metalness={0.9} />
        </mesh>

        {/* Flared Domed Lampshade (White/Cream Glowing) */}
        <mesh position={[-1.25, 2.0, 0.55]} castShadow receiveShadow>
          <coneGeometry args={[0.28, 0.24, 32, 1, true]} />
          <meshStandardMaterial
            color={lightsOn ? '#fffbeb' : '#fef3c7'}
            emissive={lightsOn ? '#fef08a' : '#000000'}
            emissiveIntensity={lightsOn ? 0.9 : 0}
            side={THREE.DoubleSide}
            roughness={0.25}
          />
        </mesh>

        {/* Glowing Warm Light Bulb inside Shade */}
        <mesh position={[-1.25, 1.96, 0.55]}>
          <sphereGeometry args={[0.075, 16, 16]} />
          <meshBasicMaterial color={lightsOn ? '#ffffff' : '#78350f'} toneMapped={false} />
        </mesh>

        {/* Downward Warm Spotlight Pool on Floor */}
        {lightsOn && (
          <pointLight
            position={[-1.25, 1.9, 0.55]}
            color="#fef3c7"
            intensity={3.5}
            distance={5.5}
            decay={1.8}
          />
        )}

        {/* Interactive Radar Hotspot */}
        <GlowMarker
          position={[-1.25, 1.8, 0.55]}
          label="Floor lamp"
          isPrimary={false}
          onClick={() => onSelectMarker('floorlamp')}
        />
      </group>

      {/* ══════════════════════════════════════════════
          3. ILLUMINATED GLASS AQUARIUM TANK
      ══════════════════════════════════════════════ */}
      <group position={[4.2, 0.45, 0.8]}>
        {/* Dark Wood Cabinet Stand */}
        <mesh position={[0, -0.22, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.9, 0.46, 0.6]} />
          <meshStandardMaterial color="#0f172a" roughness={0.6} />
        </mesh>
        {/* Transparent Glowing Cyan Glass Tank */}
        <mesh position={[0, 0.26, 0]}>
          <boxGeometry args={[0.82, 0.52, 0.52]} />
          <meshStandardMaterial
            color="#06b6d4"
            transparent
            opacity={0.45}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
        {/* Sand Bed */}
        <mesh position={[0, 0.04, 0]}>
          <boxGeometry args={[0.78, 0.06, 0.48]} />
          <meshStandardMaterial color="#fde047" roughness={0.9} />
        </mesh>
        {/* Green Aquatic Seaweed */}
        <mesh position={[-0.18, 0.22, 0]}>
          <coneGeometry args={[0.06, 0.3, 8]} />
          <meshStandardMaterial color="#10b981" />
        </mesh>
        {/* Animated Rising Bubbles */}
        <group ref={bubblesRef}>
          {[-0.16, 0, 0.16, -0.06].map((bx, bidx) => (
            <mesh key={bidx} position={[bx, 0.12, (bidx % 2) * 0.1]}>
              <sphereGeometry args={[0.024, 8, 8]} />
              <meshBasicMaterial color="#e0f2fe" transparent opacity={0.8} toneMapped={false} />
            </mesh>
          ))}
        </group>
        {/* Radar Hotspot */}
        <GlowMarker
          position={[0, 0.68, 0]}
          label="tap the glass"
          isPrimary={false}
          onClick={() => onSelectMarker('aquarium')}
        />
      </group>

      {/* ══════════════════════════════════════════════
          4. RETRO ARCADE GAMING CABINET (Compact in Front-Right)
      ══════════════════════════════════════════════ */}
      <group position={[3.2, 0, 1.6]} rotation={[0, -Math.PI / 3.8, 0]}>
        {/* Cabinet Main Body */}
        <mesh position={[0, 0.72, 0]} castShadow>
          <boxGeometry args={[0.62, 1.44, 0.58]} />
          <meshStandardMaterial color="#1e1b4b" roughness={0.4} />
        </mesh>
        {/* Glowing Marquee Top Header */}
        <mesh position={[0, 1.34, 0.2]}>
          <planeGeometry args={[0.56, 0.15]} />
          <meshBasicMaterial map={marqueeTex} toneMapped={false} />
        </mesh>
        {/* Angled CRT Game Screen */}
        <mesh position={[0, 0.98, 0.22]} rotation={[-0.2, 0, 0]}>
          <planeGeometry args={[0.5, 0.38]} />
          <meshBasicMaterial map={screenTex} toneMapped={false} />
        </mesh>
        {/* Control Deck Slab */}
        <mesh position={[0, 0.74, 0.28]} rotation={[0.2, 0, 0]}>
          <boxGeometry args={[0.54, 0.04, 0.2]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>
        {/* Joystick */}
        <mesh position={[-0.14, 0.81, 0.28]}>
          <cylinderGeometry args={[0.01, 0.01, 0.08, 8]} />
          <meshStandardMaterial color="#f43f5e" />
        </mesh>
        <mesh position={[-0.14, 0.85, 0.28]}>
          <sphereGeometry args={[0.024, 12, 12]} />
          <meshBasicMaterial color="#ef4444" toneMapped={false} />
        </mesh>
        {/* Push Buttons */}
        {[-0.02, 0.06, 0.14].map((bx, bidx) => (
          <mesh key={bidx} position={[bx, 0.77, 0.28]}>
            <cylinderGeometry args={[0.018, 0.018, 0.02, 12]} />
            <meshBasicMaterial
              color={['#3b82f6', '#10b981', '#f59e0b'][bidx]}
              toneMapped={false}
            />
          </mesh>
        ))}
        {/* Radar Hotspot */}
        <GlowMarker
          position={[0, 0.9, 0.35]}
          label="insert coin"
          isPrimary={false}
          onClick={() => onSelectMarker('arcade')}
        />
      </group>
    </group>
  );
}

