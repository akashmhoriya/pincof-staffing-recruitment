import React, { useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { rolesData } from '../data/roles';
import { UserCheck, Info, ArrowRight, ShieldCheck } from 'lucide-react';

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
    <div className="bg-surface-muted min-h-screen pb-20">
      <PageHeader
        eyebrow="TALENT BENCHMARKS"
        title="Roles We Help Businesses Fill"
        description="We source and screen dependable professionals across front-of-house, management, and operational functions for commercial businesses."
        badgeIcon={UserCheck}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-200/80 pb-4 text-left">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-charcoal text-white shadow-sm'
                  : 'bg-white text-charcoal-muted hover:text-charcoal hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {displayedRoles.map((role) => (
            <div
              key={role}
              onClick={() => handleHireRole(role)}
              className="group bg-white p-5 rounded-xl border border-surface-border hover:border-brand-red/40 hover:shadow-premium hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-navy group-hover:bg-brand-red transition-colors" />
                <span className="text-sm font-bold text-charcoal group-hover:text-brand-red transition-colors">
                  {role}
                </span>
              </div>
              <span className="text-xs font-semibold text-charcoal-light group-hover:text-brand-red flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                <span>Hire</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          ))}
        </div>

        {/* Crucial Non-Job-Portal Disclaimer */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 text-left mb-16 shadow-subtle flex items-start gap-4">
          <Info className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-charcoal">Recruitment Scope & Disclaimer</h4>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              {rolesData.disclaimer}
            </p>
          </div>
        </div>

        {/* Roles Action Box */}
        <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal">
              Need a specialized profile not listed here?
            </h3>
            <p className="text-sm text-charcoal-muted mt-1.5 max-w-xl">
              We frequently handle tailored recruitment requirements matching unique business models, shifts, or certifications.
            </p>
          </div>

          <Link
            to="/request-hiring"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-sm shadow-md transition-all shrink-0"
          >
            <span>Request Custom Role Sourcing</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
