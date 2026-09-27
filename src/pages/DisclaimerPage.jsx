import React from 'react';
import PageHeader from '../components/PageHeader';
import { ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DisclaimerPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      <PageHeader
        eyebrow="LEGAL NOTICES"
        title="Disclaimer & Terms of Reference"
        description="Important business positioning and regulatory disclosures regarding PINCOF recruitment and staffing services."
        badgeIcon={ShieldAlert}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-left space-y-10">
        
        {/* Section 1: Staffing Scope */}
        <div className="p-8 rounded-3xl bg-surface-muted border border-surface-border space-y-4">
          <h2 className="text-xl font-bold text-charcoal">1. Staffing and Recruitment Scope</h2>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            PINCOF is an independent professional staffing and recruitment agency. Our services consist of sourcing, screening, and shortlisting candidate profiles for commercial enterprises, retail stores, restaurants, cafes, and business operations based on client-provided job descriptions and role specifications.
          </p>
        </div>

        {/* Section 2: Non-Franchise Seller Policy */}
        <div className="p-8 rounded-3xl bg-surface-muted border border-surface-border space-y-4">
          <h2 className="text-xl font-bold text-charcoal">2. Non-Franchise Broker Policy</h2>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            <strong>PINCOF is NOT a franchise seller, broker, franchisor, or business reseller.</strong> PINCOF does not sell franchise licenses, collect franchise royalties, or facilitate franchise investments. Any staffing support rendered to franchise-operated business locations is strictly confined to employee recruitment and human resource sourcing for those respective store operators.
          </p>
        </div>

        {/* Section 3: Brand References & Intellectual Property */}
        <div className="p-8 rounded-3xl bg-surface-muted border border-surface-border space-y-4">
          <h2 className="text-xl font-bold text-charcoal">3. Brand References and Trademarks</h2>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            Brand names, logos, or commercial trademarks mentioned on this website (such as Starbucks, Levi's, Peter England, Allen Solly, NATUF, and others) are displayed exclusively to describe past or relevant hiring requirements and candidate sourcing experience supported by our recruitment specialists.
          </p>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            Display of these trademarks does not constitute or imply official ownership, endorsement, exclusive recruitment rights, master franchisor status, or direct parent-company affiliation unless explicitly stated under a formal mutual contract.
          </p>
        </div>

        {/* Section 4: Employer Responsibility */}
        <div className="p-8 rounded-3xl bg-surface-muted border border-surface-border space-y-4">
          <h2 className="text-xl font-bold text-charcoal">4. Final Selection & Employment Discretion</h2>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            While PINCOF conducts preliminary candidate vetting according to agreed role benchmarks, final hiring decisions, employment terms, compensation packages, background verifications, and statutory employer compliances remain the sole discretion and responsibility of the hiring employer.
          </p>
        </div>

        <div className="pt-4 text-center">
          <Link
            to="/request-hiring"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-sm shadow-md transition-all"
          >
            <span>Proceed to Request Hiring Support</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
