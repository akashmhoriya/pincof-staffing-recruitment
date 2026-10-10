import React, { useEffect, useRef } from 'react';
import BrandHeroCarousel from './BrandHeroCarousel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onOpenHiringModal }) {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const badgeRef = useRef(null);
  const carouselContainerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.1 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          carouselContainerRef.current,
          { opacity: 0, y: 25, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
          },
          '-=0.4'
        );
    }, heroRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative pt-20 sm:pt-24 lg:pt-26 pb-12 sm:pb-16 bg-[#FAFAFA] flex flex-col justify-start overflow-hidden"
    >
      {/* Atmospheric Ambient Glow */}
      <div className="absolute -top-32 right-1/4 w-[450px] h-[450px] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[350px] h-[350px] bg-brand-navy/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        {/* Compact Hero Header - Takes minimal height so carousel is immediate */}
        <div className="text-center space-y-2.5 mb-4 sm:mb-6 max-w-3xl mx-auto">
          {/* Eyebrow Pill */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] text-charcoal shadow-subtle mx-auto"
          >
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse-subtle" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-charcoal/80">
              Staffing & Recruitment Solutions
            </span>
          </div>

          {/* Clean Main Headline */}
          <h1
            ref={headlineRef}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-charcoal leading-[1.1]"
          >
            The Right People for <span className="text-brand-red">the Right Business.</span>
          </h1>

          <p className="text-xs sm:text-sm text-charcoal/70 max-w-xl mx-auto font-normal">
            Proven recruitment and frontline staffing partnerships powering India's leading consumer brands & retail operations.
          </p>
        </div>

        {/* PRIMARY HERO FEATURE: Full-Width Brand Carousel */}
        <div ref={carouselContainerRef} className="w-full relative will-change-transform">
          <BrandHeroCarousel onOpenHiringModal={onOpenHiringModal} />
        </div>

      </div>
    </section>
  );
}
