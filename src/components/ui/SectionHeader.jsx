import React from "react";
import FadeIn from "./FadeIn";

const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <FadeIn className="text-center mb-16">
    {eyebrow && (
      <p className="text-sm font-medium tracking-widest uppercase text-accent-cyan mb-3">
        {eyebrow}
      </p>
    )}
    <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
      {title}
    </h2>
    <div className="w-24 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4 rounded-full" />
    {subtitle && (
      <p className="text-text-secondary mt-4 text-base sm:text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </FadeIn>
);

export default SectionHeader;
