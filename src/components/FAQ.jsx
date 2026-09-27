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
    const ctx = gsap.context(() => {
      const items = faqListRef.current?.children;
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.07,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: faqListRef.current,
              start: 'top 80%',
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
      className="py-20 md:py-28 bg-surface-muted border-b border-surface-border/60 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red-light/80 border border-brand-red/15 text-brand-red text-xs font-bold uppercase tracking-wider mb-3.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{faqData.sectionEyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight leading-tight mb-4">
            {faqData.sectionTitle}
          </h2>

          <p className="text-base text-charcoal-muted leading-relaxed font-normal max-w-2xl mx-auto">
            {faqData.sectionDescription}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div ref={faqListRef} className="space-y-3.5">
          {faqData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-surface-border overflow-hidden transition-all duration-200 hover:border-slate-300 text-left shadow-subtle"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-charcoal">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-brand-red text-white rotate-180' : 'bg-slate-100 text-charcoal'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-charcoal-muted leading-relaxed border-t border-slate-100 animate-fadeIn">
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
