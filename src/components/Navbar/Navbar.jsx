import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const menuItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'github-activity', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60);
      const pos = window.scrollY + 130;
      for (let i = menuItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(menuItems[i].id);
        if (el && el.offsetTop <= pos) { setActiveSection(menuItems[i].id); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-400 px-6 md:px-10 lg:px-16 ${
        isScrolled
          ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-purple-100 shadow-sm shadow-purple-50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white shadow-md"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
          >
            SA
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-sm font-semibold text-gray-800 leading-none">Sakshi Agnihotri</div>
            <div className="text-xs text-purple-500 font-mono mt-0.5">SDE1</div>
          </div>
        </motion.button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <motion.button
                onClick={() => scrollTo(item.id)}
                whileHover={{ y: -1 }}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id ? 'text-purple-700' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-purple-50 border border-purple-100"
                    transition={{ type: 'spring', bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            </li>
          ))}
        </ul>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <a href="https://github.com/Sakshi123-tech" target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all">
            <FaGithub size={19} />
          </a>
          <a href="https://www.linkedin.com/in/sakshi-agnihotri-64613a263" target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
            <FaLinkedin size={19} />
          </a>
          <motion.a
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            href="https://drive.google.com/file/d/1FJ-SqWtzOspF6c7sRFzmqP5MUgxmCt62/view?usp=sharing"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary ml-1 text-sm py-2 px-5"
          >
            <span>Resume ↗</span>
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-purple-50 transition-all">
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-purple-100 shadow-xl lg:hidden overflow-hidden"
          >
            <div className="p-3 flex flex-col gap-1">
              {menuItems.map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-purple-50 text-purple-700 border border-purple-100'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}>
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-2 pt-3 mt-1 border-t border-gray-100 px-2">
                <a href="https://github.com/Sakshi123-tech" target="_blank" rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-800 p-2"><FaGithub size={18} /></a>
                <a href="https://www.linkedin.com/in/sakshi-agnihotri-64613a263" target="_blank" rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 p-2"><FaLinkedin size={18} /></a>
                <a href="https://drive.google.com/file/d/1FJ-SqWtzOspF6c7sRFzmqP5MUgxmCt62/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                  className="ml-auto btn-primary text-sm py-2 px-4">
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
