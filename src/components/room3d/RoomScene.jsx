import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import RoomWalls from './RoomWalls';
import DeskWorkstation from './DeskWorkstation';
import LoungeZone from './LoungeZone';
import RightZone from './RightZone';

// Dynamic Live Animated Monitor Canvas
function createLiveMonitorCanvas() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  return canvas;
}

function updateMonitorCanvas(canvas, time) {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);

  // Background
  ctx.fillStyle = '#070b16';
  ctx.fillRect(0, 0, 1024, 512);

  // Top header bar
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, 1024, 38);

  // Window control dots
  ctx.fillStyle = '#ef4444';
  ctx.beginPath();
  ctx.arc(20, 19, 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#eab308';
  ctx.beginPath();
  ctx.arc(40, 19, 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#22c55e';
  ctx.beginPath();
  ctx.arc(60, 19, 6, 0, Math.PI * 2);
  ctx.fill();

  // Tab
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(80, 6, 220, 32);
  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 14px "Fira Code", monospace';
  ctx.fillText('⚡ sakshi.engineer.ts', 95, 27);

  // Sidebar
  ctx.fillStyle = '#0a0f1d';
  ctx.fillRect(0, 38, 155, 474);
  ctx.fillStyle = '#64748b';
  ctx.font = 'bold 11px monospace';
  ctx.fillText('EXPLORER', 16, 62);
  ctx.fillStyle = '#38bdf8';
  ctx.fillText('📁 src/backend', 16, 88);
  ctx.fillStyle = '#e2e8f0';
  ctx.fillText('  📄 auth.jwt.ts', 24, 112);
  ctx.fillText('  📄 socket.io.ts', 24, 136);
  ctx.fillText('  📄 cluster.ts', 24, 160);
  ctx.fillStyle = '#64748b';
  ctx.fillText('⚙️ docker.yaml', 16, 190);

  // Code editor lines
  const allLines = [
    { text: 'import { SystemCore, SDE } from "@sakshi/engine";', color: '#c084fc' },
    { text: 'import { SocketCluster } from "@/realtime/sync";', color: '#c084fc' },
    { text: '', color: '#fff' },
    { text: 'export const SakshiDevRig = new SDE.Engineer({', color: '#38bdf8' },
    { text: '  role: "Software Development Engineer",', color: '#34d399' },
    { text: '  stack: ["React", "Node", "Express", "MongoDB"],', color: '#fcd34d' },
    { text: '  architecture: "Low Level Design & Clean Code",', color: '#60a5fa' },
    { text: '  status: "READY_FOR_DEPLOYMENT",', color: '#4ade80' },
    { text: '});', color: '#38bdf8' },
    { text: '', color: '#fff' },
    { text: 'export async function streamMetrics() {', color: '#60a5fa' },
    { text: '  const sync = await SocketCluster.ping({ latency: "<15ms" });', color: '#fb923c' },
    { text: '  return { status: 200, healthy: true, uptime: "99.9%" };', color: '#4ade80' },
    { text: '}', color: '#60a5fa' },
  ];

  ctx.font = '15px "Fira Code", monospace';
  let y = 74;
  allLines.forEach((l, i) => {
    ctx.fillStyle = '#475569';
    ctx.fillText(`${i + 1}`.padStart(2, ' '), 175, y);
    ctx.fillStyle = l.color;
    ctx.fillText(l.text, 210, y);
    y += 25;
  });

  // Animated Cursor
  if (Math.sin(time * 6) > 0) {
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(210 + 130, y - 22, 10, 18);
  }

  // Live real-time Telemetry Panel on the right
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(720, 60, 280, 420);
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 2;
  ctx.strokeRect(720, 60, 280, 420);

  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 13px monospace';
  ctx.fillText('LIVE THROUGHPUT (QPS)', 735, 90);

  // Animated fluctuating chart curve
  ctx.beginPath();
  const step = 30;
  for (let i = 0; i < 9; i++) {
    const cx = 735 + i * step;
    const wave = Math.sin(time * 3 + i * 0.8) * 25 + Math.cos(time * 2 + i) * 15;
    const cy = 250 + wave;
    if (i === 0) ctx.moveTo(cx, cy);
    else ctx.lineTo(cx, cy);
  }
  ctx.strokeStyle = '#22c55e';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Metrics with live changing latency & memory
  const ping = (12 + Math.sin(time * 2) * 3).toFixed(1);
  const mem = (4.1 + Math.sin(time) * 0.3).toFixed(2);
  ctx.fillStyle = '#34d399';
  ctx.fillText(`● LATENCY: ${ping}ms (OK)`, 735, 340);
  ctx.fillStyle = '#38bdf8';
  ctx.fillText(`● MEMORY: ${mem}GB / 32GB`, 735, 370);
  ctx.fillStyle = '#c084fc';
  ctx.fillText('● SOCKETS: 128 SYNCED', 735, 400);
  ctx.fillStyle = '#fbbf24';
  ctx.fillText('● DOCKER: 6 RUNNING', 735, 430);
}

const RoomScene = ({ isDay, lightsOn, onSelectMarker }) => {
  const monitorCanvas = useMemo(() => createLiveMonitorCanvas(), []);
  const monitorTex = useMemo(() => {
    const tex = new THREE.CanvasTexture(monitorCanvas);
    tex.needsUpdate = true;
    return tex;
  }, [monitorCanvas]);

  const bubblesRef = useRef();
  const vacuumRef = useRef();
  const lastUpdateTime = useRef(0);

  // Animate live code & metrics, bubbles & vacuum
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Update monitor texture at ~30 FPS
    if (t - lastUpdateTime.current > 0.033) {
      updateMonitorCanvas(monitorCanvas, t);
      monitorTex.needsUpdate = true;
      lastUpdateTime.current = t;
    }

    if (bubblesRef.current) {
      bubblesRef.current.children.forEach((b, i) => {
        b.position.y = 0.08 + ((t * 0.35 + i * 0.22) % 0.46);
      });
    }
    if (vacuumRef.current) {
      vacuumRef.current.position.x = 0.2 + Math.sin(t * 0.3) * 0.55;
      vacuumRef.current.position.z = 2.3 + Math.cos(t * 0.3) * 0.3;
    }
  });

  return (
    <group position={[0, -0.7, 0]}>
      {/* 1. ROOM ENCLOSURE & WALL ART */}
      <RoomWalls
        isDay={isDay}
        lightsOn={lightsOn}
        onSelectMarker={onSelectMarker}
      />

      {/* 2. LEFT LOUNGE ZONE */}
      <LoungeZone
        lightsOn={lightsOn}
        vacuumRef={vacuumRef}
        onSelectMarker={onSelectMarker}
      />

      {/* 3. CENTER DEVELOPER WORKSTATION */}
      <DeskWorkstation
        isDay={isDay}
        lightsOn={lightsOn}
        monitorTex={monitorTex}
        onSelectMarker={onSelectMarker}
      />

      {/* 4. RIGHT ZONE: BOOKSHELF, AQUARIUM, ARCADE & FLOOR LAMP */}
      <RightZone
        lightsOn={lightsOn}
        bubblesRef={bubblesRef}
        onSelectMarker={onSelectMarker}
      />
    </group>
  );
};

export default RoomScene;
