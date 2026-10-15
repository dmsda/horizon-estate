'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, PhoneCall } from 'lucide-react';
import ConsultationModal from '@/components/ui/ConsultationModal';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function FinalCtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-t border-[#E5E5E5]/70">
      <div className="container-custom">
        <ScrollReveal direction="up" distance={20} duration={600}>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#777777]">
              Horizon Private Advisory
            </span>
            <h2 className="text-[36px] sm:text-[50px] font-bold text-[#111111] leading-[1.08] tracking-tight">
              Your next chapter starts <br className="hidden sm:inline" />with the right place.
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#666666] max-w-xl mx-auto font-normal">
              Tell us what you are looking for and let our international advisory team help you discover the possibilities.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary btn-lg group"
              >
                <span>Book a consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <Link
                href="/properties"
                className="btn-secondary btn-lg"
              >
                Explore properties
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialContext="Final CTA Section"
      />
    </section>
  );
}
