import React from 'react';
import { PageRoute } from '../types';
import { IPTransitBackbone } from '../components/svg/IPTransitBackbone';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { ArrowRight, Globe, Zap, Cpu, Activity, Shield, CheckCircle2 } from '../components/animated-icons';

interface IPTransitPageProps {
  navigate: (route: PageRoute) => void;
}

export function IPTransitPage({ navigate }: IPTransitPageProps) {
  const specs = [
    {
      label: 'Oversubscription Ratio',
      val: '1:1 Strictly Unshared',
      desc: 'Dedicated unshared bandwidth per port with zero contention, rate throttling, or burst penalties.',
      tag: 'Strict 1:1 SLA',
      icon: <Zap className="w-5 h-5 text-[#DB2777]" />,
    },
    {
      label: 'Available Port Capacities',
      val: '10G, 100G & 400G Ports',
      desc: 'High-density QSFP28 & QSFP-DD interfaces delivered over direct optical MMR cross-connects.',
      tag: 'Line-Rate Ports',
      icon: <Cpu className="w-5 h-5 text-[#DB2777]" />,
    },
    {
      label: 'Routing Protocol',
      val: 'Full BGP IPv4 + IPv6 Tables',
      desc: 'Complete global routing tables with sub-second convergence, automated flap dampening, and full dual-stack.',
      tag: 'Dual-Stack Native',
      icon: <Globe className="w-5 h-5 text-[#DB2777]" />,
    },
    {
      label: 'BGP Community Controls',
      val: 'Custom Prepend & Local Pref',
      desc: 'Granular policy routing controls with real-time blackholing and dynamic path preference adjustment.',
      tag: 'Deterministic Pathing',
      icon: <Activity className="w-5 h-5 text-[#DB2777]" />,
    },
    {
      label: 'Direct Upstream Carriers',
      val: 'Lumen, NTT & Telia Tier-1',
      desc: 'Direct physical interconnects to Lumen (AS3356), NTT (AS2914), and Telia (AS1299) Tier-1 backbones.',
      tag: 'Tier-1 Direct',
      icon: <Shield className="w-5 h-5 text-[#DB2777]" />,
    },
    {
      label: 'Backbone Availability',
      val: '99.999% SLA Guarantee',
      desc: 'Dual-ring self-healing optical mesh with automatic sub-50ms protection switching across all POPs.',
      tag: 'Five-Nines Uptime',
      icon: <CheckCircle2 className="w-5 h-5 text-[#DB2777]" />,
    },
  ];

  return (
    <div className="w-full transition-colors relative overflow-hidden bg-[#0E0B1A]">
      {/* HERO SECTION WITH REAL-TIME BACKBONE TOPOLOGY VISUALIZATION */}
      <section id="transit-hero" className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17132A] border border-[#2C2645] text-[#DB2777] text-xs font-mono font-semibold uppercase tracking-wider">
                <Globe size={14} />
                CARRIER-GRADE IP TRANSIT
              </div>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black tracking-tight text-[#F5F3FA] font-heading leading-[1.15]">
                DETERMINISTIC ROUTING.<br />
                <span className="text-[#DB2777]">GLOBAL REACH.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#9C94B8] leading-relaxed">
                High-capacity, carrier-grade IP transit engineered for low-hop global connectivity, deterministic BGP pathing, and zero-throttle bandwidth.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-2xl cursor-pointer"
                >
                  <span>PROVISION TRANSIT PORT</span>
                  <ArrowRight size={14} />
                </button>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#17132A] border border-[#2C2645] text-xs font-mono text-[#DB2777]">
                  <span className="w-2 h-2 rounded-full bg-[#DB2777] animate-pulse"></span>
                  <span>100G & 400G PORTS LIVE</span>
                </div>
              </div>
            </div>

            {/* Right Column: Backbone Topology SVG Flow Diagram */}
            <div className="lg:col-span-7 w-full flex flex-col items-center justify-center">
              <div className="w-full">
                <IPTransitBackbone />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECS SECTION */}
      <section className="py-20 border-t border-[#2C2645] bg-[#17132A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1938] border border-[#2C2645] text-[#DB2777] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <CheckCircle2 size={13} />
              CARRIER-GRADE STANDARDS
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#F5F3FA] font-heading">
              Carrier Transit Technical Specifications
            </h2>
            <p className="text-sm text-[#9C94B8] mt-2">
              Engineered for telecommunication carriers, hyperscalers, and mission-critical enterprise workloads with contractual SLAs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((sp) => (
              <div
                key={sp.label}
                className="bento-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1F1938] border border-[#2C2645] flex items-center justify-center">
                      {sp.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#1F1938] text-[#DB2777] border border-[#2C2645]">
                      {sp.tag}
                    </span>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-wider text-[#9C94B8] block mb-1">
                    {sp.label}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold font-mono text-[#F5F3FA] mb-2 leading-snug">
                    {sp.val}
                  </h3>

                  <p className="text-xs text-[#9C94B8] leading-relaxed">
                    {sp.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2C2645] flex items-center gap-1.5 text-xs font-mono text-[#DB2777]">
                  <CheckCircle2 size={13} />
                  <span>Contractual Guarantee</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection
        navigate={navigate}
        title="PROVISION 10G/100G IP TRANSIT WITH DETERMINISTIC SLAs."
        subtitle="Talk to our network engineering desk to setup test BGP peering sessions or verify regional looking-glass latency."
        badgeText="CARRIER TRANSIT PROVISIONING"
      />
    </div>
  );
}

export default IPTransitPage;
