import React, { useRef } from 'react';
import { gsap } from '../../lib/gsap';
import { useMotionContext } from './MotionProvider';

export interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'glass' | 'ghost' | 'glow';
  strength?: number;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function MagneticButton({
  children,
  variant = 'primary',
  strength = 0.35,
  className = '',
  onClick,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);
  const { isReducedMotion } = useMotionContext();

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isReducedMotion || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(buttonRef.current, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: 'power2.out',
    });

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        x: x * (strength * 0.5),
        y: y * (strength * 0.5),
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseLeave = () => {
    if (isReducedMotion || !buttonRef.current) return;

    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'elastic.out(1.1, 0.4)',
    });

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1.1, 0.4)',
      });
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[#DB2777] text-white hover:bg-[#be185d] shadow-[0_0_24px_rgba(219,39,119,0.4)] hover:shadow-[0_0_36px_rgba(219,39,119,0.65)] border border-[#DB2777]/80';
      case 'glow':
        return 'bg-[#DB2777] text-white shadow-[0_0_30px_rgba(219,39,119,0.5)] hover:shadow-[0_0_45px_rgba(219,39,119,0.8)] border border-white/20 hover:bg-[#be185d]';
      case 'glass':
        return 'bg-white/5 dark:bg-[#17132A]/80 text-foreground hover:bg-white/10 dark:hover:bg-[#1F1938] border border-[#2C2645] hover:border-[#DB2777]/60 backdrop-blur-md shadow-lg';
      case 'ghost':
        return 'bg-transparent text-foreground hover:text-[#DB2777] border border-transparent';
      default:
        return 'bg-[#DB2777] text-white';
    }
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-magnetic="true"
      className={`relative inline-flex items-center justify-center font-heading font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors duration-200 cursor-pointer overflow-hidden group select-none ${getVariantStyles()} ${className}`}
      {...props}
    >
      <span ref={contentRef} className="relative z-10 flex items-center gap-2 pointer-events-none">
        {children}
      </span>
      {/* Subtle light sweep reflection */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
    </button>
  );
}

export default MagneticButton;
