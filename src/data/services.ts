import { ServiceItem } from '@/types';

export const services: ServiceItem[] = [
  {
    id: 'service-1',
    slug: 'property-selection',
    number: '01',
    title: 'Property selection',
    description: 'Agent provides a tailored list of verified listings. Includes photos, 3D tours, and offline/online viewings.',
    extendedDescription: 'We discard the noise of uncurated open portals. Our advisory team builds bespoke dossiers based on strict architectural standards, light orientation, noise modeling, and legal integrity, arranging both confidential physical inspections and ultra-high-definition interactive virtual walkthroughs.',
    image: '/images/services/property-selection.jpg',
    steps: [
      'Request & requirements gathering',
      'Property selection & curation',
      'Confidential viewing tours',
      'Legal support & diligence',
      'Key transfer & concierge onboarding'
    ],
    benefits: [
      'Off-market private listing access',
      'Full architectural and structural screening',
      'Immersive 3D lidar digital scans for overseas buyers',
      'Discrete single-point of contact representation'
    ],
    ctaText: 'Get consultation'
  },
  {
    id: 'service-2',
    slug: 'property-buying-assistance',
    number: '02',
    title: 'Property buying assistance',
    description: 'From valuation audits to assertive closing negotiation, our senior brokers ensure you secure assets at true market value.',
    extendedDescription: 'Navigating prime real estate acquisitions requires deep cross-border market intelligence. We represent exclusively the buyer’s best interests, analyzing historical comps, zoning evolution, and vendor motivation to secure favorable contractual terms.',
    image: '/images/services/buying-assistance.jpg',
    steps: [
      'Independent valuation & comparative market analysis',
      'Bespoke offer structuring & escrow negotiation',
      'Structural, environmental & geotechnical surveys',
      'Closing protocol & deed execution'
    ],
    benefits: [
      'Average 4.8% discount negotiated below asking price',
      'Protection against unverified encumbrances',
      'Dedicated transaction escrow management',
      'Tax & currency exchange coordination'
    ],
    ctaText: 'Speak with a buying advisor'
  },
  {
    id: 'service-3',
    slug: 'rental-assistance',
    number: '03',
    title: 'Rental assistance',
    description: 'Bespoke tenancy advisory for executives, diplomats, and international families seeking high-specification residences.',
    extendedDescription: 'Whether relocating for an annual corporate assignment or securing a seasonal summer sanctuary in the Mediterranean, Horizon Estate manages high-grade lease negotiations, turnkey furnishings, and 24/7 dedicated property management.',
    image: '/images/properties/belgrave-penthouse.jpg',
    steps: [
      'Lifestyle & relocation requirement mapping',
      'Curated private viewings across prime districts',
      'Bilingual lease agreement formulation',
      'Inventory inspection & move-in handover'
    ],
    benefits: [
      'Vetted luxury properties ready for immediate occupancy',
      'Corporate lease compliance & guarantees',
      'On-demand concierge and maintenance response',
      'Flexible diplomatic renewal clauses'
    ],
    ctaText: 'Explore prime rentals'
  },
  {
    id: 'service-4',
    slug: 'investment-advisory',
    number: '04',
    title: 'Property investment advisory',
    description: 'Institutional-grade underwriting, net yield modeling, and fractional or single-asset capital structuring.',
    extendedDescription: 'We help private family offices and sophisticated individual investors build diversified international property portfolios. Our models account for debt costs, maintenance reserves, seasonal vacancy, and projected capital appreciation across prime economic hubs.',
    image: '/images/services/investment-advisory.jpg',
    steps: [
      'Risk tolerance & target hurdle rate alignment',
      'Cash flow & net IRR simulation models',
      'Tax-efficient holding vehicle setup',
      'Ongoing asset management & quarterly reporting'
    ],
    benefits: [
      'Transparent historical yield benchmarks',
      'Access to vetted co-investment opportunities',
      'Direct sponsor terms without intermediary markups',
      'Clear exit and liquidation strategies'
    ],
    ctaText: 'Review investment opportunities'
  },
  {
    id: 'service-5',
    slug: 'legal-transaction-coordination',
    number: '05',
    title: 'Legal & transaction coordination',
    description: 'Comprehensive cross-border legal oversight, title verification, escrow security, and notary representation.',
    extendedDescription: 'International transactions demand infallible legal rigor. We collaborate with tier-one international law firms to guarantee clear freehold titles, navigate golden visa residency requirements, and handle multi-currency settlements with bank-grade security.',
    image: '/images/services/legal-support.jpg',
    steps: [
      'Title search & cadastral boundary verification',
      'Tax ID & local banking account facilitation',
      'Notarial deed representation & power of attorney',
      'Cadastre registry completion & tax filing'
    ],
    benefits: [
      'Zero title defect guarantee',
      'Regulated institutional escrow accounts',
      'Residency by investment guidance (Golden Visa)',
      'Fixed transparent legal fee schedules'
    ],
    ctaText: 'Inquire about legal services'
  }
];
