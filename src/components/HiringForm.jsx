import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import { contactData } from '../data/contact';
import { toast } from '../utils/toast';
import MagneticButton from './MagneticButton';
import { getEmailLink, handleEmailClick } from '../utils/email';
import {
  Send,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function HiringForm({ initialRequirement, initialIndustry }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formEl = event.target;
    const formData = new FormData(formEl);

    formData.append("access_key", "605e62d4-f818-45aa-9f84-8d47a36d155f");
    
    const senderName = formData.get("name") || "Employer";
    const senderEmail = formData.get("email");
    const roleReq = formData.get("requirement") || "Talent Requirement";
    formData.set("subject", `[PINCOF Hiring Request] ${roleReq} - from ${senderName}`);
    if (senderEmail) {
      formData.set("replyto", senderEmail);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission! Our team will contact you shortly.");
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
      className="py-20 md:py-28 bg-white border-b border-black/[0.06] relative scroll-mt-20 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-brand-red/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-brand-navy/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Headings, Scope & Direct Contact Details */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-black/[0.06] text-xs font-bold uppercase tracking-widest text-brand-red mb-4 shadow-subtle">
                <Send className="w-3.5 h-3.5" />
                <span>START RECRUITMENT</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight leading-[1.1] mb-4">
                Tell Us What You Need
              </h2>

              <p className="text-base text-charcoal/70 leading-relaxed font-normal">
                Share your store, franchise, or operational staffing requirements. Our team will review your role specs and get in touch to coordinate the hiring process.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl border border-black/[0.06] bg-[#FAFAFA] hover:bg-white hover:border-black/15 hover:shadow-subtle transition-all duration-300 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.06] flex items-center justify-center text-brand-red shrink-0 shadow-xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-charcoal/50 uppercase tracking-widest">
                    Direct Phone Support
                  </span>
                  <a
                    href={`tel:${contactData.phone}`}
                    data-cursor-label="CALL"
                    className="text-sm font-bold text-charcoal hover:text-brand-red transition-colors block mt-0.5"
                  >
                    {contactData.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-charcoal/60 mt-0.5">
                    Available during operating hours
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-black/[0.06] bg-[#FAFAFA] hover:bg-white hover:border-black/15 hover:shadow-subtle transition-all duration-300 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.06] flex items-center justify-center text-brand-navy shrink-0 shadow-xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-charcoal/50 uppercase tracking-widest">
                    Recruitment Intake Desk
                  </span>
                  <a
                    href={getEmailLink({
                      email: contactData.hiringEmail,
                      subject: 'Hiring Requirement Brief - PINCOF',
                    })}
                    onClick={(e) =>
                      handleEmailClick(e, {
                        email: contactData.hiringEmail,
                        subject: 'Hiring Requirement Brief - PINCOF',
                      })
                    }
                    data-cursor-label="EMAIL"
                    className="text-sm font-bold text-charcoal hover:text-brand-red transition-colors block mt-0.5"
                  >
                    {contactData.hiringEmail}
                  </a>
                  <p className="text-[11px] text-charcoal/60 mt-0.5">
                    Send detailed JDs or multi-outlet hiring sheets
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-black/[0.06] bg-[#FAFAFA] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.06] flex items-center justify-center text-brand-navy shrink-0 shadow-xs">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-charcoal/50 uppercase tracking-widest">
                    Operating Schedule
                  </span>
                  <p className="text-xs font-bold text-charcoal mt-0.5">
                    {contactData.businessHours}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-brand-navy-light/60 border border-brand-navy/10 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
              <p className="text-xs text-charcoal/70 leading-relaxed font-normal">
                <strong className="font-bold text-brand-navy">Looking for multi-location hiring? </strong>
                You can specify multiple branches, cities, or volume requirements in the additional notes.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-black/[0.08] p-6 sm:p-10 shadow-premium hover:shadow-premium-hover transition-shadow duration-300 text-left relative">
              <form onSubmit={onSubmit} className="space-y-5">
                <input
                  type="hidden"
                  name="from_name"
                  value="PINCOF Hiring Portal"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                      Full Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-charcoal placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all duration-200 bg-[#FAFAFA] focus:bg-white"
                    />
                  </div>

                  {/* Company / Business Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                      Company / Business Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="e.g. Artisan Roasters & Cafe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-charcoal placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all duration-200 bg-[#FAFAFA] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                      Phone Number <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-charcoal placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all duration-200 bg-[#FAFAFA] focus:bg-white"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                      Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. hr@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-charcoal placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all duration-200 bg-[#FAFAFA] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Business Location */}
                <div>
                  <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                    Business Location / City <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="e.g. Indiranagar, Bengaluru / Multi-city"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-charcoal placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all duration-200 bg-[#FAFAFA] focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Industry Dropdown */}
                  <div>
                    <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
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
                    <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
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
                    <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                      Positions
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
                    <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                      Experience
                    </label>
                    <CustomSelect
                      name="experience_level"
                      defaultValue="1–2 Years"
                      options={[
                        { value: "Entry Level / Freshers", label: "Entry Level", subtext: "Fast learners, frontline ready" },
                        { value: "1–2 Years", label: "1–2 Years", subtext: "Core store experience" },
                        { value: "3–5 Years", label: "3–5 Years", subtext: "Senior associates / leads" },
                        { value: "5+ Years / Leadership", label: "5+ Years", subtext: "Store & team leadership" },
                      ]}
                    />
                  </div>

                  {/* Preferred Joining Timeline */}
                  <div>
                    <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                      Timeline
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
                  <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                    Additional Requirements / Notes
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Specify shift timings, language prerequisites, specific store locations, or preferred background..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-charcoal placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red resize-none bg-[#FAFAFA] focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <MagneticButton strength={0.15} className="w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      data-cursor-label="SUBMIT"
                      className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-brand-red hover:bg-brand-red-dark shadow-md hover:shadow-glow-red transition-all duration-300 disabled:opacity-75 cursor-pointer active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Submitting Details...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Hiring Requirement</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </div>

                {/* Privacy Disclosure */}
                <p className="text-[11px] text-charcoal/50 text-center leading-relaxed">
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
