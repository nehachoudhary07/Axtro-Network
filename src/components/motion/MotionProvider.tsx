import React, { createContext, useContext, useEffect, useState } from 'react';
import { initLenis, destroyLenis } from '../../lib/lenis';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useIsTouch } from '../../hooks/useIsTouch';

interface MotionContextType {
  isReducedMotion: boolean;
  isTouch: boolean;
  isPreloaded: boolean;
  setIsPreloaded: (val: boolean) => void;
}

const MotionContext = createContext<MotionContextType>({
  isReducedMotion: false,
  isTouch: false,
  isPreloaded: false,
  setIsPreloaded: () => {},
});

export const useMotionContext = () => useContext(MotionContext);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const isReducedMotion = useReducedMotion();
  const isTouch = useIsTouch();
  const [isPreloaded, setIsPreloaded] = useState<boolean>(false);

  useEffect(() => {
    // Only initialize Lenis if not in reduced motion mode and not on mobile touch where native inertia is optimal
    if (!isReducedMotion && !isTouch) {
      initLenis({ disabled: false });
    } else {
      initLenis({ disabled: true });
    }

    return () => {
      destroyLenis();
    };
  }, [isReducedMotion, isTouch]);

  return (
    <MotionContext.Provider
      value={{
        isReducedMotion,
        isTouch,
        isPreloaded,
        setIsPreloaded,
      }}
    >
      {children}
    </MotionContext.Provider>
  );
}
