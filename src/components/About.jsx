import React from 'react';
import { GraduationCap, Code2, BrainCircuit, Sparkles, BookOpen, Terminal, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Map icon names to Lucide icons
const iconMap = {
  GraduationCap,
  Code2,
  BrainCircuit,
  Sparkles,
  BookOpen,
  Terminal
};

export default function About() {
  const { aboutMe } = personalInfo;

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Background & Academic Journey
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A CSE undergraduate passionate about computer science foundations, clean logic, and modern software engineering.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Card (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-[#0d0f17]/90 border border-white/10 shadow-xl shadow-purple-950/10 space-y-5 relative overflow-hidden">
            {/* Subtle corner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 pb-2 border-b border-white/10">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {aboutMe.title}
                </h3>
                <p className="text-xs text-purple-300 font-medium">
                  {personalInfo.department} • {personalInfo.university}
                </p>
              </div>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {aboutMe.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* Core Values / Aspirations checklist */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Strong foundation in C & Java</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Active algorithmic problem solver</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Focus on clean, structured code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Enthusiastic about learning new tech</span>
              </div>
            </div>
          </div>

          {/* Highlights Grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {aboutMe.highlights.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Sparkles;
              return (
                <div
                  key={index}
                  className="rounded-2xl p-5 bg-[#0d0f17]/80 border border-white/10 hover:border-purple-500/30 hover:bg-[#131622]/90 transition-all duration-300 group shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                        {item.title}
                      </span>
                      <h4 className="text-base font-bold text-white group-hover:text-purple-200 transition-colors mt-0.5">
                        {item.value}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        {item.subtext}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
