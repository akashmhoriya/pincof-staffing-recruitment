import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import QuickHireModal from './QuickHireModal';
import Toaster from './Toaster';
import Preloader from './Preloader';
import TopLoadingBar from './TopLoadingBar';
import PageTransition from './PageTransition';
import SmoothScroll from './SmoothScroll';
import CustomCursor from './CustomCursor';
import { Phone, ArrowRight } from 'lucide-react';
import { contactData } from '../data/contact';

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRequirement, setModalRequirement] = useState('Store Staff');

  const handleOpenModal = (requirement = 'Store Staff') => {
    setModalRequirement(requirement);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white text-charcoal flex flex-col relative selection:bg-brand-red selection:text-white">
        {/* Subtle desktop custom cursor */}
        <CustomCursor />

        {/* Initial Animated Loading Page */}
        <Preloader />

        {/* Top indicator bar for page transitions */}
        <TopLoadingBar />

        <ScrollToTop />
        
        {/* Reliable Global Toaster */}
        <Toaster />

        {/* Shared Navbar */}
        <Navbar onOpenHiringModal={() => handleOpenModal('Store Staff')} />

        {/* Animated Main Content from Route */}
        <main className="flex-grow flex flex-col">
          <PageTransition>
            <Outlet context={{ onOpenHiringModal: handleOpenModal }} />
          </PageTransition>
        </main>

        {/* Shared Footer on Every Page */}
        <Footer onOpenHiringModal={() => handleOpenModal('Staffing Support')} />

      {/* Quick Hire Modal */}
      <QuickHireModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        defaultRequirement={modalRequirement}
      />

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3">
        <a
          href={`tel:${contactData.phone}`}
          className="p-2.5 rounded-lg border border-slate-200 text-charcoal hover:text-brand-red hover:bg-slate-50 flex items-center justify-center shrink-0"
          aria-label="Call PINCOF"
        >
          <Phone className="w-4 h-4 text-brand-red" />
        </a>

        <Link
          to="/request-hiring"
          className="flex-1 py-3 px-5 rounded-full bg-brand-red hover:bg-brand-red-dark text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all text-center"
        >
          <span>Request Hiring Support</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  </SmoothScroll>
  );
}
