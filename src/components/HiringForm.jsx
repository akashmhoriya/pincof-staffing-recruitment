import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import { contactData } from '../data/contact';
import { toast } from '../utils/toast';
import {
  Send,
  Phone,
  Mail,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function HiringForm({ initialRequirement, initialIndustry }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formEl = event.target;
    const formData = new FormData(formEl);

    formData.append("access_key", "c87985db-7986-4938-9454-cc77dca32382");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        formEl.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message || "Failed to submit requirement. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="hiring-form"
      className="py-20 md:py-28 bg-white border-b border-surface-border/60 relative scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Headings, Scope & Direct Contact Details */}
          <div className="lg:col-span-5 text-left space-y-7">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red-light/80 border border-brand-red/15 text-brand-red text-xs font-bold uppercase tracking-wider mb-3.5">
                <Send className="w-3.5 h-3.5" />
                <span>START RECRUITMENT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight leading-tight mb-4">
                Tell Us What You Need
              </h2>

              <p className="text-base text-charcoal-muted leading-relaxed">
                Share your store, franchise, or operational staffing requirements. Our team will review your role specs and get in touch to coordinate the hiring process.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/60 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand-red shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-charcoal-light uppercase tracking-wider">
                    Direct Phone Support
                  </span>
                  <a
                    href={`tel:${contactData.phone}`}
                    className="text-sm font-bold text-charcoal hover:text-brand-red transition-colors"
                  >
                    {contactData.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-charcoal-light mt-0.5">
                    Available during operating hours
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/60 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand-navy shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-charcoal-light uppercase tracking-wider">
                    Recruitment Intake Desk
                  </span>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactData.hiringEmail)}&su=${encodeURIComponent('Hiring Requirement Brief - PINCOF')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-charcoal hover:text-brand-red transition-colors"
                  >
                    {contactData.hiringEmail}
                  </a>
                  <p className="text-[11px] text-charcoal-light mt-0.5">
                    Send detailed JDs or multi-outlet hiring sheets
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/60 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand-navy shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-charcoal-light uppercase tracking-wider">
                    Operating Schedule
                  </span>
                  <p className="text-xs font-semibold text-charcoal">
                    {contactData.businessHours}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-brand-navy-light/60 border border-brand-navy/10">
              <p className="text-xs text-charcoal-muted leading-relaxed">
                <span className="font-bold text-brand-navy">Looking for multi-location hiring? </span>
                You can specify multiple branches, cities, or volume requirements in the additional notes.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-9 shadow-premium text-left">
              <form onSubmit={onSubmit} className="space-y-5">
                <input
                  type="hidden"
                  name="from_name"
                  value="PINCOF Hiring Portal"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-charcoal placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                    />
                  </div>

                  {/* Company / Business Name */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                      Company / Business Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="e.g. Artisan Roasters & Cafe"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-charcoal placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-charcoal placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. hr@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-charcoal placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                    />
                  </div>
                </div>

                {/* Business Location */}
                <div>
                  <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                    Business Location / City <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="e.g. Indiranagar, Bengaluru / Multi-city"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-charcoal placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Industry Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                      Industry
                    </label>
                    <CustomSelect
                      name="industry"
                      defaultValue={initialIndustry || "Retail"}
                      options={[
                        { value: "Retail", label: "Retail & Showrooms", subtext: "Store assistants, cashiers & managers" },
                        { value: "Food & Beverage", label: "Food & Beverage", subtext: "Cafes, quick-service, restaurants & bars" },
                        { value: "Fashion & Apparel", label: "Fashion & Apparel", subtext: "Boutiques, apparel stores & lifestyle outlets" },
                        { value: "Grocery", label: "Grocery & Supermarket", subtext: "Floor staff, inventory & billing" },
                        { value: "Lifestyle", label: "Lifestyle & Luxury", subtext: "Premium retail & brand consultants" },
                        { value: "Hospitality", label: "Hospitality & QSR", subtext: "Front desk, floor supervisors & service crew" },
                        { value: "Franchise Business", label: "Franchise Outlets", subtext: "Turnkey outlet recruitment & launch teams" },
                        { value: "Other", label: "Other Commercial Sector", subtext: "Corporate or specialized business needs" },
                      ]}
                    />
                  </div>

                  {/* Hiring Requirement Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                      Hiring Requirement
                    </label>
                    <CustomSelect
                      name="hiring_requirement"
                      defaultValue={initialRequirement || "Store Staff"}
                      options={[
                        { value: "Store Staff", label: "Store Staff", subtext: "Counter, floor & sales assistants" },
                        { value: "Sales Staff", label: "Sales Associates", subtext: "Customer advisory & billing professionals" },
                        { value: "Cafe / Restaurant Staff", label: "Cafe / Restaurant Staff", subtext: "Baristas, stewards & service crew" },
                        { value: "Management", label: "Store Management", subtext: "Store managers, assistant managers & supervisors" },
                        { value: "Operations", label: "Operations Executive", subtext: "Logistics, inventory & backend coordination" },
                        { value: "Customer Service", label: "Customer Service", subtext: "Support, helpdesk & guest relation executives" },
                        { value: "Bulk Hiring", label: "Bulk / Volume Hiring", subtext: "Multiple roles across one or more locations" },
                        { value: "Other", label: "Other Specific Role", subtext: "Custom or specialized hiring mandate" },
                      ]}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Number of Positions */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                      No. of Positions
                    </label>
                    <CustomSelect
                      name="number_of_positions"
                      defaultValue="2–5"
                      options={[
                        { value: "1", label: "1 Position", subtext: "Single key vacancy" },
                        { value: "2–5", label: "2–5 Positions", subtext: "Small team / replacement" },
                        { value: "6–10", label: "6–10 Positions", subtext: "Store launch or expansion" },
                        { value: "11–25", label: "11–25 Positions", subtext: "Multi-unit staffing" },
                        { value: "25+", label: "25+ Positions", subtext: "Large-scale recruitment" },
                      ]}
                    />
                  </div>

                  {/* Experience Required */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                      Experience Level
                    </label>
                    <CustomSelect
                      name="experience_level"
                      defaultValue="1–2 Years"
                      options={[
                        { value: "Entry Level / Freshers", label: "Entry Level / Freshers", subtext: "Fast learners, frontline training ready" },
                        { value: "1–2 Years", label: "1–2 Years", subtext: "Core operational store experience" },
                        { value: "3–5 Years", label: "3–5 Years", subtext: "Experienced senior associates / leads" },
                        { value: "5+ Years / Leadership", label: "5+ Years / Leadership", subtext: "Department heads & multi-store managers" },
                      ]}
                    />
                  </div>

                  {/* Preferred Joining Timeline */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                      Target Timeline
                    </label>
                    <CustomSelect
                      name="joining_timeline"
                      defaultValue="Immediate / 1–2 Weeks"
                      options={[
                        { value: "Immediate / 1–2 Weeks", label: "Immediate (1–2 Wks)", subtext: "Urgent deployment" },
                        { value: "Within 1 Month", label: "Within 1 Month", subtext: "Standard turnaround" },
                        { value: "Planning Ahead / Flexible", label: "Planning Ahead", subtext: "Upcoming store launch" },
                      ]}
                    />
                  </div>
                </div>

                {/* Additional Requirements Textarea */}
                <div>
                  <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                    Additional Requirements / Notes
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Specify shift timings, language prerequisites, specific store locations, or preferred background..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-charcoal placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-base font-semibold text-white bg-brand-red hover:bg-brand-red-dark shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-75 active:scale-[0.99] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Submitting to Web3Forms...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Hiring Requirement</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy Disclosure */}
                <p className="text-[11px] text-charcoal-light text-center leading-normal">
                  By submitting this form, you agree to be contacted regarding your recruitment requirement. Your data is handled strictly for business recruitment purposes.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
