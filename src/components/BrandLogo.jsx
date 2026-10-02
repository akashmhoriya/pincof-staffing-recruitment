import React from 'react';
import starbucksLogo from '../assets/brands/starbucks.svg';
import levisLogo from '../assets/brands/levis.svg';
import peterEnglandLogo from '../assets/brands/peter-england.svg';
import allenSollyLogo from '../assets/brands/allen-solly.png';
import natufLogo from '../assets/brands/natuf.svg';
import otherEnterprisesLogo from '../assets/brands/other-enterprises.svg';

const brandLogoMap = {
  'starbucks': {
    src: starbucksLogo,
    alt: 'Starbucks Official Logo',
  },
  'levis': {
    src: levisLogo,
    alt: "Levi's Official Logo",
  },
  'peter-england': {
    src: peterEnglandLogo,
    alt: 'Peter England Official Logo',
  },
  'allen-solly': {
    src: allenSollyLogo,
    alt: 'Allen Solly Official Logo',
  },
  'natuf': {
    src: natufLogo,
    alt: 'NATUF Official Logo',
  },
  'other-enterprises': {
    src: otherEnterprisesLogo,
    alt: 'Multi-Unit Retail & F&B Network',
  },
};

/**
 * Official BrandLogo image component using high-resolution brand logo images
 */
export default function BrandLogo({ id, className = "w-7 h-7", alt, ...props }) {
  const normalizedId = String(id || '').toLowerCase().trim();
  const brand = brandLogoMap[normalizedId] || brandLogoMap['other-enterprises'];

  return (
    <img
      src={brand.src}
      alt={alt || brand.alt}
      className={`object-contain select-none pointer-events-none ${className}`}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}
