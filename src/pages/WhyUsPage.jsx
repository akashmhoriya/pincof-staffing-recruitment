import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { whyUsData } from '../data/whyUs';
import { Target, Briefcase, TrendingUp, CheckCircle2, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

const iconMap = {
  Target,
  Briefcase,
  TrendingUp,
  CheckCircle2,
  MessageSquare
};

export default function WhyUsPage() {
  const context = useOutletContext();
  const onOpenHiringModal = context?.onOpenHiringModal;

  return (
    <div className="bg-surface-muted min-h-screen pb-20">
      <PageHeader
        eyebrow="OUR PRINCIPLES"
        title="Why Businesses Choose Our Hiring Support"
        description="Practical, honest, and disciplined recruitment practices designed to build dependable workplace teams without exaggerated marketing promises."
        badgeIcon={ShieldCheck}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* 5 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-left">
          {whyUsData.features.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Target;
            const isWide = idx === 3 || idx === 4;

            return (
              <div
                key={feature.id}
                className={`bg-white rounded-3xl border border-surface-border p-8 flex flex-col justify-between h-full shadow-subtle hover:shadow-premium hover:-translate-y-1 hover:border-brand-red/30 transition-all duration-300 ${
                  isWide ? 'lg:col-span-1.5' : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-navy-light text-brand-navy flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-brand-red" />
                  </div>

                  <h3 className="text-xl font-bold text-charcoal mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-sm font-medium text-charcoal-muted mb-3 leading-relaxed">
                    {feature.description}
                  </p>

                  <p className="text-xs text-charcoal-light leading-relaxed">
                    {feature.caption}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-red" />
                  <span className="text-[11px] font-semibold text-charcoal-light uppercase tracking-wider">
                    Core Operational Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* What We Stand For vs What We Avoid */}
        <div className="bg-white rounded-3xl border border-surface-border p-8 sm:p-12 mb-16 text-left">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider block mb-2">
              TRANSPARENCY IN RECRUITMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
              Honest Partnerships Over Inflated Marketing
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted mt-2">
              We believe lasting client relationships come from fulfilling commitments, screening carefully, and respecting both employer standards and candidate dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <h4 className="font-bold text-charcoal text-base flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>What You Can Always Expect</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-charcoal-muted">
                <li>• Clear consultation on realistic salary benchmarks and local talent availability.</li>
                <li>• Transparent communication on candidate strengths and areas of development.</li>
                <li>• Structured scheduling that respects your store manager's operational hours.</li>
                <li>• Proactive follow-ups to ensure selected candidates show up on day one.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <h4 className="font-bold text-charcoal text-base flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-red" />
                <span>What We Never Do</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-charcoal-muted">
                <li>• We do not promise artificial "100% placement guarantees" or exaggerated numbers.</li>
                <li>• We do not push mismatched resumes simply to meet arbitrary submission quotas.</li>
                <li>• We do not misrepresent franchise rights or claim unearned corporate affiliations.</li>
                <li>• We do not charge hidden fees or surprise costs.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal">
              Experience the difference in recruitment support.
            </h3>
            <p className="text-sm text-charcoal-muted mt-1.5 max-w-xl">
              Discuss your hiring requirements with our team and let us build a dependable workforce for your business.
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
