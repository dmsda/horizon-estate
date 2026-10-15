'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Home, 
  Building2, 
  TrendingUp, 
  Compass, 
  Users, 
  PhoneCall, 
  ShieldCheck
} from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard accessibility: Escape key closes dropdowns or mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeDropdown) {
          setActiveDropdown(null);
        }
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
          mobileToggleRef.current?.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDropdown, isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      {/* Skip to Main Content Link for Keyboard and Screen Reader Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-[#111111] focus:text-white focus:rounded-md focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <header
        role="banner"
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
            : 'bg-white border-b border-[#E5E5E5]/70 py-4'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="group flex flex-col items-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded px-1"
            aria-label="Horizon Estate Homepage"
          >
            <span className="font-extrabold text-[15px] sm:text-[17px] tracking-[0.22em] text-[#111111] uppercase leading-none">
              HORIZON
            </span>
            <span className="font-semibold text-[11px] sm:text-[12px] tracking-[0.38em] text-[#595959] uppercase leading-tight mt-0.5">
              ESTATE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            ref={dropdownRef} 
            className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-[#111111]"
            aria-label="Primary Navigation"
          >
            {/* Properties Dropdown */}
            <div className="relative">
              <button
                id="properties-menu-button"
                onClick={() => toggleDropdown('properties')}
                aria-haspopup="menu"
                aria-expanded={activeDropdown === 'properties'}
                aria-controls="properties-dropdown-menu"
                className={`nav-link-animated flex items-center gap-1.5 py-1.5 px-2 rounded transition-colors hover:text-[#111111] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] ${
                  pathname.startsWith('/properties') || pathname.startsWith('/rentals') || pathname.startsWith('/developments') || pathname.startsWith('/commercial') || pathname.startsWith('/investment')
                    ? 'text-[#111111] font-semibold active'
                    : 'text-[#333333]'
                }`}
              >
                <span>Properties</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 text-[#595959] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    activeDropdown === 'properties' ? 'rotate-180 text-[#111111]' : ''
                  }`} 
                />
              </button>

              {activeDropdown === 'properties' && (
                <div 
                  id="properties-dropdown-menu"
                  role="menu"
                  aria-labelledby="properties-menu-button"
                  className="absolute top-full left-0 mt-2.5 w-64 bg-white rounded-lg border border-[#E5E5E5] shadow-[0_12px_32px_rgba(0,0,0,0.08)] py-2 z-50 animate-in fade-in zoom-in-95 duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]"
                >
                  <Link
                    href="/properties"
                    role="menuitem"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#F6F6F4] text-[#111111] transition-colors focus:bg-[#F6F6F4] focus:outline-none"
                  >
                    <Home className="w-4 h-4 text-[#595959]" />
                    <div>
                      <div className="text-[13px] font-medium">All Properties</div>
                      <div className="text-[11px] text-[#595959]">Explore curated residences</div>
                    </div>
                  </Link>
                  <Link
                    href="/rentals"
                    role="menuitem"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#F6F6F4] text-[#111111] transition-colors focus:bg-[#F6F6F4] focus:outline-none"
                  >
                    <Building2 className="w-4 h-4 text-[#595959]" />
                    <div>
                      <div className="text-[13px] font-medium">Prime Rentals</div>
                      <div className="text-[11px] text-[#595959]">Seasonal & long-term leases</div>
                    </div>
                  </Link>
                  <Link
                    href="/developments"
                    role="menuitem"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#F6F6F4] text-[#111111] transition-colors focus:bg-[#F6F6F4] focus:outline-none"
                  >
                    <Compass className="w-4 h-4 text-[#595959]" />
                    <div>
                      <div className="text-[13px] font-medium">New Developments</div>
                      <div className="text-[11px] text-[#595959]">Off-plan luxury architectural units</div>
                    </div>
                  </Link>
                  <Link
                    href="/commercial"
                    role="menuitem"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#F6F6F4] text-[#111111] transition-colors focus:bg-[#F6F6F4] focus:outline-none"
                  >
                    <Building2 className="w-4 h-4 text-[#595959]" />
                    <div>
                      <div className="text-[13px] font-medium">Commercial</div>
                      <div className="text-[11px] text-[#595959]">Prime offices & mixed-use assets</div>
                    </div>
                  </Link>
                  <div className="border-t border-[#E5E5E5] my-1" role="separator"></div>
                  <Link
                    href="/investment"
                    role="menuitem"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#F6F6F4] text-[#111111] transition-colors focus:bg-[#F6F6F4] focus:outline-none"
                  >
                    <TrendingUp className="w-4 h-4 text-[#595959]" />
                    <div>
                      <div className="text-[13px] font-medium flex items-center gap-1.5">
                        <span>Investment Offers</span>
                        <span className="text-[9px] uppercase tracking-wider bg-[#111111] text-white px-1.5 py-0.5 rounded font-medium">19% Return</span>
                      </div>
                      <div className="text-[11px] text-[#595959]">Yield-generating properties</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Mortgage / Financing */}
            <Link
              href="/services#financing"
              className="nav-link-animated flex items-center gap-1.5 text-[#333333] hover:text-[#111111] transition-colors py-1.5 px-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
            >
              <span>Mortgage</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold bg-[#F6F6F4] text-[#111111] border border-[#E5E5E5] px-1.5 py-0.5 rounded">
                New
              </span>
            </Link>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                id="company-menu-button"
                onClick={() => toggleDropdown('company')}
                aria-haspopup="menu"
                aria-expanded={activeDropdown === 'company'}
                aria-controls="company-dropdown-menu"
                className={`nav-link-animated flex items-center gap-1.5 py-1.5 px-2 rounded transition-colors hover:text-[#111111] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] ${
                  pathname.startsWith('/about') || pathname.startsWith('/services') || pathname.startsWith('/agents')
                    ? 'text-[#111111] font-semibold active'
                    : 'text-[#333333]'
                }`}
              >
                <span>Company</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 text-[#595959] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    activeDropdown === 'company' ? 'rotate-180 text-[#111111]' : ''
                  }`} 
                />
              </button>

              {activeDropdown === 'company' && (
                <div 
                  id="company-dropdown-menu"
                  role="menu"
                  aria-labelledby="company-menu-button"
                  className="absolute top-full left-0 mt-2.5 w-56 bg-white rounded-lg border border-[#E5E5E5] shadow-[0_12px_32px_rgba(0,0,0,0.08)] py-2 z-50 animate-in fade-in zoom-in-95 duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]"
                >
                  <Link
                    href="/about"
                    role="menuitem"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-2.5 px-4 py-2 hover:bg-[#F6F6F4] text-[#111111] text-[13px] focus:bg-[#F6F6F4] focus:outline-none"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#595959]" />
                    <span>About Horizon Estate</span>
                  </Link>
                  <Link
                    href="/services"
                    role="menuitem"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-2.5 px-4 py-2 hover:bg-[#F6F6F4] text-[#111111] text-[13px] focus:bg-[#F6F6F4] focus:outline-none"
                  >
                    <Compass className="w-4 h-4 text-[#595959]" />
                    <span>Our Services</span>
                  </Link>
                  <Link
                    href="/agents"
                    role="menuitem"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-2.5 px-4 py-2 hover:bg-[#F6F6F4] text-[#111111] text-[13px] focus:bg-[#F6F6F4] focus:outline-none"
                  >
                    <Users className="w-4 h-4 text-[#595959]" />
                    <span>Expert Agents</span>
                  </Link>
                  <Link
                    href="/contact"
                    role="menuitem"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-2.5 px-4 py-2 hover:bg-[#F6F6F4] text-[#111111] text-[13px] focus:bg-[#F6F6F4] focus:outline-none"
                  >
                    <PhoneCall className="w-4 h-4 text-[#595959]" />
                    <span>Consultations & Contact</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Careers */}
            <Link
              href="/careers"
              className={`nav-link-animated py-1.5 px-2 rounded transition-colors hover:text-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] ${
                pathname === '/careers' ? 'text-[#111111] font-semibold active' : 'text-[#333333]'
              }`}
            >
              Careers
            </Link>

            {/* Journal */}
            <Link
              href="/journal"
              className={`nav-link-animated py-1.5 px-2 rounded transition-colors hover:text-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] ${
                pathname.startsWith('/journal') ? 'text-[#111111] font-semibold active' : 'text-[#333333]'
              }`}
            >
              Journal
            </Link>
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/list-property"
              className="hidden sm:inline-flex btn-white btn-sm"
            >
              <Home className="w-3.5 h-3.5 text-[#111111]" />
              <span>Post a property</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              ref={mobileToggleRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-1 md:hidden text-[#111111] hover:bg-[#F6F6F4] rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-dialog"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-nav-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="md:hidden fixed inset-x-0 top-[61px] bg-white border-b border-[#E5E5E5] shadow-xl max-h-[calc(100vh-61px)] overflow-y-auto px-6 py-6 animate-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col space-y-4">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#595959]">
                Properties
              </div>
              <div className="grid grid-cols-2 gap-2 pl-2">
                <Link href="/properties" className="text-[14px] py-1 text-[#111111] hover:underline">
                  All Properties
                </Link>
                <Link href="/rentals" className="text-[14px] py-1 text-[#111111] hover:underline">
                  Prime Rentals
                </Link>
                <Link href="/developments" className="text-[14px] py-1 text-[#111111] hover:underline">
                  Developments
                </Link>
                <Link href="/commercial" className="text-[14px] py-1 text-[#111111] hover:underline">
                  Commercial
                </Link>
                <Link href="/investment" className="text-[14px] py-1 text-[#111111] col-span-2 font-medium flex items-center justify-between">
                  <span>Investment Opportunities</span>
                  <span className="text-[10px] bg-[#111111] text-white px-2 py-0.5 rounded">19% Return</span>
                </Link>
              </div>

              <hr className="border-[#E5E5E5]" />

              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#595959]">
                Company & Services
              </div>
              <div className="flex flex-col space-y-2.5 pl-2">
                <Link href="/services" className="text-[14px] text-[#111111] hover:underline">
                  Our Services
                </Link>
                <Link href="/agents" className="text-[14px] text-[#111111] hover:underline">
                  Expert Agents
                </Link>
                <Link href="/about" className="text-[14px] text-[#111111] hover:underline">
                  About Horizon Estate
                </Link>
                <Link href="/careers" className="text-[14px] text-[#111111] hover:underline">
                  Careers
                </Link>
                <Link href="/journal" className="text-[14px] text-[#111111] hover:underline">
                  Editorial Journal
                </Link>
                <Link href="/contact" className="text-[14px] text-[#111111] hover:underline">
                  Contact & Consultation
                </Link>
              </div>

              <div className="pt-4 flex flex-col gap-2.5">
                <Link
                  href="/list-property"
                  className="w-full btn-secondary"
                >
                  <Home className="w-4 h-4" />
                  <span>Post a property</span>
                </Link>
                <Link
                  href="/contact"
                  className="w-full btn-primary"
                >
                  <span>Book a Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
