import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import gsap from 'gsap';

export default function PageHeader({ eyebrow, title, description, badgeIcon: BadgeIcon }) {
  const headerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 30,
          rotationX: 12,
          transformPerspective: 800,
          transformStyle: 'preserve-3d',
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.75,
          ease: 'power3.out',
        }
      );
    }, headerRef);

    return () => ctx.revert();
  }, [title]);

  return (
    <section
      ref={headerRef}
      className="relative pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-slate-50 via-white to-white border-b border-surface-border/60 text-left overflow-hidden"
    >
      {/* Subtle 3D ambient radial glow in background */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-charcoal-light mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-brand-red flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <span className="text-charcoal font-semibold">{title}</span>
        </nav>

        <div ref={textRef} className="max-w-3xl will-change-transform">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red-light/80 border border-brand-red/15 text-brand-red text-xs font-bold uppercase tracking-wider mb-3.5 shadow-xs">
              {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5" />}
              <span>{eyebrow}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal tracking-tight leading-tight mb-4">
            {title}
          </h1>

          {description && (
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-normal">
              {description}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
