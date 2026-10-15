'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ShieldCheck, Clock } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Property Acquisition');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!emailRegex.test(email)) {
      setFormError('Please enter a valid corporate or private email address.');
      return;
    }
    if (!message.trim()) {
      setFormError('Please outline your criteria or advisory request.');
      return;
    }
    if (!consent) {
      setFormError('Please confirm consent to personal data processing under our Privacy Policy.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormError(null);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setConsent(false);
  };

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl pb-10 border-b border-[#E5E5E5] mb-12">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
            Private Consultation
          </span>
          <h1 className="text-[34px] sm:text-[48px] font-bold text-[#111111] tracking-tight mt-1">
            Connect With Our Partners
          </h1>
          <p className="text-[15px] leading-relaxed text-[#666666] mt-3">
            Whether you are evaluating a private acquisition, seeking confidential tenant placement, or exploring investment structuring, our senior advisory team is at your disposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-[#F6F6F4] p-8 sm:p-10 rounded-2xl border border-[#E5E5E5]">
            {isSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-white border border-[#E5E5E5] rounded-full flex items-center justify-center mx-auto text-[#111111] shadow-sm">
                  <CheckCircle className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-[24px] font-bold text-[#111111]">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-[14px] text-[#555555] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#111111]">{name}</span>. A senior partner has received your inquiry regarding <span className="font-semibold text-[#111111]">{category}</span> and will respond within two hours.
                </p>
                <div className="text-[11px] text-[#777777] bg-white p-3 rounded-lg border border-[#E5E5E5] max-w-sm mx-auto">
                  Demonstration Note: In a live environment, this transmission is encrypted under SOC-2 compliant CRM protocols.
                </div>
                <button
                  onClick={handleReset}
                  className="mt-4 btn-primary btn-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {formError && (
                  <div 
                    role="alert" 
                    className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-[12.5px] font-medium"
                  >
                    {formError}
                  </div>
                )}

                <div>
                  <label htmlFor="contact-category" className="block text-[12px] font-semibold text-[#444444] uppercase mb-1">
                    Inquiry Category
                  </label>
                  <select
                    id="contact-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[13.5px] focus:outline-none focus:border-[#111111]"
                  >
                    <option value="Property Acquisition">Property Acquisition & Search</option>
                    <option value="Private Tenancy">Prime Rental & Relocation</option>
                    <option value="Investment Underwriting">Investment & Portfolio Underwriting</option>
                    <option value="Listing Mandate">List a Property Mandate</option>
                    <option value="Commercial Inquiry">Commercial Real Estate Advisory</option>
                    <option value="General & Press">General & Press Inquiry</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[12px] font-semibold text-[#444444] uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      aria-required="true"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (formError) setFormError(null);
                      }}
                      placeholder="e.g. Julian Thorne"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[13.5px] focus:outline-none focus:border-[#111111]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[12px] font-semibold text-[#444444] uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      aria-required="true"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (formError) setFormError(null);
                      }}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[13.5px] focus:outline-none focus:border-[#111111]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-[12px] font-semibold text-[#444444] uppercase mb-1">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[13.5px] focus:outline-none focus:border-[#111111]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[12px] font-semibold text-[#444444] uppercase mb-1">
                    Message or Property Criteria *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    aria-required="true"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (formError) setFormError(null);
                    }}
                    placeholder="Please outline your target location, budget parameters, or property details..."
                    className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[13.5px] focus:outline-none focus:border-[#111111] resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="contactConsent"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (formError) setFormError(null);
                    }}
                    className="mt-1 rounded border-[#CCCCCC] text-[#111111] focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="contactConsent" className="text-[11.5px] text-[#555555] cursor-pointer">
                    I agree to the processing of personal data for confidential advisory contact under Horizon Estate’s Privacy Policy.
                  </label>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary btn-lg"
                  >
                    {isSubmitting ? 'Transmitting inquiry...' : 'Send Confidential Inquiry'}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#888888] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#111111]" />
                  <span>Strict NDA and fiduciary client protection apply</span>
                </div>
              </form>
            )}
          </div>

          {/* Right: Global Desks and Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-[20px] font-bold text-[#111111]">
                Global Desks
              </h3>
              <p className="text-[13px] text-[#777777] mt-1">
                Direct client advisory desks operating across European and American timezones.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-[#E5E5E5] bg-white">
                <div className="font-bold text-[15px] text-[#111111]">London Desk (EMEA)</div>
                <div className="text-[13px] text-[#666666] mt-0.5">Mayfair • London W1J 8AQ, UK</div>
                <div className="text-[12px] text-[#888888] mt-2 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>08:00 – 19:00 GMT</span>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-[#E5E5E5] bg-white">
                <div className="font-bold text-[15px] text-[#111111]">Los Angeles Desk (Americas)</div>
                <div className="text-[13px] text-[#666666] mt-0.5">Rodeo Drive • Beverly Hills, CA 90210</div>
                <div className="text-[12px] text-[#888888] mt-2 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>08:00 – 18:00 PST</span>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-[#E5E5E5] bg-white">
                <div className="font-bold text-[15px] text-[#111111]">Mediterranean Desk</div>
                <div className="text-[13px] text-[#666666] mt-0.5">Paseo de la Castellana • Madrid, Spain</div>
                <div className="text-[12px] text-[#888888] mt-2 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>09:00 – 19:00 CET</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E5E5] space-y-2 text-[13.5px] text-[#333333]">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#777777]" />
                <a href="mailto:advisory@horizonestate.com" className="hover:underline font-medium">
                  advisory@horizonestate.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#777777]" />
                <a href="tel:+12135550192" className="hover:underline font-medium">
                  +1 (213) 555-0192
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
