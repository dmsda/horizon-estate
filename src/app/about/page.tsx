import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Compass, Eye, Heart, ArrowRight } from 'lucide-react';
import { agents } from '@/data/agents';

export const metadata: Metadata = {
  title: 'About Horizon Estate | International Real Estate Platform',
  description:
    'Learn about Horizon Estate’s architectural philosophy, transparent advisory principles, and leadership across global prime real estate markets.',
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="container-custom space-y-16 sm:space-y-24">
        {/* Hero Section */}
        <div className="max-w-3xl pb-10 border-b border-[#E5E5E5]">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
            About Horizon Estate
          </span>
          <h1 className="text-[36px] sm:text-[52px] font-bold text-[#111111] tracking-tight mt-1 leading-[1.08]">
            A considered way to discover and own exceptional property.
          </h1>
          <p className="text-[16px] leading-relaxed text-[#666666] mt-4 font-normal">
            Horizon Estate was established to counter the superficiality of mass property portals. We curate residences where architecture, location, and structural character align with disciplined financial prudence.
          </p>
        </div>

        {/* Story & Philosophy Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
              Our Philosophy
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#111111] tracking-tight">
              Architecture as an enduring standard of life.
            </h2>
            <p className="text-[14.5px] leading-relaxed text-[#555555]">
              A home is neither an interchangeable commodity nor a purely speculative spreadsheet entry. It is the physical framework for human living, family gatherings, creative stillness, and generational security.
            </p>
            <p className="text-[14.5px] leading-relaxed text-[#555555]">
              By prioritizing timeless materials—board-formed concrete, native stone, natural oak, and floor-to-ceiling glass that honors light orientation—we connect discerning buyers with homes that appreciate aesthetically and financially.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-[13px] text-[#222222]">
              <div className="p-4 bg-[#F6F6F4] rounded-xl border border-[#E5E5E5]">
                <div className="font-bold text-[18px] text-[#111111]">100%</div>
                <div className="text-[12px] text-[#777777] mt-0.5">Verified Title Diligence</div>
              </div>
              <div className="p-4 bg-[#F6F6F4] rounded-xl border border-[#E5E5E5]">
                <div className="font-bold text-[18px] text-[#111111]">Zero</div>
                <div className="text-[12px] text-[#777777] mt-0.5">Speculative Hype</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F6F6F4] border border-[#E5E5E5] shadow-sm">
              <Image
                src="/images/about/team-office.jpg"
                alt="Horizon Estate architectural advisory office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Pillars of Integrity */}
        <div className="py-12 border-t border-b border-[#E5E5E5]">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
              Our Core Principles
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#111111] tracking-tight mt-1">
              How We Work With Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F6F6F4] p-8 rounded-xl border border-[#E5E5E5] space-y-3">
              <Compass className="w-6 h-6 text-[#111111]" />
              <h3 className="text-[18px] font-bold text-[#111111]">Discretion & Candor</h3>
              <p className="text-[13.5px] leading-relaxed text-[#666666]">
                We provide candid counsel on asset drawbacks, zoning limitations, and true ongoing operating expenses, prioritizing client protection above transaction volume.
              </p>
            </div>

            <div className="bg-[#F6F6F4] p-8 rounded-xl border border-[#E5E5E5] space-y-3">
              <Eye className="w-6 h-6 text-[#111111]" />
              <h3 className="text-[18px] font-bold text-[#111111]">Curated Over Mass</h3>
              <p className="text-[13.5px] leading-relaxed text-[#666666]">
                We decline 80% of listing inquiries that do not meet our criteria for architectural integrity, legal clarity, and fair pricing.
              </p>
            </div>

            <div className="bg-[#F6F6F4] p-8 rounded-xl border border-[#E5E5E5] space-y-3">
              <ShieldCheck className="w-6 h-6 text-[#111111]" />
              <h3 className="text-[18px] font-bold text-[#111111]">Fiduciary Transparency</h3>
              <p className="text-[13.5px] leading-relaxed text-[#666666]">
                Every investment model is shared with complete transparent formula breakdowns, conservative holding periods, and documented historical references.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team Preview */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                Advisory Leadership
              </span>
              <h2 className="text-[28px] sm:text-[34px] font-bold text-[#111111] tracking-tight mt-1">
                People Behind the Brand
              </h2>
            </div>
            <Link
              href="/agents"
              className="text-[13px] font-semibold text-[#111111] hover:underline"
            >
              Meet all advisors →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {agents.map((agent) => (
              <Link
                key={agent.id}
                href={`/agents/${agent.slug}`}
                className="group block space-y-3 text-center sm:text-left"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden bg-[#F6F6F4] border border-[#E5E5E5]">
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    fill
                    sizes="25vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                <div>
                  <div className="font-bold text-[16px] text-[#111111] group-hover:text-[#555555] transition-colors">
                    {agent.name}
                  </div>
                  <div className="text-[12px] text-[#777777]">{agent.role}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Careers Section Anchor */}
        <div id="careers" className="bg-[#F6F6F4] rounded-2xl p-8 sm:p-12 border border-[#E5E5E5] space-y-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
              Join Horizon Estate
            </span>
            <h2 className="text-[26px] sm:text-[32px] font-bold text-[#111111] tracking-tight mt-1">
              Careers in Prime Architectural Brokerage
            </h2>
            <p className="text-[14px] leading-relaxed text-[#666666] mt-3">
              We are constantly seeking licensed senior brokers, architectural researchers, and private equity underwriters who share our commitment to design excellence and client discretion.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/contact?subject=Careers%20Inquiry"
              className="btn-primary"
            >
              <span>Submit Confidential Application</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
