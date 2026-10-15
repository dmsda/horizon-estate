# Horizon Estate — Frequently Asked Questions (FAQ)

This document answers common developer and agency questions regarding licensing, customization, data sources, hosting, and integrations for **Horizon Estate**.

---

### 1. Is Horizon Estate free to use for commercial real estate projects?
**Yes.** The source code, design system, and component architecture are released under the [MIT License](../LICENSE). You may freely use, customize, and deploy it for client projects or commercial brokerage websites.
> *Note: Bundled demonstration photos must be replaced with client-authorized real estate media per [`docs/ASSETS.md`](ASSETS.md).*

---

### 2. Does Horizon Estate require a backend or database to run locally?
**No.** The application is completely self-contained. All property listings, agent profiles, advisory services, and journal articles reside in typed data files under `src/data/`. You can clone the repository and launch it immediately with `npm run dev`.

---

### 3. Can I connect Horizon Estate to a Headless CMS (Sanity, Strapi, Contentful)?
**Yes.** Horizon Estate is specifically architected to decouple cleanly from local mock files. You can replace the static imports in Server Components (`src/app/properties/page.tsx`, etc.) with asynchronous `fetch()` calls to your CMS API. Full details are documented in [`docs/CUSTOMIZATION.md`](CUSTOMIZATION.md).

---

### 4. How do I change the brand name, monogram, and logo?
Edit the branding mark in:
- Header: [`src/components/layout/Header.tsx`](../src/components/layout/Header.tsx)
- Footer: [`src/components/layout/Footer.tsx`](../src/components/layout/Footer.tsx)
You can replace the typography wordmark with an SVG or PNG logo using the Next.js `<Image />` component.

---

### 5. How do I configure email notifications when a client books a consultation?
The default consultation modal simulates a clean submission state on the client. To connect it to a production email provider (such as Resend, SendGrid, or a CRM webhook):
1. Create a Next.js API route: `src/app/api/inquiries/route.ts`.
2. Connect your email service SDK using an environment variable (`RESEND_API_KEY`).
3. Update `handleSubmit` in [`src/components/ui/ConsultationModal.tsx`](../src/components/ui/ConsultationModal.tsx) to `POST` form data to `/api/inquiries`.

---

### 6. Where are property listings stored and how do I add new properties?
All listings are managed in [`src/data/properties.ts`](../src/data/properties.ts). Each listing conforms to the strict TypeScript `Property` interface defined in [`src/types/index.ts`](../src/types/index.ts). Adding a new object to this array automatically emits a corresponding detail page at `/properties/[slug]`.

---

### 7. How do I deploy the template to production?
The recommended and easiest platform is **Vercel** (zero-configuration). It is also fully compatible with Netlify, AWS Amplify, Cloudflare Pages, or self-hosted Docker containers. See [`docs/DEPLOYMENT.md`](DEPLOYMENT.md) for step-by-step instructions.

---

### 8. Which Node.js and Next.js versions are supported?
- **Node.js**: `18.18.0` or `20.x` LTS recommended.
- **Next.js**: `16.4.1` with Turbopack bundler.
- **React**: `19.3.0`.

---

### 9. Does the template support interactive property maps?
Yes. Every property in `src/data/properties.ts` includes geographic coordinates (`{ lat, lng }`). You can easily render an interactive Mapbox GL or Google Maps map by following the Mapbox integration guide in [`docs/CUSTOMIZATION.md`](CUSTOMIZATION.md).

---

### 10. How do I report a bug or contribute to the project?
Please review our [Contributing Guide](../CONTRIBUTING.md) and [Code of Conduct](../CODE_OF_CONDUCT.md). You can submit bug reports and pull requests on our GitHub repository: [https://github.com/dmsda/horizon-estate](https://github.com/dmsda/horizon-estate).
