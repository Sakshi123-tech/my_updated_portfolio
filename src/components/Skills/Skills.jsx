import React from 'react';
import { motion } from 'framer-motion';
import { SkillsInfo } from '../../constants';

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const categoryColors = {
  'Core Languages': { bg: 'bg-purple-50', border: 'border-purple-100', accent: 'text-purple-700', dot: 'bg-purple-400' },
  'Frameworks & Runtime': { bg: 'bg-blue-50', border: 'border-blue-100', accent: 'text-blue-700', dot: 'bg-blue-400' },
  'Databases & Storage': { bg: 'bg-cyan-50', border: 'border-cyan-100', accent: 'text-cyan-700', dot: 'bg-cyan-400' },
  'DevOps & Tools': { bg: 'bg-indigo-50', border: 'border-indigo-100', accent: 'text-indigo-700', dot: 'bg-indigo-400' },
};

const Skills = () => (
  <section id="skills" className="relative py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
    {/* Aurora bg */}
    <div className="absolute inset-0 bg-gradient-to-t from-white via-indigo-50 to-purple-50 pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 70%)', filter: 'blur(80px)' }} />

    <div className="relative max-w-6xl mx-auto">
      {/* Header */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="text-center mb-16">
        <p className="section-tag mb-3">Technical Arsenal</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Technical Skills</h2>
        <div className="section-divider mx-auto" />
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          A curated stack of technologies I use to build production-grade software systems.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {SkillsInfo.map((cat, i) => {
          const colors = categoryColors[cat.title] || categoryColors['Core Languages'];
          return (
            <motion.div key={cat.title}
              custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
              className="glass-card rounded-2xl p-7"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className={`w-2.5 h-2.5 rounded-full ${colors.dot}`} />
                <h3 className={`font-bold text-base ${colors.accent}`}>{cat.title}</h3>
                <span className={`ml-auto text-xs font-mono px-2 py-0.5 rounded-md ${colors.bg} ${colors.border} border ${colors.accent}`}>
                  {cat.skills.length} techs
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <motion.div key={skill.name} whileHover={{ scale: 1.06, y: -2 }} className="skill-pill">
                    <img src={skill.logo} alt={skill.name} className="w-5 h-5 object-contain" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom highlight bar */}
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="mt-10 p-6 glass-card rounded-2xl flex flex-col sm:flex-row items-center gap-4 justify-between">
        <div>
          <p className="font-semibold text-gray-800 text-sm">Always learning, always shipping</p>
          <p className="text-gray-500 text-xs mt-0.5">Currently exploring System Design, Microservices & Cloud Architecture</p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          {['DSA', 'System Design', 'Microservices', 'Cloud'].map((t) => (
            <span key={t} className="badge text-xs">{t}</span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
