import React from 'react';

export function DDoSTrafficFlow() {
  return (
    <div className="w-full relative flex items-center justify-center p-2 sm:p-6 select-none">
      <svg
        viewBox="0 0 900 480"
        className="w-full h-auto max-w-4xl overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="ddosGridIndigo" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#17263A" strokeWidth="0.5" strokeOpacity="0.4" />
          </pattern>
        </defs>

        {/* Outer Frame */}
        <rect x="10" y="10" width="880" height="460" rx="8" fill="#07101C" stroke="#17263A" strokeWidth="1" />
        <rect x="10" y="10" width="880" height="460" rx="8" fill="url(#ddosGridIndigo)" />

        {/* SECTION 1: INCOMING TRAFFIC (Left side) */}
        <g transform="translate(40, 40)">
          <text x="0" y="20" fill="#A7B0BE" fontSize="11" fontFamily="Space Grotesk" letterSpacing="1.5" fontWeight="600">
            01 / INCOMING TRAFFIC STREAM
          </text>
          
          {/* Volumetric Attack Node 1 */}
          <g transform="translate(20, 70)">
            <rect x="0" y="0" width="145" height="44" rx="4" fill="#030507" stroke="#17263A" strokeWidth="1" />
            <text x="12" y="18" fill="#A7B0BE" fontSize="11" fontFamily="Inter" fontWeight="500">Volumetric Flood</text>
            <text x="12" y="32" fill="#A7B0BE" fontSize="9" fontFamily="Inter" opacity="0.6">SYN / UDP Amplification</text>
          </g>

          {/* Legitimate User Traffic Node */}
          <g transform="translate(20, 140)">
            <rect x="0" y="0" width="145" height="44" rx="4" fill="#030507" stroke="#245FA8" strokeWidth="1.5" />
            <text x="12" y="18" fill="#F5F7FA" fontSize="11" fontFamily="Inter" fontWeight="600">Legitimate Traffic</text>
            <text x="12" y="32" fill="#245FA8" fontSize="9" fontFamily="Inter" fontWeight="600">HTTP / HTTPS / API Calls</text>
          </g>

          {/* Layer 7 Application Attack Node */}
          <g transform="translate(20, 210)">
            <rect x="0" y="0" width="145" height="44" rx="4" fill="#030507" stroke="#17263A" strokeWidth="1" />
            <text x="12" y="18" fill="#A7B0BE" fontSize="11" fontFamily="Inter" fontWeight="500">Protocol Floods</text>
            <text x="12" y="32" fill="#A7B0BE" fontSize="9" fontFamily="Inter" opacity="0.6">L7 Exhaustion / Botnets</text>
          </g>

          {/* Complex Malformed Packets Node */}
          <g transform="translate(20, 280)">
            <rect x="0" y="0" width="145" height="44" rx="4" fill="#030507" stroke="#17263A" strokeWidth="1" />
            <text x="12" y="18" fill="#A7B0BE" fontSize="11" fontFamily="Inter" fontWeight="500">State Exhaustion</text>
            <text x="12" y="32" fill="#A7B0BE" fontSize="9" fontFamily="Inter" opacity="0.6">TCP Fragmentation</text>
          </g>
        </g>

        {/* INCOMING TRAFFIC LINES TOWARDS AXTRO SCRUBBING EDGE */}
        <path d="M205 132 L350 240" stroke="#17263A" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M205 132 L350 240" stroke="#A7B0BE" strokeWidth="1" strokeDasharray="4 6" className="animate-flow-dash-fast" />

        {/* Clean Line 2 -> Passes through */}
        <path d="M205 202 L350 240" stroke="#245FA8" strokeWidth="2.5" />
        <path d="M205 202 L350 240" stroke="#F5F7FA" strokeWidth="1.5" strokeDasharray="6 12" className="animate-flow-dash" />

        <path d="M205 272 L350 240" stroke="#17263A" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M205 272 L350 240" stroke="#A7B0BE" strokeWidth="1" strokeDasharray="4 6" className="animate-flow-dash-fast" />

        <path d="M205 342 L350 240" stroke="#17263A" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M205 342 L350 240" stroke="#A7B0BE" strokeWidth="1" strokeDasharray="4 6" className="animate-flow-dash-fast" />

        {/* SECTION 2: AXTRO NETWORK SCRUBBING & ANALYSIS (Center) */}
        <g transform="translate(350, 60)">
          <rect x="0" y="0" width="230" height="360" rx="8" fill="#030507" stroke="#245FA8" strokeWidth="1.5" />
          <rect x="8" y="8" width="214" height="344" rx="6" fill="#07101C" stroke="#17263A" strokeWidth="1" />

          {/* Header */}
          <text x="16" y="32" fill="#245FA8" fontSize="10" fontFamily="Space Grotesk" fontWeight="700" letterSpacing="1">
            AXTRO SCRUBBING EDGE
          </text>
          <text x="16" y="46" fill="#A7B0BE" fontSize="9" fontFamily="Inter">
            AI Heuristic & Anycast Filter
          </text>

          {/* Scrubbing Stage 1: BGP Anycast Routing */}
          <g transform="translate(16, 62)">
            <rect x="0" y="0" width="182" height="52" rx="4" fill="#030507" stroke="#17263A" strokeWidth="1" />
            <text x="10" y="18" fill="#F5F7FA" fontSize="11" fontFamily="Inter" fontWeight="600">1. Anycast Ingestion</text>
            <text x="10" y="32" fill="#A7B0BE" fontSize="9" fontFamily="Inter">Tbps distributed capacity absorb</text>
            <text x="10" y="44" fill="#245FA8" fontSize="8" fontFamily="Inter">STATUS: ACTIVE INGESTION</text>
          </g>

          {/* Scrubbing Stage 2: Hardware Packet Inspection */}
          <g transform="translate(16, 126)">
            <rect x="0" y="0" width="182" height="52" rx="4" fill="#030507" stroke="#17263A" strokeWidth="1" />
            <text x="10" y="18" fill="#F5F7FA" fontSize="11" fontFamily="Inter" fontWeight="600">2. Deep Packet Inspection</text>
            <text x="10" y="32" fill="#A7B0BE" fontSize="9" fontFamily="Inter">Silicon-level signature check</text>
            <text x="10" y="44" fill="#245FA8" fontSize="8" fontFamily="Inter">ZERO LATENCY OVERHEAD</text>
          </g>

          {/* Scrubbing Stage 3: Layer 7 Behavioral Engine */}
          <g transform="translate(16, 190)">
            <rect x="0" y="0" width="182" height="52" rx="4" fill="#030507" stroke="#17263A" strokeWidth="1" />
            <text x="10" y="18" fill="#F5F7FA" fontSize="11" fontFamily="Inter" fontWeight="600">3. Behavioral AI Mitigation</text>
            <text x="10" y="32" fill="#A7B0BE" fontSize="9" fontFamily="Inter">Isolates malformed requests</text>
            <text x="10" y="44" fill="#245FA8" fontSize="8" fontFamily="Inter">INSTANT HEURISTIC BLOCK</text>
          </g>

          {/* Clean Extraction Indicator */}
          <g transform="translate(16, 256)">
            <rect x="0" y="0" width="182" height="42" rx="4" fill="#17263A" stroke="#245FA8" strokeWidth="1" />
            <text x="10" y="18" fill="#F5F7FA" fontSize="11" fontFamily="Inter" fontWeight="700">Sub-Second Mitigation</text>
            <text x="10" y="32" fill="#245FA8" fontSize="9" fontFamily="Inter">99.999% Attack Packets Dropped</text>
          </g>
        </g>

        {/* CLEAN LINE LEAVING SCRUBBING CENTER */}
        <path d="M580 240 L720 240" stroke="#245FA8" strokeWidth="3" />
        <path d="M580 240 L720 240" stroke="#F5F7FA" strokeWidth="1.5" strokeDasharray="6 10" className="animate-flow-dash" />

        {/* SECTION 3: PROTECTED DESTINATION (Right side) */}
        <g transform="translate(720, 150)">
          <rect x="0" y="0" width="150" height="180" rx="8" fill="#030507" stroke="#17263A" strokeWidth="1.5" />
          <rect x="6" y="6" width="138" height="168" rx="6" fill="#07101C" stroke="#17263A" strokeWidth="1" />

          <text x="16" y="30" fill="#F5F7FA" fontSize="12" fontFamily="Space Grotesk" fontWeight="700">
            PROTECTED CORE
          </text>
          <text x="16" y="44" fill="#A7B0BE" fontSize="9" fontFamily="Inter">
            Customer Infrastructure
          </text>

          {/* Server Rack Status */}
          <g transform="translate(14, 60)">
            <rect x="0" y="0" width="110" height="24" rx="2" fill="#030507" stroke="#17263A" />
            <circle cx="10" cy="12" r="3" fill="#245FA8" />
            <text x="20" y="15" fill="#F5F7FA" fontSize="9" fontFamily="Inter">App Clusters</text>
          </g>

          <g transform="translate(14, 90)">
            <rect x="0" y="0" width="110" height="24" rx="2" fill="#030507" stroke="#17263A" />
            <circle cx="10" cy="12" r="3" fill="#245FA8" />
            <text x="20" y="15" fill="#F5F7FA" fontSize="9" fontFamily="Inter">Database Tier</text>
          </g>

          <g transform="translate(14, 120)">
            <rect x="0" y="0" width="110" height="24" rx="2" fill="#030507" stroke="#17263A" />
            <circle cx="10" cy="12" r="3" fill="#245FA8" />
            <text x="20" y="15" fill="#F5F7FA" fontSize="9" fontFamily="Inter">Direct BGP Peer</text>
          </g>
        </g>

        {/* Bottom Banner */}
        <g transform="translate(40, 435)">
          <text x="0" y="0" fill="#A7B0BE" fontSize="10" fontFamily="Inter">
            AXTRO MITIGATION CAPACITY: <tspan fill="#245FA8" fontWeight="700">MULTI-TBPS SCRUBBING</tspan> • ZERO LATENCY DEGRADATION
          </text>
        </g>
      </svg>
    </div>
  );
}

export default DDoSTrafficFlow;
