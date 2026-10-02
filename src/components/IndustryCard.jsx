import React from 'react';
import {
  Utensils,
  Shirt,
  Store,
  ShoppingCart,
  Sparkles,
  Network,
  Hotel,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  Utensils,
  Shirt,
  Store,
  ShoppingCart,
  Sparkles,
  Network,
  Hotel,
  TrendingUp
};

export default function IndustryCard({ industry, onSelectIndustry }) {
  const IconComponent = iconMap[industry.icon] || Store;

  return (
    <div
      onClick={() => onSelectIndustry && onSelectIndustry(industry.title)}
      data-cursor-label="SECTOR"
      className="group bg-white rounded-3xl border border-black/[0.07] p-7 sm:p-8 flex flex-col justify-between h-full transition-all duration-400 hover:-translate-y-2 hover:border-brand-navy/40 hover:shadow-premium-hover cursor-pointer text-left overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-28 h-28 bg-brand-navy/[0.03] rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-150" />

      <div>
        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-black/[0.06] text-brand-navy flex items-center justify-center mb-5 group-hover:bg-brand-navy group-hover:text-white transition-all duration-300 shadow-subtle">
          <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
        </div>

        <h3 className="font-display text-xl font-bold text-charcoal mb-2.5 group-hover:text-brand-navy transition-colors">
          {industry.title}
        </h3>

        <p className="text-sm font-medium text-charcoal/80 mb-2 leading-relaxed">
          {industry.description}
        </p>

        <p className="text-xs text-charcoal/60 leading-relaxed font-normal">
          {industry.details}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-navy group-hover:text-brand-red transition-colors">
        <span>Request Candidates</span>
        <div className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-brand-navy group-hover:text-white flex items-center justify-center transition-all duration-300">
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}
