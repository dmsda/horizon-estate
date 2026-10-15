'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { investmentOverviewMetrics, investmentOpportunities } from '@/data/investments';
import { AlertTriangle, ChevronDown } from 'lucide-react';
import ConsultationModal from '@/components/ui/ConsultationModal';

const faqs = [
  {
    q: 'How are projected returns and IRR calculated?',
    a: 'Internal Rate of Return (IRR) is calculated using discounted cash flow modeling incorporating projected net rental operating income (gross revenue less 20% operational reserves, local taxes, insurance, and management fees) plus conservative capital appreciation over the target 3–5 year holding period. All metrics are hypothetical models based on historical local benchmarks and do not constitute guaranteed yields.'
  },
  {
    q: 'What is the legal structure of these property participations?',
    a: 'Each property is held in an independent Special Purpose Vehicle (SPV) established under European or American jurisdictions. Investors hold direct, audited equity shares or registered debt participation notes in the SPV with clear deed and cadastre protections.'
  },
  {
    q: 'What are the liquidity provisions and exit horizons?',
    a: 'Target holding periods range from 3 to 5 years. At maturity, the SPV sponsor either liquidates the underlying asset through private sale or facilitates refinancing. Additionally, Horizon Estate hosts a bi-annual private secondary bulletin where participants may offer shares to qualified accredited peers.'
  },
  {
    q: 'What are the main risks associated with cross-border property investments?',
    a: 'Key risks include currency fluctuations between the investor’s home currency and local asset denomination, cyclical shifts in prime real estate pricing, seasonal tourism vacancy variances, and regulatory adjustments in municipal short-term rental permits.'
  }
];

