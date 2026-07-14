import React from "react";
import { motion } from "framer-motion";

const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default:
      "bg-white/[0.06] border-white/[0.1] text-text-secondary hover:border-accent-cyan/40 hover:text-white",
    accent:
      "bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/20",
    metric:
      "bg-accent-purple/10 border-accent-purple/30 text-accent-purple",
    status:
      "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    indev:
      "bg-amber-500/10 border-amber-500/30 text-amber-400",
  };

  return (
    <motion.span
      className={`inline-flex items-center px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full border transition-colors duration-300 ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.span>
  );
};

export default Badge;
