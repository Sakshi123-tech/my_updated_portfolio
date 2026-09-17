import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaEnvelope, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

// Lightweight zero-dependency celebration particle trigger
function triggerCelebration() {
  const colors = ['#f43f5e', '#a855f7', '#38bdf8', '#34d399', '#facc15'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.style.position = 'fixed';
    p.style.zIndex = '9999';
    p.style.width = `${Math.random() * 8 + 4}px`;
    p.style.height = `${Math.random() * 8 + 4}px`;
    p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    p.style.left = `${50 + (Math.random() * 40 - 20)}%`;
    p.style.top = `${60 + (Math.random() * 20 - 10)}%`;
    p.style.pointerEvents = 'none';
    p.style.transition = 'all 1.2s cubic-bezier(0.25, 1, 0.5, 1)';
    document.body.appendChild(p);

    setTimeout(() => {
      p.style.transform = `translate(${Math.random() * 400 - 200}px, ${
        Math.random() * 300 - 250
      }px) rotate(${Math.random() * 720}deg)`;
      p.style.opacity = '0';
    }, 20);

    setTimeout(() => {
      p.remove();
    }, 1300);
  }
}

const telemetryLogTemplates = [
  'node > server listening on port 5000 (0.0.0.0)',
  'docker: 6 microservices healthy and running',
  'mongo > cluster connected: 0ms ping / 24 pool size',
  'socket.io > room connection sync complete',
  'security > OWASP XSS & JWT middleware active',
  'redis > cache hit ratio 94.8%',
  'jest > 28 unit & integration test suites passed',
  'nginx > reverse proxy: all routes 200 OK',
  'esp32/sensors > temp 24.6°C • humidity 52%',
  'uptime > 99.99% • active threads: 16',
  'git > synced with main branch (clean working tree)',
];

