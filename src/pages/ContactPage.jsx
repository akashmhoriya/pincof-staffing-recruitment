import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import CustomSelect from '../components/CustomSelect';
import MagneticButton from '../components/MagneticButton';
import { contactData } from '../data/contact';
import { toast } from '../utils/toast';
import { getEmailLink, handleEmailClick } from '../utils/email';
import {
  Headphones,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  ArrowRight
} from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formEl = event.target;
    const formData = new FormData(formEl);

    formData.append("access_key", "605e62d4-f818-45aa-9f84-8d47a36d155f");
    
    const senderName = formData.get("name") || "Visitor";
    const senderEmail = formData.get("email");
    const subjectTopic = formData.get("subject") || "Staffing Inquiry";
    formData.set("subject", `[PINCOF Contact] ${subjectTopic} - from ${senderName}`);
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
        toast.success("Thank you for your message! Our recruitment desk will connect shortly.");
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
    <div className="bg-white min-h-screen pb-24 text-left">
      <PageHeader
        eyebrow="GET IN TOUCH"
        title="Let's Discuss Your Hiring Requirement"
        description="Connect directly with our recruitment specialists. Whether discussing an upcoming outlet launch or reviewing ongoing staffing needs, we are here to assist."
        badgeIcon={Headphones}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 text-left">
          
          {/* Phone */}
          <div className="bg-[#FAFAFA] rounded-3xl border border-black/[0.07] p-8 flex flex-col justify-between hover:bg-white hover:shadow-premium hover:-translate-y-1.5 hover:border-brand-red/30 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-red-light text-brand-red flex items-center justify-center mb-6 shadow-xs">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-charcoal mb-1">Phone Call</h3>
              <p className="text-xs text-charcoal/50 mb-3">Direct corporate desk</p>
              <p className="text-base font-bold text-charcoal font-mono">{contactData.phoneDisplay}</p>
            </div>
            <div className="mt-8 pt-4 border-t border-black/[0.05]">
              <a
                href={`tel:${contactData.phone}`}
                data-cursor-label="CALL"
                className="text-xs font-bold uppercase tracking-wider text-brand-red hover:underline inline-flex items-center gap-1"
              >
                <span>Call Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-[#FAFAFA] rounded-3xl border border-black/[0.07] p-8 flex flex-col justify-between hover:bg-white hover:shadow-premium hover:-translate-y-1.5 hover:border-brand-navy/30 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-navy-light text-brand-navy flex items-center justify-center mb-6 shadow-xs">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-charcoal mb-1">Official Email</h3>
              <p className="text-xs text-charcoal/50 mb-3">Recruitment desk</p>
              <a
                href={getEmailLink({
                  email: contactData.email,
                  subject: 'Inquiry regarding Staffing & Recruitment - PINCOF',
                })}
                onClick={(e) =>
                  handleEmailClick(e, {
                    email: contactData.email,
                    subject: 'Inquiry regarding Staffing & Recruitment - PINCOF',
                  })
                }
                data-cursor-label="EMAIL"
                className="text-xs font-bold text-charcoal hover:text-brand-navy break-all transition-colors block"
              >
                {contactData.email}
              </a>
            </div>
            <div className="mt-8 pt-4 border-t border-black/[0.05]">
              <a
                href={getEmailLink({
                  email: contactData.email,
                  subject: 'Inquiry regarding Staffing & Recruitment - PINCOF',
                })}
                onClick={(e) =>
                  handleEmailClick(e, {
                    email: contactData.email,
                    subject: 'Inquiry regarding Staffing & Recruitment - PINCOF',
                  })
                }
                className="text-xs font-bold uppercase tracking-wider text-brand-navy hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Send Email</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-[#FAFAFA] rounded-3xl border border-black/[0.07] p-8 flex flex-col justify-between hover:bg-white hover:shadow-premium hover:-translate-y-1.5 hover:border-emerald-500/30 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 shadow-xs">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-charcoal mb-1">WhatsApp Chat</h3>
              <p className="text-xs text-charcoal/50 mb-3">Quick inquiries & messaging</p>
              <p className="text-sm font-bold text-charcoal">{contactData.phoneDisplay}</p>
            </div>
            <div className="mt-8 pt-4 border-t border-black/[0.05]">
              <a
                href={`https://wa.me/${contactData.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="CHAT"
                className="text-xs font-bold uppercase tracking-wider text-emerald-600 hover:underline inline-flex items-center gap-1"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Office Address */}
          <div className="bg-[#FAFAFA] rounded-3xl border border-black/[0.07] p-8 flex flex-col justify-between hover:bg-white hover:shadow-premium hover:-translate-y-1.5 hover:border-black/20 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-charcoal flex items-center justify-center mb-6 shadow-xs">
                <MapPin className="w-6 h-6 text-brand-red" />
              </div>
              <h3 className="font-display text-lg font-bold text-charcoal mb-1">Corporate Office</h3>
              <p className="text-xs text-charcoal/50 mb-2">Location headquarters</p>
              <p className="text-xs text-charcoal/70 leading-relaxed font-normal">{contactData.officeAddress}</p>
            </div>
            <div className="mt-8 pt-4 border-t border-black/[0.05]">
              <span className="text-[10px] font-bold text-charcoal/50 uppercase tracking-widest">
                India Operations
              </span>
            </div>
          </div>

        </div>

        {/* 2-Col Quick Inquiry Form and Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left mb-20">
          
          <div className="lg:col-span-7 bg-[#FAFAFA] rounded-3xl border border-black/[0.08] p-8 sm:p-12">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-2">
              Send a Message
            </h3>
            <p className="text-sm text-charcoal/70 mb-8 font-normal">
              Leave your inquiry below and our representative will get back to you shortly.
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
              <input
                type="hidden"
                name="from_name"
                value="PINCOF Contact Page"
              />
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Ramesh V."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@business.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
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
                <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Briefly describe your business location, roles needed, or inquiry..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red resize-none transition-all"
                />
              </div>

              <div className="pt-2">
                <MagneticButton strength={0.15} className="w-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor-label="SEND"
                    className="w-full py-4 px-8 rounded-full bg-brand-red hover:bg-brand-red-dark text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-glow-red transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </MagneticButton>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-7">
            <div className="bg-white rounded-3xl border border-black/[0.08] p-8 sm:p-10 shadow-subtle">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-brand-red" />
                <h4 className="font-display text-lg font-bold text-charcoal">Operating Schedule</h4>
              </div>
              <p className="text-xs text-charcoal/70 leading-relaxed mb-6 font-normal">
                Our recruitment coordinators and intake specialists are available during the following hours:
              </p>
              <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-black/[0.06] text-xs font-semibold text-charcoal space-y-3">
                <div className="flex justify-between">
                  <span>Monday – Friday:</span>
                  <span className="font-bold">9:30 AM – 6:30 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-bold">10:00 AM – 5:00 PM IST</span>
                </div>
                <div className="flex justify-between text-charcoal/50">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0A0E17] text-white rounded-3xl p-8 sm:p-10 space-y-5 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-red/15 rounded-full blur-2xl pointer-events-none" />
              <h4 className="font-display text-xl font-bold">Need Immediate Sourcing?</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                If your store or restaurant has urgent replacement requirements, call us directly to speak with an intake manager.
              </p>
              <div className="pt-2">
                <MagneticButton strength={0.2}>
                  <a
                    href={`tel:${contactData.phone}`}
                    data-cursor-label="CALL"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-charcoal font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-brand-red" />
                    <span>Call {contactData.phoneDisplay}</span>
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
