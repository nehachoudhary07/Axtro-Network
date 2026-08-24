import React from 'react';
import { PageRoute } from '../types';
import { IXExchangeDiagram } from '../components/svg/IXExchangeDiagram';
import { IxIcon } from '../components/svg/ServiceIcons';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { ArrowRight, Layers, Share2, Zap, MapPin, Sparkles, CheckCircle2, Activity } from 'lucide-react';

interface IXConnectivityPageProps {
  navigate: (route: PageRoute) => void;
}

export function IXConnectivityPage({ navigate }: IXConnectivityPageProps) {
  const benefits = [
    {
      title: 'Direct Fabric Interconnection',
      desc: 'Connect networks directly within major Indian Internet Exchange ecosystems, bypassing multiple intermediary transit ASNs.',
      icon: <Share2 className="w-6 h-6 text-[#245FA8]" />,
      tag: 'Zero Transit Hops',
    },
    {
      title: 'Sub-3ms Metro Latency',
      desc: 'Improve packet paths, eliminate transit latency, and reduce unnecessary routing distances for regional end-users.',
      icon: <Zap className="w-6 h-6 text-[#245FA8]" />,
      tag: 'Localized Routing',
    },
    {
      title: 'Dense Peer Ecosystem',
      desc: 'Join a thriving fabric of 300+ ISPs, CDNs, cloud hyperscalers, content providers, and enterprise autonomous systems on one VLAN.',
      icon: <Layers className="w-6 h-6 text-[#245FA8]" />,
      tag: 'Multi-Lateral Peering',
    },
    {
      title: 'Tri-City Port Presence',
      desc: 'High-availability peering ports deployed across Delhi (Yotta D1), Mumbai (Connect IX), and Chennai (Connect IX).',
      icon: <MapPin className="w-6 h-6 text-[#245FA8]" />,
      tag: 'All 3 Core Hubs',
    },
  ];

  return (
    <div className="w-full transition-colors relative overflow-hidden bg-[#030507]">
      {/* HERO SECTION */}
      <section id="ix-hero" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider">
              <Layers size={14} />
              PEERING ECOSYSTEM FABRIC
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F5F7FA] font-heading leading-tight">
              IX CONNECTIVITY<br />
              <span className="text-[#245FA8]">CONNECT CLOSER. ROUTE BETTER.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#A7B0BE] leading-relaxed max-w-2xl">
              Connect to Internet Exchange ecosystems and improve routing efficiency through strategic network interconnection.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-2xl"
              >
                <span>REQUEST IX PORT PROPOSAL</span>
                <ArrowRight size={14} />
              </button>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#07101C] border border-[#17263A] text-xs font-mono text-[#245FA8]">
                <span className="w-2 h-2 rounded-full bg-[#245FA8] animate-pulse"></span>
                <span>CONNECT IX GATEWAY CONNECTED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SVG IX DIAGRAM */}
      <section id="ix-diagram-section" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Activity size={13} />
              INTERCONNECTION FABRIC
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#F5F7FA] font-heading">
              PEERING MATRIX ARCHITECTURE
            </h2>
            <p className="text-sm text-[#A7B0BE] mt-2">
              Direct, high-bandwidth bilateral and multilateral peering across major Indian IX fabrics.
            </p>
          </div>

          <div className="bg-[#07101C] rounded-3xl p-4 sm:p-8 shadow-2xl border border-[#17263A]">
            <IXExchangeDiagram />
          </div>
        </div>
      </section>

      {/* CORE BENEFITS BENTO */}
      <section id="ix-benefits" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              PEERING ADVANTAGES
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#F5F7FA] font-heading">
              LOCALIZED PACKET ROUTING
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
                  <span>Direct Sub-Millisecond Layer-2 Switching</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCtaSection
        navigate={navigate}
        title="JOIN THE IX FABRIC."
        subtitle="Connect your Autonomous System directly to Connect IX through AXTRO NETWORKS."
        badgeText="INSTANT PORT PROVISIONING"
      />
    </div>
  );
}

export default IXConnectivityPage;
