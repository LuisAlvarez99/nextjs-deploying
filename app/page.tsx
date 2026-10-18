'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProjectsTimeline from './components/ProjectsTimeline';
import CategoryFilterPills, { Category } from './components/CategoryFilterPills';
import About from './about';
import Contact from './contact';
import { eduVicWaNtBeginner } from './utils/fonts';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>('software');

  return (
    <main className="flex min-h-screen flex-col bg-slate-300">
      {/* Header Layout: Name on left, Selfie on right, Pills at top center aligned with top of name */}
      <header className="relative flex flex-col md:flex-row mt-5 mx-3 border-r-2 border-t-2 rounded-tr-xl border-slate-400 p-4 sm:p-6 justify-between items-start">
        {/* Name and Subtitles */}
        <div className="flex flex-col z-10">
          <h1 className={`${eduVicWaNtBeginner} font-bold text-6xl sm:text-7xl md:text-8xl text-slate-900 leading-none`}>
            Luis Alvarez
          </h1>
          <h3 className={`${eduVicWaNtBeginner} font-medium text-2xl sm:text-3xl text-slate-800 mt-2`}>
            Human
          </h3>
          <h3 className={`${eduVicWaNtBeginner} font-medium text-2xl sm:text-3xl text-slate-800`}>
            Student
          </h3>
          <h3 className={`${eduVicWaNtBeginner} font-medium text-2xl sm:text-3xl text-slate-800`}>
            Software Engineer
          </h3>
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
            className="pr-2 sm:pr-4 object-contain rounded-lg"
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
          <h2 className={`${eduVicWaNtBeginner} font-bold text-4xl sm:text-5xl text-slate-900 tracking-tight`}>
            Projects
          </h2>
        </div>
        <ProjectsTimeline activeCategory={activeCategory} />
      </section>

      {/* About & Contact Footer Sections */}
      <section className="mt-auto flex flex-col md:flex-row w-full bg-blue-800 text-white p-6 gap-6">
        <About />
        <Contact />
      </section>
    </main>
  );
}
