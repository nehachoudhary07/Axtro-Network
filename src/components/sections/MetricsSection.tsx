import React, { useRef, useState } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../../lib/gsap';
import { useMotionContext } from '../motion/MotionProvider';
import { Globe, Network, ShieldCheck, Clock } from '../animated-icons';

export function MetricsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { isReducedMotion } = useMotionContext();

  const metrics = [
    {
      id: 'pops',
      icon: <Globe className="w-5 h-5 text-[#DB2777]" />,
      targetNum: 150,
      suffix: '+',
      label: 'PoPs Worldwide',
      subtext: 'Carrier-neutral facilities',
    },
    {
      id: 'capacity',
      icon: <Network className="w-5 h-5 text-[#DB2777]" />,
      targetNum: 1.2,
      suffix: 'Tbps+',
      decimals: 1,
      label: 'Network Capacity',
      subtext: 'Multi-terabit backbone',
    },
    {
      id: 'sla',
      icon: <ShieldCheck className="w-5 h-5 text-[#DB2777]" />,
      targetNum: 99.99,
      suffix: '%',
      decimals: 2,
      label: 'Uptime SLA',
      subtext: 'Deterministic availability',
    },
    {
      id: 'support',
      icon: <Clock className="w-5 h-5 text-[#DB2777]" />,
      targetNum: 24,
      suffix: '/7',
      label: 'Expert NOC Support',
      subtext: 'Level-3 engineers direct',
    },
  ];

  const [counts, setCounts] = useState<{ [key: string]: number }>({
    pops: 150,
    capacity: 1.2,
    sla: 99.99,
    support: 24,
  });

  useGSAP(
    () => {
      if (isReducedMotion || !containerRef.current) return;

      const counterObj = { pops: 0, capacity: 0, sla: 90, support: 0 };
      let hasAnimated = false;

      const animateNumbers = () => {
        if (hasAnimated) return;
        hasAnimated = true;
        gsap.to(counterObj, {
          pops: 150,
          capacity: 1.2,
          sla: 99.99,
          support: 24,
          duration: 1.2,
          ease: 'power2.out',
          onUpdate: () => {
            setCounts({
              pops: Math.round(counterObj.pops),
              capacity: Number(counterObj.capacity.toFixed(1)),
              sla: Number(counterObj.sla.toFixed(2)),
              support: Math.round(counterObj.support),
            });
          },
        });
      };

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 90%',
        once: true,
        onEnter: animateNumbers,
      });
    },
    { scope: containerRef, dependencies: [isReducedMotion] }
  );

  return (
    <section
      ref={containerRef}
      id="metrics-section"
      className="py-8 sm:py-16 relative z-10 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#17132A]/90 dark:bg-[#17132A]/90 light:bg-white border border-[#2C2645] backdrop-blur-xl p-5 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {metrics.map((m) => (
              <div
                key={m.id}
                className="flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1F1938] border border-[#2C2645] flex items-center justify-center shadow-inner">
                    {m.icon}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#9C94B8] uppercase tracking-wider">
                    SLA VERIFIED
                  </span>
                </div>

                <div>
                  <div className="text-2xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115] flex items-baseline">
                    <span>
                      {m.decimals ? counts[m.id]?.toFixed(m.decimals) : counts[m.id]}
                    </span>
                    <span className="text-[#DB2777] text-xl sm:text-3xl font-bold ml-0.5">
                      {m.suffix}
                    </span>
                  </div>

                  <div className="font-heading font-bold text-xs sm:text-sm text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115] mt-1 sm:mt-2">
                    {m.label}
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#9C94B8] mt-0.5 font-mono">
                    {m.subtext}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MetricsSection;
