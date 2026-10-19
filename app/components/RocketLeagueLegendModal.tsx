'use client';

import React, { useEffect } from 'react';
import { eduVicWaNtBeginner, didactGothic } from '../utils/fonts';

interface RocketLeagueLegendModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RocketLeagueLegendModal({
  isOpen,
  onClose,
}: RocketLeagueLegendModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn ${didactGothic}`}
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-lg bg-slate-900 border-2 border-purple-500/60 rounded-3xl p-6 sm:p-8 text-white shadow-[0_0_30px_rgba(168,85,247,0.4)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="rl-legend-title"
      >
        <button
          type="button"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          onClick={onClose}
          aria-label="Close legend"
        >
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Easter Egg Banner */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-purple-950/80 text-purple-300 border border-purple-500/40">
            Secret Easter Egg Unlocked
          </span>
          <span className="text-xs text-slate-400">⚽ 🏎️ 🚀</span>
        </div>

        <h3 id="rl-legend-title" className={`${eduVicWaNtBeginner} font-bold text-3xl sm:text-4xl text-slate-100 mb-2`}>
          Rocket League Rank Tiers
        </h3>
        <p className="text-slate-300 text-sm mb-6 leading-relaxed">
          The 5 most recent flagship projects are colored with dynamic revolving wave glow borders matching Rocket League ranks:
        </p>

        <div className="space-y-3 text-sm">
          {/* Champion */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-purple-950/40 border border-purple-500/50 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
            <span className="text-2xl">🏆</span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <strong className="text-purple-300 font-bold">Champion (Grand Champion)</strong>
                <span className="text-[11px] font-mono text-purple-400 font-bold">#1 Recent</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Flagship production architecture & autonomous AI agent systems (Next.js Portfolio, MCP/RAG).
              </p>
            </div>
          </div>

          {/* Diamond */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-cyan-950/40 border border-cyan-400/50 shadow-[0_0_12px_rgba(56,189,248,0.3)]">
            <span className="text-2xl">💎</span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <strong className="text-cyan-300 font-bold">Diamond</strong>
                <span className="text-[11px] font-mono text-cyan-400 font-bold">#2 Recent</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                High-performance full-stack applications & git contribution visualizers (GitTimeline).
              </p>
            </div>
          </div>

          {/* Gold */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-amber-950/40 border border-amber-400/50 shadow-[0_0_12px_rgba(251,191,36,0.3)]">
            <span className="text-2xl">🥇</span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <strong className="text-amber-300 font-bold">Gold</strong>
                <span className="text-[11px] font-mono text-amber-400 font-bold">#3 Recent</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                DevOps automation, cloud infrastructure & Ansible playbooks (ansible_working).
              </p>
            </div>
          </div>

          {/* Silver */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-800/90 border border-slate-300/50 shadow-[0_0_12px_rgba(203,213,225,0.3)]">
            <span className="text-2xl">🥈</span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <strong className="text-slate-200 font-bold">Silver</strong>
                <span className="text-[11px] font-mono text-slate-300 font-bold">#4 Recent</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Custom additive manufacturing CAD mods & 3D printed mechanical robotics (PrintHub).
              </p>
            </div>
          </div>

          {/* Bronze */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-amber-950/30 border border-amber-700/50 shadow-[0_0_12px_rgba(180,83,9,0.3)]">
            <span className="text-2xl">🥉</span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <strong className="text-amber-500 font-bold">Bronze</strong>
                <span className="text-[11px] font-mono text-amber-500 font-bold">#5 Recent</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Geospatial utilities, web tools & mobile applications (ParkingFinderApp).
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-400">
            Tip: You discovered this secret by interacting with the Projects title. GG! 🚗💨
          </p>
        </div>
      </div>
    </div>
  );
}
