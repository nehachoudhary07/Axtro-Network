import React from 'react';

interface IndiaNetworkMapProps {
  selectedLocation: 'delhi' | 'mumbai' | 'chennai';
  onSelectLocation: (loc: 'delhi' | 'mumbai' | 'chennai') => void;
}

export function IndiaNetworkMap({ selectedLocation, onSelectLocation }: IndiaNetworkMapProps) {
  return (
    <div className="w-full relative flex flex-col items-center justify-center p-2 sm:p-6 select-none">
      <svg
        viewBox="0 0 840 600"
        className="w-full h-auto max-w-4xl overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="nodeActiveGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DB2777" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#17132A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Technical Frame & Ambient Background */}
        <rect x="20" y="20" width="800" height="560" rx="16" className="svg-card-bg" fill="#17132A" stroke="#2C2645" strokeWidth="1" />

        {/* Abstract Architectural Network Contours */}
        <path
          d="M 420 70 L 510 130 L 540 210 L 520 280 L 570 320 L 510 490 L 440 540 L 370 470 L 310 320 L 260 250 L 320 150 Z"
          stroke="#2C2645"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          strokeOpacity="0.6"
          className="svg-inner-box"
          fill="#0E0B1A"
          fillOpacity="0.75"
        />

        {/* TRUNK ROUTE 1: DELHI (420, 130) <-> MUMBAI (300, 310) */}
        <path
          d="M 420 130 L 300 310"
          stroke={selectedLocation === 'delhi' || selectedLocation === 'mumbai' ? '#DB2777' : '#2C2645'}
          strokeWidth={selectedLocation === 'delhi' || selectedLocation === 'mumbai' ? '3' : '1.5'}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        <path
          d="M 420 130 L 300 310"
          stroke="#DB2777"
          strokeWidth="1.5"
          strokeDasharray="4 10"
          className="animate-flow-dash"
        />

        {/* TRUNK ROUTE 2: MUMBAI (300, 310) <-> CHENNAI (480, 460) */}
        <path
          d="M 300 310 L 480 460"
          stroke={selectedLocation === 'mumbai' || selectedLocation === 'chennai' ? '#DB2777' : '#2C2645'}
          strokeWidth={selectedLocation === 'mumbai' || selectedLocation === 'chennai' ? '3' : '1.5'}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        <path
          d="M 300 310 L 480 460"
          stroke="#DB2777"
          strokeWidth="1.5"
          strokeDasharray="4 10"
          className="animate-flow-dash"
        />

        {/* TRUNK ROUTE 3: CHENNAI (480, 460) <-> DELHI (420, 130) */}
        <path
          d="M 480 460 L 420 130"
          stroke={selectedLocation === 'chennai' || selectedLocation === 'delhi' ? '#DB2777' : '#2C2645'}
          strokeWidth={selectedLocation === 'chennai' || selectedLocation === 'delhi' ? '3' : '1.5'}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        <path
          d="M 480 460 L 420 130"
          stroke="#DB2777"
          strokeWidth="1.5"
          strokeDasharray="4 10"
          className="animate-flow-dash"
        />

        {/* EXTERNAL SUBSEA CABLE ROUTES */}
        {/* Mumbai to Marseille / Singapore Subsea Landing */}
        <path d="M 300 310 L 120 370" stroke="#DB2777" strokeWidth="1.2" strokeDasharray="3 6" className="animate-flow-dash" />
        <text x="110" y="385" fill="#9C94B8" fontSize="9" fontFamily="Inter" textAnchor="end">SEA-ME-WE-5 / AAE-1</text>

        {/* Chennai to Singapore / APAC Subsea Landing */}
        <path d="M 480 460 L 680 500" stroke="#DB2777" strokeWidth="1.2" strokeDasharray="3 6" className="animate-flow-dash" />
        <text x="690" y="515" fill="#9C94B8" fontSize="9" fontFamily="Inter">Bay of Bengal Gateway (BBG)</text>

        {/* LATENCY CALLOUT CHIPS ON INTERCONNECT LINES */}
        {/* Delhi <-> Mumbai Latency */}
        <g transform="translate(340, 205)">
          <rect x="-35" y="-12" width="70" height="24" rx="4" className="svg-latency-bg" fill="#17132A" stroke="#2C2645" strokeWidth="1" />
          <text x="0" y="4" className="svg-latency-text" fill="#DB2777" fontSize="10" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">18.4 ms</text>
        </g>

        {/* Mumbai <-> Chennai Latency */}
        <g transform="translate(390, 395)">
          <rect x="-35" y="-12" width="70" height="24" rx="4" className="svg-latency-bg" fill="#17132A" stroke="#2C2645" strokeWidth="1" />
          <text x="0" y="4" className="svg-latency-text" fill="#DB2777" fontSize="10" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">14.1 ms</text>
        </g>

        {/* Delhi <-> Chennai Latency */}
        <g transform="translate(470, 285)">
          <rect x="-35" y="-12" width="70" height="24" rx="4" className="svg-latency-bg" fill="#17132A" stroke="#2C2645" strokeWidth="1" />
          <text x="0" y="4" className="svg-latency-text" fill="#DB2777" fontSize="10" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">24.2 ms</text>
        </g>

        {/* NODE 1: DELHI NCR (YOTTA D1) */}
        <g
          transform="translate(420, 130)"
          onClick={() => onSelectLocation('delhi')}
          className="cursor-pointer group"
        >
          {selectedLocation === 'delhi' && (
            <circle cx="0" cy="0" r="32" fill="url(#nodeActiveGlow)" className="animate-pulse" />
          )}
          <circle cx="0" cy="0" r="16" className="svg-card-bg" fill="#17132A" stroke={selectedLocation === 'delhi' ? '#DB2777' : '#2C2645'} strokeWidth="2" />
          <circle cx="0" cy="0" r="6" fill="#DB2777" />
          
          {/* Delhi Tag */}
          <g transform="translate(24, -20)">
            <rect x="0" y="0" width="170" height="48" rx="6" className="svg-tag-bg" fill="#0E0B1A" stroke={selectedLocation === 'delhi' ? '#DB2777' : '#2C2645'} strokeWidth="1.5" />
            <text x="12" y="18" className="svg-text-primary" fill="#F5F3FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">DELHI NCR</text>
            <text x="12" y="32" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">Yotta D1 • 7th Floor Data Suite</text>
            <circle cx="152" cy="14" r="3" fill="#DB2777" />
          </g>
        </g>

        {/* NODE 2: MUMBAI (CONNECT IX) */}
        <g
          transform="translate(300, 310)"
          onClick={() => onSelectLocation('mumbai')}
          className="cursor-pointer group"
        >
          {selectedLocation === 'mumbai' && (
            <circle cx="0" cy="0" r="32" fill="url(#nodeActiveGlow)" className="animate-pulse" />
          )}
          <circle cx="0" cy="0" r="16" className="svg-card-bg" fill="#17132A" stroke={selectedLocation === 'mumbai' ? '#DB2777' : '#2C2645'} strokeWidth="2" />
          <circle cx="0" cy="0" r="6" fill="#DB2777" />

          {/* Mumbai Tag */}
          <g transform="translate(-190, -20)">
            <rect x="0" y="0" width="175" height="48" rx="6" className="svg-tag-bg" fill="#0E0B1A" stroke={selectedLocation === 'mumbai' ? '#DB2777' : '#2C2645'} strokeWidth="1.5" />
            <text x="12" y="18" className="svg-text-primary" fill="#F5F3FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">MUMBAI GATEWAY</text>
            <text x="12" y="32" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">Connect IX • Subsea Landing</text>
            <circle cx="157" cy="14" r="3" fill="#DB2777" />
          </g>
        </g>

        {/* NODE 3: CHENNAI (CONNECT IX) */}
        <g
          transform="translate(480, 460)"
          onClick={() => onSelectLocation('chennai')}
          className="cursor-pointer group"
        >
          {selectedLocation === 'chennai' && (
            <circle cx="0" cy="0" r="32" fill="url(#nodeActiveGlow)" className="animate-pulse" />
          )}
          <circle cx="0" cy="0" r="16" className="svg-card-bg" fill="#17132A" stroke={selectedLocation === 'chennai' ? '#DB2777' : '#2C2645'} strokeWidth="2" />
          <circle cx="0" cy="0" r="6" fill="#DB2777" />

          {/* Chennai Tag */}
          <g transform="translate(24, -20)">
            <rect x="0" y="0" width="180" height="48" rx="6" className="svg-tag-bg" fill="#0E0B1A" stroke={selectedLocation === 'chennai' ? '#DB2777' : '#2C2645'} strokeWidth="1.5" />
            <text x="12" y="18" className="svg-text-primary" fill="#F5F3FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">CHENNAI CORRIDOR</text>
            <text x="12" y="32" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">Connect IX • Bay of Bengal Landing</text>
            <circle cx="162" cy="14" r="3" fill="#DB2777" />
          </g>
        </g>

        {/* TECHNICAL OVERLAY LEGEND */}
        <g transform="translate(45, 490)">
          <rect x="0" y="0" width="220" height="60" rx="6" className="svg-inner-box" fill="#0E0B1A" stroke="#2C2645" strokeWidth="1" />
          <text x="12" y="18" fill="#DB2777" fontSize="9" fontFamily="Space Grotesk" fontWeight="700" letterSpacing="1">AXTRO CORE TOPOLOGY</text>
          
          <g transform="translate(12, 28)">
            <line x1="0" y1="5" x2="20" y2="5" stroke="#DB2777" strokeWidth="2" />
            <text x="28" y="9" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">100 Gbps Core Trunk</text>
          </g>
          
          <g transform="translate(12, 44)">
            <line x1="0" y1="5" x2="20" y2="5" stroke="#2C2645" strokeWidth="1.5" strokeDasharray="3 3" className="svg-border" />
            <text x="28" y="9" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">Subsea Transit Corridors</text>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default IndiaNetworkMap;
