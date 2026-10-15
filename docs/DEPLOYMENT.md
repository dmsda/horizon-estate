# Horizon Estate — Production Deployment Guide

This guide covers deployment strategies, platform configurations, containerization, and production verification for **Horizon Estate**.

---

## 1. Architectural Deployment Assessment

Horizon Estate is built with **Next.js 16.4.1 (App Router)**.
- **Rendering Model**: All 40 routes are statically pre-rendered (SSG) at build time.
- **Build Command**: `npm run build`
- **Output Artifacts**: Stored in `.next/` with static HTML/JSON emitted to `.next/server/app/`.
- **Server Requirements**:
  - Node.js `18.18+` or `20 LTS` for standard Node server mode (`npm run start` or `npm run preview`).
  - Or edge/serverless compute environments supported by Vercel, Netlify, or Cloudflare.

---

## 2. Platform Deployment Guides

### Option A: Vercel (Recommended / Zero-Config)

Vercel provides native optimization for Next.js App Router applications, including automatic image optimization and global CDN caching.

1. Push your repository to GitHub: `https://github.com/dmsda/horizon-estate.git`.
2. Log into [vercel.com](https://vercel.com) and click **"Add New"** > **"Project"**.
3. Import the `horizon-estate` repository.
4. Framework Preset will automatically detect **Next.js**.
5. Build and Output Settings:
   - Build Command: `npm run build`
   - Output Directory: `.next` (default)
   - Install Command: `npm install`
6. Add any optional Environment Variables (e.g. `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`).
7. Click **"Deploy"**.

---

### Option B: Netlify

1. Connect your repository in the Netlify dashboard.
2. Configure build settings:
   - **Base directory**: `.`
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
3. Install the `@netlify/plugin-nextjs` plugin if prompted.
4. Set production environment variables under **Site configuration > Environment variables**.

---

### Option C: Docker Container (Self-Hosted VPS / Kubernetes)

For self-hosted Linux servers, AWS EC2, or Kubernetes clusters, use this production-grade multi-stage `Dockerfile`:

```dockerfile
# Stage 1: Dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3000

CMD ["npm", "run", "start"]
```

#### Running with Docker:
```bash
# Build Docker image
docker build -t horizon-estate:latest .

# Run container on port 3000
docker run -p 3000:3000 -d --name horizon-estate-app horizon-estate:latest
```

---

## 3. Environment Variables in Production

Never commit `.env.local` or secrets into version control. Set variables in your hosting provider's dashboard:

| Variable Name | Purpose | Example Value |
| ------------- | ------- | ------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO metadata & OpenGraph | `https://horizonestate.com` |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | (Optional) Mapbox GL public token | `pk.eyJ1IjoieW91...` |
| `RESEND_API_KEY` | (Optional) Private key for serverless email forms | `re_123456789` |

---

## 4. Pre-Deployment Verification Checklist

Before pointing production DNS to your build:
- [ ] Run `npm run lint` — Confirm 0 errors.
- [ ] Run `npm run build` — Confirm all 40 routes compile cleanly.
- [ ] Run `npm run preview` — Confirm assets and responsive layouts render locally.
- [ ] Update `metadataBase` in [`src/app/layout.tsx`](../src/app/layout.tsx) to match your live domain.
- [ ] Verify `robots.txt` and `sitemap.xml` resolve at `/robots.txt` and `/sitemap.xml`.
- [ ] Replace demonstration property photos with client-authorized assets per [`docs/ASSETS.md`](ASSETS.md).

---

## 5. Rollback Strategy

- **Vercel / Netlify**: In the deployment history panel, click on any previous successful deployment and select **"Rollback to this deployment"** for instant zero-downtime rollback.
- **Docker / Self-Hosted**: Retain prior tagged Docker images (`horizon-estate:v1.0.0`) to redeploy immediately if a build fails in production.
