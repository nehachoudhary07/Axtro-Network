import React from 'react';
import { PageRoute } from '../types';
import { LeasedLineDedicatedPath } from '../components/svg/LeasedLineDedicatedPath';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { ArrowRight, Link as LinkIcon, CheckCircle2 } from '../components/animated-icons';

interface LeasedLinesPageProps {
  navigate: (route: PageRoute) => void;
}

export function LeasedLinesPage({ navigate }: LeasedLinesPageProps) {
  const corridors = [
    {
      route: 'Delhi NCR ↔ Mumbai',
      rtt: '18.4 ms',
      tech: 'DWDM Optical Wavelength',
      redundancy: 'Dual Ring Diverse Path',
      desc: 'Express dark fiber conduit linking north-central enterprise financial hubs with ultra-low deterministic transit.',
      tag: 'Express Corridor',
    },
    {
      route: 'Mumbai ↔ Chennai',
      rtt: '14.1 ms',
      tech: 'Subsea & Terrestrial Optical',
      redundancy: 'Automatic Sub-50ms Protection',
      desc: 'Cross-peninsula subsea and terrestrial dual-conduit path connecting west coast landing stations to Bay of Bengal.',
      tag: 'Coastal Interconnect',
    },
    {
      route: 'Delhi NCR ↔ Chennai',
      rtt: '24.2 ms',
      tech: 'Direct Express Dark Fiber',
      redundancy: 'Sub-Wavelength Resiliency',
      desc: 'Long-haul optical pipeline engineered for synchronous database replication, ERP clusters, and cloud disaster recovery.',
      tag: 'North-South Trunk',
    },
  ];

  return (
    <div className="w-full transition-colors relative overflow-hidden bg-[#0E0B1A]">
      {/* HERO SECTION WITH REAL-TIME DEDICATED OPTICAL TOPOLOGY */}
      <section id="leased-hero" className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17132A] border border-[#2C2645] text-[#DB2777] text-xs font-mono font-semibold uppercase tracking-wider">
                <LinkIcon size={14} />
                DEDICATED OPTICAL DARK FIBER
              </div>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black tracking-tight text-[#F5F3FA] font-heading leading-[1.15]">
                PRIVATE OPTICAL LEASED LINES.<br />
                <span className="text-[#DB2777]">ZERO PUBLIC INTERNET.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#9C94B8] leading-relaxed">
                Dedicated point-to-point optical wavelengths connecting enterprise data centers and headquarters across Delhi NCR, Mumbai, and Chennai with zero contention and zero jitter.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-2xl cursor-pointer"
                >
                  <span>PROVISION PRIVATE LINE</span>
                  <ArrowRight size={14} />
                </button>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#17132A] border border-[#2C2645] text-xs font-mono text-[#DB2777]">
                  <span className="w-2 h-2 rounded-full bg-[#DB2777] animate-pulse"></span>
                  <span>SUB-50MS DUAL-RING FAILOVER</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dedicated Optical Path SVG Diagram */}
            <div className="lg:col-span-7 w-full flex flex-col items-center justify-center">
              <div className="w-full">
                <LeasedLineDedicatedPath />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTER-METRO CORRIDORS */}
      <section className="py-20 border-t border-[#2C2645] bg-[#17132A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1938] border border-[#2C2645] text-[#DB2777] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <CheckCircle2 size={13} />
              LOW-LATENCY TRANSIT
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#F5F3FA] font-heading">
              Dedicated Inter-Metro Corridors
            </h2>
            <p className="text-sm text-[#9C94B8] mt-2">
              Contractually guaranteed latency standards engineered for real-time banking, ERP synchronization, and cloud storage replication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corridors.map((c) => (
              <div
                key={c.route}
                className="bento-card p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#1F1938] text-[#DB2777] border border-[#2C2645]">
                      {c.tag}
                    </span>
                    <span className="text-[10px] font-mono text-[#9C94B8] uppercase">
                      {c.tech}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#F5F3FA] mb-4">
                    {c.route}
                  </h3>

                  <div className="p-4 rounded-2xl bg-[#0E0B1A] border border-[#2C2645] mb-4">
                    <div className="text-[10px] font-mono text-[#9C94B8] uppercase">Guaranteed Max RTT</div>
                    <div className="text-2xl sm:text-3xl font-black font-mono text-[#DB2777] mt-1">{c.rtt}</div>
                  </div>

                  <p className="text-xs text-[#9C94B8] leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2C2645] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#9C94B8]">{c.redundancy}</span>
                  <div className="flex items-center gap-1 text-[#DB2777]">
                    <CheckCircle2 size={13} />
                    <span>1:1 Dedicated</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection
        navigate={navigate}
        title="PROVISION UNCONTENDED PRIVATE DARK FIBER TODAY."
        subtitle="Connect with our optical engineering team for custom route diversity planning and fiber cross-connect specifications."
        badgeText="PRIVATE LEASED LINE PROVISIONING"
      />
    </div>
  );
}

export default LeasedLinesPage;
