import React from 'react';

interface IPTransitBackboneProps {
  className?: string;
}

export function IPTransitBackbone({ className = '' }: IPTransitBackboneProps) {
  return (
    <div className={`w-full relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 900 460"
        className="w-full h-auto max-w-4xl overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="10" y="10" width="880" height="440" rx="16" className="svg-card-bg" fill="#17132A" stroke="#2C2645" strokeWidth="1" />

        {/* 1. CUSTOMER ASN INGRESS */}
        <g transform="translate(50, 150)">
          <rect x="0" y="0" width="160" height="160" rx="6" className="svg-inner-box" fill="#0E0B1A" stroke="#2C2645" strokeWidth="1" />
          <circle cx="80" cy="40" r="18" className="svg-card-bg" fill="#1F1938" stroke="#DB2777" strokeWidth="1.5" />
          <circle cx="80" cy="40" r="4" fill="#DB2777" />

          <text x="80" y="76" className="svg-text-primary" fill="#F5F3FA" fontSize="12" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">
            CUSTOMER ASN
          </text>
          <text x="80" y="92" className="svg-text-secondary" fill="#9C94B8" fontSize="10" fontFamily="Inter" textAnchor="middle">
            Direct BGP Peering
          </text>

          <line x1="20" y1="110" x2="140" y2="110" stroke="#2C2645" strokeWidth="1" className="svg-border" />
          <text x="80" y="130" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter" textAnchor="middle">
            Dual BGP Sessions
          </text>
          <text x="80" y="144" fill="#DB2777" fontSize="9" fontFamily="Inter" textAnchor="middle" fontWeight="600">
            Full IPv4 + IPv6 Table
          </text>
        </g>

        {/* Ingress Route Arrow */}
        <path d="M210 230 L320 230" stroke="#DB2777" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M210 230 L320 230" stroke="#DB2777" strokeWidth="1.5" strokeDasharray="6 10" className="animate-flow-dash" />

        {/* 2. AXTRO CORE BACKBONE */}
        <g transform="translate(320, 70)">
          <rect x="0" y="0" width="260" height="320" rx="8" className="svg-card-bg" fill="#0E0B1A" stroke="#DB2777" strokeWidth="1.5" />
          
          <text x="130" y="36" className="svg-text-primary" fill="#F5F3FA" fontSize="14" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle" letterSpacing="1">
            AXTRO BACKBONE
          </text>
          <text x="130" y="52" className="svg-text-secondary" fill="#9C94B8" fontSize="10" fontFamily="Inter" textAnchor="middle">
            High-Capacity Anycast Transit
          </text>

          <line x1="20" y1="68" x2="240" y2="68" stroke="#2C2645" strokeWidth="1" className="svg-border" />

          {/* Delhi POP */}
          <g transform="translate(20, 85)">
            <rect x="0" y="0" width="220" height="54" rx="4" className="svg-inner-box" fill="#17132A" stroke="#2C2645" />
            <text x="14" y="22" className="svg-text-primary" fill="#F5F3FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">DELHI (Yotta D1)</text>
            <text x="14" y="38" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">Direct Tier-1 Upstreams • 100G Port</text>
            <circle cx="204" cy="27" r="4" fill="#DB2777" />
          </g>

          {/* Mumbai POP */}
          <g transform="translate(20, 155)">
            <rect x="0" y="0" width="220" height="54" rx="4" className="svg-inner-box" fill="#17132A" stroke="#2C2645" />
            <text x="14" y="22" className="svg-text-primary" fill="#F5F3FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">MUMBAI (Connect IX)</text>
            <text x="14" y="38" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">Subsea Cable Landings • High Bandwidth</text>
            <circle cx="204" cy="27" r="4" fill="#DB2777" />
          </g>

          {/* Chennai POP */}
          <g transform="translate(20, 225)">
            <rect x="0" y="0" width="220" height="54" rx="4" className="svg-inner-box" fill="#17132A" stroke="#2C2645" />
            <text x="14" y="22" className="svg-text-primary" fill="#F5F3FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">CHENNAI (Connect IX)</text>
            <text x="14" y="38" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">APAC Gateway • Direct Singapore Trunks</text>
            <circle cx="204" cy="27" r="4" fill="#DB2777" />
          </g>

          <text x="130" y="302" fill="#DB2777" fontSize="9" fontFamily="Inter" fontWeight="700" textAnchor="middle">
            ACTIVE FULL-MESH OPTICAL INTERCONNECT
          </text>
        </g>

        {/* Egress Routes to Global Peers */}
        <path d="M580 180 L690 140" stroke="#DB2777" strokeWidth="2" strokeLinecap="round" />
        <path d="M580 180 L690 140" stroke="#DB2777" strokeWidth="1.2" strokeDasharray="4 8" className="animate-flow-dash" />

        <path d="M580 230 L690 230" stroke="#DB2777" strokeWidth="2" strokeLinecap="round" />
        <path d="M580 230 L690 230" stroke="#DB2777" strokeWidth="1.2" strokeDasharray="4 8" className="animate-flow-dash" />

        <path d="M580 280 L690 320" stroke="#DB2777" strokeWidth="2" strokeLinecap="round" />
        <path d="M580 280 L690 320" stroke="#DB2777" strokeWidth="1.2" strokeDasharray="4 8" className="animate-flow-dash" />

        {/* 3. GLOBAL TIER-1 UPSTREAMS & CDNs */}
        <g transform="translate(690, 80)">
          <rect x="0" y="0" width="160" height="300" rx="8" className="svg-inner-box" fill="#0E0B1A" stroke="#2C2645" strokeWidth="1" />
          
          <text x="80" y="30" className="svg-text-primary" fill="#F5F3FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">
            GLOBAL PEERS
          </text>
          <text x="80" y="44" className="svg-text-secondary" fill="#9C94B8" fontSize="8" fontFamily="Inter" textAnchor="middle">
            Tier-1 Upstreams & IX
          </text>

          <g transform="translate(15, 60)">
            <rect x="0" y="0" width="130" height="42" rx="4" className="svg-card-bg" fill="#17132A" stroke="#2C2645" />
            <text x="10" y="18" className="svg-text-primary" fill="#F5F3FA" fontSize="10" fontFamily="Inter" fontWeight="600">Lumen / CenturyLink</text>
            <text x="10" y="30" className="svg-text-secondary" fill="#9C94B8" fontSize="8" fontFamily="Inter">AS3356 Direct</text>
          </g>

          <g transform="translate(15, 115)">
            <rect x="0" y="0" width="130" height="42" rx="4" className="svg-card-bg" fill="#17132A" stroke="#2C2645" />
            <text x="10" y="18" className="svg-text-primary" fill="#F5F3FA" fontSize="10" fontFamily="Inter" fontWeight="600">NTT Communications</text>
            <text x="10" y="30" className="svg-text-secondary" fill="#9C94B8" fontSize="8" fontFamily="Inter">AS2914 Direct</text>
          </g>

          <g transform="translate(15, 170)">
            <rect x="0" y="0" width="130" height="42" rx="4" className="svg-card-bg" fill="#17132A" stroke="#2C2645" />
            <text x="10" y="18" className="svg-text-primary" fill="#F5F3FA" fontSize="10" fontFamily="Inter" fontWeight="600">Telia / Arelion</text>
            <text x="10" y="30" className="svg-text-secondary" fill="#9C94B8" fontSize="8" fontFamily="Inter">AS1299 Direct</text>
          </g>

          <g transform="translate(15, 225)">
            <rect x="0" y="0" width="130" height="42" rx="4" className="svg-tag-bg" fill="#17132A" stroke="#DB2777" strokeWidth="1" />
            <text x="10" y="18" fill="#DB2777" fontSize="10" fontFamily="Inter" fontWeight="700">Connect IX / NIXI</text>
            <text x="10" y="30" className="svg-text-secondary" fill="#9C94B8" fontSize="8" fontFamily="Inter">100G Direct Peering</text>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default IPTransitBackbone;
