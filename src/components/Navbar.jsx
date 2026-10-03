import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Award, HelpCircle, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/pincof-logo-transparent.png';
import MagneticButton from './MagneticButton';
import gsap from 'gsap';

export default function Navbar({ onOpenHiringModal: _onOpenHiringModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shouldRenderDrawer, setShouldRenderDrawer] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const mobileDrawerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  const closeMobileMenuImmediately = () => {
    setMobileMenuOpen(false);
    setShouldRenderDrawer(false);
  };

  // Close menus on page navigation
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
    setShouldRenderDrawer(false);
    setMoreDropdownOpen(false);
  }

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Smooth accordion & staggered kinetic slide animation for mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      setShouldRenderDrawer(true);
    } else if (shouldRenderDrawer && mobileDrawerRef.current) {
      const items = mobileDrawerRef.current.querySelectorAll('.mobile-nav-item');
      gsap.killTweensOf([mobileDrawerRef.current, items]);

      const tl = gsap.timeline({
        onComplete: () => {
          setShouldRenderDrawer(false);
        },
      });

      tl.to(items, {
        opacity: 0,
        x: -12,
        duration: 0.16,
        stagger: 0.015,
        ease: 'power2.in',
      }).to(
        mobileDrawerRef.current,
        {
          height: 0,
          opacity: 0,
          duration: 0.24,
          ease: 'power3.inOut',
        },
        '-=0.08'
      );
    }
  }, [mobileMenuOpen]);

  useLayoutEffect(() => {
    if (mobileMenuOpen && shouldRenderDrawer && mobileDrawerRef.current) {
      const items = mobileDrawerRef.current.querySelectorAll('.mobile-nav-item');
      gsap.killTweensOf([mobileDrawerRef.current, items]);

      // Animate container expanding down
      gsap.fromTo(
        mobileDrawerRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.38, ease: 'power3.out' }
      );

      // Staggered kinetic slide-in from the left
      gsap.fromTo(
        items,
        { opacity: 0, x: -20, y: 4 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.34,
          stagger: 0.035,
          ease: 'power2.out',
          delay: 0.04,
        }
      );
    }
  }, [shouldRenderDrawer, mobileMenuOpen]);

  // Primary visible links (spacious, focused)
  const primaryLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Roles', path: '/roles' },
    { label: 'Hiring Process', path: '/process' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  // Secondary items in clean dropdown
  const secondaryLinks = [
    {
      label: 'Why PINCOF',
      path: '/why-us',
      desc: 'Our recruitment standards & principles',
      icon: ShieldCheck,
    },
    {
      label: 'Selected Experience',
      path: '/experience',
      desc: 'Supported brands & hiring history',
      icon: Award,
    },
    {
      label: 'FAQ',
      path: '/faq',
      desc: 'Answers to common hiring inquiries',
      icon: HelpCircle,
    },
  ];

  const isMoreActive = secondaryLinks.some((link) => location.pathname === link.path);

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-xl border-b border-black/[0.06] shadow-subtle py-3 sm:py-3.5'
            : 'bg-white/60 backdrop-blur-md border-b border-black/[0.03] py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-14">
            
            {/* Clean Logo - High Visibility */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="PINCOF Home"
              data-cursor-label="PINCOF"
            >
              <img
                src={logoImg}
                alt="PINCOF"
                className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </Link>

            {/* Desktop Navigation Links - Minimalist, Spacious & Editorial */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
              {primaryLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[13px] tracking-wide font-medium transition-all duration-200 relative py-1 focus:outline-none group ${
                      isActive
                        ? 'text-brand-red font-semibold'
                        : 'text-charcoal/70 hover:text-charcoal'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] bg-brand-red rounded-full transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full bg-charcoal/30'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}

              {/* Elegant "More" Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  className={`flex items-center gap-1.5 text-[13px] tracking-wide font-medium transition-colors py-1 focus:outline-none cursor-pointer ${
                    isMoreActive || moreDropdownOpen
                      ? 'text-brand-red font-semibold'
                      : 'text-charcoal/70 hover:text-charcoal'
                  }`}
                  aria-expanded={moreDropdownOpen}
                >
                  <span>More</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      moreDropdownOpen ? 'rotate-180 text-brand-red' : 'text-charcoal/40'
                    }`}
                  />
                </button>

                {/* Dropdown Menu Panel */}
                {moreDropdownOpen && (
                  <div className="absolute top-full right-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl border border-black/[0.08] shadow-2xl py-2 z-50 animate-fadeIn text-left overflow-hidden">
                    <div className="px-4 py-2 border-b border-black/[0.04]">
                      <span className="text-[10px] font-bold tracking-widest text-charcoal/40 uppercase">
                        Explore PINCOF
                      </span>
                    </div>
                    {secondaryLinks.map((item) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setMoreDropdownOpen(false)}
                          className={`flex items-start gap-3.5 px-4 py-3 hover:bg-slate-50 transition-colors ${
                            isActive ? 'bg-brand-red-light/60 text-brand-red font-semibold' : 'text-charcoal'
                          }`}
                        >
                          <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 text-brand-red">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="block text-xs font-bold leading-snug">
                              {item.label}
                            </span>
                            <span className="block text-[11px] text-charcoal-muted font-normal mt-0.5">
                              {item.desc}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </nav>

            {/* Desktop Right CTA Button - Magnetic High-End Feel */}
            <div className="hidden lg:flex items-center gap-3">
              <MagneticButton strength={0.25}>
                <Link
                  to="/request-hiring"
                  data-cursor-label="HIRE"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase text-white bg-brand-red hover:bg-brand-red-dark shadow-sm hover:shadow-glow-red transition-all duration-300 group"
                >
                  <span>Request Hiring Support</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
            </div>

            {/* Mobile Actions: Compact CTA + Clean Hamburger */}
            <div className="flex items-center lg:hidden gap-2.5">
              <Link
                to="/request-hiring"
                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-brand-red hover:bg-brand-red-dark transition-all"
              >
                Hire Staff
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-charcoal hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
                aria-expanded={mobileMenuOpen}
              >
                <div className={`transition-transform duration-300 ease-out ${mobileMenuOpen ? 'rotate-90 scale-95' : 'rotate-0 scale-100'}`}>
                  {mobileMenuOpen ? <X className="w-5 h-5 text-brand-red" /> : <Menu className="w-5 h-5" />}
                </div>
              </button>
            </div>

          </div>
        </div>

        {/* Clean, Editorial Mobile Drawer */}
        {shouldRenderDrawer && (
          <div
            ref={mobileDrawerRef}
            className="lg:hidden border-b border-black/[0.08] bg-white/98 backdrop-blur-2xl shadow-2xl text-left overflow-hidden"
          >
            <div className="px-6 pt-5 pb-8">
              <div className="space-y-1.5 mb-6">
                {primaryLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={closeMobileMenuImmediately}
                      className={`mobile-nav-item block px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? 'text-brand-red bg-brand-red-light font-bold'
                          : 'text-charcoal hover:text-brand-red hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </NavLink>
                  );
                })}

                <div className="pt-3 pb-1 border-t border-slate-100">
                  <span className="px-3 text-[10px] font-bold text-charcoal/40 uppercase tracking-widest block mb-2">
                    More Information
                  </span>
                  {secondaryLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={closeMobileMenuImmediately}
                        className={`mobile-nav-item block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          isActive
                            ? 'text-brand-red bg-brand-red-light font-bold'
                            : 'text-charcoal/80 hover:text-brand-red hover:bg-slate-50'
                        }`}
                      >
                        {link.label}
                      </NavLink>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <Link
                  to="/request-hiring"
                  onClick={closeMobileMenuImmediately}
                  className="mobile-nav-item w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all text-center"
                >
                  <span>Request Hiring Support</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
