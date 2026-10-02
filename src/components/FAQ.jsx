import React, { useState, useRef, useEffect } from 'react';
import { faqData } from '../data/faq';
import { HelpCircle, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default
  const sectionRef = useRef(null);
  const faqListRef = useRef(null);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const items = faqListRef.current?.children;
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: faqListRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-16 md:py-24 bg-transparent relative text-left"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] text-brand-red text-[11px] font-bold uppercase tracking-widest shadow-subtle">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{faqData.sectionEyebrow}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight leading-[1.12]">
            {faqData.sectionTitle}
          </h2>

          <p className="text-base text-charcoal/70 leading-relaxed font-normal max-w-2xl mx-auto pt-1">
            {faqData.sectionDescription}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div ref={faqListRef} className="space-y-4">
          {faqData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-300 text-left overflow-hidden ${
                  isOpen
                    ? 'border-brand-red/30 shadow-premium'
                    : 'border-black/[0.07] hover:border-black/15 shadow-subtle'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-charcoal pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-brand-red text-white rotate-180 shadow-xs' : 'bg-slate-100 text-charcoal'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-charcoal/70 leading-relaxed border-t border-black/[0.04] font-normal animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
