# PINCOF — Staffing & Recruitment Solutions

A modern, high-performance, fully responsive **React 19 + Vite 8 + Tailwind CSS + GSAP + Lenis + React Router 7** enterprise web application for **PINCOF**, engineered with a clean, light, corporate editorial aesthetic.

Production Domain: [https://www.pincof.com/](https://www.pincof.com/)

---

## ⚡ Tech Stack & Libraries

* **Core Framework**: [React 19](https://react.dev/) (`react`, `react-dom` `^19.3.0`)
* **Build Tool & Bundler**: [Vite 8](https://vitejs.dev/) (`vite` `^8.3.4`, `@vitejs/plugin-react` `^6.1.2`)
* **Routing**: [React Router 7](https://reactrouter.com/) (`react-router-dom` `^7.18.4`) with client-side SPA routing and instant scroll reset
* **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/) (`lenis` `^1.3.26`) synchronized directly with the GSAP ticker
* **Animation Engine**: [GSAP 3](https://greensock.com/gsap/) (`gsap` `^3.15.0`) with `ScrollTrigger`, kinetic line-mask reveals, and GPU-composited transforms
* **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) (`tailwindcss` `^3.4.19`, `postcss` `^8.5.29`, `autoprefixer` `^10.6.1`)
* **Iconography**: [Lucide React](https://lucide.dev/) (`lucide-react` `^1.54.0`)
* **Linter**: [Oxlint](https://oxc.rs/) (`oxlint` `^1.87.0`) for ultra-fast, zero-warning static code verification
* **Analytics**: [@vercel/analytics](https://vercel.com/analytics) (`^2.0.1`)
* **Notifications**: Zero-dependency reactive toast system (`src/utils/toast.js` & `src/components/Toaster.jsx`)
* **Smart Email Routing**: Device-aware email dispatcher (`src/utils/email.js`) launching the native email app on mobile/tablet and Gmail Web compose on desktop

---

## 🚀 Quick Start

### 1. Prerequisites
* Node.js `18.x` or higher
* npm `9.x` or higher

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
The application runs locally at `http://localhost:5173/`.

### 4. Code Quality & Linting
```bash
npm run lint
```
Runs high-speed Oxlint verification across all 53 files with 0 errors and 0 warnings.

### 5. Production Build & Preview
```bash
npm run build
npm run preview
```
Production output is bundled into the `dist/` directory.

---

## 🗺️ Multi-Page Route Structure

Every major section lives on its own dedicated route with full SEO meta tags, Open Graph tags, and layout wrapping:

| Route | Page | Key Functionality & Content |
| :--- | :--- | :--- |
| `/` | **Home** | Editorial Hero, Brand Hero Carousel with storefront photography, Selected Hiring Experience Marquee, Core Services Highlights, Industry Focus, Why Choose Us, High-impact CTA banner, and Lead Form. |
| `/services` | **Services** | Full 8 recruitment service cards (*Retail, Franchise, F&B, Bulk, Sales, Store & Ops, Management, Customized*) + Delivery methodology breakdown + Direct hiring CTA. |
| `/industries` | **Industries** | 2×4 responsive grid across 8 industries (*F&B, Fashion, Retail, Grocery, Lifestyle, Franchise, Hospitality, Emerging*) + Sector-specific operational insights. |
| `/roles` | **Roles We Fill** | Categorized role matrix (*Store Leadership, Front of House, F&B, Operations*) with interactive filters + non-job-portal compliance disclaimer. |
| `/process` | **Hiring Process** | 4-step progressive timeline (*01 Understand, 02 Source, 03 Screen, 04 Interview & Hire*) + operational standards and client coordination. |
| `/why-us` | **Why PINCOF** | 5 grounded corporate advantage pillars + transparency pledge (no exaggerated claims or artificial guarantees). |
| `/experience` | **Selected Experience** | Brand wall cards (*Starbucks, Levi's, Peter England, Allen Solly, NATUF, Multi-Unit Retail*) + infinite marquee + prominent compliance disclaimers. |
| `/about` | **About PINCOF** | Company mission, recruitment philosophy, **Board of Directors** showcase, and **Core Recruitment Specialists** (8 dedicated practice leads). |
| `/request-hiring` | **Hiring Intake Form** | Full 2-column recruitment intake lead form with validation, URL pre-fill params, interactive success state, and direct intake desk contact. |
| `/faq` | **FAQ** | 8 comprehensive accordion questions with category badges and direct inquiry fallback. |
| `/contact` | **Contact** | Direct communication channels (*Phone, Email, WhatsApp, Corporate Office, Business Hours*) + quick inquiry message form. |
| `/disclaimer` | **Legal Disclaimer** | Official business positioning clarifying PINCOF's staffing scope, non-franchise seller policy, and trademark terms. |

---

## 🏪 Brand Hero Showcase & Storefront Photography

The homepage features a custom **Brand Hero Carousel** (`src/components/BrandHeroCarousel.jsx`) showcasing verified retail and hospitality environments:

### 1. Minimalist Slide Design
* Prominent official brand logo plaque (compact and centered on mobile).
* Crisp typography displaying the brand name.
* Single high-impact **"View Details"** action button opening the in-depth modal dossier.
* Clean visual presentation free from slider arrows or dot bars for an unobstructed photographic view.

### 2. High-Resolution Responsive Architecture
* Built with semantic HTML5 `<picture>` tags for tailored mobile and desktop viewing.
* **Mobile-Optimized Assets (`< 640px`)**:
  * **NATUF**: Dedicated vertical cafe storefront photography (`2048 × 3071`).
  * **Peter England**: Dedicated vertical Weddings showroom photography (`1548 × 2064`).
* **Desktop & Tablet Assets (`≥ 640px`)**:
  * **Starbucks**: Flagship cafe exterior (`2000 × 1333`).
  * **Levi's**: Flagship retail interior showroom (`2400 × 1603`).
  * **Peter England**: Wide flagship showroom display (`2400 × 1256`).
  * **NATUF**: Levantine cafe storefront (`2400 × 1412`).
  * **Multi-Unit Retail**: Modern architectural supermarket & retail environment (`2560 × 1920`).
  * **Allen Solly**: Premium lifestyle showroom (`2400 × 1600`).

### 3. Comprehensive Staffing Modal Dossier
* Detailed mandate title and operational scope of work.
* Delivered positions and roles.
* 4-step candidate screening and verification process.
* Measurable operational highlights (turnaround time, retention rate, compliance verification).

---

## 👥 Team & Leadership Architecture

The About page (`/about`) features a comprehensive team showcase split into two tiers, completely driven by data in `src/data/team.js`:

### 1. Executive Leadership / Board of Directors (`directorsData`)
* **Executive Leadership Cards**: 2-column responsive layout with commanding portrait imagery (`aspect-[3/4]`), executive status badges, years of industry leadership, detailed background bios, core domain focus tags, and direct LinkedIn / email touchpoints.
* **Leadership Members**:
  * **Nandini Bhargav** — *Founder & Managing Director* (5+ Years Industry Experience) — Strategic Leadership & Enterprise Partnerships.
  * **Nishant Saini** — *Director of Operations & Delivery* (4+ Years Operations Leadership) — Talent Screening & Fulfillment Infrastructure.

### 2. Core Recruitment & Operations Specialists (`coreTeamData`)
* **8 Practice Specialists**:
  1. **Naveen Sharma** — *Head of Retail & Fashion Staffing* (Retail Practice) — Store Managers, Supervisors & Cashiers.
  2. **Neha Pasricha** — *Lead - Hospitality & F&B Recruitment* (Hospitality & F&B) — Baristas, Service Crews & Kitchen Teams.
  3. **Vikram Joshi** — *Candidate Screening & Verification Lead* (Vetting & Quality) — Document Verification & Punctuality Screening.
  4. **Ananya Kaur** — *Client Engagement & Onboarding Manager* (Client Success) — Requirement Analysis & Fast Turnaround Support.
  5. **Rohan Gupta** — *Lead - Franchise & Multi-Store Hiring* (Franchise Expansion) — Store Rollouts, Cluster Staffing & Multi-Unit Teams.
  6. **Kavita Nair** — *Talent Lead - Supply Chain & Logistics* (Logistics & Ops) — Inventory Clerks, Store Pickers & Dispatch Teams.
  7. **Parth Jhalani** — *Manager - Corporate & Support Roles* (Corporate Staffing) — Customer Support, Floor Supervisors & Admin Staff.
  8. **Divya Rathi** — *Talent Retention & Compliance Specialist* (Retention & Care) — Joining Follow-ups, Shift Readiness & Retention Tracking.
* **Visual Hierarchy**: 4-column responsive grid on desktop with compact, high-density specialist avatars (`w-20 h-20` on mobile, `w-22 h-22` on desktop), floating category pills, verified active lead badges, and GPU-accelerated hover effects.

---

## 🎬 GSAP Animation System & Anti-Jitter Guidelines

To ensure stable 60FPS animations on low-power laptops and high-refresh displays alike:

1. **Lenis + GSAP Synchronization**:
   * Lenis smooth scrolling runs on `requestAnimationFrame` and notifies GSAP ScrollTrigger via `ScrollTrigger.update()`. Synchronized in `src/components/SmoothScroll.jsx`.
2. **Lag Smoothing**:
   * Configured with `gsap.ticker.lagSmoothing(1000, 16)` to prevent abrupt catch-up jumps when switching browser tabs or during heavy initial DOM parsing.
3. **`clearProps: 'all'` on ScrollTriggers**:
   * GSAP entrance animations clean up inline `transform` and `opacity` styles upon completion (`clearProps: 'all'`).
   * This ensures that CSS `:hover` states (`hover:-translate-y-1.5`, `hover:shadow-xl`) do not collide with GSAP's inline transforms.
4. **Zero-Jitter Pointer Movements**:
   * Mouse hover effects (magnetic buttons, card tilt) use direct ref manipulations or scoped CSS transforms rather than triggering React state updates on mousemove.
5. **Damped Parallax Scrubbing**:
   * Parallax image reveals (`RevealImage.jsx`) use `scrub: 0.8` rather than `scrub: true` to prevent mechanical step-jitter on trackpads and mice.
6. **Scoped Context Cleanup**:
   * All GSAP animations are wrapped in `gsap.context()` or cleaned up on unmount to prevent memory leaks and ghost ScrollTrigger instances across route transitions.

---

## 🔍 SEO, Favicon & Verification Architecture

### 1. Google Search-Compliant Favicon Hierarchy
* `/favicon.ico` — Multi-resolution binary ICO icon file placed at the web root.
* `/favicon-48x48.png` — 48×48px high-density PNG.
* `/favicon-96x96.png` — 96×96px high-density PNG.
* `/favicon-192x192.png` — 192×192px Android/Google icon.
* `/apple-touch-icon.png` — 180×180px iOS Safari touch icon.
* `/favicon.png` — Universal high-resolution brand icon.

### 2. Search Engine Verification & Indexing
* **Google Search Console**: Verified via root file `/googlea323e422ed6cf087.html`.
* **Canonical Hostname**: Canonical links explicitly point to primary URL `https://www.pincof.com/`.
* **Sitemap**: Auto-discovered at `/sitemap.xml` with all 12 page routes and `weekly` change frequencies.
* **Robots**: `public/robots.txt` allowing all legitimate crawlers.
* **Structured Data**: JSON-LD `EmploymentAgency` schema embedded directly in `index.html`.
* **Social Sharing**: Open Graph and Twitter Card tags linked to `https://www.pincof.com/og-image.png`.
* **Zero-Flash Preloader**: Inline CSS cover screen preventing white flashes before hydration.

---

## 📱 Device-Aware Smart Email Routing

* **Desktop (PC / Mac / Linux)**: Clicks on any email address or "Send Email" action dynamically open **Gmail Web Compose** (`https://mail.google.com/mail/?view=cm...`) in a new tab with recipient and subject pre-filled.
* **Mobile & Tablet (Android / iOS / iPadOS)**: Dynamically detects touch devices and launches the **native Gmail app / default email app** directly via the standard `mailto:` scheme, avoiding mobile Chrome redirection.
* **Centralized Dispatcher**: Powered by `src/utils/email.js` and integrated across the Footer, Contact Page, About Page, and Lead Forms.

---

## ⚖️ Positioning & Compliance Safeguards

* **Not a Franchise Seller**: Clearly emphasizes that PINCOF provides professional staffing and recruitment services to help businesses hire the right people. PINCOF does not sell franchises, broker businesses, or grant franchise licenses.
* **No Unauthorized Partnership Claims**: Brands supported (Starbucks, Levi's, Peter England, Allen Solly, NATUF, and others) are strictly presented under **"Selected Hiring Experience"** and **"Brands & Businesses We've Supported"** with clear disclaimers, avoiding terms like "Official Partner" or "Exclusive Recruiter".
* **No Job Portal Illusion**: The website is focused on B2B client acquisition for staffing support, not candidate job search listings.

---

## 📁 Repository Architecture

```text
PINCOF-GROUP/
├── public/
│   ├── apple-touch-icon.png         # 180x180 iOS touch icon
│   ├── favicon-48x48.png            # Google Search 48px square icon
│   ├── favicon-96x96.png            # Google Search 96px square icon
│   ├── favicon-192x192.png          # Google Search 192px square icon
│   ├── favicon.ico                  # Binary ICO icon at web root
│   ├── favicon.png                  # High-res universal icon
│   ├── googlea323e422ed6cf087.html  # Google Search Console verification token
│   ├── og-image.png                 # 1024x1024 Open Graph preview card
│   ├── robots.txt                   # Crawler directives & sitemap location
│   └── sitemap.xml                  # Canonical XML sitemap for search crawlers
│
├── src/
│   ├── assets/
│   │   ├── brands/                  # Official client/brand vector assets
│   │   │   ├── allen-solly.png
│   │   │   ├── levis.svg
│   │   │   ├── natuf.svg
│   │   │   ├── other-enterprises.svg
│   │   │   ├── peter-england.svg
│   │   │   ├── starbucks.svg
│   │   │   └── stores/              # High-resolution store photography
│   │   │       ├── allen-solly-store.jpg
│   │   │       ├── levis-store.jpg
│   │   │       ├── multi-unit-store.jpg
│   │   │       ├── natuf-store.jpg
│   │   │       ├── natuf-store-mobile.jpg
│   │   │       ├── peter-england-store.jpg
│   │   │       ├── peter-england-store-mobile.jpg
│   │   │       └── starbucks-store.jpg
│   │   ├── pincof-logo.png          # Main corporate logo (Footer & Preloader)
│   │   └── pincof-logo-transparent.png # Transparent navbar logo
│   │
│   ├── components/
│   │   ├── BrandHeroCarousel.jsx    # Responsive brand carousel with store photos & modal
│   │   ├── BrandLogo.jsx            # Official brand logo component with fallback
│   │   ├── CTASection.jsx           # Reusable high-impact call-to-action banner
│   │   ├── CustomCursor.jsx         # Custom magnetic follower cursor
│   │   ├── CustomSelect.jsx         # Accessible custom select dropdown
│   │   ├── ExperienceStrip.jsx      # Infinite brand ticker marquee
│   │   ├── FAQ.jsx                  # Interactive accordion component
│   │   ├── Footer.jsx               # Dark charcoal persistent footer
│   │   ├── Hero.jsx                 # Editorial hero with staggered GSAP entry
│   │   ├── HiringForm.jsx           # 2-column recruitment intake form
│   │   ├── IndustryCard.jsx         # Interactive industry sector card
│   │   ├── Layout.jsx               # Global layout wrapper
│   │   ├── MagneticButton.jsx       # Physics-based magnetic attraction button
│   │   ├── Navbar.jsx               # Fixed navigation with kinetic mobile drawer
│   │   ├── PageHeader.jsx           # Reusable breadcrumb editorial header
│   │   ├── PageTransition.jsx       # Route fade transition wrapper
│   │   ├── Preloader.jsx            # Interactive brand preloader sequence
│   │   ├── QuickHireModal.jsx       # Fast pop-up hiring intake dialog
│   │   ├── RevealImage.jsx          # ScrollTriggered damped parallax image wrapper
│   │   ├── ScrollToTop.jsx          # Window scroll reset utility
│   │   ├── ServiceCard.jsx          # Service tier presentation card
│   │   ├── SmoothScroll.jsx         # Lenis smooth scrolling orchestrator
│   │   ├── Toaster.jsx              # Lightweight global toast notification renderer
│   │   └── TopLoadingBar.jsx        # Route change loading progress bar
│   │
│   ├── data/
│   │   ├── brands.js                # Supported brands, store photos, and staffing dossiers
│   │   ├── contact.js               # Centralized phone, email, WhatsApp, address
│   │   ├── faq.js                   # FAQ items, answers, and category tags
│   │   ├── images.js                # Curated high-res editorial photography
│   │   ├── industries.js            # 8 industry sector breakdowns
│   │   ├── process.js               # 4-stage hiring delivery timeline
│   │   ├── roles.js                 # Categorized talent roles matrix
│   │   ├── services.js              # 8 recruitment solutions
│   │   ├── team.js                  # Directors & 8 Core Team specialists
│   │   └── whyUs.js                 # 5 grounded value propositions
│   │
│   ├── pages/
│   │   ├── AboutPage.jsx            # /about
│   │   ├── ContactPage.jsx          # /contact
│   │   ├── DisclaimerPage.jsx       # /disclaimer
│   │   ├── ExperiencePage.jsx       # /experience
│   │   ├── FAQPage.jsx              # /faq
│   │   ├── HiringRequestPage.jsx    # /request-hiring
│   │   ├── Home.jsx                 # /
│   │   ├── IndustriesPage.jsx       # /industries
│   │   ├── ProcessPage.jsx          # /process
│   │   ├── RolesPage.jsx            # /roles
│   │   ├── ServicesPage.jsx         # /services
│   │   └── WhyUsPage.jsx            # /why-us
│   │
│   ├── utils/
│   │   ├── email.js                 # Smart device-aware email dispatcher
│   │   └── toast.js                 # Zero-dependency reactive toast event bus
│   │
│   ├── App.jsx                      # App root with Route definitions
│   ├── index.css                    # Tailwind directives, animations & custom fonts
│   └── main.jsx                     # Vite entry point with StrictMode
│
├── .gitignore                       # Git exclusion rules
├── .oxlintrc.json                   # Oxlint configuration
├── index.html                       # HTML shell, preloader, and metadata
├── package.json                     # Scripts and dependencies
├── postcss.config.js                # PostCSS configuration
├── README.md                        # Project documentation
├── tailwind.config.js               # Tailwind design system configuration
├── vercel.json                      # Vercel deployment rewrites & headers
└── vite.config.js                   # Vite configuration
```

---

## 🛠️ Content & Configuration Updates

All website content is cleanly separated from UI components and stored in `src/data/`:

| What to Update | Source File |
| :--- | :--- |
| **Contact Info (Phone, Email, Office, WhatsApp)** | `src/data/contact.js` |
| **Board of Directors & Core Team Members** | `src/data/team.js` |
| **Recruitment Services** | `src/data/services.js` |
| **Industry Sectors** | `src/data/industries.js` |
| **Roles & Categories** | `src/data/roles.js` |
| **Hiring Process Steps** | `src/data/process.js` |
| **Supported Brands, Store Photos & Dossiers** | `src/data/brands.js` |
| **FAQ Questions & Answers** | `src/data/faq.js` |
| **Corporate Value Pillars** | `src/data/whyUs.js` |
| **Editorial Photography & Banners** | `src/data/images.js` |

---

## 📜 License & Compliance

All trademarks, brand names, and company logos depicted on this website are the property of their respective owners. Their inclusion represents past recruitment and staffing engagements and does not imply official partnership, endorsement, or franchise broker status.
