import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Users, ArrowDown } from 'lucide-react';
import { siteImages } from '../data/images';
import MagneticButton from './MagneticButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onOpenHiringModal }) {
  const heroRef = useRef(null);
  const headlineLine1Ref = useRef(null);
  const headlineLine2Ref = useRef(null);
  const paragraphRef = useRef(null);
  const ctaGroupRef = useRef(null);
  const badgeRef = useRef(null);
  const focusAreasRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageInnerRef = useRef(null);
  const floatingCardRef = useRef(null);
  const statsBadgeRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Initial State
      gsap.set([headlineLine1Ref.current, headlineLine2Ref.current], {
        yPercent: 120,
        rotateX: 15,
        opacity: 0,
      });

      // 2. Entrance Sequence
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.15, clearProps: 'transform' }
      )
        .to(
          [headlineLine1Ref.current, headlineLine2Ref.current],
          {
            yPercent: 0,
            rotateX: 0,
            opacity: 1,
            duration: 0.95,
            stagger: 0.12,
            ease: 'power4.out',
            clearProps: 'transform',
          },
          '-=0.3'
        )
        .fromTo(
          paragraphRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', clearProps: 'transform' },
          '-=0.5'
        )
        .fromTo(
          ctaGroupRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, clearProps: 'transform' },
          '-=0.45'
        )
        .fromTo(
          focusAreasRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          imageContainerRef.current,
          { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            opacity: 1,
            duration: 1.0,
            ease: 'power3.inOut',
            clearProps: 'clipPath',
          },
          '-=0.9'
        )
        .fromTo(
          imageInnerRef.current,
          { scale: 1.15 },
          { scale: 1, duration: 1.1, ease: 'power2.out' },
          '-=1.0'
        )
        .fromTo(
          floatingCardRef.current,
          { opacity: 0, scale: 0.9, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.65, ease: 'back.out(1.4)' },
          '-=0.4'
        )
        .fromTo(
          statsBadgeRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.55, clearProps: 'transform' },
          '-=0.4'
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          '-=0.2'
        );

      // Subtle breathing motion for floating card
      gsap.to(floatingCardRef.current, {
        y: -8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Butter-smooth parallax on image on scroll with damped scrub
      gsap.to(imageInnerRef.current, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
        },
      });
    }, heroRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 bg-[#FAFAFA] flex flex-col justify-between overflow-hidden"
    >
      {/* Background Architectural Grid Lines & Atmospheric Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-brand-navy/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Editorial Typography & Actions */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Eyebrow Pill */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-charcoal shadow-subtle"
            >
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse-subtle" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-charcoal/80">
                Staffing & Recruitment Solutions
              </span>
            </div>

            {/* Massive Editorial Headline with Line-by-Line Masking */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-bold tracking-tight text-charcoal leading-[1.05]">
              <div className="overflow-hidden">
                <span ref={headlineLine1Ref} className="block will-change-transform">
                  The Right People for
                </span>
              </div>
              <div className="overflow-hidden mt-1">
                <span ref={headlineLine2Ref} className="block will-change-transform text-brand-red">
                  the Right Business.
                </span>
              </div>
            </h1>

            {/* Supporting Paragraph with Strong Editorial Rhythm */}
            <p
              ref={paragraphRef}
              className="text-base sm:text-lg lg:text-xl text-charcoal/70 leading-relaxed max-w-2xl font-normal"
            >
              From retail stores and cafes to franchise operations and growing businesses, we help companies find and hire people for the roles that keep their operations moving.
            </p>

            {/* CTA Action Buttons */}
            <div
              ref={ctaGroupRef}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <MagneticButton strength={0.25}>
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenHiringModal) {
                      onOpenHiringModal();
                    }
                  }}
                  data-cursor-label="HIRE"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-brand-red hover:bg-brand-red-dark shadow-premium hover:shadow-glow-red transition-all duration-300 group cursor-pointer"
                >
                  <span>Request Hiring Support</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </MagneticButton>

              <MagneticButton strength={0.15}>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector('#services');
                    if (target) {
                      if (window.__lenis) {
                        window.__lenis.scrollTo(target, { offset: -30, duration: 1.2 });
                      } else {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  data-cursor-label="VIEW"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs font-bold tracking-wider uppercase text-charcoal hover:text-brand-navy bg-white hover:bg-slate-50 border border-black/[0.08] shadow-subtle transition-all duration-200"
                >
                  <span>Explore Our Services</span>
                  <ChevronRight className="w-4 h-4 text-charcoal/40" />
                </a>
              </MagneticButton>
            </div>

            {/* Supporting Focus Areas Line */}
            <div ref={focusAreasRef} className="pt-6 border-t border-black/[0.06]">
              <div className="flex flex-wrap items-center gap-y-2 text-xs font-medium text-charcoal/60">
                <span className="font-bold text-charcoal mr-2 uppercase tracking-wider text-[11px]">
                  Focus Areas:
                </span>
                <span className="inline-flex items-center">Retail <span className="mx-2 text-black/20">•</span></span>
                <span className="inline-flex items-center">Franchise <span className="mx-2 text-black/20">•</span></span>
                <span className="inline-flex items-center">Food & Beverage <span className="mx-2 text-black/20">•</span></span>
                <span className="inline-flex items-center">Fashion <span className="mx-2 text-black/20">•</span></span>
                <span className="inline-flex items-center">Hospitality</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Editorial Cinematic Visual & Architectural Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with Clip-Path Curtain */}
              <div
                ref={imageContainerRef}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/[0.08] aspect-[4/5] bg-slate-100 group"
              >
                <img
                  ref={imageInnerRef}
                  src={siteImages.heroMain}
                  alt="Customer service and store executive in professional retail environment"
                  className="w-full h-full object-cover object-center filter saturate-[1.05] will-change-transform"
                  loading="eager"
                />

                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70" />

                {/* In-image Caption Card */}
                <div
                  ref={statsBadgeRef}
                  className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-xl p-4 rounded-2xl border border-white/60 shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-charcoal">Frontline & Store Staffing</p>
                      <p className="text-[11px] text-charcoal-muted mt-0.5">Sourced for operational reliability</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-navy bg-brand-navy-light px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
                      Active Screening
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Architectural Badge - Hiring Support (Elevated above subject's face) */}
              <div
                ref={floatingCardRef}
                className="absolute -top-12 sm:-top-16 lg:-top-18 -right-2 sm:-right-5 lg:-right-6 bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-black/[0.08] shadow-elevated w-52 sm:w-56 text-left will-change-transform z-20"
              >
                <div className="flex items-center gap-2.5 mb-2.5 pb-2 border-b border-black/[0.05]">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-brand-red-light flex items-center justify-center text-brand-red shrink-0">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-charcoal uppercase tracking-widest">
                    Hiring Support
                  </span>
                </div>
                
                <ul className="space-y-1.5 sm:space-y-2 text-xs font-medium text-charcoal/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-navy shrink-0" />
                    <span>Retail Stores</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                    <span>Food & Beverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-navy shrink-0" />
                    <span>Franchise Outlets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                    <span>Store Operations</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Editorial Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 hidden sm:flex items-center justify-between text-[11px] font-bold tracking-widest uppercase text-charcoal/40"
      >
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-brand-red" />
          <span>PINCOF RECRUITMENT PLATFORM</span>
        </div>
        
        <a
          href="#experience-strip"
          onClick={(e) => {
            e.preventDefault();
            const target = document.querySelector('#experience-strip');
            if (target) {
              if (window.__lenis) {
                window.__lenis.scrollTo(target, {
                  offset: 0,
                  duration: 1.2,
                  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                });
              } else {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }}
          className="flex items-center gap-2 hover:text-brand-red transition-colors group cursor-pointer"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-brand-red" />
        </a>

        <div>
          <span>EST. JAIPUR, INDIA</span>
        </div>
      </div>
    </section>
  );
}
