import React, { useRef, useState } from 'react';
import { PageRoute } from '../../types';
import { gsap, ScrollTrigger, useGSAP } from '../../lib/gsap';
import { useMotionContext } from '../motion/MotionProvider';
import {
  ShieldAlert,
  Globe,
  Layers,
  Link as LinkIcon,
  ArrowRight,
  Play,
  Sparkles,
} from '../animated-icons';

interface ServicesStickySectionProps {
  navigate: (route: PageRoute) => void;
}

export function ServicesStickySection({ navigate }: ServicesStickySectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [activeService, setActiveService] = useState<number>(0);
  const [selectedIxSpeed, setSelectedIxSpeed] = useState<'10G' | '100G' | '400G'>('100G');
  const [ddosSimActive, setDdosSimActive] = useState<boolean>(false);
  const [simulatedAttack, setSimulatedAttack] = useState<number>(3.8);
  const { isTouch, isReducedMotion } = useMotionContext();

  const triggerDdosSim = () => {
    setDdosSimActive(true);
    setSimulatedAttack(Number((Math.random() * 4 + 2.5).toFixed(1)));
    setTimeout(() => {
      setDdosSimActive(false);
    }, 3000);
  };

  const services = [
    {
      id: '01',
      title: 'DDoS Protection',
      tag: 'EDGE SCRUBBING',
      desc: 'Enterprise-grade DDoS mitigation to keep your network secure 24/7. Multi-terabit distributed scrubbing fabric that autonomously neutralizes volumetric floods without latency degradation.',
      route: '/services/ddos-protection' as PageRoute,
      icon: <ShieldAlert className="w-6 h-6 text-[#DB2777]" />,
      actionText: 'EXPLORE DDOS ARCHITECTURE',
    },
    {
      id: '02',
      title: 'IP Transit',
      tag: 'BGP TRANSIT',
      desc: 'High capacity, low latency IP transit with global reach and reliability. Direct upstream connections and deterministic BGP routing optimization.',
      route: '/services/ip-transit' as PageRoute,
      icon: <Globe className="w-6 h-6 text-[#DB2777]" />,
      actionText: 'VIEW TRANSIT SPECS',
    },
    {
      id: '03',
      title: 'IX Connectivity',
      tag: 'DIRECT PEERING',
      desc: 'Direct peering at major Internet Exchanges (Connect IX, NIXI) for optimal performance. Interconnect with hundreds of networks on a single high-capacity port.',
      route: '/services/ix-connectivity' as PageRoute,
      icon: <Layers className="w-6 h-6 text-[#DB2777]" />,
      actionText: 'CONNECT TO IX FABRIC',
    },
    {
      id: '04',
      title: 'Dedicated Leased Lines',
      tag: 'OPTICAL FIBER',
      desc: 'Uncontended, point-to-point dark optical wavelengths linking Delhi NCR, Mumbai, and Chennai with guaranteed zero packet jitter and sub-millisecond route consistency.',
      route: '/services/leased-lines' as PageRoute,
      icon: <LinkIcon className="w-6 h-6 text-[#DB2777]" />,
      actionText: 'PROVISION LEASED LINE',
    },
  ];

  useGSAP(
    () => {
      if (isReducedMotion || !containerRef.current) return;

      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${services.length * 750}`,
          pin: true,
          anticipatePin: 1,
          scrub: 0.3,
          onUpdate: (self) => {
            const index = Math.min(
              services.length - 1,
              Math.max(0, Math.floor(self.progress * services.length))
            );
            setActiveService(index);
          },
        });
      });
    },
    { scope: containerRef, dependencies: [isTouch, isReducedMotion] }
  );

  const current = services[activeService];

  return (
    <section
      ref={containerRef}
      id="services-sticky-section"
      className="py-20 lg:py-28 relative overflow-hidden select-none bg-[#0E0B1A] dark:bg-[#0E0B1A] light:bg-[#F6F7F9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Sticky Title & Service Step Nav */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17132A] dark:bg-[#17132A] light:bg-white border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] text-[#DB2777] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-sm">
                <Sparkles size={13} />
                INFRASTRUCTURE CAPABILITIES
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-heading leading-tight text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115]">
                Our Core<br />
                <span className="text-[#DB2777]">Services.</span>
              </h2>
              <p className="mt-4 text-base text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] leading-relaxed">
                Four core architectural pillars engineered for mission-critical digital platforms and carrier networks.
              </p>
            </div>

            {/* Interactive Step Navigation */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 lg:gap-0 lg:space-y-3 pt-2">
              {services.map((srv, idx) => {
                const isSelected = activeService === idx;
                return (
                  <button
                    key={srv.id}
                    onClick={() => setActiveService(idx)}
                    className={`w-full text-left p-3 sm:p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#1F1938] dark:bg-[#1F1938] light:bg-white border-[#DB2777] shadow-[0_0_24px_rgba(219,39,119,0.2)] lg:translate-x-2'
                        : 'bg-[#17132A]/60 dark:bg-[#17132A]/60 light:bg-[#F0F2F5]/70 border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] hover:border-[#9C94B8]/40 text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] hover:text-[#F5F3FA]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                      <span className={`text-[11px] sm:text-xs font-mono font-bold shrink-0 ${isSelected ? 'text-[#DB2777]' : 'text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]'}`}>
                        {srv.id}
                      </span>
                      <span className={`font-heading font-bold text-xs sm:text-sm truncate ${isSelected ? 'text-white dark:text-white light:text-[#0F1115]' : 'text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]'}`}>
                        {srv.title}
                      </span>
                    </div>
                    <span className="hidden sm:inline-block text-[10px] font-mono text-[#DB2777] bg-[#DB2777]/10 px-2 py-0.5 rounded-full border border-[#DB2777]/20 shrink-0">
                      {srv.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive State Display Panel */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#17132A] dark:bg-[#17132A] light:bg-white border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] p-6 sm:p-10 backdrop-blur-xl shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#1F1938] dark:bg-[#1F1938] light:bg-[#F0F2F5] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] flex items-center justify-center shadow-lg">
                  {current.icon}
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#1F1938] dark:bg-[#1F1938] light:bg-[#F0F2F5] text-[#DB2777] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA]">
                  {current.tag}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white dark:text-white light:text-[#0F1115] font-heading mb-3">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] leading-relaxed mb-8">
                {current.desc}
              </p>

              {/* Service-Specific Interactive Modules */}
              {current.id === '01' && (
                <div className="p-5 rounded-2xl bg-[#0E0B1A] dark:bg-[#0E0B1A] light:bg-[#F0F2F5] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] mb-8 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${ddosSimActive ? 'bg-[#DB2777] animate-ping' : 'bg-[#DB2777]'}`} />
                      <span className="text-xs font-mono font-bold text-white dark:text-white light:text-[#0F1115]">
                        {ddosSimActive ? 'MITIGATING VOLUMETRIC SYN/UDP FLOOD...' : 'EDGE SCRUBBING ENGINE: ACTIVE'}
                      </span>
                    </div>

                    <button
                      onClick={triggerDdosSim}
                      className="px-3 py-1.5 rounded-full text-[11px] font-mono font-bold bg-[#1F1938] dark:bg-[#1F1938] light:bg-white hover:bg-[#DB2777] hover:text-white text-[#DB2777] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Play size={10} />
                      TEST ATTACK MITIGATION
                    </button>
                  </div>

                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="flex justify-between text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]">
                      <span>Mitigation Status:</span>
                      <span className="text-[#DB2777] font-bold">
                        {ddosSimActive ? `${simulatedAttack} Tbps Neutralized (100% Dropped)` : 'Zero Packet Loss'}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#2C2645] dark:bg-[#2C2645] light:bg-[#E2E5EA] overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${ddosSimActive ? 'w-full bg-[#DB2777]' : 'w-4 bg-[#DB2777]'}`}
                      />
                    </div>
                  </div>
                </div>
              )}

              {current.id === '02' && (
                <div className="grid grid-cols-2 gap-4 mb-8 font-mono text-xs">
                  <div className="p-4 rounded-2xl bg-[#0E0B1A] dark:bg-[#0E0B1A] light:bg-[#F0F2F5] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA]">
                    <div className="text-[10px] text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] uppercase">Routing Architecture</div>
                    <div className="text-white dark:text-white light:text-[#0F1115] font-bold text-sm mt-1">BGP Anycast Routing</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#0E0B1A] dark:bg-[#0E0B1A] light:bg-[#F0F2F5] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA]">
                    <div className="text-[10px] text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] uppercase">Packet Integrity</div>
                    <div className="text-[#DB2777] font-bold text-sm mt-1">&lt; 0.001% Loss Rate</div>
                  </div>
                </div>
              )}

              {current.id === '03' && (
                <div className="p-5 rounded-2xl bg-[#0E0B1A] dark:bg-[#0E0B1A] light:bg-[#F0F2F5] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] mb-8">
                  <div className="text-xs font-mono text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] uppercase mb-3">Available Port Capacities</div>
                  <div className="flex items-center gap-3">
                    {(['10G', '100G', '400G'] as const).map((spd) => (
                      <button
                        key={spd}
                        onClick={() => setSelectedIxSpeed(spd)}
                        className={`flex-1 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                          selectedIxSpeed === spd
                            ? 'bg-[#DB2777] text-white shadow-lg'
                            : 'bg-[#1F1938] dark:bg-[#1F1938] light:bg-white text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] hover:text-foreground border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA]'
                        }`}
                      >
                        {spd}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {current.id === '04' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  <div className="p-3.5 rounded-2xl bg-[#0E0B1A] dark:bg-[#0E0B1A] light:bg-[#F0F2F5] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] font-mono">
                    <div className="text-[10px] text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] uppercase">Delhi ↔ Mumbai</div>
                    <div className="text-sm font-bold text-white dark:text-white light:text-[#0F1115] mt-1">18.4 ms RTT</div>
                    <div className="text-[10px] text-[#DB2777] mt-0.5">Dual-Path Fiber</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#0E0B1A] dark:bg-[#0E0B1A] light:bg-[#F0F2F5] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] font-mono">
                    <div className="text-[10px] text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] uppercase">Mumbai ↔ Chennai</div>
                    <div className="text-sm font-bold text-white dark:text-white light:text-[#0F1115] mt-1">14.1 ms RTT</div>
                    <div className="text-[10px] text-[#DB2777] mt-0.5">Subsea Diverse</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#0E0B1A] dark:bg-[#0E0B1A] light:bg-[#F0F2F5] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] font-mono">
                    <div className="text-[10px] text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] uppercase">Delhi ↔ Chennai</div>
                    <div className="text-sm font-bold text-white dark:text-white light:text-[#0F1115] mt-1">24.2 ms RTT</div>
                    <div className="text-[10px] text-[#DB2777] mt-0.5">Direct Corridor</div>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-6 border-t border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA]">
                <button
                  onClick={() => navigate(current.route)}
                  className="text-xs font-bold uppercase tracking-wider font-heading text-[#DB2777] hover:text-[#BE185D] transition-colors flex items-center gap-2 cursor-pointer group"
                >
                  <span>{current.actionText}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesStickySection;
