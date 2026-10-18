'use client';

import React, { useState, useEffect } from 'react';
import './Projects.css';
import { projects } from './data/projects';
import Image from 'next/image';

const categories = [
  { id: 'software', label: 'Software' },
  { id: 'ai', label: 'AI & Agents' },
  { id: '3d-printing', label: '3D Printing' },
  { id: 'music', label: 'Music' },
  { id: 'all', label: 'All' }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('software');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      setSelectedProject(null);
    }
  };

  return (
    <section className="projects-section">
      <div className="filter-pills">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="timeline-spine">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className={`project-card rank-${project.rank}`}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-card-header">
              <span className={`rank-badge ${project.rank}`}>{project.rank}</span>
              <span className="date-badge">{project.date}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
          <div className="modal-content">
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              &times;
            </button>

            {/* Fallback image component, Next.js Image needs width/height or fill */}
            <div style={{ position: 'relative', width: '100%', height: '300px' }}>
              <Image
                src={selectedProject.media || '/favicon.ico'}
                alt={selectedProject.title}
                fill
                style={{ objectFit: 'cover' }}
                className="modal-media"
                unoptimized
              />
            </div>

            <div className="modal-body">
              <div className="modal-header-row">
                <h2>{selectedProject.title}</h2>
                <span className={`rank-badge ${selectedProject.rank}`}>
                  {selectedProject.rank}
                </span>
              </div>

              <div className="modal-tags">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="modal-tag">{tag}</span>
                ))}
              </div>

              <div className="modal-description">
                {selectedProject.description}
              </div>

              <div className="modal-actions">
                {selectedProject.liveDemoUrl && (
                  <a href={selectedProject.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="action-btn btn-primary">
                    Live Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="action-btn btn-secondary">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
