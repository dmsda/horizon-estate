import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import PropertySearchPanel from '@/components/home/PropertySearchPanel';
import NewPropertiesGrid from '@/components/home/NewPropertiesGrid';
import ServicesFeature from '@/components/home/ServicesFeature';
import InvestmentSection from '@/components/home/InvestmentSection';
import SmartSelectionBanner from '@/components/home/SmartSelectionBanner';
import AgentsSection from '@/components/home/AgentsSection';
import TrustTestimonialsSection from '@/components/home/TrustTestimonialsSection';
import JournalSection from '@/components/home/JournalSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Property Search Panel */}
      <PropertySearchPanel />

      {/* Section 3: New Properties */}
      <NewPropertiesGrid />

      {/* Section 4: Property Services */}
      <ServicesFeature />

      {/* Section 5: Investment Opportunities */}
      <InvestmentSection />

      {/* Section 6: Premium Property Feature */}
      <SmartSelectionBanner />

      {/* Section 7: Expert Agents */}
      <AgentsSection />

      {/* Section 8: Trust and Testimonials */}
      <TrustTestimonialsSection />

      {/* Section 9: Editorial Journal */}
      <JournalSection />

      {/* Section 10: Final CTA */}
      <FinalCtaSection />
    </div>
  );
}
