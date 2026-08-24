import React from 'react';
import { PageRoute } from '../types';
import { AxtroLogo } from './svg/AxtroLogo';
import { ThemeToggle } from './ThemeToggle';
import { Mail, Phone, MapPin, Network, ArrowUpRight, Activity, Radio, Sparkles } from 'lucide-react';

interface FooterProps {
  navigate: (route: PageRoute) => void;
}

export function Footer({ navigate }: FooterProps) {
  return (
    <footer id="global-footer" className="pt-16 pb-12 transition-colors relative overflow-hidden border-t border-[#17263A] bg-[#030507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#17263A]">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-left group focus:outline-none"
            >
              <AxtroLogo size={36} showTagline={false} showWordmark={true} />
            </button>

            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#245FA8]">
              THE AXIS OF THE INTERNET
            </div>

            <p className="text-sm leading-relaxed text-[#A7B0BE] max-w-sm">
              Carrier-grade Internet infrastructure providing intelligent multi-Tbps DDoS protection, high-capacity IP transit, Connect IX peering, and dedicated point-to-point leased lines.
            </p>

            <div className="pt-2 flex items-center gap-2.5">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#245FA8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#245FA8]"></span>
              </span>
              <span className="text-xs font-mono font-medium text-[#F5F7FA]">CORE INFRASTRUCTURE ONLINE • 24×7 NOC</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F5F7FA] mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigate('/services/ddos-protection')}
                  className="text-[#A7B0BE] hover:text-[#245FA8] transition-colors flex items-center gap-1 group text-left"
                >
                  <span>DDoS Protection</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#245FA8]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services/ip-transit')}
                  className="text-[#A7B0BE] hover:text-[#245FA8] transition-colors flex items-center gap-1 group text-left"
                >
                  <span>IP Transit</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#245FA8]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services/ix-connectivity')}
                  className="text-[#A7B0BE] hover:text-[#245FA8] transition-colors flex items-center gap-1 group text-left"
                >
                  <span>IX Connectivity</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#245FA8]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services/leased-lines')}
                  className="text-[#A7B0BE] hover:text-[#245FA8] transition-colors flex items-center gap-1 group text-left"
                >
                  <span>Leased Lines</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#245FA8]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Network & Company */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F5F7FA] mb-4">
              NETWORK
            </h4>
            <ul className="space-y-2.5 text-sm mb-6">
              <li>
                <button
                  onClick={() => navigate('/network')}
                  className="text-[#A7B0BE] hover:text-[#245FA8] transition-colors text-left flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#245FA8]"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform">Delhi — Yotta D1</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/network')}
                  className="text-[#A7B0BE] hover:text-[#245FA8] transition-colors text-left flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#245FA8]"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform">Mumbai — Connect IX</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/network')}
                  className="text-[#A7B0BE] hover:text-[#245FA8] transition-colors text-left flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#245FA8]"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform">Chennai — Connect IX</span>
                </button>
              </li>
            </ul>

            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F5F7FA] mb-3">
              COMPANY
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigate('/about')} className="text-[#A7B0BE] hover:text-[#245FA8] transition-colors">
                  About AXTRO
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="text-[#A7B0BE] hover:text-[#245FA8] transition-colors">
                  Contact / Request Proposal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Support & Location */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F5F7FA] mb-4">
              NOC SUPPORT
            </h4>
            
            <div className="space-y-2 text-sm">
              <a
                href="mailto:support@axtro.network"
                className="flex items-center gap-2 text-[#F5F7FA] hover:text-[#245FA8] transition-colors group"
              >
                <Mail size={14} className="text-[#245FA8]" />
                <span className="underline-offset-4 group-hover:underline">support@axtro.network</span>
              </a>

              <a
                href="tel:+918448440490"
                className="flex items-center gap-2 text-[#F5F7FA] hover:text-[#245FA8] transition-colors"
              >
                <Phone size={14} className="text-[#245FA8]" />
                <span>+91 84484 40490</span>
              </a>
            </div>

            <div className="pt-2 border-t border-[#17263A] text-xs space-y-2 text-[#A7B0BE]">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#245FA8] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#F5F7FA] font-semibold">Primary Core</div>
                  <div>Yotta D1, 7th Floor, Delhi NCR</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Network size={14} className="text-[#245FA8] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#F5F7FA] font-semibold">Peering Fabric</div>
                  <div>Connect IX — Delhi • Mumbai • Chennai</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Theme Switcher */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A7B0BE]">
          <div>
            © {new Date().getFullYear()} AXTRO NETWORKS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <span className="hidden sm:inline">Delhi • Mumbai • Chennai</span>
            <span className="hidden sm:inline">Connect IX Backbone</span>
            <ThemeToggle showLabel={true} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
