import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import MagneticButton from '../components/MagneticButton';
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
  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-24 text-left">
      <PageHeader
        eyebrow="OUR PRINCIPLES"
        title="Why Businesses Choose Our Hiring Support"
        description="Practical, honest, and disciplined recruitment practices designed to build dependable workplace teams without exaggerated marketing promises."
        badgeIcon={ShieldCheck}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        
        {/* 5 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20 text-left">
          {whyUsData.features.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Target;
            const isWide = idx === 3 || idx === 4;

            return (
              <div
                key={feature.id}
                className={`bg-white rounded-3xl border border-black/[0.07] p-8 sm:p-9 flex flex-col justify-between h-full shadow-subtle hover:shadow-premium hover:-translate-y-1.5 hover:border-brand-red/30 transition-all duration-300 ${
                  isWide ? 'lg:col-span-1.5' : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-black/[0.06] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-brand-red" />
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-charcoal/80 mb-3 leading-relaxed font-normal">
                    {feature.description}
                  </p>

                  <p className="text-xs text-charcoal/50 leading-relaxed font-normal">
                    {feature.caption}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-red" />
                  <span className="text-[10px] font-bold text-charcoal/50 uppercase tracking-widest">
                    Core Operational Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* What We Stand For vs What We Avoid */}
        <div className="bg-white rounded-3xl border border-black/[0.08] p-8 sm:p-14 mb-20 text-left shadow-subtle">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[11px] font-bold tracking-widest text-brand-red uppercase block">
              TRANSPARENCY IN RECRUITMENT
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
              Honest Partnerships Over Inflated Marketing
            </h2>
            <p className="text-base text-charcoal/70 pt-1 font-normal">
              We believe lasting client relationships come from fulfilling commitments, screening carefully, and respecting both employer standards and candidate dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-black/[0.06] space-y-4">
              <h4 className="font-display font-bold text-charcoal text-lg flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>What You Can Always Expect</span>
              </h4>
              <ul className="space-y-3 text-sm text-charcoal/70 font-normal">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Clear consultation on realistic salary benchmarks and local talent availability.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Transparent communication on candidate strengths and areas of development.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Structured scheduling that respects your store manager's operational hours.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Proactive follow-ups to ensure selected candidates show up on day one.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-black/[0.06] space-y-4">
              <h4 className="font-display font-bold text-charcoal text-lg flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-brand-red" />
                <span>What We Never Do</span>
              </h4>
              <ul className="space-y-3 text-sm text-charcoal/70 font-normal">
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-red font-bold">•</span>
                  <span>We do not promise artificial "100% placement guarantees" or exaggerated numbers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-red font-bold">•</span>
                  <span>We do not push mismatched resumes simply to meet arbitrary submission quotas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-red font-bold">•</span>
                  <span>We do not misrepresent franchise rights or claim unearned corporate affiliations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-red font-bold">•</span>
                  <span>We do not charge hidden fees or surprise costs.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-white rounded-3xl border border-black/[0.08] p-8 sm:p-12 shadow-premium flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 text-left">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
              Experience the difference in recruitment support.
            </h3>
            <p className="text-base text-charcoal/70 mt-2 font-normal">
              Discuss your hiring requirements with our team and let us build a dependable workforce for your business.
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
