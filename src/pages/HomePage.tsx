import React from 'react';
import { PageRoute } from '../types';
import { HeroSection } from '../components/sections/HeroSection';
import { MetricsSection } from '../components/sections/MetricsSection';
import { ScrollRevealTimeline } from '../components/ui/ScrollRevealTimeline';
import { ServicesStickySection } from '../components/sections/ServicesStickySection';
import { StackingInfraSection } from '../components/sections/StackingInfraSection';
import { WhyAxtroSection } from '../components/WhyAxtroSection';
import { WhoWeServeSection } from '../components/WhoWeServeSection';
import { LightwaveStreamSection } from '../components/sections/LightwaveStreamSection';
import { GlobalNetworkMap } from '../components/network/GlobalNetworkMap';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { Sparkles } from '../components/animated-icons';

interface HomePageProps {
  navigate: (route: PageRoute) => void;
}

export function HomePage({ navigate }: HomePageProps) {
  return (
    <div className="w-full relative overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* 1. IMMERSIVE HERO SECTION */}
      <HeroSection navigate={navigate} />

      {/* 2. VERIFIED TELEMETRY METRICS TICKER */}
      <MetricsSection />

      {/* 3. EDITORIAL NETWORK INTRODUCTION WITH SVG TOPOLOGY */}
      <section id="network-intro-section" className="py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17132A] border border-[#2C2645] text-[#DB2777] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles size={13} />
              THE INFRASTRUCTURE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-heading leading-tight text-[#F5F3FA] dark:text-[#F5F3FA] light:text-[#0F1115]">
              Built for networks that<br />
              <span className="text-[#DB2777]">cannot slow down.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#9C94B8] leading-relaxed">
              Engineered from bare-metal dark fiber upward for hyper-demanding platforms where downtime is measured in lost millions.
            </p>
          </div>

          {/* Modern Scroll Reveal Timeline Component */}
          <ScrollRevealTimeline />
        </div>
      </section>

      {/* 4. PINNED STICKY CORE SERVICES STORYTELLING */}
      <ServicesStickySection navigate={navigate} />

      {/* 5. STICKY PARALLAX CARD DECK INFRASTRUCTURE SECTION */}
      <StackingInfraSection />

      {/* 6. DYNAMIC 4-STEP ZERO COMPROMISE DEEP-DIVE */}
      <WhyAxtroSection />

      {/* 7. INTERACTIVE ORBITING ECOSYSTEM */}
      <WhoWeServeSection />

      {/* 8. OPTICAL LIGHTWAVE STREAM INTERCONNECT */}
      <LightwaveStreamSection navigate={navigate} />

      {/* 9. GLOBAL VERIFIED INTERCONNECT CORRIDOR MAP */}
      <section id="global-map-section" className="py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlobalNetworkMap />
        </div>
      </section>

      {/* 10. COMMAND CENTER FINAL CTA */}
      <FinalCtaSection navigate={navigate} />
    </div>
  );
}

export default HomePage;
