import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import IndustryCard from '../components/IndustryCard';
import { industriesData } from '../data/industries';
import { Building, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function IndustriesPage() {
  const context = useOutletContext();
  const onOpenHiringModal = context?.onOpenHiringModal;

  return (
    <div className="bg-white min-h-screen pb-20">
      <PageHeader
        eyebrow="SECTORS & MARKETS"
        title="Industries We Serve"
        description="Recruitment support tailored for customer-facing, retail, food & beverage, and operational businesses where dependable frontline staff is critical."
        badgeIcon={Building}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* 2x4 Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {industriesData.industries.map((industry) => (
            <IndustryCard
              key={industry.id}
              industry={industry}
              onSelectIndustry={(ind) => {
                if (onOpenHiringModal) {
                  onOpenHiringModal(ind);
                }
              }}
            />
          ))}
        </div>

        {/* Industry Understanding Banner */}
        <div className="bg-surface-muted rounded-3xl border border-surface-border p-8 sm:p-12 text-left mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-brand-navy uppercase tracking-wider block mb-2">
              WHY SECTOR CONTEXT MATTERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
              Understanding Operational Reality
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted mt-2">
              Hiring for a cafe differs fundamentally from hiring for a corporate office. Shift flexibility, footfall pressure, point-of-sale efficiency, and customer demeanor are paramount.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-white border border-slate-200/80">
              <h4 className="font-bold text-charcoal text-base mb-1">Peak Hour Resilience</h4>
              <p className="text-xs text-charcoal-light leading-relaxed">
                Candidates screened for physical readiness, shift work, and high customer volume composure.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200/80">
              <h4 className="font-bold text-charcoal text-base mb-1">Brand Presentation</h4>
              <p className="text-xs text-charcoal-light leading-relaxed">
                Clear spoken communication, neat grooming, and professional frontline demeanor.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200/80">
              <h4 className="font-bold text-charcoal text-base mb-1">Franchise & Outlet Standards</h4>
              <p className="text-xs text-charcoal-light leading-relaxed">
                Personnel ready to adhere strictly to franchisor SOPs, billing protocols, and store policies.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal">
              Operating in one of these sectors?
            </h3>
            <p className="text-sm text-charcoal-muted mt-1.5 max-w-xl">
              Tell us your industry and store requirements so we can deploy our sector-specific candidate talent pools.
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
