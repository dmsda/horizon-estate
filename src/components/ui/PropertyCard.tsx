'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/types';
import { Maximize2, Bed, Bath, Layers, ArrowUpRight } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
}

export default function PropertyCard({ property, priority = false }: PropertyCardProps) {
  return (
    <article className="group flex flex-col bg-white overflow-hidden rounded-lg border border-transparent hover:border-[#E5E5E5] p-1.5 -m-1.5 transition-all duration-300 active:scale-[0.99]">
      {/* Property Image Container */}
      <Link 
        href={`/properties/${property.slug}`}
        className="relative block aspect-[4/3] w-full overflow-hidden rounded-md bg-[#F6F6F4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
      >
        <Image
          src={property.mainImage}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
        />

        {/* Subtle Category or Status Pill */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 transition-opacity duration-300">
          <span className="bg-white/95 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase text-[#111111] rounded shadow-sm border border-[#E5E5E5]/60">
            {property.propertyType}
          </span>
          {property.isNew && (
            <span className="bg-[#111111]/90 backdrop-blur-md px-2 py-1 text-[10px] font-semibold tracking-wider uppercase text-white rounded">
              New
            </span>
          )}
        </div>
      </Link>

      {/* Property Content */}
      <div className="pt-3.5 pb-1 px-1 flex flex-col justify-between flex-1">
        {/* Title and Price Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link 
              href={`/properties/${property.slug}`}
              className="text-[17px] font-bold text-[#111111] hover:text-[#555555] transition-colors leading-snug line-clamp-1 inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111] rounded"
            >
              <span>{property.title}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#999999] opacity-70 group-hover:opacity-100 group-hover:text-[#111111] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <div className="text-[13px] text-[#595959] mt-0.5 font-normal">
              {property.location}
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="text-[17px] font-bold text-[#111111] tracking-tight">
              {property.formattedPrice}
            </span>
            {property.priceSuffix && (
              <span className="text-[12px] text-[#595959] font-normal ml-0.5">
                {property.priceSuffix}
              </span>
            )}
          </div>
        </div>

        {/* Property Specs Row */}
        <div className="flex items-center gap-4 text-[12.5px] text-[#555555] pt-3 mt-3 border-t border-[#F0F0EE]">
          <div className="flex items-center gap-1.5" title="Floor area">
            <Maximize2 className="w-3.5 h-3.5 text-[#999999]" />
            <span>{property.area} m²</span>
          </div>

          {property.floors && (
            <div className="flex items-center gap-1.5" title="Floors">
              <Layers className="w-3.5 h-3.5 text-[#999999]" />
              <span>{property.floors} {property.floors === 1 ? 'floor' : 'floors'}</span>
            </div>
          )}

          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1.5" title="Bedrooms">
              <Bed className="w-3.5 h-3.5 text-[#999999]" />
              <span>{property.bedrooms} beds</span>
            </div>
          )}

          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1.5" title="Bathrooms">
              <Bath className="w-3.5 h-3.5 text-[#999999]" />
              <span>{property.bathrooms} {property.bathrooms === 1 ? 'bath' : 'baths'}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
