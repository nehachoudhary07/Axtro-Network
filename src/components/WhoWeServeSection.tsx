import React, { useState, useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../lib/gsap';
import { useMotionContext } from './motion/MotionProvider';
import {
  Server,
  Cloud,
  Cpu,
  Building2,
  Terminal,
  Gamepad2,
  Radio,
  Network,
  Sparkles,
  CheckCircle2,
} from './animated-icons';

export function WhoWeServeSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeSectorIndex, setActiveSectorIndex] = useState<number>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { isReducedMotion } = useMotionContext();

  // Verified Axtro Ecosystem Sectors
  const sectors = [
    {
      id: '01',
      category: 'infrastructure',
      title: 'Internet Service Providers (ISPs)',
      icon: <Network className="w-5 h-5 text-[#DB2777]" />,
      desc: 'High-volume wholesale IP transit, deterministic BGP multi-homing, and Connect IX peering to optimize regional subscriber throughput.',
      throughput: '10G - 400G Ports',
      latency: 'Sub-3ms Local IX',
      badge: 'Wholesale Transport',
    },
    {
      id: '02',
      category: 'infrastructure',
      title: 'Carrier-Neutral Data Centers',
      icon: <Server className="w-5 h-5 text-[#DB2777]" />,
      desc: 'Diverse dark fiber conduits, redundant MMR meet-me-room cross-connects, and interconnect corridors across Delhi, Mumbai & Chennai.',
      throughput: 'Dark Fiber & Wavelengths',
      latency: '1:1 Uncontended',
      badge: 'Colocation Interconnect',
    },
    {
      id: '03',
      category: 'cloud',
      title: 'Cloud & Hyperscale Platforms',
      icon: <Cloud className="w-5 h-5 text-[#DB2777]" />,
      desc: 'Direct backbone links for distributed storage synchronization, database replication, and low-hop API ingress with zero route flap.',
      throughput: 'Multi-Hundred Gbps',
      latency: '< 15ms Inter-Region',
      badge: 'Hyperscale Peering',
    },
    {
      id: '04',
      category: 'cloud',
      title: 'Hosting & Bare Metal Providers',
      icon: <Terminal className="w-5 h-5 text-[#DB2777]" />,
      desc: 'Burst-tolerant unmetered bandwidth coupled with always-on hardware-level DDoS scrubbing at the edge to safeguard customer nodes.',
      throughput: '10G - 100G Unmetered',
      latency: '100% Packet Integrity',
      badge: 'Edge Scrubbing',
    },
    {
      id: '05',
      category: 'enterprise',
      title: 'Global Fintech & Enterprises',
      icon: <Building2 className="w-5 h-5 text-[#DB2777]" />,
      desc: 'Private point-to-point leased lines with mathematically deterministic latency for financial transaction processing and ERP clusters.',
      throughput: 'Dedicated Symmetrical',
      latency: 'Strict Zero-Jitter SLA',
      badge: 'Mission-Critical',
    },
    {
      id: '06',
      category: 'enterprise',
      title: 'SaaS & Real-Time APIs',
      icon: <Cpu className="w-5 h-5 text-[#DB2777]" />,
      desc: 'Ultra-resilient network routing ensuring continuous uptime for payment webhooks, live analytics streams, and real-time collaborative apps.',
      throughput: '99.99% SLA Uptime',
      latency: 'Predictable Delivery',
      badge: 'High Availability',
    },
    {
      id: '07',
      category: 'enterprise',
      title: 'Gaming & Interactive Media',
      icon: <Gamepad2 className="w-5 h-5 text-[#DB2777]" />,
      desc: 'Ultra-low jitter packet routing and anti-DDoS mitigation designed specifically for multiplayer UDP match lobbies and live voice comms.',
      throughput: 'Sub-Millisecond Jitter',
      latency: '< 10ms Metro Ping',
      badge: 'Low-Jitter UDP',
    },
    {
      id: '08',
      category: 'cloud',
      title: 'Content Delivery Networks (CDNs)',
      icon: <Radio className="w-5 h-5 text-[#DB2777]" />,
      desc: 'High-density IX port access and Indian metropolitan peering to stream 4K/8K media without buffering or intermediate transit choke points.',
      throughput: 'Ultra-Dense IX Ports',
      latency: 'Direct Eyeball Peering',
      badge: 'High-Density Media',
    },
  ];

  // GSAP Pinned Horizontal Scroll on Vertical Page Scroll (both Mobile & Desktop)
  useGSAP(
    () => {
      if (isReducedMotion || !sectionRef.current || !trackRef.current) return;

      const track = trackRef.current;
      const section = sectionRef.current;

      // Reset track position before recalculating
      gsap.set(track, { x: 0 });

      const getScrollDistance = () => {
        const containerWidth = track.parentElement?.clientWidth || window.innerWidth;
        return Math.max(0, track.scrollWidth - containerWidth + 32);
      };

      const dist = getScrollDistance();

      if (dist > 10) {
        const tween = gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${Math.max(getScrollDistance() * 2.2, 1800)}`,
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const idx = Math.min(
                sectors.length - 1,
                Math.max(0, Math.floor(self.progress * sectors.length))
              );
              setActiveSectorIndex(idx);
            },
          },
        });

        return () => {
          tween.kill();
        };
      }
    },
    { scope: sectionRef, dependencies: [isReducedMotion] }
  );

  return (
    <section
      ref={sectionRef}
      id="who-we-serve-section"
      className="min-h-screen flex flex-col justify-center py-16 sm:py-24 relative overflow-hidden select-none bg-[#0E0B1A] dark:bg-[#0E0B1A] light:bg-[#F6F7F9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-8 sm:mb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17132A] dark:bg-[#17132A] light:bg-white border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] text-[#DB2777] text-xs font-mono font-semibold uppercase tracking-wider mb-3 sm:mb-4 shadow-sm">
              <Sparkles size={13} />
              ECOSYSTEM PARTICIPANTS
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight font-heading leading-tight text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115]">
              WHO RUNS ON<br />
              <span className="text-[#DB2777]">AXTRO NETWORKS.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]">
            <span className="w-2 h-2 rounded-full bg-[#DB2777] animate-pulse" />
            <span>SCROLL VERTICALLY TO EXPLORE ECOSYSTEM</span>
          </div>
        </div>
      </div>

      {/* Horizontal Sliding Track (Driven by Vertical Page Scroll) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex flex-row gap-4 sm:gap-6 py-2 will-change-transform"
        >
          {sectors.map((sector, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={sector.title}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`w-[85vw] sm:w-[340px] md:w-[380px] lg:w-[400px] xl:w-[420px] shrink-0 rounded-3xl bg-[#17132A] dark:bg-[#17132A] light:bg-white border p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-2xl relative overflow-hidden ${
                  isHovered
                    ? 'border-[#DB2777] shadow-[0_12px_35px_rgba(219,39,119,0.2)] -translate-y-1'
                    : 'border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] hover:border-[#9C94B8]/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#1F1938] dark:bg-[#1F1938] light:bg-[#F0F2F5] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] flex items-center justify-center shadow-md">
                      {sector.icon}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#1F1938] dark:bg-[#1F1938] light:bg-[#F0F2F5] text-[#DB2777] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA]">
                        {sector.badge}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]">
                        {sector.id}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-white dark:text-white light:text-[#0F1115] group-hover:text-[#DB2777] transition-colors mb-2.5 sm:mb-3">
                    {sector.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] leading-relaxed mb-6 sm:mb-8">
                    {sector.desc}
                  </p>
                </div>

                {/* Technical Telemetry Specs Matrix */}
                <div className="pt-3.5 sm:pt-4 border-t border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] space-y-2 sm:space-y-2.5 font-mono text-xs">
                  <div className="flex justify-between items-center text-[11px] sm:text-xs">
                    <span className="text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]">Throughput:</span>
                    <span className="text-white dark:text-white light:text-[#0F1115] font-bold">{sector.throughput}</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] sm:text-xs">
                    <span className="text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]">Latency Standard:</span>
                    <span className="text-[#DB2777] font-bold">{sector.latency}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] sm:text-[11px] pt-1 text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={12} className="text-[#DB2777]" />
                      <span>SLA Guaranteed</span>
                    </span>
                    <span className="uppercase text-[9px] sm:text-[10px] text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]">{sector.category}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Step Indicators & Progress Tracking */}
        <div className="flex items-center justify-between mt-6 px-1 font-mono text-xs">
          <div className="flex items-center gap-1.5">
            {sectors.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSectorIndex === i
                    ? 'w-5 sm:w-6 bg-[#DB2777] shadow-[0_0_8px_#DB2777]'
                    : 'w-1.5 sm:w-2 bg-[#2C2645] dark:bg-[#2C2645] light:bg-[#E2E5EA]'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]">
            <span>SECTOR {sectors[activeSectorIndex]?.id} OF 08</span>
            <span className="text-[#DB2777] font-bold">● SCROLLING</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeServeSection;
