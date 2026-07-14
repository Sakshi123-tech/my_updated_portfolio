import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../constants';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const Experience = () => (
  <section id="experience" className="relative py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
    {/* Aurora bg */}
    <div className="absolute inset-0 bg-gradient-to-t from-indigo-50 via-white to-purple-50 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 70%)', filter: 'blur(80px)' }} />

    <div className="relative max-w-5xl mx-auto">
      {/* Header */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="text-center mb-16">
        <p className="section-tag mb-3">Career Journey</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Professional Experience</h2>
        <div className="section-divider mx-auto" />
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          From full-stack training to engineering production systems at enterprise companies.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(124,58,237,0.35) 10%, rgba(79,70,229,0.35) 90%, transparent)' }} />

        {experiences.map((exp, i) => (
          <motion.div key={exp.id}
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            custom={i}
            className={`relative flex flex-col md:flex-row items-start mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Dot on timeline */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-purple-400 bg-white shadow-md shadow-purple-100 z-10 mt-1" />

            {/* Content card */}
            <div className={`ml-14 md:ml-0 md:w-[46%] ${i % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
              <motion.div whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 cursor-default">
                {/* Company header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                    <img src={exp.img} alt={exp.company} className="w-full h-full object-contain p-1" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base leading-snug">{exp.role}</h3>
                    <p className="text-purple-600 font-medium text-sm">{exp.company}</p>
                    <p className="text-gray-400 text-xs mt-0.5 font-mono">{exp.date}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">{exp.desc}</p>

                {/* Impact metrics */}
                {exp.impact && exp.impact.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.impact.map((m, idx) => (
                      <div key={idx} className="flex flex-col items-center px-3 py-1.5 rounded-lg bg-purple-50 border border-purple-100">
                        <span className="text-lg font-bold gradient-text leading-none">{m.metric}</span>
                        <span className="text-xs text-gray-500 mt-0.5">{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((sk, idx) => (
                    <span key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-indigo-50 text-indigo-600 border border-indigo-100">
                      {sk}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Date bubble on opposite side (desktop) */}
            <div className={`hidden md:flex md:w-[46%] items-start ${i % 2 === 0 ? 'md:pl-10' : 'md:pr-10 md:justify-end'}`}>
              <div className="px-4 py-2 rounded-xl bg-white border border-purple-100 shadow-sm text-sm font-mono text-purple-600 mt-1">
                {exp.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
