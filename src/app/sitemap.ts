import { MetadataRoute } from 'next';
import { properties } from '@/data/properties';
import { agents } from '@/data/agents';
import { articles } from '@/data/journal';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://horizonestate.com';

  const staticRoutes = [
    '',
    '/properties',
    '/rentals',
    '/developments',
    '/commercial',
    '/investment',
    '/services',
    '/agents',
    '/about',
    '/journal',
    '/contact',
    '/list-property',
    '/careers',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const propertyRoutes = properties.map((prop) => ({
    url: `${baseUrl}/properties/${prop.slug}`,
    lastModified: new Date(prop.createdAt).toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const agentRoutes = agents.map((agent) => ({
    url: `${baseUrl}/agents/${agent.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/journal/${article.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...propertyRoutes, ...agentRoutes, ...articleRoutes];
}
