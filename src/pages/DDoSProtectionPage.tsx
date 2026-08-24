import React from 'react';
import { PageRoute } from '../types';
import { DDoSTrafficFlow } from '../components/svg/DDoSTrafficFlow';
import { DdosIcon } from '../components/svg/ServiceIcons';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { ArrowRight, Shield, Cpu, Activity, Zap, Sparkles, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface DDoSProtectionPageProps {
  navigate: (route: PageRoute) => void;
}

export function DDoSProtectionPage({ navigate }: DDoSProtectionPageProps) {
  const features = [
    {
      title: 'Multi-Tbps Edge Protection',
      desc: 'Protection at the network infrastructure layer, neutralizing volumetric L3/L4/L7 floods before they saturate downstream customer transit links.',
      icon: <Shield className="w-6 h-6 text-[#245FA8]" />,
      tag: 'Edge Filtering',
    },
    {
      title: 'AI Behavioral Packet Inspection',
      desc: 'Dissect protocol anomalies and zero-day threat patterns with deep packet inspection while allowing legitimate traffic to pass seamlessly.',
      icon: <Cpu className="w-6 h-6 text-[#245FA8]" />,
      tag: 'Deep Heuristics',
    },
    {
      title: 'Sub-Second Automated Scrubbing',
      desc: 'Autonomous diversion kicks in within 800ms of attack detection. No human intervention needed to safeguard line-rate throughput.',
      icon: <Activity className="w-6 h-6 text-[#245FA8]" />,
      tag: '< 1s Detection',
    },
    {
      title: 'Zero-Degradation Latency SLA',
      desc: 'Inline scrubbing path maintains pristine round-trip times and jitter consistency even during multi-hundred-gigabit attack storms.',
      icon: <Zap className="w-6 h-6 text-[#245FA8]" />,
      tag: 'Strict Jitter SLA',
    },
  ];

  const workflowSteps = [
    { step: '01', title: 'Internet Ingress', desc: 'All incoming packets enter via AXTRO Anycast BGP border routers across Delhi, Mumbai, and Chennai.' },
    { step: '02', title: 'Hardware Scrubbing Core', desc: 'Real-time stateful analysis and deep-packet inspection dissect protocol anomalies and volumetric floods.' },
    { step: '03', title: 'Edge Quarantine & Drop', desc: 'SYN floods, UDP amplifications, and malformed packets are dropped instantly at the carrier edge.' },
    { step: '04', title: 'Clean Traffic Delivery', desc: 'Verified legitimate customer traffic is forwarded over low-latency dedicated interconnects to your origin.' },
  ];

  return (
    <div className="w-full transition-colors relative overflow-hidden bg-[#030507]">
      {/* HERO SECTION */}
      <section id="ddos-hero" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider">
              <ShieldAlert size={14} />
              MULTI-TBPS CARRIER-GRADE DEFENSE
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F5F7FA] font-heading leading-tight">
              DDoS PROTECTION<br />
              <span className="text-[#245FA8]">BUILT FOR ZERO DOWNTIME.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#A7B0BE] leading-relaxed max-w-2xl">
              Protect critical network infrastructure from volumetric attacks and sophisticated application floods with autonomous edge mitigation.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-2xl"
              >
                <span>REQUEST DDOS PROTECTION PROPOSAL</span>
                <ArrowRight size={14} />
              </button>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#07101C] border border-[#17263A] text-xs font-mono text-[#245FA8]">
                <span className="w-2 h-2 rounded-full bg-[#245FA8] animate-pulse"></span>
                <span>10+ TBPS GLOBAL SCRUBBING CAPACITY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SVG TRAFFIC FLOW VISUALIZATION */}
      <section id="ddos-visualization" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Activity size={13} />
              EDGE TRAFFIC DISSECTION
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#F5F7FA] font-heading">
              REAL-TIME MITIGATION ARCHITECTURE
            </h2>
            <p className="text-sm text-[#A7B0BE] mt-2">
              Malicious volumetric packets terminate instantly at our network perimeter, ensuring only clean, verified traffic reaches your origin servers.
            </p>
          </div>

          <div className="bg-[#07101C] rounded-3xl p-4 sm:p-8 shadow-2xl border border-[#17263A]">
            <DDoSTrafficFlow />
          </div>
        </div>
      </section>

      {/* FEATURES BENTO SECTION */}
      <section id="ddos-features" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              SECURITY CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#F5F7FA] font-heading">
              DESIGNED FOR UNCOMPROMISED UPTIME
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="bento-card p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-[#030507] border border-[#17263A] group-hover:scale-110 transition-transform">
                      {feat.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#030507] text-[#245FA8] border border-[#17263A]">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F7FA] font-heading mb-3">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-[#A7B0BE] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#17263A] flex items-center gap-2 text-xs text-[#245FA8] font-mono">
                  <CheckCircle2 size={14} />
                  <span>Always-On Autonomous Protection</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="ddos-how-it-works" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              SEQUENTIAL PROCESSING
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#F5F7FA] font-heading">
              HOW IT WORKS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {workflowSteps.map((step) => (
              <div
                key={step.step}
                className="bento-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-mono font-bold text-[#245FA8] mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-[#F5F7FA] font-heading mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7B0BE] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#17263A] text-[10px] text-[#245FA8] font-mono">
                  ACTIVE MITIGATION PIPELINE
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCtaSection
        navigate={navigate}
        title="KEEP YOUR NETWORK ONLINE."
        subtitle="Talk to AXTRO about your DDoS protection requirements."
        badgeText="SHIELD YOUR ASSETS"
      />
    </div>
  );
}

export default DDoSProtectionPage;
