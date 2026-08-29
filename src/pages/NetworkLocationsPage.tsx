import React, { useState } from 'react';
import { PageRoute } from '../types';
import { IndiaNetworkMap } from '../components/svg/IndiaNetworkMap';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { ArrowRight, Activity } from '../components/animated-icons';

interface NetworkLocationsPageProps {
  navigate: (route: PageRoute) => void;
}

export function NetworkLocationsPage({ navigate }: NetworkLocationsPageProps) {
  const [selectedLocation, setSelectedLocation] = useState<'delhi' | 'mumbai' | 'chennai'>('delhi');

  const locations = {
    delhi: {
      name: 'Delhi NCR Hyper-Hub',
      tagline: 'Northern Transit & DDoS Mitigation Center',
      facility: 'Yotta D1 • 7th Floor Data Suite, Knowledge Park V, Greater Noida',
      capacity: '100 Gbps Core Optical Mesh',
      crossConnects: 'Direct MMR Fiber Conduits & Inter-Suite Cross-Connects',
      power: '2N Redundant UPS + Dedicated DG Sets (Tier-IV Standard)',
      bgp: 'Route Reflector 01 • Anycast Edge Ingress',
      peering: 'NIXI Delhi, Direct Tier-1 Transits, Cloud On-Ramps',
    },
    mumbai: {
      name: 'Mumbai Gateway',
      tagline: 'West Coast Subsea & Peering Nexus',
      facility: 'Connect IX • Subsea Landing Zone, Prabhadevi / Chandivali Hub',
      capacity: '100 Gbps Subsea Cross-Landing Mesh',
      crossConnects: 'Direct Subsea MMR Cross-Connects (SEA-ME-WE-5 & AAE-1)',
      power: 'Dual Diverse Substation Feeds (Tier-IV)',
      bgp: 'West Gateway BGP Engine • APAC Transit Hub',
      peering: 'Connect IX Mumbai, Extreme IX, Direct Hyperscale CDNs',
    },
    chennai: {
      name: 'Chennai Corridor',
      tagline: 'South East Bay of Bengal APAC Gateway',
      facility: 'Connect IX • Bay of Bengal Landing Facility, Ambattur Industrial Estate',
      capacity: '100 Gbps APAC Express Route',
      crossConnects: 'Direct Bay of Bengal Gateway (BBG) Optical Cross-Connects',
      power: 'N+N Redundant Power Architecture',
      bgp: 'South Gateway Edge Filter • Singapore Express Transit',
      peering: 'Connect IX Chennai, APAC Cloud Fabrics, Regional Eyeball Telcos',
    },
  };

  const current = locations[selectedLocation];

  return (
    <div className="w-full transition-colors relative overflow-hidden bg-[#0E0B1A]">
      {/* HERO SECTION */}
      <section id="network-hero" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17132A] border border-[#2C2645] text-[#DB2777] text-xs font-mono font-semibold uppercase tracking-wider">
              <Activity size={14} />
              METROPOLITAN CORE HUBS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F5F3FA] font-heading leading-tight">
              3 TIER-IV METRO POPS.<br />
              <span className="text-[#DB2777]">SYNCHRONIZED MESH.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#9C94B8] leading-relaxed max-w-2xl">
              Strategic points of presence in India's key Internet traffic hubs: Delhi NCR, Mumbai, and Chennai. Interconnected via carrier-grade optical wavelengths.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-2xl cursor-pointer"
              >
                <span>REQUEST POP CROSS-CONNECT</span>
                <ArrowRight size={14} />
              </button>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#17132A] border border-[#2C2645] text-xs font-mono text-[#DB2777]">
                <span className="w-2 h-2 rounded-full bg-[#DB2777] animate-pulse"></span>
                <span>ALL METRO POPS FULLY OPERATIONAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE NETWORK MAP & POP DETAIL */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Location Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
            {(['delhi', 'mumbai', 'chennai'] as const).map((loc) => (
              <button
                key={loc}
                onClick={() => setSelectedLocation(loc)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-xs font-bold font-heading uppercase tracking-wider transition-all cursor-pointer ${
                  selectedLocation === loc
                    ? 'bg-[#DB2777] text-white shadow-xl scale-105'
                    : 'bg-[#17132A] text-[#9C94B8] hover:text-[#F5F3FA] border border-[#2C2645]'
                }`}
              >
                {loc === 'delhi' ? 'Delhi NCR (Yotta D1)' : loc === 'mumbai' ? 'Mumbai Gateway (Connect IX)' : 'Chennai Corridor (Connect IX)'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Map Canvas */}
            <div className="lg:col-span-7 bg-[#17132A] border border-[#2C2645] rounded-3xl p-4 sm:p-6 shadow-2xl">
              <IndiaNetworkMap
                selectedLocation={selectedLocation}
                onSelectLocation={setSelectedLocation}
              />
            </div>

            {/* Selected Location Details Panel */}
            <div className="lg:col-span-5 bg-[#17132A] border border-[#2C2645] rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="border-b border-[#2C2645] pb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1938] border border-[#2C2645] text-[#DB2777] text-xs font-mono mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#DB2777] animate-ping"></span>
                  METRO POP TELEMETRY
                </div>
                <h3 className="text-2xl font-black font-heading text-[#F5F3FA]">
                  {current.name}
                </h3>
                <p className="text-xs text-[#9C94B8] mt-1">
                  {current.tagline}
                </p>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="p-4 rounded-2xl bg-[#0E0B1A] border border-[#2C2645]">
                  <div className="text-[10px] text-[#9C94B8] uppercase">FACILITY ADDRESS</div>
                  <div className="text-[#F5F3FA] font-bold mt-1 font-sans text-sm">{current.facility}</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0E0B1A] border border-[#2C2645]">
                  <div className="text-[10px] text-[#9C94B8] uppercase">BACKBONE CAPACITY</div>
                  <div className="text-[#DB2777] font-bold mt-1">{current.capacity}</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0E0B1A] border border-[#2C2645]">
                  <div className="text-[10px] text-[#9C94B8] uppercase">CROSS-CONNECTS</div>
                  <div className="text-[#F5F3FA] mt-1">{current.crossConnects}</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0E0B1A] border border-[#2C2645]">
                  <div className="text-[10px] text-[#9C94B8] uppercase">PEERING ECOSYSTEM</div>
                  <div className="text-[#F5F3FA] mt-1">{current.peering}</div>
                </div>
              </div>

              <button
                onClick={() => navigate('/contact')}
                className="w-full py-4 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>REQUEST MMR CROSS-CONNECT</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection
        navigate={navigate}
        title="DEPLOY CROSS-CONNECTS ACROSS OUR METRO POPS."
        subtitle="Our datacenter operations team can execute MMR cross-connects and optical patching in under 48 hours."
        badgeText="CARRIER POP PROVISIONING"
      />
    </div>
  );
}

export default NetworkLocationsPage;
