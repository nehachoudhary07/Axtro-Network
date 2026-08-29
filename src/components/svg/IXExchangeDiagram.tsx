import React from 'react';

interface IXExchangeDiagramProps {
  className?: string;
}

export function IXExchangeDiagram({ className = '' }: IXExchangeDiagramProps) {
  return (
    <div className={`w-full relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 840 540"
        className="w-full h-auto max-w-4xl overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="10" y="10" width="820" height="520" rx="16" className="svg-card-bg" fill="#17132A" stroke="#2C2645" strokeWidth="1" />

        {/* Central IX Fabric Concentric Rings */}
        <circle cx="420" cy="270" r="180" stroke="#2C2645" strokeWidth="1" strokeDasharray="3 6" opacity="0.4" />
        <circle cx="420" cy="270" r="120" stroke="#2C2645" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.5" />
        <circle cx="420" cy="270" r="80" className="svg-hub-center" fill="#0E0B1A" stroke="#DB2777" strokeWidth="2" />

        {/* Mesh interconnections between all peer blocks */}
        <path d="M420 90 L630 190" stroke="#2C2645" strokeWidth="1" strokeDasharray="2 4" className="svg-grid-line" />
        <path d="M630 190 L570 410" stroke="#2C2645" strokeWidth="1" strokeDasharray="2 4" className="svg-grid-line" />
        <path d="M570 410 L270 410" stroke="#2C2645" strokeWidth="1" strokeDasharray="2 4" className="svg-grid-line" />
        <path d="M270 410 L210 190" stroke="#2C2645" strokeWidth="1" strokeDasharray="2 4" className="svg-grid-line" />
        <path d="M210 190 L420 90" stroke="#2C2645" strokeWidth="1" strokeDasharray="2 4" className="svg-grid-line" />

        {/* Direct Interconnects to IX Central Fabric */}
        <path d="M420 90 L420 190" stroke="#DB2777" strokeWidth="2" strokeLinecap="round" />
        <path d="M420 90 L420 190" stroke="#DB2777" strokeWidth="1.5" strokeDasharray="4 8" className="animate-flow-dash" />

        <path d="M630 190 L490 240" stroke="#DB2777" strokeWidth="2" strokeLinecap="round" />
        <path d="M630 190 L490 240" stroke="#DB2777" strokeWidth="1.5" strokeDasharray="4 8" className="animate-flow-dash" />

        <path d="M570 410 L470 330" stroke="#DB2777" strokeWidth="2" strokeLinecap="round" />
        <path d="M570 410 L470 330" stroke="#DB2777" strokeWidth="1.5" strokeDasharray="4 8" className="animate-flow-dash" />

        <path d="M270 410 L370 330" stroke="#DB2777" strokeWidth="2" strokeLinecap="round" />
        <path d="M270 410 L370 330" stroke="#DB2777" strokeWidth="1.5" strokeDasharray="4 8" className="animate-flow-dash" />

        <path d="M210 190 L350 240" stroke="#DB2777" strokeWidth="2" strokeLinecap="round" />
        <path d="M210 190 L350 240" stroke="#DB2777" strokeWidth="1.5" strokeDasharray="4 8" className="animate-flow-dash" />

        {/* 1. NODE: TOP - ISPs & TELCOS */}
        <g transform="translate(340, 50)">
          <rect x="0" y="0" width="160" height="52" rx="4" className="svg-inner-box" fill="#0E0B1A" stroke="#2C2645" />
          <text x="14" y="20" className="svg-text-primary" fill="#F5F3FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">ISPs & TELCOS</text>
          <text x="14" y="36" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">Direct Eyeball Peering</text>
          <circle cx="146" cy="26" r="3.5" fill="#DB2777" />
        </g>

        {/* 2. NODE: TOP RIGHT - CLOUD PLATFORMS */}
        <g transform="translate(560, 160)">
          <rect x="0" y="0" width="160" height="52" rx="4" className="svg-inner-box" fill="#0E0B1A" stroke="#2C2645" />
          <text x="14" y="20" className="svg-text-primary" fill="#F5F3FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">CLOUD PLATFORMS</text>
          <text x="14" y="36" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">AWS • Google • Azure</text>
          <circle cx="146" cy="26" r="3.5" fill="#DB2777" />
        </g>

        {/* 3. NODE: BOTTOM RIGHT - CONTENT & CDNs */}
        <g transform="translate(510, 390)">
          <rect x="0" y="0" width="160" height="52" rx="4" className="svg-inner-box" fill="#0E0B1A" stroke="#2C2645" />
          <text x="14" y="20" className="svg-text-primary" fill="#F5F3FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">CONTENT & CDNs</text>
          <text x="14" y="36" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">Media & High-Bandwidth</text>
          <circle cx="146" cy="26" r="3.5" fill="#DB2777" />
        </g>

        {/* 4. NODE: BOTTOM LEFT - ENTERPRISES & FINTECH */}
        <g transform="translate(190, 390)">
          <rect x="0" y="0" width="160" height="52" rx="4" className="svg-inner-box" fill="#0E0B1A" stroke="#2C2645" />
          <text x="14" y="20" className="svg-text-primary" fill="#F5F3FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">ENTERPRISES</text>
          <text x="14" y="36" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">BFSI & Corporate Mesh</text>
          <circle cx="146" cy="26" r="3.5" fill="#DB2777" />
        </g>

        {/* 5. NODE: TOP LEFT - HOSTING & GAMING */}
        <g transform="translate(120, 160)">
          <rect x="0" y="0" width="160" height="52" rx="4" className="svg-inner-box" fill="#0E0B1A" stroke="#2C2645" />
          <text x="14" y="20" className="svg-text-primary" fill="#F5F3FA" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">HOSTING & GAMING</text>
          <text x="14" y="36" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter">Ultra-Low Latency</text>
          <circle cx="146" cy="26" r="3.5" fill="#DB2777" />
        </g>

        {/* Central Hub Details */}
        <g transform="translate(420, 270)">
          <circle cx="0" cy="0" r="42" className="svg-card-bg" fill="#17132A" stroke="#2C2645" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="16" fill="#DB2777" />
          <circle cx="0" cy="0" r="5" fill="#FFFFFF" />
          <text x="0" y="60" className="svg-text-primary" fill="#F5F3FA" fontSize="12" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">
            CONNECT IX FABRIC
          </text>
          <text x="0" y="74" fill="#DB2777" fontSize="9" fontFamily="Inter" fontWeight="600" textAnchor="middle">
            100G LINE-RATE PEERING
          </text>
        </g>
      </svg>
    </div>
  );
}

export default IXExchangeDiagram;
