import React from 'react';

interface AxtroLogoProps {
  className?: string;
  size?: number;
  showTagline?: boolean;
  showWordmark?: boolean;
}

/**
 * High-precision vector emblem matching the AXTRO NETWORKS brand design:
 * - Brand Accent: #DB2777
 * - Deep Violet to Magenta Gradient
 * - Apex Sphere: #DB2777
 * - White Facet Slash
 * - Dark 3D Fold: #2E083B
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
      <defs>
        {/* Left leg gradient: Deep violet to brand magenta #DB2777 */}
        <linearGradient id="axtroLeftGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7E22CE" />
          <stop offset="45%" stopColor="#9333EA" />
          <stop offset="100%" stopColor="#DB2777" />
        </linearGradient>

        {/* Right leg gradient */}
        <linearGradient id="axtroRightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6B21A8" />
          <stop offset="60%" stopColor="#DB2777" />
          <stop offset="100%" stopColor="#BE185D" />
        </linearGradient>

        {/* Apex dot glow */}
        <filter id="apexGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#DB2777" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* 3D Top Fold Inner Facet (Dark Purple Shade) */}
      <polygon
        points="48,16 66,28 55,62 48,16"
        fill="#2E083B"
      />

      {/* Upper Left Stem */}
      <polygon
        points="48,16 57,18 47,56 36,54"
        fill="url(#axtroLeftGradient)"
      />

      {/* Lower Left Leg (Extends to base with vibrant #DB2777) */}
      <polygon
        points="35,62 47,64 34,114 16,114"
        fill="url(#axtroLeftGradient)"
      />

      {/* Diagonal White Slice Slash across the 'A' */}
      <polygon
        points="14,64 90,46 90,49 14,67"
        fill="#FFFFFF"
        opacity="0.95"
      />

      {/* Right Leg (Faceted fold extending down) */}
      <polygon
        points="55,62 66,28 89,114 66,114 56,70"
        fill="url(#axtroRightGradient)"
      />

      {/* Top Apex Sphere Dot */}
      <circle
        cx="49"
        cy="15"
        r="7.5"
        fill="#DB2777"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        filter="url(#apexGlow)"
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
            <span className="font-heading font-extrabold text-lg tracking-wider text-[#F5F3FA]">
              AXTRO
            </span>
            <span className="font-heading font-medium text-xs tracking-[0.25em] text-[#9C94B8] uppercase">
              NETWORKS
            </span>
          </div>

          {showTagline && (
            <div className="mt-1 pt-1 border-t border-[#2C2645] flex items-center">
              <span className="text-[9px] font-mono tracking-[0.22em] text-[#9C94B8] uppercase font-semibold leading-none">
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
