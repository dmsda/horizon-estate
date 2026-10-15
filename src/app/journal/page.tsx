import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/data/journal';
import { Clock, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Editorial Journal & Market Intelligence | Horizon Estate',
  description:
    'Essays and analytical briefings on luxury property evaluation, seasonal holiday home stewardship, cross-border tax considerations, and investment risk mitigation.',
};

export default function JournalPage() {
  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl pb-10 border-b border-[#E5E5E5]">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
            Horizon Editorial Journal
          </span>
          <h1 className="text-[34px] sm:text-[48px] font-bold text-[#111111] tracking-tight mt-1">
            Insights For Your Next Move
          </h1>
          <p className="text-[15px] leading-relaxed text-[#666666] mt-3">
            In-depth perspectives from our partners on architectural valuation, international acquisitions, and capital risk management.
          </p>
        </div>

        {/* Featured Article Top */}
        <div className="py-12 border-b border-[#E5E5E5]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <Link
                href={`/journal/${articles[0].slug}`}
                className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden block bg-[#F6F6F4] group"
              >
                <Image
                  src={articles[0].image}
                  alt={articles[0].title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </Link>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-[12px] text-[#777777]">
                <span className="font-semibold uppercase tracking-wider text-[#111111]">
                  {articles[0].category}
                </span>
                <span>•</span>
                <span>{articles[0].date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#999999]" />
                  {articles[0].readingTime}
                </span>
              </div>

              <Link
                href={`/journal/${articles[0].slug}`}
                className="text-[26px] sm:text-[34px] font-bold text-[#111111] hover:text-[#444444] transition-colors leading-tight block"
              >
                {articles[0].title}
              </Link>

              <p className="text-[14.5px] leading-relaxed text-[#666666]">
                {articles[0].excerpt}
              </p>

              <div className="pt-2 flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-[#EEEEEC]">
                  <Image
                    src={articles[0].author.avatar}
                    alt={articles[0].author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#111111]">
                    {articles[0].author.name}
                  </div>
                  <div className="text-[11px] text-[#777777]">
                    {articles[0].author.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Articles Grid */}
        <div className="py-12">
          <h2 className="text-[22px] font-bold text-[#111111] mb-8">
            Latest Publications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art) => (
              <article
                key={art.id}
                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#E5E5E5] transition-all hover:shadow-md"
              >
                <Link
                  href={`/journal/${art.slug}`}
                  className="relative aspect-[16/10] w-full bg-[#EEEEEC] overflow-hidden"
                >
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded text-[10.5px] font-semibold uppercase tracking-wider text-[#111111]">
                    {art.category}
                  </div>
                </Link>

                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-[11.5px] text-[#777777] mb-2">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.readingTime}</span>
                    </div>

                    <Link
                      href={`/journal/${art.slug}`}
                      className="text-[18px] font-bold text-[#111111] group-hover:text-[#444444] transition-colors leading-snug line-clamp-2 block"
                    >
                      {art.title}
                    </Link>

                    <p className="text-[13.5px] leading-relaxed text-[#666666] mt-2.5 line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F0F0EE] flex items-center justify-between text-[12px]">
                    <span className="font-medium text-[#111111]">{art.author.name}</span>
                    <span className="text-[#777777] group-hover:text-[#111111] font-semibold flex items-center gap-0.5">
                      Read article <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
