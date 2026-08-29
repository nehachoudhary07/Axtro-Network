import React, { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../../lib/gsap';
import { useMotionContext } from '../motion/MotionProvider';
import {
  Server,
  ShieldCheck,
  Activity,
  Layers,
  Sparkles,
} from '../animated-icons';

export function HorizontalInfraSection() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { isTouch, isReducedMotion } = useMotionContext();

  const panels = [
    {
      id: '01',
      title: 'Carrier-Grade Optical Backbone',
      subtitle: 'Uncontended Transport Channels',
      desc: 'Point-to-point dark optical paths linking Delhi NCR, Mumbai, and Chennai with carrier-grade optics and zero artificial throughput throttling.',
      icon: <Server className="w-6 h-6 text-[#DB2777]" />,
      stats: '1.2+ Tbps Capacity',
    },
    {
      id: '02',
      title: 'Distributed Edge Scrubbing',
      subtitle: 'Real-time Autonomous Mitigation',
      desc: 'Edge scrubbing fabric engineered to neutralize volumetric SYN/UDP floods with zero latency degradation to legitimate transit traffic.',
      icon: <ShieldCheck className="w-6 h-6 text-[#DB2777]" />,
      stats: 'Multi-Tbps Mitigation',
    },
    {
      id: '03',
      title: 'Direct IX Interconnections',
      subtitle: 'Sub-3ms Local Peering',
      desc: 'Direct cross-connects into Connect IX and regional exchanges to eliminate unnecessary transit hops and optimize subscriber throughput.',
      icon: <Layers className="w-6 h-6 text-[#DB2777]" />,
      stats: '10G - 400G Ports',
    },
    {
      id: '04',
      title: 'Subsea Diverse Corridors',
      subtitle: 'Redundant Coastal Landing Zones',
      desc: 'Mumbai and Chennai subsea cable landings providing high-availability interconnect routes for mission-critical enterprise workloads.',
      icon: <Activity className="w-6 h-6 text-[#DB2777]" />,
      stats: 'Dual-Path Resiliency',
    },
  ];

  useGSAP(
    () => {
      if (isTouch || isReducedMotion || !containerRef.current || !trackRef.current) return;

      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const track = trackRef.current;
        if (!track) return;

        const totalPanels = panels.length;
        // Calculate scroll amount
        const scrollDistance = (totalPanels - 1) * 480;

        gsap.to(track, {
          x: () => -scrollDistance,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: () => `+=${scrollDistance + 400}`,
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: containerRef, dependencies: [isTouch, isReducedMotion] }
  );

  return (
    <section
      ref={containerRef}
      id="horizontal-infra-section"
      className="py-20 lg:py-28 relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17132A] border border-[#2C2645] text-[#DB2777] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={13} />
              ARCHITECTURE MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-heading leading-tight text-[#F5F3FA]">
              Engineered For<br />
              <span className="text-[#DB2777]">Global Precision.</span>
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#9C94B8]">
            <span className="w-2 h-2 rounded-full bg-[#DB2777] animate-pulse" />
            <span>SCROLL HORIZONTALLY TO EXPLORE PILLARS</span>
          </div>
        </div>
      </div>

      {/* Desktop Horizontal Track / Mobile Clean Vertical Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row gap-6 will-change-transform"
        >
          {panels.map((panel) => (
            <div
              key={panel.id}
              className="w-full lg:w-[440px] shrink-0 rounded-3xl bg-[#17132A] border border-[#2C2645] p-8 flex flex-col justify-between group hover:border-[#DB2777]/70 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#1F1938] border border-[#2C2645] flex items-center justify-center">
                    {panel.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#9C94B8] group-hover:text-[#DB2777] transition-colors">
                    {panel.id}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-[#DB2777] uppercase tracking-wider mb-1">
                  {panel.subtitle}
                </div>

                <h3 className="text-xl font-bold font-heading text-[#F5F3FA] group-hover:text-[#DB2777] transition-colors mb-3">
                  {panel.title}
                </h3>

                <p className="text-sm text-[#9C94B8] leading-relaxed mb-6">
                  {panel.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2C2645] flex items-center justify-between font-mono text-xs">
                <span className="text-[#9C94B8]">Throughput SLA:</span>
                <span className="text-[#F5F3FA] font-bold">{panel.stats}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HorizontalInfraSection;
