'use client';

import React, { useState, useRef, useEffect } from 'react';

const EMAIL_ADDRESS = 'luis.alvarez0129@outlook.com';
const PREPOPULATED_SUBJECT = encodeURIComponent('[Insert Name Here] sends a portfolio greeting');
const MAILTO_URL = `mailto:${EMAIL_ADDRESS}?subject=${PREPOPULATED_SUBJECT}`;

type ActionState = null | 'send' | 'copy';

export default function SplitEmailButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [actionState, setActionState] = useState<ActionState>(null);
  const [forceCollapsed, setForceCollapsed] = useState(false);
  const resetTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  const isExpanded = (!forceCollapsed && isHovered) || actionState !== null;

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    let copied = false;
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(EMAIL_ADDRESS);
        copied = true;
      }
    } catch {
      // fallback
    }

    if (!copied) {
      try {
        const el = document.createElement('textarea');
        el.value = EMAIL_ADDRESS;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      } catch {
        // ignore
      }
    }

    setActionState('copy');

    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    resetTimerRef.current = setTimeout(() => {
      setActionState(null);
      setForceCollapsed(true);
    }, 1800);
  };

  const handleSend = () => {
    setActionState('send');

    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    resetTimerRef.current = setTimeout(() => {
      setActionState(null);
      setForceCollapsed(true);
    }, 1800);
  };

  const handleMouseEnter = () => {
    if (!forceCollapsed) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setForceCollapsed(false);
  };

  return (
    <div
      className="relative inline-block h-11"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Outer button pill with smooth width expansion/growth animation on hover & shrink on timeout */}
      <div
        className={`relative h-full flex items-center rounded-full border text-slate-200 font-semibold shadow-md overflow-hidden select-none transition-all duration-300 ease-out ${
          actionState === 'send'
            ? 'w-[275px] border-blue-500/60 ring-2 ring-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.3)] bg-slate-900'
            : actionState === 'copy'
            ? 'w-[275px] border-emerald-500/60 ring-2 ring-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.3)] bg-slate-900'
            : isExpanded
            ? 'w-[275px] border-slate-600 ring-2 ring-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.15)] bg-slate-800'
            : 'w-[115px] border-slate-700 hover:border-slate-600 hover:bg-slate-700/80 bg-slate-800 cursor-pointer'
        }`}
      >
        {/* Layer 1: Single "Email" label (visible when unhovered/collapsed) */}
        <div
          aria-hidden={isExpanded}
          className={`absolute inset-0 flex items-center justify-center gap-2 text-sm font-semibold text-slate-200 transition-all duration-200 pointer-events-none ${
            isExpanded
              ? 'opacity-0 scale-90 -translate-y-1'
              : 'opacity-100 scale-100 translate-y-0 delay-100'
          }`}
        >
          <svg aria-hidden="true" className="w-4 h-4 fill-none stroke-currentColor text-blue-400" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Email</span>
        </div>

        {/* Layer 2: Split container ("Send Email | Copy Email") */}
        {/* Visible when expanded and no action selected yet */}
        <div
          className={`w-[275px] h-full flex items-center divide-x divide-slate-700/80 text-sm whitespace-nowrap transition-all duration-300 ${
            isExpanded && actionState === null
              ? 'opacity-100 scale-100 pointer-events-auto delay-100'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          {/* Left half: Send Email */}
          <a
            href={MAILTO_URL}
            onClick={handleSend}
            className="relative flex-1 h-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium hover:bg-blue-600/25 active:bg-blue-600/40 text-slate-200 hover:text-white transition-colors cursor-pointer overflow-hidden group/send"
            title="Open email draft with greeting"
          >
            <span className="flex items-center gap-1.5 transition-transform group-hover/send:translate-x-0.5">
              <svg aria-hidden="true" className="w-3.5 h-3.5 fill-none stroke-currentColor text-blue-400 group-hover/send:scale-110 transition-transform" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Send Email</span>
            </span>
          </a>

          {/* Right half: Copy Email */}
          <button
            type="button"
            onClick={handleCopy}
            className="relative flex-1 h-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium hover:bg-emerald-600/25 active:bg-emerald-600/40 text-slate-200 hover:text-white transition-colors cursor-pointer overflow-hidden group/copy"
            title="Copy email to clipboard"
          >
            <span className="flex items-center gap-1.5 transition-transform group-hover/copy:-translate-x-0.5">
              <svg aria-hidden="true" className="w-3.5 h-3.5 fill-none stroke-currentColor text-emerald-400 group-hover/copy:scale-110 transition-transform" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              <span>Copy Email</span>
            </span>
          </button>
        </div>

        {/* Layer 3: Full-width Sweep across to opposite end on Send Email */}
        {/* Sweeps from left all the way to the right end, covering and hiding Copy Email */}
        {actionState === 'send' && (
          <div className="absolute inset-0 flex items-center justify-center animate-sweep-full-ltr overflow-hidden bg-gradient-to-r from-blue-950/90 via-slate-900 to-blue-950/90 z-20">
            {/* Radiant beam washing left-to-right across the whole pill */}
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-400/70 to-blue-500/0 animate-beam-ltr pointer-events-none"
            />
            <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm tracking-wide">
              <span>🚀</span>
              <span>Drafted! Opening Email...</span>
            </div>
          </div>
        )}

        {/* Layer 4: Full-width Sweep across to opposite end on Copy Email */}
        {/* Sweeps from right all the way to the left end, covering and hiding Send Email */}
        {actionState === 'copy' && (
          <div className="absolute inset-0 flex items-center justify-center animate-sweep-full-rtl overflow-hidden bg-gradient-to-l from-emerald-950/90 via-slate-900 to-emerald-950/90 z-20">
            {/* Radiant beam washing right-to-left across the whole pill */}
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-l from-emerald-500/0 via-emerald-300/70 to-emerald-500/0 animate-beam-rtl pointer-events-none"
            />
            <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm tracking-wide">
              <span>✓</span>
              <span>Copied to Clipboard!</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
