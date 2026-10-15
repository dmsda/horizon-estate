import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { properties } from '@/data/properties';
import { Compass, Download, ArrowRight, Building, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'New Luxury Developments & Masterplans | Horizon Estate',
  description:
    'Early-stage off-plan allocations and sustainable architectural residential developments in prime international locations.',
};

export default function DevelopmentsPage() {
  const developmentProjects = [
    {
      id: 'dev-1',
      title: 'The Solstice Villas',
      location: 'Mykonos & Cyclades, Greece',
      developer: 'Arctech Atelier Greece',
      completion: 'Q2 2027',
      units: '12 Exclusive Residences',
      priceFrom: '€850,000',
      image: '/images/properties/azura-villa.jpg',
      description: 'Zero-carbon clifftop Cycladic villas featuring private seawater infinity pools, natural stone shade loggias, and panoramic Aegean sunset vistas.',
      features: ['LEED Gold Certified', 'Private Beach Club Access', 'Full Turnkey Hospitality Management']
    },
    {
      id: 'dev-2',
      title: 'Aspen Ridge Residences',
      location: 'Aspen Highlands, Colorado, USA',
      developer: 'Vanguard Alpine Capital',
      completion: 'Q4 2026',
      units: '8 Ski-in/Ski-out Chalets',
      priceFrom: '$1,950,000',
      image: '/images/properties/mountain-lodge.jpg',
      description: 'Architecturally modern alpine chalets with triple-glazed glass curtains, geothermal heating, private cedar spas, and dedicated ski prep lounges.',
      features: ['Direct Mountain Trail Connection', 'Private Heated Garage', 'Integrated Smart Home Control']
    },
    {
      id: 'dev-3',
      title: 'Comporta Dune Reserve',
      location: 'Alentejo Coast, Portugal',
      developer: 'Luzia Arquitectura',
      completion: 'Q1 2027',
      units: '16 Dune Lodges',
      priceFrom: '€620,000',
      image: '/images/properties/comporta-beach-house.jpg',
      description: 'Low-density biophilic residences nestled among umbrella pines and sand dunes, honoring traditional Portuguese thatched architectural heritage.',
      features: ['Solar Microgrid', 'Indigenous Flora Preservation', 'Ten Minutes to Ocean Sands']
    }
  ];

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl pb-10 border-b border-[#E5E5E5]">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
            Off-Plan & Masterplanned Communities
          </span>
          <h1 className="text-[34px] sm:text-[48px] font-bold text-[#111111] tracking-tight mt-1">
            New Developments
          </h1>
          <p className="text-[15px] leading-relaxed text-[#666666] mt-3">
            Secure priority allocations in the world’s most anticipated architectural masterplans before public release. Every development is audited for developer capitalization, construction warranties, and environmental stewardship.
          </p>
        </div>

        {/* Development Projects List */}
        <div className="py-12 space-y-12">
          {developmentProjects.map((dev, idx) => (
            <div
              key={dev.id}
              className="bg-[#F6F6F4] rounded-2xl overflow-hidden border border-[#E5E5E5] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8"
            >
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-white shadow-sm">
                  <Image
                    src={dev.image}
                    alt={dev.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#111111]/90 backdrop-blur-md px-3 py-1 rounded text-white text-[11px] font-semibold uppercase tracking-wider">
                    Completion {dev.completion}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
                <div>
                  <div className="text-[12px] font-semibold text-[#777777] uppercase tracking-wider">
                    {dev.location}
                  </div>
                  <h2 className="text-[26px] sm:text-[32px] font-bold text-[#111111] tracking-tight mt-0.5">
                    {dev.title}
                  </h2>
                  <p className="text-[14px] leading-relaxed text-[#555555] mt-3">
                    {dev.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E5E5E5] mt-5">
                    <div>
                      <div className="text-[11px] uppercase text-[#888888] font-semibold">Available Units</div>
                      <div className="text-[15px] font-bold text-[#111111]">{dev.units}</div>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase text-[#888888] font-semibold">Pricing From</div>
                      <div className="text-[15px] font-bold text-[#111111]">{dev.priceFrom}</div>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-4">
                    {dev.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[12.5px] text-[#444444]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#111111]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href={`/contact?subject=Brochure%20Request%20-%20${encodeURIComponent(dev.title)}`}
                    className="btn-primary btn-sm"
                  >
                    Request Developer Dossier
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-white btn-sm"
                  >
                    Book Private Presentation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
