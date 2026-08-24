import React, { useState } from 'react';
import { Server, Cloud, Cpu, ShieldAlert, Building2, Terminal, Gamepad2, Radio, Network, ArrowRight, Check } from 'lucide-react';

export function WhoWeServeSection() {
  const [filter, setFilter] = useState<'all' | 'infrastructure' | 'cloud' | 'enterprise'>('all');

  const sectors = [
    {
      category: 'infrastructure',
      title: 'Internet Service Providers (ISPs)',
      icon: <Network className="w-5 h-5 text-[#245FA8]" />,
      desc: 'High-volume wholesale IP transit, deterministic BGP multi-homing, and Connect IX peering to optimize regional subscriber throughput.',
      throughput: '10G - 400G Ports',
      latency: 'Sub-3ms Local IX',
      badge: 'Wholesale Transport',
    },
    {
      category: 'infrastructure',
      title: 'Carrier-Neutral Data Centers',
      icon: <Server className="w-5 h-5 text-[#F5F7FA]" />,
      desc: 'Diverse dark fiber conduits, redundant MMR meet-me-room cross-connects, and interconnect corridors across Delhi, Mumbai & Chennai.',
      throughput: 'Dark Fiber & Wavelengths',
      latency: '1:1 Uncontended',
      badge: 'Colocation Interconnect',
    },
    {
      category: 'cloud',
      title: 'Cloud & Hyperscale Platforms',
      icon: <Cloud className="w-5 h-5 text-[#F5F7FA]" />,
      desc: 'Direct backbone links for distributed storage synchronization, database replication, and low-hop API ingress with zero route flap.',
      throughput: 'Multi-Hundred Gbps',
      latency: '< 15ms Inter-Region',
      badge: 'Hyperscale Peering',
    },
    {
      category: 'cloud',
      title: 'Hosting & Bare Metal Providers',
      icon: <Terminal className="w-5 h-5 text-[#245FA8]" />,
      desc: 'Burst-tolerant unmetered bandwidth coupled with always-on hardware-level DDoS scrubbing at the edge to safeguard customer nodes.',
      throughput: '10G - 100G Unmetered',
      latency: '100% Packet Integrity',
      badge: 'Edge Scrubbing',
    },
    {
      category: 'enterprise',
      title: 'Global Fintech & Enterprises',
      icon: <Building2 className="w-5 h-5 text-[#245FA8]" />,
      desc: 'Private point-to-point leased lines with mathematically deterministic latency for financial transaction processing and ERP clusters.',
      throughput: 'Dedicated Symmetrical',
      latency: 'Strict Zero-Jitter SLA',
      badge: 'Mission-Critical',
    },
    {
      category: 'enterprise',
      title: 'SaaS & Real-Time APIs',
      icon: <Cpu className="w-5 h-5 text-[#245FA8]" />,
      desc: 'Ultra-resilient network routing ensuring continuous uptime for payment webhooks, live analytics streams, and real-time collaborative apps.',
      throughput: '99.999% SLA Uptime',
      latency: 'Predictable Delivery',
      badge: 'High Availability',
    },
    {
      category: 'enterprise',
      title: 'Gaming & Interactive Media',
      icon: <Gamepad2 className="w-5 h-5 text-[#F5F7FA]" />,
      desc: 'Ultra-low jitter packet routing and anti-DDoS mitigation designed specifically for multiplayer UDP match lobbies and live voice comms.',
      throughput: 'Sub-Millisecond Jitter',
      latency: '< 10ms Metro Ping',
      badge: 'Low-Jitter UDP',
    },
    {
      category: 'cloud',
      title: 'Content Delivery Networks (CDNs)',
      icon: <Radio className="w-5 h-5 text-[#A7B0BE]" />,
      desc: 'High-density IX port access and Indian metropolitan peering to stream 4K/8K video media without buffering or intermediate transit choke points.',
      throughput: 'Ultra-Dense IX Ports',
      latency: 'Direct Eyeball Peering',
      badge: 'High-Density Media',
    },
  ];

  const filteredSectors = filter === 'all' ? sectors : sectors.filter((s) => s.category === filter);

  return (
    <section id="who-we-serve-section" className="py-24 sm:py-32 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              ECOSYSTEM PARTICIPANTS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#F5F7FA] font-heading leading-tight">
              WHO RUNS ON<br />
              <span className="text-[#245FA8]">AXTRO NETWORKS.</span>
            </h2>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#07101C] p-1.5 rounded-2xl border border-[#17263A]">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                filter === 'all'
                  ? 'bg-[#245FA8] text-white shadow-md'
                  : 'text-[#A7B0BE] hover:text-[#F5F7FA] hover:bg-[#17263A]'
              }`}
            >
              All Workloads
            </button>
            <button
              onClick={() => setFilter('infrastructure')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                filter === 'infrastructure'
                  ? 'bg-[#245FA8] text-white shadow-md'
                  : 'text-[#A7B0BE] hover:text-[#F5F7FA] hover:bg-[#17263A]'
              }`}
            >
              Infrastructure & ISPs
            </button>
            <button
              onClick={() => setFilter('cloud')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                filter === 'cloud'
                  ? 'bg-[#245FA8] text-white shadow-md'
                  : 'text-[#A7B0BE] hover:text-[#F5F7FA] hover:bg-[#17263A]'
              }`}
            >
              Cloud & CDN
            </button>
            <button
              onClick={() => setFilter('enterprise')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                filter === 'enterprise'
                  ? 'bg-[#245FA8] text-white shadow-md'
                  : 'text-[#A7B0BE] hover:text-[#F5F7FA] hover:bg-[#17263A]'
              }`}
            >
              Enterprise & Gaming
            </button>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSectors.map((item) => (
            <div
              key={item.title}
              className="bento-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#17263A] border border-[#17263A] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-[#17263A] text-[#245FA8] border border-[#17263A]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#F5F7FA] font-heading mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A7B0BE] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#17263A] space-y-1.5 font-mono text-[11px]">
                <div className="flex items-center justify-between text-[#A7B0BE]">
                  <span>Throughput</span>
                  <span className="text-[#F5F7FA] font-bold">{item.throughput}</span>
                </div>
                <div className="flex items-center justify-between text-[#A7B0BE]">
                  <span>Latency Target</span>
                  <span className="text-[#245FA8] font-bold">{item.latency}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoWeServeSection;
