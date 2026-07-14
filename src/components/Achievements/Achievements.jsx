import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../../constants';

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const stats = [
  { value: 35, suffix: '%', label: 'Latency Reduced', color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' },
  { value: 25, suffix: '%', label: 'Performance Boost', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  { value: 30, suffix: '%', label: 'Bug Reduction', color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-100' },
  { value: 10, suffix: '+', label: 'Features Shipped', color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100' },
];

const useCountUp = (target, duration = 1500, trigger) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return count;
};

const StatCard = ({ stat, trigger }) => {
  const count = useCountUp(stat.value, 1400, trigger);
  return (
    <div className={`glass-card rounded-2xl p-6 text-center border ${stat.border}`}>
      <div className={`text-4xl font-bold mb-1 ${stat.color}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
    </div>
  );
};

const categoryColors = {
  'Performance Engineering': { bg: 'bg-purple-50', border: 'border-purple-100', text: 'text-purple-600' },
  'Optimization': { bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-600' },
  'Security Engineering': { bg: 'bg-red-50', border: 'border-red-100', text: 'text-red-600' },
  'Code Quality': { bg: 'bg-green-50', border: 'border-green-100', text: 'text-green-600' },
  'System Design': { bg: 'bg-indigo-50', border: 'border-indigo-100', text: 'text-indigo-600' },
  'Academic Excellence': { bg: 'bg-amber-50', border: 'border-amber-100', text: 'text-amber-600' },
};

const Achievements = () => {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setTriggered(true);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="relative py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
      {/* Aurora bg */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-50 via-purple-50 to-white pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[400px] -translate-x-1/2 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-14">
          <p className="section-tag mb-3">Measurable Impact</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="section-divider mx-auto" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Quantifiable results delivered across production systems and real-world engineering challenges.
          </p>
        </motion.div>

        {/* Animated Stats Row */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <StatCard stat={stat} trigger={triggered} />
            </motion.div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, i) => {
            const colors = categoryColors[ach.category] || categoryColors['Performance Engineering'];
            return (
              <motion.div key={ach.id}
                custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="text-4xl mb-4">{ach.icon}</div>
                <div className={`inline-block text-xs font-semibold font-mono px-3 py-1 rounded-full mb-3 ${colors.bg} ${colors.border} border ${colors.text}`}>
                  {ach.category}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{ach.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{ach.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
