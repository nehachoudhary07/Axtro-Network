import React from 'react';

interface LeasedLineDedicatedPathProps {
  className?: string;
}

export function LeasedLineDedicatedPath({ className = '' }: LeasedLineDedicatedPathProps) {
  return (
    <div className={`w-full relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 860 380"
        className="w-full h-auto max-w-4xl overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="10" y="10" width="840" height="360" rx="16" className="svg-card-bg" fill="#17132A" stroke="#2C2645" strokeWidth="1" />

        {/* SECTION A: LOCATION A (Headquarters / Data Center) */}
        <g transform="translate(40, 100)">
          <rect x="0" y="0" width="200" height="180" rx="6" className="svg-inner-box" fill="#0E0B1A" stroke="#2C2645" strokeWidth="1" />
          <circle cx="100" cy="45" r="18" className="svg-card-bg" fill="#1F1938" stroke="#DB2777" strokeWidth="1.5" />
          <circle cx="100" cy="45" r="5" fill="#DB2777" />

          <text x="100" y="82" className="svg-text-primary" fill="#F5F3FA" fontSize="12" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">
            LOCATION A
          </text>
          <text x="100" y="98" className="svg-text-secondary" fill="#9C94B8" fontSize="10" fontFamily="Inter" textAnchor="middle">
            Enterprise HQ / DC Primary
          </text>

          <line x1="20" y1="116" x2="180" y2="116" stroke="#2C2645" strokeWidth="1" className="svg-border" />

          <text x="100" y="138" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter" textAnchor="middle">
            100% Uncontended 1:1 Bandwidth
          </text>
          <text x="100" y="154" fill="#DB2777" fontSize="9" fontFamily="Inter" textAnchor="middle" fontWeight="600">
            Dedicated Dark Fiber Interface
          </text>
        </g>

        {/* DEDICATED HIGH-SPEED DUAL-FIBER CONDUIT */}
        {/* Upper Active Fiber Path */}
        <path d="M240 160 L380 160 L480 160 L620 160" stroke="#DB2777" strokeWidth="3" strokeLinecap="round" />
        <path d="M240 160 L620 160" stroke="#DB2777" strokeWidth="1.5" strokeDasharray="8 12" className="animate-flow-dash" />

        {/* Lower Protection Fiber Path (Standby Ring) */}
        <path d="M240 220 L380 220 L480 220 L620 220" stroke="#2C2645" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" className="svg-border" />
        <path d="M240 220 L620 220" stroke="#9C94B8" strokeWidth="1" strokeDasharray="4 8" className="animate-flow-dash-fast" />

        {/* SECTION B: AXTRO DEDICATED OPTICAL AXIS (Center Hub) */}
        <g transform="translate(350, 70)">
          <rect x="0" y="0" width="160" height="240" rx="8" className="svg-card-bg" fill="#0E0B1A" stroke="#DB2777" strokeWidth="1.5" />
          
          <text x="80" y="32" className="svg-text-primary" fill="#F5F3FA" fontSize="13" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle" letterSpacing="1">
            AXTRO AXIS
          </text>
          <text x="80" y="48" className="svg-text-secondary" fill="#9C94B8" fontSize="10" fontFamily="Inter" textAnchor="middle">
            Direct Optical Transport
          </text>

          <line x1="15" y1="62" x2="145" y2="62" stroke="#2C2645" strokeWidth="1" className="svg-border" />

          {/* Optical Matrix Switch */}
          <g transform="translate(20, 80)">
            <rect x="0" y="0" width="120" height="40" rx="4" className="svg-inner-box" fill="#17132A" stroke="#2C2645" />
            <text x="60" y="20" className="svg-text-primary" fill="#F5F3FA" fontSize="10" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">DWDM LAMBDA</text>
            <text x="60" y="32" className="svg-text-secondary" fill="#9C94B8" fontSize="8" fontFamily="Inter" textAnchor="middle">&lt;1ms Local Jitter</text>
          </g>

          <g transform="translate(20, 130)">
            <rect x="0" y="0" width="120" height="40" rx="4" className="svg-inner-box" fill="#17132A" stroke="#2C2645" />
            <text x="60" y="20" className="svg-text-primary" fill="#F5F3FA" fontSize="10" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">AUTO-FAILOVER</text>
            <text x="60" y="32" fill="#DB2777" fontSize="8" fontFamily="Inter" textAnchor="middle" fontWeight="600">&lt;50ms Protection</text>
          </g>

          <text x="80" y="210" fill="#DB2777" fontSize="9" fontFamily="Inter" fontWeight="700" textAnchor="middle">
            ZERO PACKET SHARING
          </text>
        </g>

        {/* SECTION C: LOCATION B (Branch / Secondary Data Center / Cloud) */}
        <g transform="translate(620, 100)">
          <rect x="0" y="0" width="200" height="180" rx="6" className="svg-inner-box" fill="#0E0B1A" stroke="#2C2645" strokeWidth="1" />
          <circle cx="100" cy="45" r="18" className="svg-card-bg" fill="#1F1938" stroke="#DB2777" strokeWidth="1.5" />
          <circle cx="100" cy="45" r="5" fill="#DB2777" />

          <text x="100" y="82" className="svg-text-primary" fill="#F5F3FA" fontSize="12" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">
            LOCATION B
          </text>
          <text x="100" y="98" className="svg-text-secondary" fill="#9C94B8" fontSize="10" fontFamily="Inter" textAnchor="middle">
            Disaster Recovery / Cloud Gateway
          </text>

          <line x1="20" y1="116" x2="180" y2="116" stroke="#2C2645" strokeWidth="1" className="svg-border" />

          <text x="100" y="138" className="svg-text-secondary" fill="#9C94B8" fontSize="9" fontFamily="Inter" textAnchor="middle">
            Symmetric Upload / Download
          </text>
          <text x="100" y="154" fill="#DB2777" fontSize="9" fontFamily="Inter" textAnchor="middle" fontWeight="600">
            Dedicated Dark Fiber Interface
          </text>
        </g>
      </svg>
    </div>
  );
}

export default LeasedLineDedicatedPath;
