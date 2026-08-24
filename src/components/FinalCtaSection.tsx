import React from 'react';
import { PageRoute } from '../types';
import { ArrowRight, ShieldCheck, Zap, Headphones, Sparkles, Activity } from 'lucide-react';

interface FinalCtaSectionProps {
  navigate: (route: PageRoute) => void;
  title?: string;
  subtitle?: string;
  badgeText?: string;
}

export function FinalCtaSection({
  navigate,
  title = 'CONNECT YOUR INFRASTRUCTURE TO THE AXIS TODAY.',
  subtitle = 'Whether deploying 10G/100G IP transit, cross-connecting at Connect IX, or securing your network against volumetric DDoS attacks, our engineers are ready.',
  badgeText = 'READY FOR CARRIER-GRADE INTERCONNECTION?',
}: FinalCtaSectionProps) {
  return (
    <section id="final-cta-section" className="py-20 sm:py-28 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-[#07101C] border border-[#17263A] p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17263A] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider">
                <Sparkles size={13} />
                {badgeText}
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#F5F7FA] font-heading leading-tight whitespace-pre-line">
                {title.includes('AXIS') ? (
                  title
                ) : (
                  <span className="text-[#245FA8]">{title}</span>
                )}
              </h2>

              <p className="text-base sm:text-lg text-[#A7B0BE] leading-relaxed max-w-2xl">
                {subtitle}
              </p>

              {/* Guarantees Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-[#F5F7FA]">
                  <ShieldCheck size={16} className="text-[#245FA8] shrink-0" />
                  <span>99.999% SLA Uptime</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#F5F7FA]">
                  <Zap size={16} className="text-[#245FA8] shrink-0" />
                  <span>Sub-35ms Fast Provisioning</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#F5F7FA]">
                  <Headphones size={16} className="text-[#A7B0BE] shrink-0" />
                  <span>24×7 Senior NOC Access</span>
                </div>
              </div>
            </div>

            {/* Right CTAs */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <button
                id="cta-get-connected-btn"
                onClick={() => navigate('/contact')}
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-xl"
              >
                <span>REQUEST NOC PROPOSAL</span>
                <ArrowRight size={15} />
              </button>

              <button
                id="cta-explore-network-btn"
                onClick={() => navigate('/network')}
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#F5F7FA] btn-glass rounded-full"
              >
                <Activity size={15} className="text-[#245FA8]" />
                <span>EXPLORE METRO POPS</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCtaSection;
