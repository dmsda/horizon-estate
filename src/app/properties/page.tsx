import React, { Suspense } from 'react';
import { Metadata } from 'next';
import PropertiesClient from '@/components/properties/PropertiesClient';

export const metadata: Metadata = {
  title: 'Luxury Properties & International Residences | Horizon Estate',
  description:
    'Browse our curated portfolio of architecturally significant villas, penthouses, mountain lodges, and coastal retreats across Europe and North America.',
};

export default function PropertiesPage() {
  return (
    <div className="bg-white min-h-screen py-10 sm:py-14">
      <Suspense fallback={
        <div className="container-custom py-20 text-center">
          <div className="inline-block w-8 h-8 border-2 border-[#111111] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-[13px] text-[#777777] mt-3">Loading curated properties...</p>
        </div>
      }>
        <PropertiesClient />
      </Suspense>
    </div>
  );
}
