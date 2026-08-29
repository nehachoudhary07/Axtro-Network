import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Centralized GSAP plugin registration
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  
  // Set refined defaults for modern cinematic feel
  gsap.defaults({
    ease: 'power3.out',
    duration: 0.8,
  });

  // Optimize ScrollTrigger refresh
  ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    ignoreMobileResize: true,
  });
}

export { gsap, ScrollTrigger, useGSAP };