export default function InvestmentClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOpp, setSelectedOpp] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="container-custom">
      {/* Editorial Investment Hero */}
      <div className="max-w-3xl pb-10 border-b border-[#E5E5E5]">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
          Horizon Capital Advisory
        </span>
        <h1 className="text-[34px] sm:text-[48px] font-bold text-[#111111] tracking-tight mt-1">
          Considered Real Estate Investment
        </h1>
        <p className="text-[15px] leading-relaxed text-[#666666] mt-3">
          We curate institutional-grade property opportunities across premier international jurisdictions, pairing rigorous architectural due diligence with conservative, audited cash flow modeling.
        </p>
      </div>

      {/* Overview Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-12">
        <div className="bg-[#F6F6F4] p-6 rounded-xl border border-[#E5E5E5]">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#888888]">
            Benchmark Return
          </div>
          <div className="text-[36px] font-extrabold text-[#111111] mt-1">
            {investmentOverviewMetrics.totalReturn}
          </div>
          <p className="text-[12px] text-[#777777] mt-1">
            Historical portfolio benchmark across closed offerings
          </p>
        </div>

        <div className="bg-[#F6F6F4] p-6 rounded-xl border border-[#E5E5E5]">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#888888]">
            Cumulative Cashflow
          </div>
          <div className="text-[36px] font-extrabold text-[#111111] mt-1">
            {investmentOverviewMetrics.cumulativeCashflow}
          </div>
          <p className="text-[12px] text-[#777777] mt-1">
            Net distributed rental distributions to date
          </p>
        </div>

        <div className="bg-[#F6F6F4] p-6 rounded-xl border border-[#E5E5E5]">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#888888]">
            Average Projected IRR
          </div>
          <div className="text-[36px] font-extrabold text-[#111111] mt-1">
            {investmentOverviewMetrics.averageIrr}
          </div>
          <p className="text-[12px] text-[#777777] mt-1">
            Underwritten with conservative 20% capex reserve
          </p>
        </div>
      </div>

      {/* Available Opportunities */}
      <div className="py-6 space-y-8">
        <div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#111111] tracking-tight">
            Curated Investment Opportunities
          </h2>
          <p className="text-[14px] text-[#777777] mt-1">
            Current allocations open to accredited and qualified private investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {investmentOpportunities.map((opp) => (
            <div
              key={opp.id}
              className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full bg-[#F6F6F4]">
                <Image
                  src={opp.image}
                  alt={opp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-[#111111] uppercase tracking-wider shadow-sm">
                  {opp.status}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="text-[12px] text-[#777777]">{opp.location}</div>
                  <h3 className="text-[20px] font-bold text-[#111111] mt-0.5">{opp.title}</h3>
                  <p className="text-[13px] leading-relaxed text-[#666666] mt-2 line-clamp-2">
                    {opp.description}
                  </p>

                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#F0F0EE] mt-4">
                    <div>
                      <div className="text-[10.5px] uppercase font-semibold text-[#888888]">Min. Allocation</div>
                      <div className="text-[16px] font-bold text-[#111111] mt-0.5">${opp.minInvestment.toLocaleString('en-US')}</div>
                    </div>
                    <div>
                      <div className="text-[10.5px] uppercase font-semibold text-[#888888]">Target IRR</div>
                      <div className="text-[16px] font-bold text-emerald-700 mt-0.5">{opp.targetIrr}</div>
                    </div>
                    <div>
                      <div className="text-[10.5px] uppercase font-semibold text-[#888888]">Holding Period</div>
                      <div className="text-[16px] font-bold text-[#111111] mt-0.5">{opp.holdingPeriod}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedOpp(opp.title);
                      setIsModalOpen(true);
                    }}
                    className="flex-1 btn-primary btn-sm"
                  >
                    Request Information
                  </button>
                  <button
                    onClick={() => {
                      setSelectedOpp(opp.title);
                      setIsModalOpen(true);
                    }}
                    className="px-4 py-2.5 btn-secondary btn-sm"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Underwriting Assumptions & Methodology */}
      <div className="my-16 bg-[#F6F6F4] p-8 sm:p-12 rounded-2xl border border-[#E5E5E5] space-y-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
            Fiduciary Discipline
          </span>
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#111111] tracking-tight mt-1">
            Underwriting & Expense Assumptions
          </h2>
          <p className="text-[14px] text-[#666666] mt-2 max-w-2xl leading-relaxed">
            Unlike portals that publish gross rental yield figures, Horizon Estate models Net Cash-on-Cash Return. All models incorporate:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-[13px] text-[#444444]">
          <div className="bg-white p-4 rounded-xl border border-[#E5E5E5]">
            <div className="font-bold text-[#111111]">15% Capex & Maintenance</div>
            <div className="text-[12px] text-[#777777] mt-1">Continuous sinking fund reserve for physical upkeep</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-[#E5E5E5]">
            <div className="font-bold text-[#111111]">10–20% Hospitality Fee</div>
            <div className="text-[12px] text-[#777777] mt-1">Turnkey property management, marketing & concierge</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-[#E5E5E5]">
            <div className="font-bold text-[#111111]">Local Tax & Municipal Filing</div>
            <div className="text-[12px] text-[#777777] mt-1">Fully compliant local residency and income taxes</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-[#E5E5E5]">
            <div className="font-bold text-[#111111]">10% Vacancy Allowance</div>
            <div className="text-[12px] text-[#777777] mt-1">Stress-tested buffer for seasonal turnaround gaps</div>
          </div>
        </div>

        {/* Risk Disclosures */}
        <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-xl flex items-start gap-3 text-[12.5px] text-amber-950">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Required Regulatory Disclosure:</span> Real estate investments are inherently illiquid and subject to capital loss, market downturns, and geopolitical changes. Projected figures are illustrative simulations and are not guaranteed contracts.
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="py-12 border-t border-[#E5E5E5]">
        <div className="max-w-2xl mb-8">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
            Clarity & Diligence
          </span>
          <h2 className="text-[26px] sm:text-[34px] font-bold text-[#111111] tracking-tight mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 max-w-3xl">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-[#E5E5E5] rounded-xl overflow-hidden bg-white"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FBFBFA] transition-colors"
              >
                <span className="text-[15px] font-semibold text-[#111111]">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#777777] transition-transform duration-200 shrink-0 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-[13.5px] leading-relaxed text-[#555555] border-t border-[#F0F0EE] pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialContext="Investment Consultation"
        propertyTitle={selectedOpp || undefined}
      />
    </div>
  );
}
