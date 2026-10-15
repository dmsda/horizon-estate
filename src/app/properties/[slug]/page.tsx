import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { properties } from '@/data/properties';
import { agents } from '@/data/agents';
import PropertyDetailClient from '@/components/properties/PropertyDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    return {
      title: 'Property Not Found | Horizon Estate',
    };
  }

  return {
    title: `${property.title} — ${property.formattedPrice} | Horizon Estate`,
    description: property.shortDescription,
    openGraph: {
      title: `${property.title} | Horizon Estate Luxury Real Estate`,
      description: property.shortDescription,
      images: [property.mainImage],
    },
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  const agent = agents.find((a) => a.id === property.agentId) || agents[0];
  const similarProperties = properties
    .filter((p) => p.id !== property.id)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SingleFamilyResidence',
    name: property.title,
    description: property.description,
    image: property.mainImage,
    address: {
      '@type': 'PostalAddress',
      addressLocality: property.location,
    },
    numberOfRooms: property.bedrooms,
    numberOfBathroomsTotal: property.bathrooms,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: property.area,
      unitCode: 'MTK',
    },
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <div className="bg-white min-h-screen py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PropertyDetailClient
        property={property}
        agent={agent}
        similarProperties={similarProperties}
      />
    </div>
  );
}
