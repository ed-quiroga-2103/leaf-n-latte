// src/components/ui/CircleImage.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import useBreakpoint from '@/app/hooks/useBreakpoint';

interface CircleImageProps {
  src: string;
  alt: string;
  size?: number; // Diameter of the circle
  responsiveSizes?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

const CircleImage: React.FC<CircleImageProps> = ({ src, alt, size, responsiveSizes }) => {
  const breakpoint = useBreakpoint();

  console.log('Current breakpoint:', breakpoint);

  const finalSize = size
    ? size
    : breakpoint !== 'default' && responsiveSizes
      ? responsiveSizes[breakpoint]
      : 100; // Default size if not provided

  return (
    <div
      style={{
        width: finalSize,
        height: finalSize,
        borderRadius: '50%',
        overflow: 'hidden',
      }}
    >
      <Image src={src} alt={alt} width={finalSize} height={finalSize} />
    </div>
  );
};

export default CircleImage;
