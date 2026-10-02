import React from 'react';
import PageHeader from '../components/PageHeader';
import MagneticButton from '../components/MagneticButton';
import { ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DisclaimerPage() {
  return (
    <div className="bg-white min-h-screen pb-24 text-left">
      <PageHeader
        eyebrow="LEGAL NOTICES"
        title="Disclaimer & Terms of Reference"
        description="Important business positioning and regulatory disclosures regarding PINCOF recruitment and staffing services."
        badgeIcon={ShieldAlert}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-left space-y-8">
        
        {/* Section 1: Staffing Scope */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFA] border border-black/[0.07] space-y-3">
          <h2 className="font-display text-xl font-bold text-charcoal">1. Staffing and Recruitment Scope</h2>
          <p className="text-sm text-charcoal/70 leading-relaxed font-normal">
            PINCOF is an independent professional staffing and recruitment agency. Our services consist of sourcing, screening, and shortlisting candidate profiles for commercial enterprises, retail stores, restaurants, cafes, and business operations based on client-provided job descriptions and role specifications.
          </p>
        </div>

        {/* Section 2: Non-Franchise Seller Policy */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFA] border border-black/[0.07] space-y-3">
          <h2 className="font-display text-xl font-bold text-charcoal">2. Non-Franchise Broker Policy</h2>
          <p className="text-sm text-charcoal/70 leading-relaxed font-normal">
            <strong className="font-bold text-charcoal">PINCOF is NOT a franchise seller, broker, franchisor, or business reseller.</strong> PINCOF does not sell franchise licenses, collect franchise royalties, or facilitate franchise investments. Any staffing support rendered to franchise-operated business locations is strictly confined to employee recruitment and human resource sourcing for those respective store operators.
          </p>
        </div>

        {/* Section 3: Brand References & Intellectual Property */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFA] border border-black/[0.07] space-y-3">
          <h2 className="font-display text-xl font-bold text-charcoal">3. Brand References and Trademarks</h2>
          <p className="text-sm text-charcoal/70 leading-relaxed font-normal">
            Brand names, logos, or commercial trademarks mentioned on this website (such as Starbucks, Levi's, Peter England, Allen Solly, NATUF, and others) are displayed exclusively to describe past or relevant hiring requirements and candidate sourcing experience supported by our recruitment specialists.
          </p>
          <p className="text-sm text-charcoal/70 leading-relaxed font-normal">
            Display of these trademarks does not constitute or imply official ownership, endorsement, exclusive recruitment rights, master franchisor status, or direct parent-company affiliation unless explicitly stated under a formal mutual contract.
          </p>
        </div>

        {/* Section 4: Employer Responsibility */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFA] border border-black/[0.07] space-y-3">
          <h2 className="font-display text-xl font-bold text-charcoal">4. Final Selection & Employment Discretion</h2>
          <p className="text-sm text-charcoal/70 leading-relaxed font-normal">
            While PINCOF conducts preliminary candidate vetting according to agreed role benchmarks, final hiring decisions, employment terms, compensation packages, background verifications, and statutory employer compliances remain the sole discretion and responsibility of the hiring employer.
          </p>
        </div>

        <div className="pt-6 text-center">
          <MagneticButton strength={0.2}>
            <Link
              to="/request-hiring"
              data-cursor-label="HIRE"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-red hover:bg-brand-red-dark text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-glow-red transition-all duration-300 group"
            >
              <span>Proceed to Request Hiring Support</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </MagneticButton>
        </div>

      </div>
    </div>
  );
}
