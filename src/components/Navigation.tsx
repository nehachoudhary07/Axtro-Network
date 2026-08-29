import React, { useState, useEffect, useRef } from 'react';
import { PageRoute } from '../types';
import { AxtroLogo } from './svg/AxtroLogo';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import { 
  Shield, 
  Globe, 
  Layers, 
  Link as LinkIcon, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Activity, 
  Sparkles,
  Zap
} from './animated-icons';

interface NavigationProps {
  currentRoute: PageRoute;
  navigate: (route: PageRoute) => void;
}

export function Navigation({ currentRoute, navigate }: NavigationProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [networkOpen, setNetworkOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const isScrolledRef = useRef(false);
  const tickingRef = useRef(false);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const networkTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // High-performance scroll listener using requestAnimationFrame and direct DOM mutation
  useEffect(() => {
    const updateScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeScrolled = scrollY > 20;

      if (isScrolledRef.current !== shouldBeScrolled) {
        isScrolledRef.current = shouldBeScrolled;
        setIsScrolled(shouldBeScrolled);
      }

      if (progressBarRef.current) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? Math.min(Math.max((scrollY / docHeight) * 100, 0), 100) : 0;
        progressBarRef.current.style.width = `${progress}%`;
      }

      tickingRef.current = false;
    };

    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(updateScroll);
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setServicesOpen(false);
    setNetworkOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute]);

  // Click-outside listener & Escape key listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
        setNetworkOpen(false);
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setNetworkOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Hover handlers for Services
  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(true);
    setNetworkOpen(false);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 250);
  };

  // Hover handlers for Network
  const handleNetworkMouseEnter = () => {
    if (networkTimeoutRef.current) clearTimeout(networkTimeoutRef.current);
    setNetworkOpen(true);
    setServicesOpen(false);
  };

  const handleNetworkMouseLeave = () => {
    networkTimeoutRef.current = setTimeout(() => {
      setNetworkOpen(false);
    }, 250);
  };

  const handleServicesToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setServicesOpen((prev) => !prev);
    setNetworkOpen(false);
  };

  const handleNetworkToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setNetworkOpen((prev) => !prev);
    setServicesOpen(false);
  };

  return (
    <>
      <header
        ref={navRef}
        id="main-navigation"
        className={`fixed top-0 inset-x-0 z-50 pointer-events-none transition-[padding] duration-200 ease-out ${
          isScrolled ? 'pt-3 px-3 sm:px-6' : 'pt-4 sm:pt-5 px-4 sm:px-8'
        }`}
      >
        {/* Main Floating Capsule Container */}
        <div
          className={`max-w-7xl mx-auto rounded-full pointer-events-auto relative flex items-center justify-between transition-all duration-200 ease-out ${
            isDark
              ? isScrolled
                ? 'py-2.5 px-4 sm:px-6 bg-[#0E0B1A]/90 backdrop-blur-2xl border border-[#2C2645] shadow-[0_12px_36px_rgba(0,0,0,0.55)]'
                : 'py-3 sm:py-3.5 px-5 sm:px-8 bg-[#0E0B1A]/80 backdrop-blur-xl border border-[#2C2645]/80 shadow-[0_8px_25px_rgba(0,0,0,0.25)]'
              : isScrolled
                ? 'py-2.5 px-4 sm:px-6 bg-white/95 backdrop-blur-2xl border border-[#E2E5EA] shadow-[0_12px_32px_rgba(15,17,21,0.08)]'
                : 'py-3 sm:py-3.5 px-5 sm:px-8 bg-white/90 backdrop-blur-xl border border-[#E2E5EA] shadow-[0_8px_24px_rgba(15,17,21,0.05)]'
          }`}
        >
          {/* Brand Logo & Live Status */}
          <div className="flex items-center gap-3">
            <button
              id="brand-logo-btn"
              onClick={() => navigate('/')}
              className="flex items-center text-left group focus:outline-none rounded-full px-1 cursor-pointer transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]"
              aria-label="AXTRO NETWORKS Home"
            >
              <AxtroLogo size={34} showTagline={true} showWordmark={true} />
            </button>

            {/* Micro Live Network Chip */}
            {/* <div
              className={`hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-mono select-none ${
                isDark
                  ? 'bg-[#17132A]/80 border-[#2C2645] text-[#9C94B8]'
                  : 'bg-[#F0F2F5] border-[#E2E5EA] text-[#6B7280]'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className={`font-bold ${isDark ? 'text-[#F5F3FA]' : 'text-[#0F1115]'}`}>AS142071</span>
              <span>• 99.99% SLA</span>
            </div> */}
          </div>

          {/* Desktop Navigation Items */}
          <nav
            id="desktop-nav"
            className={`hidden md:flex items-center space-x-1 lg:space-x-1.5 rounded-full p-1 border backdrop-blur-md ${
              isDark
                ? 'bg-[#17132A]/90 border-[#2C2645]'
                : 'bg-[#F0F2F5]/90 border-[#E2E5EA]'
            }`}
          >
            {/* Services Dropdown Item */}
            <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                id="nav-services-dropdown-btn"
                onClick={handleServicesToggle}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-150 flex items-center gap-1.5 rounded-full cursor-pointer select-none ${
                  currentRoute.startsWith('/services') || servicesOpen
                    ? 'text-white bg-[#DB2777] shadow-md shadow-[#DB2777]/30 font-bold'
                    : isDark
                      ? 'text-[#9C94B8] hover:text-[#F5F3FA] hover:bg-[#1F1938]'
                      : 'text-[#6B7280] hover:text-[#0F1115] hover:bg-white'
                }`}
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ease-out ${
                    servicesOpen
                      ? 'rotate-180 text-white'
                      : currentRoute.startsWith('/services')
                        ? 'text-white'
                        : isDark
                          ? 'text-[#9C94B8]'
                          : 'text-[#6B7280]'
                  }`}
                />
              </button>

              {/* Services Dropdown Menu Panel */}
              {servicesOpen && (
                <div
                  id="services-dropdown-panel"
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[390px] backdrop-blur-2xl rounded-2xl p-3 z-50 border animate-in fade-in zoom-in-95 duration-150 ${
                    isDark
                      ? 'bg-[#17132A] border-[#2C2645] shadow-[0_20px_50px_rgba(0,0,0,0.85)]'
                      : 'bg-white border-[#E2E5EA] shadow-[0_20px_45px_rgba(15,17,21,0.12)]'
                  }`}
                  style={{ minWidth: '380px' }}
                >
                  <div
                    className={`text-[10px] font-mono tracking-widest uppercase font-semibold text-[#DB2777] px-3 py-1.5 flex items-center justify-between border-b pb-2 ${
                      isDark ? 'border-[#2C2645]' : 'border-[#E2E5EA]'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <Sparkles size={12} className="text-[#DB2777]" />
                      CARRIER-GRADE SERVICES
                    </span>
                    <span className={`text-[9px] font-mono ${isDark ? 'text-[#9C94B8]' : 'text-[#6B7280]'}`}>
                      TIER-1 CORE
                    </span>
                  </div>

                  <div className="mt-2 space-y-1.5">
                    {/* DDoS Protection */}
                    <button
                      id="nav-ddos-btn"
                      onClick={() => {
                        navigate('/services/ddos-protection');
                        setServicesOpen(false);
                      }}
                      className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center gap-3 transition-colors duration-150 group cursor-pointer border ${
                        currentRoute === '/services/ddos-protection'
                          ? isDark
                            ? 'bg-[#1F1938] border-[#DB2777]/50 text-[#F5F3FA]'
                            : 'bg-pink-50/80 border-[#DB2777]/40 text-[#0F1115]'
                          : isDark
                            ? 'hover:bg-[#1F1938] border-transparent text-[#9C94B8]'
                            : 'hover:bg-[#F6F7F9] border-transparent text-[#6B7280]'
                      }`}
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#DB2777]/15 border border-[#DB2777]/40 flex items-center justify-center shrink-0 group-hover:bg-[#DB2777]/25 transition-colors">
                        <Shield size={17} className="text-[#DB2777]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className={`font-bold transition-colors ${isDark ? 'text-[#F5F3FA] group-hover:text-[#DB2777]' : 'text-[#0F1115] group-hover:text-[#DB2777]'}`}>
                            DDoS Protection
                          </span>
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#DB2777]/20 text-[#DB2777] font-semibold">
                            Multi-Tbps
                          </span>
                        </div>
                        <p className={`text-[11px] truncate mt-0.5 ${isDark ? 'text-[#9C94B8]' : 'text-[#6B7280]'}`}>
                          Edge Scrubbing & autonomous mitigation
                        </p>
                      </div>
                    </button>

                    {/* IP Transit */}
                    <button
                      id="nav-transit-btn"
                      onClick={() => {
                        navigate('/services/ip-transit');
                        setServicesOpen(false);
                      }}
                      className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center gap-3 transition-colors duration-150 group cursor-pointer border ${
                        currentRoute === '/services/ip-transit'
                          ? isDark
                            ? 'bg-[#1F1938] border-[#DB2777]/50 text-[#F5F3FA]'
                            : 'bg-pink-50/80 border-[#DB2777]/40 text-[#0F1115]'
                          : isDark
                            ? 'hover:bg-[#1F1938] border-transparent text-[#9C94B8]'
                            : 'hover:bg-[#F6F7F9] border-transparent text-[#6B7280]'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 group-hover:border-[#DB2777]/40 transition-colors ${
                        isDark ? 'bg-[#1F1938] border-[#2C2645]' : 'bg-[#F0F2F5] border-[#E2E5EA]'
                      }`}>
                        <Globe size={17} className="text-[#DB2777]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className={`font-bold transition-colors ${isDark ? 'text-[#F5F3FA] group-hover:text-[#DB2777]' : 'text-[#0F1115] group-hover:text-[#DB2777]'}`}>
                            IP Transit
                          </span>
                          <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-semibold ${isDark ? 'bg-white/5 text-[#9C94B8]' : 'bg-gray-100 text-[#6B7280]'}`}>
                            &lt; 5ms BGP
                          </span>
                        </div>
                        <p className={`text-[11px] truncate mt-0.5 ${isDark ? 'text-[#9C94B8]' : 'text-[#6B7280]'}`}>
                          Deterministic ultra-low latency routes
                        </p>
                      </div>
                    </button>

                    {/* IX Connectivity */}
                    <button
                      id="nav-ix-btn"
                      onClick={() => {
                        navigate('/services/ix-connectivity');
                        setServicesOpen(false);
                      }}
                      className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center gap-3 transition-colors duration-150 group cursor-pointer border ${
                        currentRoute === '/services/ix-connectivity'
                          ? isDark
                            ? 'bg-[#1F1938] border-[#DB2777]/50 text-[#F5F3FA]'
                            : 'bg-pink-50/80 border-[#DB2777]/40 text-[#0F1115]'
                          : isDark
                            ? 'hover:bg-[#1F1938] border-transparent text-[#9C94B8]'
                            : 'hover:bg-[#F6F7F9] border-transparent text-[#6B7280]'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 group-hover:border-[#DB2777]/40 transition-colors ${
                        isDark ? 'bg-[#1F1938] border-[#2C2645]' : 'bg-[#F0F2F5] border-[#E2E5EA]'
                      }`}>
                        <Layers size={17} className="text-[#DB2777]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className={`font-bold transition-colors ${isDark ? 'text-[#F5F3FA] group-hover:text-[#DB2777]' : 'text-[#0F1115] group-hover:text-[#DB2777]'}`}>
                            IX Connectivity
                          </span>
                          <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-semibold ${isDark ? 'bg-white/5 text-[#9C94B8]' : 'bg-gray-100 text-[#6B7280]'}`}>
                            Connect IX
                          </span>
                        </div>
                        <p className={`text-[11px] truncate mt-0.5 ${isDark ? 'text-[#9C94B8]' : 'text-[#6B7280]'}`}>
                          Direct multi-hop fabric & peering access
                        </p>
                      </div>
                    </button>

                    {/* Leased Lines */}
                    <button
                      id="nav-leased-btn"
                      onClick={() => {
                        navigate('/services/leased-lines');
                        setServicesOpen(false);
                      }}
                      className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center gap-3 transition-colors duration-150 group cursor-pointer border ${
                        currentRoute === '/services/leased-lines'
                          ? isDark
                            ? 'bg-[#1F1938] border-[#DB2777]/50 text-[#F5F3FA]'
                            : 'bg-pink-50/80 border-[#DB2777]/40 text-[#0F1115]'
                          : isDark
                            ? 'hover:bg-[#1F1938] border-transparent text-[#9C94B8]'
                            : 'hover:bg-[#F6F7F9] border-transparent text-[#6B7280]'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 group-hover:border-[#DB2777]/40 transition-colors ${
                        isDark ? 'bg-[#1F1938] border-[#2C2645]' : 'bg-[#F0F2F5] border-[#E2E5EA]'
                      }`}>
                        <LinkIcon size={17} className="text-[#DB2777]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className={`font-bold transition-colors ${isDark ? 'text-[#F5F3FA] group-hover:text-[#DB2777]' : 'text-[#0F1115] group-hover:text-[#DB2777]'}`}>
                            Leased Lines
                          </span>
                          <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-semibold ${isDark ? 'bg-white/5 text-[#9C94B8]' : 'bg-gray-100 text-[#6B7280]'}`}>
                            Dark Fiber
                          </span>
                        </div>
                        <p className={`text-[11px] truncate mt-0.5 ${isDark ? 'text-[#9C94B8]' : 'text-[#6B7280]'}`}>
                          Dedicated point-to-point optical pipelines
                        </p>
                      </div>
                    </button>
                  </div>

                  {/* Dropdown Footer */}
                  <div
                    className={`mt-2.5 pt-2 border-t flex items-center justify-between px-2 text-[11px] ${
                      isDark ? 'border-[#2C2645]' : 'border-[#E2E5EA]'
                    }`}
                  >
                    <span className={`flex items-center gap-1 ${isDark ? 'text-[#9C94B8]' : 'text-[#6B7280]'}`}>
                      <Zap size={12} className="text-[#DB2777]" />
                      Sub-millisecond jitter
                    </span>
                    <button
                      onClick={() => {
                        navigate('/services/ddos-protection');
                        setServicesOpen(false);
                      }}
                      className="text-[#DB2777] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                    >
                      Explore All <ArrowRight size={11} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Network Dropdown Item */}
            <div
              className="relative"
              onMouseEnter={handleNetworkMouseEnter}
              onMouseLeave={handleNetworkMouseLeave}
            >
              <button
                id="nav-network-dropdown-btn"
                onClick={handleNetworkToggle}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-150 flex items-center gap-1.5 rounded-full cursor-pointer select-none ${
                  currentRoute === '/network' || networkOpen
                    ? 'text-white bg-[#DB2777] shadow-md shadow-[#DB2777]/30 font-bold'
                    : isDark
                      ? 'text-[#9C94B8] hover:text-[#F5F3FA] hover:bg-[#1F1938]'
                      : 'text-[#6B7280] hover:text-[#0F1115] hover:bg-white'
                }`}
                aria-expanded={networkOpen}
              >
                <span>Network</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ease-out ${
                    networkOpen
                      ? 'rotate-180 text-white'
                      : currentRoute === '/network'
                        ? 'text-white'
                        : isDark
                          ? 'text-[#9C94B8]'
                          : 'text-[#6B7280]'
                  }`}
                />
              </button>

              {/* Network Dropdown Menu Panel */}
              {networkOpen && (
                <div
                  id="network-dropdown-panel"
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[350px] backdrop-blur-2xl rounded-2xl p-3 z-50 border animate-in fade-in zoom-in-95 duration-150 ${
                    isDark
                      ? 'bg-[#17132A] border-[#2C2645] shadow-[0_20px_50px_rgba(0,0,0,0.85)]'
                      : 'bg-white border-[#E2E5EA] shadow-[0_20px_45px_rgba(15,17,21,0.12)]'
                  }`}
                  style={{ minWidth: '340px' }}
                >
                  <div
                    className={`text-[10px] font-mono tracking-widest uppercase font-semibold text-[#DB2777] px-3 py-1.5 flex items-center justify-between border-b pb-2 ${
                      isDark ? 'border-[#2C2645]' : 'border-[#E2E5EA]'
                    }`}
                  >
                    <span>STRATEGIC POP HUBS</span>
                    <span className="flex items-center gap-1.5 text-[9px] text-emerald-500 font-semibold font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      ALL 3 ONLINE
                    </span>
                  </div>

                  <div className="mt-2 space-y-1.5">
                    {/* Delhi PoP */}
                    <button
                      id="nav-delhi-btn"
                      onClick={() => {
                        navigate('/network');
                        setNetworkOpen(false);
                      }}
                      className={`w-full text-left p-2.5 rounded-xl text-xs transition-colors duration-150 flex items-center justify-between group cursor-pointer border ${
                        isDark
                          ? 'hover:bg-[#1F1938] border-transparent hover:border-[#2C2645]'
                          : 'hover:bg-[#F6F7F9] border-transparent hover:border-[#E2E5EA]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-[#DB2777] ring-4 ring-[#DB2777]/20"></div>
                        <div>
                          <div className={`font-bold transition-colors ${isDark ? 'text-[#F5F3FA] group-hover:text-[#DB2777]' : 'text-[#0F1115] group-hover:text-[#DB2777]'}`}>
                            Delhi NCR Hub
                          </div>
                          <div className={`text-[10px] ${isDark ? 'text-[#9C94B8]' : 'text-[#6B7280]'}`}>
                            Yotta D1 • 7th Floor • 100G Port
                          </div>
                        </div>
                      </div>
                      <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                        isDark ? 'bg-white/5 text-[#9C94B8]' : 'bg-[#F0F2F5] text-[#6B7280]'
                      }`}>
                        0.8ms
                      </span>
                    </button>

                    {/* Mumbai PoP */}
                    <button
                      id="nav-mumbai-btn"
                      onClick={() => {
                        navigate('/network');
                        setNetworkOpen(false);
                      }}
                      className={`w-full text-left p-2.5 rounded-xl text-xs transition-colors duration-150 flex items-center justify-between group cursor-pointer border ${
                        isDark
                          ? 'hover:bg-[#1F1938] border-transparent hover:border-[#2C2645]'
                          : 'hover:bg-[#F6F7F9] border-transparent hover:border-[#E2E5EA]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-[#DB2777] ring-4 ring-[#DB2777]/20"></div>
                        <div>
                          <div className={`font-bold transition-colors ${isDark ? 'text-[#F5F3FA] group-hover:text-[#DB2777]' : 'text-[#0F1115] group-hover:text-[#DB2777]'}`}>
                            Mumbai Gateway
                          </div>
                          <div className={`text-[10px] ${isDark ? 'text-[#9C94B8]' : 'text-[#6B7280]'}`}>
                            Connect IX • Subsea Landing
                          </div>
                        </div>
                      </div>
                      <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                        isDark ? 'bg-white/5 text-[#9C94B8]' : 'bg-[#F0F2F5] text-[#6B7280]'
                      }`}>
                        1.2ms
                      </span>
                    </button>

                    {/* Chennai PoP */}
                    <button
                      id="nav-chennai-btn"
                      onClick={() => {
                        navigate('/network');
                        setNetworkOpen(false);
                      }}
                      className={`w-full text-left p-2.5 rounded-xl text-xs transition-colors duration-150 flex items-center justify-between group cursor-pointer border ${
                        isDark
                          ? 'hover:bg-[#1F1938] border-transparent hover:border-[#2C2645]'
                          : 'hover:bg-[#F6F7F9] border-transparent hover:border-[#E2E5EA]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-[#DB2777] ring-4 ring-[#DB2777]/20"></div>
                        <div>
                          <div className={`font-bold transition-colors ${isDark ? 'text-[#F5F3FA] group-hover:text-[#DB2777]' : 'text-[#0F1115] group-hover:text-[#DB2777]'}`}>
                            Chennai Corridor
                          </div>
                          <div className={`text-[10px] ${isDark ? 'text-[#9C94B8]' : 'text-[#6B7280]'}`}>
                            Connect IX • Bay of Bengal Cable
                          </div>
                        </div>
                      </div>
                      <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                        isDark ? 'bg-white/5 text-[#9C94B8]' : 'bg-[#F0F2F5] text-[#6B7280]'
                      }`}>
                        1.4ms
                      </span>
                    </button>
                  </div>

                  {/* Matrix CTA */}
                  <div
                    className={`mt-2.5 pt-2 border-t ${
                      isDark ? 'border-[#2C2645]' : 'border-[#E2E5EA]'
                    }`}
                  >
                    <button
                      onClick={() => {
                        navigate('/network');
                        setNetworkOpen(false);
                      }}
                      className={`w-full py-2 px-3 rounded-xl text-center text-[11px] font-mono font-bold flex items-center justify-center gap-2 transition-colors duration-150 cursor-pointer ${
                        isDark
                          ? 'bg-[#1F1938] text-[#DB2777] hover:text-white hover:bg-[#DB2777]'
                          : 'bg-pink-50/90 text-[#DB2777] hover:text-white hover:bg-[#DB2777]'
                      }`}
                    >
                      <Activity size={13} />
                      <span>VIEW LIVE TOPOLOGY MATRIX</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* About Link */}
            <button
              id="nav-about-btn"
              onClick={() => navigate('/about')}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-150 rounded-full cursor-pointer select-none ${
                currentRoute === '/about'
                  ? 'text-white bg-[#DB2777] shadow-md shadow-[#DB2777]/30 font-bold'
                  : isDark
                    ? 'text-[#9C94B8] hover:text-[#F5F3FA] hover:bg-[#1F1938]'
                    : 'text-[#6B7280] hover:text-[#0F1115] hover:bg-white'
              }`}
            >
              About
            </button>

            {/* Contact Link */}
            <button
              id="nav-contact-btn"
              onClick={() => navigate('/contact')}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-150 rounded-full cursor-pointer select-none ${
                currentRoute === '/contact'
                  ? 'text-white bg-[#DB2777] shadow-md shadow-[#DB2777]/30 font-bold'
                  : isDark
                    ? 'text-[#9C94B8] hover:text-[#F5F3FA] hover:bg-[#1F1938]'
                    : 'text-[#6B7280] hover:text-[#0F1115] hover:bg-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Group: Theme Toggle, Primary CTA & Mobile Hamburger */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Theme Toggle Component */}
            <ThemeToggle />

            {/* High-Impact Primary CTA Button */}
            <button
              id="nav-get-connected-cta-btn"
              onClick={() => navigate('/contact')}
              className="relative group overflow-hidden hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-lg cursor-pointer transition-transform duration-150 active:scale-95"
            >
              {/* Shimmer sweeping beam */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/25 blur-[2px] animate-shimmer-sweep pointer-events-none" />
              <span className="relative z-10 text-white font-bold">GET CONNECTED</span>
              <ArrowRight
                size={14}
                className="relative z-10 text-white transition-transform duration-150 group-hover:translate-x-1"
              />
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-full border cursor-pointer active:scale-90 transition-transform ${
                isDark
                  ? 'bg-[#17132A] border-[#2C2645] text-[#F5F3FA] hover:bg-[#1F1938]'
                  : 'bg-gray-100 border-[#E2E5EA] text-[#0F1115] hover:bg-gray-200'
              }`}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Progress bar container at the bottom with its own isolated overflow-hidden */}
          <div className="absolute bottom-0 left-6 right-6 h-[2px] overflow-hidden rounded-full pointer-events-none">
            <div
              ref={progressBarRef}
              className="h-full w-0 bg-[#DB2777] transition-[width] duration-75 ease-out shadow-[0_0_8px_#DB2777]"
            />
          </div>
        </div>

        {/* Mobile Menu Drawer Modal */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu-drawer"
            className={`md:hidden pointer-events-auto mt-2.5 max-w-lg mx-auto backdrop-blur-2xl rounded-3xl p-5 space-y-4 border animate-in slide-in-from-top-4 fade-in duration-150 ${
              isDark
                ? 'bg-[#17132A] border-[#2C2645] shadow-[0_20px_60px_rgba(0,0,0,0.85)]'
                : 'bg-white border-[#E2E5EA] shadow-[0_20px_50px_rgba(15,17,21,0.15)]'
            }`}
          >
            {/* Header info */}
            <div
              className={`flex items-center justify-between pb-2 border-b ${
                isDark ? 'border-[#2C2645]' : 'border-[#E2E5EA]'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className={`text-[10px] font-mono ${isDark ? 'text-[#9C94B8]' : 'text-[#6B7280]'}`}>
                  AS142071 • ALL HUBS ONLINE
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#DB2777] font-bold">100G BACKBONE</span>
            </div>

            {/* Services Section */}
            <div>
              <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#DB2777] mb-2 flex items-center gap-1.5">
                <Sparkles size={11} /> SERVICES
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => navigate('/services/ddos-protection')}
                  className={`p-2.5 text-left text-xs rounded-xl transition-colors flex items-center gap-2.5 cursor-pointer border ${
                    currentRoute === '/services/ddos-protection'
                      ? 'bg-[#DB2777] text-white border-[#DB2777]'
                      : isDark
                        ? 'bg-[#1F1938]/60 border-transparent text-[#9C94B8] hover:text-[#F5F3FA]'
                        : 'bg-[#F6F7F9] border-[#E2E5EA] text-[#4B5563] hover:text-[#0F1115]'
                  }`}
                >
                  <Shield size={15} className="text-[#DB2777] shrink-0" />
                  <span className="font-medium truncate">DDoS Shield</span>
                </button>

                <button
                  onClick={() => navigate('/services/ip-transit')}
                  className={`p-2.5 text-left text-xs rounded-xl transition-colors flex items-center gap-2.5 cursor-pointer border ${
                    currentRoute === '/services/ip-transit'
                      ? 'bg-[#DB2777] text-white border-[#DB2777]'
                      : isDark
                        ? 'bg-[#1F1938]/60 border-transparent text-[#9C94B8] hover:text-[#F5F3FA]'
                        : 'bg-[#F6F7F9] border-[#E2E5EA] text-[#4B5563] hover:text-[#0F1115]'
                  }`}
                >
                  <Globe size={15} className="text-[#DB2777] shrink-0" />
                  <span className="font-medium truncate">IP Transit</span>
                </button>

                <button
                  onClick={() => navigate('/services/ix-connectivity')}
                  className={`p-2.5 text-left text-xs rounded-xl transition-colors flex items-center gap-2.5 cursor-pointer border ${
                    currentRoute === '/services/ix-connectivity'
                      ? 'bg-[#DB2777] text-white border-[#DB2777]'
                      : isDark
                        ? 'bg-[#1F1938]/60 border-transparent text-[#9C94B8] hover:text-[#F5F3FA]'
                        : 'bg-[#F6F7F9] border-[#E2E5EA] text-[#4B5563] hover:text-[#0F1115]'
                  }`}
                >
                  <Layers size={15} className="text-[#DB2777] shrink-0" />
                  <span className="font-medium truncate">IX Peering</span>
                </button>

                <button
                  onClick={() => navigate('/services/leased-lines')}
                  className={`p-2.5 text-left text-xs rounded-xl transition-colors flex items-center gap-2.5 cursor-pointer border ${
                    currentRoute === '/services/leased-lines'
                      ? 'bg-[#DB2777] text-white border-[#DB2777]'
                      : isDark
                        ? 'bg-[#1F1938]/60 border-transparent text-[#9C94B8] hover:text-[#F5F3FA]'
                        : 'bg-[#F6F7F9] border-[#E2E5EA] text-[#4B5563] hover:text-[#0F1115]'
                  }`}
                >
                  <LinkIcon size={15} className="text-[#DB2777] shrink-0" />
                  <span className="font-medium truncate">Leased Lines</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div
              className={`pt-2 border-t grid grid-cols-3 gap-2 ${
                isDark ? 'border-[#2C2645]' : 'border-[#E2E5EA]'
              }`}
            >
              <button
                onClick={() => navigate('/network')}
                className={`py-2 text-center text-xs font-semibold rounded-xl cursor-pointer transition-colors border ${
                  currentRoute === '/network'
                    ? 'bg-[#DB2777] text-white font-bold border-[#DB2777] shadow-md'
                    : isDark
                      ? 'bg-[#1F1938]/60 border-transparent text-[#9C94B8] hover:text-[#F5F3FA]'
                      : 'bg-[#F6F7F9] border-[#E2E5EA] text-[#4B5563] hover:text-[#0F1115]'
                }`}
              >
                Network
              </button>
              <button
                onClick={() => navigate('/about')}
                className={`py-2 text-center text-xs font-semibold rounded-xl cursor-pointer transition-colors border ${
                  currentRoute === '/about'
                    ? 'bg-[#DB2777] text-white font-bold border-[#DB2777] shadow-md'
                    : isDark
                      ? 'bg-[#1F1938]/60 border-transparent text-[#9C94B8] hover:text-[#F5F3FA]'
                      : 'bg-[#F6F7F9] border-[#E2E5EA] text-[#4B5563] hover:text-[#0F1115]'
                }`}
              >
                About
              </button>
              <button
                onClick={() => navigate('/contact')}
                className={`py-2 text-center text-xs font-semibold rounded-xl cursor-pointer transition-colors border ${
                  currentRoute === '/contact'
                    ? 'bg-[#DB2777] text-white font-bold border-[#DB2777] shadow-md'
                    : isDark
                      ? 'bg-[#1F1938]/60 border-transparent text-[#9C94B8] hover:text-[#F5F3FA]'
                      : 'bg-[#F6F7F9] border-[#E2E5EA] text-[#4B5563] hover:text-[#0F1115]'
                }`}
              >
                Contact
              </button>
            </div>

            {/* Mobile Theme & CTA */}
            <div
              className={`pt-2 border-t flex items-center justify-between gap-3 ${
                isDark ? 'border-[#2C2645]' : 'border-[#E2E5EA]'
              }`}
            >
              <ThemeToggle showLabel={true} />
              <button
                onClick={() => navigate('/contact')}
                className="flex-1 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-lg cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>GET CONNECTED</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop blur overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 md:hidden transition-opacity backdrop-blur-sm ${
            isDark ? 'bg-black/60' : 'bg-black/25'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Navigation;
