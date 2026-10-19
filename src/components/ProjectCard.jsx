import React from 'react';
import { ExternalLink, FolderCode, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectCard({ project }) {
  const {
    title,
    description,
    technologies = [],
    image,
    githubUrl,
    liveUrl,
    status
  } = project;

  return (
    <div className="group relative rounded-3xl bg-[#0d0f17]/90 border border-white/10 hover:border-purple-500/40 hover:bg-[#121524]/90 transition-all duration-300 shadow-xl shadow-black/40 overflow-hidden flex flex-col justify-between">
      {/* Card Header / Image or Thumbnail */}
      <div className="relative aspect-video w-full bg-[#161a29] overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          /* Default Thumbnail Placeholder */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-slate-900 p-6 text-center">
            <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 text-purple-300 mb-2 group-hover:scale-110 transition-transform">
              <FolderCode className="w-8 h-8" />
            </div>
            <span className="text-xs font-medium text-slate-400">Software Project</span>
          </div>
        )}

        {/* Status Badge */}
        {status && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#090a0f]/80 backdrop-blur-md border border-white/10 text-purple-300">
              {status}
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Project Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors mb-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 mb-5">
            {description}
          </p>

          {/* Technologies Used */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Actions / Links */}
        <div className="pt-4 border-t border-white/10 flex items-center gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white text-xs font-semibold transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-200 hover:text-white text-xs font-semibold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
