import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import RevealImage from '../components/RevealImage';
import MagneticButton from '../components/MagneticButton';
import { siteImages } from '../data/images';
import { Shield, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pb-24 text-left">
      <PageHeader
        eyebrow="CORPORATE PROFILE"
        title="About PINCOF"
        description="Professional staffing and recruitment solutions designed for retail stores, cafes, restaurants, franchise operators, and growing companies."
        badgeIcon={Shield}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        
        {/* Main Editorial 2-Col Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-18 items-center mb-24">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-7">
            <span className="text-[11px] font-bold tracking-widest text-brand-red uppercase block">
              OUR MISSION & FOCUS
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight leading-[1.12]">
              Recruitment Support Built for Dependable Business Operations
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-charcoal/70 leading-relaxed font-normal">
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
              <MagneticButton strength={0.2}>
                <Link
                  to="/request-hiring"
                  data-cursor-label="PARTNER"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-red hover:bg-brand-red-dark text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-glow-red transition-all duration-300 group"
                >
                  <span>Partner With Us For Hiring</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
            </div>
          </div>

          {/* Right Image with Curtain Reveal */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-black/[0.08] aspect-[4/4.8] bg-slate-100">
              <RevealImage
                src={siteImages.aboutTeam}
                alt="PINCOF recruitment consultation and professional team"
                aspectRatio="aspect-full h-full"
                parallax={true}
              />
            </div>
          </div>

        </div>

        {/* Operational Values */}
        <div className="bg-[#FAFAFA] rounded-3xl border border-black/[0.07] p-8 sm:p-14 mb-20 text-left">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[11px] font-bold tracking-widest text-brand-navy uppercase block">
              WHAT SETS OUR APPROACH APART
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
              A Direct, Practical Recruitment Standard
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-black/[0.06] shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
              <h4 className="font-display font-bold text-charcoal text-lg mb-3">Ground-Level Understanding</h4>
              <p className="text-sm text-charcoal/70 leading-relaxed font-normal">
                We understand that retail and hospitality require punctuality, shift endurance, and clean customer interaction. We screen with these daily realities in mind.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-black/[0.06] shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
              <h4 className="font-display font-bold text-charcoal text-lg mb-3">Respect For Employer Time</h4>
              <p className="text-sm text-charcoal/70 leading-relaxed font-normal">
                Rather than forwarding dozens of unverified resumes, we prioritize shortlisted candidates who match your role criteria and salary bandwidth.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-black/[0.06] shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
              <h4 className="font-display font-bold text-charcoal text-lg mb-3">Responsible Partnerships</h4>
              <p className="text-sm text-charcoal/70 leading-relaxed font-normal">
                We operate strictly within our expertise in staffing and recruitment, maintaining transparent communication and ethical recruitment practices.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-white rounded-3xl border border-black/[0.08] p-8 sm:p-12 shadow-premium flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 text-left">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
              Need to build your workplace team?
            </h3>
            <p className="text-base text-charcoal/70 mt-2 font-normal">
              Share your hiring requirements and discover how our structured recruitment process supports your business growth.
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
