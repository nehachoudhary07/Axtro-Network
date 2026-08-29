import React from 'react';
import { PageRoute } from '../types';
import { MagneticButton } from './motion/MagneticButton';
import { ArrowRight, ShieldCheck, Zap, Headphones, Sparkles, Activity } from './animated-icons';

interface FinalCtaSectionProps {
  navigate: (route: PageRoute) => void;
  title?: string;
  subtitle?: string;
  badgeText?: string;
}

export function FinalCtaSection({
  navigate,
  title = 'CONNECT YOUR INFRASTRUCTURE TO THE AXIS TODAY.',
  subtitle = 'Whether deploying 10G/100G/400G IP transit, cross-connecting at Connect IX, or securing your network against volumetric DDoS attacks, our engineers are ready.',
  badgeText = 'READY FOR CARRIER-GRADE INTERCONNECTION?',
}: FinalCtaSectionProps) {
  return (
    <section id="final-cta-section" className="py-20 lg:py-28 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-[#17132A] dark:bg-[#17132A] light:bg-white border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] p-6 sm:p-12 lg:p-16 shadow-2xl">
          <div className="absolute inset-0 bg-modern-grid opacity-15 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1938] dark:bg-[#1F1938] light:bg-[#F0F2F5] border border-[#2C2645] dark:border-[#2C2645] light:border-[#E2E5EA] text-[#DB2777] text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider">
                <Sparkles size={13} />
                {badgeText}
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115] font-heading leading-tight whitespace-pre-line">
                {title}
              </h2>

              <p className="text-sm sm:text-lg text-[#9C94B8] dark:text-[#9C94B8] light:text-[#525866] leading-relaxed max-w-2xl">
                {subtitle}
              </p>

              {/* Verified Guarantees Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115]">
                  <ShieldCheck size={16} className="text-[#DB2777] shrink-0" />
                  <span>99.99% SLA Uptime</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115]">
                  <Zap size={16} className="text-[#DB2777] shrink-0" />
                  <span>Deterministic Latency</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115]">
                  <Headphones size={16} className="text-[#DB2777] shrink-0" />
                  <span>24×7 Senior NOC Access</span>
                </div>
              </div>
            </div>

            {/* Right Magnetic CTAs */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <MagneticButton
                variant="primary"
                onClick={() => navigate('/contact')}
                className="w-full py-4 text-xs font-bold tracking-widest uppercase rounded-full shadow-2xl cursor-pointer"
              >
                <span>REQUEST NOC PROPOSAL</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                variant="glass"
                onClick={() => navigate('/network')}
                className="w-full py-4 text-xs font-bold tracking-widest uppercase rounded-full cursor-pointer bg-[#1F1938] border-[#2C2645] text-[#F5F3FA] hover:border-[#DB2777]"
              >
                <Activity size={14} className="text-[#DB2777]" />
                <span>EXPLORE METRO POPS</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCtaSection;
