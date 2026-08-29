import React, { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../../lib/gsap';
import { useMotionContext } from '../motion/MotionProvider';
import { useTheme } from '../../context/ThemeContext';
import { Server, ShieldCheck, Globe, Zap } from '../animated-icons';

export interface TimelineStepItem {
  id: string;
  stepNum: number;
  badge: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  artText: string;
  artSubtext: string;
  icon: React.ReactNode;
}

export type ConnectedCardItem = TimelineStepItem;

const defaultSteps: TimelineStepItem[] = [
  {
    id: '01',
    stepNum: 1,
    badge: '1',
    title: 'Bare-Metal Dark Fiber',
    description:
      'Point-to-point dedicated optical wavelength conduits across Delhi NCR, Mumbai, and Chennai. Engineered for zero oversubscription and mathematically predictable throughput.',
    stat: '1.2+ Tbps',
    statLabel: 'Active Capacity',
    artText: '1.2T',
    artSubtext: 'DARK FIBER',
    icon: <Server className="w-6 h-6 text-[#DB2777]" />,
  },
  {
    id: '02',
    stepNum: 2,
    badge: '2',
    title: 'Autonomous Edge Scrubbing',
    description:
      'Multi-terabit edge mitigation fabric that autonomously neutralizes volumetric L3/L4/L7 floods in under 1 second with zero latency penalty on legitimate transit.',
    stat: '< 1.0s',
    statLabel: 'Mitigation Response',
    artText: '< 1s',
    artSubtext: 'EDGE SCRUBBING',
    icon: <ShieldCheck className="w-6 h-6 text-[#DB2777]" />,
  },
  {
    id: '03',
    stepNum: 3,
    badge: '3',
    title: 'Direct Exchange Interconnects',
    description:
      'Direct cross-connects into Connect IX, NIXI, and primary transit exchanges to bypass intermediate transit choke points and optimize regional eyeball routing.',
    stat: '-3 to -5',
    statLabel: 'Hop Count Reduction',
    artText: 'IX',
    artSubtext: 'SUB-3MS PEERING',
    icon: <Globe className="w-6 h-6 text-[#DB2777]" />,
  },
  {
    id: '04',
    stepNum: 4,
    badge: '4',
    title: 'Self-Healing Optical Mesh',
    description:
      'Carrier-grade diverse conduit entry and sub-second automatic route failover across primary carrier-neutral MMR facilities for uninterrupted mission-critical continuity.',
    stat: '99.99%',
    statLabel: 'Uptime SLA',
    artText: '99.99%',
    artSubtext: 'DUAL-RING MESH',
    icon: <Zap className="w-6 h-6 text-[#DB2777]" />,
  },
];

interface ScrollRevealTimelineProps {
  steps?: TimelineStepItem[];
  className?: string;
}

export function ScrollRevealTimeline({
  steps = defaultSteps,
  className = '',
}: ScrollRevealTimelineProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { isReducedMotion } = useMotionContext();
  const { theme } = useTheme();

  useGSAP(
    () => {
      if (isReducedMotion || !sectionRef.current || !progressBarRef.current) return;

      const totalSteps = steps.length;
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 20%',
            end: '+=1600',
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Initialize progress line and step visibility
        gsap.set(progressBarRef.current, { width: '0%' });

        stepRefs.current.forEach((el, idx) => {
          if (idx === 0) {
            // Step 1 starts visible
            gsap.set(el, { opacity: 1, x: 0 });
          } else {
            // Steps 2, 3, 4 start hidden with negative offset
            gsap.set(el, { opacity: 0, x: -40 });
          }
        });

        // Sequential step reveals from left to right tied to scroll scrub
        for (let i = 1; i < totalSteps; i++) {
          const progressTarget = `${(i / (totalSteps - 1)) * 100}%`;
          const targetEl = stepRefs.current[i];

          // 1. Draw connecting line forward
          tl.to(
            progressBarRef.current,
            {
              width: progressTarget,
              ease: 'power1.inOut',
              duration: 1,
            },
            `step-${i}`
          );

          // 2. Reveal next step (fade in + slide into position from left to right)
          if (targetEl) {
            tl.to(
              targetEl,
              {
                opacity: 1,
                x: 0,
                ease: 'power2.out',
                duration: 0.7,
              },
              `step-${i}+=0.3`
            );
          }
        }
      });

      // Mobile: simpler fade-ins on standard scroll
      mm.add('(max-width: 767px)', () => {
        stepRefs.current.forEach((el, idx) => {
          if (!el) return;
          gsap.fromTo(
            el,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play reverse play reverse',
              },
            }
          );
        });
      });
    },
    { scope: sectionRef, dependencies: [isReducedMotion, steps] }
  );

  return (
    <div
      ref={sectionRef}
      className={`w-full max-w-7xl mx-auto select-none py-10 ${className}`}
    >
      {/* 4-Step Connected Horizontal Timeline (Left to Right) */}
      <div className="relative">
        {/* Continuous Horizontal Connecting Line Container */}
        <div className="absolute top-[164px] sm:top-[184px] left-[5%] right-[5%] h-1 z-0 hidden md:block">
          {/* Base Inactive Line Track */}
          <div className="w-full h-full bg-[#2C2645] dark:bg-[#2C2645] light:bg-[#E2E5EA] rounded-full" />

          {/* Active Animated Drawing Line */}
          <div
            ref={progressBarRef}
            className="absolute top-0 left-0 h-full bg-[#DB2777] rounded-full shadow-[0_0_12px_#DB2777]"
            style={{ width: '0%' }}
          />
        </div>

        {/* 4 Connected Step Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              ref={(el) => (stepRefs.current[idx] = el)}
              className="flex flex-col justify-start will-change-transform"
            >
              {/* 1. Top Row: Oversized Artistic Glyph */}
              <div className="h-[80px] sm:h-[140px] flex flex-col justify-end pb-2 sm:pb-4 relative overflow-hidden">
                {/* Background Shadow Watermark Letter */}
                <span className="absolute -left-2 top-0 text-6xl sm:text-8xl font-serif italic text-white/[0.04] dark:text-white/[0.04] light:text-black/[0.04] select-none pointer-events-none">
                  {step.artText}
                </span>

                {/* Foreground High-Contrast Typography Glyph */}
                <div className="relative z-10 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-5xl lg:text-6xl font-serif italic font-normal tracking-tight text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115]">
                    {step.artText}
                  </span>
                  <span className="text-[10px] font-mono text-[#DB2777] uppercase font-bold tracking-widest">
                    {step.artSubtext}
                  </span>
                </div>
              </div>

              {/* 2. Middle Row: Number Badge */}
              <div className="relative flex items-center mb-4 sm:mb-6 pt-1">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#DB2777] text-white flex items-center justify-center font-mono font-bold text-xs sm:text-sm shadow-[0_0_15px_rgba(219,39,119,0.5)] z-20">
                  {step.badge}
                </div>

                {/* Mobile connecting line stub */}
                <div className="h-0.5 flex-1 bg-[#2C2645] ml-3 md:hidden" />
              </div>

              {/* 3. Bottom Row: Title, Description, and Verified Specs */}
              <div>
                <h3 className="font-heading font-black text-lg sm:text-xl text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115] tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Clean Verified Metric Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#17132A] dark:bg-[#17132A] light:bg-[#F0F2F5] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] text-xs font-mono">
                  <span className="text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]">
                    {step.statLabel}:
                  </span>
                  <span className="text-[#DB2777] font-bold">{step.stat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollRevealTimeline;
