'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, RotateCcw, SlidersHorizontal, Search } from 'lucide-react';

import ScrollReveal from '@/components/ui/ScrollReveal';

export default function PropertySearchPanel() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'development' | 'commercial'>('buy');
  const [country, setCountry] = useState('All countries');
  const [propertyType, setPropertyType] = useState('All types');
  const [priceRange, setPriceRange] = useState('All prices');
  const [sizeRange, setSizeRange] = useState('All sizes (m²)');
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [bedrooms, setBedrooms] = useState('any');
  const [bathrooms, setBathrooms] = useState('any');

  const handleClearFilters = () => {
    setCountry('All countries');
    setPropertyType('All types');
    setPriceRange('All prices');
    setSizeRange('All sizes (m²)');
    setBedrooms('any');
    setBathrooms('any');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (activeTab) params.set('type', activeTab);
    if (country !== 'All countries') params.set('country', country);
    if (propertyType !== 'All types') params.set('category', propertyType);
    if (priceRange !== 'All prices') params.set('price', priceRange);
    if (sizeRange !== 'All sizes (m²)') params.set('size', sizeRange);
    if (bedrooms !== 'any') params.set('bedrooms', bedrooms);
    if (bathrooms !== 'any') params.set('bathrooms', bathrooms);

    router.push(`/properties?${params.toString()}`);
  };

  return (
    <section className="pt-4 pb-16 bg-white border-b border-[#E5E5E5]/60" aria-labelledby="search-section-heading">
      <div className="container-custom">
        {/* Section Heading & Subtitle with ScrollReveal */}
        <ScrollReveal direction="up" distance={18} duration={500}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <div>
              <h2 id="search-section-heading" className="text-[28px] sm:text-[38px] font-bold text-[#111111] tracking-tight leading-tight">
                We help you find the <br className="hidden sm:inline" />
                home that will be yours
              </h2>
            </div>
            <p className="text-[14.5px] text-[#555555] max-w-md leading-relaxed font-normal">
              Our projects are about harmony, style and care that everyone lives in what is really important to them.
            </p>
          </div>
        </ScrollReveal>

        {/* Search Panel Card with ScrollReveal */}
        <ScrollReveal direction="up" distance={24} delay={100} duration={600}>
          <div className="bg-[#FFFFFF] border border-[#E5E5E5] rounded-xl p-5 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
            {/* Tabs */}
            <div className="flex items-center gap-1 sm:gap-2 pb-5 border-b border-[#E5E5E5] overflow-x-auto no-scrollbar" role="tablist" aria-label="Property transaction types">
              {[
                { id: 'buy', label: 'Buy' },
                { id: 'rent', label: 'Rent' },
                { id: 'development', label: 'New developments' },
                { id: 'commercial', label: 'Commercial properties' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id as 'buy' | 'rent' | 'development' | 'commercial')}
                  className={`px-4 py-2 text-[13.5px] rounded-md font-medium transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] ${
                    activeTab === tab.id
                      ? 'bg-[#111111] text-white shadow-sm'
                      : 'text-[#444444] hover:bg-[#F6F6F4] hover:text-[#111111]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          {/* Form Controls */}
          <form onSubmit={handleSearch} className="pt-5" role="search" aria-label="Search properties">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {/* Country Selection */}
              <div className="relative">
                <label htmlFor="search-country-select" className="block text-[11.5px] font-semibold text-[#444444] uppercase tracking-wider mb-1.5">
                  Location
                </label>
                <div className="relative">
                  <select
                    id="search-country-select"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full appearance-none px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] text-[13.5px] bg-[#FFFFFF] text-[#111111] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] cursor-pointer pr-9"
                  >
                    <option value="All countries">All countries</option>
                    <option value="USA">United States</option>
                    <option value="Spain">Spain</option>
                    <option value="Greece">Greece</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Mexico">Mexico</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#595959] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                </div>
              </div>

              {/* Property Type Selection */}
              <div className="relative">
                <label htmlFor="search-type-select" className="block text-[11.5px] font-semibold text-[#444444] uppercase tracking-wider mb-1.5">
                  Property Type
                </label>
                <div className="relative">
                  <select
                    id="search-type-select"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full appearance-none px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] text-[13.5px] bg-[#FFFFFF] text-[#111111] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] cursor-pointer pr-9"
                  >
                    <option value="All types">All types</option>
                    <option value="Villa">Villa</option>
                    <option value="Beach House">Beach House</option>
                    <option value="Mountain Lodge">Mountain Lodge</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Eco-Villa">Eco-Villa</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#595959] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                </div>
              </div>

              {/* Price Range */}
              <div className="relative">
                <label htmlFor="search-price-select" className="block text-[11.5px] font-semibold text-[#444444] uppercase tracking-wider mb-1.5">
                  Price Range
                </label>
                <div className="relative">
                  <select
                    id="search-price-select"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full appearance-none px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] text-[13.5px] bg-[#FFFFFF] text-[#111111] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] cursor-pointer pr-9"
                  >
                    <option value="All prices">All prices</option>
                    <option value="280000-500000">$280,000 – $500,000</option>
                    <option value="under-300000">Under $300,000</option>
                    <option value="500000-plus">$500,000 and above</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#595959] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                </div>
              </div>

              {/* Floor Area Range */}
              <div className="relative">
                <label htmlFor="search-size-select" className="block text-[11.5px] font-semibold text-[#444444] uppercase tracking-wider mb-1.5">
                  Property Size
                </label>
                <div className="relative">
                  <select
                    id="search-size-select"
                    value={sizeRange}
                    onChange={(e) => setSizeRange(e.target.value)}
                    className="w-full appearance-none px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] text-[13.5px] bg-[#FFFFFF] text-[#111111] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] cursor-pointer pr-9"
                  >
                    <option value="All sizes (m²)">All sizes (m²)</option>
                    <option value="100-250">100 – 250 m²</option>
                    <option value="250-400">250 – 400 m²</option>
                    <option value="400-plus">400+ m²</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#595959] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* Extended Options Accordion */}
            {showMoreOptions && (
              <div className="mt-5 pt-4 border-t border-[#E5E5E5] grid grid-cols-1 sm:grid-cols-2 gap-5 animate-in fade-in duration-150">
                <div>
                  <label className="block text-[11.5px] font-semibold text-[#444444] uppercase tracking-wider mb-2">
                    Bedrooms
                  </label>
                  <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
                    {['any', '1', '2', '3', '4', '5+'].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setBedrooms(num)}
                        className={`py-1.5 rounded-md text-[12.5px] border cursor-pointer font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] ${
                          bedrooms === num
                            ? 'bg-[#111111] text-white border-[#111111]'
                            : 'border-[#E5E5E5] text-[#444444] hover:bg-[#F6F6F4]'
                        }`}
                      >
                        {num === 'any' ? 'Any' : num}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11.5px] font-semibold text-[#444444] uppercase tracking-wider mb-2">
                    Bathrooms
                  </label>
                  <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                    {['any', '1', '2', '3', '4+'].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setBathrooms(num)}
                        className={`py-1.5 rounded-md text-[12.5px] border cursor-pointer font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] ${
                          bathrooms === num
                            ? 'bg-[#111111] text-white border-[#111111]'
                            : 'border-[#E5E5E5] text-[#444444] hover:bg-[#F6F6F4]'
                        }`}
                      >
                        {num === 'any' ? 'Any' : num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Actions Row */}
            <div className="mt-5 pt-4 border-t border-[#F0F0EE] flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setShowMoreOptions(!showMoreOptions)}
                className="text-[13px] font-medium text-[#111111] hover:text-[#555555] transition-colors flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded px-1.5 py-1"
                aria-expanded={showMoreOptions}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{showMoreOptions ? '− Less options' : '+ More options'}</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="text-[13px] font-medium text-[#595959] hover:text-[#111111] transition-colors flex items-center gap-1.5 cursor-pointer px-3 py-2 rounded-full hover:bg-[#F6F6F4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Clear filters</span>
                </button>

                <button
                  type="submit"
                  className="btn-primary btn-sm"
                >
                  <Search className="w-4 h-4" aria-hidden="true" />
                  <span>Show properties</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
