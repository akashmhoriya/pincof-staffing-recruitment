import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { brandExperienceData } from '../data/brands';
import BrandLogo from './BrandLogo';
import { CheckCircle2, Info, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceStrip({ showHeader = true }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 4 repetitions guarantees 24 cards for an ultra-smooth, gap-free infinite loop on all screen sizes
  const brandList = [
    ...brandExperienceData.brands,
    ...brandExperienceData.brands,
    ...brandExperienceData.brands,
    ...brandExperienceData.brands,
  ];

  return (
    <section
      id="experience-strip"
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#070A10] text-slate-300 relative overflow-hidden border-y border-white/[0.08] text-left"
    >
      {/* Subtle Architectural Grid Texture & Radial Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Faint Background Editorial Watermark */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.02] font-display font-black text-[15vw] tracking-tighter text-white leading-none whitespace-nowrap z-0">
        EXPERIENCE
      </div>

      <div className="relative z-10">
        {/* Optional Header (Shown on Homepage, Cleanly Omitted when inside ExperiencePage) */}
        {showHeader && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.22em] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                  <span>{brandExperienceData.sectionSubtitle}</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                  {brandExperienceData.sectionTitle}
                </h2>

                <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed pt-1">
                  {brandExperienceData.sectionDescription}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 group"
                >
                  <span>View All Brands & Roles</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-brand-red" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Infinite Horizontal Marquee */}
        <div className="relative w-full overflow-hidden py-4 group">
          {/* Soft Edge Fade Vignettes */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#070A10] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#070A10] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex w-max animate-marquee group-hover:pause-animation items-center">
            {brandList.map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                className="mx-3.5 sm:mx-4 w-72 sm:w-80 p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between cursor-default group/card backdrop-blur-md shadow-2xl shrink-0"
              >
                <div>
                  {/* Top Bar: Crisp Brand Logo & Sector Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 shadow-md group-hover/card:scale-105 transition-transform duration-300">
                      <BrandLogo id={brand.id} className="w-full h-full object-contain" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                      {brand.category.split('/')[0].trim()}
                    </span>
                  </div>

                  {/* Brand Name & Tagline */}
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight group-hover/card:text-brand-red transition-colors">
                    {brand.name}
                  </h3>

                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {brand.tagline}
                  </p>
                </div>

                {/* Roles Filled Showcase */}
                <div className="border-t border-white/[0.08] pt-3.5 mt-4 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 min-w-0 pr-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-slate-300 truncate text-[11px] font-medium">
                      {brand.rolesFilled}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider shrink-0 opacity-0 group-hover/card:opacity-100 transition-opacity">
                    Vetted
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Trust Metrics Bar */}
        <div className="max-w-5xl mx-auto px-4 mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span>Store Staff & Team Leads</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>100% Pre-Screened Candidates</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span>Multi-Outlet & Franchise Scale</span>
          </div>
        </div>

        {/* Required Legal Compliance Notice */}
        <div className="max-w-4xl mx-auto px-4 mt-6 text-center">
          <p className="text-[11px] text-slate-500 leading-relaxed flex items-center justify-center gap-2">
            <Info className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span>{brandExperienceData.disclaimer}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
