import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const socials = [
  { icon: <FaGithub size={20} />, label: 'GitHub', href: 'https://github.com/Sakshi123-tech', color: 'hover:text-gray-900 hover:border-gray-300' },
  { icon: <FaLinkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sakshi-agnihotri-64613a263', color: 'hover:text-blue-600 hover:border-blue-300' },
  { icon: <FaEnvelope size={20} />, label: 'Email', href: 'mailto:sakshiagnihotri@example.com', color: 'hover:text-red-500 hover:border-red-300' },
];

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs.sendForm('service_bi3t72x', 'template_nrvqugb', form.current, 'S11_FumF197lX1MX-')
      .then(() => {
        toast.success('Message sent! I\'ll get back to you soon. ✅', { theme: 'light', position: 'top-right', autoClose: 3500 });
        form.current.reset();
      })
      .catch(() => {
        toast.error('Failed to send. Please try again.', { theme: 'light', position: 'top-right', autoClose: 3000 });
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
      <ToastContainer />
      {/* Aurora bg */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-100 via-indigo-50 to-white pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-14">
          <p className="section-tag mb-3">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <div className="section-divider mx-auto" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Whether it's a new opportunity, a collaboration, or just a quick hello — I'm always open to connecting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Info */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6">
            {/* Info card */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-base">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
                    <FaMapMarkerAlt size={14} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Location</p>
                    <p className="text-gray-500">Lucknow, Uttar Pradesh, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <FaEnvelope size={14} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Email</p>
                    <p className="text-gray-500">Open to SDE roles</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-base">Find Me On</h3>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 text-gray-500 transition-all duration-200 ${s.color} hover:bg-gray-50`}>
                    {s.icon}
                    <span className="font-medium text-sm">{s.label}</span>
                    <span className="ml-auto text-xs opacity-50">↗</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-bold text-gray-900 mb-6 text-lg">Send a Message</h3>
              <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Your Name</label>
                    <input type="text" name="user_name" required placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 text-sm placeholder-gray-400 transition-all focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
                    <input type="email" name="user_email" required placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 text-sm placeholder-gray-400 transition-all focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Subject</label>
                  <input type="text" name="subject" required placeholder="SDE Opportunity at…"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 text-sm placeholder-gray-400 transition-all focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Message</label>
                  <textarea name="message" rows={5} required placeholder="Hi Sakshi, I'd like to discuss…"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 text-sm placeholder-gray-400 transition-all focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 resize-none" />
                </div>
                <motion.button type="submit" disabled={sending}
                  whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full justify-center py-3.5 text-base mt-1">
                  <span className="flex items-center gap-2 justify-center">
                    {sending ? (
                      <><svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg> Sending…</>
                    ) : (
                      <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg> Send Message</>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
