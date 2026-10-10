import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import MagneticButton from '../components/MagneticButton';
import { processData } from '../data/process';
import { contactData } from '../data/contact';
import { GitCommit, ArrowRight, Clock, Users, Shield, PhoneCall } from 'lucide-react';

export default function ProcessPage() {
  return (
    <div className="bg-white min-h-screen pb-24 text-left">
      <PageHeader
        eyebrow="RECRUITMENT WORKFLOW"
        title="A Simple, Structured Hiring Process"
        description="A disciplined 4-step recruitment workflow designed to minimize employer operational overhead while providing vetted, dependable talent."
        badgeIcon={GitCommit}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        
        {/* Step Breakdown Cards */}
        <div className="space-y-6 sm:space-y-8 mb-16 sm:mb-20 text-left">
          {processData.steps.map((step, index) => (
            <div
              key={step.step}
              className="bg-[#FAFAFA] rounded-3xl border border-black/[0.07] p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-black/15 hover:shadow-subtle"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start md:items-center">
                
                {/* Left Column: Step Counter, Title & Description */}
                <div className="md:col-span-7 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-4xl sm:text-5xl font-black text-brand-red tracking-tight leading-none">
                      {step.step}
                    </span>
                    <div className="h-5 w-px bg-black/15" />
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white border border-black/[0.08] text-brand-navy text-[11px] font-bold uppercase tracking-wider shadow-2xs">
                      Step {index + 1} of 4
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal tracking-tight leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Right Column: Execution Details */}
                <div className="md:col-span-5 bg-white p-5 sm:p-6 rounded-2xl border border-black/[0.06] shadow-subtle">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                    <span className="text-[11px] font-bold text-brand-red uppercase tracking-wider">
                      What Happens Here
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
                    {step.details}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Process Standards Guarantee */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-16 sm:mb-20 text-left">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.07] shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-brand-red-light text-brand-red flex items-center justify-center mb-5">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-bold text-charcoal mb-2">Swift Intake</h4>
            <p className="text-sm text-charcoal/70 leading-relaxed font-normal">
              Requirements are acknowledged and reviewed with role specifications confirmed within 24 to 48 business hours.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.07] shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-brand-navy-light text-brand-navy flex items-center justify-center mb-5">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-bold text-charcoal mb-2">Pre-Screened Profiles</h4>
            <p className="text-sm text-charcoal/70 leading-relaxed font-normal">
              Every resume presented has undergone preliminary checks on availability, prior work history, and role-specific criteria.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.07] shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
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
        <div className="bg-[#FAFAFA] rounded-3xl border border-black/[0.08] p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.06] text-brand-red text-[11px] font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <GitCommit className="w-3.5 h-3.5" />
              <span>STEP 01 INTAKE</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
              Ready to start Step 01?
            </h3>
            <p className="text-sm sm:text-base text-charcoal/70 mt-2 font-normal leading-relaxed">
              Submit your role details through our intake form or speak directly with our recruitment coordinator.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0 pt-2 lg:pt-0">
            <MagneticButton strength={0.2} className="block sm:inline-block w-full sm:w-auto">
              <Link
                to="/request-hiring"
                data-cursor-label="START"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-brand-red hover:bg-brand-red-dark text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-glow-red transition-all duration-300 group cursor-pointer text-center"
              >
                <span>Start Step 01: Share Requirement</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.15} className="block sm:inline-block w-full sm:w-auto">
              <a
                href={`tel:${contactData.phone}`}
                data-cursor-label="CALL"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-xs font-bold uppercase tracking-wider text-charcoal hover:text-brand-red bg-white hover:bg-slate-50 border border-black/[0.08] shadow-subtle transition-all duration-200 text-center"
              >
                <PhoneCall className="w-4 h-4 text-brand-red shrink-0" />
                <span>Speak with Coordinator</span>
              </a>
            </MagneticButton>
          </div>
        </div>

      </div>
    </div>
  );
}
