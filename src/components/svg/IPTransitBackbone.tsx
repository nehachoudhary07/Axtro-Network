import React from 'react';

export function IPTransitBackbone() {
  return (
    <div className="w-full relative flex items-center justify-center p-2 sm:p-6 select-none">
      <svg
        viewBox="0 0 900 460"
        className="w-full h-auto max-w-4xl overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="transitGridIndigo" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#17263A" strokeWidth="0.5" strokeOpacity="0.4" />
          </pattern>
        </defs>

        <rect x="10" y="10" width="880" height="440" rx="8" fill="#07101C" stroke="#17263A" strokeWidth="1" />
        <rect x="10" y="10" width="880" height="440" rx="8" fill="url(#transitGridIndigo)" />

        {/* 1. CUSTOMER ASN INGRESS */}
        <g transform="translate(50, 150)">
          <rect x="0" y="0" width="160" height="160" rx="6" fill="#030507" stroke="#17263A" strokeWidth="1" />
          <circle cx="80" cy="40" r="18" fill="#17263A" stroke="#245FA8" strokeWidth="1.5" />
          <circle cx="80" cy="40" r="4" fill="#245FA8" />

          <text x="80" y="76" fill="#F5F7FA" fontSize="12" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">
            CUSTOMER ASN
          </text>
          <text x="80" y="92" fill="#A7B0BE" fontSize="10" fontFamily="Inter" textAnchor="middle">
            Direct BGP Peering
          </text>

          <line x1="20" y1="110" x2="140" y2="110" stroke="#17263A" strokeWidth="1" />
          <text x="80" y="130" fill="#A7B0BE" fontSize="9" fontFamily="Inter" textAnchor="middle">
            Dual BGP Sessions
          </text>
          <text x="80" y="144" fill="#245FA8" fontSize="9" fontFamily="Inter" textAnchor="middle" fontWeight="600">
            Full IPv4 + IPv6 Table
          </text>
        </g>

        {/* Ingress Route Arrow */}
        <path d="M210 230 L320 230" stroke="#245FA8" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M210 230 L320 230" stroke="#F5F7FA" strokeWidth="1.5" strokeDasharray="6 10" className="animate-flow-dash" />

        {/* 2. AXTRO CORE BACKBONE */}
        <g transform="translate(320, 70)">
          <rect x="0" y="0" width="260" height="320" rx="8" fill="#030507" stroke="#245FA8" strokeWidth="1.5" />
          
          <text x="130" y="36" fill="#F5F7FA" fontSize="14" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle" letterSpacing="1">
            AXTRO BACKBONE
          </text>
          <text x="130" y="52" fill="#A7B0BE" fontSize="10" fontFamily="Inter" textAnchor="middle">
            High-Capacity Anycast Transit
          </text>

          <line x1="20" y1="68" x2="240" y2="68" stroke="#17263A" strokeWidth="1" />

          {/* Delhi POP */}
          <g transform="translate(20, 85)">
            <rect x="0" y="0" width="220" height="54" rx="4" fill="#07101C" stroke="#17263A" />
            <text x="14" y="22" fill="#F5F7FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">DELHI (Yotta D1)</text>
            <text x="14" y="38" fill="#A7B0BE" fontSize="9" fontFamily="Inter">Direct Tier-1 Upstreams • 100G Port</text>
            <circle cx="204" cy="27" r="4" fill="#245FA8" />
          </g>

          {/* Mumbai POP */}
          <g transform="translate(20, 155)">
            <rect x="0" y="0" width="220" height="54" rx="4" fill="#07101C" stroke="#17263A" />
            <text x="14" y="22" fill="#F5F7FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">MUMBAI (Connect IX)</text>
            <text x="14" y="38" fill="#A7B0BE" fontSize="9" fontFamily="Inter">Subsea Cable Landings • High Bandwidth</text>
            <circle cx="204" cy="27" r="4" fill="#245FA8" />
          </g>

          {/* Chennai POP */}
          <g transform="translate(20, 225)">
            <rect x="0" y="0" width="220" height="54" rx="4" fill="#07101C" stroke="#17263A" />
            <text x="14" y="22" fill="#F5F7FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">CHENNAI (Connect IX)</text>
            <text x="14" y="38" fill="#A7B0BE" fontSize="9" fontFamily="Inter">APAC Gateway • Direct Singapore Trunks</text>
            <circle cx="204" cy="27" r="4" fill="#245FA8" />
          </g>

          <text x="130" y="302" fill="#245FA8" fontSize="9" fontFamily="Inter" fontWeight="700" textAnchor="middle">
            ACTIVE FULL-MESH OPTICAL INTERCONNECT
          </text>
        </g>

        {/* Egress Routes to Global Peers */}
        <path d="M580 180 L690 140" stroke="#245FA8" strokeWidth="2" strokeLinecap="round" />
        <path d="M580 180 L690 140" stroke="#F5F7FA" strokeWidth="1.2" strokeDasharray="4 8" className="animate-flow-dash" />

        <path d="M580 230 L690 230" stroke="#245FA8" strokeWidth="2" strokeLinecap="round" />
        <path d="M580 230 L690 230" stroke="#F5F7FA" strokeWidth="1.2" strokeDasharray="4 8" className="animate-flow-dash" />

        <path d="M580 280 L690 320" stroke="#245FA8" strokeWidth="2" strokeLinecap="round" />
        <path d="M580 280 L690 320" stroke="#F5F7FA" strokeWidth="1.2" strokeDasharray="4 8" className="animate-flow-dash" />

        {/* 3. GLOBAL TIER-1 UPSTREAMS & CDNs */}
        <g transform="translate(690, 80)">
          {/* Tier 1 Global Upstreams */}
          <g transform="translate(0, 20)">
            <rect x="0" y="0" width="160" height="60" rx="4" fill="#030507" stroke="#17263A" />
            <text x="14" y="24" fill="#F5F7FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">Tier-1 Carriers</text>
            <text x="14" y="42" fill="#A7B0BE" fontSize="9" fontFamily="Inter">Global Deterministic Reach</text>
          </g>

          {/* Major Cloud & Hyperscalers */}
          <g transform="translate(0, 110)">
            <rect x="0" y="0" width="160" height="60" rx="4" fill="#030507" stroke="#17263A" />
            <text x="14" y="24" fill="#F5F7FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">Hyperscalers</text>
            <text x="14" y="42" fill="#A7B0BE" fontSize="9" fontFamily="Inter">AWS • GCP • Azure • Cloudflare</text>
          </g>

          {/* Connect IX & Internet Exchanges */}
          <g transform="translate(0, 200)">
            <rect x="0" y="0" width="160" height="60" rx="4" fill="#030507" stroke="#17263A" />
            <text x="14" y="24" fill="#F5F7FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">IX Exchanges</text>
            <text x="14" y="42" fill="#A7B0BE" fontSize="9" fontFamily="Inter">Connect IX • NIXI • Extreme IX</text>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default IPTransitBackbone;
