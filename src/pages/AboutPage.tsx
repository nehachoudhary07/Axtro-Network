import React from 'react';
import { PageRoute } from '../types';
import { HomeNetworkTopology } from '../components/svg/HomeNetworkTopology';
import { DdosIcon, TransitIcon, IxIcon, LeasedLineIcon, LogoIcon } from '../components/svg/ServiceIcons';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { ArrowRight, Shield, Zap, Layers, Sparkles, Activity, Globe, Compass, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  navigate: (route: PageRoute) => void;
}

export function AboutPage({ navigate }: AboutPageProps) {
  const approaches = [
    {
      title: 'PERFORMANCE',
      desc: 'Infrastructure designed around reliable, low-jitter network performance, direct BGP pathing, and high-throughput routing matrices.',
      icon: <Zap className="w-6 h-6 text-[#245FA8]" />,
      tag: 'Deterministic Low-Hop',
    },
    {
      title: 'RESILIENCE',
      desc: 'Connectivity designed with extreme uptime and continuity in mind, featuring autonomous edge mitigation and redundant optical rings.',
      icon: <Shield className="w-6 h-6 text-[#245FA8]" />,
      tag: '99.999% SLA Uptime',
    },
    {
      title: 'INTERCONNECTION',
      desc: 'Connecting businesses to essential Internet infrastructure ecosystems, major Internet Exchanges, and global carrier backbones.',
      icon: <Layers className="w-6 h-6 text-[#245FA8]" />,
      tag: 'Connect IX Ecosystem',
    },
  ];

  const services = [
    {
      title: 'DDoS Protection',
      desc: 'Intelligent network protection designed to detect, filter and mitigate multi-Tbps malicious traffic in real-time.',
      route: '/services/ddos-protection' as PageRoute,
      icon: <DdosIcon className="w-6 h-6" />,
      color: 'text-[#245FA8]',
    },
    {
      title: 'IP Transit',
      desc: 'Reliable BGP Internet transit engineered for predictable routing, lowest AS-path hops, and scalable bandwidth.',
      route: '/services/ip-transit' as PageRoute,
      icon: <TransitIcon className="w-6 h-6" />,
      color: 'text-[#245FA8]',
    },
    {
      title: 'IX Connectivity',
      desc: 'Connect to Internet Exchange ecosystems and improve routing efficiency with direct Layer-2 switching.',
      route: '/services/ix-connectivity' as PageRoute,
      icon: <IxIcon className="w-6 h-6" />,
      color: 'text-[#245FA8]',
    },
    {
      title: 'Leased Lines',
      desc: 'Dedicated private optical connectivity for enterprises requiring uncontended, zero-loss performance.',
      route: '/services/leased-lines' as PageRoute,
      icon: <LeasedLineIcon className="w-6 h-6" />,
      color: 'text-[#245FA8]',
    },
  ];

  return (
    <div className="w-full transition-colors relative overflow-hidden bg-[#030507]">
      {/* HERO SECTION */}
      <section id="about-hero" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider">
              <LogoIcon className="w-4 h-4" />
              ABOUT AXTRO NETWORKS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F5F7FA] font-heading leading-tight">
              THE AXIS OF<br />
              <span className="text-[#245FA8]">CONNECTIVITY.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#A7B0BE] leading-relaxed max-w-2xl">
              AXTRO NETWORKS is built around a single mandate: make Internet infrastructure more secure, resilient, and deterministically connected for Indian and global enterprises.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-2xl"
              >
                <span>CONNECT WITH OUR ENGINEERS</span>
                <ArrowRight size={14} />
              </button>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#07101C] border border-[#17263A] text-xs font-mono text-[#245FA8]">
                <span className="w-2 h-2 rounded-full bg-[#245FA8] animate-pulse"></span>
                <span>CARRIER NEUTRAL INFRASTRUCTURE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH BENTO */}
      <section id="about-approach" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              CORE PHILOSOPHY
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#F5F7FA] font-heading">
              OUR ENGINEERING APPROACH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approaches.map((app) => (
              <div
                key={app.title}
                className="bento-card p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3 rounded-2xl bg-[#030507] border border-[#17263A] group-hover:scale-110 transition-transform">
                      {app.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#030507] text-[#245FA8] border border-[#17263A]">
                      {app.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#F5F7FA] font-heading mb-4 tracking-wide">
                    {app.title}
                  </h3>

                  <p className="text-sm text-[#A7B0BE] leading-relaxed">
                    {app.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#17263A] flex items-center justify-between text-[10px] font-mono text-[#245FA8] uppercase tracking-widest">
                  <span>FOUNDATIONAL PILLAR</span>
                  <span className="w-2 h-2 rounded-full bg-[#245FA8] animate-pulse"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT MANIFESTO */}
      <section id="brand-statement" className="py-28 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-[#07101C] p-10 sm:p-16 rounded-3xl border border-[#17263A] shadow-2xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17263A] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
              THE AXTRO MANIFESTO
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F5F7FA] font-heading max-w-4xl mx-auto leading-tight">
              WE DON'T JUST CONNECT NETWORKS.<br />
              <span className="text-[#245FA8]">WE BUILD THE AXIS BETWEEN THEM.</span>
            </h2>

            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="w-12 h-[1px] bg-[#17263A]"></span>
              <span className="text-xs font-mono text-[#A7B0BE] tracking-widest uppercase">THE AXIS OF THE INTERNET</span>
              <span className="w-12 h-[1px] bg-[#17263A]"></span>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES BENTO */}
      <section id="about-services" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Globe size={13} />
              INFRASTRUCTURE SUITE
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#F5F7FA] font-heading">
              FULL-STACK CONNECTIVITY
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((serv) => (
              <div
                key={serv.title}
                onClick={() => navigate(serv.route)}
                className="bento-card p-6 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-fit rounded-2xl bg-[#030507] border border-[#17263A] group-hover:scale-110 transition-transform mb-6">
                    {serv.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#F5F7FA] font-heading mb-2">
                    {serv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7B0BE] leading-relaxed">
                    {serv.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#17263A] flex items-center justify-between text-xs font-bold text-[#245FA8] group-hover:text-white transition-colors">
                  <span>Explore Service</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR NETWORK TOPOLOGY */}
      <section id="about-network" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <Activity size={13} />
                NETWORK TOPOLOGY
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#F5F7FA] font-heading">
                INTERCONNECT FABRIC
              </h2>
              <p className="text-sm text-[#A7B0BE] mt-2">
                Delhi NCR (Yotta D1) • Mumbai (Connect IX) • Chennai (Connect IX)
              </p>
            </div>

            <button
              onClick={() => navigate('/network')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-lg"
            >
              <span>VIEW INTERACTIVE MAP</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="bg-[#07101C] rounded-3xl p-4 sm:p-8 shadow-2xl border border-[#17263A]">
            <HomeNetworkTopology onSelectNode={() => navigate('/network')} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCtaSection
        navigate={navigate}
        title="BUILD YOUR NEXT NETWORK WITH AXTRO."
        subtitle="Connect with our solutions architects to design and deploy carrier-grade network infrastructure."
        badgeText="ENGINEERING CONSULTATION"
      />
    </div>
  );
}

export default AboutPage;
