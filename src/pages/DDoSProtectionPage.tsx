import React from 'react';
import { PageRoute } from '../types';
import { DDoSTrafficFlow } from '../components/svg/DDoSTrafficFlow';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { ArrowRight, Shield, Cpu, Activity, Zap, ShieldAlert, CheckCircle2 } from '../components/animated-icons';

interface DDoSProtectionPageProps {
  navigate: (route: PageRoute) => void;
}

export function DDoSProtectionPage({ navigate }: DDoSProtectionPageProps) {
  const features = [
    {
      title: 'Multi-Tbps Edge Protection',
      desc: 'Protection at the network infrastructure layer, neutralizing volumetric L3/L4/L7 floods before they saturate downstream customer transit links.',
      icon: <Shield className="w-6 h-6 text-[#DB2777]" />,
      tag: 'Edge Filtering',
    },
    {
      title: 'AI Behavioral Packet Inspection',
      desc: 'Dissect protocol anomalies and zero-day threat patterns with deep packet inspection while allowing legitimate traffic to pass seamlessly.',
      icon: <Cpu className="w-6 h-6 text-[#DB2777]" />,
      tag: 'Deep Heuristics',
    },
    {
      title: 'Sub-Second Automated Scrubbing',
      desc: 'Autonomous diversion kicks in within 800ms of attack detection. No human intervention needed to safeguard line-rate throughput.',
      icon: <Activity className="w-6 h-6 text-[#DB2777]" />,
      tag: '< 1s Detection',
    },
    {
      title: 'Zero-Degradation Latency SLA',
      desc: 'Inline scrubbing path maintains pristine round-trip times and jitter consistency even during multi-hundred-gigabit attack storms.',
      icon: <Zap className="w-6 h-6 text-[#DB2777]" />,
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
    <div className="w-full transition-colors relative overflow-hidden bg-[#0E0B1A]">
      {/* HERO SECTION WITH REAL-TIME TRAFFIC MITIGATION VISUALIZATION */}
      <section id="ddos-hero" className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17132A] border border-[#2C2645] text-[#DB2777] text-xs font-mono font-semibold uppercase tracking-wider">
                <ShieldAlert size={14} />
                MULTI-TBPS CARRIER-GRADE DEFENSE
              </div>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black tracking-tight text-[#F5F3FA] font-heading leading-[1.15]">
                DDoS PROTECTION<br />
                <span className="text-[#DB2777]">BUILT FOR ZERO DOWNTIME.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#9C94B8] leading-relaxed">
                Protect critical network infrastructure from volumetric attacks and sophisticated application floods with autonomous edge mitigation.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-2xl cursor-pointer"
                >
                  <span>REQUEST DDOS PROTECTION PROPOSAL</span>
                  <ArrowRight size={14} />
                </button>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#17132A] border border-[#2C2645] text-xs font-mono text-[#DB2777]">
                  <span className="w-2 h-2 rounded-full bg-[#DB2777] animate-pulse"></span>
                  <span>10+ TBPS GLOBAL SCRUBBING CAPACITY</span>
                </div>
              </div>
            </div>

            {/* Right Column: Incoming Traffic SVG Flow Visualization */}
            <div className="lg:col-span-7 w-full flex flex-col items-center justify-center">
              <div className="w-full">
                <DDoSTrafficFlow />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY TECHNICAL CAPABILITIES */}
      <section className="py-20 border-t border-[#2C2645] bg-[#17132A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="bento-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1F1938] border border-[#2C2645] flex items-center justify-center">
                      {feat.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#1F1938] text-[#DB2777] border border-[#2C2645]">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-[#F5F3FA] mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-[#9C94B8] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2C2645] flex items-center gap-1.5 text-xs font-mono text-[#DB2777]">
                  <CheckCircle2 size={13} />
                  <span>Always-On Protection</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-STAGE MITIGATION FLOW */}
      <section className="py-24 border-t border-[#2C2645] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-[#F5F3FA] font-heading">
              Four-Stage Filtration Pipeline
            </h2>
            <p className="text-sm text-[#9C94B8] mt-2">
              Autonomous sub-second mitigation cycle engineered to absorb attacks without disrupting live connections.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((ws) => (
              <div
                key={ws.step}
                className="p-6 rounded-2xl bg-[#17132A] border border-[#2C2645] flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black font-mono text-[#DB2777] mb-4">
                    {ws.step}
                  </div>
                  <h3 className="text-base font-bold font-heading text-[#F5F3FA] mb-2">
                    {ws.title}
                  </h3>
                  <p className="text-xs text-[#9C94B8] leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection
        navigate={navigate}
        title="SECURE YOUR NETWORK BEFORE THE NEXT VOLUMETRIC STORM."
        subtitle="Connect with our NOC team to deploy custom BGP anycast route filters and dedicated edge mitigation."
        badgeText="MISSION-CRITICAL DDOS RESILIENCE"
      />
    </div>
  );
}

export default DDoSProtectionPage;
