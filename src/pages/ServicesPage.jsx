import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/services';
import { Layers, ArrowRight, CheckCircle2, Shield } from 'lucide-react';

export default function ServicesPage() {
  const context = useOutletContext();
  const onOpenHiringModal = context?.onOpenHiringModal;

  return (
    <div className="bg-surface-muted min-h-screen pb-20">
      {/* Editorial Page Header */}
      <PageHeader
        eyebrow="RECRUITMENT SOLUTIONS"
        title="Services Built Around Your Hiring Needs"
        description="From single critical vacancies to multi-store branch openings, PINCOF provides structured candidate sourcing and screening support tailored to your business model."
        badgeIcon={Layers}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* All 8 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {servicesData.services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={(svc) => {
                if (onOpenHiringModal) {
                  onOpenHiringModal(svc.title);
                }
              }}
            />
          ))}
        </div>

        {/* Deep Dive Breakdown Section */}
        <div className="bg-white rounded-3xl border border-surface-border p-8 sm:p-12 shadow-premium text-left mb-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider block mb-2">
              OUR SERVICE DELIVERY METHOD
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
              How PINCOF Delivers Staffing For Businesses
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted mt-2">
              Every recruitment engagement begins with role clarity, benchmark criteria, and clear interview scheduling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-9 h-9 rounded-xl bg-brand-red-light text-brand-red flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Targeted Candidate Sourcing</h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                We tap into active, verified candidate databases specific to retail, cafe shifts, and operational roles, filtering by location proximity and shift availability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-9 h-9 rounded-xl bg-brand-navy-light text-brand-navy flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-brand-navy" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Initial Role Vetting</h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Prior to presenting candidates to your team, we verify communication skills, prior store experience, compensation expectations, and readiness to join.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-charcoal flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-brand-red" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Interview Coordination</h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                We organize seamless interview lineups with your store or hiring managers, following up on candidate attendance and feedback.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Page CTA */}
        <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal">
              Have a specific staffing requirement?
            </h3>
            <p className="text-sm text-charcoal-muted mt-1.5 max-w-xl">
              Tell us your store location, role requirements, and expected headcount. Our team will review and get back within 24 business hours.
            </p>
          </div>

          <Link
            to="/request-hiring"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-sm shadow-md transition-all shrink-0"
          >
            <span>Request Hiring Support</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
