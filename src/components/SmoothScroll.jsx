import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const location = useLocation();

  useLayoutEffect(() => {
    // Immediately disable browser automatic scroll restoration on load
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
      return;
    }

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      prevent: (node) => {
        return Boolean(
          node?.hasAttribute?.('data-lenis-prevent') ||
          node?.closest?.('[data-lenis-prevent]') ||
          node?.closest?.('.overscroll-contain')
        );
      },
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    // Immediately reset to top on mount
    lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(500, 33);

    const handleReset = () => {
      window.scrollTo(0, 0);
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    };

    const handleAnchorClick = (e) => {
      if (e.defaultPrevented) return;

      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href === '#!') return;

      try {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          if (lenisRef.current) {
            lenisRef.current.scrollTo(target, {
              offset: -20,
              duration: 1.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          } else {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } catch {
        // Fallback for non-standard selector
      }
    };

    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('pageshow', handleReset);
    window.addEventListener('beforeunload', handleReset);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('pageshow', handleReset);
      window.removeEventListener('beforeunload', handleReset);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
      window.__lenis = null;
    };
  }, []);

  // Reset scroll position on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <>{children}</>;
}
