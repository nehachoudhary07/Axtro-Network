import React, { useEffect, useState } from 'react';
import { useMotionContext } from './MotionProvider';

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const { setIsPreloaded } = useMotionContext();
  const [visible, setVisible] = useState(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('axtro_preloaded')) {
      return false;
    }
    return true;
  });

  useEffect(() => {
    if (!visible) {
      setIsPreloaded(true);
      onComplete?.();
      return;
    }

    setIsPreloaded(true);
    try {
      sessionStorage.setItem('axtro_preloaded', '1');
    } catch (e) {}

    const timer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 350);

    return () => clearTimeout(timer);
  }, [setIsPreloaded, onComplete, visible]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 inset-x-0 z-50 h-[3px] pointer-events-none overflow-hidden bg-transparent" aria-hidden="true">
      <div
        className="h-full w-full bg-gradient-to-r from-[#7E22CE] via-[#DB2777] to-[#F43F5E] shadow-[0_0_12px_#DB2777] transition-transform duration-300 ease-out"
      />
    </div>
  );
}

export default Preloader;
