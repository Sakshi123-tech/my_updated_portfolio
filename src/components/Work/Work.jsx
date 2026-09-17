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

  const featured = projects;

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
              className={`bg-white rounded-3xl shadow-2xl ${selected.detailed ? 'max-w-4xl' : 'max-w-2xl'} w-full overflow-hidden max-h-[88vh] overflow-y-auto`}
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
                {selected.detailed ? (
                  <>
                    <div className="flex flex-wrap gap-2 mb-6 mt-4">
                      {selected.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg text-xs font-medium bg-indigo-50 text-indigo-600 border border-indigo-100">{tag}</span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                      {selected.webapp && (
                        <a href={selected.webapp} target="_blank" rel="noopener noreferrer" className="btn-primary flex justify-center text-sm py-2">Live Demo</a>
                      )}
                      {selected.github && (
                        <a href={selected.github} target="_blank" rel="noopener noreferrer" className="btn-outline flex justify-center text-sm py-2"><FaGithub size={14} className="mr-2"/> GitHub</a>
                      )}
                      {selected.documentation && (
                        <a href={selected.documentation} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center justify-center text-sm py-2 text-center leading-tight">Tech Docs</a>
                      )}
                      {selected.demoVideo && (
                        <a href={selected.demoVideo} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center justify-center text-sm py-2">Watch Demo</a>
                      )}
                    </div>

                    <div className="space-y-8 text-sm text-gray-700">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">Key Features</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selected.keyFeatures?.map((f, i) => (
                            <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                              <span className="font-semibold text-purple-700 block mb-1">{f.title}</span>
                              <span className="text-gray-600 leading-relaxed text-xs">{f.desc}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {selected.architecture && (
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">System Architecture</h4>
                          <div className="bg-purple-50/50 p-5 rounded-xl border border-purple-100">
                            <div className="flex flex-col md:flex-row gap-2 items-center justify-center text-center font-medium text-purple-800 text-xs flex-wrap">
                              {selected.architecture.flow.map((step, i) => (
                                <React.Fragment key={i}>
                                  <div className="bg-white px-3 py-2 rounded shadow-sm border border-purple-100 text-[10px] sm:text-xs">{step}</div>
                                  {i < selected.architecture.flow.length - 1 && <span className="text-purple-400 rotate-90 md:rotate-0">➔</span>}
                                </React.Fragment>
                              ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-purple-100 flex flex-wrap gap-2 justify-center items-center">
                              <span className="text-xs font-semibold text-gray-500 mr-2">Supporting:</span>
                              {selected.architecture.supporting.map((sup, i) => (
                                <span key={i} className="px-2 py-1 bg-white rounded text-[10px] sm:text-xs text-gray-600 border border-gray-200">{sup}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {selected.security && (
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">Security Architecture</h4>
                          <div className="flex flex-wrap gap-2">
                            {selected.security.map((sec, i) => (
                              <span key={i} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-[10px] sm:text-xs font-medium border border-blue-100 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> {sec}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {selected.highlights && (
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">Engineering Highlights</h4>
                          <ul className="list-disc pl-5 space-y-1.5 text-gray-600 text-xs sm:text-sm">
                            {selected.highlights.map((hl, i) => (
                              <li key={i}>{hl}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {selected.challenges && (
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">Engineering Challenges</h4>
                          <div className="space-y-3">
                            {selected.challenges.map((ch, i) => (
                              <div key={i}>
                                <span className="font-semibold text-gray-800 block text-sm">{ch.title}</span>
                                <span className="text-gray-600 text-xs leading-relaxed">{ch.desc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selected.deployment && (
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">Deployment Architecture</h4>
                          <div className="flex flex-wrap gap-3">
                            {Object.entries(selected.deployment).map(([key, val], i) => (
                              <div key={i} className="flex-1 min-w-[120px] bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
                                <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-500 mb-1">{key}</span>
                                <span className="block font-semibold text-gray-800 text-xs sm:text-sm">{val}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-200">
                        {selected.documentationSectionLink && (
                          <div className="bg-indigo-50/50 p-5 rounded-xl border border-indigo-100 flex flex-col h-full">
                            <h5 className="font-bold text-indigo-900 mb-2">Technical Documentation</h5>
                            <p className="text-xs text-indigo-700/80 mb-4 leading-relaxed flex-grow">Detailed engineering documentation covering the system's High Level Design, Low Level Design, database architecture, API documentation, authentication and authorization flows, security architecture, real-time communication, deployment architecture, testing strategy, and scalability considerations.</p>
                            <a href={selected.documentationSectionLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-4 self-start">View Technical Documentation</a>
                          </div>
                        )}
                        {selected.demoVideo && (
                          <div className="bg-purple-50/50 p-5 rounded-xl border border-purple-100 flex flex-col h-full">
                            <h5 className="font-bold text-purple-900 mb-2">Product Walkthrough</h5>
                            <p className="text-xs text-purple-700/80 mb-4 leading-relaxed flex-grow">Detailed walkthrough of the deployed application covering authentication, role-based access, employee management, onboarding, face registration, kiosk management, attendance workflows, dashboards, reporting, real-time updates, security architecture, and deployment.</p>
                            <a href={selected.demoVideo} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-2 px-4 self-start bg-white hover:bg-purple-50">Watch Full Demo</a>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-8 flex justify-center pb-4">
                        <a href={selected.webapp} target="_blank" rel="noopener noreferrer" className="btn-primary py-3 px-8 text-sm shadow-xl shadow-purple-500/20">
                          Launch Production App
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
