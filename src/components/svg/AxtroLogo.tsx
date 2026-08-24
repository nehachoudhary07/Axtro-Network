import React from 'react';

interface AxtroLogoProps {
  className?: string;
  size?: number;
  showTagline?: boolean;
  showWordmark?: boolean;
}

/**
 * High-precision vector emblem representing AXTRO NETWORKS:
 * - Enterprise Black + Navy + Dark Blue + White palette
 * - Primary Blue: #164B8C
 * - Secondary Blue: #245FA8
 * - Apex Sphere / Accents: #F5F7FA & #245FA8
 * - Typography: Space Grotesk / Inter
 */
export function AxtroMark({ className = "w-9 h-9", size = 36 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="AXTRO NETWORKS emblem"
    >
      {/* 3D Top Fold Facet */}
      <polygon
        points="48,16 64,28 54,62 48,16"
        fill="#07101C"
        stroke="#17263A"
        strokeWidth="1"
      />

      {/* Upper Left Stem */}
      <polygon
        points="48,16 57,18 48,58 37,56"
        fill="#164B8C"
      />

      {/* Lower Left Leg */}
      <polygon
        points="36,62 47,64 34,114 16,114"
        fill="#245FA8"
      />

      {/* Right Leg */}
      <polygon
        points="54,62 64,28 89,114 66,114 56,70"
        fill="#164B8C"
      />

      {/* Apex Sphere Dot */}
      <circle
        cx="49"
        cy="15"
        r="7.5"
        fill="#F5F7FA"
        stroke="#164B8C"
        strokeWidth="2"
      />
    </svg>
  );
}

export function AxtroLogo({
  className = "",
  size = 38,
  showTagline = true,
  showWordmark = true,
}: AxtroLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Icon Mark */}
      <AxtroMark size={size} />

      {/* Wordmark and Tagline */}
      {showWordmark && (
        <div className="flex flex-col justify-center text-left">
          <div className="flex items-baseline space-x-1.5 leading-none">
            <span className="font-heading font-bold text-lg tracking-wider text-[#F5F7FA]">
              AXTRO
            </span>
            <span className="font-heading font-medium text-xs tracking-[0.25em] text-[#A7B0BE] uppercase">
              NETWORKS
            </span>
          </div>

          {showTagline && (
            <div className="mt-1 pt-1 border-t border-[#17263A] flex items-center">
              <span className="text-[9px] font-mono tracking-[0.22em] text-[#A7B0BE] uppercase font-semibold leading-none">
                THE AXIS OF INTERNET
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AxtroLogo;
