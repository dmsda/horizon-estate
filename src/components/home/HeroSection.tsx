'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';
import ConsultationModal from '@/components/ui/ConsultationModal';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [explorePillPos, setExplorePillPos] = useState<{ x: number; y: number } | null>(null);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const heroImageContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroImageContainerRef.current) return;
    const rect = heroImageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setExplorePillPos({ x, y });
  };

  return (
    <section className="relative pt-8 pb-14 lg:pt-12 lg:pb-20 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Hero Top Grid: Heading on left, Description on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-8 lg:mb-12">
          {/* Main Headline with line-by-line editorial reveal */}
          <div className="lg:col-span-8">
            <h1 className="animate-hero-title text-[38px] sm:text-[54px] lg:text-[70px] font-bold text-[#111111] leading-[1.06] tracking-tight">
              Find a place you <br className="hidden sm:inline" />will call home
            </h1>
            <div className="animate-hero-cta mt-6 flex items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary group"
              >
                <span>Book a call</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <Link
                href="/properties"
                className="btn-secondary group"
              >
                <span>Explore properties</span>
              </Link>
            </div>
          </div>

          {/* Supporting Copy */}
          <div className="lg:col-span-4 lg:pt-3">
            <p className="animate-hero-desc text-[14px] sm:text-[15px] leading-relaxed text-[#595959] font-normal">
              With us you will find not just accommodation, but a place where your new life begins, full of coziness and possibilities. Discover exceptional residences curated for architectural purity.
            </p>
            <div className="animate-hero-desc mt-4 flex items-center gap-3 text-[12px] text-[#555555]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-[pulseGently_3s_ease-in-out_infinite]"></span>
                <span>Active portfolio: 240+ properties</span>
              </span>
              <span>•</span>
              <span>Global private advisory</span>
            </div>
          </div>
        </div>

        {/* Hero Architectural Image with Cinematic Curtain & Depth Reveal */}
        <div 
          ref={heroImageContainerRef}
          onMouseEnter={() => setIsHoveringImage(true)}
          onMouseLeave={() => setIsHoveringImage(false)}
          onMouseMove={handleMouseMove}
          className="animate-hero-curtain relative w-full aspect-[16/9] sm:aspect-[21/10] overflow-hidden rounded-xl bg-[#F6F6F4] shadow-[0_8px_30px_rgba(0,0,0,0.06)] cursor-crosshair group"
        >
          <Image
            src="/images/hero/hero-luxury-villa.jpg"
            alt="Horizon Estate luxury black cantilever architectural villa at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
          />

          {/* Contextual Explore Pill following pointer smoothly on desktop */}
          {isHoveringImage && explorePillPos && (
            <div
              className="absolute pointer-events-none hidden lg:flex items-center gap-1.5 bg-[#111111]/90 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-2xl backdrop-blur-md -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
              style={{
                left: `${explorePillPos.x}px`,
                top: `${explorePillPos.y}px`,
              }}
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Explore Architecture</span>
            </div>
          )}

          {/* Subtle overlay badge entering smoothly */}
          <div className="animate-hero-badge absolute bottom-5 left-5 sm:bottom-7 sm:left-7 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-lg border border-[#E5E5E5] shadow-lg max-w-xs hidden sm:block transition-all duration-300 group-hover:border-[#111111]/30">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#595959]">
              Featured Architectural Estate
            </div>
            <div className="text-[13.5px] font-semibold text-[#111111] mt-0.5">
              Black Cantilever Residence
            </div>
            <div className="text-[11.5px] text-[#555555]">
              Aspen Highlands, CO • Off-Market Advisory
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialContext="Hero Book a Call"
      />
    </section>
  );
}
