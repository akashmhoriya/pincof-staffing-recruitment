import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ExperienceStrip from '../components/ExperienceStrip';
import { brandExperienceData } from '../data/brands';
import { Award, Info, CheckCircle2, ArrowRight, Shield } from 'lucide-react';

export default function ExperiencePage() {
  const context = useOutletContext();
  const onOpenHiringModal = context?.onOpenHiringModal;

  return (
    <div className="bg-white min-h-screen pb-20">
      <PageHeader
        eyebrow="SELECTED HIRING EXPERIENCE"
        title="Brands & Businesses We've Supported"
        description="Our experience includes fulfilling hiring and recruitment requirements across multiple brands, franchise businesses, and retail operations."
        badgeIcon={Award}
      />

      {/* Infinite Horizontal Marquee Strip */}
      <ExperienceStrip />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Detailed Brand Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-left">
          {brandExperienceData.brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-2xl border border-surface-border p-7 hover:border-slate-300 hover:shadow-premium transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-charcoal-light uppercase tracking-wider">
                    {brand.category}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-red" />
                </div>

                <h3 className="text-2xl font-extrabold text-charcoal tracking-tight mb-1.5">
                  {brand.name}
                </h3>

                <p className="text-xs font-semibold text-brand-navy mb-4">
                  {brand.tagline}
                </p>

                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    <span className="font-bold text-charcoal">Roles Supported: </span>
                    {brand.rolesFilled}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-medium text-charcoal-light">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Staffing Scope</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Legal Compliance & Disclaimers */}
        <div className="p-7 rounded-2xl bg-surface-muted border border-slate-200/90 text-left mb-16 space-y-3">
          <div className="flex items-center gap-2 text-charcoal font-bold text-sm">
            <Info className="w-4 h-4 text-brand-navy" />
            <span>Official Attribution & Compliance Policy</span>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            {brandExperienceData.disclaimer}
          </p>
          <p className="text-xs text-charcoal-light leading-relaxed">
            PINCOF operates as an independent recruitment and staffing service provider. References to corporate names, retail outlets, or trademarks on this website are intended solely to describe recruitment engagements and candidate sourcing experience. PINCOF does not act as an official franchisor, franchise broker, or exclusive brand representative unless formal contractual agreements are explicitly established.
          </p>
        </div>

        {/* Action Banner */}
        <div className="bg-surface-muted rounded-2xl border border-surface-border p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal">
              Need proven staffing support for your business?
            </h3>
            <p className="text-sm text-charcoal-muted mt-1.5 max-w-xl">
              Connect with our recruitment team to evaluate candidate profiles suited for your brand standards.
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
