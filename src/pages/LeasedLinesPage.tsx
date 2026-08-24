import React from 'react';
import { PageRoute } from '../types';
import { LeasedLineDedicatedPath } from '../components/svg/LeasedLineDedicatedPath';
import { LeasedLineIcon } from '../components/svg/ServiceIcons';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { ArrowRight, Building, Server, Lock, Activity, Sparkles, CheckCircle2 } from 'lucide-react';

interface LeasedLinesPageProps {
  navigate: (route: PageRoute) => void;
}

export function LeasedLinesPage({ navigate }: LeasedLinesPageProps) {
  const useCases = [
    {
      title: 'Enterprise Metro Interconnect',
      desc: 'Seamlessly link corporate headquarters, regional offices, and branch campuses with dedicated uncontended point-to-point bandwidth.',
      icon: <Building className="w-6 h-6 text-[#245FA8]" />,
      tag: 'Dedicated 1:1',
    },
    {
      title: 'Data Center L2 Cross-Connects',
      desc: 'High-bandwidth point-to-point Layer-2 circuits connecting server racks and colocation facilities across metro regions with zero packet drop.',
      icon: <Server className="w-6 h-6 text-[#245FA8]" />,
      tag: 'Metro Fiber',
    },
    {
      title: 'Ultra-Low Jitter Database Sync',
      desc: 'Guaranteed deterministic latency and sub-millisecond jitter for real-time transactional databases, disaster recovery replication, and VoIP.',
      icon: <Activity className="w-6 h-6 text-[#245FA8]" />,
      tag: 'Zero Loss',
    },
    {
      title: 'Air-Gapped Private Line Security',
      desc: 'Dedicated optical circuits completely isolated from public Internet routing for strict regulatory data sovereignty and compliance.',
      icon: <Lock className="w-6 h-6 text-[#245FA8]" />,
      tag: 'Encrypted L2',
    },
  ];

  return (
    <div className="w-full transition-colors relative overflow-hidden bg-[#030507]">
      {/* HERO SECTION */}
      <section id="leased-hero" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider">
              <Lock size={14} />
              DEDICATED OPTICAL CIRCUITS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F5F7FA] font-heading leading-tight">
              LEASED LINES<br />
              <span className="text-[#245FA8]">DEDICATED BY DESIGN.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#A7B0BE] leading-relaxed max-w-2xl">
              Dedicated point-to-point and multipoint optical connectivity for businesses requiring uncontended, zero-jitter network performance.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-2xl"
              >
                <span>REQUEST CIRCUIT PROPOSAL</span>
                <ArrowRight size={14} />
              </button>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#07101C] border border-[#17263A] text-xs font-mono text-[#245FA8]">
                <span className="w-2 h-2 rounded-full bg-[#245FA8] animate-pulse"></span>
                <span>99.999% SLA DEDICATED BANDWIDTH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SVG DEDICATED PATH DIAGRAM */}
      <section id="leased-path-section" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Activity size={13} />
              POINT-TO-POINT CIRCUIT
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#F5F7FA] font-heading">
              UNCONTENDED OPTICAL PATHWAY
            </h2>
            <p className="text-sm text-[#A7B0BE] mt-2">
              Layer-2 transparent transport with carrier failover and guaranteed symmetrical throughput.
            </p>
          </div>

          <div className="bg-[#07101C] rounded-3xl p-4 sm:p-8 shadow-2xl border border-[#17263A]">
            <LeasedLineDedicatedPath />
          </div>
        </div>
      </section>

      {/* USE CASES BENTO */}
      <section id="leased-use-cases" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              ENTERPRISE DEPLOYMENTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#F5F7FA] font-heading">
              ENGINEERED FOR CRITICAL WORKLOADS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="bento-card p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-[#030507] border border-[#17263A] group-hover:scale-110 transition-transform">
                      {uc.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#030507] text-[#245FA8] border border-[#17263A]">
                      {uc.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F7FA] font-heading mb-3">
                    {uc.title}
                  </h3>

                  <p className="text-sm text-[#A7B0BE] leading-relaxed">
                    {uc.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#17263A] flex items-center gap-2 text-xs text-[#245FA8] font-mono">
                  <CheckCircle2 size={14} />
                  <span>Unshared Dedicated Physical Port Allocation</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCtaSection
        navigate={navigate}
        title="DEPLOY YOUR PRIVATE FIBER."
        subtitle="Provision dedicated point-to-point leased line circuits between your data centers and offices."
        badgeText="CUSTOM CIRCUIT DEPLOYMENT"
      />
    </div>
  );
}

export default LeasedLinesPage;
