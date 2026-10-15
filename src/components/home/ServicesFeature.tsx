'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ConsultationModal from '@/components/ui/ConsultationModal';

import ScrollReveal from '@/components/ui/ScrollReveal';

interface StepData {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  image: string;
  planTitle: string;
}

const steps: StepData[] = [
  {
    id: 'requirements',
    number: '01',
    label: 'Request & requirements',
    title: 'Request & requirements',
    description: 'We align on architectural aesthetics, target locations, light orientation, and budget parameters to formulate a discreet acquisition brief.',
    image: '/images/hero/hero-luxury-villa.jpg',
    planTitle: 'Client Acquisition Brief'
  },
  {
    id: 'selection',
    number: '02',
    label: 'Property selection',
    title: 'Property selection',
    description: 'Agent provides a tailored list of verified listings. Includes photos, 3D tours, and offline/online viewings.',
    image: '/images/services/property-selection.jpg',
    planTitle: 'Architectural Blueprint'
  },
  {
    id: 'legal',
    number: '03',
    label: 'Legal support',
    title: 'Legal support',
    description: 'Tier-one international legal partners conduct thorough title searches, encumbrance verification, tax structuring, and escrow coordination.',
    image: '/images/services/legal-support.jpg',
    planTitle: 'Cadastral & Title Audit'
  },
  {
    id: 'transfer',
    number: '04',
    label: 'Key transfer',
    title: 'Key transfer',
    description: 'Final deed notarization, secure fund settlement, property handover, and introduction to our dedicated private concierge team.',
    image: '/images/hero/couple-keys.jpg',
    planTitle: 'Handover & Concierge'
  }
];

export default function ServicesFeature() {
  const [activeStepIndex, setActiveStepIndex] = useState(1); // Default to 'Property selection'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeStep = steps[activeStepIndex];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFFFF] border-t border-[#E5E5E5]/70">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={18} duration={500}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-12 lg:mb-16">
            <div className="lg:col-span-6">
              <h2 className="text-[32px] sm:text-[44px] font-bold text-[#111111] leading-[1.12] tracking-tight">
                See what we offer <br className="hidden sm:inline" />and how it works
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pl-12 lg:pt-2">
              <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#595959]">
                Virtual tours, curated listings, and expert guidance — everything you need to explore and buy with confidence.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Active Step Info and Step Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-10">
            <ScrollReveal direction="up" distance={20} delay={100} duration={600}>
              <div key={activeStep.id} className="transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <span className="text-[11px] font-mono tracking-widest text-[#888888] uppercase block mb-1">
                  Phase {activeStep.number} of 04
                </span>
                <h3 className="text-[28px] sm:text-[34px] font-bold text-[#111111] tracking-tight">
                  {activeStep.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#555555] mt-4 font-normal">
                  {activeStep.description}
                </p>

                <div className="mt-7">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn-secondary btn-sm"
                  >
                    Get consultation
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Steps Vertical List */}
            <ScrollReveal direction="up" distance={15} delay={200} duration={550}>
              <div 
                role="tablist"
                aria-label="Acquisition workflow steps"
                className="pt-6 border-t border-[#F0F0EE] space-y-2.5"
              >
                {steps.map((step, idx) => {
                  const isActive = idx === activeStepIndex;
                  return (
                    <button
                      key={step.id}
                      role="tab"
                      id={`step-tab-${step.id}`}
                      aria-selected={isActive}
                      aria-controls={`step-panel-${step.id}`}
                      onClick={() => setActiveStepIndex(idx)}
                      className={`w-full text-left flex items-center justify-between py-2 px-3 rounded-lg cursor-pointer transition-all duration-200 group ${
                        isActive ? 'bg-[#F6F6F4]' : 'hover:bg-[#FBFBFA]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-[11px] font-mono transition-colors ${
                          isActive ? 'text-[#111111] font-bold' : 'text-[#999999]'
                        }`}>
                          {step.number}
                        </span>
                        <span
                          className={`text-[13px] transition-colors ${
                            isActive ? 'text-[#111111] font-semibold' : 'text-[#666666] group-hover:text-[#111111]'
                          }`}
                        >
                          {step.label}
                        </span>
                      </div>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#111111] inline-block animate-pulse" aria-hidden="true"></span>
                      )}
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Architectural Image with Overlaid CAD Floor Plan Card */}
          <div className="lg:col-span-7 relative">
            <ScrollReveal direction="left" distance={24} delay={150} duration={700}>
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-[#F6F6F4] shadow-[0_6px_25px_rgba(0,0,0,0.04)] group">
                <Image
                  key={activeStep.image}
                  src={activeStep.image}
                  alt={activeStep.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                />

                {/* Floating Architectural CAD Floor Plan Card */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-44 sm:w-60 bg-white/95 p-2.5 sm:p-3 rounded-lg border border-[#E5E5E5] shadow-xl backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-white border border-[#F0F0EE]">
                    <Image
                      src="/images/properties/floor-plan-sample.jpg"
                      alt="Architectural Floor Plan CAD schematic"
                      fill
                      sizes="240px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[10px] text-[#777777]">
                    <span className="font-semibold text-[#111111] uppercase tracking-wider">
                      {activeStep.planTitle}
                    </span>
                    <span>Scale 1:100</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialContext="Services Consultation"
      />
    </section>
  );
}
