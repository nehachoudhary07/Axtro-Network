import React, { useState, useEffect, useRef } from 'react';
import { PageRoute } from '../types';
import { AxtroLogo } from './svg/AxtroLogo';
import { ThemeToggle } from './ThemeToggle';
import { Shield, Globe, Layers, Link as LinkIcon, ChevronDown, Menu, X, ArrowRight, Activity, Radio, Sparkles } from 'lucide-react';

interface NavigationProps {
  currentRoute: PageRoute;
  navigate: (route: PageRoute) => void;
}

export function Navigation({ currentRoute, navigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [networkOpen, setNetworkOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const networkTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setNetworkOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute]);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 180);
  };

  const handleNetworkMouseEnter = () => {
    if (networkTimeoutRef.current) clearTimeout(networkTimeoutRef.current);
    setNetworkOpen(true);
  };

  const handleNetworkMouseLeave = () => {
    networkTimeoutRef.current = setTimeout(() => {
      setNetworkOpen(false);
    }, 180);
  };

  return (
    <header
      id="main-navigation"
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none"
    >
      <div className={`max-w-6xl mx-auto rounded-full transition-all duration-300 pointer-events-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
        isScrolled
          ? 'glass-nav shadow-2xl backdrop-blur-2xl'
          : 'glass-nav backdrop-blur-xl bg-opacity-70'
      }`}>
        {/* Brand Logo */}
        <button
          id="brand-logo-btn"
          onClick={() => navigate('/')}
          className="flex items-center text-left group focus:outline-none rounded-full px-1"
        >
          <AxtroLogo size={34} showTagline={true} showWordmark={true} />
        </button>

        {/* Desktop Nav Items */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#07101C]/80 rounded-full p-1 border border-[#17263A]">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button
              id="nav-services-dropdown-btn"
              onClick={() => navigate('/services/ddos-protection')}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 rounded-full ${
                currentRoute.startsWith('/services')
                  ? 'text-white bg-[#164B8C] shadow-sm'
                  : 'text-[#A7B0BE] hover:text-[#F5F7FA] hover:bg-[#17263A]'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-[#245FA8]' : ''}`}
              />
            </button>

            {/* Dropdown Menu */}
            {servicesOpen && (
              <div
                id="services-dropdown-panel"
                className="absolute top-full left-0 mt-3 w-80 bg-[#07101C] rounded-2xl shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150 border border-[#17263A]"
              >
                <div className="text-[10px] font-mono tracking-widest uppercase font-semibold text-[#245FA8] px-3 py-1.5 flex items-center justify-between">
                  <span>INFRASTRUCTURE SERVICES</span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#245FA8] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#245FA8]"></span>
                  </span>
                </div>
                <div className="mt-1 space-y-1">
                  <button
                    id="nav-ddos-btn"
                    onClick={() => navigate('/services/ddos-protection')}
                    className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center gap-3 transition-all ${
                      currentRoute === '/services/ddos-protection'
                        ? 'bg-[#17263A] border border-[#245FA8] text-[#F5F7FA]'
                        : 'text-[#A7B0BE] hover:text-[#F5F7FA] hover:bg-[#17263A]'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#164B8C]/10 border border-[#164B8C]/30 flex items-center justify-center shrink-0">
                      <Shield size={16} className="text-[#245FA8]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#F5F7FA]">DDoS Protection</div>
                      <div className="text-[10px] text-[#A7B0BE]">Multi-Tbps edge mitigation</div>
                    </div>
                  </button>

                  <button
                    id="nav-transit-btn"
                    onClick={() => navigate('/services/ip-transit')}
                    className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center gap-3 transition-all ${
                      currentRoute === '/services/ip-transit'
                        ? 'bg-[#17263A] border border-[#245FA8] text-[#F5F7FA]'
                        : 'text-[#A7B0BE] hover:text-[#F5F7FA] hover:bg-[#17263A]'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#17263A] border border-[#17263A] flex items-center justify-center shrink-0">
                      <Globe size={16} className="text-[#245FA8]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#F5F7FA]">IP Transit</div>
                      <div className="text-[10px] text-[#A7B0BE]">Deterministic low-latency BGP</div>
                    </div>
                  </button>

                  <button
                    id="nav-ix-btn"
                    onClick={() => navigate('/services/ix-connectivity')}
                    className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center gap-3 transition-all ${
                      currentRoute === '/services/ix-connectivity'
                        ? 'bg-[#17263A] border border-[#245FA8] text-[#F5F7FA]'
                        : 'text-[#A7B0BE] hover:text-[#F5F7FA] hover:bg-[#17263A]'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#17263A] border border-[#17263A] flex items-center justify-center shrink-0">
                      <Layers size={16} className="text-[#245FA8]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#F5F7FA]">IX Connectivity</div>
                      <div className="text-[10px] text-[#A7B0BE]">Connect IX low-hop fabric</div>
                    </div>
                  </button>

                  <button
                    id="nav-leased-btn"
                    onClick={() => navigate('/services/leased-lines')}
                    className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center gap-3 transition-all ${
                      currentRoute === '/services/leased-lines'
                        ? 'bg-[#17263A] border border-[#245FA8] text-[#F5F7FA]'
                        : 'text-[#A7B0BE] hover:text-[#F5F7FA] hover:bg-[#17263A]'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#17263A] border border-[#17263A] flex items-center justify-center shrink-0">
                      <LinkIcon size={16} className="text-[#245FA8]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#F5F7FA]">Leased Lines</div>
                      <div className="text-[10px] text-[#A7B0BE]">Dedicated optical dark fiber</div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Network Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleNetworkMouseEnter}
            onMouseLeave={handleNetworkMouseLeave}
          >
            <button
              id="nav-network-dropdown-btn"
              onClick={() => navigate('/network')}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 rounded-full ${
                currentRoute === '/network'
                  ? 'text-white bg-[#164B8C] shadow-sm'
                  : 'text-[#A7B0BE] hover:text-[#F5F7FA] hover:bg-[#17263A]'
              }`}
            >
              <span>Network</span>
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${networkOpen ? 'rotate-180 text-[#245FA8]' : ''}`}
              />
            </button>

            {/* Network Dropdown Menu */}
            {networkOpen && (
              <div
                id="network-dropdown-panel"
                className="absolute top-full left-0 mt-3 w-76 bg-[#07101C] rounded-2xl shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150 border border-[#17263A]"
              >
                <div className="text-[10px] font-mono tracking-widest uppercase font-semibold text-[#245FA8] px-3 py-1.5 flex items-center justify-between">
                  <span>METRO POPs</span>
                  <span className="flex items-center gap-1.5 text-[9px] text-[#245FA8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#245FA8] animate-pulse"></span>
                    ALL 3 LIVE
                  </span>
                </div>
                <div className="mt-1 space-y-1">
                  <button
                    id="nav-delhi-btn"
                    onClick={() => navigate('/network')}
                    className="w-full text-left p-2.5 rounded-xl text-xs hover:bg-[#17263A] transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-bold text-[#F5F7FA] group-hover:text-[#245FA8] transition-colors">
                        Delhi NCR Hub
                      </div>
                      <div className="text-[10px] text-[#A7B0BE]">Yotta D1 • 7th Floor • 100G</div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-[#245FA8]"></span>
                  </button>

                  <button
                    id="nav-mumbai-btn"
                    onClick={() => navigate('/network')}
                    className="w-full text-left p-2.5 rounded-xl text-xs hover:bg-[#17263A] transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-bold text-[#F5F7FA] group-hover:text-[#245FA8] transition-colors">
                        Mumbai Gateway
                      </div>
                      <div className="text-[10px] text-[#A7B0BE]">Connect IX • Subsea Landing</div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-[#245FA8]"></span>
                  </button>

                  <button
                    id="nav-chennai-btn"
                    onClick={() => navigate('/network')}
                    className="w-full text-left p-2.5 rounded-xl text-xs hover:bg-[#17263A] transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-bold text-[#F5F7FA] group-hover:text-[#245FA8] transition-colors">
                        Chennai Corridor
                      </div>
                      <div className="text-[10px] text-[#A7B0BE]">Connect IX • Bay of Bengal</div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-[#245FA8]"></span>
                  </button>

                  <div className="pt-2 border-t border-[#17263A]">
                    <button
                      onClick={() => navigate('/network')}
                      className="w-full py-2 text-center text-[11px] font-mono text-[#245FA8] hover:text-[#F5F7FA] font-medium flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Activity size={13} />
                      VIEW LIVE TOPOLOGY MATRIX <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* About */}
          <button
            id="nav-about-btn"
            onClick={() => navigate('/about')}
            className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all rounded-full ${
              currentRoute === '/about'
                ? 'text-white bg-[#164B8C] shadow-sm'
                : 'text-[#A7B0BE] hover:text-[#F5F7FA] hover:bg-[#17263A]'
            }`}
          >
            About
          </button>

          {/* Contact */}
          <button
            id="nav-contact-btn"
            onClick={() => navigate('/contact')}
            className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all rounded-full ${
              currentRoute === '/contact'
                ? 'text-white bg-[#164B8C] shadow-sm'
                : 'text-[#A7B0BE] hover:text-[#F5F7FA] hover:bg-[#17263A]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Button, Theme Toggle & Mobile Hamburger */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Primary CTA - Sleek Pill Button with Ambient Glow */}
          <button
            id="nav-get-connected-cta-btn"
            onClick={() => navigate('/contact')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-lg"
          >
            <span>GET CONNECTED</span>
            <ArrowRight size={14} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden pointer-events-auto mt-2 max-w-6xl mx-auto bg-[#07101C] rounded-3xl p-5 space-y-4 shadow-2xl border border-[#17263A] animate-in slide-in-from-top-4 duration-200"
        >
          {/* Services Section */}
          <div>
            <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#245FA8] mb-2">
              SERVICES
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => navigate('/services/ddos-protection')}
                className={`p-2.5 text-left text-xs rounded-xl transition-all flex items-center gap-2 ${
                  currentRoute === '/services/ddos-protection'
                    ? 'bg-[#17263A] text-white border border-[#245FA8]'
                    : 'bg-[#17263A]/50 text-[#A7B0BE] hover:text-[#F5F7FA]'
                }`}
              >
                <Shield size={14} className="text-[#245FA8] shrink-0" />
                <span className="font-medium truncate">DDoS Protection</span>
              </button>

              <button
                onClick={() => navigate('/services/ip-transit')}
                className={`p-2.5 text-left text-xs rounded-xl transition-all flex items-center gap-2 ${
                  currentRoute === '/services/ip-transit'
                    ? 'bg-[#17263A] text-white border border-[#245FA8]'
                    : 'bg-[#17263A]/50 text-[#A7B0BE] hover:text-[#F5F7FA]'
                }`}
              >
                <Globe size={14} className="text-[#245FA8] shrink-0" />
                <span className="font-medium truncate">IP Transit</span>
              </button>

              <button
                onClick={() => navigate('/services/ix-connectivity')}
                className={`p-2.5 text-left text-xs rounded-xl transition-all flex items-center gap-2 ${
                  currentRoute === '/services/ix-connectivity'
                    ? 'bg-[#17263A] text-white border border-[#245FA8]'
                    : 'bg-[#17263A]/50 text-[#A7B0BE] hover:text-[#F5F7FA]'
                }`}
              >
                <Layers size={14} className="text-[#245FA8] shrink-0" />
                <span className="font-medium truncate">IX Peering</span>
              </button>

              <button
                onClick={() => navigate('/services/leased-lines')}
                className={`p-2.5 text-left text-xs rounded-xl transition-all flex items-center gap-2 ${
                  currentRoute === '/services/leased-lines'
                    ? 'bg-[#17263A] text-white border border-[#245FA8]'
                    : 'bg-[#17263A]/50 text-[#A7B0BE] hover:text-[#F5F7FA]'
                }`}
              >
                <LinkIcon size={14} className="text-[#245FA8] shrink-0" />
                <span className="font-medium truncate">Leased Lines</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pt-2 border-t border-[#17263A] grid grid-cols-3 gap-2">
            <button
              onClick={() => navigate('/network')}
              className={`py-2 text-center text-xs font-semibold rounded-xl ${
                currentRoute === '/network'
                  ? 'bg-[#17263A] text-white border border-[#245FA8]'
                  : 'bg-[#17263A]/50 text-[#A7B0BE] hover:text-[#F5F7FA]'
              }`}
            >
              Network
            </button>
            <button
              onClick={() => navigate('/about')}
              className={`py-2 text-center text-xs font-semibold rounded-xl ${
                currentRoute === '/about'
                  ? 'bg-[#17263A] text-white border border-[#245FA8]'
                  : 'bg-[#17263A]/50 text-[#A7B0BE] hover:text-[#F5F7FA]'
              }`}
            >
              About
            </button>
            <button
              onClick={() => navigate('/contact')}
              className={`py-2 text-center text-xs font-semibold rounded-xl ${
                currentRoute === '/contact'
                  ? 'bg-[#17263A] text-white border border-[#245FA8]'
                  : 'bg-[#17263A]/50 text-[#A7B0BE] hover:text-[#F5F7FA]'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Theme & CTA */}
          <div className="pt-2 border-t border-[#17263A] flex items-center justify-between">
            <ThemeToggle showLabel={true} />
            <button
              onClick={() => navigate('/contact')}
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-lg"
            >
              GET CONNECTED
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navigation;
