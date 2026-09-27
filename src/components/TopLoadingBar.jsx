import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export default function TopLoadingBar() {
  const location = useLocation();
  const barRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip on first render as full Preloader handles initial site arrival
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const el = barRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.set(el, { width: '0%', opacity: 1, display: 'block' })
        .to(el, { width: '70%', duration: 0.25, ease: 'power1.out' })
        .to(el, { width: '100%', duration: 0.2, ease: 'power2.inOut' })
        .to(el, {
          opacity: 0,
          duration: 0.25,
          ease: 'power1.in',
          onComplete: () => {
            gsap.set(el, { width: '0%', display: 'none' });
          },
        });
    });

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 h-[2.5px] bg-brand-red z-[9998] pointer-events-none shadow-[0_1px_6px_rgba(166,25,46,0.35)]"
      style={{ width: '0%', display: 'none' }}
    />
  );
}
