'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ExternalLink,
  Play,
  RotateCcw,
  Monitor,
  Tablet,
  Smartphone,
  Copy,
  Check,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  Code2,
  Shield,
  Palette,
  Terminal,
  ChevronRight,
  Maximize2,
  Building,
  Eye,
  Sliders,
  BookOpen
} from 'lucide-react';

interface ScreenshotItem {
  id: string;
  title: string;
  category: 'flagship' | 'discovery' | 'corporate';
  route: string;
  image: string;
  description: string;
  badge: string;
}

const screenshots: ScreenshotItem[] = [
  {
    id: 'home',
    title: 'Homepage & Hero Experience',
    category: 'flagship',
    route: '/',
    image: '/showcase/homepage-desktop.png',
    description: 'Cinematic hero imagery, quick search filtering, curated property highlights, and investment spotlight.',
    badge: 'Flagship Landing'
  },
  {
    id: 'properties',
    title: 'Property Discovery & Filter Grid',
    category: 'discovery',
    route: '/properties',
    image: '/showcase/properties-desktop.png',
    description: 'Dynamic multi-criteria filtering by category, price, bedrooms, and location with responsive cards.',
    badge: 'Marketplace'
  },
  {
    id: 'detail',
    title: 'Property Detail Showcase (Serenity Tower)',
    category: 'discovery',
    route: '/properties/serenity-tower',
    image: '/showcase/property-detail-desktop.png',
    description: 'Full-bleed photo galleries, interactive floor plans, neighborhood metrics, and direct agent inquiry.',
    badge: 'Single Listing'
  },
  {
    id: 'developments',
    title: 'Off-Plan Architectural Developments',
    category: 'discovery',
    route: '/developments',
    image: '/showcase/developments-desktop.png',
    description: 'Showcasing luxury off-plan projects with construction milestones, floor specs, and developer credentials.',
    badge: 'New Projects'
  },
  {
    id: 'investment',
    title: 'Yield & Portfolio Advisory',
    category: 'corporate',
    route: '/investment',
    image: '/showcase/investment-desktop.png',
    description: 'Institutional-grade investment returns, net yields, capital growth charts, and private client desk.',
    badge: 'Advisory Desk'
  },
  {
    id: 'services',
    title: 'Comprehensive Advisory Services',
    category: 'corporate',
    route: '/services',
    image: '/showcase/services-desktop.png',
    description: 'Private acquisitions, legal structuring, architectural consultations, and bespoke financing options.',
    badge: 'Client Services'
  },
  {
    id: 'about',
    title: 'Brand Philosophy & Global Presence',
    category: 'corporate',
    route: '/about',
    image: '/showcase/about-desktop.png',
    description: 'Firm history, international partner offices in London, Beverly Hills, Madrid, and executive team.',
    badge: 'Brand & Culture'
  },
  {
    id: 'journal',
    title: 'Architectural Journal & Market Insights',
    category: 'corporate',
    route: '/journal',
    image: '/showcase/journal-desktop.png',
    description: 'Editorial articles on minimalist interior design, sustainable construction, and European luxury trends.',
    badge: 'Editorial'
  },
  {
    id: 'careers',
    title: 'Careers & Talent Acquisition',
    category: 'corporate',
    route: '/careers',
    image: '/showcase/careers-desktop.png',
    description: 'Global open positions in advisory, architectural analysis, and luxury client relationships.',
    badge: 'Careers'
  },
  {
    id: 'contact',
    title: 'Consultations & Global Offices',
    category: 'corporate',
    route: '/contact',
    image: '/showcase/contact-desktop.png',
    description: 'Direct inquiry forms, private booking modals, office hours, and international contact desk.',
    badge: 'Inquiry'
  }
];

const colorTokens = [
  { name: 'Obsidian Black', hex: '#0A0A0A', role: 'Primary typography, hero accents, footer elements' },
  { name: 'Pure White', hex: '#FFFFFF', role: 'Base page canvas, cards, contrast surfaces' },
  { name: 'Gallery Off-White', hex: '#F6F6F4', role: 'Subtle container backgrounds, pill tags, hover states' },
  { name: 'Architectural Border', hex: '#E5E5E5', role: 'Hairline dividers, card outlines, tabular borders' },
  { name: 'Editorial Muted', hex: '#595959', role: 'Secondary body copy, subtitles, metadata labels' },
  { name: 'Champagne Bronze', hex: '#C5A880', role: 'Curated luxury accents, status indicators, badges' }
];

