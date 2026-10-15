import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Horizon Estate | International Luxury Real Estate & Investment',
  description:
    'Discover exceptional homes, curated luxury properties, and transparent property investment opportunities across Europe, North America, and international destinations.',
  metadataBase: new URL('https://horizonestate.com'),
  openGraph: {
    title: 'Horizon Estate | International Luxury Real Estate & Investment',
    description:
      'Discover exceptional homes, curated luxury properties, and transparent property investment opportunities.',
    images: ['/images/hero/hero-luxury-villa.jpg'],
    type: 'website',
    siteName: 'Horizon Estate',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Horizon Estate | International Luxury Real Estate & Investment',
    description: 'Curated architectural listings and investment opportunities.',
    images: ['/images/hero/hero-luxury-villa.jpg'],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Horizon Estate',
  description: 'International luxury real estate brokerage and property investment platform.',
  url: 'https://horizonestate.com',
  logo: 'https://horizonestate.com/images/hero/hero-luxury-villa.jpg',
  telephone: '+1-213-555-0192',
  email: 'advisory@horizonestate.com',
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Beverly Hills',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Madrid',
      addressCountry: 'ES',
    },
  ],
  priceRange: '$$$$',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-[#111111] antialiased selection:bg-[#111111] selection:text-white flex flex-col">
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
