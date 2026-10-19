import React from 'react';
import { Code2, Coffee, Brain, Sparkles, Check, Layers, PlusCircle } from 'lucide-react';
import { skills } from '../data/portfolioData';

// Map icon string names to Lucide icons
const skillIcons = {
  Code2,
  Coffee,
  Brain,
  Layers,
  Sparkles
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Current Skills & Competencies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Focusing on core programming fundamentals, object-oriented concepts, and continuous algorithmic problem-solving.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill) => {
            const Icon = skillIcons[skill.icon] || Code2;

            return (
              <div
                key={skill.id}
                className="group relative rounded-3xl p-6 sm:p-7 bg-[#0d0f17]/90 border border-white/10 hover:border-purple-500/40 hover:bg-[#121524]/90 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between"
              >
                {/* Subtle Hover Gradient Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-purple-300 group-hover:text-cyan-300 group-hover:border-purple-500/40 transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.04] border border-white/10 text-slate-300 group-hover:text-purple-300 group-hover:border-purple-500/30 transition-colors">
                      {skill.badge}
                    </span>
                  </div>

                  {/* Skill Title & Category */}
                  <div className="mb-3">
                    <span className="text-[11px] font-medium tracking-wider uppercase text-purple-400">
                      {skill.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors mt-0.5">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {skill.description}
                  </p>
                </div>

                {/* Tags / Sub-competencies */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-slate-300 group-hover:border-white/10 group-hover:text-slate-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Growth Note / Easy to expand notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#0d0f17]/80 border border-white/10 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>Continuously expanding. Data structures, algorithms, and web technologies are in active progress.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
