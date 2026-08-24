import React, { useState } from 'react';
import { PageRoute } from '../types';
import { IndiaNetworkMap } from '../components/svg/IndiaNetworkMap';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { ArrowRight, MapPin, Sparkles, Activity, Radio, Cpu, Network, CheckCircle2 } from 'lucide-react';

interface NetworkLocationsPageProps {
  navigate: (route: PageRoute) => void;
}

export function NetworkLocationsPage({ navigate }: NetworkLocationsPageProps) {
  const [selectedHub, setSelectedHub] = useState<'delhi' | 'mumbai' | 'chennai'>('delhi');

  const hubs = [
    {
      id: 'delhi' as const,
      name: 'DELHI NCR',
      tagline: 'Northern Backbone & Enterprise Gateway',
      facility: 'Yotta D1, 7th Floor Data Suite',
      network: 'Connect IX — Delhi Regional Exchange',
      connectivity: 'DDoS Scrubbing • IP Transit • IX Peering • Leased Lines',
      highlight: 'Primary Northern India colocation and low-latency transit hub with direct carrier-neutral interconnect.',
      capacity: '100 Gbps Core Ring',
      latencyLocal: '0.8 ms',
      specs: [
        { label: 'Facility Tier', val: 'Tier-IV Certified MMR' },
        { label: 'Network Fabric', val: 'Connect IX Backbone' },
        { label: 'Carrier Density', val: 'Multi-Carrier MMR Meet-Me' },
        { label: 'NOC Surveillance', val: '24×7 Active L3 Telemetry' },
      ],
    },
    {
      id: 'mumbai' as const,
      name: 'MUMBAI',
      tagline: 'West Coast Subsea & Peering Nexus',
      facility: 'Connect IX Subsea Gateway',
      network: 'Connect IX — Mumbai International Gateway',
      connectivity: 'IP Transit • IX Peering • DDoS Scrubbing • Leased Lines',
      highlight: 'High-density international subsea cable landing zone and primary cloud content exchange nexus.',
      capacity: '100 Gbps Low-Hop',
      latencyLocal: '18.4 ms (from Delhi)',
      specs: [
        { label: 'Subsea Cables', val: 'Sea-Me-We & AAE-1' },
        { label: 'Network Fabric', val: 'Connect IX Backbone' },
        { label: 'Routing Architecture', val: 'Direct Subsea & Cloud Peering' },
        { label: 'NOC Surveillance', val: '24×7 Active L3 Telemetry' },
      ],
    },
    {
      id: 'chennai' as const,
      name: 'CHENNAI',
      tagline: 'South East Transit & Interconnection Hub',
      facility: 'Connect IX Landing Suite',
      network: 'Connect IX — Chennai Peering Hub',
      connectivity: 'IX Peering • IP Transit • DDoS Protection • Leased Lines',
      highlight: 'Strategic landing corridor connecting South India, regional eyeball networks, and APAC subsea links.',
      capacity: '100 Gbps APAC Ring',
      latencyLocal: '24.2 ms (from Delhi)',
      specs: [
        { label: 'Landing Corridor', val: 'Bay of Bengal Subsea' },
        { label: 'Network Fabric', val: 'Connect IX Backbone' },
        { label: 'Cross-Connects', val: 'Multi-Carrier Optical' },
        { label: 'NOC Surveillance', val: '24×7 Active L3 Telemetry' },
      ],
    },
  ];

  return (
    <div className="w-full transition-colors relative overflow-hidden bg-[#030507]">
      {/* HERO SECTION */}
      <section id="network-hero" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider">
              <MapPin size={14} />
              INDIAN BACKBONE INFRASTRUCTURE
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F5F7FA] font-heading leading-tight">
              CONNECTED WHERE<br />
              <span className="text-[#245FA8]">THE INTERNET MOVES.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#A7B0BE] leading-relaxed max-w-2xl">
              Strategic carrier-neutral network presence across Delhi NCR, Mumbai, and Chennai. Low-hop optical backbones with 99.999% availability SLAs.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-2xl"
              >
                <span>REQUEST POP CROSS-CONNECT</span>
                <ArrowRight size={14} />
              </button>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#07101C] border border-[#17263A] text-xs font-mono text-[#245FA8]">
                <span className="w-2 h-2 rounded-full bg-[#245FA8] animate-pulse"></span>
                <span>ALL 3 REGIONAL CORES ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE TOPOLOGY SECTION */}
      <section id="interactive-topology" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
                <Activity size={13} />
                TOPOLOGY EXPLORER
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#F5F7FA] font-heading">
                SELECT A REGIONAL NETWORK HUB
              </h2>
            </div>

            {/* Quick Filter Pill Buttons */}
            <div className="flex items-center gap-2 bg-[#07101C] p-1.5 rounded-full border border-[#17263A]">
              {hubs.map((hub) => (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub.id)}
                  className={`px-4 py-2 text-xs font-bold font-heading uppercase rounded-full transition-all ${
                    selectedHub === hub.id
                      ? 'bg-[#245FA8] text-white shadow-md'
                      : 'text-[#A7B0BE] hover:text-[#F5F7FA] hover:bg-white/5'
                  }`}
                >
                  {hub.name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#07101C] rounded-3xl p-4 sm:p-8 shadow-2xl border border-[#17263A]">
            <IndiaNetworkMap selectedLocation={selectedHub} onSelectLocation={setSelectedHub} />
          </div>
        </div>
      </section>

      {/* LOCATION DETAIL BENTO CARDS */}
      <section id="location-details" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Radio size={13} />
              FACILITY & INTERCONNECT PROFILES
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#F5F7FA] font-heading">
              METROPOLITAN PRESENCE HUBS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {hubs.map((hub) => {
              const isSelected = selectedHub === hub.id;
              return (
                <div
                  key={hub.id}
                  id={`hub-card-${hub.id}`}
                  onClick={() => setSelectedHub(hub.id)}
                  className={`bento-card p-6 sm:p-8 cursor-pointer flex flex-col justify-between transition-all ${
                    isSelected
                      ? 'ring-2 ring-[#245FA8] shadow-2xl -translate-y-2'
                      : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#245FA8] uppercase tracking-widest">
                        {hub.name} HUB
                      </span>
                      <span className={`flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-[#245FA8]/20 text-[#245FA8] border border-[#245FA8]/30' : 'bg-white/5 text-[#A7B0BE]'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#245FA8] animate-pulse' : 'bg-[#A7B0BE]'}`}></span>
                        ONLINE
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-[#F5F7FA] font-heading mb-1">
                      {hub.name}
                    </h3>
                    <div className="text-xs text-[#245FA8] font-mono mb-4">
                      {hub.facility}
                    </div>

                    <p className="text-xs sm:text-sm text-[#A7B0BE] leading-relaxed mb-6">
                      {hub.highlight}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-[#17263A] text-xs font-mono">
                      <div className="flex justify-between py-1 border-b border-[#17263A]/50">
                        <span className="text-[#A7B0BE]">Network Fabric</span>
                        <span className="text-[#F5F7FA] font-bold">{hub.network}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#17263A]/50">
                        <span className="text-[#A7B0BE]">Core Capacity</span>
                        <span className="text-[#245FA8] font-bold">{hub.capacity}</span>
                      </div>
                      <div className="flex flex-col py-1">
                        <span className="text-[#A7B0BE] mb-1">Available Services</span>
                        <span className="text-[#F5F7FA] leading-relaxed font-sans">{hub.connectivity}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#17263A]">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/contact');
                      }}
                      className="w-full py-3 px-4 text-center text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full transition-all flex items-center justify-center gap-2"
                    >
                      <span>CONNECT IN {hub.name}</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCtaSection
        navigate={navigate}
        title="NEED CONNECTIVITY AT YOUR LOCATION?"
        subtitle="Our network deployment team is ready to assist with cross-connects, port provisioning, and dedicated links."
        badgeText="CUSTOM DEPLOYMENT READY"
      />
    </div>
  );
}

export default NetworkLocationsPage;
