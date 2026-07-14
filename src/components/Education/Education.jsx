import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../../constants';

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const Education = () => (
  <section id="education" className="relative py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-white via-purple-50 to-indigo-50 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(80px)' }} />

    <div className="relative max-w-4xl mx-auto">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="text-center mb-16">
        <p className="section-tag mb-3">Academic Background</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Education</h2>
        <div className="section-divider mx-auto" />
      </motion.div>

      <div className="flex flex-col gap-6">
        {education.map((edu, i) => (
          <motion.div key={edu.id}
            custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -3 }}
            className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row gap-5">
            {/* Logo */}
            <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-white border border-gray-100 shadow-sm overflow-hidden">
              <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
            </div>
            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="font-bold text-gray-900 text-base">{edu.degree}</h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-50 border border-purple-100 text-purple-700 text-sm font-bold flex-shrink-0">
                  🎓 {edu.grade}
                </span>
              </div>
              <p className="text-purple-600 font-medium text-sm mb-1">{edu.school}</p>
              <p className="text-gray-400 text-xs font-mono mb-3">{edu.date}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{edu.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
