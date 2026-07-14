import React from "react";
import { motion } from "framer-motion";

const GlassCard = ({
  children,
  className = "",
  hover = true,
  onClick,
  as: Component = motion.div,
}) => {
  const baseClasses =
    "bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl";
  const hoverClasses = hover
    ? "transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06] hover:shadow-glow"
    : "";

  return (
    <Component
      className={`${baseClasses} ${hoverClasses} ${className}`}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </Component>
  );
};

export default GlassCard;
