# Horizon Estate — Design System & Visual Specification

This document defines the visual foundations, token values, typography hierarchy, component conventions, and design tokens powering **Horizon Estate**.

---

## 1. Design Philosophy

Horizon Estate embodies **architectural minimalism**:
- **Monochromatic Purity**: Deep obsidian darks (`#0A0A0A` / `#111111`) and crisp gallery whites (`#FFFFFF` / `#F6F6F4`) establish an uncluttered, high-end editorial canvas.
- **Subtle Luxury Accents**: Champagne Bronze (`#C5A880`) is reserved for high-value status pills, curated tags, and subtle focus cues.
- **Tactile Typography**: Generous tracking on uppercase section markers paired with humanistic geometric sans-serif body copy.
- **Hairline Geometry**: Crisp 1px dividers (`#E5E5E5`) structure information cleanly without visual noise.

---

## 2. Color Palette & Semantic Tokens

All color tokens are declared in [`src/app/globals.css`](../src/app/globals.css):

| Token Name | HEX Code | RGB | Role & Usage | WCAG Contrast (on White) |
| ---------- | -------- | --- | ------------ | ----------------------- |
| **Obsidian Black** | `#0A0A0A` | `rgb(10, 10, 10)` | Headings, primary CTA buttons, footer canvas | 19.8:1 (AAA) |
| **Primary Charcoal** | `#111111` | `rgb(17, 17, 17)` | Body typography, navigation active states | 18.2:1 (AAA) |
| **Editorial Muted** | `#595959` | `rgb(89, 89, 89)` | Subtitles, metadata specs, secondary copy | 7.0:1 (AAA) |
| **Architectural Border** | `#E5E5E5` | `rgb(229, 229, 229)` | Card borders, table dividers, button outlines | — (Structural) |
| **Gallery Off-White** | `#F6F6F4` | `rgb(246, 246, 244)` | Container backgrounds, pill badges, hover states | — (Surface) |
| **Pure White** | `#FFFFFF` | `rgb(255, 255, 255)` | Page canvas, card surfaces, modal containers | Base Canvas |
| **Champagne Bronze** | `#C5A880` | `rgb(197, 168, 128)` | Investment yield highlights, luxury badges | 3.2:1 (Decorative/Badge) |

---

## 3. Typography Scale & Hierarchy

Horizon Estate uses the **Manrope** font family (Google Fonts) loaded via `next/font/google`:

```text
Display / Hero H1:  56px / 1.08  | ExtraBold (800) | -0.03em tracking
Section Head / H2:  36px / 1.15  | ExtraBold (800) | -0.02em tracking
Subheading / H3:    22px / 1.25  | Bold (700)      | -0.01em tracking
Section Overline:   12px / 1.00  | Bold (700)      | +0.22em tracking (UPPERCASE)
Body Large:         16px / 1.60  | Regular (400)   | Normal tracking
Body Default:       14px / 1.55  | Regular (400)   | Normal tracking
Specifications:     12px / 1.40  | Medium (500)    | Font Mono / Sans
Micro Badges:       10px / 1.00  | SemiBold (600)  | +0.10em tracking (UPPERCASE)
```

---

## 4. Spacing Scale & Container Layouts

### Spacing Grid (4px Base Unit)
- `4px` (`gap-1`, `p-1`) — Micro spacing between badge icons and text
- `8px` (`gap-2`, `p-2`) — Compact element padding
- `12px` (`gap-3`, `p-3`) — Button internal spacing, chip gap
- `16px` (`gap-4`, `p-4`) — Standard container padding on mobile
- `24px` (`gap-6`, `p-6`) — Card interior padding, grid gap
- `32px` (`gap-8`, `p-8`) — Large desktop card padding
- `48px` (`gap-12`, `py-12`) — Medium section dividers
- `64px` (`py-16`) — Standard section vertical breathing room
- `96px` (`py-24`) — Major hero and landing section spacing

### Layout Containers
- **`container-custom`**: Max width `1280px` (`max-w-7xl`), centered with responsive horizontal padding (`px-4 sm:px-6 lg:px-8`).

---

## 5. Border Radius Conventions

Horizon Estate maintains a sharp architectural rhythm with controlled corner radii:

| Utility Class | Radius Value | Component Application |
| ------------- | ------------ | --------------------- |
| `rounded-sm`  | `2px` | Micro status indicators, input carets |
| `rounded-md`  | `6px` | Search form dropdowns, tooltips |
| `rounded-lg`  | `8px` | Interactive buttons, filter pills, small badges |
| `rounded-xl`  | `12px` | Property cards, modal dialogue windows |
| `rounded-2xl` | `16px` | Major featured hero cards, responsive preview frames |
| `rounded-full`| `9999px` | Architectural tag pills, circular avatar portraits |

---

## 6. Component Specifications

### 6.1 Interactive Buttons
```html
<!-- Primary Solid Button -->
<button class="px-6 py-3 rounded-lg bg-[#111111] text-white font-medium text-[13.5px] hover:bg-[#262626] transition-colors">
  Explore Residences
</button>

<!-- Secondary Outline Button -->
<button class="px-6 py-3 rounded-lg bg-white border border-[#E5E5E5] text-[#111111] font-medium text-[13.5px] hover:bg-[#F6F6F4] transition-colors">
  Schedule Consultation
</button>

<!-- Architectural Tag Pill -->
<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6F6F4] border border-[#E5E5E5] text-[11px] font-semibold text-[#111111]">
  Villa • Mykonos
</span>
```

### 6.2 Property Card Component
- **Image Aspect Ratio**: `aspect-[16/10]` with top-mounted category and status badges.
- **Hover Micro-interaction**: `group-hover:scale-105` over `500ms` with architectural cubic-bezier easing.
- **Divider & Specs Bar**: Bed, bath, and square-meter metrics separated by hairline dots.

### 6.3 Focus States & Accessibility
- Visible focus rings: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2`.
- High contrast compliant with WCAG 2.1 Level AA.
