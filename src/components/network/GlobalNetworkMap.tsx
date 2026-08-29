import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Activity } from '../animated-icons';

interface RouteSpec {
  id: string;
  from: string;
  to: string;
  rtt: string;
  type: string;
}

export function GlobalNetworkMap() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedRoute, setSelectedRoute] = useState<string>('delhi-mumbai');

  // Verified Axtro Point-to-Point Routes
  const routes: RouteSpec[] = [
    {
      id: 'delhi-mumbai',
      from: 'Delhi NCR (Yotta D1)',
      to: 'Mumbai (Connect IX)',
      rtt: '18.4 ms RTT',
      type: 'Dual-Path Optical Fiber',
    },
    {
      id: 'mumbai-chennai',
      from: 'Mumbai (Connect IX)',
      to: 'Chennai (Connect IX)',
      rtt: '14.1 ms RTT',
      type: 'Subsea Diverse Corridor',
    },
    {
      id: 'delhi-chennai',
      from: 'Delhi NCR (Yotta D1)',
      to: 'Chennai (Connect IX)',
      rtt: '24.2 ms RTT',
      type: 'Direct Point-to-Point Link',
    },
  ];

  return (
    <div className="relative w-full rounded-3xl bg-[#17132A]/90 dark:bg-[#17132A]/90 light:bg-white border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] p-5 sm:p-10 backdrop-blur-xl shadow-2xl overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Left Route Selector & Telemetry Details */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1938] dark:bg-[#1F1938] light:bg-[#F0F2F5] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] text-[#DB2777] text-xs font-mono font-semibold uppercase tracking-wider mb-2.5 sm:mb-3">
              <Activity size={13} />
              CARRIER TRANSPORT MATRIX
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115] font-heading tracking-tight">
              Verified Metro<br />
              <span className="text-[#DB2777]">Interconnect Corridors.</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] mt-2 sm:mt-3 leading-relaxed">
              Uncontended optical transport connecting primary financial and data centers across India with guaranteed deterministic latency.
            </p>
          </div>

          {/* Route Cards */}
          <div className="space-y-2.5 sm:space-y-3">
            {routes.map((r) => {
              const isSelected = selectedRoute === r.id;
              return (
                <div
                  key={r.id}
                  onClick={() => setSelectedRoute(r.id)}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer select-none ${
                    isSelected
                      ? 'bg-[#1F1938] dark:bg-[#1F1938] light:bg-[#F0F2F5] border-[#DB2777] shadow-[0_0_20px_rgba(219,39,119,0.2)] translate-x-1 sm:translate-x-1.5'
                      : 'bg-[#17132A] dark:bg-[#17132A] light:bg-white border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] hover:border-[#9C94B8]/40 text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-xs sm:text-sm text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115]">
                      {r.from} ↔ {r.to.split(' ')[0]}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#DB2777]">
                      {r.rtt}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] mt-1.5 sm:mt-2 font-mono">
                    <span>{r.type}</span>
                    <span className="text-[9px] sm:text-[10px] text-[#DB2777] bg-[#DB2777]/10 px-2 py-0.5 rounded-full border border-[#DB2777]/20 font-bold">
                      LIVE
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Abstract Vector Map Display */}
        <div className="lg:col-span-7 relative w-full aspect-auto sm:aspect-[4/3] rounded-2xl bg-[#0E0B1A] dark:bg-[#0E0B1A] light:bg-[#F0F2F5] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DB2777] animate-ping" />
              OPTICAL TRACE VIEW
            </span>
            <span>INDIAN SUBCONTINENT BACKBONE</span>
          </div>

          <svg viewBox="0 0 600 450" className="w-full h-full my-auto drop-shadow-2xl">
            {/* Connecting Route Lines */}
            {/* Delhi (300, 110) to Mumbai (200, 260) */}
            <path
              d="M 300 110 Q 230 180 200 260"
              fill="none"
              stroke={selectedRoute === 'delhi-mumbai' ? '#DB2777' : (isDark ? '#2C2645' : '#D1D5DB')}
              strokeWidth={selectedRoute === 'delhi-mumbai' ? '3.5' : '1.5'}
              className="transition-all duration-300"
            />
            {/* Mumbai (200, 260) to Chennai (360, 360) */}
            <path
              d="M 200 260 Q 280 330 360 360"
              fill="none"
              stroke={selectedRoute === 'mumbai-chennai' ? '#DB2777' : (isDark ? '#2C2645' : '#D1D5DB')}
              strokeWidth={selectedRoute === 'mumbai-chennai' ? '3.5' : '1.5'}
              className="transition-all duration-300"
            />
            {/* Delhi (300, 110) to Chennai (360, 360) */}
            <path
              d="M 300 110 Q 360 230 360 360"
              fill="none"
              stroke={selectedRoute === 'delhi-chennai' ? '#DB2777' : (isDark ? '#2C2645' : '#D1D5DB')}
              strokeWidth={selectedRoute === 'delhi-chennai' ? '3.5' : '1.5'}
              className="transition-all duration-300"
            />

            {/* Delhi Node */}
            <g transform="translate(300, 110)" className="cursor-pointer" onClick={() => setSelectedRoute('delhi-mumbai')}>
              <circle r="18" fill="#DB2777" fillOpacity={isDark ? 0.15 : 0.12} />
              <circle r="10" fill={isDark ? '#17132A' : '#FFFFFF'} stroke="#DB2777" strokeWidth="2" />
              <circle r="3.5" fill={isDark ? '#F5F3FA' : '#DB2777'} />
              <text x="0" y="-18" textAnchor="middle" fill={isDark ? '#F5F3FA' : '#0F1115'} fontSize="12" fontWeight="bold" fontFamily="Space Grotesk">
                DELHI NCR
              </text>
              <text x="0" y="28" textAnchor="middle" fill={isDark ? '#9C94B8' : '#525866'} fontSize="9" fontFamily="JetBrains Mono">
                Yotta D1 Core
              </text>
            </g>

            {/* Mumbai Node */}
            <g transform="translate(200, 260)" className="cursor-pointer" onClick={() => setSelectedRoute('delhi-mumbai')}>
              <circle r="18" fill="#DB2777" fillOpacity={isDark ? 0.15 : 0.12} />
              <circle r="10" fill={isDark ? '#17132A' : '#FFFFFF'} stroke="#DB2777" strokeWidth="2" />
              <circle r="3.5" fill={isDark ? '#F5F3FA' : '#DB2777'} />
              <text x="-48" y="4" textAnchor="middle" fill={isDark ? '#F5F3FA' : '#0F1115'} fontSize="12" fontWeight="bold" fontFamily="Space Grotesk">
                MUMBAI
              </text>
              <text x="-48" y="18" textAnchor="middle" fill={isDark ? '#9C94B8' : '#525866'} fontSize="9" fontFamily="JetBrains Mono">
                Connect IX
              </text>
            </g>

            {/* Chennai Node */}
            <g transform="translate(360, 360)" className="cursor-pointer" onClick={() => setSelectedRoute('mumbai-chennai')}>
              <circle r="18" fill="#DB2777" fillOpacity={isDark ? 0.15 : 0.12} />
              <circle r="10" fill={isDark ? '#17132A' : '#FFFFFF'} stroke="#DB2777" strokeWidth="2" />
              <circle r="3.5" fill={isDark ? '#F5F3FA' : '#DB2777'} />
              <text x="48" y="4" textAnchor="middle" fill={isDark ? '#F5F3FA' : '#0F1115'} fontSize="12" fontWeight="bold" fontFamily="Space Grotesk">
                CHENNAI
              </text>
              <text x="48" y="18" textAnchor="middle" fill={isDark ? '#9C94B8' : '#525866'} fontSize="9" fontFamily="JetBrains Mono">
                Connect IX
              </text>
            </g>
          </svg>

          <div className="flex items-center justify-between text-[11px] font-mono text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] pt-2 border-t border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA]">
            <span>TOTAL BACKBONE CAPACITY: 1.2+ TBPS</span>
            <span className="text-[#DB2777] font-bold">100% UNCONTENDED</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalNetworkMap;
