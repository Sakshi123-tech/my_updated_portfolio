import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.jpg';

/* ── Directional Shine Image Component ─────────────────────────────────── */
const DirectionalShineImage = ({ src, alt }) => {
  const containerRef = useRef(null);
  const shineX = useMotionValue(-150);           // shine X position (% based)
  const shineOpacity = useMotionValue(0);

  // useTransform maps shineX → gradient background-position
  const gradientBg = useTransform(shineX, (x) => {
    return `linear-gradient(105deg,
      transparent ${x - 20}%,
      rgba(255,255,255,0.55) ${x}%,
      rgba(255,255,255,0.75) ${x + 4}%,
      rgba(255,255,255,0.55) ${x + 8}%,
      transparent ${x + 28}%)`;
  });

  const handleMouseEnter = useCallback((e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - rect.left;          // px from left edge
    const fromLeft = relX < rect.width / 2;      // entered from left side?

    // Set starting position off-screen in the entry direction
    shineX.set(fromLeft ? -30 : 150);
    shineOpacity.set(0);

    // Animate shine sweep across the image
    animate(shineX, fromLeft ? 140 : -40, {
      duration: 0.65,
      ease: [0.25, 0.1, 0.25, 1],
    });
    animate(shineOpacity, [0, 1, 1, 0], {
      duration: 0.65,
      times: [0, 0.1, 0.8, 1],
      ease: 'easeInOut',
    });
  }, [shineX, shineOpacity]);

  const handleMouseMove = useCallback((e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    // Subtle real-time follow: keep shine near cursor
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    animate(shineX, pct - 14, { duration: 0.2, ease: 'easeOut' });
  }, [shineX]);

  const handleMouseLeave = useCallback(() => {
    animate(shineOpacity, 0, { duration: 0.3, ease: 'easeOut' });
  }, [shineOpacity]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl animate-pulse-glow cursor-pointer"
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />

      {/* Directional shine overlay */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: gradientBg,
          opacity: shineOpacity,
          mixBlendMode: 'screen',
        }}
      />

      {/* Subtle persistent purple tint on hover */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(79,70,229,0.12) 100%)',
          opacity: shineOpacity,
        }}
      />
    </div>
  );
};

const badges = [
  { label: 'Production-Ready Apps', icon: '🚀' },
  { label: 'Enterprise Software', icon: '🏢' },
  { label: 'Scalable Architecture', icon: '🏗️' },
  { label: 'Performance Optimization', icon: '⚡' },
  { label: 'Real-Time Systems', icon: '📡' },
  { label: 'Clean Code & LLD', icon: '✨' },
  { label: 'REST APIs', icon: '🔗' },
  { label: 'Secure Authentication', icon: '🛡️' },
];

