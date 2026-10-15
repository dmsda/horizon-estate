import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { agents } from '@/data/agents';
import { properties } from '@/data/properties';
import PropertyCard from '@/components/ui/PropertyCard';
import AgentProfileClient from '@/components/agents/AgentProfileClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return agents.map((agent) => ({
    slug: agent.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const agent = agents.find((a) => a.slug === slug);

  if (!agent) {
    return { title: 'Agent Not Found | Horizon Estate' };
  }

  return {
    title: `${agent.name} — ${agent.role} | Horizon Estate`,
    description: agent.bio,
    openGraph: {
      title: `${agent.name} | Horizon Estate`,
      description: agent.bio,
      images: [agent.image],
    },
  };
}

export default async function AgentDetailPage({ params }: Props) {
  const { slug } = await params;
  const agent = agents.find((a) => a.slug === slug);

  if (!agent) {
    notFound();
  }

  const agentProperties = properties.filter((p) => p.agentId === agent.id);

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <AgentProfileClient agent={agent} properties={agentProperties} />
    </div>
  );
}
