import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/pincof-logo.png';
import { contactData } from '../data/contact';
import { ArrowUp, Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { getEmailLink, handleEmailClick } from '../utils/email';

export default function Footer({ onOpenHiringModal: _onOpenHiringModal }) {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#070A10] text-slate-300 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 border-t border-white/[0.08] text-left overflow-hidden">
      
      {/* Massive Editorial Watermark Typography */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] font-display font-black text-[18vw] tracking-tighter text-white leading-none whitespace-nowrap z-0">
        PINCOF
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid:
            Mobile: 2-column compact grid (Brand full-width, Desk full-width, Services & Industries 2-cols side-by-side, Explore 2-cols)
            Tablet (md:): 2 balanced rows of 12 cols (Row 1: Brand 6 + Desk 6 | Row 2: Services 4 + Industries 4 + Explore 4)
            Desktop (lg:): Single unified row of 12 cols (Brand 3 + Services 2 + Industries 2 + Explore 2 + Desk 3)
        */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 pb-10 sm:pb-12 lg:pb-16 border-b border-white/[0.08]">
          
          {/* 1. Brand Column */}
          <div className="col-span-2 md:col-span-6 lg:col-span-3 lg:order-1 space-y-4 sm:space-y-5">
            <Link
              to="/"
              data-cursor-label="HOME"
              className="inline-block bg-white p-2.5 sm:p-3 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={logoImg}
                alt="PINCOF Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            <div>
              <p className="font-display text-xs font-bold text-white tracking-[0.2em] uppercase">
                Staffing & Recruitment Solutions
              </p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-normal max-w-sm">
                PINCOF helps retail stores, franchise businesses, cafes, restaurants, and growing companies recruit dependable personnel for customer-facing and operational roles.
              </p>
            </div>

            <div className="pt-1 text-xs space-y-2 text-slate-400 font-medium">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-brand-red shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a href={`tel:${contactData.phone}`} className="hover:text-white transition-colors truncate">
                  {contactData.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-brand-red shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a
                  href={getEmailLink({
                    email: contactData.email,
                    subject: 'Inquiry for PINCOF Recruitment',
                  })}
                  onClick={(e) =>
                    handleEmailClick(e, {
                      email: contactData.email,
                      subject: 'Inquiry for PINCOF Recruitment',
                    })
                  }
                  className="hover:text-white transition-colors truncate"
                >
                  {contactData.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-brand-red shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="leading-relaxed text-[11px] sm:text-xs">{contactData.officeAddress}</span>
              </div>
            </div>
          </div>

          {/* 2. Recruitment Desk & Action Column */}
          <div className="col-span-2 md:col-span-6 lg:col-span-3 lg:order-5 relative rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/[0.08] hover:border-brand-red/30 p-4 sm:p-5 lg:p-6 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            {/* Ambient Corner Crimson Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-red/10 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-red/15 transition-all duration-500" />

            <div className="relative z-10 space-y-3 sm:space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                  <h4 className="font-display text-[11px] font-bold text-white uppercase tracking-[0.2em]">
                    Recruitment Desk
                  </h4>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                  Direct
                </span>
              </div>

              {/* Copy */}
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Ready to submit your job specifications or discuss team requirements?
              </p>

              {/* Confidence Micro-Highlights */}
              <div className="space-y-1.5 sm:space-y-2 pt-0.5 text-[11px] text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" />
                  <span>24–48h Candidate Sourcing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" />
                  <span>Retail, Cafe & Franchise Roles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" />
                  <span>Vetted & Interview-Ready</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="relative z-10 pt-4 mt-3 sm:pt-5 sm:mt-4 border-t border-white/[0.08] space-y-2.5">
              <MagneticButton strength={0.15} className="w-full">
                <Link
                  to="/request-hiring"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-brand-red hover:bg-brand-red-dark text-white text-[11px] font-bold uppercase tracking-wider shadow-md hover:shadow-glow-red transition-all duration-300 whitespace-nowrap text-center group"
                >
                  <span className="whitespace-nowrap">Request Hiring Support</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                </Link>
              </MagneticButton>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-0.5 px-1">
                <a
                  href={`tel:${contactData.phone}`}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-brand-red shrink-0" />
                  <span>{contactData.phoneDisplay}</span>
                </a>

                <Link
                  to="/disclaimer"
                  className="text-slate-500 hover:text-slate-300 transition-colors"
                >
                  Disclaimer
                </Link>
              </div>
            </div>
          </div>

          {/* 3. Services Column */}
          <div className="col-span-1 md:col-span-4 lg:col-span-2 lg:order-2 space-y-3 sm:space-y-4">
            <h4 className="font-display text-[11px] font-bold text-white uppercase tracking-[0.2em]">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/services" className="hover:text-white transition-colors block">
                  Retail Staffing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors block">
                  Franchise Staffing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors block">
                  Cafe & Restaurant
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors block">
                  Bulk Hiring
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors block">
                  Management Hiring
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-brand-red hover:text-white font-bold block pt-0.5 transition-colors">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Industries Column */}
          <div className="col-span-1 md:col-span-4 lg:col-span-2 lg:order-3 space-y-3 sm:space-y-4">
            <h4 className="font-display text-[11px] font-bold text-white uppercase tracking-[0.2em]">
              Industries
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/industries" className="hover:text-white transition-colors block">
                  Retail & Store Fronts
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors block">
                  Fashion & Apparel
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors block">
                  Food & Beverage
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors block">
                  Grocery Operations
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors block">
                  Hospitality
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors block">
                  Franchise Chains
                </Link>
              </li>
            </ul>
          </div>

          {/* 5. Company Column (Explore) */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-2 lg:order-4 space-y-3 sm:space-y-4 pt-3 md:pt-0 border-t border-white/[0.06] md:border-t-0">
            <h4 className="font-display text-[11px] font-bold text-white uppercase tracking-[0.2em]">
              Explore
            </h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2 text-xs text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors block">
                  About PINCOF
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-white transition-colors block">
                  Hiring Process
                </Link>
              </li>
              <li>
                <Link to="/roles" className="hover:text-white transition-colors block">
                  Roles We Fill
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="hover:text-white transition-colors block">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-white transition-colors block">
                  Selected Experience
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors block">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Clear Legal Positioning & Disclaimer */}
        <div id="disclaimer" className="py-5 sm:py-6 lg:py-8 border-b border-white/[0.08] text-[11px] sm:text-xs text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-200">Important Business Notice: </strong>
            PINCOF provides professional staffing and recruitment services for retail, franchise, food & beverage, fashion, and commercial businesses. PINCOF is <strong>not a franchise seller</strong>, broker, or franchisor.
          </p>
          <p>
            Brand names, logos, or business references shown on this website reflect relevant hiring support and candidate sourcing experience. They do not imply current official partnership, exclusive agency, franchise rights, endorsement, or parent-company authorization unless explicitly stated in writing.
          </p>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© 2026 PINCOF. All rights reserved. Professional Staffing & Recruitment.</p>
          </div>

          <MagneticButton strength={0.2}>
            <button
              type="button"
              onClick={scrollToTop}
              data-cursor-label="TOP"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white transition-all cursor-pointer text-xs font-bold uppercase tracking-wider"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </MagneticButton>
        </div>

      </div>
    </footer>
  );
}
