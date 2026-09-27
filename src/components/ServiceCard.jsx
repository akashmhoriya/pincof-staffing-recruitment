import React from 'react';
import {
  ShoppingBag,
  Building2,
  Coffee,
  Users,
  Headphones,
  Layers,
  Award,
  Settings2,
  ArrowUpRight
} from 'lucide-react';

const iconMap = {
  ShoppingBag,
  Building2,
  Coffee,
  Users,
  Headphones,
  Layers,
  Award,
  Settings2
};

export default function ServiceCard({ service, onSelectService }) {
  const IconComponent = iconMap[service.icon] || ShoppingBag;

  return (
    <div
      onClick={() => onSelectService && onSelectService(service)}
      className="group relative bg-white rounded-2xl border border-surface-border p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-red/40 hover:shadow-premium-hover cursor-pointer text-left overflow-hidden"
    >
      <div>
        {/* Card Header: Icon & Highlight Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-brand-red-light/70 border border-brand-red/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shadow-xs">
            <IconComponent className="w-6 h-6" />
          </div>

          <span className="text-[11px] font-semibold tracking-wider text-charcoal-light uppercase px-2.5 py-1 rounded-md bg-slate-100 group-hover:bg-brand-navy-light group-hover:text-brand-navy transition-colors">
            {service.highlight}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-charcoal mb-2.5 group-hover:text-brand-red transition-colors duration-200">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-charcoal-muted leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Roles pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {service.roles.map((role, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium text-charcoal-muted bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Link */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-charcoal group-hover:text-brand-red transition-colors">
        <span>Request Candidates For This Role</span>
        <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-brand-red group-hover:text-white flex items-center justify-center transition-all duration-200">
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );
}
