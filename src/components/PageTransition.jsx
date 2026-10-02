import React, { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export default function PageTransition({ children }) {
  const containerRef = useRef(null);
  const location = useLocation();
  const isFirstLoad = useRef(true);

  useLayoutEffect(() => {
    // Skip on first initial render so Preloader handles the landing reveal
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    // Clean, instant content cross-fade and subtle upward glide (no duplicate preloader or curtain)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 12,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        }
      );
    }, el);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div key={location.pathname} ref={containerRef} className="w-full">
      {children}
    </div>
  );
}
