import React, { useRef } from 'react';
import { PageRoute } from '../../types';
import { useTheme } from '../../context/ThemeContext';
import { MagneticButton } from '../motion/MagneticButton';
import { TextReveal } from '../motion/TextReveal';
import { ArrowRight } from '../animated-icons';
import heroGlobeDarkImg from '../../assets/hero-globe-dark.jpg';
import heroGlobeLightImg from '../../assets/hero-globe-light.jpg';

interface HeroSectionProps {
  navigate: (route: PageRoute) => void;
}

export function HeroSection({ navigate }: HeroSectionProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      id="hero-section"
      className={`relative min-h-[100dvh] lg:min-h-screen flex flex-col justify-between pt-20 sm:pt-28 md:pt-32 pb-6 sm:pb-10 overflow-hidden select-none transition-colors duration-300 ${
        isDark ? 'bg-[#06040A]' : 'bg-[#F5F3FA]'
      }`}
    >
      {/* 1. Static Earth Globe Background Images (Exact user-provided assets for Dark & Light modes) */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        {/* Dynamic Theme Earth Globe Image (Light / Dark) */}
        <img
          key={isDark ? 'dark-globe' : 'light-globe'}
          src={isDark ? heroGlobeDarkImg : heroGlobeLightImg}
          alt={isDark ? "AXTRO Global Network Infrastructure Earth Globe (Dark Theme)" : "AXTRO Global Network Infrastructure Earth Globe (Light Theme)"}
          className="w-full h-full max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1850px] object-cover sm:object-contain object-center sm:object-top opacity-90 sm:opacity-95 transition-opacity duration-500 transform translate-y-[2%] sm:translate-y-[-3%] md:translate-y-[-1%] scale-[1.04] sm:scale-100"
          loading="eager"
        />

        {/* Top ambient blend */}
        <div
          className={`absolute inset-x-0 top-0 h-24 sm:h-28 bg-gradient-to-b pointer-events-none transition-colors duration-300 ${
            isDark ? 'from-[#06040A] to-transparent' : 'from-[#F5F3FA] to-transparent'
          }`}
        />

        {/* Bottom smooth fade into Metrics Section */}
        <div
          className={`absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t pointer-events-none transition-colors duration-300 ${
            isDark ? 'from-[#06040A] to-transparent' : 'from-[#F5F3FA] to-transparent'
          }`}
        />
      </div>

      {/* 2. Hero Editorial Copy & Typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col items-center text-center pt-2 sm:pt-8 md:pt-12">
        {/* Eyebrow Text */}
        <div className="mb-2.5 sm:mb-5">
          <span className="text-[10px] sm:text-xs md:text-sm font-mono font-bold tracking-[0.25em] text-[#DB2777] uppercase drop-shadow-[0_2px_8px_rgba(219,39,119,0.4)]">
            THE AXIS OF INTERNET
          </span>
        </div>

        {/* Display Headline */}
        <h1
          key={`headline-${theme}`}
          className={`text-3xl sm:text-5xl md:text-6xl lg:text-[5.25rem] font-black tracking-tight font-heading leading-[1.1] sm:leading-[1.08] max-w-5xl drop-shadow-sm transition-colors duration-300 ${
            isDark ? 'text-[#F5F3FA]' : 'text-[#0F1115]'
          }`}
        >
          <TextReveal delay={0.1}>
            <span>Stronger Network.</span>
          </TextReveal>
          <TextReveal delay={0.25}>
            <span>Stronger Tomorrow</span>
            <span className="text-[#DB2777]">.</span>
          </TextReveal>
        </h1>

        {/* Subtitle */}
        <div
          className={`max-w-2xl mt-3.5 sm:mt-5 text-xs sm:text-base md:text-lg leading-relaxed transition-colors duration-300 px-2 sm:px-0 ${
            isDark ? 'text-[#9C94B8]' : 'text-[#525866]'
          }`}
        >
          <TextReveal delay={0.4}>
            <p>
              High performance network infrastructure, DDoS protection, IP transit and IX connectivity for a fearless digital future.
            </p>
          </TextReveal>
        </div>

        {/* CTAs */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-9">
          <MagneticButton
            variant="primary"
            onClick={() => navigate('/contact')}
            className="px-5 sm:px-8 py-3 sm:py-4 text-[11px] sm:text-xs font-bold tracking-widest uppercase rounded-full shadow-[0_0_25px_rgba(219,39,119,0.5)] cursor-pointer bg-gradient-to-r from-[#DB2777] to-[#BE185D] text-white hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <span>Explore Network</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </MagneticButton>

          <button
            onClick={() => navigate('/services/ip-transit')}
            className={`px-4 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs font-bold tracking-widest uppercase hover:text-[#DB2777] transition-colors relative group cursor-pointer ${
              isDark ? 'text-[#F5F3FA]' : 'text-[#0F1115]'
            }`}
          >
            <span>View Services</span>
            <span
              className={`absolute bottom-1.5 left-4 right-4 h-[1.5px] group-hover:bg-[#DB2777] transition-all duration-300 ${
                isDark ? 'bg-[#2C2645]' : 'bg-[#D1D5DB]'
              }`}
            />
          </button>
        </div>
      </div>

      {/* 3. Empty bottom spacer for layout balance */}
      <div className="relative z-10 h-2 sm:h-8" />
    </section>
  );
}

export default HeroSection;
