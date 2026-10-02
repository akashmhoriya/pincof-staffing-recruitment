import React, { useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import MagneticButton from '../components/MagneticButton';
import { rolesData } from '../data/roles';
import { UserCheck, Info, ArrowRight } from 'lucide-react';

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
    <div className="bg-[#FAFAFA] min-h-screen pb-24 text-left">
      <PageHeader
        eyebrow="TALENT BENCHMARKS"
        title="Roles We Help Businesses Fill"
        description="We source and screen dependable professionals across front-of-house, management, and operational functions for commercial businesses."
        badgeIcon={UserCheck}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-black/[0.06] pb-5 text-left">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-charcoal text-white shadow-subtle'
                  : 'bg-white text-charcoal/70 hover:text-charcoal hover:bg-slate-100 border border-black/[0.06]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {displayedRoles.map((role) => (
            <div
              key={role}
              onClick={() => handleHireRole(role)}
              data-cursor-label="HIRE"
              className="group bg-white p-6 rounded-2xl border border-black/[0.07] hover:border-brand-red/40 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-navy group-hover:bg-brand-red transition-colors" />
                <span className="font-display text-sm font-bold text-charcoal group-hover:text-brand-red transition-colors">
                  {role}
                </span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal/50 group-hover:text-brand-red flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                <span>Hire</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          ))}
        </div>

        {/* Crucial Non-Job-Portal Disclaimer */}
        <div className="p-8 rounded-3xl bg-white border border-black/[0.07] text-left mb-20 shadow-subtle flex items-start gap-5">
          <div className="w-10 h-10 rounded-2xl bg-brand-navy-light text-brand-navy flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-5 h-5 text-brand-navy" />
          </div>
          <div className="space-y-1.5">
            <h4 className="font-display text-base font-bold text-charcoal">Recruitment Scope & Disclaimer</h4>
            <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
              {rolesData.disclaimer}
            </p>
          </div>
        </div>

        {/* Roles Action Box */}
        <div className="bg-white rounded-3xl border border-black/[0.08] p-8 sm:p-12 shadow-premium flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 text-left">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
              Need a specialized profile not listed here?
            </h3>
            <p className="text-base text-charcoal/70 mt-2 font-normal">
              We frequently handle tailored recruitment requirements matching unique business models, shifts, or certifications.
            </p>
          </div>

          <MagneticButton strength={0.2}>
            <Link
              to="/request-hiring"
              data-cursor-label="CUSTOM"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-red hover:bg-brand-red-dark text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-glow-red transition-all duration-300 shrink-0 group"
            >
              <span>Request Custom Role Sourcing</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </MagneticButton>
        </div>

      </div>
    </div>
  );
}
