import type { Metadata } from 'next';
import ShowcaseClient from '@/components/showcase/ShowcaseClient';

export const metadata: Metadata = {
  title: 'Horizon Estate — Product Showcase & Open Source Architecture',
  description:
    'Explore Horizon Estate, a refined real estate website template built with Next.js 16, React 19, and Tailwind CSS v4. Complete design system tokens, responsive layouts, and motion showcase.',
  openGraph: {
    title: 'Horizon Estate — Premium Real Estate Website Template',
    description:
      'A refined real estate experience built for modern property discovery. Architectural minimalism, responsive layouts, and editorial typography.',
    images: ['/showcase/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Horizon Estate — Premium Real Estate Website Template',
    description:
      'A refined real estate experience built for modern property discovery. Architectural minimalism, responsive layouts, and editorial typography.',
    images: ['/showcase/og-image.png'],
  },
};

export default function ShowcasePage() {
  return <ShowcaseClient />;
}
