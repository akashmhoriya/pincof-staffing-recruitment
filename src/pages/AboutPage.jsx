import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import RevealImage from '../components/RevealImage';
import MagneticButton from '../components/MagneticButton';
import { siteImages } from '../data/images';
import { directorsData, coreTeamData } from '../data/team';
import { Shield, ArrowRight, Mail, CheckCircle2, Award } from 'lucide-react';
import { getEmailLink, handleEmailClick } from '../utils/email';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function LinkedInIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function AboutPage() {
  const leadershipSectionRef = useRef(null);
  const teamSectionRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Leadership Section Coordinated Master Timeline
      const leadTl = gsap.timeline({
        scrollTrigger: {
          trigger: leadershipSectionRef.current,
          start: 'top 82%',
          once: true,
        },
      });

      leadTl
        .fromTo(
          '.director-eyebrow',
          { opacity: 0, y: 12, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out' }
        )
        .fromTo(
          '.director-title-line',
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            clearProps: 'transform',
          },
          '-=0.3'
        )
        .fromTo(
          '.director-desc',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', clearProps: 'transform' },
          '-=0.4'
        )
        .fromTo(
          '.director-card',
          { opacity: 0, y: 35, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.14,
            ease: 'power3.out',
            clearProps: 'all',
          },
          '-=0.35'
        )
        .fromTo(
          '.director-avatar-img',
          { scale: 1.15 },
          { scale: 1, duration: 0.9, stagger: 0.14, ease: 'power2.out', clearProps: 'transform' },
          '-=0.6'
        );

      // 2. Animated Divider Line
      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: dividerRef.current,
            start: 'top 88%',
            once: true,
          },
        }
      );

      // 3. Core Team Section Coordinated Master Timeline
      const teamTl = gsap.timeline({
        scrollTrigger: {
          trigger: teamSectionRef.current,
          start: 'top 82%',
          once: true,
        },
      });

      teamTl
        .fromTo(
          '.team-eyebrow',
          { opacity: 0, y: 12, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out' }
        )
        .fromTo(
          '.team-title-line',
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            clearProps: 'transform',
          },
          '-=0.3'
        )
        .fromTo(
          '.team-desc',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', clearProps: 'transform' },
          '-=0.4'
        )
        .fromTo(
          '.team-member-card',
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.06,
            ease: 'power3.out',
            clearProps: 'all',
          },
          '-=0.35'
        )
        .fromTo(
          '.team-badge-pill',
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.06,
            ease: 'back.out(1.5)',
            clearProps: 'transform',
          },
          '-=0.35'
        );
    });

    return () => ctx.revert();
  }, []);

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
              <MagneticButton strength={0.2} className="block sm:inline-block w-full sm:w-auto">
                <Link
                  to="/request-hiring"
                  data-cursor-label="PARTNER"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 sm:py-4 rounded-full bg-brand-red hover:bg-brand-red-dark text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-glow-red transition-all duration-300 group text-center"
                >
                  <span>Partner With Us For Hiring</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
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

        {/* Leadership & Directors Section */}
        <section ref={leadershipSectionRef} className="mb-24 text-left">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="director-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/5 border border-brand-red/10 text-brand-red text-[11px] font-bold tracking-widest uppercase shadow-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              <span>LEADERSHIP & GOVERNANCE</span>
            </div>

            {/* Kinetic Line-Masked Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight leading-[1.12]">
              <div className="overflow-hidden">
                <span className="director-title-line block will-change-transform">
                  Guided by Experienced
                </span>
              </div>
              <div className="overflow-hidden mt-1">
                <span className="director-title-line block will-change-transform text-brand-red">
                  Directors & Advisors.
                </span>
              </div>
            </h2>

            <p className="director-desc text-base sm:text-lg text-charcoal/70 leading-relaxed font-normal pt-2">
              Our directors combine decades of frontline staffing execution with strategic workforce planning across enterprise retail and hospitality brands.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {directorsData.map((director) => (
              <div
                key={director.id}
                className="director-card group rounded-3xl bg-white border border-black/[0.08] hover:border-brand-red/40 p-6 sm:p-8 lg:p-9 transition-all duration-300 hover:shadow-premium-hover hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden relative"
              >
                {/* Subtle Hover Gradient Flare */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-red/[0.03] rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-stretch gap-6 sm:gap-7 mb-6">
                  {/* Stately Executive Portrait (Dominant in both mobile and desktop) */}
                  <div className="relative w-full max-w-[280px] sm:max-w-none sm:w-48 md:w-52 lg:w-48 xl:w-56 aspect-[3/4] sm:aspect-auto sm:self-stretch rounded-2xl overflow-hidden shadow-lg border border-black/[0.08] bg-slate-100 group/avatar shrink-0">
                    <img
                      src={director.image}
                      alt={director.name}
                      className="director-avatar-img w-full h-full object-cover object-top group-hover/avatar:scale-105 transition-transform duration-500 will-change-transform"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[10px] font-bold uppercase tracking-wider drop-shadow-sm pointer-events-none">
                      <span className="bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                        Executive Board
                      </span>
                    </div>
                  </div>

                  {/* Director Details & Credentials */}
                  <div className="flex-1 flex flex-col justify-between text-left">
                    <div className="space-y-2.5">
                      <div className="space-y-1">
                        <span className="inline-block text-[11px] font-bold text-brand-red uppercase tracking-wider">
                          {director.role}
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal leading-tight">
                          {director.name}
                        </h3>
                        <p className="text-xs font-medium text-charcoal/60">
                          {director.focus}
                        </p>
                      </div>

                      <div className="pt-1">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-charcoal/80 bg-slate-50 border border-black/[0.08] px-3 py-1 rounded-full shadow-subtle group-hover:border-brand-red/20 transition-colors">
                          <Award className="w-3.5 h-3.5 text-brand-red shrink-0" />
                          <span>{director.experience}</span>
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal pt-1">
                        {director.bio}
                      </p>

                      {/* Core Specialties Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {director.specialties.map((spec, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-medium text-charcoal/80 bg-slate-50 border border-black/[0.06] px-2.5 py-0.5 rounded-full shadow-subtle group-hover:bg-brand-navy-light group-hover:text-brand-navy transition-colors duration-200"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="relative z-10 pt-4 mt-auto border-t border-black/[0.06] flex items-center justify-between">
                  <span className="text-xs text-charcoal/50 font-medium">Direct Touchpoint</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={getEmailLink({
                        email: director.email,
                        subject: `Inquiry for ${director.name} - PINCOF Leadership`,
                      })}
                      onClick={(e) =>
                        handleEmailClick(e, {
                          email: director.email,
                          subject: `Inquiry for ${director.name} - PINCOF Leadership`,
                        })
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal hover:text-brand-red transition-colors px-3 py-1.5 rounded-full bg-slate-50 hover:bg-white border border-black/[0.08] shadow-subtle cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5 text-brand-red" />
                      <span className="truncate max-w-[140px] sm:max-w-[170px]">{director.email}</span>
                    </a>
                    <a
                      href={director.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${director.name} LinkedIn`}
                      className="w-8 h-8 rounded-full bg-slate-50 hover:bg-brand-navy hover:text-white border border-black/[0.08] flex items-center justify-center text-charcoal transition-all shadow-subtle shrink-0"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Animated Editorial Divider Line */}
        <div className="py-6 flex items-center justify-center my-10">
          <div
            ref={dividerRef}
            className="w-full h-px bg-gradient-to-r from-transparent via-black/15 to-transparent relative origin-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-charcoal/40">
                FIELD SPECIALISTS
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
            </div>
          </div>
        </div>

        {/* Core Team & Sector Leads Section */}
        <section ref={teamSectionRef} className="mb-24 text-left">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="team-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-[11px] font-bold tracking-widest uppercase shadow-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-navy animate-pulse" />
              <span>SPECIALIZED RECRUITMENT TEAM</span>
            </div>

            {/* Kinetic Line-Masked Headline */}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight leading-[1.15]">
              <div className="overflow-hidden">
                <span className="team-title-line block will-change-transform">
                  Domain Experts Dedicated to
                </span>
              </div>
              <div className="overflow-hidden mt-1">
                <span className="team-title-line block will-change-transform text-brand-navy">
                  Your Immediate Hiring Needs.
                </span>
              </div>
            </h2>

            <p className="team-desc text-sm sm:text-base text-charcoal/70 leading-relaxed font-normal pt-2">
              Our placement specialists work directly inside sector-specific pipelines to ensure strict candidate vetting, faster interview turnaround, and zero mismatch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeamData.map((member) => (
              <div
                key={member.id}
                className="team-member-card group bg-white rounded-3xl border border-black/[0.08] hover:border-brand-navy/40 p-6 flex flex-col justify-between hover:shadow-premium-hover hover:-translate-y-1.5 transition-all duration-300 overflow-hidden relative"
              >
                {/* Subtle Hover Gradient Flare */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-navy/[0.03] rounded-bl-full pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                <div>
                  {/* Compact Specialist Avatar Frame & Department Tag */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden bg-slate-100 border border-black/[0.08] shadow-sm group/pic shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover/pic:scale-105 transition-transform duration-500 will-change-transform"
                        loading="lazy"
                      />
                    </div>

                    <div className="text-right">
                      <span className="team-badge-pill inline-block bg-brand-navy/5 text-brand-navy px-2.5 py-1 rounded-full border border-brand-navy/10 text-[10px] font-bold uppercase tracking-wider">
                        {member.department}
                      </span>
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-charcoal text-lg group-hover:text-brand-navy transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-xs font-semibold text-brand-red mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-xs text-charcoal/60 mt-2.5 leading-relaxed font-normal">
                    {member.focus}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-black/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-medium text-emerald-600 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Active Lead</span>
                  </span>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="w-7 h-7 rounded-full bg-slate-50 hover:bg-brand-navy hover:text-white flex items-center justify-center text-charcoal/60 transition-colors shadow-subtle"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

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
        <div className="bg-white rounded-3xl border border-black/[0.08] p-6 sm:p-10 lg:p-12 shadow-premium flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8 text-left">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
              Need to build your workplace team?
            </h3>
            <p className="text-sm sm:text-base text-charcoal/70 mt-2 font-normal leading-relaxed">
              Share your hiring requirements and discover how our structured recruitment process supports your business growth.
            </p>
          </div>

          <MagneticButton strength={0.2} className="block sm:inline-block w-full sm:w-auto shrink-0 pt-2 lg:pt-0">
            <Link
              to="/request-hiring"
              data-cursor-label="HIRE"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 sm:py-4 rounded-full bg-brand-red hover:bg-brand-red-dark text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-glow-red transition-all duration-300 group text-center"
            >
              <span>Request Hiring Support</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
            </Link>
          </MagneticButton>
        </div>

      </div>
    </div>
  );
}