const roles = [
  'Software Development Engineer',
  'Full-Stack Systems Builder',
  'Backend Architecture Designer',
  'API & Performance Engineer',
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const About = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const str = roles[roleIdx];
    let t;
    if (!deleting && charIdx < str.length) {
      t = setTimeout(() => setCharIdx(c => c + 1), 55);
    } else if (!deleting && charIdx === str.length) {
      t = setTimeout(() => setDeleting(true), 2600);
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => setCharIdx(c => c - 1), 30);
    } else {
      setDeleting(false);
      setRoleIdx(r => (r + 1) % roles.length);
    }
    setDisplayed(str.substring(0, charIdx));
    return () => clearTimeout(t);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 px-6 md:px-10 lg:px-16">

      {/* ── AURORA BACKGROUND (bottom-to-top gradient) ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-100 via-[#f0ebff] to-white pointer-events-none" />
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-60" />

      {/* Aurora orbs */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full aurora-1 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)', filter: 'blur(70px)' }} />
      <div className="absolute bottom-[-100px] right-1/4 w-[400px] h-[400px] rounded-full aurora-2 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)', filter: 'blur(70px)' }} />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full aurora-3 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* LEFT: Text */}
          <div className="lg:w-[55%] text-center lg:text-left">

            {/* Status */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 mb-6">
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open to SDE Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="text-purple-500 font-mono text-sm tracking-widest uppercase mb-2">
              Hi, I'm
            </motion.p>
            <motion.h1 custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.05] mb-4 text-gray-900"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Sakshi<br />
              <span className="gradient-text">Agnihotri</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="mb-2">
              <span className="text-lg sm:text-xl font-semibold text-gray-600">
                {displayed}
                <span className="animate-blink border-r-2 border-purple-500 ml-0.5">&nbsp;</span>
              </span>
            </motion.div>

            {/* SDE tag */}
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="mb-5">
              <span className="inline-block px-4 py-1.5 rounded-md text-xs font-mono font-semibold tracking-widest bg-purple-50 border border-purple-200 text-purple-600">
                SOFTWARE DEVELOPMENT ENGINEER
              </span>
            </motion.div>

            {/* Subheading */}
            <motion.p custom={5} variants={fadeUp} initial="hidden" animate="visible"
              className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Building <span className="text-purple-600 font-semibold">scalable</span>,{' '}
              <span className="text-blue-600 font-semibold">secure</span>, and{' '}
              <span className="text-cyan-600 font-semibold">high-performance</span> software systems that ship to production and scale to millions.
            </motion.p>

            {/* Badges */}
            <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap gap-2 mb-9 justify-center lg:justify-start">
              {badges.map((b, i) => (
                <motion.span key={i} whileHover={{ scale: 1.06, y: -2 }} className="badge">
                  <span>{b.icon}</span> {b.label}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div custom={7} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href="https://drive.google.com/file/d/1FJ-SqWtzOspF6c7sRFzmqP5MUgxmCt62/view?usp=sharing"
                target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </span>
              </motion.a>
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href="#work" className="btn-outline"
                onClick={e => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}>
                View Projects →
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div custom={8} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap gap-8 pt-8 border-t border-purple-100 justify-center lg:justify-start">
              {[{ v: '2+', l: 'Years Building' }, { v: '10+', l: 'Projects Shipped' }, { v: '3', l: 'Companies' }].map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold gradient-text">{s.v}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Profile */}
          <motion.div
            className="lg:w-[42%] flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1200} scale={1.02} transitionSpeed={1500} gyroscope>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 xl:w-96 xl:h-96">
                {/* Spinning gradient ring */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-3 rounded-full pointer-events-none"
                  style={{ background: 'conic-gradient(from 0deg, transparent 50%, rgba(124,58,237,0.6) 75%, rgba(79,70,229,0.6) 90%, transparent 100%)' }} />

                {/* Static ring */}
                <div className="absolute -inset-1.5 rounded-full"
                  style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(79,70,229,0.25), rgba(8,145,178,0.2))' }} />

                {/* Profile image with directional shine */}
                <DirectionalShineImage
                  src={profileImage}
                  alt="Sakshi Agnihotri – Software Development Engineer"
                />

                {/* Floating metric chips */}
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-2 -right-4 px-3 py-1.5 rounded-xl bg-white border border-purple-100 shadow-md text-xs font-semibold text-purple-700 flex items-center gap-1.5">
                  ⚡ 25% Faster Load
                </motion.div>
                <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-xl bg-white border border-blue-100 shadow-md text-xs font-semibold text-blue-700 flex items-center gap-1.5">
                  🛡️ OWASP Secure
                </motion.div>
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  className="absolute top-1/2 -left-6 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-white border border-green-100 shadow-md text-xs font-semibold text-green-700 flex items-center gap-1.5">
                  📡 35% Less Latency
                </motion.div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="text-xs text-gray-500 tracking-widest uppercase font-mono">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-gray-300 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-purple-400" />
        </div>
      </motion.div>
    </section>
  );
};

export default About;