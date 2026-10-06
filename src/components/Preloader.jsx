import React, { useLayoutEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoImg from '../assets/pincof-logo.png';

gsap.registerPlugin(ScrollTrigger);

const KINETIC_PHRASES = [
  'SOURCING TALENT',
  'CURATING TEAMS',
  'PINCOF GROUP',
];

export default function Preloader({ onLoaded }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const containerRef = useRef(null);
  const topPanelRef = useRef(null);
  const bottomPanelRef = useRef(null);
  const centerContentRef = useRef(null);
  const ringRef = useRef(null);
  const lineRef = useRef(null);
  const phraseRef = useRef(null);

  useLayoutEffect(() => {
    // Immediately remove HTML static barrier
    const initialCover = document.getElementById('initial-preloader-cover');
    if (initialCover) {
      initialCover.remove();
    }

    // Lock scroll synchronously before browser paints
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = originalOverflow;
          window.scrollTo(0, 0);
          if (window.__lenis) {
            window.__lenis.scrollTo(0, { immediate: true });
          }
          setIsDone(true);
          ScrollTrigger.refresh();
          if (onLoaded) onLoaded();
        },
      });

      // 1. Initial Reveal of Center Content & Seam Line
      masterTl
        .fromTo(
          lineRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.45, ease: 'power3.out' }
        )
        .fromTo(
          centerContentRef.current,
          { opacity: 0, scale: 0.88 },
          { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' },
          '-=0.25'
        )
        // 2. Animate SVG Ring drawing around the logo
        .fromTo(
          ringRef.current,
          { strokeDashoffset: 326 },
          { strokeDashoffset: 0, duration: 0.8, ease: 'power2.inOut' },
          '-=0.3'
        );

      // 3. Staggered phrase shifts
      gsap.delayedCall(0.4, () => {
        setPhraseIndex(1);
        if (phraseRef.current) {
          gsap.fromTo(
            phraseRef.current,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }
          );
        }
      });

      gsap.delayedCall(0.85, () => {
        setPhraseIndex(2);
        if (phraseRef.current) {
          gsap.fromTo(
            phraseRef.current,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }
          );
        }
      });

      // 4. Cool Exit: Center shrinks, Horizon Line flashes, Dual Shutter Split!
      masterTl
        .to(
          centerContentRef.current,
          {
            scale: 0.92,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
          },
          '+=0.45'
        )
        .to(
          lineRef.current,
          {
            scaleX: 1.1,
            opacity: 0,
            duration: 0.2,
            ease: 'power2.in',
          },
          '-=0.15'
        )
        // Top and bottom panels slide away in opposite directions (cinematic shutter split)
        .to(
          topPanelRef.current,
          {
            yPercent: -100,
            duration: 0.75,
            ease: 'power4.inOut',
          },
          '-=0.05'
        )
        .to(
          bottomPanelRef.current,
          {
            yPercent: 100,
            duration: 0.75,
            ease: 'power4.inOut',
          },
          '<'
        );
    }, containerRef.current);

    // Fallback safety timeout
    const safetyTimer = setTimeout(() => {
      document.body.style.overflow = originalOverflow;
      window.scrollTo(0, 0);
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: true });
      }
      setIsDone(true);
      ScrollTrigger.refresh();
      if (onLoaded) onLoaded();
    }, 2400);

    return () => {
      clearTimeout(safetyTimer);
      document.body.style.overflow = originalOverflow;
      ctx.revert();
    };
  }, [onLoaded]);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] pointer-events-auto select-none overflow-hidden"
      aria-label="PINCOF Loading"
    >
      {/* Top Shutter Half */}
      <div
        ref={topPanelRef}
        className="absolute top-0 left-0 right-0 h-[50.5vh] bg-white border-b border-slate-100 flex items-end justify-center overflow-hidden"
      >
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
      </div>

      {/* Bottom Shutter Half */}
      <div
        ref={bottomPanelRef}
        className="absolute bottom-0 left-0 right-0 h-[50.5vh] bg-white border-t border-slate-100 flex items-start justify-center overflow-hidden"
      >
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
      </div>

      {/* Center Splitting Accent Seam */}
      <div
        ref={lineRef}
        className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-brand-red to-transparent z-20 origin-center pointer-events-none"
      />

      {/* Center Floating Kinetic Monogram & Orbital Radar */}
      <div
        ref={centerContentRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center text-center pointer-events-none"
      >
        {/* Orbital Talent Radar */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          {/* Subtle Ambient Pulse */}
          <div className="absolute inset-2 rounded-full bg-brand-red/10 animate-ping opacity-40 pointer-events-none" />

          {/* Outer Rotating Track with Orbiting Talent Nodes */}
          <svg
            className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]"
            viewBox="0 0 144 144"
          >
            {/* Dashed circular orbit */}
            <circle
              cx="72"
              cy="72"
              r="66"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
            {/* Candidate node 1 (Brand Crimson) */}
            <circle cx="72" cy="6" r="3.5" fill="#A6192E" />
            {/* Candidate node 2 (Brand Navy) */}
            <circle cx="138" cy="72" r="3" fill="#0F2B5C" />
            {/* Candidate node 3 (Brand Crimson Light) */}
            <circle cx="28" cy="116" r="2.5" fill="#A6192E" />
          </svg>

          {/* Inner Counter-Rotating Drawing Ring */}
          <svg
            className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] -rotate-90"
            viewBox="0 0 128 128"
          >
            <circle
              ref={ringRef}
              cx="64"
              cy="64"
              r="52"
              fill="none"
              stroke="#A6192E"
              strokeWidth="2"
              strokeDasharray="326.7"
              strokeDashoffset="326.7"
              strokeLinecap="round"
            />
          </svg>

          {/* Center Clean Medallion */}
          <div className="relative z-10 w-24 h-24 rounded-full bg-white shadow-elevated border border-surface-border/80 flex items-center justify-center p-3">
            <img
              src={logoImg}
              alt="PINCOF"
              className="h-9 w-auto object-contain"
            />
          </div>
        </div>

        {/* Dynamic Kinetic Phrase Reveal */}
        <div className="mt-6 flex flex-col items-center">
          <div className="h-6 overflow-hidden flex items-center justify-center">
            <span
              ref={phraseRef}
              className="font-display text-xs font-bold tracking-[0.28em] text-charcoal uppercase block"
            >
              {KINETIC_PHRASES[phraseIndex]}
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-2">
            <span
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                phraseIndex === 0 ? 'w-4 bg-brand-red' : 'bg-slate-300'
              }`}
            />
            <span
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                phraseIndex === 1 ? 'w-4 bg-brand-navy' : 'bg-slate-300'
              }`}
            />
            <span
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                phraseIndex === 2 ? 'w-4 bg-brand-red' : 'bg-slate-300'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
