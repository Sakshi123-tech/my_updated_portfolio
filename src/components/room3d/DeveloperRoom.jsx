import React, { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import RoomScene from './RoomScene';
import RoomLighting from './RoomLighting';
import RoomOverlay from './RoomOverlay';

function WebGLFallback({ onNavigatePortfolio }) {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-white text-center">
      <div className="w-16 h-16 rounded-2xl bg-violet-600/30 border border-violet-500/40 flex items-center justify-center text-3xl mb-4">
        ⚡
      </div>
      <h1 className="text-2xl font-bold mb-2">Sakshi Agnihotri</h1>
      <p className="text-slate-400 font-mono text-sm mb-6">
        Software Development Engineer • Full Stack Systems
      </p>
      <button
        onClick={onNavigatePortfolio}
        className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 font-bold transition-all shadow-lg cursor-pointer"
      >
        Enter Portfolio
      </button>
    </div>
  );
}

const DeveloperRoom = ({ onNavigatePortfolio }) => {
  // 4 States:
  // State 1: Night + Lights Off
  // State 2: Night + Lights On (Default)
  // State 3: Day + Lights On
  // State 4: Day + Lights Off
  const [isDay, setIsDay] = useState(false);
  const [lightsOn, setLightsOn] = useState(true);
  const [activeModal, setActiveModal] = useState(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
      }
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) {
    return <WebGLFallback onNavigatePortfolio={onNavigatePortfolio} />;
  }

  return (
    <div className="relative w-full h-screen bg-[#04060d] overflow-hidden select-none">
      {/* 3D WebGL Canvas with Zoomed-Out Spacious Framing */}
      <Canvas
        shadows
        camera={{ position: [0, 2.0, 9.4], fov: 38 }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={null}>
          <RoomLighting isDay={isDay} lightsOn={lightsOn} />
          <RoomScene
            isDay={isDay}
            lightsOn={lightsOn}
            onSelectMarker={(markerId) => setActiveModal(markerId)}
          />
          <OrbitControls
            enableDamping
            dampingFactor={0.06}
            minDistance={4.5}
            maxDistance={14.0}
            minPolarAngle={Math.PI / 4.2}
            maxPolarAngle={Math.PI / 2.05}
            minAzimuthAngle={-Math.PI / 3.0}
            maxAzimuthAngle={Math.PI / 3.0}
            target={[0, 1.2, -0.7]}
          />
        </Suspense>
      </Canvas>

      {/* HTML Overlay: Top Header (5 tabs), Live Logs, Modals, Guidance */}
      <RoomOverlay
        isDay={isDay}
        setIsDay={setIsDay}
        lightsOn={lightsOn}
        setLightsOn={setLightsOn}
        onNavigatePortfolio={onNavigatePortfolio}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
    </div>
  );
};

export default DeveloperRoom;
