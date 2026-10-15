import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { properties } from '@/data/properties';
import PropertyCard from '@/components/ui/PropertyCard';
import { Building2, ShieldCheck, TrendingUp, Users, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prime Commercial & Institutional Real Estate | Horizon Estate',
  description:
    'Institutional-grade commercial properties, flagship headquarters, and prime mixed-use assets across European and American economic capitals.',
};

export default function CommercialPage() {
  const commercialProps = properties.filter((p) => p.transactionType === 'commercial' || p.propertyType === 'Commercial');

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl pb-10 border-b border-[#E5E5E5]">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
            Institutional Asset Advisory
          </span>
          <h1 className="text-[34px] sm:text-[48px] font-bold text-[#111111] tracking-tight mt-1">
            Commercial & Mixed-Use
          </h1>
          <p className="text-[15px] leading-relaxed text-[#666666] mt-3">
            Advising corporate occupiers, family offices, and institutional funds on Class-A+ commercial office towers, prime high-street retail, and mixed-use urban transformations.
          </p>
        </div>

        {/* Commercial Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-b border-[#E5E5E5] mb-12 text-[13px] text-[#444444]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#F6F6F4] flex items-center justify-center shrink-0 border border-[#E5E5E5]">
              <Building2 className="w-4 h-4 text-[#111111]" />
            </div>
            <div>
              <div className="font-bold text-[#111111]">Class A+ Covenants</div>
              <div className="text-[12px] text-[#777777]">Long-lease blue-chip multinational tenants</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#F6F6F4] flex items-center justify-center shrink-0 border border-[#E5E5E5]">
              <TrendingUp className="w-4 h-4 text-[#111111]" />
            </div>
            <div>
              <div className="font-bold text-[#111111]">Yield Optimization</div>
              <div className="text-[12px] text-[#777777]">Structured cap rates and index-linked escalation</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#F6F6F4] flex items-center justify-center shrink-0 border border-[#E5E5E5]">
              <ShieldCheck className="w-4 h-4 text-[#111111]" />
            </div>
            <div>
              <div className="font-bold text-[#111111]">ESG & Green Accreditations</div>
              <div className="text-[12px] text-[#777777]">LEED Platinum & BREEAM Outstanding standards</div>
            </div>
          </div>
        </div>

        {/* Commercial Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {commercialProps.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>

        {/* Commercial Brokerage Consultation */}
        <div className="mt-20 bg-[#F6F6F4] rounded-2xl p-8 sm:p-12 border border-[#E5E5E5] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl space-y-2 text-center md:text-left">
            <h3 className="text-[22px] font-bold text-[#111111]">
              Managing Director of Commercial Advisory
            </h3>
            <p className="text-[13.5px] text-[#666666]">
              Direct corporate advisory with Carlos Garcia on confidential off-market portfolios across Madrid, Miami, and London.
            </p>
          </div>
          <Link
            href="/agents/carlos-garcia"
            className="btn-primary shrink-0"
          >
            Connect with Carlos Garcia
          </Link>
        </div>
      </div>
    </div>
  );
}
