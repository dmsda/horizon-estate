import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E5E5E5] pt-16 pb-12 text-[#111111]">
      <div className="container-custom">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#E5E5E5]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-extrabold text-[18px] tracking-[0.24em] uppercase text-[#111111] block leading-none">
                HORIZON
              </span>
              <span className="font-semibold text-[12px] tracking-[0.42em] uppercase text-[#777777] block mt-1">
                ESTATE
              </span>
            </Link>
            <p className="text-[14px] leading-relaxed text-[#777777] max-w-sm">
              An international luxury property marketplace and investment platform. We combine curated architectural listings, transparent financial assumptions, and dedicated advisory across Europe, North America, and world-class retreats.
            </p>
            <div className="flex items-center gap-3 pt-2 text-[13px] text-[#444444]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F6F6F4] rounded-md text-[11px] font-medium border border-[#E5E5E5]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#111111]" />
                Institutional Advisory
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F6F6F4] rounded-md text-[11px] font-medium border border-[#E5E5E5]">
                Verified Residences
              </span>
            </div>
          </div>

          {/* Properties Links */}
          <div className="space-y-3.5">
            <div className="text-[12px] uppercase font-bold tracking-[0.14em] text-[#111111]">
              Properties
            </div>
            <ul className="space-y-2.5 text-[13.5px] text-[#666666]">
              <li>
                <Link href="/properties" className="hover:text-[#111111] transition-colors">
                  All Properties
                </Link>
              </li>
              <li>
                <Link href="/properties?category=Villa" className="hover:text-[#111111] transition-colors">
                  Architectural Villas
                </Link>
              </li>
              <li>
                <Link href="/rentals" className="hover:text-[#111111] transition-colors">
                  Prime Rentals
                </Link>
              </li>
              <li>
                <Link href="/developments" className="hover:text-[#111111] transition-colors">
                  New Developments
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="hover:text-[#111111] transition-colors">
                  Commercial & Offices
                </Link>
              </li>
              <li>
                <Link href="/investment" className="hover:text-[#111111] transition-colors flex items-center gap-1">
                  <span>Investment Offers</span>
                  <span className="text-[10px] bg-[#111111] text-white px-1.5 py-0.2 rounded font-semibold">19%</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Company */}
          <div className="space-y-3.5">
            <div className="text-[12px] uppercase font-bold tracking-[0.14em] text-[#111111]">
              Advisory & Firm
            </div>
            <ul className="space-y-2.5 text-[13.5px] text-[#666666]">
              <li>
                <Link href="/services" className="hover:text-[#111111] transition-colors">
                  Property Selection
                </Link>
              </li>
              <li>
                <Link href="/services#buying" className="hover:text-[#111111] transition-colors">
                  Buying Assistance
                </Link>
              </li>
              <li>
                <Link href="/services#investment" className="hover:text-[#111111] transition-colors">
                  Investment Underwriting
                </Link>
              </li>
              <li>
                <Link href="/agents" className="hover:text-[#111111] transition-colors">
                  Expert Brokers & Agents
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#111111] transition-colors">
                  About Horizon Estate
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-[#111111] transition-colors">
                  Editorial Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Locations & Contact */}
          <div className="space-y-3.5">
            <div className="text-[12px] uppercase font-bold tracking-[0.14em] text-[#111111]">
              Global Desks
            </div>
            <div className="space-y-3 text-[13px] text-[#666666]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-[#111111]">Americas & Caribbean</div>
                  <div>Beverly Hills, CA & Exuma</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-[#111111]">Europe & Mediterranean</div>
                  <div>London • Madrid • Mykonos</div>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1 text-[#111111]">
                <Mail className="w-3.5 h-3.5 text-[#777777]" />
                <a href="mailto:advisory@horizonestate.com" className="hover:underline">
                  advisory@horizonestate.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#111111]">
                <Phone className="w-3.5 h-3.5 text-[#777777]" />
                <a href="tel:+12135550192" className="hover:underline">
                  +1 (213) 555-0192
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimers & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-[#888888]">
          <div className="space-y-1">
            <div>
              © 2026 Horizon Estate Group Ltd. All rights reserved. Registered real estate and advisory brokerage.
            </div>
            <div className="text-[11px] text-[#999999] max-w-2xl">
              Disclaimer: Listings, investment models, and projected yields displayed are illustrative demonstrations curated for portfolio representation. Past performance or projected IRR does not constitute a legal financial guarantee.
            </div>
          </div>

          <div className="flex items-center gap-5 text-[12.5px] text-[#555555]">
            <Link href="/showcase" className="font-semibold text-[#111111] hover:underline transition-colors flex items-center gap-1">
              <span>Template Showcase</span>
              <span className="text-[10px] bg-[#111111] text-white px-1.5 py-0.5 rounded font-mono">v1.0</span>
            </Link>
            <Link href="/privacy" className="hover:text-[#111111] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#111111] transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-[#111111] transition-colors">
              Client Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
