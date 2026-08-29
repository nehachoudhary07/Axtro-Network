import React, { useState, useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../lib/gsap';
import { useMotionContext } from './motion/MotionProvider';
import {
  Layers,
  Zap,
  RefreshCw,
  Cpu,
  Sparkles,
  CheckCircle2,
} from './animated-icons';

export function WhyAxtroSection() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { isTouch, isReducedMotion } = useMotionContext();

  // Verified Axtro Pillars
  const pillars = [
    {
      id: '01',
      title: 'NETWORK-FIRST ARCHITECTURE',
      subtitle: 'Uncontended Carrier Transport',
      desc: 'Engineered strictly for deterministic throughput without artificial throttling or oversubscription. Every packet traverses private, unshared wavelength channels with carrier-grade optics.',
      specs: [
        { label: 'Oversubscription Ratio', val: '1:1 Guaranteed' },
        { label: 'Intra-Metro Core Latency', val: '< 1.8 ms' },
        { label: 'Backbone Availability', val: '99.99% SLA' },
      ],
      icon: <Layers className="w-6 h-6 text-[#DB2777]" />,
      telemetryTitle: 'LAYER-1 OPTICAL TOPOLOGY',
      telemetryState: '100% UNCONTENDED DUAL RING',
    },
    {
      id: '02',
      title: 'DETERMINISTIC LOW LATENCY',
      subtitle: 'Optimized Direct BGP Peering',
      desc: 'Direct cross-connects into Connect IX, NIXI, and primary transit exchanges eliminate intermediate transit hops. Route optimization algorithms continuously bypass regional congestion points.',
      specs: [
        { label: 'Hop Count Reduction', val: 'Direct Cross-Connect' },
        { label: 'Packet Jitter Standard', val: '< 0.05 ms' },
        { label: 'Route Optimization Frequency', val: 'Sub-Second BGP' },
      ],
      icon: <Zap className="w-6 h-6 text-[#DB2777]" />,
      telemetryTitle: 'BGP PEERING MATRIX',
      telemetryState: 'OPTIMAL LOWEST-HOP PATH',
    },
    {
      id: '03',
      title: 'SELF-HEALING RESILIENT MESH',
      subtitle: 'Dual-Ring Redundant Failover',
      desc: 'Multi-ring optical architecture with automatic route failover. If an upstream path experiences link interruption, traffic routes instantaneously over secondary diverse dark paths.',
      specs: [
        { label: 'Failover Recovery', val: 'Automatic Seamless' },
        { label: 'Diverse Metro Ingress', val: 'Dual Path Entry' },
        { label: 'Core Resilience', val: 'Carrier-Grade MMR' },
      ],
      icon: <RefreshCw className="w-6 h-6 text-[#DB2777]" />,
      telemetryTitle: 'AUTOMATIC ROUTE RECOVERY',
      telemetryState: 'FAILOVER SYSTEM STANDBY',
    },
    {
      id: '04',
      title: '24×7 SPECIALIZED NOC ENGAGEMENT',
      subtitle: 'Direct Level-3 Engineering Access',
      desc: 'No first-tier bot queues or bureaucratic ticket escalations. Your engineering team collaborates directly with senior network operators and BGP routing specialists around the clock.',
      specs: [
        { label: 'Average Response Time', val: '< 5 Minutes' },
        { label: 'NOC Staffing Level', val: 'Senior Certified' },
        { label: 'BGP Community Customization', val: 'Real-time On Demand' },
      ],
      icon: <Cpu className="w-6 h-6 text-[#DB2777]" />,
      telemetryTitle: 'ACTIVE NOC OPERATIONS',
      telemetryState: '24/7/365 LIVE SURVEILLANCE',
    },
  ];

  useGSAP(
    () => {
      if (isReducedMotion || !sectionRef.current) return;

      const mm = gsap.matchMedia();

      // Dynamic pin calculation based on pillar length
      mm.add('(min-width: 1024px)', () => {
        const pinDistance = pillars.length * 600;
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${pinDistance}`,
          pin: true,
          anticipatePin: 1,
          scrub: 0.3,
          onUpdate: (self) => {
            const newIndex = Math.min(
              pillars.length - 1,
              Math.max(0, Math.floor(self.progress * pillars.length))
            );
            setActiveTab(newIndex);
          },
        });
      });
    },
    { scope: sectionRef, dependencies: [isTouch, isReducedMotion] }
  );

  const current = pillars[activeTab];

  return (
    <section
      ref={sectionRef}
      id="why-axtro-section"
      className="py-20 sm:py-28 relative overflow-hidden select-none bg-[#0E0B1A] dark:bg-[#0E0B1A] light:bg-[#F6F7F9] text-foreground"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17132A] dark:bg-[#17132A] light:bg-white border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] text-[#DB2777] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles size={13} />
              ARCHITECTURAL ADVANTAGE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115] font-heading leading-tight">
              ENGINEERED FOR<br />
              <span className="text-[#DB2777]">ZERO COMPROMISE.</span>
            </h2>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <p className="max-w-md text-sm sm:text-base text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] leading-relaxed">
              Built from bare-metal dark fiber upward for hyper-demanding platforms where uptime and deterministic routing are paramount.
            </p>
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] mt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-[#DB2777] animate-pulse" />
              <span>STORY STEP ({activeTab + 1} / {pillars.length})</span>
            </div>
          </div>
        </div>

        {/* 2-Column Storytelling Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Step Navigation */}
          <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-2.5 lg:gap-0 lg:space-y-3 flex flex-col justify-between">
            {pillars.map((item, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-3 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer select-none ${
                    isSelected
                      ? 'bg-[#17132A] dark:bg-[#17132A] light:bg-white border-[#DB2777] shadow-[0_0_24px_rgba(219,39,119,0.2)] lg:translate-x-2'
                      : 'bg-[#17132A]/50 dark:bg-[#17132A]/50 light:bg-[#F0F2F5]/70 border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] hover:border-[#9C94B8]/40 text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] hover:text-[#F5F3FA]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
                    <span className={`text-[11px] sm:text-xs font-mono font-bold shrink-0 ${isSelected ? 'text-[#DB2777]' : 'text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]'}`}>
                      {item.id}
                    </span>
                    <div className="min-w-0">
                      <div className={`text-[9px] sm:text-xs font-mono uppercase tracking-wider mb-0.5 truncate ${isSelected ? 'text-[#DB2777]' : 'text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]'}`}>
                        {item.subtitle}
                      </div>
                      <div className={`font-heading font-bold text-xs sm:text-sm truncate ${isSelected ? 'text-white dark:text-white light:text-[#0F1115]' : 'text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]'}`}>
                        {item.title}
                      </div>
                    </div>
                  </div>
                  <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border transition-all shrink-0 ml-1 ${
                    isSelected ? 'bg-[#DB2777] border-[#DB2777] shadow-[0_0_8px_#DB2777]' : 'border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA]'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Morphing Telemetry Canvas */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-3xl bg-[#17132A] dark:bg-[#17132A] light:bg-white border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] p-6 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#1F1938] dark:bg-[#1F1938] light:bg-[#F0F2F5] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] flex items-center justify-center">
                      {current.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#DB2777] uppercase tracking-widest font-bold">
                        {current.telemetryTitle}
                      </div>
                      <div className="text-white dark:text-white light:text-[#0F1115] font-bold font-heading text-lg">
                        {current.title}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#DB2777] bg-[#DB2777]/10 px-3 py-1 rounded-full border border-[#DB2777]/20 font-bold">
                    {current.telemetryState}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] leading-relaxed mb-8">
                  {current.desc}
                </p>

                {/* Technical Specifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {current.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-3.5 rounded-2xl bg-[#0E0B1A] dark:bg-[#0E0B1A] light:bg-[#F0F2F5] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] font-mono"
                    >
                      <div className="text-[10px] text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] uppercase">{spec.label}</div>
                      <div className="text-xs sm:text-sm font-bold text-white dark:text-white light:text-[#0F1115] mt-1">
                        {spec.val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Status Bar */}
              <div className="pt-4 border-t border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] flex items-center justify-between text-xs font-mono text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#DB2777]" />
                  <span>SLA VERIFIED INFRASTRUCTURE</span>
                </span>
                <span className="text-white dark:text-white light:text-[#0F1115] font-bold">STEP {current.id} OF 04</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyAxtroSection;
