import { Article } from '@/types';

export const articles: Article[] = [
  {
    id: 'art-1',
    slug: 'how-to-evaluate-a-premium-property',
    title: 'How to Evaluate a Premium Property',
    category: 'Market Insights',
    date: 'March 14, 2026',
    excerpt: 'Beyond square footage and surface finishes: a comprehensive framework for assessing architectural durability, sun trajectories, acoustic insulation, and true residual resale value.',
    readingTime: '6 min read',
    image: '/images/journal/evaluating-luxury.jpg',
    author: {
      name: 'Olivia Barnes',
      role: 'Senior Residential Partner',
      avatar: '/images/agents/olivia-barnes.jpg'
    },
    content: [
      'When acquiring ultra-prime real estate, the distinction between decorative visual styling and enduring architectural substance is paramount. True luxury is not measured by the veneer of the marble, but by how the space performs across decades.',
      'First, evaluate the envelope and mechanical fundamentals. High-end modern homes with expansive floor-to-ceiling glazing require sophisticated thermal break engineering and low-emissivity acoustic laminated glass. Without proper orientation and UV filtering, open solar gain can turn a panoramic glass pavilion into an uninhabitable greenhouse.',
      'Second, inspect acoustic isolation. In concrete or open-plan steel frame villas, sound reverberation must be engineered out through acoustic plaster ceiling treatments, subterranean mechanical dampening, and solid-core acoustic doors.',
      'Finally, understand zoning perpetuity. An unobstructed coastal or mountain horizon is only as secure as the municipal master plan of the adjoining parcels. Always require your legal counsel to confirm height restrictions, protected green corridors, and environmental easements before committing capital.'
    ]
  },
  {
    id: 'art-2',
    slug: 'what-to-consider-before-buying-a-holiday-home',
    title: 'What to Consider Before Buying a Holiday Home',
    category: 'Lifestyle & Advisory',
    date: 'February 28, 2026',
    excerpt: 'Navigating Mediterranean and international second-home purchases with clarity on municipal occupancy rules, local tax structures, and year-round property stewardship.',
    readingTime: '5 min read',
    image: '/images/journal/holiday-home.jpg',
    author: {
      name: 'Avi Chen',
      role: 'Principal Broker, Mediterranean Portfolio',
      avatar: '/images/agents/avi-chen.jpg'
    },
    content: [
      'Acquiring a coastal retreat or European countryside hideaway is as much an emotional milestone as a financial allocation. However, the operational reality of managing a home across borders requires methodical foresight.',
      'First, audit the regional hospitality licensing environment. Across southern Europe, municipalities have established strict caps on short-term holiday rentals. If your investment thesis relies on offsetting carrying costs through seasonal leasing, verify that an active, non-transferable touristic permit is in place.',
      'Second, consider local microclimates. Coastal sea air carries high salinity that demands marine-grade stainless hardware, powder-coated aluminum, and specialized stone sealants. Budget for regular preventative maintenance by vetted local contractors.',
      'Third, embrace the local community. The most satisfying holiday residences are those where owners establish genuine relationships with local artisans, vineyard keepers, and seasonal neighbors, ensuring your sanctuary is warm, welcomed, and securely watched year-round.'
    ]
  },
  {
    id: 'art-3',
    slug: 'understanding-property-investment-risks',
    title: 'Understanding Property Investment Risks',
    category: 'Investment Analysis',
    date: 'February 12, 2026',
    excerpt: 'A transparent breakdown of liquidity timelines, cross-border currency exposure, capital expenditure reserves, and macroeconomic sensitivity in luxury real estate.',
    readingTime: '7 min read',
    image: '/images/journal/investment-risks.jpg',
    author: {
      name: 'Carlos Garcia',
      role: 'Managing Director, Commercial & Mixed-Use',
      avatar: '/images/agents/carlos-garcia.jpg'
    },
    content: [
      'In luxury real estate investment, risk management begins with rejecting speculative optimism in favor of conservative underwriting. No asset class is immune to macroeconomic cycle shifts or liquidity constraints.',
      'Illiquidity is a foundational characteristic of high-value property. Unlike public equities, exiting a multi-million-dollar architectural estate or boutique hospitality asset typically requires 6 to 18 months under normal market conditions. Investors should never allocate capital that may be urgently required for short-term liquidity needs.',
      'Currency volatility presents another critical variable for international buyers. Acquiring euro-denominated assets with US dollar reserves or vice-versa requires hedging considerations or multi-currency revenue streams to avoid erosion of net yield during repatriation.',
      'At Horizon Estate, we advocate for conservative debt-to-value ratios under 55% and substantial capital replacement reserves. Sensible leverage protects long-term equity, allowing investors to comfortably weather temporary cyclical softening.'
    ]
  }
];
