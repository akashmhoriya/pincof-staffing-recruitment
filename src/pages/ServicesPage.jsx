import React, { useEffect, useRef } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import MagneticButton from '../components/MagneticButton';
import { servicesData } from '../data/services';
import { Layers, ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const context = useOutletContext();
  const onOpenHiringModal = context?.onOpenHiringModal;
  const gridRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.services-page-card',
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
    <div className="bg-[#FAFAFA] min-h-screen pb-24 text-left">
      {/* Editorial Page Header */}
      <PageHeader
        eyebrow="RECRUITMENT SOLUTIONS"
        title="Services Built Around Your Hiring Needs"
        description="From single critical vacancies to multi-store branch openings, PINCOF provides structured candidate sourcing and screening support tailored to your business model."
        badgeIcon={Layers}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        
        {/* All 8 Service Cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {servicesData.services.map((service) => (
            <div key={service.id} className="services-page-card">
              <ServiceCard
                service={service}
                onSelectService={(svc) => {
                  if (onOpenHiringModal) {
                    onOpenHiringModal(svc.title);
                  }
                }}
              />
            </div>
          ))}
        </div>

        {/* Deep Dive Breakdown Section */}
        <div className="bg-white rounded-3xl border border-black/[0.08] p-8 sm:p-14 shadow-premium text-left mb-20">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[11px] font-bold tracking-widest text-brand-red uppercase block">
              OUR SERVICE DELIVERY METHOD
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
              How PINCOF Delivers Staffing For Businesses
            </h2>
            <p className="text-base text-charcoal/70 pt-1 font-normal">
              Every recruitment engagement begins with role clarity, benchmark criteria, and clear interview scheduling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-black/[0.06] hover:bg-white hover:shadow-subtle transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-brand-red-light text-brand-red flex items-center justify-center mb-5">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-charcoal mb-2">Targeted Candidate Sourcing</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed font-normal">
                We tap into active, verified candidate databases specific to retail, cafe shifts, and operational roles, filtering by location proximity and shift availability.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-black/[0.06] hover:bg-white hover:shadow-subtle transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-brand-navy-light text-brand-navy flex items-center justify-center mb-5">
                <Shield className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="font-display text-lg font-bold text-charcoal mb-2">Initial Role Vetting</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed font-normal">
                Prior to presenting candidates to your team, we verify communication skills, prior store experience, compensation expectations, and readiness to join.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-black/[0.06] hover:bg-white hover:shadow-subtle transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-charcoal flex items-center justify-center mb-5">
                <Layers className="w-6 h-6 text-brand-red" />
              </div>
              <h3 className="font-display text-lg font-bold text-charcoal mb-2">Interview Coordination</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed font-normal">
                We organize seamless interview lineups with your store or hiring managers, following up on candidate attendance and feedback.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Page CTA */}
        <div className="bg-white rounded-3xl border border-black/[0.08] p-8 sm:p-12 shadow-premium flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 text-left">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
              Have a specific staffing requirement?
            </h3>
            <p className="text-base text-charcoal/70 mt-2 font-normal">
              Tell us your store location, role requirements, and expected headcount. Our team will review and get back within 24 business hours.
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
