import React, { useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import MagneticButton from '../components/MagneticButton';
import { rolesData } from '../data/roles';
import {
  UserCheck,
  Info,
  ArrowRight,
  Briefcase,
  Store,
  Coffee,
  Boxes,
  Sparkles,
} from 'lucide-react';

const roleCategoryMap = {
  "Store Manager": { category: "Store Leadership", icon: Briefcase },
  "Assistant Store Manager": { category: "Store Leadership", icon: Briefcase },
  "Supervisor": { category: "Store Leadership", icon: UserCheck },
  "Shift Leader": { category: "Store Leadership", icon: UserCheck },
  "Sales Associate": { category: "Front of House", icon: Store },
  "Customer Service Executive": { category: "Front of House", icon: Store },
  "Store Executive": { category: "Front of House", icon: Store },
  "Cashier": { category: "Front of House", icon: Store },
  "Barista": { category: "Food & Beverage", icon: Coffee },
  "Restaurant Staff": { category: "Food & Beverage", icon: Coffee },
  "Kitchen Staff": { category: "Food & Beverage", icon: Coffee },
  "Floor Supervisor": { category: "Food & Beverage", icon: Coffee },
  "Operations Executive": { category: "Operations", icon: Boxes },
  "Back Office Staff": { category: "Operations", icon: Boxes },
  "Support Staff": { category: "Operations", icon: Boxes },
  "Inventory Coordinator": { category: "Operations", icon: Boxes },
  "Other Business Roles": { category: "Custom Sourcing", icon: Sparkles },
};

export default function RolesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();
  const context = useOutletContext();
  const onOpenHiringModal = context?.onOpenHiringModal;

  const categories = ['All', ...rolesData.categories.map((c) => c.name)];

  const displayedRoles =
    activeCategory === 'All'
      ? rolesData.allRoles
      : rolesData.categories.find((c) => c.name === activeCategory)?.roles || [];

  const handleHireRole = (role) => {
    if (onOpenHiringModal) {
      onOpenHiringModal(role);
    } else {
      navigate('/request-hiring');
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-20 sm:pb-24 text-left">
      <PageHeader
        eyebrow="TALENT BENCHMARKS"
        title="Roles We Help Businesses Fill"
        description="We source and screen dependable professionals across front-of-house, management, and operational functions for commercial businesses."
        badgeIcon={UserCheck}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16">
        
        {/* Category Tabs - Clean Scrollable Strip on Mobile, Centered/Flex on Desktop */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 pb-3 mb-6 sm:mb-8 border-b border-black/[0.06] -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const count =
              category === 'All'
                ? rolesData.allRoles.length
                : rolesData.categories.find((c) => c.name === category)?.roles.length || 0;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shrink-0 whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? 'bg-charcoal text-white shadow-subtle'
                    : 'bg-white text-charcoal/70 hover:text-charcoal hover:bg-slate-100 border border-black/[0.06]'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-charcoal/60'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Roles Filter Summary Bar */}
        <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
          <div className="flex items-center gap-2 text-xs font-bold text-charcoal uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse shrink-0" />
            <span>{activeCategory === 'All' ? 'All Roles' : activeCategory}</span>
            <span className="text-charcoal/40 font-mono">({displayedRoles.length})</span>
          </div>
          <span className="text-[11px] text-charcoal/50 font-medium hidden sm:inline-block">
            Click any role to request candidate profiles
          </span>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 mb-12 sm:mb-16">
          {displayedRoles.map((role) => {
            const roleMeta = roleCategoryMap[role] || { category: 'Staffing Profile', icon: UserCheck };
            const IconComponent = roleMeta.icon;
            return (
              <div
                key={role}
                onClick={() => handleHireRole(role)}
                data-cursor-label="HIRE"
                className="group bg-white p-3.5 sm:p-5 rounded-2xl border border-black/[0.07] hover:border-brand-red/35 hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-center justify-between text-left active:scale-[0.99]"
              >
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 pr-2">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-50 border border-black/[0.05] text-brand-navy flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 group-hover:text-brand-red transition-colors block truncate">
                      {roleMeta.category}
                    </span>
                    <h4 className="font-display text-xs sm:text-sm font-bold text-charcoal group-hover:text-charcoal leading-snug truncate">
                      {role}
                    </h4>
                  </div>
                </div>

                <span className="px-3 py-1.5 rounded-full bg-slate-50 group-hover:bg-brand-red group-hover:text-white text-charcoal/70 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1 shrink-0 border border-black/[0.04] group-hover:border-transparent shadow-subtle">
                  <span>Hire</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>
            );
          })}
        </div>

        {/* Crucial Non-Job-Portal Disclaimer */}
        <div className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white border border-black/[0.07] text-left mb-10 sm:mb-16 shadow-subtle flex items-start gap-3.5 sm:gap-5">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-brand-navy-light text-brand-navy flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-4 h-4 sm:w-5 sm:h-5 text-brand-navy" />
          </div>
          <div className="space-y-1 sm:space-y-1.5">
            <h4 className="font-display text-sm sm:text-base font-bold text-charcoal">Recruitment Scope & Disclaimer</h4>
            <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
              {rolesData.disclaimer}
            </p>
          </div>
        </div>

        {/* Roles Action Box */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-black/[0.08] p-6 sm:p-10 lg:p-12 shadow-premium flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8 text-left">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-black/[0.06] text-brand-red text-[11px] font-bold uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CUSTOM ROLE MANDATES</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal tracking-tight leading-tight">
              Need a specialized profile not listed here?
            </h3>
            <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-normal">
              We frequently handle tailored recruitment requirements matching unique business models, shifts, or certifications.
            </p>
          </div>

          <div className="pt-2 lg:pt-0 shrink-0">
            <MagneticButton strength={0.2} className="block sm:inline-block w-full sm:w-auto">
              <Link
                to="/request-hiring"
                data-cursor-label="CUSTOM"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-brand-red hover:bg-brand-red-dark text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-glow-red transition-all duration-300 group cursor-pointer text-center whitespace-nowrap"
              >
                <span>Request Custom Role Sourcing</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </Link>
            </MagneticButton>
          </div>
        </div>

      </div>
    </div>
  );
}
