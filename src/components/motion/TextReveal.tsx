import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import { useMotionContext } from './MotionProvider';

interface TextRevealProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  className?: string;
  delay?: number;
  triggerOnScroll?: boolean;
}

export function TextReveal({
  children,
  as: Component = 'div',
  className = '',
  delay = 0,
  triggerOnScroll = true,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { isReducedMotion } = useMotionContext();

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;
    const element = containerRef.current;

    if (isReducedMotion) {
      gsap.set(element, { opacity: 1, y: 0 });
      return;
    }

    // Check if element is already in viewport
    const rect = element.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (!triggerOnScroll || isInViewport) {
      gsap.fromTo(
        element,
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay,
          ease: 'power3.out',
          overwrite: 'auto',
        }
      );
    } else {
      gsap.set(element, { y: 16, opacity: 0 });
      ScrollTrigger.create({
        trigger: element,
        start: 'top 92%',
        once: true,
        onEnter: () => {
          gsap.to(element, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        },
      });
    }
  }, [isReducedMotion, delay, triggerOnScroll]);

  return (
    <Component
      ref={containerRef as any}
      className={`will-change-transform ${className}`}
    >
      {children}
    </Component>
  );
}
