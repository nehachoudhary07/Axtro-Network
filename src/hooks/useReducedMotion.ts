import { useState, useEffect } from 'react';

export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    
    // Check URL parameter kill-switch
    const params = new URLSearchParams(window.location.search);
    if (params.get('motion') === 'off') return true;

    // Check localStorage kill-switch
    if (localStorage.getItem('axtro_motion') === 'off') return true;

    // Check system preference
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => {
      const params = new URLSearchParams(window.location.search);
      const isParamOff = params.get('motion') === 'off';
      const isLocalOff = localStorage.getItem('axtro_motion') === 'off';
      setReducedMotion(isParamOff || isLocalOff || mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return reducedMotion;
}
