import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';
import CustomSelect from './CustomSelect';
import { contactData } from '../data/contact';
import { toast } from '../utils/toast';
import gsap from 'gsap';

export default function QuickHireModal({ isOpen, onClose, defaultRequirement = 'Store Staff' }) {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const ctx = gsap.context(() => {
        gsap.fromTo(
          backdropRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.25, ease: 'power2.out' }
        );
        gsap.fromTo(
          modalRef.current,
          { opacity: 0, scale: 0.95, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'back.out(1.5)' }
        );
      });
      return () => {
        document.body.style.overflow = '';
        ctx.revert();
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

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
        setTimeout(() => {
          onClose();
        }, 1200);
      } else {
        console.log("Error", data);
        toast.error(data.message || "Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={onClose}
        className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div
        ref={modalRef}
        className="relative bg-white rounded-2xl border border-surface-border shadow-2xl max-w-lg w-full p-6 sm:p-8 z-10 text-left max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-charcoal-light hover:text-charcoal hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <div className="mb-6">
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider block mb-1">
              PINCOF RECRUITMENT DESK
            </span>
            <h3 className="text-2xl font-black text-charcoal tracking-tight">
              Request Hiring Support
            </h3>
            <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
              Tell us about your team requirement. We source and shortlist candidates aligned with your business.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <input
              type="hidden"
              name="from_name"
              value="PINCOF Quick Hire Modal"
            />

            <div>
              <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1">
                  Company / Brand *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="Business / Outlet name"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
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
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                  Hiring Requirement
                </label>
                <CustomSelect
                  name="hiring_requirement"
                  defaultValue={defaultRequirement}
                  options={[
                    { value: "Store Staff", label: "Store Staff", subtext: "Floor & billing associates" },
                    { value: "Sales Associates", label: "Sales Associates", subtext: "Customer advisory & sales" },
                    { value: "Cafe / Restaurant Staff", label: "Cafe / Restaurant Staff", subtext: "Baristas, stewards & service crew" },
                    { value: "Store Manager / Supervisor", label: "Store Manager / Supervisor", subtext: "Leadership & shift management" },
                    { value: "Operations Executive", label: "Operations Executive", subtext: "Inventory, supply & dispatch" },
                    { value: "Bulk Hiring", label: "Bulk Hiring (Multiple Roles)", subtext: "Large volume intake" },
                    { value: "Other Business Roles", label: "Other Business Roles", subtext: "Custom requirement" },
                  ]}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                  No. of Positions
                </label>
                <CustomSelect
                  name="number_of_positions"
                  defaultValue="2–5"
                  options={[
                    { value: "1", label: "1 Position", subtext: "Single opening" },
                    { value: "2–5", label: "2–5 Positions", subtext: "Small team" },
                    { value: "6–10", label: "6–10 Positions", subtext: "Outlet staffing" },
                    { value: "11–25", label: "11–25 Positions", subtext: "Branch expansion" },
                    { value: "25+", label: "25+ Positions", subtext: "High-volume demand" },
                  ]}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1">
                Location / City *
              </label>
              <input
                type="text"
                name="location"
                required
                placeholder="e.g. Bengaluru, Mumbai, Delhi-NCR"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-5 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Submitting</span>
                  </>
                ) : (
                  <>
                    <span>Submit Hiring Requirement</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-charcoal-light text-center">
              Need urgent hiring? Call directly:{' '}
              <a href={`tel:${contactData.phone}`} className="font-bold text-brand-red hover:underline">
                {contactData.phoneDisplay}
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
