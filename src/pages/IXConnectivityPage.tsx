import React from 'react';
import { PageRoute } from '../types';
import { IXExchangeDiagram } from '../components/svg/IXExchangeDiagram';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { ArrowRight, Layers, Network, CheckCircle2, Zap, Globe, Cpu } from '../components/animated-icons';

interface IXConnectivityPageProps {
  navigate: (route: PageRoute) => void;
}

export function IXConnectivityPage({ navigate }: IXConnectivityPageProps) {
  const benefits = [
    {
      title: 'Bypass Public Congestion',
      desc: 'Direct Layer-2 switching cuts out 3 to 5 intermediate transit autonomous systems, lowering round-trip ping and eliminating packet loss.',
      tag: 'Zero Transit Hops',
      icon: <Zap className="w-5 h-5 text-[#DB2777]" />,
    },
    {
      title: 'Single-Port Multi-Peer Interconnect',
      desc: 'Connect to hundreds of Indian ISPs, CDNs, enterprise clouds, and SaaS platforms over a single high-capacity 10G/100G cross-connect.',
      tag: '10G / 100G Fabric',
      icon: <Network className="w-5 h-5 text-[#DB2777]" />,
    },
    {
      title: 'Direct Eyeball Routing',
      desc: 'Reach major Indian telecom subscribers (Reliance Jio, Airtel, Vodafone Idea, ACT Fibernet) with lowest sub-5ms metro ping.',
      tag: 'Sub-5ms Metro Ping',
      icon: <Globe className="w-5 h-5 text-[#DB2777]" />,
    },
    {
      title: 'Subsea IX Landing Integration',
      desc: 'Direct connectivity into Mumbai and Chennai subsea cable landings provides high-density low-latency peering into APAC & Singapore.',
      tag: 'APAC Subsea Landing',
      icon: <Cpu className="w-5 h-5 text-[#DB2777]" />,
    },
  ];

  return (
    <div className="w-full transition-colors relative overflow-hidden bg-[#0E0B1A]">
      {/* HERO SECTION WITH REAL-TIME PEERING TOPOLOGY VISUALIZATION */}
      <section id="ix-hero" className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17132A] border border-[#2C2645] text-[#DB2777] text-xs font-mono font-semibold uppercase tracking-wider">
                <Layers size={14} />
                INTERNET EXCHANGE CONNECTIVITY
              </div>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black tracking-tight text-[#F5F3FA] font-heading leading-[1.15]">
                DIRECT INTERCONNECTION.<br />
                <span className="text-[#DB2777]">LOWEST-HOP PEERING.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#9C94B8] leading-relaxed">
                Connect directly to the Connect IX fabric, NIXI, and APAC peering ecosystems to bypass congested public transit hops and optimize user latency.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-2xl cursor-pointer"
                >
                  <span>CONNECT TO IX FABRIC</span>
                  <ArrowRight size={14} />
                </button>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#17132A] border border-[#2C2645] text-xs font-mono text-[#DB2777]">
                  <span className="w-2 h-2 rounded-full bg-[#DB2777] animate-pulse"></span>
                  <span>10G / 100G / 400G PORTS LIVE</span>
                </div>
              </div>
            </div>

            {/* Right Column: Peering Topology SVG Flow Diagram */}
            <div className="lg:col-span-7 w-full flex flex-col items-center justify-center">
              <div className="w-full">
                <IXExchangeDiagram />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS BENTO GRID */}
      <section className="py-20 border-t border-[#2C2645] bg-[#17132A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1938] border border-[#2C2645] text-[#DB2777] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <CheckCircle2 size={13} />
              PEERING ADVANTAGES
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#F5F3FA] font-heading">
              Why Route Over Internet Exchange Fabrics
            </h2>
            <p className="text-sm text-[#9C94B8] mt-2">
              Exchange traffic directly with Indian ISPs, hyper-scalers, and gaming backbones with predictable microsecond performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bento-card p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1F1938] border border-[#2C2645] flex items-center justify-center">
                      {b.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#1F1938] text-[#DB2777] border border-[#2C2645]">
                      {b.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#F5F3FA] mb-3">
                    {b.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9C94B8] leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2C2645] flex items-center gap-2 text-xs font-mono text-[#DB2777]">
                  <CheckCircle2 size={14} />
                  <span>Sub-Millisecond Metro Switching</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection
        navigate={navigate}
        title="EXTEND YOUR REACH ACROSS INDIAN INTERNET EXCHANGES."
        subtitle="Our peering coordinators will assist in configuring BGP route servers, mutual peering agreements, and Layer-2 port allocations."
        badgeText="CONNECT IX ECOSYSTEM ACCESS"
      />
    </div>
  );
}

export default IXConnectivityPage;
