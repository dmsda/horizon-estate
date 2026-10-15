'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Property, Agent } from '@/types';
import PropertyCard from '@/components/ui/PropertyCard';
import { 
  Maximize2, 
  Bed, 
  Bath, 
  Layers, 
  Calendar, 
  ShieldCheck, 
  MapPin, 
  ChevronRight, 
  X, 
  ChevronLeft, 
  Check, 
  Phone, 
  Mail, 
  Share2, 
  Heart,
  Eye
} from 'lucide-react';

interface Props {
  property: Property;
  agent: Agent;
  similarProperties: Property[];
}

export default function PropertyDetailClient({ property, agent, similarProperties }: Props) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Inquiry form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(
    `Hello, I am interested in ${property.title} (${property.formattedPrice}). Please provide full specification and schedule a private consultation.`
  );
  const [preferredContact, setPreferredContact] = useState<'email' | 'phone' | 'whatsapp'>('email');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionType, setSubmissionType] = useState<'info' | 'viewing'>('info');

  const [formError, setFormError] = useState<string | null>(null);

  const galleryImages = property.images && property.images.length > 0
    ? property.images
    : [property.mainImage];

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') setIsLightboxOpen(false);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, galleryImages.length]);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleFormSubmit = (e: React.FormEvent, type: 'info' | 'viewing') => {
    e.preventDefault();
    setFormError(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!emailRegex.test(email)) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!consent) {
      setFormError('Please agree to the privacy policy to proceed.');
      return;
    }
    setSubmissionType(type);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  return (
    <div className="container-custom">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-[12px] text-[#777777] mb-6">
        <Link href="/" className="hover:text-[#111111] transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3 h-3 text-[#CCCCCC]" />
        <Link href="/properties" className="hover:text-[#111111] transition-colors">
          Properties
        </Link>
        <ChevronRight className="w-3 h-3 text-[#CCCCCC]" />
        <span className="text-[#111111] font-medium truncate max-w-[200px] sm:max-w-none">
          {property.title}
        </span>
      </nav>

      {/* Title & Price Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E5E5E5]">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-[#F6F6F4] text-[#111111] px-2.5 py-1 rounded border border-[#E5E5E5]">
              {property.propertyType}
            </span>
            <span className="text-[11px] font-medium text-[#777777] uppercase tracking-wider">
              Ref: HZ-{property.id.toUpperCase()}
            </span>
          </div>
          <h1 className="text-[32px] sm:text-[46px] font-bold text-[#111111] tracking-tight leading-tight">
            {property.title}
          </h1>
          <div className="flex items-center gap-2 text-[14px] text-[#666666] mt-1.5">
            <MapPin className="w-4 h-4 text-[#777777]" />
            <span>{property.location}</span>
          </div>
        </div>

        <div className="flex items-center gap-6 self-start lg:self-end">
          <div className="text-left lg:text-right">
            <div className="text-[11px] uppercase tracking-wider font-semibold text-[#888888]">
              Asking Price
            </div>
            <div className="text-[30px] sm:text-[38px] font-extrabold text-[#111111] tracking-tight">
              {property.formattedPrice}
              {property.priceSuffix && (
                <span className="text-[14px] font-normal text-[#777777] ml-1">
                  {property.priceSuffix}
                </span>
              )}
            </div>
          </div>

          {/* Action buttons: Save & Share */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`p-2.5 rounded-lg border transition-all duration-200 cursor-pointer active:scale-90 ${
                isSaved
                  ? 'bg-rose-50 border-rose-200 text-rose-600'
                  : 'border-[#E5E5E5] text-[#444444] hover:bg-[#F6F6F4]'
              }`}
              title="Save to favorites"
              aria-label="Save to favorites"
            >
              <Heart className={`w-4 h-4 transition-transform duration-200 ${isSaved ? 'fill-rose-600 scale-110' : ''}`} />
            </button>
            <button
              onClick={handleShare}
              className="p-2.5 rounded-lg border border-[#E5E5E5] text-[#444444] hover:bg-[#F6F6F4] active:scale-90 transition-all duration-200 cursor-pointer"
              title="Copy link"
              aria-label="Copy link to clipboard"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Section with Smooth Architectural Image Experience */}
      <div className="py-8 space-y-3">
        {/* Main Large Image */}
        <div 
          onClick={() => {
            setLightboxIndex(activeImageIndex);
            setIsLightboxOpen(true);
          }}
          className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#F6F6F4] cursor-pointer group shadow-sm"
        >
          <Image
            key={activeImageIndex}
            src={galleryImages[activeImageIndex]}
            alt={property.title}
            fill
            priority
            sizes="100vw"
            className="object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02] animate-in fade-in duration-300"
          />
          <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md text-white text-[12px] px-3.5 py-1.5 rounded-md flex items-center gap-1.5 font-medium transition-transform duration-200 group-hover:scale-105">
            <Eye className="w-3.5 h-3.5" />
            <span>Click to expand ({galleryImages.length} photos)</span>
          </div>
        </div>

        {/* Thumbnail Row with Staggered Feedback */}
        <div className="grid grid-cols-4 gap-3">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`relative aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer active:scale-95 ${
                activeImageIndex === idx
                  ? 'border-[#111111] opacity-100 shadow-sm'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={img}
                alt={`${property.title} thumbnail ${idx + 1}`}
                fill
                sizes="25vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Main Details Grid: Left Content, Right Inquiry Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
        {/* Left Column (8 cols): Key Facts, Description, Amenities, Floor Plan, Location */}
        <div className="lg:col-span-8 space-y-12">
          {/* Key Facts Grid */}
          <div className="bg-[#F6F6F4] p-6 sm:p-8 rounded-xl border border-[#E5E5E5]">
            <h3 className="text-[13px] font-bold uppercase tracking-wider text-[#777777] mb-6">
              Property Specifications
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-[#111111]">
              <div>
                <div className="flex items-center gap-1.5 text-[12px] text-[#777777]">
                  <Maximize2 className="w-3.5 h-3.5 text-[#999999]" />
                  <span>Floor Area</span>
                </div>
                <div className="text-[18px] font-bold mt-1">{property.area} m²</div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[12px] text-[#777777]">
                  <Bed className="w-3.5 h-3.5 text-[#999999]" />
                  <span>Bedrooms</span>
                </div>
                <div className="text-[18px] font-bold mt-1">{property.bedrooms}</div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[12px] text-[#777777]">
                  <Bath className="w-3.5 h-3.5 text-[#999999]" />
                  <span>Bathrooms</span>
                </div>
                <div className="text-[18px] font-bold mt-1">{property.bathrooms}</div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[12px] text-[#777777]">
                  <Layers className="w-3.5 h-3.5 text-[#999999]" />
                  <span>Levels</span>
                </div>
                <div className="text-[18px] font-bold mt-1">{property.floors || 1}</div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[12px] text-[#777777]">
                  <Calendar className="w-3.5 h-3.5 text-[#999999]" />
                  <span>Year Built</span>
                </div>
                <div className="text-[18px] font-bold mt-1">{property.yearBuilt || 2024}</div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[12px] text-[#777777]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#999999]" />
                  <span>Title Status</span>
                </div>
                <div className="text-[18px] font-bold mt-1">Verified Freehold</div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[12px] text-[#777777]">
                  <span>Property Type</span>
                </div>
                <div className="text-[18px] font-bold mt-1">{property.propertyType}</div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[12px] text-[#777777]">
                  <span>Availability</span>
                </div>
                <div className="text-[18px] font-bold mt-1 text-emerald-700">Immediate</div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="space-y-4">
            <h2 className="text-[22px] font-bold text-[#111111]">
              Architectural Overview
            </h2>
            <p className="text-[15px] leading-relaxed text-[#444444] font-normal">
              {property.description}
            </p>
          </div>

          {/* Distinctive Features */}
          <div className="space-y-4">
            <h3 className="text-[18px] font-bold text-[#111111]">
              Key Architectural Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-[13.5px] text-[#444444]">
                  <div className="w-5 h-5 rounded-full bg-[#F6F6F4] flex items-center justify-center shrink-0 mt-0.5 border border-[#E5E5E5]">
                    <Check className="w-3 h-3 text-[#111111]" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities Checklist */}
          <div className="space-y-4">
            <h3 className="text-[18px] font-bold text-[#111111]">
              Amenities & Specifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {property.amenities.map((amenity, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-[#F6F6F4] border border-[#E5E5E5] text-[12.5px] font-medium text-[#222222]"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Floor Plan Section */}
          <div className="space-y-4 pt-4 border-t border-[#E5E5E5]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[20px] font-bold text-[#111111]">
                  Architectural Floor Plan
                </h3>
                <p className="text-[13px] text-[#777777]">
                  Scale 1:100 CAD schematic layout with wall dimensions and room zoning.
                </p>
              </div>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-white border border-[#E5E5E5] p-4 flex items-center justify-center shadow-sm">
              <Image
                src={property.floorPlanImage || '/images/properties/floor-plan-sample.jpg'}
                alt={`${property.title} architectural floor plan`}
                fill
                sizes="800px"
                className="object-contain p-2"
              />
            </div>
          </div>

          {/* Agent Bio Card in Details */}
          <div className="bg-[#F6F6F4] p-6 rounded-xl border border-[#E5E5E5] flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 border border-[#CCCCCC]">
              <Image
                src={agent.image}
                alt={agent.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div className="space-y-1.5 text-center sm:text-left flex-1">
              <div className="text-[11px] uppercase tracking-wider font-bold text-[#777777]">
                Listing Broker
              </div>
              <h4 className="text-[18px] font-bold text-[#111111]">{agent.name}</h4>
              <div className="text-[13px] text-[#666666]">{agent.role} • {agent.experienceYears} Years Experience</div>
              <p className="text-[13px] leading-relaxed text-[#555555] pt-1">
                {agent.bio}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                <a
                  href={`tel:${agent.phone}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111111] text-white text-[12px] font-medium hover:bg-black active:scale-[0.98] transition-all duration-200"
                >
                  <Phone className="w-3 h-3" />
                  <span>{agent.phone}</span>
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#CCCCCC] bg-white text-[12px] font-medium text-[#111111] hover:bg-[#F6F6F4] hover:border-[#111111] active:scale-[0.98] transition-all duration-200"
                >
                  <Mail className="w-3 h-3 text-[#777777]" />
                  <span>Email broker</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (4 cols): Sticky Inquiry Panel */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 bg-white p-6 sm:p-7 rounded-2xl border border-[#E5E5E5] shadow-lg space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                Direct Inquiries
              </span>
              <h3 className="text-[20px] font-bold text-[#111111] mt-0.5">
                Inquire About This Property
              </h3>
              <p className="text-[12.5px] text-[#777777] mt-1">
                Receive confidential investment dossier or schedule a private viewing.
              </p>
            </div>

            {isSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-[17px] font-bold text-[#111111]">
                  {submissionType === 'viewing' ? 'Viewing Request Confirmed' : 'Property Dossier Dispatched'}
                </h4>
                <p className="text-[12.5px] text-[#666666] leading-relaxed">
                  Thank you, <span className="font-semibold text-[#111111]">{name}</span>. Listing broker <span className="font-semibold text-[#111111]">{agent.name}</span> will contact you via {preferredContact} shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-3 px-5 py-2 rounded-full border border-[#E5E5E5] text-[12px] font-medium text-[#111111] hover:bg-[#F6F6F4]"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form className="space-y-3.5" noValidate>
                {formError && (
                  <div 
                    role="alert" 
                    className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-[12px] font-medium"
                  >
                    {formError}
                  </div>
                )}

                <div>
                  <label htmlFor="inquiry-client-name" className="block text-[11px] font-semibold text-[#444444] uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    id="inquiry-client-name"
                    type="text"
                    required
                    aria-required="true"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (formError) setFormError(null);
                    }}
                    placeholder="e.g. Marcus Sterling"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] text-[13px] focus:outline-none focus:border-[#111111]"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-client-email" className="block text-[11px] font-semibold text-[#444444] uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    id="inquiry-client-email"
                    type="email"
                    required
                    aria-required="true"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (formError) setFormError(null);
                    }}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] text-[13px] focus:outline-none focus:border-[#111111]"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-client-phone" className="block text-[11px] font-semibold text-[#444444] uppercase mb-1">
                    Phone (optional)
                  </label>
                  <input
                    id="inquiry-client-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] text-[13px] focus:outline-none focus:border-[#111111]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#444444] uppercase mb-1">
                    Preferred Contact Channel
                  </label>
                  <div className="grid grid-cols-3 gap-2" role="group" aria-label="Preferred contact channel">
                    {(['email', 'phone', 'whatsapp'] as const).map((channel) => (
                      <button
                        key={channel}
                        type="button"
                        onClick={() => setPreferredContact(channel)}
                        aria-pressed={preferredContact === channel}
                        className={`py-1.5 rounded-md text-[11.5px] capitalize font-medium border cursor-pointer ${
                          preferredContact === channel
                            ? 'bg-[#111111] text-white border-[#111111]'
                            : 'border-[#E5E5E5] text-[#555555] hover:bg-[#F6F6F4]'
                        }`}
                      >
                        {channel}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry-client-message" className="block text-[11px] font-semibold text-[#444444] uppercase mb-1">
                    Message
                  </label>
                  <textarea
                    id="inquiry-client-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg border border-[#E5E5E5] text-[12.5px] focus:outline-none focus:border-[#111111] resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="property-inquiry-consent"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (formError) setFormError(null);
                    }}
                    className="mt-1 rounded border-[#CCCCCC] text-[#111111] focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="property-inquiry-consent" className="text-[11px] text-[#555555] cursor-pointer">
                    I agree to the processing of personal data for confidential advisory contact under Horizon Estate’s Privacy Policy.
                  </label>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    type="button"
                    disabled={isSubmitting || !name || !email}
                    onClick={(e) => handleFormSubmit(e, 'info')}
                    className="w-full btn-primary disabled:opacity-50"
                  >
                    {isSubmitting && submissionType === 'info'
                      ? 'Processing request...'
                      : 'Request Property Information'}
                  </button>

                  <button
                    type="button"
                    disabled={isSubmitting || !name || !email}
                    onClick={(e) => handleFormSubmit(e, 'viewing')}
                    className="w-full btn-secondary disabled:opacity-50"
                  >
                    {isSubmitting && submissionType === 'viewing'
                      ? 'Scheduling viewing...'
                      : 'Book a Viewing'}
                  </button>
                </div>

                <div className="text-[10.5px] text-[#777777] text-center pt-1">
                  Demonstration mode: submissions validated locally.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Similar Properties Section */}
      <div className="pt-20 mt-20 border-t border-[#E5E5E5]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-[24px] font-bold text-[#111111]">
              Similar Properties
            </h3>
            <p className="text-[13px] text-[#777777]">
              Other architectural residences you may appreciate.
            </p>
          </div>
          <Link
            href="/properties"
            className="text-[13px] font-medium text-[#111111] hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {similarProperties.map((simProp) => (
            <PropertyCard key={simProp.id} property={simProp} />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label={`${property.title} photo gallery`}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 active:scale-95 cursor-pointer"
            aria-label="Close Lightbox"
            autoFocus
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
            }
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 active:scale-90 cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
            }
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 active:scale-90 cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl w-full aspect-[16/10] max-h-[85vh] animate-in zoom-in-95 duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <Image
              key={lightboxIndex}
              src={galleryImages[lightboxIndex]}
              alt={`${property.title} high resolution view ${lightboxIndex + 1}`}
              fill
              className="object-contain transition-opacity duration-300 animate-in fade-in duration-200"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-[13px] font-medium" aria-live="polite">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
}
