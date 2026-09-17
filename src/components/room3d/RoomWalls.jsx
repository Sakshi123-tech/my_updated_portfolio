import React, { useMemo } from 'react';
import * as THREE from 'three';
import GlowMarker from './GlowMarker';

// Helper: Create "Hello World" Neon Sign Canvas Texture
function createHelloWorldNeonTexture(lightsOn) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);

  if (lightsOn) {
    // Outer Glow Halo
    ctx.shadowColor = '#fde047';
    ctx.shadowBlur = 32;
    ctx.strokeStyle = '#fef08a';
    ctx.fillStyle = '#fef08a';
  } else {
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.strokeStyle = '#854d0e';
    ctx.fillStyle = '#854d0e';
  }

  // Large Bold Cursive Neon Text
  ctx.font = 'italic 700 160px "Brush Script MT", "Caveat", "Dancing Script", "Segoe Script", cursive, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Draw glow pass
  ctx.fillText('Hello', 512, 170);
  ctx.fillText('World', 512, 330);

  // Inner bright core pass
  if (lightsOn) {
    ctx.shadowBlur = 10;
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Hello', 512, 170);
    ctx.fillText('World', 512, 330);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// Helper: Create Pirate Skull Pink Neon Texture for Left Wall
function createSkullNeonTexture(lightsOn) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 256, 256);

  ctx.lineWidth = 6;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  if (lightsOn) {
    ctx.shadowColor = '#f43f5e';
    ctx.shadowBlur = 16;
    ctx.strokeStyle = '#fb7185';
    ctx.fillStyle = '#fb7185';
  } else {
    ctx.strokeStyle = '#881337';
    ctx.fillStyle = '#881337';
  }

  // Skull Outline
  ctx.beginPath();
  ctx.arc(128, 100, 48, Math.PI * 0.8, Math.PI * 2.2);
  ctx.lineTo(150, 160);
  ctx.lineTo(106, 160);
  ctx.closePath();
  ctx.stroke();

  // Eye Sockets
  ctx.beginPath();
  ctx.arc(110, 110, 10, 0, Math.PI * 2);
  ctx.arc(146, 110, 10, 0, Math.PI * 2);
  ctx.fill();

  // Crossbones
  ctx.beginPath();
  ctx.moveTo(60, 190);
  ctx.lineTo(196, 70);
  ctx.moveTo(196, 190);
  ctx.lineTo(60, 70);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// Helper: Create Certificate Frame Canvas Texture
function createCertificateTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 360;
  const ctx = canvas.getContext('2d');

  // Background Parchment
  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(0, 0, 512, 360);

  // Border
  ctx.strokeStyle = '#0284c7';
  ctx.lineWidth = 10;
  ctx.strokeRect(16, 16, 480, 328);

  ctx.strokeStyle = '#0ea5e9';
  ctx.lineWidth = 3;
  ctx.strokeRect(28, 28, 456, 304);

  // Header
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 26px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('CERTIFICATE OF RECOGNITION', 256, 80);

  ctx.fillStyle = '#64748b';
  ctx.font = '14px monospace';
  ctx.fillText('PRESENTED TO SAKSHI AGNIHOTRI', 256, 118);

  // Horizontal line
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(80, 140);
  ctx.lineTo(432, 140);
  ctx.stroke();

  // Badge & Stamp
  ctx.fillStyle = '#06b6d4';
  ctx.font = 'bold 18px sans-serif';
  ctx.fillText('★ SOFTWARE DEVELOPMENT ENGINEER ★', 256, 185);

  ctx.fillStyle = '#475569';
  ctx.font = 'italic 13px sans-serif';
  ctx.fillText('Full Stack Systems • React • Node • Distributed Architecture', 256, 225);

  // Golden Stamp Seal
  ctx.beginPath();
  ctx.arc(256, 285, 26, 0, Math.PI * 2);
  ctx.fillStyle = '#f59e0b';
  ctx.fill();
  ctx.strokeStyle = '#d97706';
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('VERIFIED', 256, 290);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// Helper: Create Daylight/Night Landscape Window Texture (Vibrant and clear)
function createWindowLandscapeTexture(isDay) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext('2d');

  if (isDay) {
    // Vibrant Blue Sky Gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, 420);
    skyGrad.addColorStop(0, '#0284c7');
    skyGrad.addColorStop(0.5, '#38bdf8');
    skyGrad.addColorStop(1, '#93c5fd');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, 1024, 640);

    // Glowing Sun
    ctx.fillStyle = '#fef08a';
    ctx.beginPath();
    ctx.arc(800, 130, 48, 0, Math.PI * 2);
    ctx.fill();

    // Soft Clouds
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    const drawCloud = (cx, cy, scale) => {
      ctx.beginPath();
      ctx.arc(cx, cy, 28 * scale, 0, Math.PI * 2);
      ctx.arc(cx + 25 * scale, cy - 10 * scale, 35 * scale, 0, Math.PI * 2);
      ctx.arc(cx + 60 * scale, cy, 30 * scale, 0, Math.PI * 2);
      ctx.arc(cx + 30 * scale, cy + 10 * scale, 25 * scale, 0, Math.PI * 2);
      ctx.fill();
    };
    drawCloud(220, 120, 1.2);
    drawCloud(540, 160, 0.9);

    // Distant Mountain Ranges
    ctx.fillStyle = '#0284c7';
    ctx.beginPath();
    ctx.moveTo(0, 430);
    ctx.lineTo(260, 280);
    ctx.lineTo(500, 390);
    ctx.lineTo(750, 260);
    ctx.lineTo(1024, 400);
    ctx.lineTo(1024, 640);
    ctx.lineTo(0, 640);
    ctx.closePath();
    ctx.fill();

    // Deep Ocean Water with Horizon Glisten
    const seaGrad = ctx.createLinearGradient(0, 410, 0, 640);
    seaGrad.addColorStop(0, '#0284c7');
    seaGrad.addColorStop(0.3, '#0369a1');
    seaGrad.addColorStop(1, '#075985');
    ctx.fillStyle = seaGrad;
    ctx.fillRect(0, 410, 1024, 230);
  } else {
    // Night Scenic View (Luminous Indigo Sky & Sea Horizon)
    const nightGrad = ctx.createLinearGradient(0, 0, 0, 640);
    nightGrad.addColorStop(0, '#060b1e');
    nightGrad.addColorStop(0.5, '#0c1a3b');
    nightGrad.addColorStop(1, '#172554');
    ctx.fillStyle = nightGrad;
    ctx.fillRect(0, 0, 1024, 640);

    // Glowing Full Moon
    ctx.shadowColor = '#e0e7ff';
    ctx.shadowBlur = 24;
    ctx.fillStyle = '#f8fafc';
    ctx.beginPath();
    ctx.arc(780, 130, 42, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Distant Night Mountains
    ctx.fillStyle = '#090e1f';
    ctx.beginPath();
    ctx.moveTo(0, 430);
    ctx.lineTo(280, 300);
    ctx.lineTo(520, 400);
    ctx.lineTo(780, 280);
    ctx.lineTo(1024, 410);
    ctx.lineTo(1024, 640);
    ctx.lineTo(0, 640);
    ctx.closePath();
    ctx.fill();

    // Night Sea Horizon with Moon Reflection
    const nightSea = ctx.createLinearGradient(0, 410, 0, 640);
    nightSea.addColorStop(0, '#0c162e');
    nightSea.addColorStop(1, '#050a18');
    ctx.fillStyle = nightSea;
    ctx.fillRect(0, 410, 1024, 230);

    // Moon Glimmer on Water
    ctx.fillStyle = 'rgba(224, 231, 255, 0.4)';
    ctx.fillRect(740, 410, 80, 230);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// Helper: Create Left Wall Vertical Poster Canvas Texture
function createLeftPosterTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Dark cyber background
  const bgGrad = ctx.createLinearGradient(0, 0, 0, 512);
  bgGrad.addColorStop(0, '#030712');
  bgGrad.addColorStop(0.5, '#0c4a6e');
  bgGrad.addColorStop(1, '#0284c7');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 256, 512);

  // Geometric tech grid
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
  ctx.lineWidth = 2;
  for (let y = 40; y < 512; y += 40) {
    ctx.beginPath();
    ctx.moveTo(20, y);
    ctx.lineTo(236, y);
    ctx.stroke();
  }

  // Cyan Neon Emblem
  ctx.shadowColor = '#38bdf8';
  ctx.shadowBlur = 12;
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 4;
  ctx.strokeRect(40, 80, 176, 176);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('CODE', 128, 160);
  ctx.fillText('SYSTEM', 128, 210);

  ctx.fillStyle = '#bae6fd';
  ctx.font = '12px monospace';
  ctx.fillText('ENGINEER WORKSPACE', 128, 380);
  ctx.fillText('• 2026 EDITION •', 128, 410);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export default function RoomWalls({ isDay, lightsOn, onSelectMarker }) {
  const helloWorldTex = useMemo(() => createHelloWorldNeonTexture(lightsOn), [lightsOn]);
  const skullNeonTex = useMemo(() => createSkullNeonTexture(lightsOn), [lightsOn]);
  const certificateTex = useMemo(() => createCertificateTexture(), []);
  const windowLandscapeTex = useMemo(() => createWindowLandscapeTexture(isDay), [isDay]);
  const leftPosterTex = useMemo(() => createLeftPosterTexture(), []);

  return (
    <group>
      {/* ══════════════════════════════════════════════
          1. ENCLOSED 3-WALL ROOM STRUCTURE & FLOOR
      ══════════════════════════════════════════════ */}
      {/* Floor Grid Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[14.0, 14.0]} />
        <meshStandardMaterial
          color={isDay ? '#1e293b' : '#111827'}
          roughness={0.45}
          metalness={0.15}
        />
      </mesh>

      {/* Grid Lines on Floor */}
      <gridHelper
        args={[14.0, 32, isDay ? '#475569' : '#334155', isDay ? '#334155' : '#1e293b']}
        position={[0, 0.002, 0]}
      />

      {/* Back Wall */}
      <mesh position={[0, 3.2, -4.0]} receiveShadow>
        <boxGeometry args={[14.0, 6.4, 0.1]} />
        <meshStandardMaterial
          color={isDay ? '#242d40' : '#151c2e'}
          roughness={0.8}
        />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-6.5, 3.2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[14.0, 6.4, 0.1]} />
        <meshStandardMaterial
          color={isDay ? '#1e2638' : '#121727'}
          roughness={0.8}
        />
      </mesh>

      {/* Right Wall */}
      <mesh position={[6.5, 3.2, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[14.0, 6.4, 0.1]} />
        <meshStandardMaterial
          color={isDay ? '#1e2638' : '#121727'}
          roughness={0.8}
        />
      </mesh>

      {/* Dark Seamless Baseboards */}
      <mesh position={[0, 0.08, -3.94]}>
        <boxGeometry args={[14.0, 0.16, 0.04]} />
        <meshStandardMaterial color="#080c14" />
      </mesh>
      <mesh position={[-6.44, 0.08, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[14.0, 0.16, 0.04]} />
        <meshStandardMaterial color="#080c14" />
      </mesh>
      <mesh position={[6.44, 0.08, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[14.0, 0.16, 0.04]} />
        <meshStandardMaterial color="#080c14" />
      </mesh>

      {/* ══════════════════════════════════════════════
          2. LEFT WALL ART
      ══════════════════════════════════════════════ */}
      {/* Pink Pirate Skull Neon (Thin tube neon sign) */}
      <group position={[-6.42, 2.9, -1.6]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, 0, 0.01]}>
          <planeGeometry args={[0.7, 0.7]} />
          <meshBasicMaterial
            map={skullNeonTex}
            transparent
            opacity={lightsOn ? 1.0 : 0.4}
            toneMapped={false}
          />
        </mesh>
      </group>

      {/* Vertical Framed Poster on Left Wall with Blue Ambient Glow */}
      <group position={[-6.42, 2.6, -0.2]} rotation={[0, Math.PI / 2, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.66, 1.16, 0.02]} />
          <meshStandardMaterial color="#020617" roughness={0.3} />
        </mesh>
        <mesh position={[0, 0, 0.015]}>
          <planeGeometry args={[0.6, 1.1]} />
          <meshBasicMaterial map={leftPosterTex} toneMapped={false} />
        </mesh>
      </group>

      {/* ══════════════════════════════════════════════
          3. BACK WALL ART & FIXTURES (Left to Right)
      ══════════════════════════════════════════════ */}
      {/* "Hello World" Warm Cursive Neon on Left Back Wall */}
      <group position={[-3.8, 3.1, -3.92]}>
        <mesh position={[0, 0, 0.01]}>
          <planeGeometry args={[2.2, 1.1]} />
          <meshBasicMaterial
            map={helloWorldTex}
            transparent
            opacity={lightsOn ? 1.0 : 0.35}
            toneMapped={false}
          />
        </mesh>
        {/* Radar Hotspot */}
        <GlowMarker
          position={[0, 0, 0.12]}
          label="Hello World sign"
          isPrimary={false}
          onClick={() => onSelectMarker('neon')}
        />
      </group>

      {/* Hanging Ceiling Lamp Cord & Bulb (Above Lounge Area) */}
      <group position={[-2.8, 4.8, -2.2]}>
        <mesh position={[0, -0.9, 0]}>
          <cylinderGeometry args={[0.006, 0.006, 1.8, 8]} />
          <meshStandardMaterial color="#020617" />
        </mesh>
        <mesh position={[0, -1.8, 0]}>
          <sphereGeometry args={[0.065, 16, 16]} />
          <meshBasicMaterial color={lightsOn ? '#fef08a' : '#78350f'} toneMapped={false} />
        </mesh>
      </group>

      {/* Top Framed Certificate / Badge Card on Back Wall */}
      <group position={[-1.7, 3.4, -3.92]}>
        <mesh castShadow>
          <boxGeometry args={[1.28, 0.9, 0.03]} />
          <meshStandardMaterial color="#0f172a" roughness={0.4} />
        </mesh>
        <mesh position={[0, 0, 0.02]}>
          <planeGeometry args={[1.2, 0.82]} />
          <meshBasicMaterial map={certificateTex} toneMapped={false} />
        </mesh>
        {/* Radar Hotspot */}
        <GlowMarker
          position={[0, 0, 0.12]}
          label="Novibet certificate"
          isPrimary={false}
          onClick={() => onSelectMarker('certificate')}
        />
      </group>

      {/* Daylight / Night Horizon 2-Pane Window on Back Wall */}
      <group position={[1.4, 3.2, -3.92]}>
        {/* Window Outer Frame */}
        <mesh castShadow>
          <boxGeometry args={[2.84, 1.84, 0.05]} />
          <meshStandardMaterial color="#0f172a" roughness={0.4} />
        </mesh>
        {/* Window Scenic Landscape Canvas Face */}
        <mesh position={[0, 0, 0.02]}>
          <planeGeometry args={[2.74, 1.74]} />
          <meshBasicMaterial map={windowLandscapeTex} toneMapped={false} />
        </mesh>
        {/* Window Divider Crossbars */}
        <mesh position={[0, 0, 0.03]}>
          <boxGeometry args={[2.74, 0.04, 0.02]} />
          <meshStandardMaterial color="#020617" />
        </mesh>
        <mesh position={[0, 0, 0.03]}>
          <boxGeometry args={[0.04, 1.74, 0.02]} />
          <meshStandardMaterial color="#020617" />
        </mesh>
      </group>

      {/* 👁️ ICONIC STYLIZED OVAL EYE SCULPTURE (Mounted neatly above Bookshelf) */}
      <group position={[3.0, 3.65, -3.92]}>
        {/* Golden Almond / Oval Outer Bezel */}
        <mesh scale={[1.25, 0.75, 1]} castShadow>
          <torusGeometry args={[0.42, 0.065, 16, 48]} />
          <meshStandardMaterial
            color="#fbbf24"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>
        {/* White Sclera Plate */}
        <mesh scale={[1.22, 0.72, 1]} position={[0, 0, -0.01]}>
          <circleGeometry args={[0.4, 32]} />
          <meshBasicMaterial color="#f8fafc" />
        </mesh>
        {/* Solid Black Center Pupil */}
        <mesh position={[0, 0, 0.015]}>
          <circleGeometry args={[0.18, 32]} />
          <meshBasicMaterial color="#020617" />
        </mesh>
        {/* Pupil Specular Reflection Dot */}
        <mesh position={[0.05, 0.05, 0.02]}>
          <circleGeometry args={[0.035, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Wall Outlet & Cable on Right Back Wall */}
      <group position={[4.6, 2.8, -3.92]}>
        <mesh>
          <boxGeometry args={[0.16, 0.24, 0.02]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>
        <mesh position={[0, -0.55, 0.01]}>
          <cylinderGeometry args={[0.005, 0.005, 0.9, 8]} />
          <meshStandardMaterial color="#020617" />
        </mesh>
      </group>
    </group>
  );
}

