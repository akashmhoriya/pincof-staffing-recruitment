import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, ShieldCheck, MapPin, Building2, X, Sparkles } from 'lucide-react';
import { brandExperienceData } from '../data/brands';
import BrandLogo from './BrandLogo';
import MagneticButton from './MagneticButton';
import gsap from 'gsap';

export default function BrandHeroCarousel() {
  const brands = brandExperienceData.brands;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isWorkDetailsOpen, setIsWorkDetailsOpen] = useState(false);

  const containerRef = useRef(null);
  const cardContentRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressTweenRef = useRef(null);
  const modalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalBrands = brands.length;
  const activeBrand = brands[currentIndex];
  const canPortal = typeof document !== 'undefined';

  // Slide transition
  const goToSlide = useCallback((newIndex, newDirection = 1) => {
    if (newIndex === currentIndex) return;
    setDirection(newDirection);
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    goToSlide((currentIndex + 1) % totalBrands, 1);
  }, [currentIndex, totalBrands, goToSlide]);

  const handlePrev = useCallback(() => {
    goToSlide((currentIndex - 1 + totalBrands) % totalBrands, -1);
  }, [currentIndex, totalBrands, goToSlide]);

  // Touch Swipe for Mobile Image Browsing
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Autoplay with GSAP Progress Bar (Continuous - never pauses on hover)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isWorkDetailsOpen || prefersReducedMotion) {
      if (progressTweenRef.current) {
        progressTweenRef.current.pause();
      }
      return;
    }

    if (progressBarRef.current) {
      gsap.set(progressBarRef.current, { scaleX: 0, transformOrigin: 'left center' });
      progressTweenRef.current = gsap.to(progressBarRef.current, {
        scaleX: 1,
        duration: 6.5,
        ease: 'none',
        onComplete: () => {
          handleNext();
        },
      });
    }

    return () => {
      if (progressTweenRef.current) {
        progressTweenRef.current.kill();
      }
    };
  }, [currentIndex, isWorkDetailsOpen, handleNext]);

  // GSAP Transition Animation for Slide Change
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardContentRef.current,
        {
          opacity: 0,
          x: direction * 35,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        }
      );

      gsap.fromTo(
        '.brand-carousel-stagger',
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.03,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        }
      );
    }, containerRef.current);

    return () => ctx.revert();
  }, [currentIndex, direction]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (isWorkDetailsOpen) return;
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
  };

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && isWorkDetailsOpen) {
        setIsWorkDetailsOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isWorkDetailsOpen]);

  // Animate modal open (smooth slide-up sheet on mobile, clean modal scale on desktop)
  useEffect(() => {
    if (isWorkDetailsOpen && modalRef.current) {
      const isMobile = window.innerWidth < 640;
      gsap.fromTo(
        modalRef.current,
        isMobile
          ? { opacity: 0, y: 60 }
          : { opacity: 0, scale: 0.96, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'power3.out' }
      );
    }
  }, [isWorkDetailsOpen]);

  // Lock body scroll and pause Lenis smoothly when work details modal is open
  useEffect(() => {
    if (isWorkDetailsOpen) {
      if (window.__lenis) {
        window.__lenis.stop();
      }
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
        if (window.__lenis) {
          window.__lenis.start();
        }
      };
    }
  }, [isWorkDetailsOpen]);

  const workDetails = activeBrand.workDetails || {};

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none focus:outline-none"
      aria-roledescription="carousel"
      aria-label="Full-Width Brand Recruitment Carousel"
    >
      {/* Top Header & Brand Quick-Selector Tabs */}
      <div className="mb-4 sm:mb-5 pb-3 border-b border-black/[0.06]">
        {/* On Mobile & Tablet (< lg): Clean 2-Row Structured Layout */}
        <div className="flex lg:hidden items-center justify-between gap-3 mb-2.5">
          {/* Eyebrow Badge & Counter */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-subtle text-[11px] font-bold text-charcoal tracking-wider uppercase whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse shrink-0" />
              <span>Featured Clients</span>
            </div>
            <span className="text-xs font-mono text-charcoal/50 font-bold whitespace-nowrap">
              {String(currentIndex + 1).padStart(2, '0')} / {String(totalBrands).padStart(2, '0')}
            </span>
          </div>

          {/* Prev/Next Buttons pinned to top right on mobile/tablet */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous brand"
              className="w-9 h-9 rounded-full bg-white hover:bg-slate-50 border border-black/[0.08] text-charcoal hover:text-brand-red flex items-center justify-center transition-all duration-200 shadow-subtle active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next brand"
              className="w-9 h-9 rounded-full bg-white hover:bg-slate-50 border border-black/[0.08] text-charcoal hover:text-brand-red flex items-center justify-center transition-all duration-200 shadow-subtle active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Row 2 on Tablet/Mobile (< lg) OR Unified Single Row on Desktop (lg+) */}
        <div className="flex items-center justify-between gap-3">
          {/* Eyebrow Badge (Desktop lg+ only) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-subtle text-[11px] font-bold text-charcoal tracking-wider uppercase whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse shrink-0" />
              <span>Featured Clients</span>
            </div>
            <span className="text-xs font-mono text-charcoal/50 font-bold whitespace-nowrap">
              {String(currentIndex + 1).padStart(2, '0')} / {String(totalBrands).padStart(2, '0')}
            </span>
          </div>

          {/* Quick Jump Brand Pills - Clean, unconstrained scrollable/flex strip */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none max-w-full w-full lg:w-auto lg:justify-center">
            {brands.map((brand, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={brand.id}
                  type="button"
                  onClick={() => goToSlide(idx, idx > currentIndex ? 1 : -1)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap ${
                    isActive
                      ? 'bg-charcoal text-white shadow-sm scale-105'
                      : 'bg-white hover:bg-slate-100 text-charcoal/70 hover:text-charcoal border border-black/[0.06]'
                  }`}
                >
                  {brand.name}
                </button>
              );
            })}
          </div>

          {/* Prev/Next Buttons (Desktop lg+ only) */}
          <div className="hidden lg:flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous brand"
              className="w-9 h-9 rounded-full bg-white hover:bg-slate-50 border border-black/[0.08] text-charcoal hover:text-brand-red flex items-center justify-center transition-all duration-200 shadow-subtle hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next brand"
              className="w-9 h-9 rounded-full bg-white hover:bg-slate-50 border border-black/[0.08] text-charcoal hover:text-brand-red flex items-center justify-center transition-all duration-200 shadow-subtle hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Visual Image Carousel Card */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="group relative w-full h-[420px] sm:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-black/[0.08] text-left select-none"
      >
        {/* Store Photography Background Image with Smooth Scale */}
        <div className="absolute inset-0 overflow-hidden bg-charcoal">
          <picture key={activeBrand.id} className="w-full h-full block">
            {activeBrand.mobileImage && (
              <source media="(max-width: 639px)" srcSet={activeBrand.mobileImage} />
            )}
            <img
              src={activeBrand.image}
              alt={`${activeBrand.name} Retail Store Experience`}
              className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-105"
              loading="eager"
            />
          </picture>
        </div>

        {/* Cinematic gradient overlay that keeps store photography vibrant and crisp */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15 pointer-events-none" />

        {/* Brand Accent Ambient Glow */}
        <div
          className="absolute -top-16 -right-16 w-80 h-80 rounded-full blur-[120px] opacity-35 pointer-events-none transition-colors duration-700"
          style={{ backgroundColor: activeBrand.accentColor || '#A6192E' }}
        />

        {/* Carousel Slide Content Overlay — Ultra-Minimal: ONLY Logo, Brand Name, and Button */}
        <div
          ref={cardContentRef}
          className="relative z-10 h-full flex items-center justify-center p-5 sm:p-7 lg:p-9"
        >
          {/* Center: Minimalist Showcase — Brand Logo + Brand Name + "View Details" Button */}
          <div className="flex flex-col items-center justify-center text-center w-full space-y-3 sm:space-y-5">
            {/* Prominent Official Brand Logo Plaque (Compact on Mobile Only) */}
            <div className="brand-carousel-stagger w-24 h-14 sm:w-44 sm:h-26 md:w-52 md:h-28 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md p-2 sm:p-4 flex items-center justify-center shadow-xl sm:shadow-2xl border border-white/60 shrink-0 transition-transform duration-300 hover:scale-105">
              <BrandLogo id={activeBrand.id} className="w-full h-full max-h-9 sm:max-h-20 object-contain" />
            </div>

            {/* Brand Name */}
            <div className="brand-carousel-stagger">
              <h2 className="font-display text-xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-xl">
                {activeBrand.name}
              </h2>
            </div>

            {/* Ultra-Minimal "View Details" Button */}
            <div className="brand-carousel-stagger pt-1">
              <MagneticButton strength={0.2} className="w-auto">
                <button
                  type="button"
                  onClick={() => setIsWorkDetailsOpen(true)}
                  data-cursor-label="DETAILS"
                  className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-brand-red hover:bg-brand-red-dark shadow-2xl hover:shadow-glow-red hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer border border-white/20"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Autoplay Progress Line at the very bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/15">
          <div
            ref={progressBarRef}
            className="h-full bg-brand-red origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </div>

      {/* Legal Transparency Note */}
      <div className="mt-3 text-center">
        <p className="text-[11px] text-charcoal/50 leading-relaxed max-w-3xl mx-auto">
          {brandExperienceData.disclaimer || "Brand names shown represent relevant hiring and staffing requirements supported by PINCOF, without claiming official endorsement or exclusive representation."}
        </p>
      </div>

      {/* CRASH-PROOF PORTAL MODAL: DETAILS OF WORK WITH THIS COMPANY */}
      {canPortal && isWorkDetailsOpen && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="work-details-modal-title"
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          data-lenis-prevent-touch="true"
          className="fixed inset-0 z-[99999] flex flex-col justify-end sm:justify-center sm:items-center p-0 sm:p-4 md:p-6"
        >
          {/* Solid Non-Blur Dark Backdrop */}
          <div
            onClick={() => setIsWorkDetailsOpen(false)}
            className="fixed inset-0 bg-black/80 transition-opacity cursor-pointer"
          />

          {/* Modal / Mobile Bottom Sheet Container */}
          <div
            ref={modalRef}
            data-lenis-prevent="true"
            data-lenis-prevent-wheel="true"
            data-lenis-prevent-touch="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="relative w-full sm:max-w-2xl lg:max-w-3xl bg-white rounded-t-[26px] sm:rounded-3xl shadow-2xl border-t sm:border border-black/10 overflow-hidden z-10 text-left h-[88vh] sm:h-auto sm:max-h-[86vh] flex flex-col overscroll-contain"
            style={{ overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' }}
          >
            {/* Modal Header */}
            <div className="relative p-4 sm:p-6 bg-[#0E1422] text-white border-b border-white/10 shrink-0">
              {/* Mobile swipe/drag handle */}
              <div className="w-10 h-1 bg-white/25 rounded-full mx-auto mb-3 sm:hidden" />

              {/* Top Row: Category Badge & Close Button */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 bg-white/10 border border-white/10 px-2.5 py-0.5 rounded-full font-semibold truncate max-w-[180px] sm:max-w-none">
                    {activeBrand.category}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded-full shrink-0">
                    Staffing Dossier
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsWorkDetailsOpen(false)}
                  aria-label="Close details"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10 shrink-0 group ml-2"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:rotate-90" />
                </button>
              </div>

              {/* Brand Identity: Logo + Name + Mandate */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-14 h-12 sm:w-20 sm:h-16 md:w-24 md:h-18 rounded-xl sm:rounded-2xl bg-white p-1.5 sm:p-2 flex items-center justify-center shadow-md border border-white/10 shrink-0">
                  <BrandLogo id={activeBrand.id} className="w-full h-full object-contain" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 id="work-details-modal-title" className="font-display text-lg sm:text-2xl font-bold text-white leading-tight truncate sm:whitespace-normal">
                    {activeBrand.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-300 font-medium line-clamp-2 mt-0.5">
                    {workDetails.mandateTitle || activeBrand.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div
              data-lenis-prevent="true"
              data-lenis-prevent-wheel="true"
              data-lenis-prevent-touch="true"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-4 sm:space-y-6 flex-1 text-charcoal overscroll-contain touch-pan-y"
              style={{
                overscrollBehavior: 'contain',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'thin',
                scrollbarColor: '#A6192E #F1F5F9'
              }}
            >
              {/* Scope of Work */}
              <div className="space-y-1.5 sm:space-y-2">
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-charcoal/50 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-brand-red shrink-0" />
                  <span>Scope of Staffing Work & Mandate</span>
                </h4>
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-black/[0.04]">
                  <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-normal">
                    {workDetails.scopeOfWork || activeBrand.fullDescription}
                  </p>
                </div>
              </div>

              {/* Roles & Positions Delivered */}
              {workDetails.rolesDelivered && (
                <div className="space-y-1.5 sm:space-y-2">
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-charcoal/50 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Positions & Roles Delivered</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                    {workDetails.rolesDelivered.map((item, idx) => (
                      <div key={idx} className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-black/[0.06] shadow-subtle text-left">
                        <p className="text-xs sm:text-sm font-bold text-charcoal flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{item.role}</span>
                        </p>
                        <p className="text-[11px] sm:text-xs text-charcoal/70 mt-1 leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4-Step Sourcing & Screening Process */}
              {workDetails.hiringProcess && (
                <div className="space-y-1.5 sm:space-y-2">
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-charcoal/50 flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-navy shrink-0" />
                    <span>Candidate Screening & Quality Verification</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {workDetails.hiringProcess.map((step, idx) => (
                      <div key={idx} className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-black/[0.04] text-xs font-medium text-charcoal/80 flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-brand-navy/10 text-brand-navy text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Operational Highlights */}
              {workDetails.operationalHighlights && (
                <div className="space-y-1.5 sm:space-y-2">
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-charcoal/50 flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-brand-red shrink-0" />
                    <span>Key Operational Deliverables & SLA Benchmarks</span>
                  </h4>
                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-black/[0.04]">
                    <ul className="space-y-2">
                      {workDetails.operationalHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0 mt-1.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Store Deployment Scope */}
              {workDetails.storeDeployment && (
                <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-brand-navy/5 border border-brand-navy/10 flex items-start gap-2.5 sm:gap-3">
                  <MapPin className="w-4 h-4 text-brand-navy shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] sm:text-[11px] font-bold text-brand-navy uppercase tracking-wider">
                      Store Formats & Outlet Locations
                    </p>
                    <p className="text-xs sm:text-sm text-charcoal/80 mt-0.5">
                      {workDetails.storeDeployment}
                    </p>
                  </div>
                </div>
              )}

              {/* Legal Transparency Disclaimer */}
              <div className="p-3 rounded-xl bg-slate-50 border border-black/[0.04] text-[10px] sm:text-[11px] text-charcoal/50 leading-relaxed">
                <span className="font-semibold text-charcoal/70">Official Attribution: </span>
                {brandExperienceData.disclaimer || "Brand names shown represent relevant hiring and staffing requirements supported by PINCOF, without claiming official endorsement or exclusive representation."}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-black/[0.06] flex items-center justify-between gap-3 shrink-0">
              <span className="text-[11px] text-charcoal/50 hidden sm:inline-block">
                PINCOF Recruitment Platform • Confidential Client Dossier
              </span>
              <button
                type="button"
                onClick={() => setIsWorkDetailsOpen(false)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl sm:rounded-full text-xs font-bold text-white bg-charcoal hover:bg-black transition-colors cursor-pointer flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Close Details</span>
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
