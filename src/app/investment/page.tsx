import React from 'react';
import { Metadata } from 'next';
import InvestmentClient from '@/components/investment/InvestmentClient';

export const metadata: Metadata = {
  title: 'Real Estate Investment Opportunities & Portfolios | Horizon Estate',
  description:
    'Transparent property investment opportunities with clear net yield modeling, institutional risk disclosures, and dedicated private capital underwriting.',
};

export default function InvestmentPage() {
  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <InvestmentClient />
    </div>
  );
}
