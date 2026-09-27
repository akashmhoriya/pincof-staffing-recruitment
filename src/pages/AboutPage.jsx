import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { siteImages } from '../data/images';
import { Shield, Users, CheckCircle2, ArrowRight, Building, Award } from 'lucide-react';

export default function AboutPage() {
  const context = useOutletContext();
  const onOpenHiringModal = context?.onOpenHiringModal;

  return (
    <div className="bg-white min-h-screen pb-20">
      <PageHeader
        eyebrow="CORPORATE PROFILE"
        title="About PINCOF"
        description="Professional staffing and recruitment solutions designed for retail stores, cafes, restaurants, franchise operators, and growing companies."
        badgeIcon={Shield}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Main Editorial 2-Col Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Text */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider block">
              OUR MISSION & FOCUS
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight leading-tight">
              Recruitment Support Built for Dependable Business Operations
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-charcoal-muted leading-relaxed">
              <p>
                PINCOF provides staffing and recruitment support for businesses that need dependable people across customer-facing, retail and operational roles.
              </p>
              <p>
                Our experience spans multiple business categories, including retail, fashion, food & beverage and franchise operations.
              </p>
              <p>
                Our focus is simple: understand the requirement, identify suitable candidates and support the hiring process professionally.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/request-hiring"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-sm shadow-md transition-all group"
              >
                <span>Partner With Us For Hiring</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/4.5] bg-slate-100">
              <img
                src={siteImages.aboutTeam}
                alt="PINCOF recruitment consultation and professional team"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>

        {/* Operational Values */}
        <div className="bg-surface-muted rounded-3xl border border-surface-border p-8 sm:p-12 mb-16 text-left">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-brand-navy uppercase tracking-wider block mb-2">
              WHAT SETS OUR APPROACH APART
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
              A Direct, Practical Recruitment Standard
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80">
              <h4 className="font-bold text-charcoal text-base mb-2">Ground-Level Understanding</h4>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                We understand that retail and hospitality require punctuality, shift endurance, and clean customer interaction. We screen with these daily realities in mind.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80">
              <h4 className="font-bold text-charcoal text-base mb-2">Respect For Employer Time</h4>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Rather than forwarding dozens of unverified resumes, we prioritize shortlisted candidates who match your role criteria and salary bandwidth.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80">
              <h4 className="font-bold text-charcoal text-base mb-2">Responsible Partnerships</h4>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                We operate strictly within our expertise in staffing and recruitment, maintaining transparent communication and ethical recruitment practices.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal">
              Need to build your workplace team?
            </h3>
            <p className="text-sm text-charcoal-muted mt-1.5 max-w-xl">
              Share your hiring requirements and discover how our structured recruitment process supports your business growth.
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
