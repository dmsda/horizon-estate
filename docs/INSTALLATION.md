# Horizon Estate — Installation & Local Setup Guide

This guide provides complete, step-by-step instructions for installing and running **Horizon Estate** on your local development machine.

---

## 1. System Prerequisites

Before starting, ensure your local development environment meets the following requirements:

| Tool | Recommended Version | Minimum Version | Verification Command |
| ---- | ------------------- | --------------- | -------------------- |
| **Node.js** | `20.x` (LTS) | `18.18.0` | `node -v` |
| **npm** | `10.x` | `9.0.0` | `npm -v` |
| **Git** | `2.x+` | `2.0.0` | `git --version` |

> [!NOTE]
> Alternative package managers (**pnpm** `8+`, **yarn** `1.22+`, or **bun** `1.0+`) are fully compatible with this repository. Commands below use `npm` as the default.

---

## 2. Step-by-Step Installation

### Step 1: Clone the Repository
Clone the project from GitHub using HTTPS or SSH:

```bash
# Clone via HTTPS
git clone https://github.com/dmsda/horizon-estate.git

# Navigate into the project root
cd horizon-estate
```

### Step 2: Install Dependencies
Install all required production and development dependencies:

```bash
npm install
```

This installs:
- `next@16.4.1`
- `react@19.3.0` and `react-dom@19.3.0`
- `lucide-react@^1.57.0`
- `tailwindcss@^4` and `@tailwindcss/turbopack`
- `typescript@^5`

### Step 3: Configure Environment Variables
Horizon Estate runs out-of-the-box with bundled demonstration data. Setting up environment variables is **optional** for basic local evaluation.

To configure optional external services (e.g. Mapbox, Resend email webhooks, Google Analytics), copy the example configuration:

```bash
# On Linux / macOS
cp .env.example .env.local

# On Windows PowerShell
Copy-Item .env.example .env.local
```

Open `.env.local` to customize variables if required.

### Step 4: Start the Development Server
Launch the Next.js development server with Turbopack:

```bash
npm run dev
```

You should see output similar to:
```text
▲ Next.js 16.4.1 (Turbopack)
- Local:   http://localhost:3000
- Network: http://192.168.1.10:3000
✓ Ready in 1.4s
```

### Step 5: Verify in Browser
Open your browser and navigate to:
- **Flagship Real Estate Website**: [http://localhost:3000](http://localhost:3000)
- **Official Product Showcase**: [http://localhost:3000/showcase](http://localhost:3000/showcase)
- **Property Discovery Catalog**: [http://localhost:3000/properties](http://localhost:3000/properties)

---

## 3. Production Build Verification

To confirm that the project compiles cleanly for production deployment:

```bash
# 1. Run type checking and static build
npm run build

# 2. Preview the production build locally
npm run preview
```

Expected output:
```text
✓ Compiled successfully
✓ Generating static pages using 15 workers (40/40) in 1.2s
Route (app)
├ ○ /
├ ○ /properties
├ ○ /showcase
└ ... (40 static routes)
```

---

## 4. Troubleshooting Common Issues

### Issue 1: Port 3000 is already in use
If another application is running on port 3000, specify a custom port:
```bash
npm run dev -- -p 3001
```
Or stop the existing process using the port.

### Issue 2: Node.js version unsupported
If you receive syntax errors or unsupported engine warnings, check your active Node version:
```bash
node -v
```
If your version is below `18.18.0`, use [nvm](https://github.com/nvm-sh/nvm) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows) to switch to Node 20 LTS:
```bash
nvm install 20
nvm use 20
```

### Issue 3: Stale `.next` cache or dependency conflicts
If you experience hydration mismatches or strange compilation artifacts after pulling updates:
```bash
# Delete build cache and node_modules
rm -rf .next node_modules package-lock.json

# Reinstall cleanly
npm install

# Rebuild
npm run build
```

---

## 5. Next Steps

- Consult [`docs/DEVELOPMENT.md`](DEVELOPMENT.md) for workflow conventions and code standards.
- Consult [`docs/CUSTOMIZATION.md`](CUSTOMIZATION.md) to rebrand colors, typography, and listing data.
- Consult [`docs/DEPLOYMENT.md`](DEPLOYMENT.md) to deploy to Vercel, Netlify, or Docker.
