import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../../lib/gsap';
import { useMotionContext } from './MotionProvider';
import { useTheme } from '../../context/ThemeContext';

export function CustomCursor() {
  const { isTouch, isReducedMotion } = useMotionContext();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);

  useEffect(() => {
    if (isTouch || isReducedMotion || typeof window === 'undefined') return;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    // Use gsap.quickTo for high-performance 60fps cursor trailing
    const xToDot = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3' });
    const yToDot = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3' });
    const xToRing = gsap.quickTo(ring, 'x', { duration: 0.25, ease: 'power2.out' });
    const yToRing = gsap.quickTo(ring, 'y', { duration: 0.25, ease: 'power2.out' });

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    let isVisible = false;

    const handlePointerMove = (e: PointerEvent) => {
      if (!isVisible) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
        isVisible = true;
      }
      xToDot(e.clientX);
      yToDot(e.clientY);
      xToRing(e.clientX);
      yToRing(e.clientY);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest('button, a, [data-cursor], [data-magnetic], input, textarea, .bento-card, .clickable');
        if (interactiveEl) {
          setIsHovered(true);
          const customLabel = interactiveEl.getAttribute('data-cursor');
          setCursorText(customLabel || null);
        } else {
          setIsHovered(false);
          setCursorText(null);
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.25 });
      isVisible = false;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouch, isReducedMotion]);

  if (isTouch || isReducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Central pinpoint dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#DB2777] shadow-[0_0_10px_#DB2777] pointer-events-none transition-transform duration-100 ease-out"
        style={{
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.7 : isHovered ? 0 : 1})`,
        }}
      />

      {/* Outer fluid trailing ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none flex items-center justify-center transition-all duration-200 ease-out ${
          isHovered
            ? 'w-12 h-12 bg-[#DB2777]/15 border border-[#DB2777] backdrop-blur-[2px] shadow-[0_0_20px_rgba(219,39,119,0.35)]'
            : isDark
            ? 'w-7 h-7 border border-[#2C2645] bg-transparent'
            : 'w-7 h-7 border border-[#0F1115]/35 bg-transparent'
        }`}
        style={{
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.85 : isHovered ? 1.3 : 1})`,
        }}
      >
        {cursorText && (
          <span className="text-[8px] font-mono font-bold tracking-widest text-[#DB2777] uppercase">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}

export default CustomCursor;
