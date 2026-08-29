import React from 'react';
import { PageRoute } from '../types';
import { NetworkGlobe } from '../components/svg/NetworkGlobe';
import { DdosIcon, TransitIcon, IxIcon, LeasedLineIcon, LogoIcon } from '../components/svg/ServiceIcons';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { ArrowRight, Shield, Zap, Layers, Compass, CheckCircle2 } from '../components/animated-icons';

interface AboutPageProps {
  navigate: (route: PageRoute) => void;
}

export function AboutPage({ navigate }: AboutPageProps) {
  const approaches = [
    {
      title: 'PERFORMANCE',
      desc: 'Infrastructure designed around reliable, low-jitter network performance, direct BGP pathing, and high-throughput routing matrices.',
      icon: <Zap className="w-6 h-6 text-[#DB2777]" />,
      tag: 'Deterministic Low-Hop',
    },
    {
      title: 'RESILIENCE',
      desc: 'Connectivity designed with extreme uptime and continuity in mind, featuring autonomous edge mitigation and redundant optical rings.',
      icon: <Shield className="w-6 h-6 text-[#DB2777]" />,
      tag: '99.999% SLA Uptime',
    },
    {
      title: 'INTERCONNECTION',
      desc: 'Connecting businesses to essential Internet infrastructure ecosystems, major Internet Exchanges, and global carrier backbones.',
      icon: <Layers className="w-6 h-6 text-[#DB2777]" />,
      tag: 'Connect IX Ecosystem',
    },
  ];

  const services = [
    {
      title: 'DDoS Protection',
      desc: 'Intelligent network protection designed to detect, filter and mitigate multi-Tbps malicious traffic in real-time.',
      route: '/services/ddos-protection' as PageRoute,
      icon: <DdosIcon className="w-6 h-6" />,
      color: 'text-[#DB2777]',
    },
    {
      title: 'IP Transit',
      desc: 'Reliable BGP Internet transit engineered for predictable routing, lowest AS-path hops, and scalable bandwidth.',
      route: '/services/ip-transit' as PageRoute,
      icon: <TransitIcon className="w-6 h-6" />,
      color: 'text-[#DB2777]',
    },
    {
      title: 'IX Connectivity',
      desc: 'Connect to Internet Exchange ecosystems and improve routing efficiency with direct Layer-2 switching.',
      route: '/services/ix-connectivity' as PageRoute,
      icon: <IxIcon className="w-6 h-6" />,
      color: 'text-[#DB2777]',
    },
    {
      title: 'Leased Lines',
      desc: 'Dedicated private optical connectivity for enterprises requiring uncontended, zero-loss performance.',
      route: '/services/leased-lines' as PageRoute,
      icon: <LeasedLineIcon className="w-6 h-6" />,
      color: 'text-[#DB2777]',
    },
  ];

  return (
    <div className="w-full transition-colors relative overflow-hidden bg-[#0E0B1A]">
      {/* HERO SECTION */}
      <section id="about-hero" className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17132A] border border-[#2C2645] text-[#DB2777] text-xs font-mono font-semibold uppercase tracking-wider">
                <LogoIcon className="w-4 h-4" />
                ABOUT AXTRO NETWORKS
              </div>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black tracking-tight text-[#F5F3FA] font-heading leading-[1.15]">
                THE AXIS OF<br />
                <span className="text-[#DB2777]">CONNECTIVITY.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#9C94B8] leading-relaxed max-w-xl">
                AXTRO NETWORKS is built around a single mandate: make Internet infrastructure more secure, resilient, and deterministically connected for Indian and global enterprises.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-2xl cursor-pointer"
                >
                  <span>CONNECT WITH OUR ENGINEERS</span>
                  <ArrowRight size={14} />
                </button>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#17132A] border border-[#2C2645] text-xs font-mono text-[#DB2777]">
                  <span className="w-2 h-2 rounded-full bg-[#DB2777] animate-pulse"></span>
                  <span>CARRIER NEUTRAL INFRASTRUCTURE</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex items-center justify-center relative w-full">
              <div className="w-full max-w-[500px] aspect-square relative flex items-center justify-center">
                <NetworkGlobe className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE MANDATE PILLARS */}
      <section className="py-20 border-t border-[#2C2645] bg-[#17132A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((app) => (
              <div
                key={app.title}
                className="p-8 rounded-3xl bg-[#0E0B1A] border border-[#2C2645] hover:border-[#DB2777] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#1F1938] border border-[#2C2645] flex items-center justify-center shadow-md">
                      {app.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1F1938] text-[#DB2777] border border-[#2C2645]">
                      {app.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#F5F3FA] mb-3">
                    {app.title}
                  </h3>

                  <p className="text-sm text-[#9C94B8] leading-relaxed">
                    {app.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#2C2645] flex items-center gap-2 text-xs font-mono text-[#DB2777]">
                  <CheckCircle2 size={14} />
                  <span>Enterprise SLA Guaranteed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & ARCHITECTURE SHOWCASE */}
      <section className="py-24 border-t border-[#2C2645] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17132A] border border-[#2C2645] text-[#DB2777] text-xs font-mono font-semibold uppercase tracking-wider">
                <Compass size={14} />
                OUR ARCHITECTURAL PHILOSOPHY
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#F5F3FA] font-heading leading-tight">
                BUILT BY NETWORK ENGINEERS FOR HIGH-STAKES UPTIME.
              </h2>

              <p className="text-sm sm:text-base text-[#9C94B8] leading-relaxed">
                As internet usage surges across India and APAC, existing networks frequently face congestion, unannounced transit throttling, and vulnerability to massive volumetric attacks.
              </p>

              <p className="text-sm sm:text-base text-[#9C94B8] leading-relaxed">
                AXTRO NETWORKS was established to provide an uncontended, enterprise-first alternative: carrier-grade dark fiber transport, hardware-accelerated DDoS mitigation, and low-latency peering across Delhi, Mumbai, and Chennai.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-6 rounded-2xl bg-[#17132A] border border-[#2C2645] flex flex-col justify-between">
                <div>
                  <div className="text-[10px] text-[#9C94B8] uppercase tracking-wider">BACKBONE</div>
                  <div className="text-xl font-bold text-[#F5F3FA] mt-2">100G Optical Mesh</div>
                </div>
                <p className="text-xs text-[#9C94B8] font-sans mt-3">Redundant high-throughput fiber rings connecting major data center metros.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#17132A] border border-[#2C2645] flex flex-col justify-between">
                <div>
                  <div className="text-[10px] text-[#9C94B8] uppercase tracking-wider">NOC ENGAGEMENT</div>
                  <div className="text-xl font-bold text-[#DB2777] mt-2">Direct L3 Engineers</div>
                </div>
                <p className="text-xs text-[#9C94B8] font-sans mt-3">Zero bot queues; direct collaboration with routing operators 24/7.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#17132A] border border-[#2C2645] flex flex-col justify-between">
                <div>
                  <div className="text-[10px] text-[#9C94B8] uppercase tracking-wider">PEERING LATENCY</div>
                  <div className="text-xl font-bold text-[#F5F3FA] mt-2">&lt; 2.5 ms Sub-Metro</div>
                </div>
                <p className="text-xs text-[#9C94B8] font-sans mt-3">Direct IX cross-connects with ultra-low latency deterministic hops.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#17132A] border border-[#2C2645] flex flex-col justify-between">
                <div>
                  <div className="text-[10px] text-[#9C94B8] uppercase tracking-wider">UPTIME SLA</div>
                  <div className="text-xl font-bold text-[#DB2777] mt-2">99.999% Guaranteed</div>
                </div>
                <p className="text-xs text-[#9C94B8] font-sans mt-3">Contractual performance guarantees backed by active edge mitigation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PORTFOLIO */}
      <section className="py-24 border-t border-[#2C2645] bg-[#17132A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#F5F3FA] font-heading">
              Our Infrastructure Suite
            </h2>
            <p className="text-sm text-[#9C94B8] mt-3">
              Explore our four interconnected network products engineered to keep mission-critical enterprise systems online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv) => (
              <div
                key={srv.title}
                onClick={() => navigate(srv.route)}
                className="bento-card p-6 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1F1938] border border-[#2C2645] flex items-center justify-center text-[#DB2777] mb-6 shadow-md">
                    {srv.icon}
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#F5F3FA] group-hover:text-[#DB2777] transition-colors mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-[#9C94B8] leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#2C2645] flex items-center justify-between text-xs font-mono text-[#DB2777]">
                  <span>VIEW DETAILS</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCtaSection navigate={navigate} />
    </div>
  );
}

export default AboutPage;
