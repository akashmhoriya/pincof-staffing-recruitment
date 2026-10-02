import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse/trackpad)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!isFinePointer || hasTouch) {
      return;
    }

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    // Fast position setters
    const setDotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power2.out' });
    const setDotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power2.out' });
    const setRingX = gsap.quickTo(ring, 'x', { duration: 0.28, ease: 'power2.out' });
    const setRingY = gsap.quickTo(ring, 'y', { duration: 0.28, ease: 'power2.out' });

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Delegate hover listeners for interactive elements
    const handleOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor], input, textarea, select, .cursor-pointer');
      if (target) {
        setIsHovered(true);
        const label = target.getAttribute('data-cursor-label') || '';
        setCursorText(label);
      }
    };

    const handleOut = (e) => {
      const target = e.target.closest('a, button, [data-cursor], input, textarea, select, .cursor-pointer');
      if (target) {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, [isVisible]);

  return (
    <div
      className={`hidden md:block fixed inset-0 pointer-events-none z-[99999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Precision Center Dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-brand-red transition-transform duration-200 ease-out ${
          isHovered ? 'scale-0' : 'scale-100'
        }`}
      />

      {/* Smooth Follower Ring / Pill */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 rounded-full border border-brand-red/50 transition-all duration-300 ease-out flex items-center justify-center ${
          isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 bg-brand-red/10 border-brand-red backdrop-blur-[2px] scale-110'
            : 'w-8 h-8 scale-100'
        }`}
      >
        {cursorText && (
          <span className="text-[9px] font-black uppercase tracking-widest text-brand-red px-1 select-none animate-fadeIn">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
