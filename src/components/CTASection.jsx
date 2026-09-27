import React, { useRef, useEffect } from 'react';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';
import { contactData } from '../data/contact';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection({ onOpenHiringModal }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-surface-muted border-b border-surface-border/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={contentRef}
          className="max-w-5xl mx-auto relative bg-white rounded-3xl border border-surface-border p-8 sm:p-12 lg:p-16 shadow-premium overflow-hidden text-center hover:shadow-premium-hover transition-shadow duration-300"
        >
          {/* Subtle accent corner highlights */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />

          {/* Accent Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red-light/80 border border-brand-red/15 text-brand-red text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONNECT WITH PINCOF</span>
          </div>

          {/* Large Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal tracking-tight leading-tight mb-5 max-w-2xl mx-auto">
            Need to Build Your Team?
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed max-w-2xl mx-auto mb-9 font-normal">
            Tell us about your hiring requirement and let us understand how we can support your recruitment process.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#hiring-form"
              onClick={(e) => {
                if (onOpenHiringModal) {
                  e.preventDefault();
                  onOpenHiringModal();
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-brand-red hover:bg-brand-red-dark shadow-md hover:shadow-lg transition-all duration-200 group active:scale-[0.99]"
            >
              <span>Request Hiring Support</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={`tel:${contactData.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-charcoal hover:text-brand-navy bg-slate-50 hover:bg-slate-100 border border-surface-border transition-all duration-200"
            >
              <PhoneCall className="w-4 h-4 text-brand-red" />
              <span>Talk to Us ({contactData.phoneDisplay})</span>
            </a>
          </div>

          {/* Micro Trust Indicators */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs text-charcoal-light">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Responsive Intake Team
            </span>
            <span>•</span>
            <span>Verified Candidate Pipelines</span>
            <span>•</span>
            <span>Direct Client Coordination</span>
          </div>

          </div>
      </div>
    </section>
  );
}
