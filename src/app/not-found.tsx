import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center py-20">
      <div className="container-custom max-w-lg text-center space-y-6">
        <span className="text-[12px] font-mono font-bold text-[#777777] uppercase tracking-widest">
          [Error 404]
        </span>
        <h1 className="text-[36px] sm:text-[44px] font-bold text-[#111111] tracking-tight">
          Residence Not Found
        </h1>
        <p className="text-[14.5px] leading-relaxed text-[#666666]">
          The property, agent profile, or article you are searching for may have been archived, transferred, or relocated.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-primary"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/properties"
            className="btn-secondary"
          >
            Browse All Properties
          </Link>
        </div>
      </div>
    </div>
  );
}
