import React, { useState } from 'react';
import { PageRoute } from '../types';
import { HomeNetworkTopology } from '../components/svg/HomeNetworkTopology';
import { DdosIcon, TransitIcon, IxIcon, LeasedLineIcon } from '../components/svg/ServiceIcons';
import { WhyAxtroSection } from '../components/WhyAxtroSection';
import { WhoWeServeSection } from '../components/WhoWeServeSection';
import { FinalCtaSection } from '../components/FinalCtaSection';
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Zap,
  Radio,
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  Globe,
  Layers,
  Link as LinkIcon,
  CheckCircle2,
  Cpu,
  Server,
  Play,
} from 'lucide-react';

interface HomePageProps {
  navigate: (route: PageRoute) => void;
}

export function HomePage({ navigate }: HomePageProps) {
  const [selectedIxSpeed, setSelectedIxSpeed] = useState<'10G' | '100G' | '400G'>('100G');
  const [ddosSimActive, setDdosSimActive] = useState(false);
  const [simulatedAttack, setSimulatedAttack] = useState<number>(3.8);

  const triggerDdosSim = () => {
    setDdosSimActive(true);
    setSimulatedAttack(Number((Math.random() * 4 + 2.5).toFixed(1)));
    setTimeout(() => {
      setDdosSimActive(false);
    }, 3000);
  };

  const metrics = [
    { label: 'MITIGATION CAPACITY', value: '10+ Tbps', sub: 'Edge Hardware Scrubbing', color: 'text-[#245FA8]' },
    { label: 'METRO POPS', value: '3 Major Hubs', sub: 'Delhi • Mumbai • Chennai', color: 'text-[#F5F7FA]' },
    { label: 'CORE BACKBONE', value: '100 Gbps', sub: 'Carrier-Grade Optical Mesh', color: 'text-[#F5F7FA]' },
    { label: 'SLA GUARANTEE', value: '99.999%', sub: 'Deterministic Routing', color: 'text-[#245FA8]' },
  ];

  const hubs = [
    {
      city: 'DELHI NCR',
      role: 'Primary Core Hyper-Hub',
      facility: 'Yotta D1 • 7th Floor Data Suite',
      ping: '0.8 ms local',
      status: 'OPTIMAL',
    },
    {
      city: 'MUMBAI',
      role: 'West Coast Gateway',
      facility: 'Connect IX • Subsea Landing Zone',
      ping: '18.4 ms RTT',
      status: 'ACTIVE',
    },
    {
      city: 'CHENNAI',
      role: 'South East Corridor',
      facility: 'Connect IX • Bay of Bengal Landing',
      ping: '24.2 ms RTT',
      status: 'ACTIVE',
    },
    {
      city: 'GLOBAL NOC',
      role: 'Enterprise Operations',
      facility: '24×7 Active L3 Surveillance',
      ping: '< 5m response',
      status: 'LIVE',
    },
  ];

  return (
    <div className="w-full transition-colors relative overflow-hidden">
      {/* 1. HERO SECTION */}
      <section id="home-hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-dot-matrix">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-6 space-y-7">
              {/* Floating Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07101C] border border-[#17263A] backdrop-blur-md">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#245FA8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#245FA8]"></span>
                </span>
                <span className="text-xs font-mono font-bold tracking-widest text-[#F5F7FA]">
                  AXTRO NETWORKS • BGP ANYCAST ACTIVE
                </span>
              </div>

              {/* Display Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-[#F5F7FA] font-heading leading-[1.04]">
                THE AXIS OF<br />
                <span className="text-[#245FA8]">THE INTERNET.</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-[#A7B0BE] leading-relaxed max-w-xl">
                Carrier-grade optical connectivity, multi-Tbps AI edge DDoS protection, and deterministic BGP transit engineered for mission-critical enterprise workloads.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  id="hero-get-connected-btn"
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-2xl"
                >
                  <span>GET CONNECTED</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  id="hero-explore-network-btn"
                  onClick={() => navigate('/network')}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#F5F7FA] btn-glass rounded-full"
                >
                  <Activity size={15} className="text-[#245FA8]" />
                  <span>EXPLORE TOPOLOGY</span>
                </button>
              </div>

              {/* Telemetry Status Bar */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#A7B0BE]">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07101C] border border-[#17263A]">
                  <span className="w-2 h-2 rounded-full bg-[#245FA8] animate-pulse"></span>
                  <span className="font-mono text-[#F5F7FA] uppercase tracking-wider font-semibold text-[11px]">
                    3 TIER-IV METRO POPS SYNCHRONIZED
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07101C] border border-[#17263A]">
                  <Zap size={13} className="text-[#245FA8]" />
                  <span className="font-mono text-[#F5F7FA] uppercase tracking-wider font-semibold text-[11px]">
                    ZERO-THROTTLE 1:1 TRANSIT
                  </span>
                </div>
              </div>
            </div>

            {/* Right Interactive Network Topology */}
            <div className="lg:col-span-6 flex justify-center">
              <HomeNetworkTopology onSelectNode={() => navigate('/network')} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. METRICS HUD STRIP */}
      <section id="metrics-hud-strip" className="py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="glass-panel p-5 sm:p-6 rounded-2xl flex flex-col justify-between border border-[#17263A] hover:border-[#245FA8] transition-all duration-300"
              >
                <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#A7B0BE] mb-2">
                  {m.label}
                </div>
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-black font-heading ${m.color} mb-1`}>
                  {m.value}
                </div>
                <div className="text-xs text-[#A7B0BE]">
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. METROPOLITAN HUBS CARDS */}
      <section id="metro-hubs-strip" className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hubs.map((hub) => (
              <div
                key={hub.city}
                onClick={() => navigate('/network')}
                className="bento-card p-5 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#245FA8]">
                      {hub.role}
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#245FA8] bg-[#164B8C]/20 px-2 py-0.5 rounded-full border border-[#17263A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#245FA8] animate-pulse"></span>
                      {hub.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-black font-heading text-[#F5F7FA] group-hover:text-[#245FA8] transition-colors flex items-center justify-between">
                    {hub.city}
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#245FA8]" />
                  </h3>

                  <p className="text-xs text-[#A7B0BE] mt-1.5">
                    {hub.facility}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#17263A] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#A7B0BE]">Latency:</span>
                  <span className="text-[#F5F7FA] font-bold">{hub.ping}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ASYMMETRIC BENTO GRID SERVICES SHOWCASE */}
      <section id="services-bento-section" className="py-24 sm:py-32 relative overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={13} />
              INFRASTRUCTURE CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#F5F7FA] font-heading leading-tight">
              CONNECTIVITY<br />
              <span className="text-[#245FA8]">WITHOUT COMPROMISE.</span>
            </h2>
            <p className="mt-4 text-base text-[#A7B0BE]">
              Four core architectural pillars engineered for mission-critical digital infrastructure.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Bento Card 1 (Large 7-Col Spotlight): DDoS Protection with Interactive Threat Scrubber */}
            <div className="lg:col-span-7 bento-card p-6 sm:p-10 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#17263A] border border-[#17263A] flex items-center justify-center text-[#245FA8] shadow-lg">
                    <ShieldAlert size={24} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#17263A] text-[#245FA8] border border-[#17263A]">
                    EDGE SCRUBBING
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#F5F7FA] font-heading mb-3">
                  AI Edge DDoS Protection
                </h3>

                <p className="text-sm sm:text-base text-[#A7B0BE] leading-relaxed mb-6 max-w-xl">
                  Multi-Tbps distributed scrubbing fabric that autonomously analyzes, filters, and neutralizes volumetric L3/L4/L7 floods in under 1 second without latency degradation.
                </p>

                {/* Interactive Simulation Console */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#030507]/80 border border-[#17263A] mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${ddosSimActive ? 'bg-[#245FA8] animate-ping' : 'bg-[#245FA8]'}`}></span>
                      <span className="text-xs font-mono font-bold text-[#F5F7FA]">
                        {ddosSimActive ? 'MITIGATING SYN/UDP FLOOD...' : 'EDGE FILTRATION: STANDBY'}
                      </span>
                    </div>

                    <button
                      onClick={triggerDdosSim}
                      className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#17263A] hover:bg-[#245FA8] hover:text-white text-[#245FA8] border border-[#17263A] transition-all flex items-center gap-1.5"
                    >
                      <Play size={10} />
                      TEST 4.2 TBPS ATTACK SIMULATION
                    </button>
                  </div>

                  {/* Progress / Status Bar */}
                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="flex justify-between text-[#A7B0BE]">
                      <span>Mitigation Rate:</span>
                      <span className="text-[#245FA8] font-bold">{ddosSimActive ? `${simulatedAttack} Tbps (100% Dropped)` : '0.000 Gbps'}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#17263A] overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          ddosSimActive ? 'w-full bg-[#245FA8]' : 'w-2 bg-[#245FA8]'
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#17263A] flex items-center justify-between">
                <button
                  onClick={() => navigate('/services/ddos-protection')}
                  className="text-xs font-bold uppercase tracking-wider font-heading text-[#245FA8] hover:text-[#F5F7FA] transition-colors flex items-center gap-2"
                >
                  <span>EXPLORE DDOS MITIGATION ARCHITECTURE</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Bento Card 2 (5-Col): IP Transit */}
            <div className="lg:col-span-5 bento-card p-6 sm:p-8 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#17263A] border border-[#17263A] flex items-center justify-center text-[#F5F7FA] shadow-lg">
                    <Globe size={24} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#17263A] text-[#A7B0BE] border border-[#17263A]">
                    BGP TRANSIT
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#F5F7FA] font-heading mb-3">
                  Carrier-Grade IP Transit
                </h3>

                <p className="text-sm text-[#A7B0BE] leading-relaxed mb-6">
                  Deterministic routing with direct Tier-1 upstreams and BGP community management. Bypass congested intermediate hops with lowest-AS-path preference.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-[#030507]/80 border border-[#17263A]">
                    <div className="text-[10px] text-[#A7B0BE] uppercase">Routing Type</div>
                    <div className="text-[#F5F7FA] font-bold mt-0.5">BGP Anycast</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#030507]/80 border border-[#17263A]">
                    <div className="text-[10px] text-[#A7B0BE] uppercase">Packet Loss</div>
                    <div className="text-[#245FA8] font-bold mt-0.5">&lt; 0.001%</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#17263A] flex items-center justify-between">
                <button
                  onClick={() => navigate('/services/ip-transit')}
                  className="text-xs font-bold uppercase tracking-wider font-heading text-[#F5F7FA] hover:text-[#245FA8] transition-colors flex items-center gap-2"
                >
                  <span>VIEW TRANSIT SPECS</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Bento Card 3 (5-Col): IX Connectivity */}
            <div className="lg:col-span-5 bento-card p-6 sm:p-8 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#17263A] border border-[#17263A] flex items-center justify-center text-[#F5F7FA] shadow-lg">
                    <Layers size={24} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#17263A] text-[#A7B0BE] border border-[#17263A]">
                    DIRECT PEERING
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#F5F7FA] font-heading mb-3">
                  Connect IX Interconnection
                </h3>

                <p className="text-sm text-[#A7B0BE] leading-relaxed mb-6">
                  Direct layer-2 switching into major Indian and APAC Internet Exchanges. Interconnect with hundreds of content networks and hyperscalers on a single port.
                </p>

                {/* Port Speed Selector Switch */}
                <div className="p-3.5 rounded-2xl bg-[#030507]/80 border border-[#17263A] mb-6">
                  <div className="text-[11px] font-mono text-[#A7B0BE] uppercase mb-2">Available Port Capacities</div>
                  <div className="flex items-center gap-2">
                    {(['10G', '100G', '400G'] as const).map((spd) => (
                      <button
                        key={spd}
                        onClick={() => setSelectedIxSpeed(spd)}
                        className={`flex-1 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                          selectedIxSpeed === spd
                            ? 'bg-[#245FA8] text-white shadow-md'
                            : 'bg-[#17263A] text-[#A7B0BE] hover:text-[#F5F7FA]'
                        }`}
                      >
                        {spd}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#17263A] flex items-center justify-between">
                <button
                  onClick={() => navigate('/services/ix-connectivity')}
                  className="text-xs font-bold uppercase tracking-wider font-heading text-[#F5F7FA] hover:text-[#245FA8] transition-colors flex items-center gap-2"
                >
                  <span>CONNECT TO IX FABRIC</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Bento Card 4 (7-Col): Point-to-Point Leased Lines */}
            <div className="lg:col-span-7 bento-card p-6 sm:p-10 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#17263A] border border-[#17263A] flex items-center justify-center text-[#245FA8] shadow-lg">
                    <LinkIcon size={24} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#17263A] text-[#245FA8] border border-[#17263A]">
                    DARK FIBER
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#F5F7FA] font-heading mb-3">
                  Dedicated Private Leased Lines
                </h3>

                <p className="text-sm sm:text-base text-[#A7B0BE] leading-relaxed mb-6 max-w-xl">
                  Uncontended, point-to-point dark optical wavelengths linking Delhi NCR, Mumbai, and Chennai. Guaranteed zero packet jitter, zero public internet exposure, and dedicated encryption.
                </p>

                {/* Metro Corridors Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#030507]/80 border border-[#17263A]">
                    <div className="text-[10px] font-mono text-[#A7B0BE] uppercase">Delhi ↔ Mumbai</div>
                    <div className="text-sm font-bold text-[#F5F7FA] font-mono mt-1">18.4 ms RTT</div>
                    <div className="text-[10px] text-[#245FA8] font-mono mt-0.5">Dual-Path Fiber</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#030507]/80 border border-[#17263A]">
                    <div className="text-[10px] font-mono text-[#A7B0BE] uppercase">Mumbai ↔ Chennai</div>
                    <div className="text-sm font-bold text-[#F5F7FA] font-mono mt-1">14.1 ms RTT</div>
                    <div className="text-[10px] text-[#245FA8] font-mono mt-0.5">Subsea Diverse</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#030507]/80 border border-[#17263A]">
                    <div className="text-[10px] font-mono text-[#A7B0BE] uppercase">Delhi ↔ Chennai</div>
                    <div className="text-sm font-bold text-[#F5F7FA] font-mono mt-1">24.2 ms RTT</div>
                    <div className="text-[10px] text-[#245FA8] font-mono mt-0.5">Direct Corridor</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#17263A] flex items-center justify-between">
                <button
                  onClick={() => navigate('/services/leased-lines')}
                  className="text-xs font-bold uppercase tracking-wider font-heading text-[#245FA8] hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>PROVISION POINT-TO-POINT LINE</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ARCHITECTURAL PILLARS */}
      <WhyAxtroSection />

      {/* 6. WHO WE SERVE ECOSYSTEM */}
      <WhoWeServeSection />

      {/* 7. FINAL COMMAND CENTER CTA */}
      <FinalCtaSection navigate={navigate} />
    </div>
  );
}

export default HomePage;
