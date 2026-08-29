export const MOTION_TOKENS = {
  duration: {
    instant: 0.15,
    fast: 0.35,
    medium: 0.65,
    slow: 1.0,
    deliberate: 1.4,
  },
  ease: {
    cinematic: 'power3.out',
    smooth: 'power2.out',
    spring: 'elastic.out(1, 0.75)',
    expo: 'expo.out',
    inOut: 'power3.inOut',
  },
  stagger: {
    micro: 0.03,
    tight: 0.06,
    relaxed: 0.12,
  },
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};
