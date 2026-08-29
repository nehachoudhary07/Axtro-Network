import React, { useRef, useState } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../../lib/gsap';
import { useMotionContext } from '../motion/MotionProvider';
import {
  Server,
  ShieldCheck,
  Layers,
  Activity,
  Sparkles,
  CheckCircle2,
} from '../animated-icons';

export function StackingInfraSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const [activeMobileCard, setActiveMobileCard] = useState<number>(0);
  const { isReducedMotion } = useMotionContext();

  const cards = [
    {
      id: '01',
      title: 'Carrier-Grade Optical Backbone',
      subtitle: 'UNCONTENDED TRANSPORT CHANNELS',
      desc: 'Point-to-point dark optical paths linking Delhi NCR, Mumbai, and Chennai with carrier-grade optics and zero artificial throughput throttling.',
      icon: <Server className="w-5 h-5 sm:w-6 sm:h-6 text-[#DB2777]" />,
      stats: '1.2+ Tbps Capacity',
      metrics: [
        { label: 'Oversubscription', val: '1:1 Guaranteed' },
        { label: 'Backbone Jitter', val: '< 0.05 ms' },
        { label: 'SLA Availability', val: '99.99%' },
      ],
      tag: 'OPTICAL CORE',
    },
    {
      id: '02',
      title: 'Distributed Edge Scrubbing',
      subtitle: 'REAL-TIME AUTONOMOUS MITIGATION',
      desc: 'Multi-terabit edge scrubbing fabric engineered to neutralize volumetric SYN/UDP floods with zero latency degradation to legitimate transit traffic.',
      icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#DB2777]" />,
      stats: 'Multi-Tbps Mitigation',
      metrics: [
        { label: 'Mitigation Response', val: '< 1 Second' },
        { label: 'Packet Integrity', val: '100% Passed' },
        { label: 'Scrubbing Fabric', val: 'Autonomous Edge' },
      ],
      tag: 'EDGE SHIELD',
    },
    {
      id: '03',
      title: 'Direct IX Interconnections',
      subtitle: 'SUB-3MS LOCAL PEERING',
      desc: 'Direct cross-connects into Connect IX and regional exchanges to eliminate unnecessary transit hops and optimize subscriber throughput.',
      icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-[#DB2777]" />,
      stats: '10G - 400G Ports',
      metrics: [
        { label: 'Hop Count Reduction', val: '-3 to -5 Hops' },
        { label: 'Peering Fabric', val: 'Connect IX / NIXI' },
        { label: 'Port Capacities', val: '10G / 100G / 400G' },
      ],
      tag: 'IX FABRIC',
    },
    {
      id: '04',
      title: 'Subsea Diverse Corridors',
      subtitle: 'REDUNDANT COASTAL LANDING ZONES',
      desc: 'Mumbai and Chennai subsea cable landings providing high-availability interconnect routes for mission-critical enterprise workloads.',
      icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-[#DB2777]" />,
      stats: 'Dual-Path Resiliency',
      metrics: [
        { label: 'Coastal Corridors', val: 'Mumbai & Chennai' },
        { label: 'Failover Speed', val: 'Automatic Seamless' },
        { label: 'Transport Mode', val: 'Subsea Diverse' },
      ],
      tag: 'SUBSEA MESH',
    },
  ];

  useGSAP(
    () => {
      if (isReducedMotion || !sectionRef.current) return;

      const mm = gsap.matchMedia();

      // Desktop & Tablet (>= 768px): Pinned 3D Card Deck Stacking
      mm.add('(min-width: 768px)', () => {
        if (!stageRef.current) return;
        const cardElements = gsap.utils.toArray<HTMLElement>('.pinned-card');
        if (cardElements.length < 2) return;

        // Set initial positions: Card 1 active in place; Cards 2, 3, 4 waiting below off-screen
        gsap.set(cardElements[0], { yPercent: 0, scale: 1, opacity: 1, zIndex: 1 });

        for (let i = 1; i < cardElements.length; i++) {
          gsap.set(cardElements[i], {
            yPercent: 125,
            scale: 0.94,
            opacity: 0,
            zIndex: i + 1,
          });
        }

        // Pinned scrub timeline: each card glides up from Y axis and overlays previous
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: `+=${cards.length * 900}`,
            pin: true,
            scrub: 0.7,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Animate Card 2 -> over Card 1
        tl.to(
          cardElements[1],
          {
            yPercent: 0,
            scale: 1,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 1,
          },
          'step1'
        ).to(
          cardElements[0],
          {
            scale: 0.92,
            opacity: 0.35,
            yPercent: -4,
            ease: 'power2.inOut',
            duration: 1,
          },
          'step1'
        );

        // Animate Card 3 -> over Card 2
        tl.to(
          cardElements[2],
          {
            yPercent: 0,
            scale: 1,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 1,
          },
          'step2'
        )
          .to(
            cardElements[1],
            {
              scale: 0.92,
              opacity: 0.35,
              yPercent: -4,
              ease: 'power2.inOut',
              duration: 1,
            },
            'step2'
          )
          .to(
            cardElements[0],
            {
              scale: 0.85,
              opacity: 0.1,
              yPercent: -8,
              ease: 'power2.inOut',
              duration: 1,
            },
            'step2'
          );

        // Animate Card 4 -> over Card 3
        tl.to(
          cardElements[3],
          {
            yPercent: 0,
            scale: 1,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 1,
          },
          'step3'
        )
          .to(
            cardElements[2],
            {
              scale: 0.92,
              opacity: 0.35,
              yPercent: -4,
              ease: 'power2.inOut',
              duration: 1,
            },
            'step3'
          )
          .to(
            cardElements[1],
            {
              scale: 0.85,
              opacity: 0.1,
              yPercent: -8,
              ease: 'power2.inOut',
              duration: 1,
            },
            'step3'
          );
      });

      // Mobile (< 768px): Pinned Horizontal Scroll on Vertical Page Scroll
      mm.add('(max-width: 767px)', () => {
        const track = mobileTrackRef.current;
        if (!track) return;

        // Reset track position before measuring
        gsap.set(track, { x: 0 });

        const getScrollDistance = () => {
          const containerWidth = track.parentElement?.clientWidth || window.innerWidth;
          return Math.max(0, track.scrollWidth - containerWidth + 32);
        };

        const scrollDist = getScrollDistance();

        if (scrollDist > 10) {
          const tween = gsap.to(track, {
            x: () => -getScrollDistance(),
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: () => `+=${Math.max(scrollDist * 2.8, 1200)}`,
              pin: true,
              scrub: 0.6,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const step = Math.min(
                  cards.length - 1,
                  Math.max(0, Math.floor(self.progress * cards.length))
                );
                setActiveMobileCard(step);
              },
            },
          });

          return () => {
            tween.kill();
          };
        }
      });
    },
    { scope: sectionRef, dependencies: [isReducedMotion] }
  );

  return (
    <section
      ref={sectionRef}
      id="stacking-infra-section"
      className="min-h-screen flex flex-col justify-center py-12 sm:py-24 relative overflow-hidden select-none bg-[#0E0B1A] dark:bg-[#0E0B1A] light:bg-[#F6F7F9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17132A] dark:bg-[#17132A] light:bg-white border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] text-[#DB2777] text-xs font-mono font-semibold uppercase tracking-wider mb-3 sm:mb-4 shadow-sm">
            <Sparkles size={13} />
            ARCHITECTURE MATRIX
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-heading leading-tight text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115]">
            Engineered For<br />
            <span className="text-[#DB2777]">Global Precision.</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-base text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] leading-relaxed">
            Carrier-grade optical transport, edge filtering, and direct peering fabric built for mission-critical scale.
          </p>
        </div>

        {/* Desktop View: Pinned Stacking Card Stage (>= 768px) */}
        <div
          ref={stageRef}
          className="hidden md:block relative max-w-4xl mx-auto h-[480px] sm:h-[430px] md:h-[410px] w-full"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="pinned-card absolute inset-0 rounded-3xl bg-[#17132A] dark:bg-[#17132A] light:bg-white border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] p-6 sm:p-10 shadow-2xl overflow-hidden transition-colors duration-300 will-change-transform group hover:border-[#DB2777]/70 flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-modern-grid opacity-15 pointer-events-none" />

              <div className="relative z-10 flex-1 flex flex-col justify-between">
                {/* Card Top Row */}
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA]">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-[#1F1938] dark:bg-[#1F1938] light:bg-[#F0F2F5] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] flex items-center justify-center shadow-lg">
                        {card.icon}
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-[#DB2777] uppercase tracking-widest font-bold">
                          {card.subtitle}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black font-heading text-white dark:text-white light:text-[#0F1115] mt-0.5">
                          {card.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-[#DB2777] bg-[#DB2777]/10 px-3 py-1 rounded-full border border-[#DB2777]/30 font-bold">
                        {card.tag}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]">
                        {card.id} / 04
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] leading-relaxed mb-6 max-w-2xl">
                    {card.desc}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {card.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-3 sm:p-3.5 rounded-2xl bg-[#0E0B1A] dark:bg-[#0E0B1A] light:bg-[#F0F2F5] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] font-mono"
                    >
                      <div className="text-[9px] sm:text-[10px] text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] uppercase tracking-wider">{m.label}</div>
                      <div className="text-xs sm:text-sm font-bold text-white dark:text-white light:text-[#0F1115] mt-0.5">
                        {m.val}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Card Bottom Status */}
                <div className="mt-6 pt-3 border-t border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] flex items-center justify-between text-xs font-mono text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#DB2777]" />
                    <span>SLA DETERMINISTIC PERFORMANCE</span>
                  </span>
                  <span className="font-bold text-white dark:text-white light:text-[#0F1115]">{card.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: Pinned Smooth Horizontal Scroll Track (< 768px) */}
        <div className="block md:hidden w-full overflow-hidden">
          <div
            ref={mobileTrackRef}
            className="flex flex-row gap-4 will-change-transform py-2 px-1"
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-[85vw] sm:w-[340px] shrink-0 rounded-3xl bg-[#17132A] dark:bg-[#17132A] light:bg-white border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] p-5 shadow-2xl overflow-hidden flex flex-col justify-between relative transition-all"
              >
                <div className="absolute inset-0 bg-modern-grid opacity-10 pointer-events-none" />

                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  {/* Card Top Row */}
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-4 pb-3 border-b border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-[#1F1938] dark:bg-[#1F1938] light:bg-[#F0F2F5] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] flex items-center justify-center shrink-0">
                          {card.icon}
                        </div>
                        <div>
                          <div className="text-[9px] font-mono text-[#DB2777] uppercase tracking-wider font-bold">
                            {card.subtitle}
                          </div>
                          <h3 className="text-base font-black font-heading text-white dark:text-white light:text-[#0F1115] leading-snug">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Tag and ID row */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9px] font-mono text-[#DB2777] bg-[#DB2777]/10 px-2.5 py-0.5 rounded-full border border-[#DB2777]/30 font-bold">
                        {card.tag}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]">
                        {card.id} / 04
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] leading-relaxed mb-4">
                      {card.desc}
                    </p>
                  </div>

                  {/* Metrics 3-box Grid */}
                  <div className="grid grid-cols-3 gap-2">
                    {card.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-2 rounded-xl bg-[#0E0B1A] dark:bg-[#0E0B1A] light:bg-[#F0F2F5] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] font-mono text-center"
                      >
                        <div className="text-[8px] text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] uppercase truncate">{m.label}</div>
                        <div className="text-[11px] font-bold text-white dark:text-white light:text-[#0F1115] mt-0.5 truncate">
                          {m.val}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Card Bottom Status */}
                  <div className="mt-4 pt-2.5 border-t border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] flex items-center justify-between text-[10px] font-mono text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={11} className="text-[#DB2777]" />
                      <span>SLA DETERMINISTIC</span>
                    </span>
                    <span className="font-bold text-white dark:text-white light:text-[#0F1115]">{card.stats}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Interactive Step Indicators */}
          <div className="flex items-center justify-between mt-4 px-2 font-mono text-xs">
            <div className="flex items-center gap-1.5">
              {cards.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeMobileCard === i
                      ? 'w-6 bg-[#DB2777] shadow-[0_0_8px_#DB2777]'
                      : 'w-2 bg-[#2C2645] dark:bg-[#2C2645] light:bg-[#E2E5EA]'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 text-[10px] text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]">
              <span>CARD {cards[activeMobileCard]?.id} OF 04</span>
              <span className="text-[#DB2777] font-bold">● SCROLLING</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StackingInfraSection;
