'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { investmentOverviewMetrics, investmentOpportunities } from '@/data/investments';
import { Download, CheckCircle2, ArrowRight, ShieldCheck, Maximize2, Bed, Bath, Layers } from 'lucide-react';
import ConsultationModal from '@/components/ui/ConsultationModal';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function InvestmentSection() {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chartsInView, setChartsInView] = useState(false);
  const chartSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      requestAnimationFrame(() => setChartsInView(true));
      return;
    }

    const currentEl = chartSectionRef.current;
    if (!currentEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChartsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(currentEl);
    return () => observer.disconnect();
  }, []);

  const handleDownload = (title: string, id: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      // Trigger a clean sample brochure download or alert
      const blob = new Blob([
        `HORIZON ESTATE - INVESTMENT MEMORANDUM\n\nProperty: ${title}\nHorizon Estate Private Capital Placement\nConfidential Informational Memorandum\n\nContact: advisory@horizonestate.com`
      ], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title.toLowerCase().replace(/\s+/g, '-')}-memorandum.txt`;
      a.click();
      URL.revokeObjectURL(url);
    }, 800);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F6F6F4] border-t border-b border-[#E5E5E5]/70">
      <div className="container-custom">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" distance={18} duration={500}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-12">
            <div className="lg:col-span-7">
              <h2 className="text-[32px] sm:text-[44px] font-bold text-[#111111] leading-[1.12] tracking-tight">
                Reliable facilities <br className="hidden sm:inline" />for stable investments
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-2">
              <p className="text-[14px] leading-relaxed text-[#595959]">
                Our assets are not just square meters, it’s an opportunity for your capital to work for you. We carefully select the best investment offers for our clients.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Dashboard Metrics Row with Animated Data Charts */}
        <div ref={chartSectionRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {/* Metric 1: Total Return */}
          <ScrollReveal direction="up" distance={20} delay={0} duration={600}>
            <div className="bg-white p-6 rounded-xl border border-[#E5E5E5] shadow-sm hover-lift">
              <div className="text-[12px] font-semibold text-[#595959] uppercase tracking-wider">
                Total return
              </div>
              <div className="text-[32px] sm:text-[38px] font-extrabold text-[#111111] mt-1 tracking-tight">
                {investmentOverviewMetrics.totalReturn}
              </div>
              {/* 8-bar mini chart with staggered growth animation */}
              <div 
                role="img"
                aria-label={`Total return historical trend over 8 periods reaching ${investmentOverviewMetrics.totalReturn}`}
                className="mt-4 flex items-end gap-1.5 h-10 pt-2"
              >
                {investmentOverviewMetrics.totalReturnBars.map((height, i) => (
                  <div
                    key={i}
                    style={{ 
                      height: chartsInView ? `${height}%` : '0%',
                      transition: `height 750ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 45}ms`
                    }}
                    className="flex-1 bg-[#111111] rounded-t-[1.5px] hover:bg-[#555555]"
                  ></div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Metric 2: Cumulative Cashflow */}
          <ScrollReveal direction="up" distance={20} delay={100} duration={600}>
            <div className="bg-white p-6 rounded-xl border border-[#E5E5E5] shadow-sm hover-lift">
              <div className="text-[12px] font-semibold text-[#595959] uppercase tracking-wider">
                Cumulative net cashflow
              </div>
              <div className="text-[32px] sm:text-[38px] font-extrabold text-[#111111] mt-1 tracking-tight">
                {investmentOverviewMetrics.cumulativeCashflow}
              </div>
              {/* 8-bar ascending chart with staggered growth animation */}
              <div 
                role="img"
                aria-label={`Cumulative net cashflow trend reaching ${investmentOverviewMetrics.cumulativeCashflow}`}
                className="mt-4 flex items-end gap-1.5 h-10 pt-2"
              >
                {investmentOverviewMetrics.cumulativeCashflowBars.map((height, i) => (
                  <div
                    key={i}
                    style={{ 
                      height: chartsInView ? `${height}%` : '0%',
                      transition: `height 750ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 45}ms`
                    }}
                    className="flex-1 bg-[#111111] rounded-t-[1.5px] hover:bg-[#555555]"
                  ></div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Metric 3: Average IRR */}
          <ScrollReveal direction="up" distance={20} delay={200} duration={600}>
            <div className="bg-white p-6 rounded-xl border border-[#E5E5E5] shadow-sm hover-lift">
              <div className="text-[12px] font-semibold text-[#595959] uppercase tracking-wider">
                Average IRR
              </div>
              <div className="text-[32px] sm:text-[38px] font-extrabold text-[#111111] mt-1 tracking-tight">
                {investmentOverviewMetrics.averageIrr}
              </div>
              {/* 8-bar IRR chart with staggered growth animation */}
              <div 
                role="img"
                aria-label={`Average internal rate of return distribution standing at ${investmentOverviewMetrics.averageIrr}`}
                className="mt-4 flex items-end gap-1.5 h-10 pt-2"
              >
                {investmentOverviewMetrics.averageIrrBars.map((height, i) => (
                  <div
                    key={i}
                    style={{ 
                      height: chartsInView ? `${height}%` : '0%',
                      transition: `height 750ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 45}ms`
                    }}
                    className="flex-1 bg-[#111111] rounded-t-[1.5px] hover:bg-[#555555]"
                  ></div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Investment Listings */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2">
            <h3 className="text-[20px] sm:text-[24px] font-bold text-[#111111] tracking-tight">
              Offers for investment
            </h3>
            <Link
              href="/investment"
              className="text-[13px] font-medium text-[#111111] hover:text-[#555555] transition-colors flex items-center gap-1 group"
            >
              <span>Explore all opportunities</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Asymmetric Horizontal Cards (matching Reference 3) */}
          <div className="space-y-6">
            {investmentOpportunities.slice(0, 3).map((opp, idx) => (
              <ScrollReveal key={opp.id} direction="up" distance={18} delay={idx * 100} duration={550}>
                <div
                  className="group bg-white rounded-xl border border-[#E5E5E5] p-5 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#CCCCCC]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {/* Left: Image with restrained scale reveal */}
                    <div className="lg:col-span-4">
                      <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-lg overflow-hidden bg-[#F6F6F4]">
                        <Image
                          src={opp.image}
                          alt={opp.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 35vw"
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
                        />
                      </div>
                    </div>

                    {/* Middle: Details and Actions */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                    <div>
                      <h4 className="text-[20px] font-bold text-[#111111]">{opp.title}</h4>
                      <div className="text-[13px] text-[#777777] mt-0.5">{opp.location}</div>

                      {/* Specs */}
                      <div className="flex items-center gap-4 text-[12px] text-[#666666] mt-3">
                        <span className="flex items-center gap-1">
                          <Maximize2 className="w-3.5 h-3.5 text-[#999999]" />
                          {opp.area} m²
                        </span>
                        <span className="flex items-center gap-1">
                          <Layers className="w-3.5 h-3.5 text-[#999999]" />
                          {opp.floors} {opp.floors === 1 ? 'floor' : 'floors'}
                        </span>
                        <span className="flex items-center gap-1">
                          <Bed className="w-3.5 h-3.5 text-[#999999]" />
                          {opp.bedrooms} beds
                        </span>
                        <span className="flex items-center gap-1">
                          <Bath className="w-3.5 h-3.5 text-[#999999]" />
                          {opp.bathrooms} bath
                        </span>
                      </div>

                      <p className="text-[13.5px] leading-relaxed text-[#666666] mt-3">
                        {opp.description}
                      </p>
                    </div>

                    {/* CTAs matching Reference 3 */}
                    <div className="flex items-center gap-3 pt-2">
                      <button
                        onClick={() => {
                          setSelectedOpportunity(opp.title);
                          setIsModalOpen(true);
                        }}
                        className="btn-primary btn-sm"
                      >
                        Book now
                      </button>
                      <button
                        onClick={() => handleDownload(opp.title, opp.id)}
                        disabled={downloadingId === opp.id}
                        className="btn-secondary btn-sm"
                      >
                        <Download className="w-3.5 h-3.5 text-[#777777]" />
                        <span>{downloadingId === opp.id ? 'Generating...' : 'Download brochure'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Right: Financial Breakdown (matching Reference 3) */}
                  <div className="lg:col-span-3 lg:border-l lg:border-[#E5E5E5] lg:pl-6 space-y-4 pt-4 lg:pt-0 border-t border-[#F0F0EE] lg:border-t-0">
                    <div>
                      <div className="text-[26px] font-bold text-[#111111]">
                        ${opp.minInvestment.toLocaleString('en-US')}
                      </div>
                      <div className="text-[11px] font-medium uppercase tracking-wider text-[#888888]">
                        Invest
                      </div>
                    </div>

                    <div>
                      <div className="text-[20px] font-bold text-[#111111]">
                        {opp.targetIrr}
                      </div>
                      <div className="text-[11px] font-medium uppercase tracking-wider text-[#888888]">
                        IRR
                      </div>
                    </div>

                    <div>
                      <div className="text-[26px] font-bold text-[#111111]">
                        {opp.projectedReturn}
                      </div>
                      <div className="text-[11px] font-medium uppercase tracking-wider text-[#888888]">
                        Return
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="mt-8 text-center text-[11.5px] text-[#888888] max-w-xl mx-auto">
          Illustrative assumptions for demo purposes. Real estate investments involve capital risk. Past projections do not guarantee future yields.
        </div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialContext="Investment Opportunity"
        propertyTitle={selectedOpportunity || undefined}
      />
    </section>
  );
}
