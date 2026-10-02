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
      data-cursor-label="HIRE"
      className="group relative bg-white rounded-3xl border border-black/[0.07] p-7 sm:p-8 flex flex-col justify-between h-full transition-all duration-400 hover:-translate-y-2 hover:border-brand-red/30 hover:shadow-premium-hover cursor-pointer text-left overflow-hidden"
    >
      {/* Subtle corner hover highlight */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/[0.03] rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-150" />

      <div>
        {/* Card Header: Icon & Highlight Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-black/[0.06] flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-subtle">
            <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          </div>

          <span className="text-[10px] font-bold tracking-widest text-charcoal/60 uppercase px-3 py-1.5 rounded-full bg-slate-100 group-hover:bg-brand-navy-light group-hover:text-brand-navy transition-colors">
            {service.highlight}
          </span>
        </div>

        {/* Title with Editorial Display Font */}
        <h3 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-3 group-hover:text-brand-red transition-colors duration-200">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-charcoal/70 leading-relaxed mb-6 font-normal">
          {service.description}
        </p>

        {/* Roles pills */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {service.roles.map((role, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium text-charcoal/70 bg-slate-50 border border-black/[0.05] px-2.5 py-1 rounded-md transition-colors group-hover:border-black/10"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Link */}
      <div className="pt-5 border-t border-black/[0.06] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-charcoal/80 group-hover:text-brand-red transition-colors">
        <span>Request Candidates</span>
        <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-brand-red group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs">
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );
}
