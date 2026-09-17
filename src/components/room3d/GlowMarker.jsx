import React, { useState } from 'react';
import { Html } from '@react-three/drei';

/**
 * Glowing Interactive Radar Ring Marker matching Reference Image (avagianos-dev.gr)
 */
export default function GlowMarker({ position, label, isPrimary = false, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Html position={position} center distanceFactor={8.2} zIndexRange={[100, 0]}>
      <div
        className="flex items-center gap-2 cursor-pointer select-none pointer-events-auto group"
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Pulsing Concentric Radar Rings */}
        <div className="relative flex h-8 w-8 items-center justify-center">
          {/* Outer Ripple */}
          <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-cyan-400/30 border border-cyan-300/60" />
          {/* Middle Ring */}
          <span className="absolute inline-flex h-5 w-5 rounded-full bg-cyan-400/20 border border-cyan-400/80 shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
          {/* Center Glow Dot */}
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-200 shadow-[0_0_8px_#38bdf8]" />
        </div>

        {/* Pill Tag (Revealed on hover or if primary) */}
        <div
          className={`transition-all duration-300 origin-left ${
            isPrimary || hovered
              ? 'opacity-100 scale-100 translate-x-0'
              : 'opacity-0 scale-90 -translate-x-2 pointer-events-none'
          }`}
        >
          <button
            className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wide transition-all backdrop-blur-md shadow-xl border whitespace-nowrap ${
              isPrimary
                ? 'bg-emerald-400 text-slate-950 font-bold border-emerald-300 shadow-emerald-500/30'
                : 'bg-black/85 text-cyan-200 border-cyan-500/40 hover:border-cyan-300 hover:text-white'
            }`}
          >
            {label}
          </button>
        </div>
      </div>
    </Html>
  );
}
