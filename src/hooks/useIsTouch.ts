import { useState, useEffect } from 'react';

export function useIsTouch(): boolean {
  const [isTouch, setIsTouch] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    // Check if device is strictly a coarse pointer without fine hover (e.g. mobile phone)
    const isCoarseOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    const isSmallScreen = window.innerWidth < 768;
    return isCoarseOnly && isSmallScreen;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkTouch = () => {
      const isCoarseOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      const isSmallScreen = window.innerWidth < 768;
      setIsTouch(isCoarseOnly && isSmallScreen);
    };

    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  return isTouch;
}
