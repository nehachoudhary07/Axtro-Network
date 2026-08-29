import React, { useState } from 'react';
import { Radio } from '../animated-icons';

interface HomeNetworkTopologyProps {
  interactive?: boolean;
  onSelectNode?: (nodeId: string) => void;
}

export function HomeNetworkTopology({ onSelectNode }: HomeNetworkTopologyProps) {
  const [activeNode, setActiveNode] = useState<string>('delhi');

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
      hardware: 'Juniper MX480 Edge Routers',
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
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#17132A] border border-[#2C2645] backdrop-blur-md">
          {(['delhi', 'mumbai', 'chennai'] as const).map((nodeKey) => (
            <button
              key={nodeKey}
              onClick={() => handleNodeClick(nodeKey)}
              className={`px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeNode === nodeKey
                  ? 'bg-[#DB2777] text-white shadow-md'
                  : 'text-[#9C94B8] hover:text-[#F5F3FA] hover:bg-[#1F1938]'
              }`}
            >
              {nodeKey.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-[#DB2777] bg-[#DB2777]/10 px-3 py-1 rounded-full border border-[#2C2645]">
          <span className="w-2 h-2 rounded-full bg-[#DB2777] animate-ping"></span>
          <span>BGP ANYCAST SYNCHRONIZED</span>
        </div>
      </div>

      {/* Cybernetic SVG Canvas */}
      <div className="w-full relative rounded-2xl overflow-hidden bg-[#17132A] border border-[#2C2645] p-3 sm:p-6 shadow-2xl">
        <svg
          viewBox="0 0 800 480"
          className="w-full h-auto max-w-4xl overflow-visible relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Grid Pattern */}
            <pattern id="sleekGrid" width="36" height="36" patternUnits="userSpaceOnUse">
              <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(44,38,69,0.5)" strokeWidth="0.8" className="svg-grid-line" />
              <circle cx="0" cy="0" r="0.8" fill="rgba(219,39,119,0.4)" />
            </pattern>
          </defs>

          {/* Grid Background */}
          <rect x="10" y="10" width="780" height="460" fill="url(#sleekGrid)" rx="16" />

          {/* Core Concentric Ring Pulses */}
          <circle cx="400" cy="240" r="180" stroke="rgba(219,39,119,0.15)" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="400" cy="240" r="120" stroke="rgba(219,39,119,0.25)" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx="400" cy="240" r="60" stroke="rgba(219,39,119,0.2)" strokeWidth="1" />

          {/* Dynamic Optical Trunks */}
          {/* Delhi (400, 90) <-> Mumbai (200, 310) */}
          <path
            d="M400 90 L200 310"
            stroke="rgba(219,39,119,0.3)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M400 90 L200 310"
            stroke="#DB2777"
            strokeWidth="2"
            strokeDasharray="4 8"
            className="animate-flow-dash"
          />

          {/* Mumbai (200, 310) <-> Chennai (600, 340) */}
          <path
            d="M200 310 L600 340"
            stroke="rgba(219,39,119,0.3)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M200 310 L600 340"
            stroke="#DB2777"
            strokeWidth="2"
            strokeDasharray="4 8"
            className="animate-flow-dash"
          />

          {/* Chennai (600, 340) <-> Delhi (400, 90) */}
          <path
            d="M600 340 L400 90"
            stroke="rgba(219,39,119,0.3)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M600 340 L400 90"
            stroke="#DB2777"
            strokeWidth="2"
            strokeDasharray="4 8"
            className="animate-flow-dash"
          />

          {/* Latency Chips */}
          <g transform="translate(280, 185)">
            <rect x="-30" y="-12" width="60" height="24" rx="12" className="svg-latency-bg" fill="#17132A" stroke="#2C2645" strokeWidth="1" />
            <text x="0" y="4" className="svg-latency-text" fill="#DB2777" fontSize="10" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">18.4 ms</text>
          </g>

          <g transform="translate(400, 340)">
            <rect x="-30" y="-12" width="60" height="24" rx="12" className="svg-latency-bg" fill="#17132A" stroke="#2C2645" strokeWidth="1" />
            <text x="0" y="4" className="svg-latency-text" fill="#DB2777" fontSize="10" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">14.1 ms</text>
          </g>

          <g transform="translate(520, 200)">
            <rect x="-30" y="-12" width="60" height="24" rx="12" className="svg-latency-bg" fill="#17132A" stroke="#2C2645" strokeWidth="1" />
            <text x="0" y="4" className="svg-latency-text" fill="#DB2777" fontSize="10" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">24.2 ms</text>
          </g>

          {/* Central Hyper-Core Relay */}
          <g transform="translate(400, 240)">
            <circle cx="0" cy="0" r="38" className="svg-hub-ring" fill="rgba(219,39,119,0.06)" stroke="rgba(219,39,119,0.3)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="24" className="svg-hub-center" fill="#17132A" stroke="#DB2777" strokeWidth="2" />
            <circle cx="0" cy="0" r="6" fill="#DB2777" className="animate-ping opacity-75" />
            <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
            <text x="0" y="52" className="svg-text-primary" fill="#F5F3FA" fontSize="10" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">AXTRO HYPER-CORE</text>
            <text x="0" y="64" fill="#DB2777" fontSize="8" fontFamily="Inter" fontWeight="600" textAnchor="middle">100G ANYCAST MESH</text>
          </g>

          {/* Delhi NCR Node */}
          <g
            transform="translate(400, 90)"
            onClick={() => handleNodeClick('delhi')}
            className="cursor-pointer group"
          >
            <circle cx="0" cy="0" r="26" fill="rgba(219,39,119,0.2)" className={activeNode === 'delhi' ? 'animate-pulse' : ''} />
            <circle cx="0" cy="0" r="16" className="svg-card-bg" fill="#17132A" stroke={activeNode === 'delhi' ? '#DB2777' : '#2C2645'} strokeWidth="2.5" />
            <circle cx="0" cy="0" r="6" fill="#DB2777" />
            
            {/* Delhi Tag */}
            <g transform="translate(30, -18)">
              <rect x="0" y="0" width="130" height="36" rx="6" className="svg-tag-bg" fill="#0E0B1A" stroke={activeNode === 'delhi' ? '#DB2777' : '#2C2645'} strokeWidth="1" />
              <text x="10" y="14" className="svg-text-primary" fill="#F5F3FA" fontSize="10" fontFamily="Space Grotesk" fontWeight="700">DELHI NCR</text>
              <text x="10" y="26" className="svg-text-secondary" fill="#9C94B8" fontSize="8" fontFamily="Inter">Yotta D1 • 7th Floor</text>
            </g>
          </g>

          {/* Mumbai Gateway Node */}
          <g
            transform="translate(200, 310)"
            onClick={() => handleNodeClick('mumbai')}
            className="cursor-pointer group"
          >
            <circle cx="0" cy="0" r="26" fill="rgba(219,39,119,0.2)" className={activeNode === 'mumbai' ? 'animate-pulse' : ''} />
            <circle cx="0" cy="0" r="16" className="svg-card-bg" fill="#17132A" stroke={activeNode === 'mumbai' ? '#DB2777' : '#2C2645'} strokeWidth="2.5" />
            <circle cx="0" cy="0" r="6" fill="#DB2777" />

            {/* Mumbai Tag */}
            <g transform="translate(-140, -18)">
              <rect x="0" y="0" width="130" height="36" rx="6" className="svg-tag-bg" fill="#0E0B1A" stroke={activeNode === 'mumbai' ? '#DB2777' : '#2C2645'} strokeWidth="1" />
              <text x="10" y="14" className="svg-text-primary" fill="#F5F3FA" fontSize="10" fontFamily="Space Grotesk" fontWeight="700">MUMBAI GATEWAY</text>
              <text x="10" y="26" className="svg-text-secondary" fill="#9C94B8" fontSize="8" fontFamily="Inter">Connect IX • Subsea Landing</text>
            </g>
          </g>

          {/* Chennai Node */}
          <g
            transform="translate(600, 340)"
            onClick={() => handleNodeClick('chennai')}
            className="cursor-pointer group"
          >
            <circle cx="0" cy="0" r="26" fill="rgba(219,39,119,0.2)" className={activeNode === 'chennai' ? 'animate-pulse' : ''} />
            <circle cx="0" cy="0" r="16" className="svg-card-bg" fill="#17132A" stroke={activeNode === 'chennai' ? '#DB2777' : '#2C2645'} strokeWidth="2.5" />
            <circle cx="0" cy="0" r="6" fill="#DB2777" />

            {/* Chennai Tag */}
            <g transform="translate(30, -18)">
              <rect x="0" y="0" width="135" height="36" rx="6" className="svg-tag-bg" fill="#0E0B1A" stroke={activeNode === 'chennai' ? '#DB2777' : '#2C2645'} strokeWidth="1" />
              <text x="10" y="14" className="svg-text-primary" fill="#F5F3FA" fontSize="10" fontFamily="Space Grotesk" fontWeight="700">CHENNAI CORRIDOR</text>
              <text x="10" y="26" className="svg-text-secondary" fill="#9C94B8" fontSize="8" fontFamily="Inter">Connect IX • Bay of Bengal</text>
            </g>
          </g>
        </svg>
      </div>

      {/* Real-Time Telemetry Strip */}
      <div className="w-full p-4 rounded-2xl bg-[#17132A] border border-[#2C2645] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1F1938] border border-[#2C2645] flex items-center justify-center text-[#DB2777] shrink-0">
            <Radio size={18} className="animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-sm text-[#F5F3FA]">
                {currentNodeData.name}
              </span>
              <span className="text-[9px] font-mono font-bold bg-[#DB2777]/10 text-[#DB2777] px-2 py-0.5 rounded-full border border-[#DB2777]/30">
                ONLINE
              </span>
            </div>
            <p className="text-xs text-[#9C94B8] mt-0.5">
              {currentNodeData.facility} • {currentNodeData.hardware}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono text-xs w-full sm:w-auto justify-between sm:justify-end">
          <div className="px-3 py-1.5 rounded-xl bg-[#0E0B1A] border border-[#2C2645]">
            <span className="text-[10px] text-[#9C94B8] uppercase">CAPACITY: </span>
            <span className="text-[#F5F3FA] font-bold">100 Gbps Core Trunk</span>
          </div>

          <div className="px-3 py-1.5 rounded-xl bg-[#0E0B1A] border border-[#2C2645]">
            <span className="text-[10px] text-[#9C94B8] uppercase">STATUS: </span>
            <span className="text-[#DB2777] font-bold">{currentNodeData.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNetworkTopology;
