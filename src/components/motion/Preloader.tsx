import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../../lib/gsap';
import { useMotionContext } from './MotionProvider';

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const { isReducedMotion, setIsPreloaded } = useMotionContext();
  const [shouldRender, setShouldRender] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If reduced motion or session already viewed, finish immediately
    const hasLoaded = sessionStorage.getItem('axtro_preloaded');
    if (isReducedMotion || hasLoaded === 'true') {
      setIsPreloaded(true);
      setShouldRender(false);
      onComplete?.();
      return;
    }

    const safetyTimer = setTimeout(() => {
      sessionStorage.setItem('axtro_preloaded', 'true');
      setIsPreloaded(true);
      setShouldRender(false);
      onComplete?.();
    }, 1200);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          clearTimeout(safetyTimer);
          sessionStorage.setItem('axtro_preloaded', 'true');
          setIsPreloaded(true);
          setShouldRender(false);
          onComplete?.();
        },
      });

      // Quick 0.9s high-tech intro sequence
      tl.set(containerRef.current, { opacity: 1 })
        .fromTo(
          logoRef.current,
          { scale: 0.85, opacity: 0, filter: 'blur(8px)' },
          { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.35, ease: 'power3.out' }
        )
        .fromTo(
          barRef.current,
          { width: '0%' },
          { width: '100%', duration: 0.45, ease: 'power2.inOut' },
          '-=0.15'
        )
        .fromTo(
          textRef.current,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' },
          '-=0.25'
        )
        .to(containerRef.current, {
          opacity: 0,
          scale: 1.03,
          duration: 0.3,
          ease: 'power3.inOut',
          delay: 0.05,
        });
    }, containerRef);

    return () => {
      clearTimeout(safetyTimer);
      ctx.revert();
    };
  }, [isReducedMotion, setIsPreloaded, onComplete]);

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0E0B1A] text-white select-none pointer-events-auto transition-opacity duration-300"
      style={{ opacity: 1 }}
    >
      <div className="flex flex-col items-center max-w-xs w-full px-6 space-y-6">
        {/* Glowing Brand Glyph */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#DB2777] blur-2xl opacity-40 rounded-full animate-pulse" />
          <svg
            ref={logoRef}
            viewBox="0 0 100 120"
            className="w-16 h-20 relative z-10 drop-shadow-[0_0_20px_rgba(219,39,119,0.6)]"
          >
            <polygon points="48,16 66,28 55,62 48,16" fill="#2E083B" />
            <polygon points="48,16 57,18 47,56 36,54" fill="#7E22CE" />
            <polygon points="35,62 47,64 34,114 16,114" fill="#DB2777" />
            <polygon points="14,64 90,46 90,49 14,67" fill="#FFFFFF" />
            <polygon points="55,62 66,28 89,114 66,114 56,70" fill="#DB2777" />
            <circle cx="49" cy="15" r="7.5" fill="#DB2777" stroke="#FFFFFF" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Brand Text & Status */}
        <div ref={textRef} className="text-center space-y-1.5">
          <div className="font-heading font-black text-sm tracking-[0.25em] text-[#F5F3FA] uppercase">
            AXTRO NETWORKS
          </div>
          <div className="text-[10px] font-mono text-[#9C94B8] tracking-widest uppercase">
            INITIALIZING CORE FABRIC...
          </div>
        </div>

        {/* High-tech Progress Line */}
        <div className="w-full h-[2px] bg-[#2C2645] rounded-full overflow-hidden">
          <div
            ref={barRef}
            className="h-full bg-[#DB2777] shadow-[0_0_12px_#DB2777]"
          />
        </div>
      </div>
    </div>
  );
}

export default Preloader;
