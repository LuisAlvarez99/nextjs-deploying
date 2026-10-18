'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Project, projects } from '../data/projects';
import { didactGothic } from '../utils/fonts';
import { Category, CATEGORY_LABELS } from './CategoryFilterPills';

const RANK_BASE_BORDER: Record<Project['rank'], string> = {
  champion: 'border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]',
  diamond: 'border-cyan-400/50 shadow-[0_0_15px_rgba(56,189,248,0.3)]',
  gold: 'border-amber-400/50 shadow-[0_0_15px_rgba(251,191,36,0.3)]',
  silver: 'border-slate-300/50 shadow-[0_0_15px_rgba(203,213,225,0.3)]',
  bronze: 'border-amber-700/50 shadow-[0_0_15px_rgba(180,83,9,0.3)]',
};

const RANK_WAVE_GRADIENT: Record<Project['rank'], string> = {
  champion:
    'conic-gradient(from 0deg, transparent 0deg, transparent 50deg, rgba(168,85,247,0.2) 65deg, #c084fc 80deg, #f5d0fe 88deg, #a855f7 95deg, rgba(168,85,247,0.2) 110deg, transparent 130deg, transparent 360deg)',
  diamond:
    'conic-gradient(from 0deg, transparent 0deg, transparent 50deg, rgba(56,189,248,0.2) 65deg, #38bdf8 80deg, #cffafe 88deg, #0284c7 95deg, rgba(56,189,248,0.2) 110deg, transparent 130deg, transparent 360deg)',
  gold:
    'conic-gradient(from 0deg, transparent 0deg, transparent 50deg, rgba(251,191,36,0.2) 65deg, #fbbf24 80deg, #fef08a 88deg, #d97706 95deg, rgba(251,191,36,0.2) 110deg, transparent 130deg, transparent 360deg)',
  silver:
    'conic-gradient(from 0deg, transparent 0deg, transparent 50deg, rgba(203,213,225,0.2) 65deg, #cbd5e1 80deg, #ffffff 88deg, #94a3b8 95deg, rgba(203,213,225,0.2) 110deg, transparent 130deg, transparent 360deg)',
  bronze:
    'conic-gradient(from 0deg, transparent 0deg, transparent 50deg, rgba(180,83,9,0.2) 65deg, #f59e0b 80deg, #fed7aa 88deg, #b45309 95deg, rgba(180,83,9,0.2) 110deg, transparent 130deg, transparent 360deg)',
};

const RANK_BADGE_STYLES: Record<Project['rank'], string> = {
  champion: 'bg-purple-950/80 text-purple-300 border border-purple-500/50',
  diamond: 'bg-cyan-950/80 text-cyan-300 border border-cyan-400/50',
  gold: 'bg-amber-950/80 text-amber-300 border border-amber-400/50',
  silver: 'bg-slate-800 text-slate-200 border border-slate-300/50',
  bronze: 'bg-amber-950 text-amber-500 border border-amber-700/50',
};

const RANK_DOT_STYLES: Record<Project['rank'], string> = {
  champion: 'bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.9)]',
  diamond: 'bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]',
  gold: 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.9)]',
  silver: 'bg-slate-300 shadow-[0_0_10px_rgba(203,213,225,0.9)]',
  bronze: 'bg-amber-700 shadow-[0_0_10px_rgba(180,83,9,0.9)]',
};

interface ProjectsTimelineProps {
  activeCategory?: Category;
}

export default function ProjectsTimeline({
  activeCategory = 'software',
}: ProjectsTimelineProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) =>
    activeCategory === 'all' ? true : project.category === activeCategory
  );

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <div className={`w-full py-1 px-1 sm:px-2 ${didactGothic}`}>
      {/* Horizontal Timeline Spine */}
      <div className="relative w-full pt-1">
        {/* Continuous horizontal timeline spine line */}
        <div
          aria-hidden="true"
          className="hidden sm:block absolute left-4 right-4 top-9 h-0.5 bg-gradient-to-r from-transparent via-slate-600 to-transparent pointer-events-none"
        />

        <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory py-3 px-2 sm:px-4 pb-8 no-scrollbar scroll-smooth">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center min-w-[280px] sm:min-w-[360px] max-w-[380px] flex-shrink-0 snap-center"
            >
              {/* Timeline Date Marker & Node */}
              <div className="flex flex-col items-center mb-2.5 z-10">
                <span className="text-xs font-mono text-slate-300 bg-slate-900/95 px-3 py-0.5 rounded-full border border-slate-700 mb-1.5 shadow-sm">
                  {project.date}
                </span>
                <span
                  className={`w-3.5 h-3.5 rounded-full border-2 border-slate-900 ${RANK_DOT_STYLES[project.rank]}`}
                />
              </div>

              {/* Project Card with Revolving Wave Glow Effect */}
              <div
                className={`relative w-full flex-1 flex flex-col p-[2.5px] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer group ${RANK_BASE_BORDER[project.rank]}`}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedProject(project);
                  }
                }}
              >
                {/* Revolving Wave Glow Aura (soft blur halo) */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-[100%] animate-wave-revolve opacity-75 blur-md pointer-events-none"
                  style={{
                    background: RANK_WAVE_GRADIENT[project.rank],
                  }}
                />

                {/* Revolving Wave Glow Curve/Hump (crisp border perimeter wave) */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-[100%] animate-wave-revolve opacity-100 pointer-events-none"
                  style={{
                    background: RANK_WAVE_GRADIENT[project.rank],
                  }}
                />

                {/* Card Inner Body */}
                <div className="relative z-10 w-full h-full flex flex-col text-left bg-slate-900 rounded-[13px] p-6 border border-slate-800/80">
                  <div className="flex justify-between items-center w-full mb-3">
                    <span
                      className={`px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${RANK_BADGE_STYLES[project.rank]}`}
                    >
                      {project.rank}
                    </span>
                    <span className="text-slate-400 text-xs font-mono">{project.date}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 bg-slate-800 text-slate-300 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="w-full text-center py-16 text-slate-400">
              No projects found in this category.
            </div>
          )}
        </div>
      </div>

      {/* Project Modal Pop-out */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <div
            className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 text-white rounded-2xl border-2 p-6 sm:p-8 ${RANK_BASE_BORDER[selectedProject.rank]}`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              type="button"
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="mb-6 pr-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${RANK_BADGE_STYLES[selectedProject.rank]}`}
                >
                  {selectedProject.rank}
                </span>
                <span className="text-slate-400 font-mono text-sm">{selectedProject.date}</span>
                <span className="text-xs px-2.5 py-0.5 rounded bg-slate-800 text-slate-300">
                  {CATEGORY_LABELS[selectedProject.category]}
                </span>
              </div>

              <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h2>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Embedded Demo Preview Banner */}
            {selectedProject.image ? (
              <div className="relative w-full h-48 sm:h-64 mb-6 rounded-xl overflow-hidden border border-slate-800">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="mb-6 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-800/80 via-slate-900 to-black p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Embedded Demo Preview
                  </p>
                  <p className="text-sm text-slate-200">{selectedProject.summary}</p>
                </div>
                {selectedProject.liveDemoUrl && (
                  <a
                    href={selectedProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600/25 hover:bg-blue-600/40 text-blue-300 border border-blue-500/40 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors"
                  >
                    Launch Demo ↗
                  </a>
                )}
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Project Overview & Architecture
              </h3>
              <p className="text-slate-200 text-base leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
              {selectedProject.liveDemoUrl && (
                <a
                  href={selectedProject.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  View Live Demo
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View Source on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
