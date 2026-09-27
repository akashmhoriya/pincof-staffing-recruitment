import React, { useRef, useEffect } from 'react';
import { brandExperienceData } from '../data/brands';
import { ShieldCheck, Info } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceStrip() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Duplicate brands for seamless infinite loop marquee
  const brandList = [...brandExperienceData.brands, ...brandExperienceData.brands];

  return (
    <section
      ref={sectionRef}
      className="py-12 bg-white border-y border-slate-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal-light mb-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-red" />
            <span>{brandExperienceData.sectionSubtitle}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-charcoal">
            {brandExperienceData.sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted mt-1.5">
            {brandExperienceData.sectionDescription}
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full overflow-hidden py-3 group">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee group-hover:pause-animation items-center">
          {brandList.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className="mx-3 sm:mx-5 px-5 sm:px-7 py-3 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-subtle transition-all duration-200 flex items-center gap-3.5"
            >
              <div className="w-2 h-2 rounded-full bg-brand-red/70" />
              <div className="text-left">
                <span className="block font-bold text-sm sm:text-base text-charcoal tracking-wide">
                  {brand.name}
                </span>
                <span className="block text-[11px] text-charcoal-light font-medium">
                  {brand.tagline}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Required Legal Disclaimer */}
      <div className="max-w-4xl mx-auto px-4 mt-6 text-center">
        <p className="text-[11px] text-charcoal-light/80 leading-normal flex items-center justify-center gap-1.5">
          <Info className="w-3 h-3 text-slate-400 shrink-0" />
          <span>{brandExperienceData.disclaimer}</span>
        </p>
      </div>
    </section>
  );
}
