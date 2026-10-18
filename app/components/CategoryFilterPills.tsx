'use client';

import React from 'react';
import { didactGothic } from '../utils/fonts';

export type Category = 'software' | 'ai' | '3d-printing' | 'music' | 'all';

export const CATEGORY_LABELS: Record<Category, string> = {
  software: 'Software',
  ai: 'AI & Agents',
  '3d-printing': '3D Printing',
  music: 'Music',
  all: 'All',
};

interface CategoryFilterPillsProps {
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
}

export default function CategoryFilterPills({
  activeCategory,
  onSelectCategory,
}: CategoryFilterPillsProps) {
  const categories: Category[] = ['software', 'ai', '3d-printing', 'music', 'all'];

  return (
    <div
      className={`flex flex-wrap gap-2 justify-center items-center ${didactGothic}`}
      role="tablist"
      aria-label="Project categories"
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-sm ${
              isActive
                ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.6)] scale-105'
                : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        );
      })}
    </div>
  );
}
