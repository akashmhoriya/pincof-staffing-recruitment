import React from 'react';
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
import { ArrowRight, Layers, Building, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Home() {
  const context = useOutletContext();
  const onOpenHiringModal = context?.onOpenHiringModal;

  return (
    <div>
      {/* Hero Section */}
      <Hero onOpenHiringModal={onOpenHiringModal} />

      {/* Selected Hiring Experience Marquee */}
      <ExperienceStrip />

      {/* Services Preview Section */}
      <section className="py-20 bg-surface-muted border-b border-surface-border/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red-light/80 border border-brand-red/15 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5 text-brand-red" />
                <span>CORE SERVICES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
                Recruitment Solutions Built Around Your Hiring Needs
              </h2>
              <p className="text-base text-charcoal-muted mt-3">
                Structured recruitment support for retail, franchise, and commercial businesses.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-surface-border bg-white hover:bg-slate-50 text-sm font-semibold text-charcoal hover:text-brand-red transition-all shadow-subtle shrink-0"
            >
              <span>Explore All 8 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.services.slice(0, 4).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelectService={() => {
                  if (onOpenHiringModal) onOpenHiringModal(service.title);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Preview Section */}
      <section className="py-20 bg-white border-b border-surface-border/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-light border border-brand-navy/15 text-brand-navy text-xs font-bold uppercase tracking-wider mb-3">
                <Building className="w-3.5 h-3.5 text-brand-red" />
                <span>SECTORS WE SUPPORT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
                Industries We Serve
              </h2>
              <p className="text-base text-charcoal-muted mt-3">
                Recruitment support across customer-facing and operational businesses.
              </p>
            </div>

            <Link
              to="/industries"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-surface-border bg-white hover:bg-slate-50 text-sm font-semibold text-charcoal hover:text-brand-navy transition-all shadow-subtle shrink-0"
            >
              <span>View All Industries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesData.industries.slice(0, 4).map((industry) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                onSelectIndustry={(ind) => {
                  if (onOpenHiringModal) onOpenHiringModal(ind);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PINCOF Highlights */}
      <section className="py-20 bg-surface-muted border-b border-surface-border/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red-light/80 border border-brand-red/15 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE PINCOF ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
              Why Businesses Choose Our Hiring Support
            </h2>
            <p className="text-base text-charcoal-muted mt-3">
              Grounded, transparent, and disciplined recruitment practices designed to build dependable workplace teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUsData.features.slice(0, 3).map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-7 rounded-2xl border border-surface-border shadow-subtle hover:shadow-premium transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-brand-red mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-2">{feature.title}</h3>
                <p className="text-sm text-charcoal-muted leading-relaxed mb-3">{feature.description}</p>
                <p className="text-xs text-charcoal-light font-medium">{feature.caption}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:text-left">
            <Link
              to="/why-us"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-red hover:text-brand-red-dark transition-colors"
            >
              <span>Learn more about our recruitment standards</span>
              <ChevronRight className="w-4 h-4" />
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