interface FeatureItem {
  name: string;
  category: string;
  status: 'implemented' | 'demo' | 'planned';
  description: string;
}

const featuresList: FeatureItem[] = [
  {
    name: 'Next.js App Router Architecture',
    category: 'Core System',
    status: 'implemented',
    description: 'Static generation across 39 verified routes with instant navigation and zero layout shift.'
  },
  {
    name: 'Dynamic Property Filter Engine',
    category: 'Property Discovery',
    status: 'implemented',
    description: 'Real-time client filtering by category, price range, bedrooms, and location query.'
  },
  {
    name: 'Interactive Mortgage & Yield Calculator',
    category: 'Financial Tools',
    status: 'implemented',
    description: 'Instant monthly payment, down payment, loan term, and net yield projections.'
  },
  {
    name: 'Cinematic Lightbox Gallery',
    category: 'Media Experience',
    status: 'implemented',
    description: 'Keyboard-navigable (Arrow/Escape) modal lightbox for high-resolution property photography.'
  },
  {
    name: 'Bespoke Consultation Booking Modal',
    category: 'Lead Generation',
    status: 'implemented',
    description: 'Accessible modal dialogue with form validation, agent routing, and privacy consents.'
  },
  {
    name: 'Strict TypeScript Design Schemas',
    category: 'Code Quality',
    status: 'implemented',
    description: '100% typed interfaces in src/types/index.ts covering properties, agents, and transactions.'
  },
  {
    name: 'Sample Property Data Store',
    category: 'Data Layer',
    status: 'demo',
    description: 'Pre-populated with realistic architectural residences; clearly isolated in src/data/properties.ts.'
  },
  {
    name: 'Interactive Floor Plan Viewer',
    category: 'Media Experience',
    status: 'demo',
    description: 'Vector-styled floor plan preview with dimensions and room specifications.'
  },
  {
    name: 'Headless CMS Integration (Sanity/Strapi)',
    category: 'Backend & Data',
    status: 'planned',
    description: 'Optional webhook-driven integration layer for dynamic enterprise property management.'
  },
  {
    name: 'User Saved Properties & Favorites Sync',
    category: 'User Experience',
    status: 'planned',
    description: 'Persistent local storage or authenticated bookmark synchronization across devices.'
  }
];

