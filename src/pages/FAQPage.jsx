import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import FAQ from '../components/FAQ';
import MagneticButton from '../components/MagneticButton';
import { HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { contactData } from '../data/contact';

export default function FAQPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-24 text-left">
      <PageHeader
        eyebrow="HELP & CLARITY"
        title="Frequently Asked Questions"
        description="Clear answers regarding our recruitment process, role categories, candidate screening, and business collaboration standards."
        badgeIcon={HelpCircle}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Full FAQ Accordion Component */}
        <FAQ />

        {/* Additional Questions Card */}
        <div className="mt-12 bg-white rounded-3xl border border-black/[0.08] p-8 sm:p-12 shadow-premium text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-charcoal">Have a specific question not covered here?</h3>
            <p className="text-sm text-charcoal/70 mt-1.5 font-normal">
              Speak directly with our recruitment team or email your inquiry.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <MagneticButton strength={0.15}>
              <a
                href={`tel:${contactData.phone}`}
                data-cursor-label="CALL"
                className="px-5 py-3 rounded-full border border-black/[0.08] text-xs font-bold uppercase tracking-wider text-charcoal hover:text-brand-red hover:bg-slate-50 transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-brand-red" />
                <span>{contactData.phoneDisplay}</span>
              </a>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <Link
                to="/contact"
                data-cursor-label="CONTACT"
                className="px-6 py-3 rounded-full bg-brand-red hover:bg-brand-red-dark text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-glow-red transition-all flex items-center gap-2 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
}
