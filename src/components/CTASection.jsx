import React, { useRef, useEffect } from 'react';
import { ArrowRight, PhoneCall, Sparkles, CheckCircle2 } from 'lucide-react';
import { contactData } from '../data/contact';
import MagneticButton from './MagneticButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection({ onOpenHiringModal }) {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.95,
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

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#FAFAFA] border-b border-black/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={cardRef}
          className="max-w-5xl mx-auto relative bg-[#0A0E17] text-white rounded-3xl p-8 sm:p-14 lg:p-18 shadow-2xl overflow-hidden text-center border border-white/10"
        >
          {/* Ambient Lighting Gradients */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-navy/30 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          {/* Accent Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-[11px] font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand-red" />
            <span>CONNECT WITH PINCOF</span>
          </div>

          {/* Large Editorial Headline */}
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-5 max-w-3xl mx-auto">
            Need to Build Your Team?
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            Tell us about your hiring requirement and let us understand how we can support your recruitment process.
          </p>

          {/* Buttons with Magnetic Precision */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <MagneticButton strength={0.25}>
              <button
                type="button"
                onClick={() => {
                  if (onOpenHiringModal) {
                    onOpenHiringModal();
                  }
                }}
                data-cursor-label="HIRE"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-brand-red hover:bg-brand-red-dark shadow-glow-red hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <span>Request Hiring Support</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </MagneticButton>

            <MagneticButton strength={0.15}>
              <a
                href={`tel:${contactData.phone}`}
                data-cursor-label="CALL"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4 text-brand-red" />
                <span>Talk to Us ({contactData.phoneDisplay})</span>
              </a>
            </MagneticButton>
          </div>

          {/* Micro Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-subtle" />
              Responsive Intake Team
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
              Verified Candidate Pipelines
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-navy-light" />
              Direct Client Coordination
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
