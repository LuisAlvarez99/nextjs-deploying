'use client';
import Image from "next/image";

import React, { useState, useEffect } from 'react';
import { Project, projects } from '../data/projects';

type Category = 'software' | 'ai' | '3d-printing' | 'music' | 'all';

const CATEGORY_LABELS: Record<Category, string> = {
  software: 'Software',
  ai: 'AI & Agents',
  '3d-printing': '3D Printing',
  music: 'Music',
  all: 'All',
};

const RANK_STYLES: Record<Project['rank'], string> = {
  champion: 'border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]',
  diamond: 'border-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.5)]',
  gold: 'border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.5)]',
  silver: 'border-slate-300 shadow-[0_0_15px_rgba(203,213,225,0.4)]',
  bronze: 'border-amber-700 shadow-[0_0_15px_rgba(180,83,9,0.4)]',
};

const RANK_BADGE_STYLES: Record<Project['rank'], string> = {
  champion: 'bg-purple-900/50 text-purple-300',
  diamond: 'bg-cyan-900/50 text-cyan-300',
  gold: 'bg-amber-900/50 text-amber-300',
  silver: 'bg-slate-800 text-slate-300',
  bronze: 'bg-amber-950 text-amber-500',
};

export default function ProjectsTimeline() {
  const [activeCategory, setActiveCategory] = useState<Category>('software');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: Category[] = ['software', 'ai', '3d-printing', 'music', 'all'];

  const filteredProjects = projects.filter((project) =>
    activeCategory === 'all' ? true : project.category === activeCategory
  );

  // Close modal on escape key
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
    <div className="w-full max-w-7xl mx-auto py-12 px-4 relative">
      {/* Category Filter Bar */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      {/* Horizontal Timeline Spine */}
      <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory py-6 px-4 pb-12 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {filteredProjects.map((project) => (
          <button
            key={project.id}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedProject(project);
              }
            }}
            className={`text-left min-w-[300px] sm:min-w-[400px] flex-shrink-0 snap-center bg-gray-900 rounded-2xl p-6 border-2 cursor-pointer transition-transform hover:-translate-y-2 ${RANK_STYLES[project.rank]}`}
          >
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${RANK_BADGE_STYLES[project.rank]}`}>
                {project.rank}
              </span>
              <span className="text-gray-400 text-sm">{project.date}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

            <p className="text-gray-300 mb-6 line-clamp-3">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </button>
        ))}
        {filteredProjects.length === 0 && (
          <div className="w-full text-center py-12 text-gray-500">
            No projects found in this category.
          </div>
        )}
      </div>

      {/* Project Modal Pop-out */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setSelectedProject(null);
            }
          }}
          role="button"
          tabIndex={0}
        >
          <div
            className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl border-2 p-8 ${RANK_STYLES[selectedProject.rank]}`}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-6">
              <div className="flex items-center gap-4 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${RANK_BADGE_STYLES[selectedProject.rank]}`}>
                  {selectedProject.rank}
                </span>
                <span className="text-gray-400">{selectedProject.date}</span>
              </div>
              <h2 id="modal-title" className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.image && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <Image src={selectedProject.image} alt={selectedProject.title} width={800} height={400} className="w-full h-auto object-cover" />
              </div>
            )}

            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">{selectedProject.description}</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-auto">
              {selectedProject.liveDemoUrl && (
                <a
                  href={selectedProject.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                >
                  <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Live Demo
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                >
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Source
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
