import React from "react";

const BlurBlob = ({ position, size, color = "purple" }) => {
  const { top, left } = position;
  const { width, height } = size;
  const colors = {
    purple: "rgba(124,58,237,0.15)",
    cyan: "rgba(8,145,178,0.12)",
    teal: "rgba(8,145,178,0.12)",
  };
  return (
    <div className="absolute pointer-events-none" style={{ top, left, width, height, transform: "translate(-50%, -50%)" }}>
      <div className="w-full h-full rounded-full" style={{
        background: `radial-gradient(circle, ${colors[color]} 0%, transparent 70%)`,
        filter: "blur(60px)",
        animation: "aurora-1 14s ease-in-out infinite",
      }} />
    </div>
  );
};

export default BlurBlob;
