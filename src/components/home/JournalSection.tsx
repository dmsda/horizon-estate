'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/data/journal';
import { ArrowUpRight, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function JournalSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F6F6F4] border-t border-[#E5E5E5]/70">
      <div className="container-custom">
        <ScrollReveal direction="up" distance={18} duration={500}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                Editorial Journal
              </span>
              <h2 className="text-[28px] sm:text-[38px] font-bold text-[#111111] tracking-tight mt-1">
                Insights for your next move
              </h2>
            </div>

            <Link
              href="/journal"
              className="group inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#111111] hover:text-[#555555] transition-colors"
            >
              <span>Read all articles</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <ScrollReveal key={article.id} direction="up" distance={20} delay={idx * 100} duration={550}>
              <article
                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#E5E5E5] transition-all duration-300 hover:shadow-md hover:border-[#CCCCCC] h-full"
              >
                <Link
                  href={`/journal/${article.slug}`}
                  className="relative aspect-[16/10] w-full bg-[#EEEEEC] overflow-hidden"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded text-[10.5px] font-semibold uppercase tracking-wider text-[#111111]">
                    {article.category}
                  </div>
                </Link>

                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-[11.5px] text-[#777777] mb-2">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#999999]" />
                        {article.readingTime}
                      </span>
                    </div>

                    <Link
                      href={`/journal/${article.slug}`}
                      className="text-[18px] font-bold text-[#111111] group-hover:text-[#444444] transition-colors leading-snug line-clamp-2 block"
                    >
                      {article.title}
                    </Link>

                    <p className="text-[13.5px] leading-relaxed text-[#666666] mt-2.5 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F0F0EE] flex items-center gap-2.5">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden bg-[#EEEEEC]">
                      <Image
                        src={article.author.avatar}
                        alt={article.author.name}
                        fill
                        sizes="24px"
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[12px] font-medium text-[#111111]">
                      {article.author.name}
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
