import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './gsap';

let lenisInstance: Lenis | null = null;

export function initLenis(options?: { disabled?: boolean }): Lenis | null {
  if (typeof window === 'undefined') return null;

  if (options?.disabled) {
    if (lenisInstance) {
      lenisInstance.destroy();
      lenisInstance = null;
    }
    return null;
  }

  if (lenisInstance) {
    return lenisInstance;
  }

  lenisInstance = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 1.5,
    wheelMultiplier: 1.0,
    infinite: false,
  });

  // Synchronize Lenis scroll with ScrollTrigger
  lenisInstance.on('scroll', () => {
    ScrollTrigger.update();
  });

  // Connect GSAP ticker to Lenis RAF
  const tickerCallback = (time: number) => {
    lenisInstance?.raf(time * 1000);
  };

  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}
