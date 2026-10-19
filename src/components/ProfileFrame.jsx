import React from 'react';
import { Code2, Sparkles, Terminal, User, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ProfileFrame() {
  const hasCustomImage = Boolean(personalInfo.profileImage);

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-square flex items-center justify-center">
      {/* Decorative Outer Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-600/30 via-indigo-600/20 to-cyan-400/30 blur-2xl transform scale-95 animate-pulse-glow" />

      {/* Main Container Frame */}
      <div className="relative w-full h-full rounded-3xl p-[2px] bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400 shadow-2xl shadow-purple-950/50">
        <div className="w-full h-full bg-[#0d0f17] rounded-[22px] overflow-hidden flex flex-col items-center justify-center p-6 relative group">
          
          {hasCustomImage ? (
            /* Custom Image Display */
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // Graceful fallback if image path is not found
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            /* Premium Developer Avatar Placeholder */
            <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
              {/* Subtle tech background circuit pattern */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Central Avatar Visual */}
              <div className="relative mb-5">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-cyan-500/20 border border-white/10 flex items-center justify-center shadow-inner relative group-hover:border-purple-500/40 transition-colors">
                  <div className="w-20 h-20 rounded-xl bg-[#131622] flex items-center justify-center border border-white/5">
                    <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                      MA
                    </span>
                  </div>

                  {/* Micro badge icon */}
                  <div className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-purple-600 text-white shadow-lg shadow-purple-600/40">
                    <Code2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Developer Title */}
              <h3 className="text-lg font-bold text-white tracking-wide">
                {personalInfo.name}
              </h3>
              <p className="text-xs text-purple-300/90 font-medium mt-1">
                Daffodil International University
              </p>

              {/* Easy replacement hint badge */}
              <div className="mt-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-slate-400 group-hover:border-purple-400/30 group-hover:text-purple-200 transition-all">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Photo Placeholder</span>
              </div>
            </div>
          )}

          {/* Floating University Badge (Top-Right) */}
          <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#131622]/90 border border-white/10 backdrop-blur-md shadow-lg">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-[11px] font-semibold text-slate-200">CSE @ DIU</span>
          </div>

          {/* Floating Status Badge (Bottom-Left) */}
          <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#131622]/90 border border-white/10 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-medium text-slate-300">Active Learner</span>
          </div>
        </div>
      </div>
    </div>
  );
}
