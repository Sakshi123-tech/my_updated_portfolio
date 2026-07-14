import React from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const githubStats = [
  { icon: '📦', value: '20+', label: 'Repositories' },
  { icon: '⭐', value: '50+', label: 'Total Stars' },
  { icon: '🔀', value: '100+', label: 'Contributions' },
  { icon: '💻', value: '2+', label: 'Years Active' },
];

const GitHubActivity = () => (
  <section id="github-activity" className="relative py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
    {/* Aurora bg */}
    <div className="absolute inset-0 bg-gradient-to-t from-purple-50 via-white to-indigo-50 pointer-events-none" />
    <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(80px)' }} />

    <div className="relative max-w-5xl mx-auto">
      {/* Header */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="text-center mb-14">
        <p className="section-tag mb-3">Open Source Activity</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">GitHub Activity</h2>
        <div className="section-divider mx-auto" />
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Consistent code contributions, open source projects, and engineering exploration.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {githubStats.map((s, i) => (
          <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="glass-card rounded-2xl p-5 text-center">
            <div className="text-3xl mb-1">{s.icon}</div>
            <div className="text-2xl font-bold gradient-text" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>{s.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* GitHub Calendar */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="glass-card rounded-2xl p-8 overflow-x-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <FaGithub size={20} className="text-gray-600" />
            <span className="font-semibold text-gray-800">Contribution Activity</span>
          </div>
          <a href="https://github.com/Sakshi123-tech" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-purple-600 font-medium hover:text-purple-800 transition-colors">
            View Profile <FaExternalLinkAlt size={10} />
          </a>
        </div>
        <div className="min-w-[600px]">
          <GitHubCalendar
            username="Sakshi123-tech"
            colorScheme="light"
            theme={{
              light: ['#f3f0ff', '#ddd6fe', '#c4b5fd', '#a78bfa', '#7c3aed'],
            }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px' }}
            blockMargin={4}
            blockRadius={3}
            blockSize={13}
          />
        </div>
      </motion.div>

      {/* GitHub CTA */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="mt-8 text-center">
        <a href="https://github.com/Sakshi123-tech" target="_blank" rel="noopener noreferrer"
          className="btn-primary inline-flex">
          <span className="flex items-center gap-2">
            <FaGithub size={16} /> Visit GitHub Profile
          </span>
        </a>
      </motion.div>
    </div>
  </section>
);

export default GitHubActivity;
