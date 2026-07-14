import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const Work = () => {
  const [selected, setSelected] = useState(null);

  const featured = projects.slice(0, 6);

  return (
    <section id="work" className="relative py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
      {/* Aurora bg */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-50 via-[#f0ebff] to-white pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-16">
          <p className="section-tag mb-3">Engineering Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="section-divider mx-auto" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Production-grade systems focused on engineering impact, scalability, and security.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((proj, i) => (
            <motion.div key={proj.id}
              custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -6, scale: 1.01 }}
              onClick={() => setSelected(proj)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img src={proj.image} alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 gap-3">
                  {proj.github && (
                    <a href={typeof proj.github === 'string' ? proj.github : proj.github.frontend}
                      target="_blank" rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-white/30 transition-all">
                      <FaGithub size={12} /> Code
                    </a>
                  )}
                  {proj.webapp && (
                    <a href={proj.webapp} target="_blank" rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex items-center gap-1.5 bg-purple-600/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-purple-700/80 transition-all">
                      <FaExternalLinkAlt size={10} /> Live
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug">{proj.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">{proj.description}</p>
                {proj.impact && (
                  <p className="text-xs text-purple-600 font-medium bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-100 mb-3">
                    💡 {proj.impact}
                  </p>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.slice(0, 4).map((tag, idx) => (
                    <span key={idx}
                      className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-50 text-indigo-600 border border-indigo-100">
                      {tag}
                    </span>
                  ))}
                  {proj.tags.length > 4 && (
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-500">
                      +{proj.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: 'spring', bounce: 0.25 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden max-h-[88vh] overflow-y-auto"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/40 transition-all text-lg font-bold">
                  ×
                </button>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{selected.title}</h3>
                {selected.impact && (
                  <p className="text-sm text-purple-700 font-medium bg-purple-50 px-4 py-2 rounded-xl border border-purple-100 mb-4">
                    💡 {selected.impact}
                  </p>
                )}
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{selected.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg text-xs font-medium bg-indigo-50 text-indigo-600 border border-indigo-100">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {selected.github && (
                    <a href={typeof selected.github === 'string' ? selected.github : selected.github.frontend}
                      target="_blank" rel="noopener noreferrer"
                      className="btn-outline flex-1 justify-center text-sm py-2.5">
                      <FaGithub size={14} /> View Code
                    </a>
                  )}
                  {selected.webapp && (
                    <a href={selected.webapp} target="_blank" rel="noopener noreferrer"
                      className="btn-primary flex-1 justify-center text-sm py-2.5">
                      <span className="flex items-center gap-2 justify-center">
                        <FaExternalLinkAlt size={12} /> Live Demo
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
