'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ProjectsTimeline from './components/ProjectsTimeline';
import CategoryFilterPills, { Category } from './components/CategoryFilterPills';
import RocketLeagueLegendModal from './components/RocketLeagueLegendModal';
import About from './about';
import Contact from './contact';
import { eduVicWaNtBeginner, didactGothic } from './utils/fonts';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>('software');
  const [showEasterEggLegend, setShowEasterEggLegend] = useState(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);

  // Hidden Easter Egg key input tracking (e.g. typing "r", "rl", or "rank" while hovering Projects)
  const keyBuffer = useRef('');
  const clickCount = useRef(0);
  const clickTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Trigger if hovering over Projects and user inputs 'r', 'R', or combo
      if (isProjectsHovered) {
        keyBuffer.current += e.key.toLowerCase();
        if (
          e.key.toLowerCase() === 'r' ||
          keyBuffer.current.includes('rl') ||
          keyBuffer.current.includes('rank') ||
          (e.shiftKey && e.key.toLowerCase() === 'r')
        ) {
          setShowEasterEggLegend(true);
          keyBuffer.current = '';
        }

        // Clear buffer after 1.5 seconds
        setTimeout(() => {
          keyBuffer.current = '';
        }, 1500);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isProjectsHovered]);

  const handleProjectsTitleClick = () => {
    clickCount.current += 1;
    if (clickTimer.current) clearTimeout(clickTimer.current);

    if (clickCount.current >= 3) {
      setShowEasterEggLegend(true);
      clickCount.current = 0;
    } else {
      clickTimer.current = setTimeout(() => {
        clickCount.current = 0;
      }, 600);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-slate-900 text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Header Layout: Name on left, Selfie on right, Pills at top center aligned with top of name */}
      <header className="relative flex flex-col md:flex-row mt-5 mx-3 border-r-2 border-t-2 rounded-tr-xl border-slate-700 bg-slate-850/40 p-4 sm:p-6 justify-between items-start backdrop-blur-sm">
        {/* Name, Subtitles, and Live Status Pill */}
        <div className="flex flex-col z-10">
          <h1 className={`${eduVicWaNtBeginner} font-bold text-6xl sm:text-7xl md:text-8xl text-slate-100 leading-none`}>
            Luis Alvarez
          </h1>
          <h3 className={`${eduVicWaNtBeginner} font-medium text-2xl sm:text-3xl text-slate-300 mt-2`}>
            Human
          </h3>
          <h3 className={`${eduVicWaNtBeginner} font-medium text-2xl sm:text-3xl text-slate-300`}>
            Student
          </h3>
          <h3 className={`${eduVicWaNtBeginner} font-medium text-2xl sm:text-3xl text-slate-300`}>
            Software Engineer
          </h3>

          {/* Live Status Pill */}
          <div className={`mt-4 flex items-center ${didactGothic}`}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Currently Building: Autonomous AI Agents with MCP & ReAct | Interview Kickstart</span>
            </span>
          </div>
        </div>

        {/* Filter Pills: Horizontally centered, top aligned with top of Luis Alvarez name */}
        <div className="mt-4 md:mt-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-4 sm:md:top-6 z-20 flex justify-center w-full md:w-auto">
          <CategoryFilterPills
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* Selfie image */}
        <div className="flex-shrink-0 self-end md:self-start z-10 mt-4 md:mt-0">
          <Image
            className="pr-2 sm:pr-4 object-contain rounded-lg border border-slate-700/60 shadow-lg"
            src="/selfie.png"
            alt="This is what Luis Alvarez looks like"
            width={230}
            height={230}
            priority
          />
        </div>
      </header>

      {/* Projects Section: "Projects" Title on far left with very small gap to timeline */}
      <section className="w-full pt-4 pb-4 px-3 sm:px-6">
        <div className="w-full text-left px-2 sm:px-4 mb-1">
          <div
            className="inline-flex items-center gap-2 group cursor-pointer"
            onMouseEnter={() => setIsProjectsHovered(true)}
            onMouseLeave={() => setIsProjectsHovered(false)}
            onClick={handleProjectsTitleClick}
            title="Hover & press 'R' to reveal a secret"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'r' || e.key === 'R') {
                setShowEasterEggLegend(true);
              }
            }}
          >
            <h2 className={`${eduVicWaNtBeginner} font-bold text-4xl sm:text-5xl text-slate-100 tracking-tight transition-colors duration-300 group-hover:text-purple-300 select-none`}>
              Projects
            </h2>
            <span
              className={`text-sm transition-opacity duration-300 ${
                isProjectsHovered ? 'opacity-80 text-purple-400 animate-pulse' : 'opacity-0'
              }`}
            >
              ✨
            </span>
          </div>
        </div>
        <ProjectsTimeline activeCategory={activeCategory} />
      </section>

      {/* Hidden Easter Egg Modal */}
      <RocketLeagueLegendModal
        isOpen={showEasterEggLegend}
        onClose={() => setShowEasterEggLegend(false)}
      />

      {/* About & Contact Footer Sections */}
      <section className="mt-auto flex flex-col md:flex-row w-full bg-slate-950/80 border-t border-slate-800 text-slate-100 p-6 gap-6">
        <About />
        <Contact />
      </section>
    </main>
  );
}