const RoomOverlay = ({
  isDay,
  setIsDay,
  lightsOn,
  setLightsOn,
  onNavigatePortfolio,
  activeModal,
  setActiveModal,
}) => {
  const [logs, setLogs] = useState([
    { time: '00:18:50', text: 'node > server initialized in production mode' },
    { time: '00:19:12', text: 'docker: 6 microservices healthy' },
    { time: '00:19:45', text: 'mongo > database connection established' },
    { time: '00:20:01', text: 'socket.io > real-time channel synchronized' },
    { time: '00:20:25', text: 'nginx > reverse proxy: all routes 200' },
  ]);

  // Append new live telemetry logs periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(
        now.getMinutes()
      ).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
      const randomText =
        telemetryLogTemplates[
          Math.floor(Math.random() * telemetryLogTemplates.length)
        ];

      setLogs((prev) => [...prev.slice(-4), { time: timeStr, text: randomText }]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const handleArcadeCoin = () => {
    triggerCelebration();
  };

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 md:p-6 z-10 select-none overflow-hidden">
      {/* ══════════════════════════════════════════════
          TOP HEADER BAR
      ══════════════════════════════════════════════ */}
      <header className="flex flex-wrap items-center justify-between gap-4 pointer-events-auto">
        {/* Left: User Identity Badge */}
        <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 shadow-2xl">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-inner font-mono text-sm tracking-wider">
            SA
          </div>
          <div>
            <h1 className="text-sm md:text-base font-bold text-white tracking-wide flex items-center gap-2">
              Sakshi Agnihotri
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </h1>
            <p className="text-xs text-slate-300 font-mono">
              Software Development Engineer • India
            </p>
          </div>
        </div>

        {/* Right: 5 Action Pills */}
        <nav className="flex items-center flex-wrap gap-2 text-xs md:text-sm font-mono">
          {/* 1. PORTFOLIO BUTTON */}
          <button
            onClick={onNavigatePortfolio}
            className="px-4 py-2 rounded-full bg-black/50 hover:bg-violet-600/80 text-white font-medium backdrop-blur-md border border-white/15 hover:border-violet-400 transition-all duration-200 shadow-lg cursor-pointer flex items-center gap-1.5 active:scale-95 group"
          >
            <span>portfolio</span>
            <FaExternalLinkAlt className="text-[10px] text-violet-300 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* 2. GITHUB BUTTON */}
          <button
            onClick={() => window.open('https://github.com/Sakshi123-tech', '_blank')}
            className="px-3.5 py-2 rounded-full bg-black/50 hover:bg-slate-800 text-slate-200 hover:text-white font-medium backdrop-blur-md border border-white/15 transition-all duration-200 shadow-lg cursor-pointer flex items-center gap-1.5 active:scale-95"
          >
            <FaGithub className="text-sm" />
            <span>github</span>
          </button>

          {/* 3. EMAIL BUTTON */}
          <button
            onClick={() => window.open('mailto:sakshi.agnihotri2003@gmail.com')}
            className="px-3.5 py-2 rounded-full bg-black/50 hover:bg-slate-800 text-slate-200 hover:text-white font-medium backdrop-blur-md border border-white/15 transition-all duration-200 shadow-lg cursor-pointer flex items-center gap-1.5 active:scale-95"
          >
            <FaEnvelope className="text-xs" />
            <span>email</span>
          </button>

          {/* 4. LIGHTS TOGGLE BUTTON (lights on / lights off) */}
          <button
            onClick={() => setLightsOn(!lightsOn)}
            className={`px-3.5 py-2 rounded-full backdrop-blur-md border transition-all duration-200 shadow-lg cursor-pointer flex items-center gap-1.5 active:scale-95 ${
              lightsOn
                ? 'bg-amber-500/20 border-amber-400/50 text-amber-200 hover:bg-amber-500/30'
                : 'bg-black/50 border-white/15 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                lightsOn ? 'bg-amber-400 animate-pulse' : 'border border-slate-400'
              }`}
            />
            <span>{lightsOn ? '● lights on' : '○ lights off'}</span>
          </button>

          {/* 5. NIGHT / DAY TOGGLE BUTTON */}
          <button
            onClick={() => setIsDay(!isDay)}
            className={`px-3.5 py-2 rounded-full backdrop-blur-md border transition-all duration-200 shadow-lg cursor-pointer flex items-center gap-1.5 active:scale-95 ${
              isDay
                ? 'bg-sky-500/20 border-sky-400/50 text-sky-200 hover:bg-sky-500/30'
                : 'bg-indigo-950/60 border-indigo-500/40 text-indigo-200 hover:bg-indigo-900/60'
            }`}
          >
            <span>{isDay ? '☼ day' : '☾ night'}</span>
          </button>
        </nav>
      </header>

      {/* ══════════════════════════════════════════════
          INTERACTIVE MARKER MODAL / DRAWER
      ══════════════════════════════════════════════ */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            className="self-center my-auto pointer-events-auto max-w-lg w-full bg-slate-950/90 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl text-white relative z-30"
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <FaTimes className="text-sm" />
            </button>

            {activeModal === 'dev-rig' && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xl">
                    ⚡
                  </span>
                  <div>
                    <h2 className="text-lg font-bold">The Developer Rig</h2>
                    <p className="text-xs text-slate-400 font-mono">
                      Primary Engineering & Architecture Workstation
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-xs text-slate-300 font-mono">
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-white/5 space-y-1">
                    <p className="text-emerald-400 font-bold">💻 CORE SPECIALIZATION</p>
                    <p>Software Development Engineer (SDE) • Full Stack Systems</p>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-white/5 space-y-1">
                    <p className="text-cyan-400 font-bold">🛠️ PRIMARY TECH STACK</p>
                    <p>React.js • Node.js • Express.js • MongoDB • JavaScript (ES6+)</p>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-white/5 space-y-1">
                    <p className="text-purple-400 font-bold">⚡ PERFORMANCE & SECURITY</p>
                    <p>Socket.IO Sync • Docker • OWASP Top 10 • REST APIs • JWT Auth</p>
                  </div>
                </div>
                <div className="mt-5 flex justify-end">
                  <button
                    onClick={onNavigatePortfolio}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium text-xs shadow-lg cursor-pointer transition-all flex items-center gap-2"
                  >
                    <span>View Projects & Experience</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </button>
                </div>
              </div>
            )}

            {activeModal === 'aquarium' && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xl">
                    🐟
                  </span>
                  <div>
                    <h2 className="text-lg font-bold">Terrarium & Biome</h2>
                    <p className="text-xs text-slate-400 font-mono">
                      Real-time aquatic ecosystem simulation
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  You tapped the glass! The water ripples and bubbles respond in real-time.
                  A gentle reminder to maintain balance, write clean asynchronous code, and keep memory leaks at bay.
                </p>
                <div className="mt-4 p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                  💧 Water Temp: 24.2°C • pH: 7.2 • Filtration: 100% Optimal
                </div>
              </div>
            )}

            {activeModal === 'arcade' && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-3 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30 text-xl">
                    🕹️
                  </span>
                  <div>
                    <h2 className="text-lg font-bold">Retro Dev Cabinet</h2>
                    <p className="text-xs text-slate-400 font-mono">
                      Classic 8-bit Gaming & Easter Eggs
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Insert coin to trigger celebration particles and unlock developer energy!
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleArcadeCoin}
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs shadow-lg cursor-pointer transition-all active:scale-95"
                  >
                    🪙 INSERT COIN
                  </button>
                  <button
                    onClick={onNavigatePortfolio}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono cursor-pointer transition-all"
                  >
                    View Achievements
                  </button>
                </div>
              </div>
            )}

            {activeModal === 'bookshelf' && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xl">
                    📚
                  </span>
                  <div>
                    <h2 className="text-lg font-bold">Engineering Knowledge Base</h2>
                    <p className="text-xs text-slate-400 font-mono">
                      Curated books & computer science foundation
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-white/5">
                    📖 Designing Data-Intensive Applications
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-white/5">
                    📖 Clean Architecture & LLD
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-white/5">
                    📖 Data Structures & Algorithms
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-white/5">
                    📖 Modern Full-Stack Web Dev
                  </div>
                </div>
              </div>
            )}
            {activeModal === 'esp32' && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-3 rounded-2xl bg-red-500/20 text-red-400 border border-red-500/30 text-xl">
                    🚨
                  </span>
                  <div>
                    <h2 className="text-lg font-bold">ESP32 Emergency Trigger</h2>
                    <p className="text-xs text-slate-400 font-mono">
                      IoT Telemetry & Production Panic Switch
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Hardware kill-switch and emergency restart protocol hooked up to production microservices.
                  Triggering will gracefully drain web sockets and restart health probes without dropping connections.
                </p>
                <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/20 text-xs font-mono text-red-300">
                  ⚡ Pin 4: HIGH • Status: ARMED • Firmware: v2.4.1-esp32-greenhouse
                </div>
              </div>
            )}

            {activeModal === 'certificate' && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-3 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xl">
                    📜
                  </span>
                  <div>
                    <h2 className="text-lg font-bold">Certifications & Credentials</h2>
                    <p className="text-xs text-slate-400 font-mono">
                      Software Engineering, Full-Stack & System Design
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-xs text-slate-300 font-mono">
                  <div className="p-3 bg-slate-900 rounded-xl border border-white/5 flex justify-between items-center">
                    <span>🎓 B.Tech CSE (8.69 CGPA)</span>
                    <span className="text-emerald-400">Distinction</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-white/5 flex justify-between items-center">
                    <span>⚡ SDE-1 Engineering Track</span>
                    <span className="text-cyan-400">Coreshield</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={onNavigatePortfolio}
                    className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-mono"
                  >
                    View Education & Certs
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════
          BOTTOM BAR: TELEMETRY LOGS & HELPER PILL
      ══════════════════════════════════════════════ */}
      <footer className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pointer-events-auto">
        {/* Live Terminal Telemetry (Bottom Left) */}
        <div className="bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 shadow-2xl max-w-md w-full font-mono text-[11px] leading-relaxed">
          <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-white/10 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-white">LIVE TELEMETRY STREAM</span>
          </div>
          <div className="space-y-1">
            {logs.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-emerald-400 font-medium">{item.time}</span>
                <span className="text-slate-300">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center/Bottom Helper Pill */}
        <div className="self-center md:self-end px-5 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-slate-300 font-mono text-xs shadow-2xl text-center">
          drag to orbit • scroll to zoom • click any glowing marker
        </div>
      </footer>
    </div>
  );
};

export default RoomOverlay;
