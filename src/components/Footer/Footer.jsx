import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const links = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'work' },
  { label: 'Skills', id: 'skills' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'GitHub', id: 'github-activity' },
  { label: 'Contact', id: 'contact' },
];

const socials = [
  { icon: <FaGithub size={18} />, href: 'https://github.com/Sakshi123-tech', label: 'GitHub' },
  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/sakshi-agnihotri-64613a263', label: 'LinkedIn' },
  { icon: <FaEnvelope size={18} />, href: 'mailto:sakshiagnihotri@example.com', label: 'Email' },
];

const Footer = () => (
  <footer className="relative bg-white border-t border-purple-100 pt-14 pb-8 px-6 md:px-10 lg:px-16">
    {/* Soft gradient top */}
    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-purple-50 to-white pointer-events-none" />

    <div className="relative max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
        {/* Brand */}
        <div className="md:max-w-xs">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white shadow"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>
              SA
            </div>
            <div>
              <div className="font-bold text-gray-900 text-sm">Sakshi Agnihotri</div>
              <div className="text-xs text-purple-500 font-mono">Software Development Engineer</div>
            </div>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Building scalable, secure, and high-performance software systems. Open to SDE opportunities at product companies.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-gray-700 text-sm mb-4">Navigation</h4>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {links.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)}
                className="text-sm text-gray-500 hover:text-purple-600 transition-colors text-left">
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold text-gray-700 text-sm mb-4">Connect</h4>
          <div className="flex flex-col gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-purple-600 transition-colors">
                {s.icon} {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-400">© 2025 Sakshi Agnihotri. All rights reserved.</p>
        <p className="text-xs text-gray-400 font-mono">Built with React + Framer Motion</p>
      </div>
    </div>
  </footer>
);

export default Footer;
