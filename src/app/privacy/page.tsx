import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Horizon Estate',
  description: 'Horizon Estate international client data protection and confidentiality policy.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen py-12 sm:py-16">
      <div className="container-custom max-w-3xl space-y-8 text-[#222222]">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
            Legal & Governance
          </span>
          <h1 className="text-[32px] sm:text-[42px] font-bold text-[#111111] tracking-tight mt-1">
            Privacy Policy
          </h1>
          <p className="text-[13px] text-[#777777] mt-1">
            Last updated: March 15, 2026
          </p>
        </div>

        <div className="space-y-6 text-[14.5px] leading-relaxed text-[#444444] border-t border-[#E5E5E5] pt-8">
          <p>
            Horizon Estate Group Ltd. (&quot;Horizon Estate&quot;, &quot;we&quot;, &quot;our&quot;) is committed to honoring the privacy and strict discretion expected by our international clientele. This Privacy Policy details how we handle information acquired through our website and private brokerage services.
          </p>

          <h2 className="text-[18px] font-bold text-[#111111] pt-2">
            1. Data We Collect
          </h2>
          <p>
            We collect personal identification information (such as your name, corporate entity, email address, telephone contact, and transaction preferences) strictly when you voluntarily submit inquiry dossiers, book viewing appointments, or register for investment memorandums.
          </p>

          <h2 className="text-[18px] font-bold text-[#111111] pt-2">
            2. Confidentiality & Non-Disclosure
          </h2>
          <p>
            We operate under institutional confidentiality protocols. We never sell, lease, or distribute private client dossiers to unsolicited third-party marketing brokers. Information is shared only with verified title notaries, escrow banks, or accredited legal partners directly required to execute your mandate.
          </p>

          <h2 className="text-[18px] font-bold text-[#111111] pt-2">
            3. Regulatory Compliance
          </h2>
          <p>
            Our infrastructure adheres to the European Union General Data Protection Regulation (GDPR), the UK Data Protection Act 2018, and California Consumer Privacy Act (CCPA) standards. You have the right at any time to request an audit, rectification, or complete erasure of your advisory records.
          </p>
        </div>
      </div>
    </div>
  );
}
