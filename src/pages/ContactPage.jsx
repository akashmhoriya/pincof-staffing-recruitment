import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import CustomSelect from '../components/CustomSelect';
import { contactData } from '../data/contact';
import { toast } from '../utils/toast';
import {
  Headphones,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send
} from 'lucide-react';

export default function ContactPage() {
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
        toast.error(data.message || "Failed to submit form. Please check your details.");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <PageHeader
        eyebrow="GET IN TOUCH"
        title="Let's Discuss Your Hiring Requirement"
        description="Connect directly with our recruitment specialists. Whether discussing an upcoming outlet launch or reviewing ongoing staffing needs, we are here to assist."
        badgeIcon={Headphones}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-left">
          
          {/* Phone */}
          <div className="bg-surface-muted rounded-2xl border border-surface-border p-6 flex flex-col justify-between hover:bg-white hover:shadow-premium hover:-translate-y-1 hover:border-brand-red/30 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-red-light text-brand-red flex items-center justify-center mb-5 shadow-xs">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-charcoal mb-1">Phone Call</h3>
              <p className="text-xs text-charcoal-light mb-3">Direct corporate desk</p>
              <p className="text-base font-bold text-charcoal font-mono">{contactData.phoneDisplay}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200">
              <a
                href={`tel:${contactData.phone}`}
                className="text-xs font-bold text-brand-red hover:underline"
              >
                Call Now →
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-surface-muted rounded-2xl border border-surface-border p-6 flex flex-col justify-between hover:bg-white hover:shadow-premium hover:-translate-y-1 hover:border-brand-navy/30 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-navy-light text-brand-navy flex items-center justify-center mb-5 shadow-xs">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-charcoal mb-1">Official Email</h3>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactData.email)}&su=${encodeURIComponent('Inquiry regarding Staffing & Recruitment - PINCOF')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-charcoal hover:text-brand-navy break-all transition-colors block"
              >
                {contactData.email}
              </a>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactData.email)}&su=${encodeURIComponent('Inquiry regarding Staffing & Recruitment - PINCOF')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-brand-navy hover:underline inline-flex items-center gap-1"
              >
                Send Email →
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-surface-muted rounded-2xl border border-surface-border p-6 flex flex-col justify-between hover:bg-white hover:shadow-premium hover:-translate-y-1 hover:border-emerald-500/30 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 shadow-xs">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-charcoal mb-1">WhatsApp Chat</h3>
              <p className="text-xs text-charcoal-light mb-3">Quick inquiries & messaging</p>
              <p className="text-sm font-bold text-charcoal">{contactData.phoneDisplay}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200">
              <a
                href={`https://wa.me/${contactData.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-600 hover:underline"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>

          {/* Office Address */}
          <div className="bg-surface-muted rounded-2xl border border-surface-border p-6 flex flex-col justify-between hover:bg-white hover:shadow-premium hover:-translate-y-1 hover:border-slate-300 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-charcoal flex items-center justify-center mb-5 shadow-xs">
                <MapPin className="w-6 h-6 text-brand-red" />
              </div>
              <h3 className="text-base font-bold text-charcoal mb-1">Corporate Office</h3>
              <p className="text-xs text-charcoal-light mb-2">Location headquarters</p>
              <p className="text-xs text-charcoal-muted leading-relaxed">{contactData.officeAddress}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200">
              <span className="text-[11px] font-semibold text-charcoal-light">India Operations</span>
            </div>
          </div>

        </div>

        {/* 2-Col Quick Inquiry Form and Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left mb-16">
          
          <div className="lg:col-span-7 bg-surface-muted rounded-3xl border border-surface-border p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-charcoal mb-2">Send a Message</h3>
            <p className="text-xs sm:text-sm text-charcoal-muted mb-6">
              Leave your inquiry below and our representative will get back to you shortly.
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
              <input
                type="hidden"
                name="from_name"
                value="PINCOF Contact Page"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Ramesh V."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@business.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <CustomSelect
                  name="subject"
                  defaultValue="General Staffing Inquiry"
                  options={[
                    { value: "General Staffing Inquiry", label: "General Staffing Inquiry", subtext: "Standard retail & operational requirements" },
                    { value: "Franchise Hiring Support", label: "Franchise Hiring Support", subtext: "Multi-outlet & new store openings" },
                    { value: "Bulk Recruitment Need", label: "Bulk Recruitment Need", subtext: "High-volume crew & frontline hiring" },
                    { value: "Store Manager Sourcing", label: "Store Manager Sourcing", subtext: "Leadership, supervisory & floor heads" },
                    { value: "Other Inquiries", label: "Other Inquiries", subtext: "Custom or corporate requests" },
                  ]}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Briefly describe your business location, roles needed, or inquiry..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Submitting to Web3Forms...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-surface-border p-8 shadow-subtle">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-brand-red" />
                <h4 className="text-lg font-bold text-charcoal">Operating Schedule</h4>
              </div>
              <p className="text-xs text-charcoal-muted leading-relaxed mb-4">
                Our recruitment coordinators and intake specialists are available during the following hours:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-charcoal space-y-2">
                <div className="flex justify-between">
                  <span>Monday – Friday:</span>
                  <span>9:30 AM – 6:30 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM – 5:00 PM IST</span>
                </div>
                <div className="flex justify-between text-charcoal-light">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-navy text-white rounded-3xl p-8 space-y-4">
              <h4 className="text-lg font-bold">Need Immediate Sourcing?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                If your store or restaurant has urgent replacement requirements, call us directly to speak with an intake manager.
              </p>
              <a
                href={`tel:${contactData.phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-brand-navy font-bold text-xs hover:bg-slate-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-red" />
                <span>Call {contactData.phoneDisplay}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
