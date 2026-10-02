import React, { useEffect, useRef } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import ExperienceStrip from '../components/ExperienceStrip';
import { servicesData } from '../data/services';
import { industriesData } from '../data/industries';
import { whyUsData } from '../data/whyUs';
import ServiceCard from '../components/ServiceCard';
import IndustryCard from '../components/IndustryCard';
import CTASection from '../components/CTASection';
import HiringForm from '../components/HiringForm';
import MagneticButton from '../components/MagneticButton';
import { ArrowRight, Layers, Building, ShieldCheck, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const context = useOutletContext();
  const onOpenHiringModal = context?.onOpenHiringModal;

  const servicesSectionRef = useRef(null);
  const industriesSectionRef = useRef(null);
  const whyUsSectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Stagger services cards
      gsap.fromTo(
        '.home-service-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesSectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Stagger industry cards
      gsap.fromTo(
        '.home-industry-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: industriesSectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Stagger whyUs cards
      gsap.fromTo(
        '.home-why-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: whyUsSectionRef.current,
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <Hero onOpenHiringModal={onOpenHiringModal} />

      {/* Selected Hiring Experience Marquee */}
      <ExperienceStrip />

      {/* Services Preview Section */}
      <section
        id="services"
        ref={servicesSectionRef}
        className="py-24 lg:py-32 bg-[#FAFAFA] border-b border-black/[0.06] text-left relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] text-brand-red text-[11px] font-bold uppercase tracking-widest shadow-subtle">
                <Layers className="w-3.5 h-3.5" />
                <span>CORE SERVICES</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight leading-[1.12]">
                Recruitment Solutions Built Around Your Hiring Needs
              </h2>
              <p className="text-base text-charcoal/70 pt-1 font-normal">
                Structured recruitment support for retail, franchise, and commercial businesses.
              </p>
            </div>

            <MagneticButton strength={0.2}>
              <Link
                to="/services"
                data-cursor-label="ALL"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-black/[0.08] bg-white hover:bg-slate-50 text-xs font-bold uppercase tracking-wider text-charcoal hover:text-brand-red transition-all shadow-subtle shrink-0 group"
              >
                <span>Explore All 8 Services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.services.slice(0, 4).map((service) => (
              <div key={service.id} className="home-service-card">
                <ServiceCard
                  service={service}
                  onSelectService={() => {
                    if (onOpenHiringModal) onOpenHiringModal(service.title);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Preview Section */}
      <section
        ref={industriesSectionRef}
        className="py-24 lg:py-32 bg-white border-b border-black/[0.06] text-left relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-black/[0.06] text-brand-navy text-[11px] font-bold uppercase tracking-widest shadow-subtle">
                <Building className="w-3.5 h-3.5 text-brand-red" />
                <span>SECTORS WE SUPPORT</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight leading-[1.12]">
                Industries We Serve
              </h2>
              <p className="text-base text-charcoal/70 pt-1 font-normal">
                Recruitment support across customer-facing and operational businesses.
              </p>
            </div>

            <MagneticButton strength={0.2}>
              <Link
                to="/industries"
                data-cursor-label="ALL"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-black/[0.08] bg-white hover:bg-slate-50 text-xs font-bold uppercase tracking-wider text-charcoal hover:text-brand-navy transition-all shadow-subtle shrink-0 group"
              >
                <span>View All Industries</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesData.industries.slice(0, 4).map((industry) => (
              <div key={industry.id} className="home-industry-card">
                <IndustryCard
                  industry={industry}
                  onSelectIndustry={(ind) => {
                    if (onOpenHiringModal) onOpenHiringModal(ind);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PINCOF Highlights */}
      <section
        ref={whyUsSectionRef}
        className="py-24 lg:py-32 bg-[#FAFAFA] border-b border-black/[0.06] text-left relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] text-brand-red text-[11px] font-bold uppercase tracking-widest shadow-subtle">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE PINCOF ADVANTAGE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight leading-[1.12]">
              Why Businesses Choose Our Hiring Support
            </h2>
            <p className="text-base text-charcoal/70 pt-1 font-normal">
              Grounded, transparent, and disciplined recruitment practices designed to build dependable workplace teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {whyUsData.features.slice(0, 3).map((feature) => (
              <div
                key={feature.id}
                className="home-why-card bg-white p-8 sm:p-9 rounded-3xl border border-black/[0.07] shadow-subtle hover:shadow-premium hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-brand-red mb-6" />
                <h3 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed mb-4 font-normal">
                  {feature.description}
                </p>
                <p className="text-xs text-charcoal/50 font-medium">
                  {feature.caption}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center sm:text-left">
            <Link
              to="/why-us"
              data-cursor-label="STANDARDS"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-red hover:text-brand-red-dark transition-colors group"
            >
              <span>Learn more about our recruitment standards</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* High-Impact CTA Banner */}
      <CTASection onOpenHiringModal={onOpenHiringModal} />

      {/* Lead Generation Form */}
      <HiringForm />
    </div>
  );
}
