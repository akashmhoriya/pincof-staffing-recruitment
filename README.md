# PINCOF — Staffing & Recruitment Solutions

A modern, high-performance, fully responsive **React.js + Vite + Tailwind CSS + GSAP + React Router** multi-page website for **PINCOF**, built with a light, clean, premium corporate aesthetic.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Production Build & Preview
```bash
npm run build
npm run preview
```

---

## 🗺️ Multi-Page Route Structure

Every section lives on its own dedicated page with a shared **Navbar**, **Footer**, **Quick Hire Modal**, and **Mobile Sticky CTA**:

| Route | Page | Purpose & Content |
| :--- | :--- | :--- |
| `/` | **Home** | Editorial Hero, Selected Hiring Experience Marquee, Core Services Highlights, Industry Focus, Why Choose Us, High-impact CTA banner, and Lead Form. |
| `/services` | **Services** | Full 8 recruitment service cards (*Retail, Franchise, F&B, Bulk, Sales, Store & Ops, Management, Customized*) + Delivery methodology breakdown + Direct hiring CTA. |
| `/industries` | **Industries** | 2×4 responsive grid across 8 industries (*F&B, Fashion, Retail, Grocery, Lifestyle, Franchise, Hospitality, Emerging*) + Sector-specific insights. |
| `/roles` | **Roles We Fill** | Categorized role matrix (*Store Leadership, Front of House, F&B, Operations*) with interactive filters + non-job-portal compliance disclaimer. |
| `/process` | **Hiring Process** | 4-step progressive timeline (*01 Understand, 02 Source, 03 Screen, 04 Interview & Hire*) + operational standards and client coordination. |
| `/why-us` | **Why PINCOF** | 5 grounded corporate advantage pillars + transparency pledge (no exaggerated claims or artificial guarantees). |
| `/experience` | **Selected Experience** | Brand wall cards (*Starbucks, Levi's, Peter England, Allen Solly, NATUF, Other Businesses*) + infinite marquee + prominent compliance disclaimers. |
| `/about` | **About PINCOF** | Concise company overview, recruitment philosophy, team & workplace photography, and core operational values. |
| `/request-hiring`| **Hiring Intake Form** | Full 2-column recruitment intake lead form with validation, URL pre-fill params, interactive success state, and intake desk contact. |
| `/faq` | **FAQ** | 8 comprehensive accordion questions with category badges and direct inquiry fallback. |
| `/contact` | **Contact** | Direct communication channels (*Phone, Email, WhatsApp, Corporate Office, Business Hours*) + quick inquiry message form. |
| `/disclaimer` | **Legal Disclaimer** | Official business positioning clarifying PINCOF's staffing scope, non-franchise seller policy, and trademark terms. |

---

## 🎨 Brand Identity & Design System

* **Theme**: Light, clean, corporate, premium editorial aesthetic.
* **Palette**: Derived directly from the supplied PINCOF logo:
  * **Brand Crimson**: `#A6192E` / `#871324` (Buttons, highlights, badges)
  * **Brand Deep Navy**: `#0F2B5C` / `#091A38` (Secondary accents & contrast)
  * **Backgrounds**: Pure White (`#FFFFFF`) and Soft Slate (`#F8FAFC`)
  * **Typography**: Charcoal (`#0F172A`) with Plus Jakarta Sans and Inter
  * **Footer**: Refined dark charcoal (`#0B1120`) persistent across all pages

---

## ⚖️ Positioning & Compliance Safeguards

* **Not a Franchise Seller**: Clearly emphasizes that PINCOF provides professional staffing and recruitment services to help businesses hire the right people. PINCOF does not sell franchises, broker businesses, or grant franchise licenses.
* **No Unauthorized Partnership Claims**: Brands supported (Starbucks, Levi's, Peter England, Allen Solly, NATUF, and others) are strictly presented under **"Selected Hiring Experience"** and **"Brands & Businesses We've Supported"** with clear disclaimers, avoiding terms like "Official Partner" or "Exclusive Recruiter".
* **No Job Portal Illusion**: The website is focused on B2B client acquisition for staffing support, not candidate job search listings.

---

## 📁 Architecture Overview

```text
PINCOF-GROUP/
├── index.html                  # SEO meta tags, Google Fonts, Favicon
├── tailwind.config.js          # Brand colors, typography, animations
├── vite.config.js
├── src/
│   ├── assets/
│   │   └── pincof-logo.png     # Supplied PINCOF logo
│   ├── data/
│   │   ├── brands.js           # Supported brands & disclaimers
│   │   ├── services.js         # 8 recruitment solutions
│   │   ├── industries.js       # 8 industry sectors
│   │   ├── roles.js            # Roles filled by category
│   │   ├── process.js          # 4-step hiring process
│   │   ├── whyUs.js            # 5 grounded value propositions
│   │   ├── faq.js              # 8 comprehensive FAQs
│   │   ├── contact.js          # Editable contact info (phone, email, office)
│   │   └── images.js           # Curated bright editorial photography
│   ├── components/
│   │   ├── Layout.jsx          # Persistent layout with Navbar, Footer, Modal, ScrollToTop
│   │   ├── Navbar.jsx          # Multi-page header with active route highlighting
│   │   ├── Footer.jsx          # Refined dark charcoal footer persistent across all pages
│   │   ├── PageHeader.jsx      # Reusable light-theme editorial header with breadcrumbs
│   │   ├── ScrollToTop.jsx     # Resets scroll position on route change
│   │   ├── Hero.jsx            # 2-col editorial hero with GSAP
│   │   ├── ExperienceStrip.jsx # Infinite brand ticker marquee
│   │   ├── ServiceCard.jsx     # Reusable service card
│   │   ├── IndustryCard.jsx    # Reusable industry card
│   │   ├── CTASection.jsx      # Light-theme high-impact CTA
│   │   ├── HiringForm.jsx      # 2-column intake form
│   │   ├── FAQ.jsx             # 8-question accordion
│   │   └── QuickHireModal.jsx  # Rapid intake modal accessible across all pages
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── ServicesPage.jsx    # /services
│   │   ├── IndustriesPage.jsx  # /industries
│   │   ├── RolesPage.jsx       # /roles
│   │   ├── ProcessPage.jsx     # /process
│   │   ├── WhyUsPage.jsx       # /why-us
│   │   ├── ExperiencePage.jsx  # /experience
│   │   ├── AboutPage.jsx       # /about
│   │   ├── HiringRequestPage.jsx # /request-hiring
│   │   ├── FAQPage.jsx         # /faq
│   │   ├── ContactPage.jsx     # /contact
│   │   └── DisclaimerPage.jsx  # /disclaimer
│   ├── App.jsx                 # Multi-page Router configuration
│   ├── index.css
│   └── main.jsx
```

---

## 📞 Updating Contact Details

All contact information is centralized in:
`src/data/contact.js`

Edit phone numbers, email addresses, office locations, or WhatsApp links in one single file.
