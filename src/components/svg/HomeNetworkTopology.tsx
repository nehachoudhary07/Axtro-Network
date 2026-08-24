import React, { useState } from 'react';
import { Shield, Zap, Activity, Radio, Cpu, Network, CheckCircle2 } from 'lucide-react';

interface HomeNetworkTopologyProps {
  interactive?: boolean;
  onSelectNode?: (nodeId: string) => void;
}

export function HomeNetworkTopology({ interactive = true, onSelectNode }: HomeNetworkTopologyProps) {
  const [activeNode, setActiveNode] = useState<string>('delhi');
  const [liveMetric, setLiveMetric] = useState<'latency' | 'bandwidth' | 'status'>('latency');

  const nodes = {
    delhi: {
      name: 'Delhi NCR Hyper-Hub',
      facility: 'Yotta D1 • 7th Floor Data Suite',
      capacity: '100 Gbps Core Trunk',
      status: 'OPTIMAL • 0.001% Jitter',
      bgp: 'AS-AXTRO • Route Reflector 01',
      latency: { mumbai: '18.4 ms', chennai: '24.2 ms' },
      hardware: 'Arista 7280R3 Modular Fabric',
    },
    mumbai: {
      name: 'Mumbai West Gateway',
      facility: 'Connect IX • Subsea Landing Zone',
      capacity: '100 Gbps Low-Hop Transit',
      status: 'ACTIVE • Redundant Carrier Ring',
      bgp: 'Direct Sea-Me-We & AAE-1 Cross-Connect',
      latency: { delhi: '18.4 ms', chennai: '14.1 ms' },
      hardware: 'Juniper MX480 Edge Edge Routers',
    },
    chennai: {
      name: 'Chennai East Corridor',
      facility: 'Connect IX • Bay of Bengal Landing',
      capacity: '100 Gbps IX Peering Fabric',
      status: 'ACTIVE • Anycast Edge scrubbing',
      bgp: 'Direct APAC & Singapore Gateway',
      latency: { delhi: '24.2 ms', mumbai: '14.1 ms' },
      hardware: 'Cisco 8000 Series Backbone',
    },
  };

  const handleNodeClick = (nodeId: string) => {
    setActiveNode(nodeId);
    if (onSelectNode) onSelectNode(nodeId);
  };

  const currentNodeData = nodes[activeNode as keyof typeof nodes] || nodes.delhi;

  return (
    <div className="w-full relative flex flex-col items-center justify-center select-none space-y-4">
      {/* Interactive HUD Switcher */}
      <div className="w-full flex flex-wrap items-center justify-between gap-2 px-2">
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#07101C] border border-[#17263A] backdrop-blur-md">
          {(['delhi', 'mumbai', 'chennai'] as const).map((nodeKey) => (
            <button
              key={nodeKey}
              onClick={() => handleNodeClick(nodeKey)}
              className={`px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeNode === nodeKey
                  ? 'bg-[#245FA8] text-white shadow-md'
                  : 'text-[#A7B0BE] hover:text-[#F5F7FA] hover:bg-[#17263A]'
              }`}
            >
              {nodeKey.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-[#245FA8] bg-[#164B8C]/20 px-3 py-1 rounded-full border border-[#17263A]">
          <span className="w-2 h-2 rounded-full bg-[#245FA8] animate-ping"></span>
          <span>BGP ANYCAST SYNCHRONIZED</span>
        </div>
      </div>

      {/* Cybernetic SVG Canvas */}
      <div className="w-full relative rounded-2xl overflow-hidden bg-[#07101C] border border-[#17263A] p-3 sm:p-6 shadow-2xl">
        <svg
          viewBox="0 0 800 480"
          className="w-full h-auto max-w-4xl overflow-visible relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Grid Pattern */}
            <pattern id="sleekGrid" width="36" height="36" patternUnits="userSpaceOnUse">
              <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(23,38,58,0.5)" strokeWidth="0.8" />
              <circle cx="0" cy="0" r="0.8" fill="rgba(36,95,168,0.4)" />
            </pattern>

            {/* Glowing Accent Line */}
            <linearGradient id="neonBlueLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#245FA8" />
              <stop offset="100%" stopColor="#245FA8" />
            </linearGradient>

            {/* Filter Glow */}
            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Grid Background */}
          <rect x="10" y="10" width="780" height="460" fill="url(#sleekGrid)" rx="16" />

          {/* Core Concentric Ring Pulses */}
          <circle cx="400" cy="240" r="180" stroke="rgba(245,247,250,0.05)" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="400" cy="240" r="120" stroke="rgba(36,95,168,0.2)" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx="400" cy="240" r="60" stroke="rgba(245,247,250,0.08)" strokeWidth="1" />

          {/* Dynamic Optical Trunks */}
          {/* Delhi (400, 90) <-> Mumbai (200, 310) */}
          <path
            d="M400 90 L200 310"
            stroke="rgba(36,95,168,0.3)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M400 90 L200 310"
            stroke="#245FA8"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-flow-dash"
          />

          {/* Mumbai (200, 310) <-> Chennai (580, 370) */}
          <path
            d="M200 310 L580 370"
            stroke="rgba(245,247,250,0.2)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M200 310 L580 370"
            stroke="#245FA8"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-flow-dash-fast"
          />

          {/* Chennai (580, 370) <-> Delhi (400, 90) */}
          <path
            d="M580 370 L400 90"
            stroke="rgba(245,247,250,0.2)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M580 370 L400 90"
            stroke="#245FA8"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-flow-dash"
          />

          {/* Mesh Satellite Links */}
          <path d="M400 90 Q 280 210 580 370" stroke="rgba(245,247,250,0.08)" strokeWidth="1" strokeDasharray="4 8" />
          <path d="M200 310 Q 420 220 400 90" stroke="rgba(245,247,250,0.08)" strokeWidth="1" strokeDasharray="4 8" />

          {/* Latency Badges along the lines */}
          {/* Delhi-Mumbai Latency */}
          <g transform="translate(285, 190)">
            <rect x="-35" y="-12" width="70" height="24" rx="12" fill="#030507" stroke="#17263A" strokeWidth="1" />
            <text x="0" y="4" fill="#245FA8" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">18.4 ms</text>
          </g>

          {/* Mumbai-Chennai Latency */}
          <g transform="translate(390, 350)">
            <rect x="-35" y="-12" width="70" height="24" rx="12" fill="#030507" stroke="#17263A" strokeWidth="1" />
            <text x="0" y="4" fill="#F5F7FA" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">14.1 ms</text>
          </g>

          {/* Chennai-Delhi Latency */}
          <g transform="translate(500, 220)">
            <rect x="-35" y="-12" width="70" height="24" rx="12" fill="#030507" stroke="#17263A" strokeWidth="1" />
            <text x="0" y="4" fill="#F5F7FA" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">24.2 ms</text>
          </g>

          {/* CENTRAL CORE HUB */}
          <g transform="translate(400, 240)">
            <circle cx="0" cy="0" r="28" fill="#07101C" stroke="#245FA8" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="14" fill="#17263A" />
            <circle cx="0" cy="0" r="6" fill="#245FA8" />
            <text x="0" y="42" fill="#F5F7FA" fontSize="11" fontFamily="system-ui" textAnchor="middle" fontWeight="bold" letterSpacing="1">AXTRO HYPER-CORE</text>
            <text x="0" y="56" fill="#A7B0BE" fontSize="9" fontFamily="monospace" textAnchor="middle">100G ANYCAST MESH</text>
          </g>

          {/* NODE 1: DELHI */}
          <g
            transform="translate(400, 90)"
            className="cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() => handleNodeClick('delhi')}
          >
            <circle cx="0" cy="0" r="32" fill="rgba(36,95,168,0.15)" />
            <circle cx="0" cy="0" r="22" fill={activeNode === 'delhi' ? '#245FA8' : '#07101C'} stroke={activeNode === 'delhi' ? '#F5F7FA' : '#245FA8'} strokeWidth="2" />
            <circle cx="0" cy="0" r="8" fill={activeNode === 'delhi' ? '#F5F7FA' : '#245FA8'} />
            {/* Floating Glass Tag */}
            <g transform="translate(36, -20)">
              <rect x="0" y="0" width="140" height="42" rx="10" fill="#030507" stroke={activeNode === 'delhi' ? '#245FA8' : '#17263A'} strokeWidth="1.5" />
              <text x="12" y="18" fill="#F5F7FA" fontSize="12" fontWeight="bold" fontFamily="system-ui">DELHI NCR</text>
              <text x="12" y="32" fill="#A7B0BE" fontSize="9" fontFamily="system-ui">Yotta D1 • 7th Floor</text>
            </g>
          </g>

          {/* NODE 2: MUMBAI */}
          <g
            transform="translate(200, 310)"
            className="cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() => handleNodeClick('mumbai')}
          >
            <circle cx="0" cy="0" r="32" fill="rgba(36,95,168,0.15)" />
            <circle cx="0" cy="0" r="22" fill={activeNode === 'mumbai' ? '#245FA8' : '#07101C'} stroke={activeNode === 'mumbai' ? '#F5F7FA' : '#17263A'} strokeWidth="2" />
            <circle cx="0" cy="0" r="8" fill={activeNode === 'mumbai' ? '#F5F7FA' : '#245FA8'} />

            {/* Floating Glass Tag */}
            <g transform="translate(-154, -20)">
              <rect x="0" y="0" width="144" height="42" rx="10" fill="#030507" stroke={activeNode === 'mumbai' ? '#245FA8' : '#17263A'} strokeWidth="1.5" />
              <text x="12" y="18" fill="#F5F7FA" fontSize="12" fontWeight="bold" fontFamily="system-ui">MUMBAI GATEWAY</text>
              <text x="12" y="32" fill="#A7B0BE" fontSize="9" fontFamily="system-ui">Connect IX • Subsea Landing</text>
            </g>
          </g>

          {/* NODE 3: CHENNAI */}
          <g
            transform="translate(580, 370)"
            className="cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() => handleNodeClick('chennai')}
          >
            <circle cx="0" cy="0" r="32" fill="rgba(36,95,168,0.15)" />
            <circle cx="0" cy="0" r="22" fill={activeNode === 'chennai' ? '#245FA8' : '#07101C'} stroke={activeNode === 'chennai' ? '#F5F7FA' : '#17263A'} strokeWidth="2" />
            <circle cx="0" cy="0" r="8" fill={activeNode === 'chennai' ? '#F5F7FA' : '#245FA8'} />

            {/* Floating Glass Tag */}
            <g transform="translate(36, -20)">
              <rect x="0" y="0" width="144" height="42" rx="10" fill="#030507" stroke={activeNode === 'chennai' ? '#245FA8' : '#17263A'} strokeWidth="1.5" />
              <text x="12" y="18" fill="#F5F7FA" fontSize="12" fontWeight="bold" fontFamily="system-ui">CHENNAI CORRIDOR</text>
              <text x="12" y="32" fill="#A7B0BE" fontSize="9" fontFamily="system-ui">Connect IX • Bay of Bengal</text>
            </g>
          </g>
        </svg>
      </div>

      {/* Selected PoP Command Telemetry Bar */}
      <div className="w-full bg-[#07101C] rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-[#17263A]">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-[#17263A] border border-[#17263A] flex items-center justify-center text-[#245FA8] shadow-lg shrink-0">
            <Radio size={20} className="animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-[#F5F7FA] text-base">{currentNodeData.name}</h4>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase bg-[#164B8C]/20 text-[#245FA8] border border-[#17263A]">
                ONLINE
              </span>
            </div>
            <p className="text-xs text-[#A7B0BE]">{currentNodeData.facility} • {currentNodeData.hardware}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono">
          <div className="px-3 py-1.5 rounded-xl bg-[#030507] border border-[#17263A]">
            <span className="text-[#A7B0BE]">CAPACITY: </span>
            <span className="text-[#245FA8] font-bold">{currentNodeData.capacity}</span>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-[#030507] border border-[#17263A]">
            <span className="text-[#A7B0BE]">STATUS: </span>
            <span className="text-[#245FA8] font-bold">{currentNodeData.status}</span>
          </div>
          <button
            onClick={() => onSelectNode && onSelectNode(activeNode)}
            className="px-4 py-1.5 rounded-xl bg-[#17263A] hover:bg-[#245FA8] text-[#245FA8] hover:text-white font-bold border border-[#17263A] transition-all"
          >
            INSPECT METRICS →
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeNetworkTopology;
