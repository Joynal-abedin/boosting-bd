# BOOSTING BD — Meta Ads & Digital Marketing Agency Website

A high-performance, accessible, and conversion-focused static website built for **BOOSTING BD**, a digital marketing and Meta (Facebook & Instagram) advertising agency headquartered in Dhaka, Bangladesh.

Engineered with React 19, TypeScript, Tailwind CSS, and Vite, specifically optimized for static deployment on **Cloudflare Pages** and source control via **GitHub**.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Folder & File Architecture](#folder--file-architecture)
4. [File Responsibilities](#file-responsibilities)
5. [Prerequisites](#prerequisites)
6. [Local Development](#local-development)
7. [Production Build](#production-build)
8. [Configuration & Customization Guide](#configuration--customization-guide)
   - [Editing Brand & Contact Details](#editing-brand--contact-details)
   - [Editing Services](#editing-services)
   - [Editing Pricing & Retainers](#editing-pricing--retainers)
   - [Editing Case Studies & Images](#editing-case-studies--images)
   - [Updating SEO Metadata & Domain](#updating-seo-metadata--domain)
9. [Deployment Guide: GitHub & Cloudflare Pages](#deployment-guide-github--cloudflare-pages)
   - [Step 1: Pushing Code to GitHub](#step-1-pushing-code-to-github)
   - [Step 2: Connecting to Cloudflare Pages](#step-2-connecting-to-cloudflare-pages)
   - [Step 3: Setting Up a Custom Domain](#step-3-setting-up-a-custom-domain)
10. [Forms & WhatsApp Integration Details](#forms--whatsapp-integration-details)
11. [Troubleshooting & FAQs](#troubleshooting--faqs)
12. [Content Integrity & Compliance Notice](#content-integrity--compliance-notice)

---

## Project Overview

**BOOSTING BD** specializes in data-driven advertising across Meta's family of apps (Facebook, Instagram, Messenger, Audience Network). Key highlights of this codebase include:

- **Strict Ad Spend Transparency**: Explicit separation of agency service retainers from advertising budgets paid directly to Meta.
- **Top Bar Contract**: Clean 3-zone header with 1-line wordmark, whitespace-nowrap navigation links, and single primary CTA.
- **Accessible Interactions**: Keyboard-navigable accordions, focus rings, WCAG AA contrast, and reduced-motion support.
- **Client-Side WhatsApp Pipeline**: Pre-filled WhatsApp routing preserving inquiries without backend server dependencies.
- **Cloudflare Pages Static Readiness**: Zero runtime server requirements, preconfigured `_headers` and `_redirects`.

---

## Technology Stack

| Layer | Tooling |
| :--- | :--- |
| **Framework** | React 19 + TypeScript |
| **Bundler** | Vite 8 |
| **Styling** | Tailwind CSS v4 |
| **Icons** | Lucide React |
| **Hosting Target** | Cloudflare Pages (Static JAMstack) |
| **SEO** | Semantic HTML5, OpenGraph, Twitter Cards, Schema.org JSON-LD |

---

## Folder & File Architecture

```text
boosting-bd/
├── public/
│   ├── favicon.svg             # Modern vector brandmark favicon
│   ├── og-image.svg            # 1200x630 social share card
│   ├── robots.txt              # Search crawler instructions
│   ├── sitemap.xml             # XML sitemap with canonical endpoints
│   ├── _headers                # Cloudflare Pages security & caching headers
│   └── _redirects              # Cloudflare SPA fallback rule (/* /index.html 200)
├── src/
│   ├── assets/
│   │   └── images/             # Local high-resolution WebP/JPG images
│   ├── components/
│   │   ├── Header.tsx          # Responsive sticky navigation (Top Bar Contract)
│   │   ├── Footer.tsx          # Comprehensive footer with links & disclaimer
│   │   ├── SectionHeading.tsx  # Unboxed typographic section titles
│   │   ├── WhatsAppFloatingButton.tsx # Floating accessible contact widget
│   │   └── LegalModal.tsx      # Privacy Policy & Terms of Service dialog
│   ├── config/
│   │   └── site.ts             # Central Single Source of Truth
│   ├── data/
│   │   ├── navigation.ts       # Main navigation links
│   │   ├── services.ts         # Service descriptions, outcomes, deliverables
│   │   ├── pricing.ts          # Transparent retainer tiers & ad budget guidelines
│   │   ├── portfolio.ts        # Illustrative campaign frameworks & case studies
│   │   ├── testimonials.ts     # Sample feedback placeholder slots
│   │   └── faq.ts              # Frequently asked questions for BD businesses
│   ├── sections/
│   │   ├── Hero.tsx            # High-impact hero with CTA & proof points
│   │   ├── ValueStrip.tsx      # 4 core value proposition pillars
│   │   ├── Services.tsx        # Asymmetric Bento grid of agency capabilities
│   │   ├── WhyUs.tsx           # Anti-slop reasons to choose BOOSTING BD
│   │   ├── Process.tsx         # 4-stage media buying workflow
│   │   ├── Pricing.tsx         # BDT/USD retainers with fee distinction
│   │   ├── Portfolio.tsx       # Strategy architectures with image previews
│   │   ├── Testimonials.tsx    # Feedback placeholders
│   │   ├── FAQ.tsx             # Working accessible accordions
│   │   └── Contact.tsx         # Validated lead form + 1-click WhatsApp handoff
│   ├── App.tsx                 # Root application composition
│   ├── main.tsx                # Application DOM entry point
│   └── index.css               # Design tokens, focus rings, and Tailwind CSS
├── index.html                  # HTML entry point with meta tags & JSON-LD
├── metadata.json               # AI Studio applet metadata
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript strict configuration
├── vite.config.ts              # Vite bundler configuration
└── README.md                   # Complete documentation
```

---

## File Responsibilities

1. **`src/config/site.ts`**: The single source of truth for phone numbers, WhatsApp numbers, email, physical office address, social media links, and default messages. Modifying this updates the entire site.
2. **`src/data/pricing.ts`**: Contains retainer amounts (BDT & USD), ad budget guidelines, and legal disclosures distinguishing agency management fees from Meta ad charges.
3. **`src/data/services.ts`**: Modifies or adds agency service offerings, deliverables, and icon associations.
4. **`src/data/portfolio.ts`**: Manages campaign frameworks and case study descriptions.
5. **`public/_headers`**: Enforces HTTP security headers (`X-Frame-Options`, `X-Content-Type-Options`) and caching rules in Cloudflare Pages.
6. **`public/_redirects`**: Ensures single-page app (SPA) URL rewrites resolve to `/index.html` without 404 errors.

---

## Prerequisites

- **Node.js**: Version 18.0.0 or higher (Node 20+ LTS recommended).
- **npm**: Version 9.0.0 or higher.

Verify your environment by running:
```bash
node -v
npm -v
```

---

## Local Development

1. Clone or extract the project files into your working folder:
   ```bash
   cd boosting-bd
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the Vite local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## Production Build

To test and produce an optimized static production distribution:

```bash
npm run build
```

This compiles all TypeScript files and bundles minified CSS and JavaScript into the **`dist/`** directory. All files from `public/` (including `_headers`, `robots.txt`, and `sitemap.xml`) are copied into the root of `dist/`.

To preview the built static bundle locally:
```bash
npm run preview
```

---

## Configuration & Customization Guide

### Editing Brand & Contact Details
Open **`src/config/site.ts`**:
- **WhatsApp Number**: Update `contact.whatsappNumber` to your international phone digits without plus signs or dashes (e.g. `"8801518961899"`).
- **Phone Display**: Update `contact.phoneDisplay` (e.g. `"+880 1518 961899"`).
- **Email**: Update `contact.email` (e.g. `"turjoy144@gmail.com"`).
- **Address**: Update `contact.address` and `contact.city`.
- **Social Links**: Update Facebook, Instagram, and LinkedIn page URLs.

### Editing Services
Open **`src/data/services.ts`**:
- Add, remove, or modify items in the `servicesData` array.
- Icons available include: `TrendingUp`, `ShoppingBag`, `Target`, `Cpu`, `RefreshCw`, `BarChart3`.

### Editing Pricing & Retainers
Open **`src/data/pricing.ts`**:
- Update `managementFee.bdt` and `managementFee.usd`.
- Adjust `recommendedAdSpend` or feature inclusions.
- Note: Always preserve the explicit distinction between Agency Management Fees and direct Meta ad spend.

### Editing Case Studies & Images
Open **`src/data/portfolio.ts`**:
- Update industry names, titles, commercial challenges, and execution highlights.
- Replace image paths with your own assets placed in `src/assets/images/` or `public/images/`.

### Updating SEO Metadata & Domain
1. In **`src/config/site.ts`**, update `productionUrl` to your live domain (e.g. `https://boostingagencyofficial.site/`).
2. In **`index.html`**, update:
   - `<link rel="canonical" href="https://your-domain.com/" />`
   - `<meta property="og:url" content="https://your-domain.com/" />`
   - JSON-LD `"url"`, `"telephone"`, and `"address"`.
3. In **`public/sitemap.xml`** and **`public/robots.txt`**, update the sitemap URLs with your verified domain.

---

## Deployment Guide: GitHub & Cloudflare Pages

### Step 1: Pushing Code to GitHub

1. Initialize git in the project root (if not already done):
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of BOOSTING BD agency website"
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
2. In the left navigation, select **Workers & Pages**.
3. Click **Create Application**, then choose the **Pages** tab.
4. Select **Connect to Git** and authorize your GitHub account.
5. Choose your `boosting-bd` repository.
6. Configure the build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty or default)
7. Click **Save and Deploy**. Cloudflare Pages will build the site and provide a free `*.pages.dev` preview URL.

---

### Step 3: Setting Up a Custom Domain

1. In your Cloudflare Pages project, go to **Custom domains**.
2. Click **Set up a custom domain**.
3. Enter your domain (e.g. `boostingagencyofficial.site` or `www.boostingbd.com`).
4. If your domain's DNS is managed on Cloudflare, DNS records (CNAME) will be created automatically.
5. If your domain is registered elsewhere (e.g. Namecheap, GoDaddy), add the CNAME record indicated by Cloudflare to your domain registrar's DNS settings.
6. Cloudflare automatically issues and manages free SSL/TLS certificates.

---

## Forms & WhatsApp Integration Details

To adhere strictly to static architecture and prevent silent lead drop-off:
- The inquiry form validates user input (name, email/phone format, campaign budget, and notes).
- If no server endpoint is attached, the form honestly explains that it is running in static mode and provides a **1-click WhatsApp handoff**.
- Clicking this opens WhatsApp with a cleanly formatted text message pre-filled with all form fields.

### Optional: Connecting a Real Form Endpoint
If you wish to receive form submissions via email or database in the future:
1. **Option A (Cloudflare Pages Function)**: Create `functions/api/contact.ts` in the project root to handle POST requests using Cloudflare's built-in serverless execution.
2. **Option B (Third-Party Form Provider)**: Connect endpoints like Formspree, Basin, or Formkeep by updating the `handleSubmit` method in `src/sections/Contact.tsx`.

---

## Troubleshooting & FAQs

### Error: "Directory not found" or "Build output directory error" on Cloudflare
- Ensure the **Build output directory** in Cloudflare Pages is set to `dist` (all lowercase).

### Error: "Cannot find module" or Case Sensitivity Issues
- Linux servers (such as Cloudflare's build runners) are strictly case-sensitive. Verify that all component imports match the exact file naming on disk (e.g. `src/sections/Hero.tsx`, not `src/sections/hero.tsx`).

### Error: ZIP download has nested folders
- When extracting ZIP archives, ensure you do not commit an outer container folder. Your repository root must contain `package.json`, `index.html`, and `vite.config.ts`.

---

## Content Integrity & Compliance Notice

- **Independent Agency**: BOOSTING BD is an independent performance marketing agency. It is not affiliated with, endorsed by, or an authorized representative of Meta Platforms, Inc.
- **Realistic Expectations**: Performance marketing requires continuous creative testing and depends on external factors (product pricing, inventory, delivery speeds, landing page speed). We do not guarantee fixed sales or arbitrary ROAS numbers.
- **Client Ownership**: Clients retain full ownership of their Meta Business Manager, ad accounts, credit cards, and Pixel data.
