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
    <div className="bg-white min-h-screen pb-24 text-left">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 text-left">
          <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-black/[0.07] shadow-subtle">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 mb-3" />
            <h4 className="font-display font-bold text-charcoal text-base mb-1.5">Confidential Handling</h4>
            <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
              Your recruitment requirements, expansion plans, and company details are kept strictly private.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-black/[0.07] shadow-subtle">
            <Clock className="w-6 h-6 text-brand-navy mb-3" />
            <h4 className="font-display font-bold text-charcoal text-base mb-1.5">24-Hour Response</h4>
            <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
              Our recruitment team assesses role criteria and provides intake feedback within 1 business day.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-black/[0.07] shadow-subtle">
            <ShieldCheck className="w-6 h-6 text-brand-red mb-3" />
            <h4 className="font-display font-bold text-charcoal text-base mb-1.5">Pre-Screened Candidates</h4>
            <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
              Only candidates meeting verified benchmarks and shift availability are presented for interviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
