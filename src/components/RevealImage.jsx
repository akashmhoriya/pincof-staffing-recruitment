import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RevealImage({
  src,
  alt = '',
  className = '',
  imageClassName = '',
  aspectRatio = 'aspect-[4/5]',
  parallax = true,
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imageRef.current;
    if (!container || !img) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(container, { clipPath: 'inset(0% 0% 0% 0%)' });
      gsap.set(img, { scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // Reveal timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          once: true,
        },
      });

      tl.fromTo(
        container,
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.1,
          ease: 'power3.inOut',
        }
      ).fromTo(
        img,
        { scale: 1.25, filter: 'grayscale(30%)' },
        {
          scale: 1,
          filter: 'grayscale(0%)',
          duration: 1.4,
          ease: 'power2.out',
        },
        '-=1.0'
      );

      // Parallax effect on scroll
      if (parallax) {
        gsap.to(img, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [parallax]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${aspectRatio} ${className}`}
      style={{ clipPath: 'inset(100% 0% 0% 0%)' }}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover will-change-transform ${imageClassName}`}
        loading="lazy"
      />
    </div>
  );
}
