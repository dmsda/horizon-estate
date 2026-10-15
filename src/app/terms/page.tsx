import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Horizon Estate',
  description: 'Horizon Estate platform terms of service and brokerage disclaimer.',
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen py-12 sm:py-16">
      <div className="container-custom max-w-3xl space-y-8 text-[#222222]">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
            Legal & Governance
          </span>
          <h1 className="text-[32px] sm:text-[42px] font-bold text-[#111111] tracking-tight mt-1">
            Terms of Service
          </h1>
          <p className="text-[13px] text-[#777777] mt-1">
            Last updated: March 15, 2026
          </p>
        </div>

        <div className="space-y-6 text-[14.5px] leading-relaxed text-[#444444] border-t border-[#E5E5E5] pt-8">
          <p>
            Welcome to Horizon Estate. By accessing or utilizing our digital marketplace, property portfolios, or advisory portals, you acknowledge and agree to comply with these terms.
          </p>

          <h2 className="text-[18px] font-bold text-[#111111] pt-2">
            1. Nature of Displayed Content
          </h2>
          <p>
            Property photography, floor plans, dimensions, architectural renderings, and pricing specifications are provided for informative and demonstration purposes. While curated diligently, they do not constitute formal contractual warranties until formally incorporated into an executed notarial deed or tenancy contract.
          </p>

          <h2 className="text-[18px] font-bold text-[#111111] pt-2">
            2. Investment Disclaimers
          </h2>
          <p>
            Any financial calculations, IRR benchmarks, or projected capital yields presented on this platform are illustrative simulations based on historical market trends and explicit assumptions. Real estate investments involve capital risk. Horizon Estate is not a retail financial depositary or public securities issuer.
          </p>

          <h2 className="text-[18px] font-bold text-[#111111] pt-2">
            3. Intellectual Property
          </h2>
          <p>
            All architectural photography, CAD floor plan drawings, brand assets, logos, and written analyses published on Horizon Estate are protected under international copyright law. Unauthorized reproduction or scraping is strictly prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
