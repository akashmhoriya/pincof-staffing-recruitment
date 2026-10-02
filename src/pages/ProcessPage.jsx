import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import MagneticButton from '../components/MagneticButton';
import { processData } from '../data/process';
import { GitCommit, ArrowRight, Clock, Users, Shield } from 'lucide-react';

export default function ProcessPage() {
  return (
    <div className="bg-white min-h-screen pb-24 text-left">
      <PageHeader
        eyebrow="RECRUITMENT WORKFLOW"
        title="A Simple, Structured Hiring Process"
        description="A disciplined 4-step recruitment workflow designed to minimize employer operational overhead while providing vetted, dependable talent."
        badgeIcon={GitCommit}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        
        {/* Step Breakdown Cards */}
        <div className="space-y-8 mb-20 text-left">
          {processData.steps.map((step, index) => (
            <div
              key={step.step}
              className="bg-[#FAFAFA] rounded-3xl border border-black/[0.07] p-8 sm:p-12 transition-all duration-300 hover:border-black/15 hover:shadow-subtle"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-2">
                  <span className="font-display text-5xl sm:text-7xl font-black text-brand-red tracking-tighter">
                    {step.step}
                  </span>
                  <span className="block text-[11px] font-bold text-brand-navy uppercase tracking-widest mt-1">
                    Step {index + 1} of 4
                  </span>
                </div>

                <div className="lg:col-span-6 space-y-2.5">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="text-base text-charcoal/70 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-black/[0.06] shadow-subtle">
                  <span className="block text-[11px] font-bold text-brand-red uppercase tracking-widest mb-1.5">
                    What Happens Here:
                  </span>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
                    {step.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Standards Guarantee */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-20 text-left">
          <div className="p-8 rounded-3xl bg-white border border-black/[0.07] shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-brand-red-light text-brand-red flex items-center justify-center mb-5">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-bold text-charcoal mb-2">Swift Intake</h4>
            <p className="text-sm text-charcoal/70 leading-relaxed font-normal">
              Requirements are acknowledged and reviewed with role specifications confirmed within 24 to 48 business hours.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/[0.07] shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-brand-navy-light text-brand-navy flex items-center justify-center mb-5">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-bold text-charcoal mb-2">Pre-Screened Profiles</h4>
            <p className="text-sm text-charcoal/70 leading-relaxed font-normal">
              Every resume presented has undergone preliminary checks on availability, prior work history, and role-specific criteria.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/[0.07] shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-charcoal flex items-center justify-center mb-5">
              <Users className="w-6 h-6 text-brand-red" />
            </div>
            <h4 className="font-display text-lg font-bold text-charcoal mb-2">Employer Interview Control</h4>
            <p className="text-sm text-charcoal/70 leading-relaxed font-normal">
              Final selection and hiring decisions remain 100% in your hands. We coordinate scheduling and handle candidate communication.
            </p>
          </div>
        </div>

        {/* Start Step 01 CTA */}
        <div className="bg-[#FAFAFA] rounded-3xl border border-black/[0.08] p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 text-left">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
              Ready to start Step 01?
            </h3>
            <p className="text-base text-charcoal/70 mt-2 font-normal">
              Submit your role details through our intake form or speak directly with our recruitment coordinator.
            </p>
          </div>

          <MagneticButton strength={0.2}>
            <Link
              to="/request-hiring"
              data-cursor-label="START"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-red hover:bg-brand-red-dark text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-glow-red transition-all duration-300 shrink-0 group"
            >
              <span>Start Step 01: Share Requirement</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </MagneticButton>
        </div>

      </div>
    </div>
  );
}
