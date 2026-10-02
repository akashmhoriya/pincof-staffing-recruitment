import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import gsap from 'gsap';

export default function PageHeader({ eyebrow, title, description, badgeIcon: BadgeIcon }) {
  const headerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
        }
      );
    }, headerRef);

    return () => ctx.revert();
  }, [title]);

  return (
    <section
      ref={headerRef}
      className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#FAFAFA] border-b border-black/[0.06] text-left overflow-hidden"
    >
      {/* Subtle ambient radial glow in background */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-brand-red/[0.04] rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-navy/[0.04] rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-charcoal/50 mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-brand-red flex items-center gap-1.5 transition-colors font-medium">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-black/20" />
          <span className="text-charcoal font-bold tracking-wide">{title}</span>
        </nav>

        <div ref={textRef} className="max-w-4xl will-change-transform space-y-4">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] text-brand-red text-[11px] font-bold uppercase tracking-widest shadow-subtle">
              {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5" />}
              <span>{eyebrow}</span>
            </div>
          )}

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal tracking-tight leading-[1.08]">
            {title}
          </h1>

          {description && (
            <p className="text-base sm:text-lg text-charcoal/70 leading-relaxed font-normal max-w-2xl pt-1">
              {description}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
