'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Agent, Property } from '@/types';
import PropertyCard from '@/components/ui/PropertyCard';
import { Phone, Mail, CheckCircle2, MapPin, Globe, Award, ChevronRight } from 'lucide-react';
import ConsultationModal from '@/components/ui/ConsultationModal';

interface Props {
  agent: Agent;
  properties: Property[];
}

export default function AgentProfileClient({ agent, properties }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container-custom">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-[12px] text-[#777777] mb-8">
        <Link href="/" className="hover:text-[#111111]">Home</Link>
        <ChevronRight className="w-3 h-3 text-[#CCCCCC]" />
        <Link href="/agents" className="hover:text-[#111111]">Agents</Link>
        <ChevronRight className="w-3 h-3 text-[#CCCCCC]" />
        <span className="text-[#111111] font-medium">{agent.name}</span>
      </nav>

      {/* Main Agent Header */}
      <div className="bg-[#F6F6F4] rounded-2xl p-8 sm:p-12 border border-[#E5E5E5] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-4 lg:col-span-3">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white border border-[#E5E5E5] shadow-sm">
            <Image
              src={agent.image}
              alt={agent.name}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover object-top"
            />
            <div className="absolute top-3.5 left-3.5 text-[9px] font-extrabold tracking-[0.25em] uppercase text-[#111111]/80 leading-tight">
              HORIZON ESTATE
            </div>
          </div>
        </div>

        <div className="md:col-span-8 lg:col-span-9 space-y-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
              {agent.title}
            </span>
            <h1 className="text-[32px] sm:text-[44px] font-bold text-[#111111] tracking-tight mt-0.5">
              {agent.name}
            </h1>
            <div className="text-[14px] text-[#666666]">{agent.role}</div>

            <div className="flex items-center gap-3 mt-3 text-[13px] text-[#111111] flex-wrap">
              <span className="font-bold">{agent.rating.toFixed(1)} / 5.0</span>
              <span className="text-[#777777]">({agent.reviewCount} verified client reviews)</span>
              <span>•</span>
              <span className="text-[#555555]">{agent.experienceYears} Years Advisory Experience</span>
              <span>•</span>
              <span className="text-emerald-700 font-semibold">{agent.verifiedTransactions} Completed Closings</span>
            </div>
          </div>

          <p className="text-[14.5px] leading-relaxed text-[#444444] max-w-2xl">
            {agent.bio}
          </p>

          {/* Quick Tags */}
          <div className="pt-2 flex flex-wrap gap-2">
            {agent.specialization.map((spec, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white border border-[#E5E5E5] rounded-md text-[11.5px] font-medium text-[#222222]"
              >
                {spec}
              </span>
            ))}
          </div>

          {/* Contact Actions */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary btn-sm"
            >
              Book Direct Consultation
            </button>
            <a
              href={`tel:${agent.phone}`}
              className="btn-white btn-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#666666]" />
              <span>{agent.phone}</span>
            </a>
            <a
              href={`mailto:${agent.email}`}
              className="btn-white btn-sm"
            >
              <Mail className="w-3.5 h-3.5 text-[#666666]" />
              <span>{agent.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Assigned Property Listings */}
      <div className="py-16">
        <div className="mb-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#111111]">
            Properties Represented by {agent.name}
          </h2>
          <p className="text-[13.5px] text-[#777777] mt-1">
            Active exclusive mandates and advisory instructions.
          </p>
        </div>

        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center bg-[#F6F6F4] rounded-xl border border-[#E5E5E5]">
            <p className="text-[14px] text-[#666666]">
              All current instructions for {agent.name} are currently under confidential NDA or under-offer.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 btn-primary btn-sm"
            >
              Request Off-Market Dossier
            </button>
          </div>
        )}
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialContext="Agent Direct Advisory"
        propertyTitle={`Private Consultation with ${agent.name}`}
      />
    </div>
  );
}
