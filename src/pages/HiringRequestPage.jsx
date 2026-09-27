import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import HiringForm from '../components/HiringForm';
import { Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export default function HiringRequestPage() {
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get('role') || '';
  const initialIndustry = searchParams.get('industry') || '';

  return (
    <div className="bg-white min-h-screen pb-20">
      <PageHeader
        eyebrow="RECRUITMENT INTAKE"
        title="Tell Us What You Need"
        description="Submit your staffing requirements for retail stores, franchise outlets, cafes, restaurants, or business operations. Our recruitment desk will review and connect with you."
        badgeIcon={Send}
      />

      {/* Embedded Intake Form Section */}
      <HiringForm
        initialRequirement={initialRole}
        initialIndustry={initialIndustry}
      />

      {/* Trust & Security Notes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-2xl bg-surface-muted border border-surface-border">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
            <h4 className="font-bold text-charcoal text-sm mb-1">Confidential Handling</h4>
            <p className="text-xs text-charcoal-light leading-relaxed">
              Your recruitment requirements, expansion plans, and company details are kept strictly private.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-muted border border-surface-border">
            <Clock className="w-5 h-5 text-brand-navy mb-2" />
            <h4 className="font-bold text-charcoal text-sm mb-1">24-Hour Response</h4>
            <p className="text-xs text-charcoal-light leading-relaxed">
              Our recruitment team assesses role criteria and provides intake feedback within 1 business day.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-muted border border-surface-border">
            <ShieldCheck className="w-5 h-5 text-brand-red mb-2" />
            <h4 className="font-bold text-charcoal text-sm mb-1">Pre-Screened Candidates</h4>
            <p className="text-xs text-charcoal-light leading-relaxed">
              Only candidates meeting verified benchmarks and shift availability are presented for interviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
