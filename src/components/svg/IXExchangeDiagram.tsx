import React from 'react';

export function IXExchangeDiagram() {
  return (
    <div className="w-full relative flex items-center justify-center p-2 sm:p-6 select-none">
      <svg
        viewBox="0 0 840 540"
        className="w-full h-auto max-w-4xl overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="ixGridIndigo" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#17263A" strokeWidth="0.5" strokeOpacity="0.4" />
          </pattern>
        </defs>

        <rect x="10" y="10" width="820" height="520" rx="8" fill="#07101C" stroke="#17263A" strokeWidth="1" />
        <rect x="10" y="10" width="820" height="520" rx="8" fill="url(#ixGridIndigo)" />

        {/* Central IX Fabric Concentric Rings */}
        <circle cx="420" cy="270" r="180" stroke="#17263A" strokeWidth="1" strokeDasharray="3 6" />
        <circle cx="420" cy="270" r="120" stroke="#17263A" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.8" />
        <circle cx="420" cy="270" r="80" fill="#030507" stroke="#245FA8" strokeWidth="2" />

        {/* Mesh interconnections between all peer blocks */}
        <path d="M420 90 L630 190" stroke="#17263A" strokeWidth="1" strokeDasharray="2 4" />
        <path d="M630 190 L570 410" stroke="#17263A" strokeWidth="1" strokeDasharray="2 4" />
        <path d="M570 410 L270 410" stroke="#17263A" strokeWidth="1" strokeDasharray="2 4" />
        <path d="M270 410 L210 190" stroke="#17263A" strokeWidth="1" strokeDasharray="2 4" />
        <path d="M210 190 L420 90" stroke="#17263A" strokeWidth="1" strokeDasharray="2 4" />

        {/* Direct Interconnects to IX Central Fabric */}
        <path d="M420 90 L420 190" stroke="#245FA8" strokeWidth="2" strokeLinecap="round" />
        <path d="M420 90 L420 190" stroke="#F5F7FA" strokeWidth="1.5" strokeDasharray="4 8" className="animate-flow-dash" />

        <path d="M630 190 L490 240" stroke="#245FA8" strokeWidth="2" strokeLinecap="round" />
        <path d="M630 190 L490 240" stroke="#F5F7FA" strokeWidth="1.5" strokeDasharray="4 8" className="animate-flow-dash" />

        <path d="M570 410 L470 330" stroke="#245FA8" strokeWidth="2" strokeLinecap="round" />
        <path d="M570 410 L470 330" stroke="#F5F7FA" strokeWidth="1.5" strokeDasharray="4 8" className="animate-flow-dash" />

        <path d="M270 410 L370 330" stroke="#245FA8" strokeWidth="2" strokeLinecap="round" />
        <path d="M270 410 L370 330" stroke="#F5F7FA" strokeWidth="1.5" strokeDasharray="4 8" className="animate-flow-dash" />

        <path d="M210 190 L350 240" stroke="#245FA8" strokeWidth="2" strokeLinecap="round" />
        <path d="M210 190 L350 240" stroke="#F5F7FA" strokeWidth="1.5" strokeDasharray="4 8" className="animate-flow-dash" />

        {/* 1. NODE: TOP - ISPs & TELCOS */}
        <g transform="translate(340, 50)">
          <rect x="0" y="0" width="160" height="52" rx="4" fill="#030507" stroke="#17263A" />
          <text x="14" y="20" fill="#F5F7FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">ISPs & TELCOS</text>
          <text x="14" y="36" fill="#A7B0BE" fontSize="9" fontFamily="Inter">Direct Eyeball Peering</text>
          <circle cx="146" cy="26" r="3.5" fill="#245FA8" />
        </g>

        {/* 2. NODE: TOP RIGHT - CLOUD PLATFORMS */}
        <g transform="translate(560, 160)">
          <rect x="0" y="0" width="160" height="52" rx="4" fill="#030507" stroke="#17263A" />
          <text x="14" y="20" fill="#F5F7FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">CLOUD PLATFORMS</text>
          <text x="14" y="36" fill="#A7B0BE" fontSize="9" fontFamily="Inter">AWS • Google • Azure</text>
          <circle cx="146" cy="26" r="3.5" fill="#245FA8" />
        </g>

        {/* 3. NODE: BOTTOM RIGHT - CONTENT & CDNs */}
        <g transform="translate(510, 390)">
          <rect x="0" y="0" width="160" height="52" rx="4" fill="#030507" stroke="#17263A" />
          <text x="14" y="20" fill="#F5F7FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">CONTENT & CDNs</text>
          <text x="14" y="36" fill="#A7B0BE" fontSize="9" fontFamily="Inter">Media & High-Bandwidth</text>
          <circle cx="146" cy="26" r="3.5" fill="#245FA8" />
        </g>

        {/* 4. NODE: BOTTOM LEFT - ENTERPRISES & FINTECH */}
        <g transform="translate(190, 390)">
          <rect x="0" y="0" width="160" height="52" rx="4" fill="#030507" stroke="#17263A" />
          <text x="14" y="20" fill="#F5F7FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">ENTERPRISES</text>
          <text x="14" y="36" fill="#A7B0BE" fontSize="9" fontFamily="Inter">BFSI & Corporate Mesh</text>
          <circle cx="146" cy="26" r="3.5" fill="#245FA8" />
        </g>

        {/* 5. NODE: TOP LEFT - HOSTING & GAMING */}
        <g transform="translate(120, 160)">
          <rect x="0" y="0" width="160" height="52" rx="4" fill="#030507" stroke="#17263A" />
          <text x="14" y="20" fill="#F5F7FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">HOSTING & GAMING</text>
          <text x="14" y="36" fill="#A7B0BE" fontSize="9" fontFamily="Inter">Ultra-Low Latency</text>
          <circle cx="146" cy="26" r="3.5" fill="#245FA8" />
        </g>

        {/* Central Hub Details */}
        <g transform="translate(420, 270)">
          <circle cx="0" cy="0" r="42" fill="#07101C" stroke="#17263A" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="16" fill="#245FA8" />
          <circle cx="0" cy="0" r="5" fill="#030507" />
          <text x="0" y="60" fill="#F5F7FA" fontSize="12" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">
            CONNECT IX FABRIC
          </text>
          <text x="0" y="74" fill="#245FA8" fontSize="9" fontFamily="Inter" fontWeight="600" textAnchor="middle">
            100G LINE-RATE PEERING
          </text>
        </g>
      </svg>
    </div>
  );
}

export default IXExchangeDiagram;
