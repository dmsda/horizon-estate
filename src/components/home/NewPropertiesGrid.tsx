'use client';

import React from 'react';
import Link from 'next/link';
import { properties } from '@/data/properties';
import PropertyCard from '@/components/ui/PropertyCard';
import { ArrowRight } from 'lucide-react';

import ScrollReveal from '@/components/ui/ScrollReveal';

export default function NewPropertiesGrid() {
  // Take first 6 residential properties
  const featuredProperties = properties
    .filter((p) => p.transactionType === 'buy' || p.transactionType === 'investment')
    .slice(0, 6);

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="container-custom">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" distance={16} duration={500}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-[28px] sm:text-[36px] font-bold text-[#111111] tracking-tight">
                New properties
              </h2>
              <p className="text-[14px] text-[#595959] mt-1 font-normal">
                Explore distinctive residences selected for their architecture, location, and character.
              </p>
            </div>

            <Link
              href="/properties"
              className="group inline-flex items-center gap-2 text-[13.5px] font-medium text-[#111111] hover:text-[#555555] transition-colors"
            >
              <span>View all properties</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 3-Column Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {featuredProperties.map((property, idx) => (
            <ScrollReveal
              key={property.id}
              direction="up"
              distance={22}
              delay={(idx % 3) * 100}
              duration={650}
            >
              <PropertyCard 
                property={property} 
                priority={idx < 3}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 sm:hidden text-center">
          <Link
            href="/properties"
            className="w-full btn-secondary"
          >
            <span>View all properties ({properties.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
