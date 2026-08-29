import React from 'react';

interface DDoSTrafficFlowProps {
  className?: string;
}

export function DDoSTrafficFlow({ className = '' }: DDoSTrafficFlowProps) {
  return (
    <div className={`w-full relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 900 480"
        className="w-full h-auto max-w-4xl overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="ddosGridMagenta" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#2C2645" strokeWidth="0.5" strokeOpacity="0.4" />
          </pattern>
        </defs>

        {/* Outer Frame */}
        <rect x="10" y="10" width="880" height="460" rx="8" className="svg-card-bg" fill="#17132A" stroke="#2C2645" strokeWidth="1" />
        <rect x="10" y="10" width="880" height="460" rx="8" fill="url(#ddosGridMagenta)" />

        {/* SECTION 1: INCOMING TRAFFIC (Left side) */}
        <g transform="translate(30, 40)">
          <text x="0" y="20" className="svg-text-secondary" fill="#9C94B8" fontSize="10.5" fontFamily="Space Grotesk" letterSpacing="1" fontWeight="600">
            01 / INCOMING TRAFFIC STREAM
          </text>
          
          {/* Volumetric Attack Node 1 (Amber alert) */}
          <g transform="translate(10, 70)">
            <rect x="0" y="0" width="135" height="44" rx="4" className="svg-inner-box" fill="#0E0B1A" stroke="#F2A623" strokeWidth="1" strokeOpacity="0.8" />
            <text x="10" y="18" fill="#F2A623" fontSize="11" fontFamily="Inter" fontWeight="600">Volumetric Flood</text>
            <text x="10" y="32" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">SYN / UDP Amplification</text>
          </g>

          {/* Legitimate User Traffic Node */}
          <g transform="translate(10, 140)">
            <rect x="0" y="0" width="135" height="44" rx="4" className="svg-tag-bg" fill="#0E0B1A" stroke="#DB2777" strokeWidth="1.5" />
            <text x="10" y="18" className="svg-text-primary" fill="#F5F3FA" fontSize="11" fontFamily="Inter" fontWeight="600">Legitimate Traffic</text>
            <text x="10" y="32" fill="#DB2777" fontSize="9" fontFamily="Inter" fontWeight="600">HTTP / HTTPS / API</text>
          </g>

          {/* Layer 7 Application Attack Node (Amber alert) */}
          <g transform="translate(10, 210)">
            <rect x="0" y="0" width="135" height="44" rx="4" className="svg-inner-box" fill="#0E0B1A" stroke="#F2A623" strokeWidth="1" strokeOpacity="0.8" />
            <text x="10" y="18" fill="#F2A623" fontSize="11" fontFamily="Inter" fontWeight="600">Protocol Floods</text>
            <text x="10" y="32" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">L7 Exhaustion / Bots</text>
          </g>

          {/* Complex Malformed Packets Node (Amber alert) */}
          <g transform="translate(10, 280)">
            <rect x="0" y="0" width="135" height="44" rx="4" className="svg-inner-box" fill="#0E0B1A" stroke="#F2A623" strokeWidth="1" strokeOpacity="0.8" />
            <text x="10" y="18" fill="#F2A623" fontSize="11" fontFamily="Inter" fontWeight="600">State Exhaustion</text>
            <text x="10" y="32" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">TCP Fragmentation</text>
          </g>
        </g>

        {/* INCOMING TRAFFIC LINES TOWARDS AXTRO SCRUBBING EDGE */}
        <path d="M175 132 L315 240" stroke="#F2A623" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />
        <path d="M175 132 L315 240" stroke="#F2A623" strokeWidth="1" strokeDasharray="4 6" className="animate-flow-dash-fast" />

        {/* Clean Line 2 -> Passes through */}
        <path d="M175 202 L315 240" stroke="#DB2777" strokeWidth="2.5" />
        <path d="M175 202 L315 240" stroke="#F5F3FA" strokeWidth="1.5" strokeDasharray="6 12" className="animate-flow-dash" />

        <path d="M175 272 L315 240" stroke="#F2A623" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />
        <path d="M175 272 L315 240" stroke="#F2A623" strokeWidth="1" strokeDasharray="4 6" className="animate-flow-dash-fast" />

        <path d="M175 342 L315 240" stroke="#F2A623" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />
        <path d="M175 342 L315 240" stroke="#F2A623" strokeWidth="1" strokeDasharray="4 6" className="animate-flow-dash-fast" />

        {/* SECTION 2: AXTRO NETWORK SCRUBBING & ANALYSIS (Center) */}
        <g transform="translate(315, 60)">
          <rect x="0" y="0" width="230" height="360" rx="8" className="svg-card-bg" fill="#0E0B1A" stroke="#DB2777" strokeWidth="1.5" />
          <rect x="8" y="8" width="214" height="344" rx="6" className="svg-inner-box" fill="#17132A" stroke="#2C2645" strokeWidth="1" />

          {/* Header */}
          <text x="16" y="32" fill="#DB2777" fontSize="10" fontFamily="Space Grotesk" fontWeight="700" letterSpacing="1">
            AXTRO SCRUBBING EDGE
          </text>
          <text x="16" y="46" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">
            AI Heuristic & Anycast Filter
          </text>

          {/* Scrubbing Stage 1: BGP Anycast Routing */}
          <g transform="translate(16, 62)">
            <rect x="0" y="0" width="182" height="52" rx="4" className="svg-tag-bg" fill="#0E0B1A" stroke="#2C2645" strokeWidth="1" />
            <text x="10" y="18" className="svg-text-primary" fill="#F5F3FA" fontSize="11" fontFamily="Inter" fontWeight="600">1. Anycast Ingestion</text>
            <text x="10" y="32" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">Tbps distributed capacity absorb</text>
            <text x="10" y="44" fill="#DB2777" fontSize="8" fontFamily="Inter" fontWeight="600">STATUS: ACTIVE INGESTION</text>
          </g>

          {/* Scrubbing Stage 2: Hardware Packet Inspection */}
          <g transform="translate(16, 126)">
            <rect x="0" y="0" width="182" height="52" rx="4" className="svg-tag-bg" fill="#0E0B1A" stroke="#2C2645" strokeWidth="1" />
            <text x="10" y="18" className="svg-text-primary" fill="#F5F3FA" fontSize="11" fontFamily="Inter" fontWeight="600">2. Deep Packet Inspection</text>
            <text x="10" y="32" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">Silicon-level signature check</text>
            <text x="10" y="44" fill="#DB2777" fontSize="8" fontFamily="Inter" fontWeight="600">ZERO LATENCY OVERHEAD</text>
          </g>

          {/* Scrubbing Stage 3: Layer 7 Behavioral Engine */}
          <g transform="translate(16, 190)">
            <rect x="0" y="0" width="182" height="52" rx="4" className="svg-tag-bg" fill="#0E0B1A" stroke="#2C2645" strokeWidth="1" />
            <text x="10" y="18" className="svg-text-primary" fill="#F5F3FA" fontSize="11" fontFamily="Inter" fontWeight="600">3. L7 Behavioral Engine</text>
            <text x="10" y="32" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">Botnet & API flood challenge</text>
            <text x="10" y="44" fill="#DB2777" fontSize="8" fontFamily="Inter" fontWeight="600">100% AUTOMATED MITIGATION</text>
          </g>

          {/* Dropped Attack Telemetry Pill (Amber Alert Highlight) */}
          <g transform="translate(16, 260)">
            <rect x="0" y="0" width="182" height="66" rx="4" className="svg-inner-box" fill="#0E0B1A" stroke="#F2A623" strokeWidth="1" />
            <text x="10" y="18" fill="#F2A623" fontSize="9" fontFamily="Space Grotesk" fontWeight="700">MITIGATION SUMMARY</text>
            <text x="10" y="34" fill="#F5F3FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">4.8 Tbps Malicious Dropped</text>
            <text x="10" y="52" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">Clean throughput passed seamlessly</text>
          </g>
        </g>

        {/* SINKHOLE ROUTE (Downwards towards blackhole) */}
        <path d="M430 420 L430 450" stroke="#F2A623" strokeWidth="2" strokeDasharray="3 3" strokeOpacity="0.5" />
        <path d="M430 420 L430 450" stroke="#F2A623" strokeWidth="1.5" strokeDasharray="4 6" className="animate-flow-dash" />

        {/* SECTION 3: CLEAN FORWARDING TRAFFIC (Right side) */}
        {/* Output route line */}
        <path d="M545 240 L660 240" stroke="#DB2777" strokeWidth="3" />
        <path d="M545 240 L660 240" stroke="#F5F3FA" strokeWidth="1.5" strokeDasharray="6 10" className="animate-flow-dash" />

        <g transform="translate(660, 140)">
          <text x="0" y="20" className="svg-text-secondary" fill="#9C94B8" fontSize="10.5" fontFamily="Space Grotesk" letterSpacing="1" fontWeight="600">
            03 / CLEAN PROTECTED EGRESS
          </text>

          {/* Customer Infrastructure Target */}
          <g transform="translate(0, 40)">
            <rect x="0" y="0" width="160" height="150" rx="6" className="svg-card-bg" fill="#0E0B1A" stroke="#DB2777" strokeWidth="1.5" />
            
            <circle cx="80" cy="40" r="18" className="svg-inner-box" fill="#17132A" stroke="#DB2777" strokeWidth="1.5" />
            <circle cx="80" cy="40" r="4" fill="#DB2777" />

            <text x="80" y="74" className="svg-text-primary" fill="#F5F3FA" fontSize="12" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">
              CUSTOMER SERVER
            </text>
            <text x="80" y="88" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter" textAnchor="middle">
              BGP Direct Egress
            </text>

            <line x1="20" y1="104" x2="140" y2="104" stroke="#2C2645" strokeWidth="1" className="svg-border" />
            <text x="80" y="122" fill="#DB2777" fontSize="9" fontFamily="Inter" textAnchor="middle" fontWeight="700">
              0.00% Packet Loss
            </text>
            <text x="80" y="136" className="svg-text-secondary" fill="#9C94B8" fontSize="8" fontFamily="Inter" textAnchor="middle">
              Latency: &lt; 0.8ms added
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default DDoSTrafficFlow;
