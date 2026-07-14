export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        "bg-light": "#f0ebff",
        "bg-white": "#ffffff",
        "accent-purple": "#7c3aed",
        "accent-violet": "#6d28d9",
        "accent-blue": "#4f46e5",
        "accent-pink": "#db2777",
        "accent-cyan": "#0891b2",
        "text-dark": "#0f0a1e",
        "text-mid": "#374151",
        "text-soft": "#6b7280",
        // legacy
        "bg-primary": "#f0ebff",
        "bg-secondary": "#ffffff",
        "accent-teal": "#0891b2",
        "text-primary": "#0f0a1e",
        "text-secondary": "#6b7280",
        "text-muted": "#9ca3af",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(124,58,237,0.08), 0 1px 3px rgba(0,0,0,0.05)",
        glow: "0 0 40px rgba(124,58,237,0.2)",
        "glow-purple": "0 0 30px rgba(124,58,237,0.3)",
        card: "0 8px 40px rgba(124,58,237,0.1), 0 2px 8px rgba(0,0,0,0.06)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "purple-gradient": "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
        "warm-gradient": "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)",
        "hero-mesh": "radial-gradient(at 40% 20%, rgba(124,58,237,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(79,70,229,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(8,145,178,0.08) 0px, transparent 50%)",
        "skills-gradient": "linear-gradient(180deg, #f0ebff 0%, #faf8ff 50%, #f0ebff 100%)",
      },
      animation: {
        "aurora-1": "aurora-1 14s ease-in-out infinite",
        "aurora-2": "aurora-2 18s ease-in-out infinite 2s",
        "aurora-3": "aurora-3 16s ease-in-out infinite 4s",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-ring 20s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "glow-pulse": "pulse-glow 3s ease-in-out infinite",
        blob: "aurora-1 12s ease-in-out infinite",
      },
      keyframes: {
        "aurora-1": {
          "0%,100%": { transform: "translate(0,0) scale(1)", opacity: "0.55" },
          "33%": { transform: "translate(60px,-40px) scale(1.12)", opacity: "0.7" },
          "66%": { transform: "translate(-30px,50px) scale(0.9)", opacity: "0.5" },
        },
        "aurora-2": {
          "0%,100%": { transform: "translate(0,0) scale(1)", opacity: "0.45" },
          "50%": { transform: "translate(-80px,60px) scale(1.15)", opacity: "0.6" },
        },
        "aurora-3": {
          "0%,100%": { transform: "translate(0,0) scale(1)", opacity: "0.4" },
          "40%": { transform: "translate(50px,80px) scale(1.1)", opacity: "0.55" },
          "70%": { transform: "translate(-50px,-30px) scale(0.92)", opacity: "0.35" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "spin-ring": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%,100%": { boxShadow: "0 0 20px rgba(124,58,237,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(124,58,237,0.45)" },
        },
      },
    },
  },
  plugins: [],
};
