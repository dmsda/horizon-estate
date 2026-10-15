import React from 'react';
import { Metadata } from 'next';
import { properties } from '@/data/properties';
import PropertyCard from '@/components/ui/PropertyCard';
import Link from 'next/link';
import { ShieldCheck, Calendar, Key, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prime Rentals & Seasonal Residences | Horizon Estate',
  description:
    'Discover exceptional short and long-term prime rentals across London, the Mediterranean, and Aspen, featuring dedicated concierge and turnkey furnishing.',
};

export default function RentalsPage() {
  const rentalProperties = properties.filter(
    (p) => p.transactionType === 'rent' || p.transactionType === 'buy' || p.transactionType === 'investment'
  );

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl pb-10 border-b border-[#E5E5E5]">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
            Horizon Tenancy Advisory
          </span>
          <h1 className="text-[34px] sm:text-[48px] font-bold text-[#111111] tracking-tight mt-1">
            Prime Residential Rentals
          </h1>
          <p className="text-[15px] leading-relaxed text-[#666666] mt-3">
            Fully serviced executive tenancies and seasonal architectural hideaways. Every rental undergoes rigorous white-glove inspection with guaranteed maintenance response and bespoke concierge access.
          </p>
        </div>

        {/* Benefits banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-b border-[#E5E5E5] mb-12 text-[13px] text-[#444444]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#F6F6F4] flex items-center justify-center shrink-0 border border-[#E5E5E5]">
              <ShieldCheck className="w-4 h-4 text-[#111111]" />
            </div>
            <div>
              <div className="font-bold text-[#111111]">Vetted Standards</div>
              <div className="text-[12px] text-[#777777]">100% turnkey furnished with verified inventory</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#F6F6F4] flex items-center justify-center shrink-0 border border-[#E5E5E5]">
              <Calendar className="w-4 h-4 text-[#111111]" />
            </div>
            <div>
              <div className="font-bold text-[#111111]">Flexible Tenancies</div>
              <div className="text-[12px] text-[#777777]">From 1-month seasonal to multi-year corporate leases</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#F6F6F4] flex items-center justify-center shrink-0 border border-[#E5E5E5]">
              <Key className="w-4 h-4 text-[#111111]" />
            </div>
            <div>
              <div className="font-bold text-[#111111]">Private Concierge</div>
              <div className="text-[12px] text-[#777777]">Dedicated house manager and 24/7 client line</div>
            </div>
          </div>
        </div>

        {/* Rentals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {rentalProperties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>

        {/* Custom Rental Request CTA */}
        <div className="mt-20 bg-[#F6F6F4] rounded-2xl p-8 sm:p-12 border border-[#E5E5E5] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-lg space-y-2 text-center md:text-left">
            <h3 className="text-[22px] font-bold text-[#111111]">
              Seeking a bespoke relocation or seasonal lease?
            </h3>
            <p className="text-[13.5px] text-[#666666]">
              Our prime rental team manages confidential off-market penthouses and coastal estates not publicly advertised.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-primary shrink-0"
          >
            Submit Rental Criteria
          </Link>
        </div>
      </div>
    </div>
  );
}
