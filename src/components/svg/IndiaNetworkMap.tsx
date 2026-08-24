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
          <pattern id="networkMapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#17263A" strokeWidth="0.5" strokeOpacity="0.4" />
            <circle cx="0" cy="0" r="1" fill="#245FA8" fillOpacity="0.25" />
          </pattern>

          <radialGradient id="nodeActiveGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#245FA8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#07101C" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Technical Frame & Matrix Grid */}
        <rect x="20" y="20" width="800" height="560" rx="8" fill="#07101C" stroke="#17263A" strokeWidth="1" />
        <rect x="20" y="20" width="800" height="560" rx="8" fill="url(#networkMapGrid)" />

        {/* Abstract Architectural Network Contours */}
        <path
          d="M 420 70 L 510 130 L 540 210 L 520 280 L 570 320 L 510 490 L 440 540 L 370 470 L 310 320 L 260 250 L 320 150 Z"
          stroke="#17263A"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          strokeOpacity="0.6"
          fill="#030507"
          fillOpacity="0.75"
        />

        {/* Latitudinal & Longitudinal Tech Grid lines */}
        <line x1="20" y1="130" x2="820" y2="130" stroke="#17263A" strokeWidth="0.8" strokeDasharray="3 5" />
        <line x1="20" y1="300" x2="820" y2="300" stroke="#17263A" strokeWidth="0.8" strokeDasharray="3 5" />
        <line x1="20" y1="460" x2="820" y2="460" stroke="#17263A" strokeWidth="0.8" strokeDasharray="3 5" />
        <line x1="420" y1="20" x2="420" y2="580" stroke="#17263A" strokeWidth="0.8" strokeDasharray="3 5" />

        {/* TRUNK ROUTE 1: DELHI (420, 130) <-> MUMBAI (300, 310) */}
        <path
          d="M 420 130 L 300 310"
          stroke={selectedLocation === 'delhi' || selectedLocation === 'mumbai' ? '#245FA8' : '#17263A'}
          strokeWidth={selectedLocation === 'delhi' || selectedLocation === 'mumbai' ? '3' : '1.5'}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        <path
          d="M 420 130 L 300 310"
          stroke="#F5F7FA"
          strokeWidth="1.5"
          strokeDasharray="4 10"
          className="animate-flow-dash"
        />

        {/* TRUNK ROUTE 2: MUMBAI (300, 310) <-> CHENNAI (480, 460) */}
        <path
          d="M 300 310 L 480 460"
          stroke={selectedLocation === 'mumbai' || selectedLocation === 'chennai' ? '#245FA8' : '#17263A'}
          strokeWidth={selectedLocation === 'mumbai' || selectedLocation === 'chennai' ? '3' : '1.5'}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        <path
          d="M 300 310 L 480 460"
          stroke="#F5F7FA"
          strokeWidth="1.5"
          strokeDasharray="4 10"
          className="animate-flow-dash"
        />

        {/* TRUNK ROUTE 3: CHENNAI (480, 460) <-> DELHI (420, 130) */}
        <path
          d="M 480 460 L 420 130"
          stroke={selectedLocation === 'chennai' || selectedLocation === 'delhi' ? '#245FA8' : '#17263A'}
          strokeWidth={selectedLocation === 'chennai' || selectedLocation === 'delhi' ? '3' : '1.5'}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        <path
          d="M 480 460 L 420 130"
          stroke="#F5F7FA"
          strokeWidth="1.5"
          strokeDasharray="4 10"
          className="animate-flow-dash"
        />

        {/* EXTERNAL SUBSEA CABLE ROUTES */}
        {/* Mumbai to Marseille / Singapore Subsea Landing */}
        <path d="M 300 310 L 120 360" stroke="#17263A" strokeWidth="1.5" strokeDasharray="3 3" />
        <rect x="70" y="348" width="105" height="24" rx="4" fill="#07101C" stroke="#17263A" strokeWidth="1" />
        <text x="122" y="364" fill="#A7B0BE" fontSize="9" fontFamily="Inter" textAnchor="middle" fontWeight="600">SMW-4 / AAE-1</text>

        {/* Chennai to Singapore / APAC Subsea Landing */}
        <path d="M 480 460 L 700 480" stroke="#17263A" strokeWidth="1.5" strokeDasharray="3 3" />
        <rect x="650" y="468" width="110" height="24" rx="4" fill="#07101C" stroke="#17263A" strokeWidth="1" />
        <text x="705" y="484" fill="#A7B0BE" fontSize="9" fontFamily="Inter" textAnchor="middle" fontWeight="600">BBG / SEA-ME-WE-5</text>

        {/* NODE 1: DELHI (420, 130) */}
        <g
          transform="translate(420, 130)"
          className="cursor-pointer group"
          onClick={() => onSelectLocation('delhi')}
        >
          {selectedLocation === 'delhi' && (
            <circle cx="0" cy="0" r="38" fill="url(#nodeActiveGlow)" className="animate-pulse" />
          )}
          <circle cx="0" cy="0" r="22" fill="#07101C" stroke={selectedLocation === 'delhi' ? '#245FA8' : '#17263A'} strokeWidth="2" />
          <circle cx="0" cy="0" r="9" fill={selectedLocation === 'delhi' ? '#245FA8' : '#A7B0BE'} />
          <circle cx="0" cy="0" r="3" fill="#030507" />

          {/* Label Card */}
          <g transform="translate(30, -22)">
            <rect x="0" y="0" width="165" height="52" rx="4" fill="#07101C" stroke={selectedLocation === 'delhi' ? '#245FA8' : '#17263A'} strokeWidth="1.5" />
            <text x="12" y="18" fill="#F5F7FA" fontSize="13" fontWeight="700" fontFamily="Space Grotesk">DELHI NCR</text>
            <text x="12" y="32" fill="#A7B0BE" fontSize="10" fontFamily="Inter">Yotta D1 • 7th Floor</text>
            <text x="12" y="44" fill="#245FA8" fontSize="9" fontWeight="600" fontFamily="Inter">PRIMARY TRANSIT HUB</text>
          </g>
        </g>

        {/* NODE 2: MUMBAI (300, 310) */}
        <g
          transform="translate(300, 310)"
          className="cursor-pointer group"
          onClick={() => onSelectLocation('mumbai')}
        >
          {selectedLocation === 'mumbai' && (
            <circle cx="0" cy="0" r="38" fill="url(#nodeActiveGlow)" className="animate-pulse" />
          )}
          <circle cx="0" cy="0" r="22" fill="#07101C" stroke={selectedLocation === 'mumbai' ? '#245FA8' : '#17263A'} strokeWidth="2" />
          <circle cx="0" cy="0" r="9" fill={selectedLocation === 'mumbai' ? '#245FA8' : '#A7B0BE'} />
          <circle cx="0" cy="0" r="3" fill="#030507" />

          {/* Label Card */}
          <g transform="translate(-185, -22)">
            <rect x="0" y="0" width="170" height="52" rx="4" fill="#07101C" stroke={selectedLocation === 'mumbai' ? '#245FA8' : '#17263A'} strokeWidth="1.5" />
            <text x="12" y="18" fill="#F5F7FA" fontSize="13" fontWeight="700" fontFamily="Space Grotesk">MUMBAI</text>
            <text x="12" y="32" fill="#A7B0BE" fontSize="10" fontFamily="Inter">Connect IX Gateway</text>
            <text x="12" y="44" fill="#245FA8" fontSize="9" fontWeight="600" fontFamily="Inter">SUBSEA INTERCONNECT</text>
          </g>
        </g>

        {/* NODE 3: CHENNAI (480, 460) */}
        <g
          transform="translate(480, 460)"
          className="cursor-pointer group"
          onClick={() => onSelectLocation('chennai')}
        >
          {selectedLocation === 'chennai' && (
            <circle cx="0" cy="0" r="38" fill="url(#nodeActiveGlow)" className="animate-pulse" />
          )}
          <circle cx="0" cy="0" r="22" fill="#07101C" stroke={selectedLocation === 'chennai' ? '#245FA8' : '#17263A'} strokeWidth="2" />
          <circle cx="0" cy="0" r="9" fill={selectedLocation === 'chennai' ? '#245FA8' : '#A7B0BE'} />
          <circle cx="0" cy="0" r="3" fill="#030507" />

          {/* Label Card */}
          <g transform="translate(30, -22)">
            <rect x="0" y="0" width="170" height="52" rx="4" fill="#07101C" stroke={selectedLocation === 'chennai' ? '#245FA8' : '#17263A'} strokeWidth="1.5" />
            <text x="12" y="18" fill="#F5F7FA" fontSize="13" fontWeight="700" fontFamily="Space Grotesk">CHENNAI</text>
            <text x="12" y="32" fill="#A7B0BE" fontSize="10" fontFamily="Inter">Connect IX Gateway</text>
            <text x="12" y="44" fill="#245FA8" fontSize="9" fontWeight="600" fontFamily="Inter">SOUTHEAST ASIA LINK</text>
          </g>
        </g>

        {/* Top/Bottom Telemetry Readouts */}
        <g transform="translate(40, 50)">
          <rect x="0" y="0" width="180" height="28" rx="4" fill="#030507" stroke="#17263A" strokeWidth="1" />
          <text x="10" y="18" fill="#A7B0BE" fontSize="10" fontFamily="Inter" letterSpacing="0.5">
            BGP ANYCAST: <tspan fill="#245FA8" fontWeight="700">OPTIMAL</tspan>
          </text>
        </g>

        <g transform="translate(620, 50)">
          <rect x="0" y="0" width="180" height="28" rx="4" fill="#030507" stroke="#17263A" strokeWidth="1" />
          <text x="10" y="18" fill="#A7B0BE" fontSize="10" fontFamily="Inter" letterSpacing="0.5">
            CORE UPTIME: <tspan fill="#245FA8" fontWeight="700">100.00%</tspan>
          </text>
        </g>
      </svg>
    </div>
  );
}

export default IndiaNetworkMap;
