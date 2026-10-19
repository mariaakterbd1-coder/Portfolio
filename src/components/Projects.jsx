import React, { useState } from 'react';
import { FolderGit2, Sparkles, Clock, Eye, Code, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

// Sample demonstration project strictly for preview toggle mode
const samplePreviewProject = {
  id: "sample-preview",
  title: "Console Student Management System",
  description: "A structured C programming application managing student records, grades, and persistent text file records with memory-efficient structures.",
  technologies: ["C Programming", "File I/O", "Data Structures"],
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  githubUrl: "https://github.com/mariaakterbd1-coder",
  liveUrl: "",
  status: "Sample Template"
};

export default function Projects() {
  const [showPreview, setShowPreview] = useState(false);
  const hasProjects = projects && projects.length > 0;

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase">
            <FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects & Practical Work
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Showcasing applications, practical programming implementations, and academic projects.
          </p>
        </div>

        {/* Dynamic Project Display */}
        {hasProjects ? (
          /* Real Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          /* Required Friendly Empty-State */
          <div className="max-w-2xl mx-auto">
            <div className="relative rounded-3xl p-8 sm:p-12 bg-[#0d0f17]/90 border border-white/10 text-center shadow-2xl shadow-purple-950/20 overflow-hidden">
              {/* Radial backdrop glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-indigo-500/5 to-transparent pointer-events-none" />

              {/* Icon / Visual */}
              <div className="relative mx-auto mb-6 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-purple-600/20 via-indigo-600/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-purple-400 shadow-inner">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-purple-300 animate-pulse" />
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
              </div>

              {/* Required Exact Friendly Message */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Projects are coming soon!
              </h3>
              <p className="text-slate-300 text-base leading-relaxed max-w-lg mx-auto mb-8 font-normal">
                I'm currently working on improving my skills and building new things. As I complete projects in C, Java, and Problem Solving, they will be documented right here.
              </p>

              {/* What Maria is currently practicing */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-left mb-8">
                <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider block mb-2">
                  Currently In Progress:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>Hands-on console utilities & data management using C</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>Object-Oriented design patterns & algorithms in Java</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Practicing online judge problem sets to sharpen logic</span>
                  </li>
                </ul>
              </div>

              {/* Toggle to preview how cards will look */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/10 text-purple-300 hover:text-white border border-purple-500/30 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-sm"
                >
                  <Eye className="w-4 h-4" />
                  <span>{showPreview ? "Hide Preview Template" : "Preview How Cards Will Look"}</span>
                </button>
              </div>

            </div>

            {/* Optional Card Preview Section */}
            {showPreview && (
              <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="text-center mb-4">
                  <span className="text-xs text-slate-400 font-medium">
                    (Template sample — when you add real projects to <code className="text-purple-300 bg-white/5 px-1.5 py-0.5 rounded">portfolioData.js</code>, they will look like this)
                  </span>
                </div>
                <div className="max-w-md mx-auto">
                  <ProjectCard project={samplePreviewProject} />
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
