# Horizon Estate — Accessibility (a11y) Standards

This document outlines the accessibility standards, keyboard navigation patterns, ARIA attributes, color contrast ratios, and assistive technology safeguards implemented in **Horizon Estate**.

---

## 1. Compliance Target

Horizon Estate is engineered to align with the **Web Content Accessibility Guidelines (WCAG) 2.1 Level AA** standards.

---

## 2. Semantic HTML & Landmark Structure

The application uses native HTML5 landmark elements to provide clean document outlines for screen readers:

```html
<body>
  <!-- 1. Keyboard Skip Link -->
  <a href="#main-content" class="sr-only focus:not-sr-only ...">
    Skip to main content
  </a>

  <!-- 2. Header Landmark -->
  <header role="banner" class="sticky top-0 ...">
    <nav aria-label="Primary Navigation">...</nav>
  </header>

  <!-- 3. Main Content Landmark -->
  <main id="main-content" tabindex="-1" class="flex-1 focus:outline-none">
    <!-- Page Content -->
  </main>

  <!-- 4. Footer Landmark -->
  <footer role="contentinfo">...</footer>
</body>
```

---

## 3. Keyboard Navigation & Focus Management

### 3.1 Skip to Main Content Link
A skip link is provided at the very top of [`src/app/layout.tsx`](../src/app/layout.tsx). When keyboard users press `Tab` upon landing on any page, the skip link becomes visible and allows them to bypass the global navigation directly to `#main-content`.

### 3.2 Visible Focus Rings
All interactive elements (buttons, inputs, links, tabs) utilize high-contrast focus rings:
```css
:focus-visible {
  outline: 2px solid #111111;
  outline-offset: 2px;
}
```

### 3.3 Modal Focus Trapping (`ConsultationModal`)
When the consultation modal opens:
- Keyboard focus is trapped within the dialogue window using a cycling `Tab` listener.
- Pressing `Escape` closes the dialogue and restores focus to the triggering element.
- Background scrolling is locked to prevent disorienting document shifting.

### 3.4 Lightbox Gallery Keyboard Navigation
In full-screen photo inspectors:
- `ArrowRight`: Navigate to next photo.
- `ArrowLeft`: Navigate to previous photo.
- `Escape`: Close lightbox.

---

## 4. Color Contrast Ratios (WCAG AA/AAA)

Contrast ratios evaluated against white (`#FFFFFF`) canvas:

| Text Element | Color Token | Hex Code | Contrast Ratio | WCAG 2.1 Rating |
| ------------ | ----------- | -------- | -------------- | --------------- |
| **Primary Headings & Body** | Obsidian Black | `#0A0A0A` | **19.8:1** | AAA (Pass) |
| **Default Body Text** | Primary Charcoal | `#111111` | **18.2:1** | AAA (Pass) |
| **Secondary Metadata** | Editorial Muted | `#595959` | **7.0:1** | AAA (Pass) |
| **Input Borders** | Architectural Border | `#E5E5E5` | Structural | N/A |
| **Primary Button Text** | Pure White on Black | `#FFFFFF` on `#111111` | **18.2:1** | AAA (Pass) |

---

## 5. Screen Readers & ARIA Semantics

- **Descriptive Labels**: Icon-only buttons (such as mobile drawer toggles, close buttons, and arrow controls) contain explicit `aria-label` attributes:
  ```html
  <button aria-label="Close image gallery" onClick={onClose}>
    <X className="w-5 h-5" />
  </button>
  ```
- **Dynamic Menus**: Dropdowns include `aria-haspopup="menu"`, `aria-expanded={isOpen}`, and `aria-controls="menu-id"`.
- **Search Tabs**: Tab strips use `role="tab"`, `aria-selected={activeTab === tab.id}`, and `aria-controls`.

---

## 6. Motion & Vestibular Safety

Horizon Estate guarantees full support for users with vestibular sensitivities via `@media (prefers-reduced-motion: reduce)`:
- All CSS animations and keyframe translations are capped at `0.01ms`.
- JavaScript intersection observers automatically render elements immediately without waiting for scroll animation triggers.
