import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/pincof-logo.png';
import { contactData } from '../data/contact';
import { ArrowUp, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer({ onOpenHiringModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-dark text-slate-300 pt-16 pb-12 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block bg-white p-2.5 rounded-xl shadow-md">
              <img
                src={logoImg}
                alt="PINCOF Logo"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>

            <div>
              <p className="text-sm font-semibold text-white tracking-wide uppercase">
                Staffing & Recruitment Solutions
              </p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                PINCOF helps retail stores, franchise businesses, cafes, restaurants, and growing companies recruit dependable personnel for customer-facing and operational roles.
              </p>
            </div>

            <div className="pt-2 text-xs space-y-2 text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-red" />
                <a href={`tel:${contactData.phone}`} className="hover:text-white transition-colors">
                  {contactData.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-red" />
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactData.email)}&su=${encodeURIComponent('Inquiry for PINCOF Recruitment')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {contactData.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                <span className="leading-snug">{contactData.officeAddress}</span>
              </div>
            </div>
          </div>

          {/* Services Column (Col 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Retail Staffing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Franchise Staffing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Cafe & Restaurant Staffing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Bulk Hiring
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Management Hiring
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-brand-red hover:underline font-semibold block pt-1">
                  View All 8 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Column (Col 7-8) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Retail & Store Fronts
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Fashion & Apparel
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Food & Beverage
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Grocery Operations
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Hospitality
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Franchise Businesses
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column (Col 9-10) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About PINCOF
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-white transition-colors">
                  Hiring Process
                </Link>
              </li>
              <li>
                <Link to="/roles" className="hover:text-white transition-colors">
                  Roles We Fill
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="hover:text-white transition-colors">
                  Why Businesses Choose Us
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-white transition-colors">
                  Selected Experience
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Action Column (Col 11-12) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Recruitment Desk
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ready to submit your job specifications or discuss team requirements?
            </p>

            <div className="pt-2">
              <Link
                to="/request-hiring"
                className="w-full text-center px-3.5 py-2.5 rounded-lg bg-brand-red text-white text-xs font-semibold hover:bg-brand-red-dark transition-colors shadow-sm block"
              >
                Request Hiring Support
              </Link>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <Link to="/disclaimer" className="text-[11px] text-slate-400 hover:text-slate-200 transition-colors block">
                Disclaimer Notice
              </Link>
            </div>
          </div>

        </div>

        {/* Clear Legal Positioning & Disclaimer */}
        <div id="disclaimer" className="py-6 border-b border-slate-800/80 text-xs text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-300">Important Business Notice: </strong>
            PINCOF provides professional staffing and recruitment services for retail, franchise, food & beverage, fashion, and commercial businesses. PINCOF is <strong>not a franchise seller</strong>, broker, or franchisor.
          </p>
          <p>
            Brand names, logos, or business references shown on this website reflect relevant hiring support and candidate sourcing experience. They do not imply current official partnership, exclusive agency, franchise rights, endorsement, or parent-company authorization unless explicitly stated in writing.
          </p>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© 2026 PINCOF. All rights reserved. Professional Staffing & Recruitment.</p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
