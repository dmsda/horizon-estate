'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { agents } from '@/data/agents';
import { ChevronLeft, ChevronRight, AtSign, Phone, Check, ArrowUpRight } from 'lucide-react';
import ConsultationModal from '@/components/ui/ConsultationModal';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AgentsSection() {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleCopyPhone = (phone: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const handleOpenEmail = (agentName: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedAgent(agentName);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-[#E5E5E5]/70">
      <div className="container-custom">
        {/* Header with Navigation Arrows (matching Reference 1) */}
        <ScrollReveal direction="up" distance={18} duration={500}>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-[28px] sm:text-[36px] font-bold text-[#111111] tracking-tight">
                Expert agents
              </h2>
              <p className="text-[14px] text-[#595959] mt-1 font-normal">
                Meet the people who make the difference — experienced advisors across prime markets.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="btn-icon"
                aria-label="Previous agents"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="btn-icon"
                aria-label="Next agents"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Agent Cards Grid / Scroll (matching Reference 1) */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {agents.map((agent, idx) => (
            <ScrollReveal key={agent.id} direction="up" distance={20} delay={idx * 80} duration={550}>
              <div
                className="group flex flex-col bg-white border border-[#E5E5E5] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#CCCCCC] h-full"
              >
                {/* Agent Photo with HORIZON ESTATE Watermark */}
                <Link 
                  href={`/agents/${agent.slug}`}
                  className="relative block aspect-square w-full bg-[#F6F6F4] overflow-hidden"
                >
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
                  />

                  {/* Subdued Brand Watermark in Top-Left (matching Reference 1) */}
                  <div className="absolute top-3.5 left-3.5 text-[9px] font-extrabold tracking-[0.25em] uppercase text-[#111111]/80 leading-tight pointer-events-none select-none">
                    <div>HORIZON</div>
                    <div>ESTATE</div>
                  </div>
                </Link>

                {/* Agent Information */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <Link 
                      href={`/agents/${agent.slug}`}
                      className="text-[17px] font-bold text-[#111111] hover:text-[#555555] transition-colors flex items-center justify-between"
                    >
                      <span>{agent.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#111111]" />
                    </Link>
                    <div className="text-[12.5px] text-[#595959] mt-0.5">
                      {agent.role}
                    </div>

                    {/* Rating / Review count */}
                    <div className="mt-2.5 text-[12.5px] font-medium text-[#111111] flex items-center gap-1.5">
                      <span className="font-bold">{agent.rating.toFixed(1)}</span>
                      <span className="text-[#595959]">/ {agent.reviewCount} reviews</span>
                    </div>
                  </div>

                  {/* Action Buttons: Phone pill + @ button (matching Reference 1) */}
                  <div className="flex items-center gap-2 pt-1 border-t border-[#F0F0EE]">
                    <button
                      onClick={(e) => handleCopyPhone(agent.phone, e)}
                      aria-live="polite"
                      className="flex-1 py-2 px-3 rounded-full bg-[#111111] text-white text-[12px] font-medium hover:bg-black active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                      title="Click to copy phone number"
                    >
                      {copiedPhone === agent.phone ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>Copied to clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Phone className="w-3 h-3 text-white/70" />
                          <span>{agent.phone}</span>
                        </>
                      )}
                    </button>

                  <button
                    onClick={(e) => handleOpenEmail(agent.name, e)}
                    className="w-8 h-8 rounded-full border border-[#E5E5E5] flex items-center justify-center text-[#111111] hover:bg-[#F6F6F4] hover:border-[#111111] active:scale-95 transition-all duration-200 cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                    title={`Send message to ${agent.name}`}
                    aria-label={`Send direct message to ${agent.name}`}
                  >
                    <AtSign className="w-3.5 h-3.5 text-[#555555]" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
        </div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialContext="Agent Contact"
        propertyTitle={selectedAgent ? `Direct advisory with ${selectedAgent}` : undefined}
      />
    </section>
  );
}
