import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Store, Users, Coffee, Sparkles } from 'lucide-react';
import { siteImages } from '../data/images';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onOpenHiringModal }) {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const paragraphRef = useRef(null);
  const ctaGroupRef = useRef(null);
  const badgesRef = useRef(null);
  const imageContainerRef = useRef(null);
  const floatingCardRef = useRef(null);
  const statsBadgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgesRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.3'
        )
        .fromTo(
          paragraphRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          ctaGroupRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          imageContainerRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out' },
          '-=0.6'
        )
        .fromTo(
          floatingCardRef.current,
          { opacity: 0, x: 20, y: 20 },
          { opacity: 1, x: 0, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          statsBadgeRef.current,
          { opacity: 0, y: -15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        );

      // Subtle floating card breathing motion
      gsap.to(floatingCardRef.current, {
        y: '-=8',
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Subtle parallax on scroll
      gsap.to(imageContainerRef.current, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden"
    >
      {/* Subtle light background grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow Pill */}
            <div ref={badgesRef} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red-light/60 border border-brand-red/15 text-brand-red text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              <span>Staffing & Recruitment Solutions</span>
            </div>

            {/* Large Confident Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-charcoal leading-[1.12]"
            >
              The Right People for the{' '}
              <span className="relative inline-block text-brand-red">
                Right Business.
                <span className="absolute left-0 bottom-1 w-full h-[3px] bg-brand-navy/20 rounded-full" />
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p
              ref={paragraphRef}
              className="text-lg sm:text-xl text-charcoal-muted leading-relaxed max-w-2xl font-normal"
            >
              From retail stores and cafes to franchise operations and growing businesses, we help companies find and hire people for the roles that keep their operations moving.
            </p>

            {/* CTA Action Buttons */}
            <div
              ref={ctaGroupRef}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <a
                href="#hiring-form"
                onClick={(e) => {
                  if (onOpenHiringModal) {
                    e.preventDefault();
                    onOpenHiringModal();
                  }
                }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg text-base font-semibold text-white bg-brand-red hover:bg-brand-red-dark shadow-premium hover:shadow-premium-hover transition-all duration-200 group active:scale-[0.99]"
              >
                <span>Request Hiring Support</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold text-charcoal hover:text-brand-navy bg-white hover:bg-slate-50 border border-surface-border shadow-subtle hover:border-slate-300 transition-all duration-200"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 text-charcoal-light" />
              </a>
            </div>

            {/* Supporting Industry Line */}
            <div className="pt-4 border-t border-slate-200/80">
              <div className="flex flex-wrap items-center gap-y-2 text-xs sm:text-sm font-medium text-charcoal-light">
                <span className="text-charcoal font-semibold mr-2">Focus Areas:</span>
                <span className="inline-flex items-center">Retail <span className="mx-2 text-slate-300">•</span></span>
                <span className="inline-flex items-center">Franchise <span className="mx-2 text-slate-300">•</span></span>
                <span className="inline-flex items-center">Food & Beverage <span className="mx-2 text-slate-300">•</span></span>
                <span className="inline-flex items-center">Fashion <span className="mx-2 text-slate-300">•</span></span>
                <span className="inline-flex items-center">Hospitality</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Editorial Visual & Floating Card */}
          <div className="lg:col-span-5 relative">
            <div
              ref={imageContainerRef}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-100 group">
                <img
                  src={siteImages.heroMain}
                  alt="Customer service and store executive in professional retail environment"
                  className="w-full h-full object-cover object-center filter saturate-[1.05] transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-60" />

                {/* In-image caption tag */}
                <div
                  ref={statsBadgeRef}
                  className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-white/60 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-charcoal">Frontline & Store Staffing</p>
                      <p className="text-[11px] text-charcoal-light">Sourced for operational reliability</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-navy bg-brand-navy-light px-2 py-0.5 rounded-md">
                      <CheckCircle2 className="w-3 h-3 text-brand-red" />
                      Active Screening
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating UI Card - Hiring Support */}
              <div
                ref={floatingCardRef}
                className="absolute -top-6 -right-3 sm:-right-6 bg-white p-4 sm:p-5 rounded-xl border border-surface-border shadow-elevated w-48 sm:w-56 text-left"
              >
                <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-slate-100">
                  <div className="w-7 h-7 rounded-lg bg-brand-red-light flex items-center justify-center text-brand-red">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-charcoal uppercase tracking-wider">
                    Hiring Support
                  </span>
                </div>
                
                <ul className="space-y-1.5 text-xs font-medium text-charcoal-muted">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
                    <span>Retail Stores</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                    <span>Food & Beverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
                    <span>Franchise Outlets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                    <span>Store Operations</span>
                  </li>
                </ul>
              </div>

              {/* Decorative Accent Ring */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-red/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-brand-navy/5 rounded-full blur-2xl pointer-events-none" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
