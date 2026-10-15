'use client';

import React, { useState } from 'react';
import { UploadCloud, CheckCircle2, ShieldCheck, Home, ArrowRight, X } from 'lucide-react';

export default function ListPropertyPage() {
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('Villa');
  const [transactionType, setTransactionType] = useState('Sell');
  const [askingPrice, setAskingPrice] = useState('');
  const [area, setArea] = useState('');
  const [bedrooms, setBedrooms] = useState('3');
  const [bathrooms, setBathrooms] = useState('2');
  const [description, setDescription] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileNames = Array.from(e.target.files).map((f) => f.name);
      setUploadedFiles((prev) => [...prev, ...fileNames]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const fileNames = Array.from(e.dataTransfer.files).map((f) => f.name);
      setUploadedFiles((prev) => [...prev, ...fileNames]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!ownerName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!emailRegex.test(email)) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!title.trim() || !location.trim() || !askingPrice.trim() || !area.trim() || !description.trim()) {
      setFormError('Please complete all required property characteristic fields.');
      return;
    }
    if (!consent) {
      setFormError('Please certify that you are the lawful owner or authorized broker.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormError(null);
    setOwnerName('');
    setEmail('');
    setPhone('');
    setTitle('');
    setLocation('');
    setAskingPrice('');
    setArea('');
    setDescription('');
    setUploadedFiles([]);
    setConsent(false);
  };

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="max-w-2xl pb-10 border-b border-[#E5E5E5] mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
            Private Representation
          </span>
          <h1 className="text-[34px] sm:text-[48px] font-bold text-[#111111] tracking-tight mt-1">
            Submit Your Property Mandate
          </h1>
          <p className="text-[15px] leading-relaxed text-[#666666] mt-3">
            Entrust your residence to Horizon Estate’s international network. Our curation committee reviews all submissions to verify architectural standards, title integrity, and fair valuation before representation.
          </p>
        </div>

        {/* Process Disclaimer */}
        <div className="bg-[#F6F6F4] p-4 rounded-xl border border-[#E5E5E5] mb-10 flex items-start gap-3 text-[12.5px] text-[#555555]">
          <ShieldCheck className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#111111]">Curated Review Standard:</span> Submitting this dossier constitutes a confidential representation request, not automatic immediate public publishing. A senior partner will contact you within 24 hours to arrange an appraisal.
          </div>
        </div>

        {isSuccess ? (
          <div className="bg-[#F6F6F4] p-10 sm:p-14 rounded-2xl border border-[#E5E5E5] text-center space-y-4">
            <div className="w-16 h-16 bg-white border border-[#E5E5E5] rounded-full flex items-center justify-center mx-auto text-[#111111] shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-[26px] font-bold text-[#111111]">
              Property Mandate Submission Received
            </h2>
            <p className="text-[14.5px] text-[#555555] max-w-lg mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-[#111111]">{ownerName}</span>. Your submission for <span className="font-semibold text-[#111111]">{title}</span> ({location}) has been logged in our partner acquisition queue.
            </p>
            <div className="text-[11.5px] text-[#888888] bg-white p-3 rounded-lg border border-[#E5E5E5] max-w-sm mx-auto">
              Demo notification: In production, our listing committee triggers title audit verification and schedules high-resolution lidar capture.
            </div>
            <button
              onClick={handleReset}
              className="mt-4 btn-primary btn-sm"
            >
              Submit Another Property
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            {formError && (
              <div 
                role="alert" 
                className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-[13px] font-medium"
              >
                {formError}
              </div>
            )}

            {/* Step 1: Owner Information */}
            <div className="space-y-4 p-6 sm:p-8 bg-[#F6F6F4] rounded-2xl border border-[#E5E5E5]">
              <h3 className="text-[18px] font-bold text-[#111111]">
                1. Owner & Representation Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="mandate-owner-name" className="block text-[11.5px] font-semibold text-[#444444] uppercase mb-1">
                    Full Name *
                  </label>
                  <input
                    id="mandate-owner-name"
                    type="text"
                    required
                    aria-required="true"
                    value={ownerName}
                    onChange={(e) => {
                      setOwnerName(e.target.value);
                      if (formError) setFormError(null);
                    }}
                    placeholder="e.g. Baroness Evelyn Cole"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[13.5px] focus:outline-none focus:border-[#111111]"
                  />
                </div>
                <div>
                  <label htmlFor="mandate-owner-email" className="block text-[11.5px] font-semibold text-[#444444] uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    id="mandate-owner-email"
                    type="email"
                    required
                    aria-required="true"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (formError) setFormError(null);
                    }}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[13.5px] focus:outline-none focus:border-[#111111]"
                  />
                </div>
                <div>
                  <label htmlFor="mandate-owner-phone" className="block text-[11.5px] font-semibold text-[#444444] uppercase mb-1">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    id="mandate-owner-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[13.5px] focus:outline-none focus:border-[#111111]"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Property Specifications */}
            <div className="space-y-4 p-6 sm:p-8 bg-[#F6F6F4] rounded-2xl border border-[#E5E5E5]">
              <h3 className="text-[18px] font-bold text-[#111111]">
                2. Property Characteristics
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="mandate-property-title" className="block text-[11.5px] font-semibold text-[#444444] uppercase mb-1">
                    Property Title or Estate Name *
                  </label>
                  <input
                    id="mandate-property-title"
                    type="text"
                    required
                    aria-required="true"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                      if (formError) setFormError(null);
                    }}
                    placeholder="e.g. Villa Bella Vista"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[13.5px] focus:outline-none focus:border-[#111111]"
                  />
                </div>

                <div>
                  <label htmlFor="mandate-property-location" className="block text-[11.5px] font-semibold text-[#444444] uppercase mb-1">
                    Location & Country *
                  </label>
                  <input
                    id="mandate-property-location"
                    type="text"
                    required
                    aria-required="true"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      if (formError) setFormError(null);
                    }}
                    placeholder="e.g. Mallorca, Spain"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[13.5px] focus:outline-none focus:border-[#111111]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label htmlFor="mandate-type" className="block text-[11.5px] font-semibold text-[#444444] uppercase mb-1">
                    Mandate Type
                  </label>
                  <select
                    id="mandate-type"
                    value={transactionType}
                    onChange={(e) => setTransactionType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[13.5px]"
                  >
                    <option value="Sell">For Sale</option>
                    <option value="Rent">Prime Rental</option>
                    <option value="Investment">Investment Opportunity</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mandate-category" className="block text-[11.5px] font-semibold text-[#444444] uppercase mb-1">
                    Category
                  </label>
                  <select
                    id="mandate-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[13.5px]"
                  >
                    <option value="Villa">Villa</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Beach House">Beach House</option>
                    <option value="Mountain Lodge">Mountain Lodge</option>
                    <option value="Eco-Villa">Eco-Villa</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mandate-price" className="block text-[11.5px] font-semibold text-[#444444] uppercase mb-1">
                    Target Price (USD/EUR) *
                  </label>
                  <input
                    id="mandate-price"
                    type="text"
                    required
                    aria-required="true"
                    value={askingPrice}
                    onChange={(e) => {
                      setAskingPrice(e.target.value);
                      if (formError) setFormError(null);
                    }}
                    placeholder="e.g. $1,500,000"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[13.5px] focus:outline-none focus:border-[#111111]"
                  />
                </div>

                <div>
                  <label htmlFor="mandate-area" className="block text-[11.5px] font-semibold text-[#444444] uppercase mb-1">
                    Internal Area (m²) *
                  </label>
                  <input
                    id="mandate-area"
                    type="number"
                    required
                    aria-required="true"
                    value={area}
                    onChange={(e) => {
                      setArea(e.target.value);
                      if (formError) setFormError(null);
                    }}
                    placeholder="e.g. 350"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[13.5px] focus:outline-none focus:border-[#111111]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="mandate-bedrooms" className="block text-[11.5px] font-semibold text-[#444444] uppercase mb-1">
                    Bedrooms
                  </label>
                  <input
                    id="mandate-bedrooms"
                    type="number"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[13.5px]"
                  />
                </div>

                <div>
                  <label htmlFor="mandate-bathrooms" className="block text-[11.5px] font-semibold text-[#444444] uppercase mb-1">
                    Bathrooms
                  </label>
                  <input
                    id="mandate-bathrooms"
                    type="number"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[13.5px]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mandate-description" className="block text-[11.5px] font-semibold text-[#444444] uppercase mb-1">
                  Architectural Description & Key Features *
                </label>
                <textarea
                  id="mandate-description"
                  rows={4}
                  required
                  aria-required="true"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                    if (formError) setFormError(null);
                  }}
                  placeholder="Outline the architectural style, year of renovation, materials, views, and specific distinguishing qualities..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[13.5px] focus:outline-none focus:border-[#111111] resize-none"
                ></textarea>
              </div>
            </div>

            {/* Step 3: Photos Upload Dropzone */}
            <div className="space-y-4 p-6 sm:p-8 bg-[#F6F6F4] rounded-2xl border border-[#E5E5E5]">
              <h3 className="text-[18px] font-bold text-[#111111]">
                3. High-Resolution Photographs or Renderings
              </h3>
              <div 
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-8 text-center bg-white cursor-pointer transition-colors relative ${
                  isDragging ? 'border-[#111111] bg-[#FAFAFA]' : 'border-[#CCCCCC] hover:border-[#111111]'
                }`}
              >
                <input
                  type="file"
                  multiple
                  aria-label="Upload property photographs or PDF floor plans"
                  accept="image/jpeg,image/png,image/webp,application/pdf"
                  onChange={handleFileUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <UploadCloud className="w-10 h-10 text-[#777777] mx-auto mb-2" />
                <div className="text-[13.5px] font-medium text-[#111111]">
                  Click or drag architectural photos to upload
                </div>
                <div className="text-[11.5px] text-[#777777] mt-1">
                  Supports JPG, PNG, WEBP, or PDF CAD floor plans up to 25MB each
                </div>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="pt-2 space-y-2">
                  <div className="text-[11.5px] uppercase font-bold text-[#777777]">
                    Selected Attachments ({uploadedFiles.length})
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {uploadedFiles.map((file, fIdx) => (
                      <span
                        key={fIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E5E5E5] rounded-md text-[12px] text-[#333333]"
                      >
                        <span>{file}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(fIdx)}
                          aria-label={`Remove attachment ${file}`}
                          className="text-[#999999] hover:text-[#111111] cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Step 4: Consent & Submit */}
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="ownerConsent"
                  checked={consent}
                  onChange={(e) => {
                    setConsent(e.target.checked);
                    if (formError) setFormError(null);
                  }}
                  className="mt-1 rounded border-[#CCCCCC] text-[#111111] focus:ring-0 cursor-pointer"
                />
                <label htmlFor="ownerConsent" className="text-[12px] text-[#555555] cursor-pointer">
                  I certify that I am the legal owner or authorized exclusive broker of this property, and grant Horizon Estate permission to conduct preliminary valuation and title diligence.
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary btn-lg"
                >
                  {isSubmitting ? 'Transmitting property dossier...' : 'Submit Property for Review'}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
