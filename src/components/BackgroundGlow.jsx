import React from 'react';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top right purple glow */}
      <div 
        className="absolute -top-32 -right-32 w-96 md:w-[600px] h-96 md:h-[600px] rounded-full bg-purple-600/10 blur-[130px]"
        aria-hidden="true"
      />
      
      {/* Middle left cyan glow */}
      <div 
        className="absolute top-1/3 -left-40 w-80 md:w-[500px] h-80 md:h-[500px] rounded-full bg-cyan-500/10 blur-[140px]"
        aria-hidden="true"
      />

      {/* Bottom center indigo glow */}
      <div 
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-96 md:w-[700px] h-96 md:h-[600px] rounded-full bg-indigo-600/10 blur-[150px]"
        aria-hidden="true"
      />

      {/* Subtle modern grid overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"
        aria-hidden="true"
      />
    </div>
  );
}
