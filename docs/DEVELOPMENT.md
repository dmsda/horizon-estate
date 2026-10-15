# Horizon Estate — Development & Contribution Handbook

This handbook outlines engineering best practices, component authoring conventions, TypeScript standards, and contribution workflows for developers maintaining or extending **Horizon Estate**.

---

## 1. Development Principles

1. **Server-First Architecture**: Default to React Server Components. Introduce `'use client'` only when interactive state, browser events, or lifecycle hooks are strictly required.
2. **Strict Type Safety**: All models and props must be typed in [`src/types/index.ts`](../src/types/index.ts). Avoid the `any` escape hatch.
3. **Design System Fidelity**: Use the established color, spacing, and typography tokens. Do not introduce arbitrary inline styles or unvetted colors.
4. **Accessible by Default**: Ensure all interactive elements include accessible labels, keyboard focus states, and semantic HTML5 elements.
5. **Zero Layout Shifts**: Always provide explicit aspect ratios or dimensions when rendering images.

---

## 2. Component Authoring Standards

### 2.1 File & Directory Placement
- Page routes: `src/app/<route-name>/page.tsx`
- Layout shells: `src/app/<route-name>/layout.tsx`
- Page-specific client islands: `src/components/<section>/<ComponentName>Client.tsx`
- Shared global UI primitives: `src/components/ui/<ComponentName>.tsx`
- Layout components: `src/components/layout/<ComponentName>.tsx`

### 2.2 Server Component Pattern (Default)
```tsx
// src/app/press/page.tsx (Server Component)
import React from 'react';
import type { Metadata } from 'next';
import { pressReleases } from '@/data/press';

export const metadata: Metadata = {
  title: 'Press & Media | Horizon Estate',
  description: 'Official corporate announcements and architectural publications.',
};

export default function PressPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h1 className="text-4xl font-extrabold text-[#111111] mb-6">Press & Media</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pressReleases.map((item) => (
            <article key={item.id} className="p-6 rounded-xl border border-[#E5E5E5]">
              <span className="text-xs text-[#595959]">{item.date}</span>
              <h2 className="text-xl font-bold text-[#111111] mt-2">{item.title}</h2>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 2.3 Client Component Pattern (`'use client'`)
```tsx
'use client';

import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface FilterProps {
  initialCount: number;
}

export default function FilterDrawerClient({ initialCount }: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="btn-secondary btn-sm"
        aria-expanded={isOpen}
      >
        <SlidersHorizontal className="w-4 h-4" />
        <span>Filters ({initialCount})</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-[#F6F6F4] rounded-lg mt-3 border border-[#E5E5E5]">
          {/* Interactive filter controls */}
        </div>
      )}
    </div>
  );
}
```

---

## 3. Styling & Tailwind CSS Conventions

### 3.1 Design System Tokens
Always reuse tokens defined in [`src/app/globals.css`](../src/app/globals.css):
- Primary Text: `text-[#111111]`
- Secondary / Subtitles: `text-[#595959]`
- Hairline Dividers: `border-[#E5E5E5]`
- Card Background: `bg-white` or `bg-[#F6F6F4]`
- Accent Bronze: `text-[#C5A880]` or `bg-[#C5A880]`

### 3.2 Predefined Utility Classes
Horizon Estate provides global button and container classes in `src/app/globals.css`:
- Container: `container-custom` (responsive centered container with 1280px max-width)
- Primary Button: `btn-primary btn-md` (solid black background with white text)
- Secondary Button: `btn-secondary btn-md` (white background with `#E5E5E5` border)
- Pill Badge: `btn-pill` (rounded-full architectural tag)

---

## 4. How-To Guides

### 4.1 How to Add a New Page Route
1. Create a folder inside `src/app/`, for example `src/app/advisory/`.
2. Add `page.tsx`:
   ```tsx
   import type { Metadata } from 'next';
   
   export const metadata: Metadata = {
     title: 'Private Advisory | Horizon Estate',
     description: 'Institutional property investment structuring.',
   };
   
   export default function AdvisoryPage() {
     return <main className="container-custom py-16">...</main>;
   }
   ```
3. Add a link in [`src/components/layout/Header.tsx`](../src/components/layout/Header.tsx) and [`src/components/layout/Footer.tsx`](../src/components/layout/Footer.tsx).

### 4.2 How to Add a New Property Listing
1. Open [`src/data/properties.ts`](../src/data/properties.ts).
2. Append a new property object conforming to the `Property` interface:
   ```typescript
   {
     id: 'villa-aegean',
     slug: 'villa-aegean',
     title: 'Villa Aegean',
     tagline: 'Cliffside retreat overlooking the Cycladic waters.',
     category: 'Villa',
     price: 3200000,
     formattedPrice: '$3,200,000',
     location: {
       address: 'Agios Ioannis',
       city: 'Mykonos',
       country: 'Greece',
       coordinates: { lat: 37.42, lng: 25.31 }
     },
     specs: {
       bedrooms: 6,
       bathrooms: 7,
       areaSqFt: 6800,
       areaSqM: 631,
       propertyType: 'Detached Luxury Villa',
       yearBuilt: 2024
     },
     images: ['/images/properties/azura-villa.jpg'],
     featured: true,
     status: 'For Sale'
   }
   ```
3. Run `npm run build` to verify static page generation. The route `/properties/villa-aegean` will automatically be emitted.

---

## 5. Verification Commands

Run these commands before committing any changes:

```bash
# 1. Check code quality with ESLint
npm run lint

# 2. Verify TypeScript typing
npx tsc --noEmit

# 3. Verify static production compilation
npm run build

# 4. Preview the compiled production build locally
npm run preview
```
