'use client';

import { useState, useEffect } from 'react';

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<'sm' | 'lg' | 'md' | 'xl' | 'default'>('default');

  useEffect(() => {
    const updateBreakpoint = () => {
      console.log('Updating breakpoint based on window width:', window.innerWidth);

      if (window.innerWidth >= 1280) {
        setBreakpoint('xl');
      } else if (window.innerWidth >= 1024) {
        setBreakpoint('lg');
      } else if (window.innerWidth >= 768) {
        setBreakpoint('md');
      } else if (window.innerWidth >= 320) {
        setBreakpoint('sm');
      } else {
        setBreakpoint('default');
      }
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);

    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
}

export default useBreakpoint;
