'use client';

import React, { useState } from 'react';
import { testimonials } from '@/data/testimonials';
import { Star, ShieldCheck, Quote, ArrowRight } from 'lucide-react';
import ConsultationModal from '@/components/ui/ConsultationModal';

export default function TrustTestimonialsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-[#FFFFFF]">
      <div className="container-custom">
        {/* Header with Trustpilot proof (matching Reference 3) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-12 border-b border-[#E5E5E5]">
          <div className="max-w-xl">
            <h2 className="text-[30px] sm:text-[42px] font-bold text-[#111111] leading-[1.14] tracking-tight">
              We help you discover and own the world’s finest real estate
            </h2>
          </div>

          {/* Trustpilot Review Box (matching Reference 3) */}
          <div className="flex items-center gap-3 bg-[#F6F6F4] px-5 py-3.5 rounded-xl border border-[#E5E5E5] shrink-0 self-start lg:self-center">
            <div className="flex items-center gap-1.5">
              {/* Trustpilot Green Star Badge */}
              <div className="flex items-center gap-1 text-[#00B67A]">
                <Star className="w-5 h-5 fill-[#00B67A]" />
                <span className="font-extrabold text-[15px] text-[#111111] tracking-tight">Trustpilot</span>
              </div>
            </div>

            <div className="h-4 w-px bg-[#D5D5D5]"></div>

            {/* 5 Green Rating Squares */}
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-[#00B67A] flex items-center justify-center rounded-[1px]">
                  <Star className="w-2.5 h-2.5 fill-white text-white" />
                </div>
              ))}
            </div>

            <div className="text-[12px] font-semibold text-[#555555]">
              1280 reviews
            </div>
          </div>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-[#F6F6F4] p-6 sm:p-8 rounded-xl border border-[#E5E5E5] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-[#111111]/30" />
                <p className="text-[14px] leading-relaxed text-[#333333] font-normal">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E5E5]/70">
                <div className="font-bold text-[14px] text-[#111111]">
                  {test.clientName}
                </div>
                <div className="text-[12px] text-[#777777]">
                  {test.clientRole} • {test.location}
                </div>
                <div className="text-[11px] font-medium text-[#111111] mt-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#111111]" />
                  <span>Acquired: {test.propertyAcquired}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#111111] text-white text-[13.5px] font-medium hover:bg-black transition-colors cursor-pointer shadow-sm"
          >
            <span>Discuss your property criteria</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialContext="Testimonials Discussion"
      />
    </section>
  );
}
