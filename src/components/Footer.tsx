import React from 'react';
import { PageRoute } from '../types';
import { AxtroLogo } from './svg/AxtroLogo';
import { ArrowUpRight } from './animated-icons';

interface FooterProps {
  navigate: (route: PageRoute) => void;
}

export function Footer({ navigate }: FooterProps) {
  return (
    <footer id="global-footer" className="pt-16 pb-12 transition-colors relative overflow-hidden border-t border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] bg-[#0E0B1A] dark:bg-[#0E0B1A] light:bg-[#F6F7F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA]">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-left group focus:outline-none cursor-pointer"
            >
              <AxtroLogo size={36} showTagline={false} showWordmark={true} />
            </button>

            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#DB2777]">
              THE AXIS OF THE INTERNET
            </div>

            <p className="text-sm leading-relaxed text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] max-w-sm">
              Carrier-grade Internet infrastructure providing intelligent multi-Tbps DDoS protection, high-capacity IP transit, Connect IX peering, and dedicated point-to-point leased lines.
            </p>

            <div className="pt-2 flex items-center gap-2.5">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DB2777] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DB2777]"></span>
              </span>
              <span className="text-xs font-mono font-medium text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115]">CORE INFRASTRUCTURE ONLINE • 24×7 NOC</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115] mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigate('/services/ddos-protection')}
                  className="text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] hover:text-[#DB2777] transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <span>DDoS Protection</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#DB2777]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services/ip-transit')}
                  className="text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] hover:text-[#DB2777] transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <span>IP Transit</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#DB2777]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services/ix-connectivity')}
                  className="text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] hover:text-[#DB2777] transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <span>IX Connectivity</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#DB2777]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services/leased-lines')}
                  className="text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] hover:text-[#DB2777] transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <span>Leased Lines</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#DB2777]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Network & Company */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115] mb-4">
              NETWORK
            </h4>
            <ul className="space-y-2.5 text-sm mb-6">
              <li>
                <button
                  onClick={() => navigate('/network')}
                  className="text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] hover:text-[#DB2777] transition-colors text-left flex items-center gap-2 group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777]"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform">Delhi — Yotta D1</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/network')}
                  className="text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] hover:text-[#DB2777] transition-colors text-left flex items-center gap-2 group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777]"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform">Mumbai — Connect IX</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/network')}
                  className="text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] hover:text-[#DB2777] transition-colors text-left flex items-center gap-2 group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777]"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform">Chennai — Connect IX</span>
                </button>
              </li>
            </ul>

            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115] mb-3">
              COMPANY
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] hover:text-[#DB2777] transition-colors text-left cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] hover:text-[#DB2777] transition-colors text-left cursor-pointer"
                >
                  Contact & NOC
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Operations & Telemetry */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115] mb-4">
              NOC TELEMETRY
            </h4>
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-[#17132A] dark:bg-[#17132A] light:bg-white border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA]">
                <div className="text-[10px] text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] uppercase">SLA METRIC</div>
                <div className="text-[#DB2777] font-bold mt-0.5">99.999% Deterministic</div>
              </div>
              <div className="p-3 rounded-xl bg-[#17132A] dark:bg-[#17132A] light:bg-white border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA]">
                <div className="text-[10px] text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] uppercase">CORE CAPACITY</div>
                <div className="text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115] font-bold mt-0.5">100 Gbps Optical Mesh</div>
              </div>
              <div className="p-3 rounded-xl bg-[#17132A] dark:bg-[#17132A] light:bg-white border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA]">
                <div className="text-[10px] text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] uppercase">DDoS SCRUBBING</div>
                <div className="text-[#DB2777] font-bold mt-0.5">Autonomous &lt; 1s</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-footer bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]">
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} AXTRO NETWORKS. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866]">
              AS-AXTRO • BGP ANYCAST ACTIVE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
