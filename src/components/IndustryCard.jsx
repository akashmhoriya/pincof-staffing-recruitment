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
      className="group bg-white rounded-2xl border border-surface-border p-6 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-navy/50 hover:shadow-premium-hover cursor-pointer text-left overflow-hidden"
    >
      <div>
        <div className="w-11 h-11 rounded-xl bg-brand-navy-light text-brand-navy flex items-center justify-center mb-4 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-200 shadow-xs">
          <IconComponent className="w-5 h-5" />
        </div>

        <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-brand-navy transition-colors">
          {industry.title}
        </h3>

        <p className="text-sm font-medium text-charcoal-muted mb-2 leading-relaxed">
          {industry.description}
        </p>

        <p className="text-xs text-charcoal-light leading-relaxed">
          {industry.details}
        </p>
      </div>

      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-navy group-hover:text-brand-red transition-colors">
        <span>Request Candidates</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
}
