import React, { useEffect, useRef } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import IndustryCard from '../components/IndustryCard';
import MagneticButton from '../components/MagneticButton';
import { industriesData } from '../data/industries';
import { Building, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesPage() {
  const context = useOutletContext();
  const onOpenHiringModal = context?.onOpenHiringModal;
  const gridRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.industries-page-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white min-h-screen pb-24 text-left">
      <PageHeader
        eyebrow="SECTORS & MARKETS"
        title="Industries We Serve"
        description="Recruitment support tailored for customer-facing, retail, food & beverage, and operational businesses where dependable frontline staff is critical."
        badgeIcon={Building}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        
        {/* 2x4 Responsive Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {industriesData.industries.map((industry) => (
            <div key={industry.id} className="industries-page-card">
              <IndustryCard
                industry={industry}
                onSelectIndustry={(ind) => {
                  if (onOpenHiringModal) {
                    onOpenHiringModal(ind);
                  }
                }}
              />
            </div>
          ))}
        </div>

        {/* Industry Understanding Banner */}
        <div className="bg-[#FAFAFA] rounded-3xl border border-black/[0.07] p-8 sm:p-14 text-left mb-20">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[11px] font-bold tracking-widest text-brand-navy uppercase block">
              WHY SECTOR CONTEXT MATTERS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
              Understanding Operational Reality
            </h2>
            <p className="text-base text-charcoal/70 pt-1 font-normal">
              Hiring for a cafe differs fundamentally from hiring for a corporate office. Shift flexibility, footfall pressure, point-of-sale efficiency, and customer demeanor are paramount.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-black/[0.06] shadow-subtle hover:shadow-premium transition-all duration-300">
              <h4 className="font-display font-bold text-charcoal text-lg mb-2">Peak Hour Resilience</h4>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
                Candidates screened for physical readiness, shift work, and high customer volume composure.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-black/[0.06] shadow-subtle hover:shadow-premium transition-all duration-300">
              <h4 className="font-display font-bold text-charcoal text-lg mb-2">Brand Presentation</h4>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
                Clear spoken communication, neat grooming, and professional frontline demeanor.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-black/[0.06] shadow-subtle hover:shadow-premium transition-all duration-300">
              <h4 className="font-display font-bold text-charcoal text-lg mb-2">Franchise & Outlet Standards</h4>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
                Personnel ready to adhere strictly to franchisor SOPs, billing protocols, and store policies.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="bg-white rounded-3xl border border-black/[0.08] p-8 sm:p-12 shadow-premium flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 text-left">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
              Operating in one of these sectors?
            </h3>
            <p className="text-base text-charcoal/70 mt-2 font-normal">
              Tell us your industry and store requirements so we can deploy our sector-specific candidate talent pools.
            </p>
          </div>

          <MagneticButton strength={0.2}>
            <Link
              to="/request-hiring"
              data-cursor-label="HIRE"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-red hover:bg-brand-red-dark text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-glow-red transition-all duration-300 shrink-0 group"
            >
              <span>Request Hiring Support</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </MagneticButton>
        </div>

      </div>
    </div>
  );
}
