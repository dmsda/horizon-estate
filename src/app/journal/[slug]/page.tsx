import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/data/journal';
import { ChevronRight, Clock, ArrowLeft, Share2 } from 'lucide-react';
import ReadingProgress from '@/components/ui/ReadingProgress';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return { title: 'Article Not Found | Horizon Estate' };
  }

  return {
    title: `${article.title} | Horizon Estate Journal`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles.filter((a) => a.id !== article.id).slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Horizon Estate',
    },
  };

  return (
    <article className="bg-white min-h-screen py-10 sm:py-16 relative">
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-custom max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-[#777777] mb-8">
          <Link href="/" className="hover:text-[#111111]">Home</Link>
          <ChevronRight className="w-3 h-3 text-[#CCCCCC]" />
          <Link href="/journal" className="hover:text-[#111111]">Journal</Link>
          <ChevronRight className="w-3 h-3 text-[#CCCCCC]" />
          <span className="text-[#111111] font-medium truncate max-w-[200px]">{article.title}</span>
        </nav>

        {/* Article Header */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2 text-[12px] text-[#777777]">
            <span className="font-bold uppercase tracking-wider text-[#111111] bg-[#F6F6F4] px-2.5 py-1 rounded border border-[#E5E5E5]">
              {article.category}
            </span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#999999]" />
              {article.readingTime}
            </span>
          </div>

          <h1 className="text-[34px] sm:text-[48px] font-bold text-[#111111] tracking-tight leading-[1.12]">
            {article.title}
          </h1>

          <p className="text-[17px] leading-relaxed text-[#555555] font-normal pt-2">
            {article.excerpt}
          </p>

          <div className="pt-4 flex items-center justify-between border-t border-[#E5E5E5]">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#EEEEEC] border border-[#CCCCCC]">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-[14px] font-bold text-[#111111]">
                  {article.author.name}
                </div>
                <div className="text-[12px] text-[#777777]">
                  {article.author.role}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Cover Image */}
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#F6F6F4] border border-[#E5E5E5] mb-12 shadow-sm">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="space-y-6 text-[16px] leading-[1.8] text-[#2c2c2c] pb-16 border-b border-[#E5E5E5]">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="font-normal">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Author Footer Box */}
        <div className="my-12 p-8 bg-[#F6F6F4] rounded-2xl border border-[#E5E5E5] flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-[#CCCCCC]">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
              Written by
            </div>
            <h4 className="text-[18px] font-bold text-[#111111]">
              {article.author.name}
            </h4>
            <div className="text-[13px] text-[#666666]">{article.author.role}</div>
            <p className="text-[13px] leading-relaxed text-[#555555] pt-1">
              Advising international private clients, family offices, and architectural buyers across Horizon Estate’s prime jurisdictions.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="pt-8">
          <h3 className="text-[22px] font-bold text-[#111111] mb-6">
            Related Insights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/journal/${rel.slug}`}
                className="group p-5 rounded-xl border border-[#E5E5E5] bg-white hover:border-[#CCCCCC] transition-colors block"
              >
                <div className="text-[11px] font-semibold text-[#888888] uppercase">
                  {rel.category}
                </div>
                <h4 className="text-[16px] font-bold text-[#111111] group-hover:text-[#555555] mt-1 line-clamp-2">
                  {rel.title}
                </h4>
                <div className="text-[12px] text-[#777777] mt-2 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{rel.readingTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
