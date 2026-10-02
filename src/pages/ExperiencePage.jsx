import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ExperienceStrip from '../components/ExperienceStrip';
import MagneticButton from '../components/MagneticButton';
import { brandExperienceData } from '../data/brands';
import BrandLogo from '../components/BrandLogo';
import { Award, Info, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ExperiencePage() {
  return (
    <div className="bg-white min-h-screen pb-24 text-left">
      <PageHeader
        eyebrow="SELECTED HIRING EXPERIENCE"
        title="Brands & Businesses We've Supported"
        description="Our experience includes fulfilling hiring and recruitment requirements across multiple brands, franchise businesses, and retail operations."
        badgeIcon={Award}
      />

      {/* Infinite Horizontal Marquee Strip */}
      <ExperienceStrip showHeader={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        
        {/* Detailed Brand Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-20 text-left">
          {brandExperienceData.brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-3xl border border-black/[0.07] p-8 hover:border-black/20 hover:shadow-premium hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAFAFA] border border-black/[0.06] p-2 flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105">
                    <BrandLogo id={brand.id} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[10px] font-bold text-charcoal/50 uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100">
                    {brand.category}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-charcoal tracking-tight mb-2">
                  {brand.name}
                </h3>

                <p className="text-xs font-semibold text-brand-navy mb-5">
                  {brand.tagline}
                </p>

                <div className="pt-4 border-t border-black/[0.05]">
                  <p className="text-sm text-charcoal/70 leading-relaxed font-normal">
                    <span className="font-bold text-charcoal">Roles Supported: </span>
                    {brand.rolesFilled}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-black/[0.05] flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified Staffing Scope</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Legal Compliance & Disclaimers */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFA] border border-black/[0.07] text-left mb-20 space-y-3.5">
          <div className="flex items-center gap-2.5 text-charcoal font-bold text-sm">
            <Info className="w-4 h-4 text-brand-navy" />
            <span className="font-display tracking-tight text-base">Official Attribution & Compliance Policy</span>
          </div>
          <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-medium">
            {brandExperienceData.disclaimer}
          </p>
          <p className="text-xs text-charcoal/50 leading-relaxed font-normal">
            PINCOF operates as an independent recruitment and staffing service provider. References to corporate names, retail outlets, or trademarks on this website are intended solely to describe recruitment engagements and candidate sourcing experience. PINCOF does not act as an official franchisor, franchise broker, or exclusive brand representative unless formal contractual agreements are explicitly established.
          </p>
        </div>

        {/* Action Banner */}
        <div className="bg-white rounded-3xl border border-black/[0.08] p-8 sm:p-12 shadow-premium flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 text-left">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
              Need proven staffing support for your business?
            </h3>
            <p className="text-base text-charcoal/70 mt-2 font-normal">
              Connect with our recruitment team to evaluate candidate profiles suited for your brand standards.
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
