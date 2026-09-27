import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Award, HelpCircle, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/pincof-logo.png';
import { contactData } from '../data/contact';
import gsap from 'gsap';

export default function Navbar({ onOpenHiringModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  // Close menus on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [location.pathname]);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/70 shadow-sm py-3'
            : 'bg-white border-b border-slate-100 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-14">
            
            {/* Clean Logo - No Taglines or Clutter */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="PINCOF Home"
            >
              <img
                src={logoImg}
                alt="PINCOF"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation Links - Minimalist & Spacious */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
              {primaryLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[14px] tracking-wide font-medium transition-colors relative py-1 focus:outline-none ${
                      isActive
                        ? 'text-brand-red font-semibold'
                        : 'text-slate-600 hover:text-charcoal'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-brand-red rounded-full animate-fadeIn" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              {/* Elegant "More" Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  className={`flex items-center gap-1 text-[14px] tracking-wide font-medium transition-colors py-1 focus:outline-none ${
                    isMoreActive || moreDropdownOpen
                      ? 'text-brand-red font-semibold'
                      : 'text-slate-600 hover:text-charcoal'
                  }`}
                  aria-expanded={moreDropdownOpen}
                >
                  <span>More</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      moreDropdownOpen ? 'rotate-180 text-brand-red' : 'text-slate-400'
                    }`}
                  />
                </button>

                {/* Dropdown Menu Panel */}
                {moreDropdownOpen && (
                  <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-xl border border-slate-200 shadow-xl py-2 z-50 animate-fadeIn text-left">
                    {secondaryLinks.map((item) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setMoreDropdownOpen(false)}
                          className={`flex items-start gap-3 px-4 py-2.5 hover:bg-slate-50 transition-colors ${
                            isActive ? 'bg-slate-50 text-brand-red font-semibold' : 'text-charcoal'
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-brand-red">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="block text-xs font-bold leading-snug">
                              {item.label}
                            </span>
                            <span className="block text-[11px] text-charcoal-light font-normal">
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

            {/* Desktop Right CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/request-hiring"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs xl:text-sm font-semibold text-white bg-brand-red hover:bg-brand-red-dark shadow-sm hover:shadow transition-all duration-200 group active:scale-[0.98]"
              >
                <span>Request Hiring Support</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Actions: Compact CTA + Clean Hamburger */}
            <div className="flex items-center lg:hidden gap-2.5">
              <Link
                to="/request-hiring"
                className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-brand-red hover:bg-brand-red-dark transition-all"
              >
                Hire Staff
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-charcoal hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Clean, Elegant Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white px-5 pt-4 pb-6 shadow-xl animate-fadeIn text-left">
            <div className="space-y-1 mb-5">
              {primaryLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-brand-red bg-brand-red-50/80 font-bold'
                        : 'text-slate-700 hover:text-brand-red hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </NavLink>
                );
              })}

              <div className="pt-2 pb-1 border-t border-slate-100">
                <span className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  More
                </span>
                {secondaryLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        isActive
                          ? 'text-brand-red bg-brand-red-50/80 font-bold'
                          : 'text-slate-600 hover:text-brand-red hover:bg-slate-50'
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
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-sm shadow-sm transition-all text-center"
              >
                <span>Request Hiring Support</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
