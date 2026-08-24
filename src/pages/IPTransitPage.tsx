import React from 'react';
import { PageRoute } from '../types';
import { IPTransitBackbone } from '../components/svg/IPTransitBackbone';
import { TransitIcon } from '../components/svg/ServiceIcons';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { ArrowRight, Globe, TrendingUp, Compass, Network, Sparkles, Activity, CheckCircle2 } from 'lucide-react';

interface IPTransitPageProps {
  navigate: (route: PageRoute) => void;
}

export function IPTransitPage({ navigate }: IPTransitPageProps) {
  const benefits = [
    {
      title: 'Deterministic Lowest-Hop Routing',
      desc: 'Engineered for consistent, sub-millisecond route optimization with direct BGP community policies and zero detour transit pathing.',
      icon: <Compass className="w-6 h-6 text-[#245FA8]" />,
      tag: 'BGP Routing',
    },
    {
      title: '10G / 100G / 400G Port Scaling',
      desc: 'Carrier-grade connectivity that scales seamlessly from fractional gigabit to multiple dense 100G/400G ports without hardware swapouts.',
      icon: <TrendingUp className="w-6 h-6 text-[#245FA8]" />,
      tag: 'High Density',
    },
    {
      title: 'Granular BGP Community Control',
      desc: 'Comprehensive route policy filtering, real-time blackholing triggers, and direct 24×7 Level-3 NOC peering engineering support.',
      icon: <Network className="w-6 h-6 text-[#245FA8]" />,
      tag: 'Full Control',
    },
    {
      title: 'Strategic Tri-Metro Presence',
      desc: 'Direct backbone presence across primary Indian connectivity hubs: Delhi (Yotta D1), Mumbai (Connect IX), and Chennai (Connect IX).',
      icon: <Globe className="w-6 h-6 text-[#245FA8]" />,
      tag: 'Metro Mesh',
    },
  ];

  return (
    <div className="w-full transition-colors relative overflow-hidden bg-[#030507]">
      {/* HERO SECTION */}
      <section id="transit-hero" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider">
              <Globe size={14} />
              DETERMINISTIC GLOBAL BGP ROUTING
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F5F7FA] font-heading leading-tight">
              IP TRANSIT<br />
              <span className="text-[#245FA8]">BUILT FOR PERFORMANCE.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#A7B0BE] leading-relaxed max-w-2xl">
              Reliable Internet transit engineered for predictable routing, lowest packet loss, and scalable multi-gigabit connectivity.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-2xl"
              >
                <span>REQUEST TRANSIT QUOTE</span>
                <ArrowRight size={14} />
              </button>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#07101C] border border-[#17263A] text-xs font-mono text-[#245FA8]">
                <span className="w-2 h-2 rounded-full bg-[#245FA8] animate-pulse"></span>
                <span>AS-AXTRO LOWEST-AS-PATH PREFERENCE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSIT ARCHITECTURE DIAGRAM */}
      <section id="transit-architecture" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Activity size={13} />
              BGP ROUTING ENGINE
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#F5F7FA] font-heading">
              HIGH-THROUGHPUT MULTI-HOMED BACKBONE
            </h2>
            <p className="text-sm text-[#A7B0BE] mt-2">
              Uncontended upstream transit and low-latency peering matrices for carrier-grade stability.
            </p>
          </div>

          <div className="bg-[#07101C] rounded-3xl p-4 sm:p-8 shadow-2xl border border-[#17263A]">
            <IPTransitBackbone />
          </div>
        </div>
      </section>

      {/* CORE BENEFITS BENTO */}
      <section id="transit-benefits" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              TRANSIT ADVANTAGES
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#F5F7FA] font-heading">
              CARRIER-GRADE CONNECTIVITY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bento-card p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-[#030507] border border-[#17263A] group-hover:scale-110 transition-transform">
                      {b.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#030507] text-[#245FA8] border border-[#17263A]">
                      {b.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F7FA] font-heading mb-3">
                    {b.title}
                  </h3>

                  <p className="text-sm text-[#A7B0BE] leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#17263A] flex items-center gap-2 text-xs text-[#245FA8] font-mono">
                  <CheckCircle2 size={14} />
                  <span>Symmetric 1:1 Unthrottled Throughput</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCtaSection
        navigate={navigate}
        title="SCALE YOUR TRANSIT CAPACITY."
        subtitle="Connect with AXTRO network engineers to configure your BGP IP Transit feed."
        badgeText="HIGH-THROUGHPUT TRANSIT READY"
      />
    </div>
  );
}

export default IPTransitPage;
