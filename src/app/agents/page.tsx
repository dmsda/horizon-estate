import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { agents } from '@/data/agents';
import { Phone, Mail, Star, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Expert Brokers & Real Estate Advisors | Horizon Estate',
  description:
    'Meet the senior property professionals and commercial directors at Horizon Estate representing buyers and investors across global prime markets.',
};

export default function AgentsPage() {
  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl pb-10 border-b border-[#E5E5E5]">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
            Advisory Leadership
          </span>
          <h1 className="text-[34px] sm:text-[48px] font-bold text-[#111111] tracking-tight mt-1">
            Meet Our Expert Brokers
          </h1>
          <p className="text-[15px] leading-relaxed text-[#666666] mt-3">
            With over 50 collective years across premier international property capitals, our licensed partners deliver strategic valuation, discreet representation, and rigorous execution.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-[#F6F6F4] rounded-2xl border border-[#E5E5E5] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start"
            >
              <Link
                href={`/agents/${agent.slug}`}
                className="relative w-full sm:w-44 aspect-square rounded-xl overflow-hidden shrink-0 bg-white border border-[#E5E5E5] group"
              >
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  sizes="200px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute top-2.5 left-2.5 text-[8.5px] font-extrabold tracking-[0.2em] uppercase text-[#111111]/80 leading-none">
                  HORIZON ESTATE
                </div>
              </Link>

              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                    {agent.title}
                  </div>
                  <Link
                    href={`/agents/${agent.slug}`}
                    className="text-[22px] font-bold text-[#111111] hover:text-[#555555] transition-colors block mt-0.5"
                  >
                    {agent.name}
                  </Link>
                  <div className="text-[12.5px] text-[#666666]">{agent.role}</div>

                  <div className="flex items-center gap-2 mt-2 text-[12px] font-medium text-[#111111]">
                    <span className="font-bold">{agent.rating.toFixed(1)}</span>
                    <span className="text-[#888888]">/ {agent.reviewCount} client reviews</span>
                    <span>•</span>
                    <span className="text-[#555555]">{agent.verifiedTransactions} Transactions</span>
                  </div>

                  <p className="text-[13px] leading-relaxed text-[#555555] mt-3 line-clamp-3">
                    {agent.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between gap-3">
                  <Link
                    href={`/agents/${agent.slug}`}
                    className="text-[13px] font-semibold text-[#111111] hover:underline flex items-center gap-1"
                  >
                    <span>View full bio & listings</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`mailto:${agent.email}`}
                    className="btn-primary btn-sm"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
