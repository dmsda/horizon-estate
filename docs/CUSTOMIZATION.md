# Horizon Estate — Customization & Developer Guide

This guide provides practical, step-by-step instructions for customizing **Horizon Estate** for your own real estate agency, commercial client, or developer portfolio.

---

## Table of Contents
1. [Brand Identity & Logo](#1-brand-identity--logo)
2. [Color Palette & Theme Tokens](#2-color-palette--theme-tokens)
3. [Typography & Fonts](#3-typography--fonts)
4. [Managing Property Data](#4-managing-property-data)
5. [Agent Profiles & Advisory Team](#5-agent-profiles--advisory-team)
6. [Navigation & Header Links](#6-navigation--header-links)
7. [Footer & Office Locations](#7-footer--office-locations)
8. [Images & Media Replacement](#8-images--media-replacement)
9. [Animation & Motion Settings](#9-animation--motion-settings)
10. [Connecting an External CMS / API](#10-connecting-an-external-cms--api)
11. [Form Handling & Lead Capture](#11-form-handling--lead-capture)
12. [SEO & Social Sharing Tags](#12-seo--social-sharing-tags)

---

## 1. Brand Identity & Logo

The brand name and monogram are configured in two primary layout components:
- **Header**: [`src/components/layout/Header.tsx`](../src/components/layout/Header.tsx)
- **Footer**: [`src/components/layout/Footer.tsx`](../src/components/layout/Footer.tsx)

### Updating the Wordmark
In `Header.tsx`:
```tsx
// Locate the brand link (around line 93)
<Link href="/" className="group flex flex-col items-start ...">
  <span className="font-extrabold text-[15px] tracking-[0.22em] text-[#111111] uppercase leading-none">
    YOUR BRAND
  </span>
  <span className="font-semibold text-[11px] tracking-[0.38em] text-[#595959] uppercase leading-tight mt-0.5">
    PROPERTIES
  </span>
</Link>
```
To use an SVG logo or image instead, replace the `<span>` tags with Next.js `<Image src="/logo.svg" alt="Brand Logo" width={140} height={32} />`.

---

## 2. Color Palette & Theme Tokens

All global color tokens and contrast variables are defined in [`src/app/globals.css`](../src/app/globals.css):

```css
:root {
  --background: #FFFFFF;        /* Canvas background */
  --foreground: #111111;        /* Primary high-contrast text */
  --bg-secondary: #F6F6F4;      /* Container background */
  --bg-hover: #EEEEEC;          /* Interactive hover surfaces */
  --text-secondary: #595959;    /* Secondary subtitles & metadata */
  --border-neutral: #E5E5E5;    /* Hairline architectural dividers */
}
```

Updating these variables automatically cascades through the entire site, including cards, modals, tables, and buttons.

---

## 3. Typography & Fonts

Horizon Estate defaults to **Manrope**, loaded directly via `next/font/google` in [`src/app/layout.tsx`](../src/app/layout.tsx):

```tsx
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});
```

To switch to a different font (e.g., *Inter*, *Plus Jakarta Sans*, or *Outfit*):
1. Change the import in `src/app/layout.tsx`.
2. Update the variable name in `html className`.
3. Update `--font-sans` in `src/app/globals.css`.

---

## 4. Managing Property Data

Property listings are centrally managed in [`src/data/properties.ts`](../src/data/properties.ts).
Each listing conforms to the strict TypeScript interface `Property` in [`src/types/index.ts`](../src/types/index.ts).

### Adding a New Property Listing
```typescript
{
  id: 'villa-solana',
  slug: 'villa-solana',
  title: 'Villa Solana',
  tagline: 'Minimalist cliffside architectural residence with private Aegean panorama.',
  category: 'Villa',
  price: 2850000,
  formattedPrice: '$2,850,000',
  location: {
    address: 'Agios Lazaros Peninsula',
    city: 'Mykonos',
    state: 'Cyclades',
    country: 'Greece',
    coordinates: { lat: 37.419, lng: 25.328 }
  },
  specs: {
    bedrooms: 5,
    bathrooms: 6,
    areaSqFt: 6200,
    areaSqM: 576,
    propertyType: 'Detached Luxury Villa',
    yearBuilt: 2024
  },
  images: [
    '/images/properties/azura-villa.jpg',
    '/images/properties/floor-plan-sample.jpg'
  ],
  featured: true,
  status: 'For Sale'
}
```

---

## 5. Agent Profiles & Advisory Team

Broker and advisor profiles are located in [`src/data/agents.ts`](../src/data/agents.ts).
To add or update team members:
```typescript
{
  id: 'elena-rostova',
  slug: 'elena-rostova',
  name: 'Elena Rostova',
  title: 'Senior Partner — Mediterranean Acquisitions',
  email: 'elena.rostova@horizonestate.com',
  phone: '+30 210 555 0184',
  image: '/images/agents/olivia-barnes.jpg',
  specialties: ['Off-Market Villas', 'Tax Structuring', 'Golden Visa Advisory']
}
```

---

## 6. Navigation & Header Links

Primary navigation is defined in [`src/components/layout/Header.tsx`](../src/components/layout/Header.tsx).
To add top-level links or dropdown categories, modify the `<nav>` elements in the desktop and mobile navigation sections.

---

## 7. Footer & Office Locations

Office locations, global desks, social links, and legal disclaimers are located in [`src/components/layout/Footer.tsx`](../src/components/layout/Footer.tsx).
Update the phone numbers, addresses, and email links to reflect your client's headquarters.

---

## 8. Images & Media Replacement

All template images reside in the `public/images/` directory:
- `public/images/properties/`: Main property gallery photos and floor plans.
- `public/images/hero/`: High-resolution landing banners.
- `public/images/agents/`: Advisor headshots.
- `public/images/journal/`: Article editorial covers.

**Recommended Image Dimensions:**
- Property detail photos: `1920 × 1080px` (16:9 ratio), WebP or JPG, compressed under 400KB.
- Agent portraits: `800 × 1000px` (4:5 ratio).
- Hero banners: `2400 × 1350px`.

---

## 9. Animation & Motion Settings

Motion durations and easing curves are centralized in `src/app/globals.css`:
```css
--duration-micro: 180ms;   /* Button clicks, tags */
--duration-ui: 240ms;      /* Dropdowns, mobile menu */
--duration-reveal: 600ms;  /* Section fade-ins */
--duration-image: 850ms;   /* Lightbox transitions */
--ease-architectural: cubic-bezier(0.16, 1, 0.3, 1);
```
Horizon Estate includes built-in `@media (prefers-reduced-motion: reduce)` rules that automatically disable heavy transforms for users with accessibility preferences.

---

## 10. Connecting an External CMS / API

Horizon Estate is architected to decouple cleanly from local mock data and connect to any headless CMS (e.g. Sanity, Strapi, Contentful, or Supabase):

1. **Replace Data Fetching in Server Components**:
   In `src/app/properties/page.tsx`:
   ```typescript
   // Instead of importing static data:
   // import { properties } from '@/data/properties';
   
   // Fetch from your live CMS endpoint:
   async function getProperties() {
     const res = await fetch(`${process.env.CMS_API_URL}/properties`, {
       next: { revalidate: 3600 } // ISR revalidation
     });
     return res.json();
   }
   ```
2. **Type Mapping**:
   Ensure the CMS response maps to the `Property` interface in `src/types/index.ts`.

---

## 11. Form Handling & Lead Capture

Consultation and inquiry forms are located in:
- Consultation Modal: [`src/components/ui/ConsultationModal.tsx`](../src/components/ui/ConsultationModal.tsx)
- Contact Page: [`src/app/contact/page.tsx`](../src/app/contact/page.tsx)

To connect form submissions to an email or CRM service (e.g. Resend, HubSpot, Formspree):
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  await fetch('/api/inquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  setIsSubmitted(true);
};
```

---

## 12. SEO & Social Sharing Tags

Global metadata is declared in [`src/app/layout.tsx`](../src/app/layout.tsx):
- Update `metadataBase` to your production domain (e.g., `https://yourdomain.com`).
- Replace `openGraph.images` with `/showcase/og-image.png` or your client's banner.
- Update the embedded `Schema.org` `RealEstateAgent` JSON-LD object with your company's official corporate address, phone number, and price range.
