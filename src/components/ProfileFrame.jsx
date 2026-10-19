import React, { useState } from 'react';
import { Code2, Sparkles, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ProfileFrame() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const showImage = Boolean(personalInfo.profileImage) && !imageError;

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-square flex items-center justify-center">
      {/* Decorative Outer Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-600/35 via-indigo-600/25 to-cyan-400/35 blur-2xl transform scale-95 animate-pulse-glow" />

      {/* Main Container Frame */}
      <div className="relative w-full h-full rounded-3xl p-[2px] bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400 shadow-2xl shadow-purple-950/60">
        <div className="w-full h-full bg-[#0d0f17] rounded-[22px] overflow-hidden flex flex-col items-center justify-center relative group p-2">
          
          {showImage ? (
            /* Custom Image Display */
            <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-[#131622]">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-all duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Subtle inner dark gradient overlay at the bottom for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15 pointer-events-none" />

              {/* Bottom Name Label in Photo */}
              <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
                <div className="px-3 py-1.5 rounded-xl bg-[#090a0f]/80 backdrop-blur-md border border-white/10 shadow-lg">
                  <p className="text-xs font-bold text-white tracking-wide">
                    {personalInfo.name}
                  </p>
                  <p className="text-[10px] text-purple-300 font-medium">
                    CSE Student • DIU
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Premium Developer Avatar Placeholder */
            <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6">
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

              {/* Placeholder badge */}
              <div className="mt-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-slate-400 group-hover:border-purple-400/30 group-hover:text-purple-200 transition-all">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Photo Placeholder</span>
              </div>
            </div>
          )}

          {/* Floating University Badge (Top-Right) */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#090a0f]/85 border border-white/15 backdrop-blur-md shadow-xl">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-[11px] font-semibold text-slate-200 tracking-wide">CSE @ DIU</span>
          </div>

          {/* Floating Status Badge (Top-Left) */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#090a0f]/85 border border-white/15 backdrop-blur-md shadow-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-medium text-slate-200">Active Learner</span>
          </div>

        </div>
      </div>
    </div>
  );
}
