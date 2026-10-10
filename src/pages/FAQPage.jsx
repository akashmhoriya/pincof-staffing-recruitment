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
        <div className="mt-12 bg-white rounded-2xl sm:rounded-3xl border border-black/[0.08] p-5 sm:p-8 lg:p-12 shadow-premium text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-charcoal">Have a specific question not covered here?</h3>
            <p className="text-xs sm:text-sm text-charcoal/70 mt-1 sm:mt-1.5 font-normal">
              Speak directly with our recruitment team or email your inquiry.
            </p>
          </div>

          <div className="flex flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0 pt-2 sm:pt-0">
            <MagneticButton strength={0.15} className="flex-1 sm:flex-initial">
              <a
                href={`tel:${contactData.phone}`}
                data-cursor-label="CALL"
                className="w-full sm:w-auto px-3.5 sm:px-5 py-3 rounded-full border border-black/[0.08] text-[11px] sm:text-xs font-bold uppercase tracking-wider text-charcoal hover:text-brand-red hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-1.5 sm:gap-2 text-center whitespace-nowrap bg-white shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
                <span className="hidden min-[380px]:inline">{contactData.phoneDisplay}</span>
                <span className="min-[380px]:hidden">Call Us</span>
              </a>
            </MagneticButton>

            <MagneticButton strength={0.2} className="flex-1 sm:flex-initial">
              <Link
                to="/contact"
                data-cursor-label="CONTACT"
                className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-full bg-brand-red hover:bg-brand-red-dark text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-glow-red transition-all inline-flex items-center justify-center gap-1.5 sm:gap-2 group text-center whitespace-nowrap"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
}
