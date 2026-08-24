import React, { useState } from 'react';
import { Shield, Zap, RefreshCw, Cpu, Layers, ArrowUpRight, CheckCircle2, Activity, Radio, Sparkles } from 'lucide-react';

export function WhyAxtroSection() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: '01',
      title: 'NETWORK-FIRST ARCHITECTURE',
      subtitle: 'Uncontended Carrier Transport',
      desc: 'Engineered strictly for deterministic throughput without artificial throttling or oversubscription. Every packet traverses private, unshared wavelength channels with carrier-grade optics.',
      specs: [
        { label: 'Oversubscription Ratio', val: '1:1 Guaranteed' },
        { label: 'Intra-Metro Core Latency', val: '< 1.8 ms' },
        { label: 'Backbone Availability', val: '99.999% SLA' },
      ],
      icon: <Layers className="w-6 h-6 text-[#245FA8]" />,
    },
    {
      id: '02',
      title: 'DETERMINISTIC LOW LATENCY',
      subtitle: 'Optimized Direct BGP Peering',
      desc: 'Direct cross-connects into Connect IX, NIXI, and tier-1 transits eliminate intermediate transit hops. Route optimization algorithms continuously bypass regional congestion points.',
      specs: [
        { label: 'Hop Count Reduction', val: '-3 to -5 Hops' },
        { label: 'Packet Jitter Standard', val: '< 0.05 ms' },
        { label: 'Route Optimization Frequency', val: 'Sub-Second BGP' },
      ],
      icon: <Zap className="w-6 h-6 text-[#F5F7FA]" />,
    },
    {
      id: '03',
      title: 'SELF-HEALING RESILIENT MESH',
      subtitle: 'Dual-Ring Redundant Failover',
      desc: 'Multi-ring optical architecture with automatic sub-50ms sub-wavelength switching. If an upstream carrier experiences fiber cut, traffic routes instantaneously over secondary dark paths.',
      specs: [
        { label: 'Failover Recovery Speed', val: '< 35 ms Automatic' },
        { label: 'Diverse Metro Ingress', val: 'Dual Path Entry' },
        { label: 'Power & Core Resilience', val: '2N Tier-IV MMR' },
      ],
      icon: <RefreshCw className="w-6 h-6 text-[#F5F7FA]" />,
    },
    {
      id: '04',
      title: '24×7 SPECIALIZED NOC ENGAGEMENT',
      subtitle: 'Direct Level-3 Engineering Access',
      desc: 'No first-tier bot queues or bureaucratic ticket escalations. Your engineering team collaborates directly with senior network operators and BGP routing specialists around the clock.',
      specs: [
        { label: 'Average Response Time', val: '< 5 Minutes' },
        { label: 'NOC Staffing Level', val: 'Tier-3 Certified' },
        { label: 'BGP Community Customization', val: 'Real-time On Demand' },
      ],
      icon: <Cpu className="w-6 h-6 text-[#245FA8]" />,
    },
  ];

  const current = pillars[activeTab];

  return (
    <section id="why-axtro-section" className="py-24 sm:py-32 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={13} />
              ARCHITECTURAL ADVANTAGE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#F5F7FA] font-heading leading-tight">
              ENGINEERED FOR<br />
              <span className="text-[#245FA8]">ZERO COMPROMISE.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#A7B0BE] leading-relaxed">
            Built from bare-metal dark fiber upward for hyper-demanding platforms where downtime is measured in lost millions.
          </p>
        </div>

        {/* Interactive 4-Pillar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Interactive Pillar Selectors */}
          <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
            {pillars.map((item, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-[#07101C] border-[#245FA8] shadow-xl translate-x-2'
                      : 'bg-[#07101C]/50 border-[#17263A] hover:border-[#A7B0BE]/40 text-[#A7B0BE] hover:text-[#F5F7FA]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-all ${
                      isSelected
                        ? 'bg-[#245FA8] text-white shadow-lg'
                        : 'bg-[#17263A] text-[#A7B0BE] border border-[#17263A]'
                    }`}>
                      {item.id}
                    </div>
                    <div>
                      <h4 className={`text-sm sm:text-base font-bold transition-colors ${isSelected ? 'text-[#F5F7FA]' : 'text-[#A7B0BE]'}`}>
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#A7B0BE]">{item.subtitle}</p>
                    </div>
                  </div>

                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    isSelected ? 'text-[#245FA8]' : 'opacity-0'
                  }`}>
                    <ArrowUpRight size={14} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Dynamic Glass Showcase */}
          <div className="lg:col-span-7">
            <div className="h-full bg-[#07101C] rounded-3xl p-6 sm:p-10 flex flex-col justify-between border border-[#17263A] relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#17263A] border border-[#17263A] shadow-inner">
                      {current.icon}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#245FA8] uppercase tracking-wider">PILLAR {current.id}</span>
                      <h3 className="text-xl sm:text-2xl font-black text-[#F5F7FA] font-heading">{current.title}</h3>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17263A] border border-[#17263A] text-xs font-mono text-[#245FA8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#245FA8] animate-pulse"></span>
                    CARRIER CERTIFIED
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#A7B0BE] leading-relaxed mb-8">
                  {current.desc}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
                  {current.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-3.5 rounded-2xl bg-[#030507]/70 border border-[#17263A]"
                    >
                      <div className="text-[11px] text-[#A7B0BE] uppercase tracking-wider mb-1 font-mono">
                        {spec.label}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#F5F7FA] font-mono">
                        {spec.val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Assurance Row */}
              <div className="pt-6 border-t border-[#17263A] flex flex-wrap items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-2 text-xs text-[#A7B0BE]">
                  <CheckCircle2 size={16} className="text-[#245FA8] shrink-0" />
                  <span>Backed by legally binding enterprise Service Level Agreements</span>
                </div>

                <div className="text-xs font-mono text-[#245FA8] font-semibold flex items-center gap-1">
                  <Activity size={14} />
                  <span>ZERO PACKET RESELLING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyAxtroSection;
