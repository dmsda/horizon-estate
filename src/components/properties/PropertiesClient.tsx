'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { properties } from '@/data/properties';
import PropertyCard from '@/components/ui/PropertyCard';
import { 
  SlidersHorizontal, 
  RotateCcw, 
  ChevronDown, 
  X
} from 'lucide-react';

export default function PropertiesClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL search params initialization
  const initialType = searchParams.get('type') || 'all';
  const initialCountry = searchParams.get('country') || 'All countries';
  const initialCategory = searchParams.get('category') || 'All types';
  const initialPrice = searchParams.get('price') || 'All prices';
  const initialSize = searchParams.get('size') || 'All sizes (m²)';
  const initialBedrooms = searchParams.get('bedrooms') || 'any';
  const initialBathrooms = searchParams.get('bathrooms') || 'any';

  const [transactionType, setTransactionType] = useState(initialType);
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState(initialPrice);
  const [selectedSize, setSelectedSize] = useState(initialSize);
  const [bedrooms, setBedrooms] = useState(initialBedrooms);
  const [bathrooms, setBathrooms] = useState(initialBathrooms);
  const [sortBy, setSortBy] = useState('recommended');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Close mobile filter on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileFilterOpen) {
        setIsMobileFilterOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileFilterOpen]);

  // Clear all filters
  const handleClear = () => {
    setTransactionType('all');
    setSelectedCountry('All countries');
    setSelectedCategory('All types');
    setSelectedPrice('All prices');
    setSelectedSize('All sizes (m²)');
    setBedrooms('any');
    setBathrooms('any');
    setSortBy('recommended');
    router.replace('/properties');
  };

  // Check active filter count
  const activeFilters = useMemo(() => {
    const filters: { id: string; label: string; onRemove: () => void }[] = [];
    if (transactionType !== 'all') {
      filters.push({
        id: 'type',
        label: `Type: ${transactionType.toUpperCase()}`,
        onRemove: () => setTransactionType('all'),
      });
    }
    if (selectedCountry !== 'All countries') {
      filters.push({
        id: 'country',
        label: `Location: ${selectedCountry}`,
        onRemove: () => setSelectedCountry('All countries'),
      });
    }
    if (selectedCategory !== 'All types') {
      filters.push({
        id: 'category',
        label: `Category: ${selectedCategory}`,
        onRemove: () => setSelectedCategory('All types'),
      });
    }
    if (selectedPrice !== 'All prices') {
      filters.push({
        id: 'price',
        label: selectedPrice === 'under-300000' ? '< $300k' : selectedPrice === '280000-500000' ? '$280k–$500k' : '$500k+',
        onRemove: () => setSelectedPrice('All prices'),
      });
    }
    if (bedrooms !== 'any') {
      filters.push({
        id: 'beds',
        label: `${bedrooms} Bedrooms`,
        onRemove: () => setBedrooms('any'),
      });
    }
    return filters;
  }, [transactionType, selectedCountry, selectedCategory, selectedPrice, bedrooms]);

  // Filter & Sort calculation
  const filteredProperties = useMemo(() => {
    return properties.filter((prop) => {
      // Transaction type
      if (transactionType !== 'all') {
        if (transactionType === 'buy' && prop.transactionType !== 'buy') return false;
        if (transactionType === 'rent' && prop.transactionType !== 'rent') return false;
        if (transactionType === 'commercial' && prop.transactionType !== 'commercial') return false;
        if (transactionType === 'development' && prop.listingStatus !== 'new-development' && prop.propertyType !== 'Development') return false;
        if (transactionType === 'investment' && prop.transactionType !== 'investment') return false;
      }

      // Country
      if (selectedCountry !== 'All countries' && prop.country.toLowerCase() !== selectedCountry.toLowerCase()) {
        return false;
      }

      // Category
      if (selectedCategory !== 'All types' && prop.propertyType.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // Price
      if (selectedPrice === 'under-300000' && prop.price >= 300000) return false;
      if (selectedPrice === '280000-500000' && (prop.price < 280000 || prop.price > 500000)) return false;
      if (selectedPrice === '500000-plus' && prop.price < 500000) return false;

      // Size
      if (selectedSize === '100-250' && (prop.area < 100 || prop.area > 250)) return false;
      if (selectedSize === '250-400' && (prop.area < 250 || prop.area > 400)) return false;
      if (selectedSize === '400-plus' && prop.area < 400) return false;

      // Bedrooms
      if (bedrooms !== 'any') {
        const bedVal = parseInt(bedrooms, 10);
        if (bedrooms === '5+' ? prop.bedrooms < 5 : prop.bedrooms !== bedVal) {
          return false;
        }
      }

      // Bathrooms
      if (bathrooms !== 'any') {
        const bathVal = parseInt(bathrooms, 10);
        if (bathrooms === '4+' ? prop.bathrooms < 4 : prop.bathrooms !== bathVal) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'largest') return b.area - a.area;
      if (sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [
    transactionType,
    selectedCountry,
    selectedCategory,
    selectedPrice,
    selectedSize,
    bedrooms,
    bathrooms,
    sortBy,
  ]);

  return (
    <div className="container-custom">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E5E5E5]">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#595959]">
            Curated Portfolio
          </span>
          <h1 className="text-[32px] sm:text-[44px] font-bold text-[#111111] tracking-tight mt-1">
            Properties & Residences
          </h1>
          <p className="text-[14.5px] text-[#555555] mt-1 font-normal max-w-xl">
            Explore architecturally significant homes, coastal retreats, and institutional properties selected for long-term enduring value.
          </p>
        </div>

        {/* Transaction Type Tabs */}
        <div 
          className="flex items-center gap-1.5 p-1 bg-[#F6F6F4] rounded-lg border border-[#E5E5E5] overflow-x-auto self-start md:self-end"
          role="tablist"
          aria-label="Filter by transaction type"
        >
          {[
            { id: 'all', label: 'All' },
            { id: 'buy', label: 'Buy' },
            { id: 'rent', label: 'Rent' },
            { id: 'investment', label: 'Investment' },
            { id: 'commercial', label: 'Commercial' },
          ].map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={transactionType === tab.id}
              onClick={() => setTransactionType(tab.id)}
              className={`px-3 py-1.5 text-[12.5px] rounded-md font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] ${
                transactionType === tab.id
                  ? 'bg-white text-[#111111] shadow-sm font-semibold'
                  : 'text-[#555555] hover:text-[#111111]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Filter Bar & Sorting */}
      <div className="py-6 flex flex-wrap items-center justify-between gap-4">
        {/* Desktop Filter Selects */}
        <div className="hidden lg:flex items-center gap-3 flex-wrap">
          {/* Location */}
          <div className="relative">
            <select
              aria-label="Filter by country or location"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="appearance-none pl-3.5 pr-8 py-2 rounded-lg border border-[#E5E5E5] text-[13px] bg-white text-[#111111] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] cursor-pointer"
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
            <ChevronDown className="w-3.5 h-3.5 text-[#595959] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
          </div>

          {/* Category */}
          <div className="relative">
            <select
              aria-label="Filter by property category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none pl-3.5 pr-8 py-2 rounded-lg border border-[#E5E5E5] text-[13px] bg-white text-[#111111] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] cursor-pointer"
            >
              <option value="All types">All types</option>
              <option value="Villa">Villa</option>
              <option value="Beach House">Beach House</option>
              <option value="Mountain Lodge">Mountain Lodge</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Eco-Villa">Eco-Villa</option>
              <option value="Commercial">Commercial</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#595959] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
          </div>

          {/* Price */}
          <div className="relative">
            <select
              aria-label="Filter by price range"
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="appearance-none pl-3.5 pr-8 py-2 rounded-lg border border-[#E5E5E5] text-[13px] bg-white text-[#111111] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] cursor-pointer"
            >
              <option value="All prices">All prices</option>
              <option value="under-300000">Under $300,000</option>
              <option value="280000-500000">$280,000 – $500,000</option>
              <option value="500000-plus">$500,000 and above</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#595959] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
          </div>

          {/* Bedrooms */}
          <div className="relative">
            <select
              aria-label="Filter by number of bedrooms"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="appearance-none pl-3.5 pr-8 py-2 rounded-lg border border-[#E5E5E5] text-[13px] bg-white text-[#111111] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] cursor-pointer"
            >
              <option value="any">Bedrooms: Any</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4 Bedrooms</option>
              <option value="5+">5+ Bedrooms</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#595959] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
          </div>

          {activeFilters.length > 0 && (
            <button
              onClick={handleClear}
              className="text-[12.5px] font-medium text-[#595959] hover:text-[#111111] transition-colors flex items-center gap-1.5 px-3 py-2 cursor-pointer rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Reset filters</span>
            </button>
          )}
        </div>

        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E5E5E5] text-[13px] font-medium text-[#111111] hover:bg-[#F6F6F4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          aria-expanded={isMobileFilterOpen}
          aria-controls="mobile-filter-drawer"
        >
          <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
          <span>Filters {activeFilters.length > 0 && `(${activeFilters.length})`}</span>
        </button>

        {/* Results Count & Sort Dropdown */}
        <div className="flex items-center gap-4 ml-auto">
          <div className="text-[13px] text-[#555555]" aria-live="polite">
            Showing <span className="font-bold text-[#111111]">{filteredProperties.length}</span> properties
          </div>

          <div className="relative">
            <select
              aria-label="Sort properties"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none pl-3 pr-8 py-2 rounded-lg border border-[#E5E5E5] text-[13px] bg-white text-[#111111] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] cursor-pointer"
            >
              <option value="recommended">Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="largest">Largest Area</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#595959] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Active Filter Badges */}
      {activeFilters.length > 0 && (
        <div className="pb-4 flex items-center gap-2 flex-wrap" aria-label="Active filters">
          <span className="text-[12px] font-medium text-[#595959]">Active:</span>
          {activeFilters.map((f) => (
            <span
              key={f.id}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F6F6F4] border border-[#E5E5E5] text-[12px] font-medium text-[#111111] animate-in fade-in zoom-in-95 duration-150"
            >
              <span>{f.label}</span>
              <button
                type="button"
                onClick={f.onRemove}
                className="hover:text-rose-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111] rounded cursor-pointer transition-colors"
                aria-label={`Remove filter ${f.label}`}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
          <button
            type="button"
            onClick={handleClear}
            className="text-[12px] text-[#595959] hover:text-[#111111] underline ml-2 cursor-pointer transition-colors"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Properties Grid or Empty State with Smooth Animation */}
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 pt-4">
          {filteredProperties.map((prop, idx) => (
            <div 
              key={prop.id}
              className="animate-in fade-in duration-300"
              style={{ animationDelay: `${Math.min(idx * 40, 240)}ms` }}
            >
              <PropertyCard property={prop} />
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-[#F6F6F4] rounded-2xl border border-[#E5E5E5] mt-6 p-8 animate-in fade-in duration-300" role="status">
          <h2 className="text-[20px] font-bold text-[#111111]">
            No properties match your current filters.
          </h2>
          <p className="text-[14px] text-[#555555] mt-2 max-w-md mx-auto">
            Try adjusting your price parameters, location, or bedrooms to discover other residences in our portfolio.
          </p>
          <button
            onClick={handleClear}
            className="mt-6 px-6 py-2.5 rounded-full bg-[#111111] text-white text-[13px] font-medium hover:bg-black active:scale-[0.98] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Mobile Filters Drawer Modal with Smooth Slide-in */}
      {isMobileFilterOpen && (
        <div 
          id="mobile-filter-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Filter Properties"
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
        >
          <div className="w-full max-w-sm bg-white h-full p-6 overflow-y-auto flex flex-col justify-between animate-in slide-in-from-right duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5]">
                <h3 className="text-[18px] font-bold text-[#111111]">Filter Properties</h3>
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1.5 text-[#595959] hover:text-[#111111] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] cursor-pointer"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-4">
                <div>
                  <label htmlFor="mobile-country-filter" className="block text-[12px] font-semibold text-[#444444] uppercase mb-1">
                    Location
                  </label>
                  <select
                    id="mobile-country-filter"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-[#E5E5E5] text-[13.5px] bg-white text-[#111111]"
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
                </div>

                <div>
                  <label htmlFor="mobile-category-filter" className="block text-[12px] font-semibold text-[#444444] uppercase mb-1">
                    Property Category
                  </label>
                  <select
                    id="mobile-category-filter"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-[#E5E5E5] text-[13.5px] bg-white text-[#111111]"
                  >
                    <option value="All types">All types</option>
                    <option value="Villa">Villa</option>
                    <option value="Beach House">Beach House</option>
                    <option value="Mountain Lodge">Mountain Lodge</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Eco-Villa">Eco-Villa</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mobile-price-filter" className="block text-[12px] font-semibold text-[#444444] uppercase mb-1">
                    Price Range
                  </label>
                  <select
                    id="mobile-price-filter"
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-[#E5E5E5] text-[13.5px] bg-white text-[#111111]"
                  >
                    <option value="All prices">All prices</option>
                    <option value="under-300000">Under $300,000</option>
                    <option value="280000-500000">$280,000 – $500,000</option>
                    <option value="500000-plus">$500,000 and above</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mobile-bedrooms-filter" className="block text-[12px] font-semibold text-[#444444] uppercase mb-1">
                    Bedrooms
                  </label>
                  <select
                    id="mobile-bedrooms-filter"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-[#E5E5E5] text-[13.5px] bg-white text-[#111111]"
                  >
                    <option value="any">Any</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E5E5] flex gap-3">
              <button
                type="button"
                onClick={handleClear}
                className="flex-1 btn-secondary btn-sm"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 btn-primary btn-sm"
              >
                Show Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
