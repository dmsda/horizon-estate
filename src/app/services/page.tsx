import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';
import { CheckCircle2, ShieldCheck, ArrowRight, PhoneCall } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Real Estate & Private Advisory Services | Horizon Estate',
  description:
    'Comprehensive international property advisory: property selection, buyer representation, investment underwriting, legal coordination, and property marketing.',
};

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl pb-10 border-b border-[#E5E5E5]">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
            Advisory Capabilities
          </span>
          <h1 className="text-[34px] sm:text-[48px] font-bold text-[#111111] tracking-tight mt-1">
            End-to-End Real Estate Services
          </h1>
          <p className="text-[15px] leading-relaxed text-[#666666] mt-3">
            From preliminary architectural search and confidential negotiation to notarial execution and luxury property marketing, our cross-border advisory ensures discretion and precision.
          </p>
        </div>

        {/* Services List */}
        <div className="py-12 space-y-20">
          {services.map((service, idx) => (
            <div
              key={service.id}
              id={service.slug}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="text-[13px] font-mono font-bold text-[#777777]">
                  [{service.number}]
                </div>
                <h2 className="text-[28px] sm:text-[34px] font-bold text-[#111111] tracking-tight mt-1">
                  {service.title}
                </h2>
                <p className="text-[14.5px] leading-relaxed text-[#555555] mt-3">
                  {service.extendedDescription}
                </p>

                {/* Steps List */}
                <div className="pt-6 space-y-2">
                  <div className="text-[11px] uppercase font-bold text-[#888888] tracking-wider mb-2">
                    Advisory Workflow
                  </div>
                  {service.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2.5 text-[13px] text-[#333333]">
                      <span className="w-5 h-5 rounded-full bg-[#F6F6F4] text-[#111111] font-mono text-[10px] flex items-center justify-center shrink-0 border border-[#E5E5E5]">
                        {sIdx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="pt-6">
                  <div className="text-[11px] uppercase font-bold text-[#888888] tracking-wider mb-2">
                    Key Advantages
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12.5px] text-[#555555]">
                    {service.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#111111] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="btn-primary btn-sm"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#F6F6F4] border border-[#E5E5E5] shadow-sm">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Coordination Callout */}
        <div className="mt-16 bg-[#F6F6F4] rounded-2xl p-8 sm:p-12 border border-[#E5E5E5] text-center max-w-3xl mx-auto space-y-4">
          <ShieldCheck className="w-10 h-10 text-[#111111] mx-auto" />
          <h3 className="text-[24px] font-bold text-[#111111]">
            Custom Advisory for Private Offices & Trusts
          </h3>
          <p className="text-[14px] text-[#666666] leading-relaxed max-w-xl mx-auto">
            We regularly collaborate with family offices, private banks, and wealth advisors to manage confidential cross-border portfolio acquisitions and disposals.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="btn-primary"
            >
              <span>Schedule a Confidential Introduction</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
