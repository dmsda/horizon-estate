import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers in Luxury Real Estate & Advisory | Horizon Estate',
  description:
    'Join Horizon Estate. Explore partner and associate opportunities across our London, Los Angeles, Madrid, and Mediterranean desks.',
};

export default function CareersPage() {
  const openRoles = [
    {
      id: 'role-1',
      title: 'Senior Residential Partner',
      department: 'Private Brokerage',
      locations: 'Los Angeles, CA & London, UK',
      type: 'Full-time Mandate',
      experience: '8+ Years Luxury Brokerage',
      description: 'Lead confidential off-market transactions and advise high-net-worth individuals on architectural acquisitions across Southern California and the UK.',
      requirements: [
        'Active real estate broker license with proven track record in >$5M+ residences',
        'Deep network among architectural firms, family offices, and wealth managers',
        'Impeccable ethical standing and discretion'
      ]
    },
    {
      id: 'role-2',
      title: 'Commercial Advisory Associate',
      department: 'Institutional & Mixed-Use',
      locations: 'Madrid, Spain & Miami, FL',
      type: 'Full-time Mandate',
      experience: '5+ Years Commercial Underwriting',
      description: 'Underwrite cross-border commercial office and prime hospitality acquisitions, preparing discounted cash flow models and lease covenants.',
      requirements: [
        'Degree in Finance, Real Estate Economics, or Civil Engineering',
        'Expertise in Argus, Excel financial modeling, and Spanish/EU property law',
        'Fluent in Spanish and English'
      ]
    },
    {
      id: 'role-3',
      title: 'Architectural Heritage & Lidar Specialist',
      department: 'Asset Intelligence',
      locations: 'Zurich / Remote Hybrid',
      type: 'Full-time Mandate',
      experience: '4+ Years Architectural Modeling',
      description: 'Audit structural blueprints, generate 3D lidar point clouds, and author architectural dossiers for new property listings.',
      requirements: [
        'Professional Master of Architecture (M.Arch) or equivalent',
        'Proficiency in Revit, CAD, BIM, and Matterport/LiDAR scanner technology',
        'Passion for contemporary minimalist and Mediterranean architecture'
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="pb-10 border-b border-[#E5E5E5] mb-12">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
            Careers at Horizon Estate
          </span>
          <h1 className="text-[34px] sm:text-[48px] font-bold text-[#111111] tracking-tight mt-1">
            Build the Future of Architectural Real Estate
          </h1>
          <p className="text-[15px] leading-relaxed text-[#666666] mt-3">
            We operate at the intersection of architectural passion, fiduciary rigor, and international advisory. Explore open instructions and partner positions.
          </p>
        </div>

        {/* Culture highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-12 mb-12 border-b border-[#E5E5E5]">
          <div className="bg-[#F6F6F4] p-5 rounded-xl border border-[#E5E5E5]">
            <div className="font-bold text-[16px] text-[#111111]">Fiduciary Culture</div>
            <div className="text-[12.5px] text-[#666666] mt-1">Client protection and ethical candor prioritized above volume</div>
          </div>
          <div className="bg-[#F6F6F4] p-5 rounded-xl border border-[#E5E5E5]">
            <div className="font-bold text-[16px] text-[#111111]">Global Desks</div>
            <div className="text-[12.5px] text-[#666666] mt-1">Seamless international transactions between Europe & the Americas</div>
          </div>
          <div className="bg-[#F6F6F4] p-5 rounded-xl border border-[#E5E5E5]">
            <div className="font-bold text-[16px] text-[#111111]">Top Tier Compensation</div>
            <div className="text-[12.5px] text-[#666666] mt-1">Industry-leading partnership splits and equity co-investment access</div>
          </div>
        </div>

        {/* Roles List */}
        <div className="space-y-6">
          <h2 className="text-[22px] font-bold text-[#111111] mb-6">
            Current Partner & Associate Mandates
          </h2>

          {openRoles.map((role) => (
            <div
              key={role.id}
              className="bg-[#F6F6F4] p-6 sm:p-8 rounded-2xl border border-[#E5E5E5] space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                    {role.department}
                  </span>
                  <h3 className="text-[22px] font-bold text-[#111111] mt-0.5">
                    {role.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-[12px] text-[#666666]">
                  <MapPin className="w-3.5 h-3.5 text-[#888888]" />
                  <span>{role.locations}</span>
                </div>
              </div>

              <p className="text-[14px] leading-relaxed text-[#555555]">
                {role.description}
              </p>

              <div className="space-y-1.5 pt-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                  Key Requirements:
                </div>
                {role.requirements.map((req, rIdx) => (
                  <div key={rIdx} className="flex items-center gap-2 text-[13px] text-[#444444]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#111111] shrink-0" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
                <span className="text-[12px] font-medium text-[#777777]">{role.experience}</span>
                <Link
                  href={`/contact?subject=Application%20-%20${encodeURIComponent(role.title)}`}
                  className="btn-primary btn-sm"
                >
                  Apply Confidentially
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Spontaneous Application */}
        <div className="mt-16 bg-white p-8 rounded-2xl border border-[#E5E5E5] text-center space-y-3">
          <h3 className="text-[20px] font-bold text-[#111111]">
            Don&apos;t see your specific discipline?
          </h3>
          <p className="text-[13.5px] text-[#666666] max-w-md mx-auto">
            We welcome confidential inquiries from proven luxury property partners, family office advisors, and digital creators worldwide.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?subject=Spontaneous%20Partnership%20Inquiry"
              className="btn-secondary btn-sm"
            >
              <span>Submit General CV / Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
