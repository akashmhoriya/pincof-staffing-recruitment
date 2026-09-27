import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { processData } from '../data/process';
import { GitCommit, ArrowRight, CheckCircle2, Clock, Users, Shield } from 'lucide-react';

export default function ProcessPage() {
  const context = useOutletContext();
  const onOpenHiringModal = context?.onOpenHiringModal;

  return (
    <div className="bg-white min-h-screen pb-20">
      <PageHeader
        eyebrow="RECRUITMENT WORKFLOW"
        title="A Simple, Structured Hiring Process"
        description="A disciplined 4-step recruitment workflow designed to minimize employer operational overhead while providing vetted, dependable talent."
        badgeIcon={GitCommit}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Step Breakdown Cards */}
        <div className="space-y-8 mb-16 text-left">
          {processData.steps.map((step, index) => (
            <div
              key={step.step}
              className="bg-surface-muted rounded-3xl border border-surface-border p-8 sm:p-10 transition-all hover:border-slate-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-2">
                  <span className="text-5xl sm:text-6xl font-black text-brand-red font-mono tracking-tighter">
                    {step.step}
                  </span>
                  <span className="block text-xs font-bold text-brand-navy uppercase tracking-wider mt-1">
                    Step {index + 1} of 4
                  </span>
                </div>

                <div className="lg:col-span-6 space-y-2">
                  <h3 className="text-2xl font-bold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="text-base text-charcoal-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-200/80">
                  <span className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5 text-brand-red">
                    What Happens Here:
                  </span>
                  <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Standards Guarantee */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          <div className="p-6 rounded-2xl bg-white border border-surface-border shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-brand-red-light text-brand-red flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-charcoal mb-1.5">Swift Intake</h4>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Requirements are acknowledged and reviewed with role specifications confirmed within 24 to 48 business hours.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-surface-border shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-brand-navy-light text-brand-navy flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-charcoal mb-1.5">Pre-Screened Profiles</h4>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Every resume presented has undergone preliminary checks on availability, prior work history, and role-specific criteria.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-surface-border shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-charcoal flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-brand-red" />
            </div>
            <h4 className="text-base font-bold text-charcoal mb-1.5">Employer Interview Control</h4>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Final selection and hiring decisions remain 100% in your hands. We coordinate scheduling and handle candidate communication.
            </p>
          </div>
        </div>

        {/* Start Step 01 CTA */}
        <div className="bg-surface-muted rounded-2xl border border-surface-border p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal">
              Ready to start Step 01?
            </h3>
            <p className="text-sm text-charcoal-muted mt-1.5 max-w-xl">
              Submit your role details through our intake form or speak directly with our recruitment coordinator.
            </p>
          </div>

          <Link
            to="/request-hiring"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-sm shadow-md transition-all shrink-0"
          >
            <span>Start Step 01: Share Your Requirement</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
