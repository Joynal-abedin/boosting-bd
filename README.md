# BOOSTING BD — Meta Ads & Digital Marketing Agency Website

A high-performance, accessible, and conversion-focused multi-page website built for **BOOSTING BD**, a premier digital marketing and Meta (Facebook & Instagram) advertising agency headquartered in Dhaka, Bangladesh.

Engineered with React 19, TypeScript, Tailwind CSS, React Router, and Vite, specifically optimized for static deployment on **Cloudflare Pages** and source control via **GitHub**.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Folder & File Architecture](#folder--file-architecture)
4. [File Responsibilities](#file-responsibilities)
5. [Prerequisites](#prerequisites)
6. [Local Development](#local-development)
7. [Production Build](#production-build)
8. [Cloudflare Pages Deployment Configuration](#cloudflare-pages-deployment-configuration)
   - [Step 1: Pushing Code to GitHub](#step-1-pushing-code-to-github)
   - [Step 2: Connecting to Cloudflare Pages](#step-2-connecting-to-cloudflare-pages)
   - [Step 3: Custom Domain Setup](#step-3-custom-domain-setup)
9. [Serverless Edge Function (`/api/contact`)](#serverless-edge-function-apicontact)
10. [Configuration & Customization Guide](#configuration--customization-guide)
11. [Troubleshooting & FAQs](#troubleshooting--faqs)
12. [Content Integrity & Compliance Notice](#content-integrity--compliance-notice)

---

## Project Overview

**BOOSTING BD** provides data-driven advertising across Meta's ecosystem (Facebook, Instagram, Messenger, Audience Network). Key highlights:

- **Multi-Page Dedicated Routes**: Individual, crawlable pages for `/services`, `/why-us`, `/process`, `/pricing`, `/case-studies`, `/faq`, `/contact`, `/privacy`, and `/terms`.
- **Top Bar Contract**: Clean 3-zone header with 1-line wordmark, whitespace-nowrap navigation links with active state indicator, and single primary CTA.
- **Strict Ad Spend Transparency**: Explicit separation of agency service retainers from advertising budgets paid directly to Meta.
- **Accessible Interactions**: Keyboard-navigable accordions, focus rings, WCAG AA contrast, and reduced-motion support.
- **Cloudflare Edge Function + WhatsApp Pipeline**: Dual lead capture using native serverless Cloudflare Pages Function (`functions/api/contact.ts`) plus immediate fail-safe 1-click WhatsApp hand-off.
- **Cloudflare Pages Static Readiness**: Zero runtime Node.js servers needed, preconfigured `_headers` and `_redirects`.

---

## Technology Stack

| Layer | Tooling |
| :--- | :--- |
| **Framework** | React 19 + TypeScript |
| **Routing** | React Router v7 |
| **Bundler** | Vite 8 (Modular Vendor Code Splitting) |
| **Styling** | Tailwind CSS v4 |
| **Icons** | Lucide React |
| **Edge Functions** | Cloudflare Pages Functions (Serverless TypeScript) |
| **Hosting Target** | Cloudflare Pages |
| **SEO** | Semantic HTML5, OpenGraph, Twitter Cards, Schema.org JSON-LD |

---

## Folder & File Architecture

```text
boosting-bd/
├── functions/
│   └── api/
│       └── contact.ts          # Cloudflare Pages serverless edge function (/api/contact)
├── public/
│   ├── images/                 # Production-ready static images
│   │   ├── hero-meta-ads-dashboard.jpg
│   │   ├── meta-campaign-strategy.jpg
│   │   └── ecommerce-growth-mockup.jpg
│   ├── favicon.svg             # Modern vector brandmark favicon
│   ├── og-image.svg            # 1200x630 social share card
│   ├── robots.txt              # Search crawler instructions
│   ├── sitemap.xml             # XML sitemap with all dedicated page endpoints
│   ├── _headers                # Cloudflare Pages security & caching headers
│   └── _redirects              # Cloudflare SPA fallback rule (/* /index.html 200)
├── src/
│   ├── assets/
│   │   └── images/             # Source photography assets
│   ├── components/
│   │   ├── Header.tsx          # Responsive sticky navigation (Top Bar Contract)
│   │   ├── Footer.tsx          # Comprehensive footer with links & disclaimer
│   │   ├── SectionHeading.tsx  # Unboxed typographic section titles
│   │   ├── ScrollToTop.tsx     # Route transition scroll-to-top handler
│   │   └── WhatsAppFloatingButton.tsx # Floating accessible contact widget
│   ├── config/
│   │   └── site.ts             # Central Single Source of Truth
│   ├── data/
│   │   ├── navigation.ts       # Main navigation routes
│   │   ├── services.ts         # Service descriptions, outcomes, deliverables
│   │   ├── pricing.ts          # Transparent retainer tiers & ad budget guidelines
│   │   ├── portfolio.ts        # Illustrative campaign frameworks & case studies
│   │   ├── testimonials.ts     # Sample feedback placeholder slots
│   │   └── faq.ts              # Frequently asked questions for BD businesses
│   ├── pages/
│   │   ├── HomePage.tsx        # Agency landing overview
│   │   ├── ServicesPage.tsx    # Dedicated /services page
│   │   ├── WhyUsPage.tsx       # Dedicated /why-us comparison page
│   │   ├── ProcessPage.tsx     # Dedicated /process workflow page
│   │   ├── PricingPage.tsx     # Dedicated /pricing retainer page
│   │   ├── CaseStudiesPage.tsx # Dedicated /case-studies portfolio page
│   │   ├── FAQPage.tsx         # Dedicated /faq knowledge page
│   │   ├── ContactPage.tsx     # Dedicated /contact inquiry page
│   │   ├── PrivacyPage.tsx     # Dedicated /privacy policy page
│   │   └── TermsPage.tsx       # Dedicated /terms of service page
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section with primary & secondary CTAs
│   │   ├── ValueStrip.tsx      # 4 core value proposition pillars
│   │   ├── Services.tsx        # Bento grid of agency capabilities
│   │   ├── WhyUs.tsx           # Differentiators (zero markup, CAPI precision)
│   │   ├── Process.tsx         # 4-stage media buying workflow
│   │   ├── Pricing.tsx         # BDT/USD retainers with fee distinction
│   │   ├── Portfolio.tsx       # Strategy architectures with preview cards
│   │   ├── Testimonials.tsx    # Feedback placeholders
│   │   ├── FAQ.tsx             # Working accessible accordions
│   │   └── Contact.tsx         # Validated lead form + API submission + WhatsApp
│   ├── App.tsx                 # React Router application composition
│   ├── main.tsx                # Application DOM entry point
│   └── index.css               # Design tokens, focus rings, and Tailwind CSS
├── index.html                  # HTML entry point with meta tags & JSON-LD
├── metadata.json               # AI Studio applet metadata
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript strict configuration
├── vite.config.ts              # Vite bundler configuration with manual code splitting
└── README.md                   # Complete documentation
```

---

## File Responsibilities

1. **`functions/api/contact.ts`**: Runs on Cloudflare's Edge network automatically when deployed to Cloudflare Pages. Receives JSON form submissions at `/api/contact` and forwards them to optional webhooks or emails with zero Node servers.
2. **`public/_redirects`**: Crucial Cloudflare Pages rewrite rule (`/* /index.html 200`). Enables deep linking and direct page refreshes for all client-side routes (`/services`, `/pricing`, etc.) without 404 errors.
3. **`public/_headers`**: Enforces HTTP security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`) and browser cache-control rules.
4. **`public/images/`**: Houses static image assets directly served by Cloudflare's global CDN.
5. **`src/config/site.ts`**: The single source of truth for business information (WhatsApp, phone, address, email, social links).

---

## Prerequisites

- **Node.js**: Version 18.0.0 or higher (Node 20+ LTS recommended).
- **npm**: Version 9.0.0 or higher.

Verify:
```bash
node -v
npm -v
```

---

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000`.

---

## Production Build

To run the local production build:

```bash
npm run build
```

This compiles TypeScript, optimizes Tailwind CSS, and outputs the minified static site to `dist/`.

---

## Cloudflare Pages Deployment Configuration

### Exact Cloudflare Pages Settings

| Setting | Value |
| :--- | :--- |
| **Framework preset** | `Vite` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (leave empty/default) |
| **Production branch** | `main` |
| **Node.js version (optional)** | `20` |

### Step 1: Pushing Code to GitHub

1. Initialize git in the project root:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Cloudflare Pages deployment ready BOOSTING BD website"
   ```

2. Create a new repository on [GitHub](https://github.com/new) named `boosting-bd`.

3. Push the repository to the `main` branch:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/boosting-bd.git
   git push -u origin main
   ```

*Note*: Ensure `package.json` resides directly at the root of the repository, not nested inside an extra subfolder.

---

### Step 2: Connecting to Cloudflare Pages

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the sidebar, select **Workers & Pages**.
3. Click **Create Application**, then choose the **Pages** tab.
4. Select **Connect to Git** and pick your `boosting-bd` repository.
5. Apply the build settings specified above:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click **Save and Deploy**. Cloudflare Pages will build the site and provide a free `*.pages.dev` URL.

---

### Step 3: Custom Domain Setup

1. In your Cloudflare Pages project, select **Custom domains**.
2. Click **Set up a custom domain**.
3. Enter your domain (e.g. `boostingagencyofficial.site`).
4. If your DNS is managed on Cloudflare, the CNAME record is created automatically. If external, add the CNAME record indicated by Cloudflare to your registrar.
5. Free SSL certificates are provisioned automatically.

---

## Serverless Edge Function (`/api/contact`)

When deployed on Cloudflare Pages, Cloudflare automatically mounts `/functions/api/contact.ts` as a serverless edge endpoint at `/api/contact`.

- Accepts `POST` requests with JSON payload.
- Validates parameters (name, email, phone, ad budget, message).
- **Optional Webhook Alert**: In your Cloudflare Pages Dashboard, navigate to **Settings > Environment variables** and add `WEBHOOK_URL` (e.g. Discord, Slack, or Zapier webhook). Inbound lead notifications will be forwarded automatically!

---

## Configuration & Customization Guide

- **Brand & Contacts**: Edit `src/config/site.ts` to update the WhatsApp number, phone, email, address, and social URLs across the entire application.
- **Services**: Edit `src/data/services.ts`.
- **Pricing & Retainers**: Edit `src/data/pricing.ts`.
- **Case Studies**: Edit `src/data/portfolio.ts`.
- **FAQ**: Edit `src/data/faq.ts`.

---

## Troubleshooting & FAQs

### Error: "Page not found (404)" on refreshing `/services` or `/pricing`
- Caused when static hosts lack an SPA fallback. This project includes `public/_redirects` with `/* /index.html 200`, which solves this automatically on Cloudflare Pages.

### Error: Images not showing up
- All images are placed in `public/images/` and copied to `dist/images/` during build. They are referenced using root-relative paths (`/images/hero-meta-ads-dashboard.jpg`).

---

## Content Integrity & Compliance Notice

- **Independent Agency**: BOOSTING BD is an independent performance marketing agency. It is not affiliated with, endorsed by, or an authorized representative of Meta Platforms, Inc.
- **Realistic Expectations**: Performance marketing requires continuous creative testing and depends on external factors (product pricing, inventory, delivery speeds, landing page speed). We do not guarantee fixed sales or arbitrary ROAS numbers.
- **Client Ownership**: Clients retain full ownership of their Meta Business Manager, ad accounts, credit cards, and Pixel data.
