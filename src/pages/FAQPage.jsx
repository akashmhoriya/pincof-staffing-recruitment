import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import FAQ from '../components/FAQ';
import { HelpCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { contactData } from '../data/contact';

export default function FAQPage() {
  return (
    <div className="bg-surface-muted min-h-screen pb-20">
      <PageHeader
        eyebrow="HELP & CLARITY"
        title="Frequently Asked Questions"
        description="Clear answers regarding our recruitment process, role categories, candidate screening, and business collaboration standards."
        badgeIcon={HelpCircle}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Full FAQ Accordion Component */}
        <FAQ />

        {/* Additional Questions Card */}
        <div className="mt-14 bg-white rounded-2xl border border-surface-border p-8 shadow-subtle text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-charcoal">Have a specific question not covered here?</h3>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
              Speak directly with our recruitment team or email your inquiry.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${contactData.phone}`}
              className="px-4 py-2.5 rounded-lg border border-slate-200 text-xs font-semibold text-charcoal hover:text-brand-red hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-brand-red" />
              <span>{contactData.phoneDisplay}</span>
            </a>

            <Link
              to="/contact"
              className="px-4 py-2.5 rounded-lg bg-brand-red hover:bg-brand-red-dark text-white text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
