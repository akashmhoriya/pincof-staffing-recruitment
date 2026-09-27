import React, { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export default function PageTransition({ children }) {
  const containerRef = useRef(null);
  const location = useLocation();

  useLayoutEffect(() => {
    // Reset scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const el = containerRef.current;
    if (el) {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 14,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.38,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        }
      );
    }
  }, [location.pathname]);

  return (
    <div key={location.pathname} ref={containerRef} className="w-full">
      {children}
    </div>
  );
}