export default function ShowcaseClient() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'flagship' | 'discovery' | 'corporate'>('all');
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [previewModalImage, setPreviewModalImage] = useState<string | null>(null);

  // Animation test states
  const [animHeroKey, setAnimHeroKey] = useState(0);
  const [animCardKey, setAnimCardKey] = useState(0);
  const [animTextKey, setAnimTextKey] = useState(0);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const filteredScreenshots = activeCategory === 'all'
    ? screenshots
    : screenshots.filter(s => s.category === activeCategory);

  return (
    <div className="bg-[#FFFFFF] text-[#111111] overflow-hidden">
      {/* SECTION A: HERO */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 border-b border-[#E5E5E5] bg-gradient-to-b from-[#FAFAF8] to-[#FFFFFF]">
        <div className="container-custom">
          {/* Top Label & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#111111] text-white text-[12px] font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Official Open Source Product Showcase</span>
            </div>
            <div className="flex items-center gap-2 text-[12px] text-[#595959] font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Next.js 16.4.1 • React 19 • Tailwind CSS v4</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="max-w-4xl">
            <div className="text-[13px] md:text-[14px] uppercase tracking-[0.25em] text-[#595959] font-bold mb-4">
              Horizon Estate — Website Template
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.08] mb-6">
              A Refined Digital Experience for Modern Real Estate.
            </h1>
            <p className="text-lg sm:text-xl text-[#595959] leading-relaxed max-w-3xl mb-8">
              Explore a premium, open-source real estate website template combining architectural minimalism,
              editorial typography, cinematic hover transitions, and an enterprise-grade Next.js App Router architecture.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-12">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#111111] text-white font-medium text-[14px] hover:bg-[#262626] transition-all duration-200 shadow-sm"
              >
                <span>Live Preview</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#getting-started"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-[#E5E5E5] text-[#111111] font-medium text-[14px] hover:bg-[#F6F6F4] transition-all duration-200"
              >
                <Terminal className="w-4 h-4 text-[#595959]" />
                <span>Quick Install</span>
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-[#595959] hover:text-[#111111] font-medium text-[14px] hover:bg-[#F6F6F4] transition-all duration-200"
              >
                <span>Explore Features</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Hero Device Mockup Presentation */}
          <div className="relative mt-8 pt-4">
            <div className="relative rounded-2xl border border-[#E5E5E5] bg-[#FFFFFF] shadow-[0_24px_64px_rgba(0,0,0,0.08)] overflow-hidden">
              {/* Chrome Browser Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#F8F8F6] border-b border-[#E5E5E5]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#E5E5E5]" />
                  <div className="w-3 h-3 rounded-full bg-[#E5E5E5]" />
                  <div className="w-3 h-3 rounded-full bg-[#E5E5E5]" />
                </div>
                <div className="hidden sm:flex items-center gap-2 px-4 py-1 rounded-md bg-white border border-[#E5E5E5] text-[12px] text-[#595959] font-mono">
                  <span className="text-emerald-600">https://</span>
                  <span>horizon-estate.template.dev/</span>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href="/"
                    target="_blank"
                    className="text-[11px] font-semibold text-[#111111] hover:underline flex items-center gap-1"
                  >
                    <span>Launch</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Main Desktop Mockup Image */}
              <div className="relative aspect-[16/9] w-full bg-[#FAFAF8] overflow-hidden">
                <Image
                  src="/showcase/homepage-desktop.png"
                  alt="Horizon Estate Desktop Homepage Showcase"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1280px) 100vw, 1200px"
                />
              </div>
            </div>

            {/* Overlaid Smartphone Frame Preview */}
            <div className="hidden lg:block absolute -bottom-10 -right-6 w-64 rounded-3xl border-4 border-[#111111] bg-[#111111] shadow-[0_32px_72px_rgba(0,0,0,0.22)] overflow-hidden">
              <div className="relative aspect-[9/19] w-full bg-white overflow-hidden rounded-[20px]">
                <Image
                  src="/showcase/homepage-mobile.png"
                  alt="Horizon Estate Mobile Preview"
                  fill
                  className="object-cover object-top"
                  sizes="260px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: PRODUCT OVERVIEW */}
      <section className="py-20 md:py-28 border-b border-[#E5E5E5] bg-[#FFFFFF]">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#595959] mb-3">
              Audience & Purpose
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] leading-tight mb-4">
              Engineered for High-End Property Discovery.
            </h2>
            <p className="text-[16px] text-[#595959] leading-relaxed">
              Horizon Estate is intentionally designed as an unopinionated, extensible real estate foundation.
              Built for commercial brokerages, independent developers, and creative agencies requiring an architectural
              digital standard without legacy CMS bloat.
            </p>
          </div>

          {/* 6 Target Audience Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Real Estate Agencies',
                desc: 'Present premier portfolios, off-market listings, and international offices with editorial distinction.',
                icon: Building
              },
              {
                title: 'Property Consultants',
                desc: 'Highlight private client services, wealth structuring, and verified yield projections.',
                icon: Shield
              },
              {
                title: 'Architecture & Design Studios',
                desc: 'Showcase residential developments through full-bleed image galleries and tactile typography.',
                icon: Palette
              },
              {
                title: 'Property Developers',
                desc: 'Market off-plan towers, construction phases, floor plans, and direct advisory consultations.',
                icon: Layers
              },
              {
                title: 'Independent Frontend Developers',
                desc: 'Study clean App Router conventions, strict TypeScript data models, and zero-runtime Tailwind v4 styling.',
                icon: Code2
              },
              {
                title: 'Creative Agencies',
                desc: 'Deliver client real estate websites rapidly using modular components and production-verified routes.',
                icon: Sparkles
              }
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-[#E5E5E5] bg-[#FFFFFF] hover:border-[#111111] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F6F6F4] flex items-center justify-center text-[#111111] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] mb-2">{card.title}</h3>
                  <p className="text-[14px] text-[#595959] leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION C: VISUAL SHOWCASE */}
      <section id="visual-showcase" className="py-20 md:py-28 border-b border-[#E5E5E5] bg-[#FAFAF8]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#595959] mb-3">
                Interface Gallery
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] leading-tight">
                Authentic Page Previews.
              </h2>
              <p className="text-[15px] text-[#595959] mt-2 max-w-xl">
                Every screenshot represents actual browser rendering of the running Horizon Estate application.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#FFFFFF] border border-[#E5E5E5]">
              {(['all', 'flagship', 'discovery', 'corporate'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCategory(tab)}
                  className={`px-3.5 py-1.5 rounded-md text-[13px] font-medium transition-all ${
                    activeCategory === tab
                      ? 'bg-[#111111] text-white shadow-sm'
                      : 'text-[#595959] hover:text-[#111111]'
                  }`}
                >
                  {tab === 'all' ? 'All Views' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Screenshot Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredScreenshots.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl border border-[#E5E5E5] bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-[#111111]/40 transition-all duration-300 flex flex-col"
              >
                {/* Browser Frame Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#F6F6F4] border-b border-[#E5E5E5]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5]" />
                    <span className="ml-2 font-mono text-[11px] text-[#595959]">{item.route}</span>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-white border border-[#E5E5E5] px-2 py-0.5 rounded text-[#595959]">
                    {item.badge}
                  </span>
                </div>

                {/* Screenshot Media */}
                <div
                  className="relative aspect-[16/10] w-full bg-[#FAFAF8] overflow-hidden cursor-pointer"
                  onClick={() => setPreviewModalImage(item.image)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-3 py-1.5 rounded-md bg-white/95 text-[#111111] text-[12px] font-semibold shadow flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Inspect Preview</span>
                    </span>
                  </div>
                </div>

                {/* Card Meta & Link */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#111111] mb-1.5">{item.title}</h3>
                    <p className="text-[13.5px] text-[#595959] leading-relaxed mb-4">{item.description}</p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#E5E5E5]">
                    <span className="text-[12px] text-[#737373]">Route: <code className="font-mono text-[#111111]">{item.route}</code></span>
                    <Link
                      href={item.route}
                      className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#111111] hover:underline"
                    >
                      <span>Visit Live Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D: DESIGN SYSTEM */}
      <section id="design-system" className="py-20 md:py-28 border-b border-[#E5E5E5] bg-[#FFFFFF]">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#595959] mb-3">
              Foundations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] leading-tight mb-4">
              Architectural Design System.
            </h2>
            <p className="text-[16px] text-[#595959] leading-relaxed">
              Every interface token is derived directly from the active Horizon Estate codebase.
              Minimalist geometry, high contrast contrast ratios, and deliberate white space reflect modern luxury.
            </p>
          </div>

          {/* Color Tokens Palette */}
          <div className="mb-16">
            <h3 className="text-lg font-bold text-[#111111] mb-6 flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#595959]" />
              <span>Color Palette & Tokens</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {colorTokens.map((token) => (
                <div
                  key={token.hex}
                  className="p-4 rounded-xl border border-[#E5E5E5] bg-white hover:border-[#111111] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-full h-16 rounded-lg mb-3 border border-black/5 shadow-inner"
                      style={{ backgroundColor: token.hex }}
                    />
                    <div className="font-bold text-[14px] text-[#111111]">{token.name}</div>
                    <div className="text-[11px] text-[#737373] mt-1 leading-tight">{token.role}</div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(token.hex, token.hex)}
                    className="mt-3 pt-2 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono text-[#595959] hover:text-[#111111] w-full"
                  >
                    <span>{token.hex}</span>
                    {copiedText === token.hex ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Typography & Spacing Specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Typography */}
            <div className="p-6 rounded-xl border border-[#E5E5E5] bg-[#FAFAF8]">
              <h3 className="text-base font-bold text-[#111111] mb-4">Typography Hierarchy</h3>
              <div className="space-y-4">
                <div className="pb-3 border-b border-[#E5E5E5]">
                  <div className="text-[11px] font-mono uppercase text-[#737373] mb-1">Display / H1 — Manrope ExtraBold (56px)</div>
                  <div className="text-3xl font-extrabold text-[#111111] tracking-tight">Exceptional Homes</div>
                </div>
                <div className="pb-3 border-b border-[#E5E5E5]">
                  <div className="text-[11px] font-mono uppercase text-[#737373] mb-1">Section Head / H2 — Manrope Bold (32px)</div>
                  <div className="text-xl font-bold text-[#111111]">Curated Architectural Living</div>
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-[#737373] mb-1">Body Text / Specs — Manrope Regular (14px / 16px)</div>
                  <p className="text-[14px] text-[#595959] leading-relaxed">
                    Clean, readable editorial body text optimized with balanced line heights and high WCAG contrast.
                  </p>
                </div>
              </div>
            </div>

            {/* Component Tokens */}
            <div className="p-6 rounded-xl border border-[#E5E5E5] bg-[#FAFAF8]">
              <h3 className="text-base font-bold text-[#111111] mb-4">Interactive Button System</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <button className="px-5 py-2.5 rounded-lg bg-[#111111] text-white text-[13.5px] font-medium hover:bg-[#262626] transition-colors">
                    Primary Solid
                  </button>
                  <button className="px-5 py-2.5 rounded-lg bg-white border border-[#E5E5E5] text-[#111111] text-[13.5px] font-medium hover:bg-[#F6F6F4] transition-colors">
                    Secondary Outline
                  </button>
                  <button className="px-4 py-2 rounded-full bg-[#F6F6F4] text-[#111111] text-[12px] font-semibold border border-[#E5E5E5]">
                    Pill Badge
                  </button>
                </div>
                <p className="text-[13px] text-[#737373] leading-relaxed">
                  Consistent micro-radii (<code className="font-mono text-[#111111]">rounded-lg</code> for actions,{' '}
                  <code className="font-mono text-[#111111]">rounded-full</code> for tags) ensures cohesive visual rhythm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: FEATURES MATRIX */}
      <section id="features" className="py-20 md:py-28 border-b border-[#E5E5E5] bg-[#FAFAF8]">
        <div className="container-custom">
          <div className="max-w-3xl mb-14">
            <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#595959] mb-3">
              Verification & Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] leading-tight mb-4">
              Feature Implementation Status.
            </h2>
            <p className="text-[16px] text-[#595959] leading-relaxed">
              Transparent breakdown of verified production features, client demo data, and upcoming community roadmap items.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E5E5] bg-white overflow-hidden shadow-sm">
            <div className="divide-y divide-[#E5E5E5]">
              {featuresList.map((feature, i) => (
                <div key={i} className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#737373] bg-[#F6F6F4] px-2 py-0.5 rounded">
                        {feature.category}
                      </span>
                      <h3 className="text-base font-bold text-[#111111]">{feature.name}</h3>
                    </div>
                    <p className="text-[13.5px] text-[#595959] leading-relaxed">{feature.description}</p>
                  </div>

                  <div>
                    {feature.status === 'implemented' && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[12px] font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified Implemented</span>
                      </span>
                    )}
                    {feature.status === 'demo' && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[12px] font-semibold">
                        <Sliders className="w-3.5 h-3.5" />
                        <span>Demo Data / Client</span>
                      </span>
                    )}
                    {feature.status === 'planned' && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-[12px] font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Planned Roadmap</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: ANIMATION SHOWCASE (INTERACTIVE MOTION LAB) */}
      <section id="animation-showcase" className="py-20 md:py-28 border-b border-[#E5E5E5] bg-[#FFFFFF]">
        <div className="container-custom">
          <div className="max-w-3xl mb-14">
            <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#595959] mb-3">
              Motion Design
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] leading-tight mb-4">
              Interactive Animation Lab.
            </h2>
            <p className="text-[16px] text-[#595959] leading-relaxed">
              Test and replay individual micro-interactions without reloading the page.
              Built purely with CSS keyframes and hardware-accelerated transforms for 60fps performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Demo 1: Hero Image Reveal */}
            <div className="p-6 rounded-xl border border-[#E5E5E5] bg-[#FAFAF8] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-base text-[#111111]">Hero Reveal</h3>
                  <button
                    onClick={() => setAnimHeroKey(k => k + 1)}
                    className="p-1.5 rounded-md hover:bg-white text-[#595959] hover:text-[#111111] border border-transparent hover:border-[#E5E5E5] transition-all"
                    title="Replay animation"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative h-44 rounded-lg overflow-hidden bg-black mb-3">
                  <div
                    key={animHeroKey}
                    className="relative w-full h-full animate-[heroReveal_1.4s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                  >
                    <Image
                      src="/showcase/hero-desktop.png"
                      alt="Hero Reveal Preview"
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                </div>
                <p className="text-[12.5px] text-[#737373]">
                  Subtle scale down from 1.05 to 1.0 combined with opacity dissolve on page mount.
                </p>
              </div>
              <button
                onClick={() => setAnimHeroKey(k => k + 1)}
                className="mt-4 flex items-center justify-center gap-1.5 w-full py-2 bg-white border border-[#E5E5E5] rounded-md text-[12px] font-medium text-[#111111] hover:bg-[#F6F6F4]"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Replay Reveal</span>
              </button>
            </div>

            {/* Demo 2: Property Card Hover */}
            <div className="p-6 rounded-xl border border-[#E5E5E5] bg-[#FAFAF8] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-base text-[#111111]">Card Hover Zoom</h3>
                  <button
                    onClick={() => setAnimCardKey(k => k + 1)}
                    className="p-1.5 rounded-md hover:bg-white text-[#595959] hover:text-[#111111] border border-transparent hover:border-[#E5E5E5] transition-all"
                    title="Trigger hover effect"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
                <div
                  key={animCardKey}
                  className="group/card relative h-44 rounded-lg overflow-hidden bg-black mb-3 cursor-pointer"
                >
                  <Image
                    src="/showcase/property-detail-desktop.png"
                    alt="Card Hover Preview"
                    fill
                    className="object-cover group-hover/card:scale-105 transition-transform duration-500 ease-out"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white text-[12px] font-medium">Explore Residence →</span>
                  </div>
                </div>
                <p className="text-[12.5px] text-[#737373]">
                  Hover card above to observe smooth 500ms cubic-bezier transition and gradient overlay.
                </p>
              </div>
              <div className="mt-4 text-center text-[12px] text-[#737373] py-2">
                Hover to interact
              </div>
            </div>

            {/* Demo 3: Staggered Heading Reveal */}
            <div className="p-6 rounded-xl border border-[#E5E5E5] bg-[#FAFAF8] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-base text-[#111111]">Editorial Slide-Up</h3>
                  <button
                    onClick={() => setAnimTextKey(k => k + 1)}
                    className="p-1.5 rounded-md hover:bg-white text-[#595959] hover:text-[#111111] border border-transparent hover:border-[#E5E5E5] transition-all"
                    title="Replay text slide"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
                <div className="h-44 rounded-lg bg-white border border-[#E5E5E5] p-5 flex flex-col justify-center mb-3 overflow-hidden">
                  <div key={animTextKey} className="space-y-1">
                    <div className="overflow-hidden">
                      <div className="animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards] font-extrabold text-xl text-[#111111]">
                        Horizon Estate
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards] text-sm text-[#595959]">
                        International Architecture
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[12.5px] text-[#737373]">
                  Staggered translation reveal commonly used in luxury editorial hero typography.
                </p>
              </div>
              <button
                onClick={() => setAnimTextKey(k => k + 1)}
                className="mt-4 flex items-center justify-center gap-1.5 w-full py-2 bg-white border border-[#E5E5E5] rounded-md text-[12px] font-medium text-[#111111] hover:bg-[#F6F6F4]"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Replay Text Slide</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION G: RESPONSIVE SHOWCASE */}
      <section id="responsive-showcase" className="py-20 md:py-28 border-b border-[#E5E5E5] bg-[#FAFAF8]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#595959] mb-3">
                Multi-Device Ready
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] leading-tight">
                Authentic Responsive Layouts.
              </h2>
              <p className="text-[15px] text-[#595959] mt-2 max-w-xl">
                Tested across genuine desktop (1440px), tablet (768px), and mobile (390px) viewports.
              </p>
            </div>

            {/* Device Switcher */}
            <div className="flex items-center gap-2 p-1 rounded-lg bg-white border border-[#E5E5E5]">
              <button
                onClick={() => setActiveDevice('desktop')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md text-[13px] font-medium transition-all ${
                  activeDevice === 'desktop' ? 'bg-[#111111] text-white shadow-sm' : 'text-[#595959] hover:text-[#111111]'
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span>Desktop (1440px)</span>
              </button>
              <button
                onClick={() => setActiveDevice('tablet')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md text-[13px] font-medium transition-all ${
                  activeDevice === 'tablet' ? 'bg-[#111111] text-white shadow-sm' : 'text-[#595959] hover:text-[#111111]'
                }`}
              >
                <Tablet className="w-4 h-4" />
                <span>Tablet (768px)</span>
              </button>
              <button
                onClick={() => setActiveDevice('mobile')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md text-[13px] font-medium transition-all ${
                  activeDevice === 'mobile' ? 'bg-[#111111] text-white shadow-sm' : 'text-[#595959] hover:text-[#111111]'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Mobile (390px)</span>
              </button>
            </div>
          </div>

          {/* Interactive Frame Display */}
          <div className="flex justify-center">
            {activeDevice === 'desktop' && (
              <div className="w-full max-w-5xl rounded-2xl border border-[#E5E5E5] bg-white shadow-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center px-4 py-2.5 bg-[#F6F6F4] border-b border-[#E5E5E5] text-[11px] font-mono text-[#595959]">
                  <span>Desktop Viewport — 1440 × 900</span>
                </div>
                <div className="relative aspect-[16/10] w-full bg-[#FAFAF8]">
                  <Image
                    src="/showcase/properties-desktop.png"
                    alt="Properties Desktop Preview"
                    fill
                    className="object-cover object-top"
                    sizes="1000px"
                  />
                </div>
              </div>
            )}

            {activeDevice === 'tablet' && (
              <div className="w-full max-w-2xl rounded-2xl border-8 border-[#111111] bg-[#111111] shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="relative aspect-[3/4] w-full bg-white">
                  <Image
                    src="/showcase/tablet-preview.png"
                    alt="Tablet Viewport Preview"
                    fill
                    className="object-cover object-top"
                    sizes="600px"
                  />
                </div>
              </div>
            )}

            {activeDevice === 'mobile' && (
              <div className="w-full max-w-[340px] rounded-[36px] border-[10px] border-[#111111] bg-[#111111] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="relative aspect-[9/19] w-full bg-white rounded-[24px] overflow-hidden">
                  <Image
                    src="/showcase/properties-mobile.png"
                    alt="Mobile Properties Viewport"
                    fill
                    className="object-cover object-top"
                    sizes="340px"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION H: TECHNOLOGY STACK */}
      <section id="tech-stack" className="py-20 md:py-28 border-b border-[#E5E5E5] bg-[#FFFFFF]">
        <div className="container-custom">
          <div className="max-w-3xl mb-14">
            <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#595959] mb-3">
              Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] leading-tight mb-4">
              Modern Frontend Technology Stack.
            </h2>
            <p className="text-[16px] text-[#595959] leading-relaxed">
              Curated dependencies chosen for long-term maintainability, developer speed, and zero unnecessary runtime overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                tech: 'Next.js 16.4.1',
                badge: 'Framework',
                desc: 'App Router with Turbopack bundler, Static Site Generation across 39 routes, and native SEO metadata.'
              },
              {
                tech: 'React 19.3.0',
                badge: 'UI Library',
                desc: 'Leverages modern React 19 architecture with strict Server/Client separation and hydration safety.'
              },
              {
                tech: 'Tailwind CSS v4',
                badge: 'Styling',
                desc: 'CSS-first design tokens with zero JavaScript runtime overhead, instant JIT, and native cascade layers.'
              },
              {
                tech: 'TypeScript 5',
                badge: 'Type System',
                desc: 'Strict end-to-end typing for property models, coordinates, financial yield structures, and form inputs.'
              },
              {
                tech: 'Lucide React',
                badge: 'Iconography',
                desc: 'Clean, tree-shakable SVG icon set matching architectural line-weight standards throughout the UI.'
              },
              {
                tech: 'Next Image Pipeline',
                badge: 'Performance',
                desc: 'Automatic modern format serving (AVIF/WebP) with responsive device srcsets and Cumulative Layout Shift prevention.'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-[#E5E5E5] bg-[#FAFAF8] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase bg-white border border-[#E5E5E5] px-2 py-0.5 rounded text-[#595959]">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] mb-2">{item.tech}</h3>
                  <p className="text-[13.5px] text-[#595959] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION I: GETTING STARTED & INSTALLATION */}
      <section id="getting-started" className="py-20 md:py-28 border-b border-[#E5E5E5] bg-[#FAFAF8]">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#595959] mb-3">
              Developer Handoff
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] leading-tight mb-4">
              Local Installation in Minutes.
            </h2>
            <p className="text-[16px] text-[#595959] leading-relaxed">
              Standard npm workflows with zero external databases or third-party paid API keys required to run.
            </p>
          </div>

          {/* Terminal Command Block */}
          <div className="max-w-3xl rounded-2xl bg-[#0F0F0F] text-white border border-[#262626] shadow-xl overflow-hidden mb-8">
            <div className="flex items-center justify-between px-4 py-3 bg-[#171717] border-b border-[#262626]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                <span className="ml-2 font-mono text-[12px] text-[#A3A3A3]">bash — quick start</span>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(
                    'git clone https://github.com/dmsda/horizon-estate.git\ncd horizon-estate\nnpm install\nnpm run dev',
                    'terminal-code'
                  )
                }
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#262626] text-[12px] text-[#D4D4D4] hover:text-white hover:bg-[#333333] transition-colors"
              >
                {copiedText === 'terminal-code' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Commands</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-6 font-mono text-[13.5px] leading-loose text-[#E5E5E5] overflow-x-auto">
              <div className="text-[#737373]"># 1. Clone the repository</div>
              <div className="text-white">git clone https://github.com/dmsda/horizon-estate.git</div>
              <div className="text-white">cd horizon-estate</div>
              <br />
              <div className="text-[#737373]"># 2. Install dependencies (Node 18.18+ or 20+)</div>
              <div className="text-white">npm install</div>
              <br />
              <div className="text-[#737373]"># 3. Start local development server</div>
              <div className="text-emerald-400">npm run dev</div>
              <br />
              <div className="text-[#737373]"># 4. Production build & verification</div>
              <div className="text-white">npm run build</div>
              <div className="text-white">npm run preview</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl text-[13.5px] text-[#595959]">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Zero mandatory environment variables to start.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Full sample property database included.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>All 39 static routes pre-configured.</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION J: OPEN SOURCE CALL TO ACTION */}
      <section className="py-20 md:py-32 bg-[#111111] text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[12px] font-medium mb-6">
              <BookOpen className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Open Source Real Estate Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Built to Be Explored, Adapted, and Improved.
            </h2>
            <p className="text-lg text-[#A3A3A3] leading-relaxed mb-10">
              Use Horizon Estate as a starting point for your next real estate client project, experiment with the design
              system tokens, or contribute optimizations back to the open-source community.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white text-[#111111] font-semibold text-[14px] hover:bg-[#F6F6F4] transition-all"
              >
                <span>Explore Live Website</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#visual-showcase"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-transparent border border-white/20 text-white font-medium text-[14px] hover:bg-white/10 transition-all"
              >
                <Eye className="w-4 h-4 text-[#C5A880]" />
                <span>View All Screenshots</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL LIGHTBOX FOR SCREENSHOT PREVIEW */}
      {previewModalImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreviewModalImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-[#F6F6F4] border-b border-[#E5E5E5]">
              <span className="font-mono text-xs text-[#595959]">Screenshot Inspector</span>
              <button
                onClick={() => setPreviewModalImage(null)}
                className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-[#E5E5E5] hover:bg-[#111111] hover:text-white transition-colors"
              >
                Close (ESC)
              </button>
            </div>
            <div className="relative aspect-[16/10] w-full bg-[#111111]">
              <Image
                src={previewModalImage}
                alt="Enlarged screenshot view"
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
