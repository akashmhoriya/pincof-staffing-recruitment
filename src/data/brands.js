/**
 * Selected Hiring Experience & Brand References
 * 
 * IMPORTANT:
 * PINCOF is a staffing & recruitment firm, not a franchise seller or exclusive partner.
 * These brands represent hiring and staffing requirements supported, without claiming
 * official endorsement, ownership, or exclusive partnership.
 */

import starbucksStoreImg from '../assets/brands/stores/starbucks-store.jpg';
import levisStoreImg from '../assets/brands/stores/levis-store.jpg';
import peterEnglandStoreImg from '../assets/brands/stores/peter-england-store.jpg';
import peterEnglandStoreMobileImg from '../assets/brands/stores/peter-england-store-mobile.jpg';
import allenSollyStoreImg from '../assets/brands/stores/allen-solly-store.jpg';
import natufStoreImg from '../assets/brands/stores/natuf-store.jpg';
import natufStoreMobileImg from '../assets/brands/stores/natuf-store-mobile.jpg';
import multiUnitStoreImg from '../assets/brands/stores/multi-unit-store.jpg';

export const brandExperienceData = {
  sectionTitle: "Brands & Businesses We've Supported",
  sectionSubtitle: "Selected Hiring Experience",
  sectionDescription: "Our experience includes fulfilling hiring requirements across multiple consumer brands, franchise businesses, and retail operations.",
  disclaimer: "Brand names shown represent relevant hiring experience and do not necessarily indicate current affiliation, endorsement, or authorization.",
  brands: [
    {
      id: "levis",
      name: "Levi's",
      category: "Fashion & Lifestyle Retail",
      accentColor: "#C41230",
      image: levisStoreImg,
      tagline: "Apparel & Premium Retail Outlets",
      rolesFilled: "Store Staff, Sales Stylists, Cashiers",
      rolesList: [
        "Fashion Sales Stylists",
        "Assistant Store Managers",
        "Cashiers & Billing Leads",
        "Stockroom Merchandisers",
        "Retail Customer Associates"
      ],
      shortDescription: "Recruiting fashion-forward sales stylists, floor managers, and cashiers for high-traffic retail flagship stores and mall outlets.",
      fullDescription: "For global retail apparel leaders like Levi's, customer engagement and brand representation are paramount. PINCOF recruits retail professionals who understand fit-consulting, merchandise presentation, retail KPIs, and exceptional in-store clienteling.",
      metrics: [
        { label: "Sourcing Speed", value: "Rapid 48-72h" },
        { label: "Retention Rate", value: "94% 6-Month Bench" },
        { label: "Store Locations", value: "Flagship & Franchise" },
        { label: "Audited Profiles", value: "100% Screened" }
      ],
      focusAreas: ["Apparel Styling", "POS Billing", "Inventory Replenishment", "Customer Retention"],
      locationsSupported: "Jaipur Flagships, Franchise Outlets & Shopping Centers",
      engagementType: "Retail Store Staffing & Seasonal Surge",
      workDetails: {
        mandateTitle: "Flagship Retail Store & Showroom Talent Sourcing",
        scopeOfWork: "Delivering end-to-end recruitment for exclusive brand outlets (EBOs) and retail mall flagships, supplying fashion stylists and customer experience staff equipped with denim fit knowledge.",
        rolesDelivered: [
          { role: "Fashion Sales Stylists", details: "Product consultation, fit-guidance, upsell/cross-sell, and premium customer service." },
          { role: "Assistant Store Managers", details: "Daily store opening/closing, sales KPI tracking, and floor team supervision." },
          { role: "Billing Desk In-Charges", details: "Quick scan billing, returns processing, loyalty program enrollment." },
          { role: "Visual Merchandising Assistants", details: "Floor planogram maintenance, display styling, and inventory restocking." }
        ],
        hiringProcess: [
          "1. Fashion Acumen & Personality Screening",
          "2. Retail Math & POS Competency Check",
          "3. Customer Engagement Simulation",
          "4. Comprehensive Documentation & Background Audit"
        ],
        operationalHighlights: [
          "Surge readiness: Successfully mobilized staffing for festive & seasonal sales surges.",
          "High sales conversion: Recruited associates trained in customer engagement and cross-selling.",
          "Low shrinkage: Rigorously vetted stockroom staff ensuring zero inventory discrepancies.",
          "Multi-store coverage: Deployed frontline talent across regional flagship outlets."
        ],
        storeDeployment: "High-street retail flagships, exclusive shopping mall outlets, and premium lifestyle centers."
      }
    },
    {
      id: "starbucks",
      name: "Starbucks",
      category: "Food & Specialty Cafe",
      accentColor: "#00704A",
      image: starbucksStoreImg,
      tagline: "Cafe & Beverage Frontline Operations",
      rolesFilled: "Baristas, Shift Supervisors, Cafe Staff",
      rolesList: [
        "Specialty Baristas",
        "Shift Supervisors",
        "Cafe Operations Associates",
        "POS Cashiers & Billing",
        "Inventory & Stock Keepers"
      ],
      shortDescription: "Sourcing service-oriented cafe staff, trained baristas, and floor supervisors with strict adherence to multinational beverage standards.",
      fullDescription: "PINCOF has supported high-demand food and beverage staffing requirements for premier cafe operations like Starbucks. We focus on recruiting candidates with strong customer etiquette, quick POS navigation skills, and the stamina to deliver quality hospitality during high-volume peak footfall hours.",
      metrics: [
        { label: "Turnaround SLA", value: "< 72 Hours" },
        { label: "Vetting Benchmark", value: "3-Stage Interview" },
        { label: "Store Formats", value: "High-Street & Malls" },
        { label: "Compliance Pass", value: "100% Screened" }
      ],
      focusAreas: ["Customer Etiquette", "Beverage Handling", "Store Cleanliness", "POS Speed"],
      locationsSupported: "Jaipur, Delhi-NCR & Key North Indian Outlets",
      engagementType: "Frontline Staffing & Shift Operations",
      workDetails: {
        mandateTitle: "Cafe Operations & Hospitality Talent Sourcing",
        scopeOfWork: "Fulfilling frontline retail and food & beverage staffing requirements for premier cafe environments, ensuring adherence to strict brand grooming, hygiene, and guest service standards.",
        rolesDelivered: [
          { role: "Specialty Baristas", details: "Handcrafted beverage preparation, customer greeting etiquette, and hygiene adherence." },
          { role: "Shift Supervisors", details: "Floor coordination, opening/closing cash reconciliation, and crew shift roster management." },
          { role: "Store Cashiers & POS Operators", details: "High-speed order billing, payment gateway handling, and queue management." },
          { role: "Stock & Inventory Leads", details: "Perishable inventory tracking, stock rotation (FIFO), and wastage minimization." }
        ],
        hiringProcess: [
          "1. Hospitality Etiquette & Communication Screening",
          "2. Physical Interview & Background Verification",
          "3. Stress-Handling & Peak Footfall Role-Play Assessment",
          "4. Immediate Store Floor Onboarding & Briefing"
        ],
        operationalHighlights: [
          "Rapid turnaround: Shortlists provided within 48 to 72 hours of store requirement notice.",
          "High retention: 93% candidate retention across key retail quarters.",
          "Full compliance: 100% identity and police background verified profiles.",
          "Scalable crew: Supplied backup shift personnel to prevent service interruptions."
        ],
        storeDeployment: "High-traffic mall outlets, prime commercial high-street locations, and corporate food court setups."
      }
    },
    {
      id: "peter-england",
      name: "Peter England",
      category: "Men's Apparel & Retail",
      accentColor: "#14284B",
      image: peterEnglandStoreImg,
      mobileImage: peterEnglandStoreMobileImg,
      tagline: "Retail Store Teams & Floor Operations",
      rolesFilled: "Retail Associates, Store Executives",
      rolesList: [
        "Retail Sales Associates",
        "Senior Store Executives",
        "Cash Desk Operators",
        "Inventory & Stock Assistants",
        "Store Floor Supervisors"
      ],
      shortDescription: "Deploying energetic showroom sales executives, garment consultants, and store inventory coordinators.",
      fullDescription: "Supporting retail store operations for prominent menswear brands like Peter England requires team members with sharp communication, grooming standards, garment knowledge, and sales drive. PINCOF delivers dependable retail teams ready to perform from day one.",
      metrics: [
        { label: "Placement Pipeline", value: "Active Pre-Vetted Pool" },
        { label: "Onboarding Ease", value: "Immediate Deploy" },
        { label: "Staffing Depth", value: "Multi-Store Chains" },
        { label: "Skill Verification", value: "Sales & Math Audited" }
      ],
      focusAreas: ["Menswear Consulting", "Upselling & Cross-selling", "Stock Handling", "Store Auditing"],
      locationsSupported: "Rajasthan, Tier 1 & Tier 2 Retail Hubs",
      engagementType: "Permanent Showroom Staffing",
      workDetails: {
        mandateTitle: "Menswear Showroom Staffing & Outlet Operations",
        scopeOfWork: "Providing showroom sales associates, store floor executives, and inventory handlers for multi-city retail franchise networks and high-street outlets.",
        rolesDelivered: [
          { role: "Retail Showroom Associates", details: "Formal wear and casual menswear sales, size measurements, and customer consultation." },
          { role: "Senior Store Executives", details: "Store floor management, daily target monitoring, and cashiering oversight." },
          { role: "Cash Desk Operators", details: "POS checkout, daily balance tally, and electronic invoice generation." },
          { role: "Stock & Warehouse Coordinators", details: "Shipment receiving, barcode tagging, and organized backroom storage." }
        ],
        hiringProcess: [
          "1. Grooming & Retail Communication Screening",
          "2. Garment Sizing & Fabric Knowledge Assessment",
          "3. Background Verification & Document Audit",
          "4. Quick Turnaround Showroom Deployment"
        ],
        operationalHighlights: [
          "Pre-vetted candidate bench: Ready candidates available for immediate deployment within 48h.",
          "Consistent grooming standards: Staff maintained high presentation standards.",
          "Target achievement: Recruited sales executives consistently achieved monthly store sales quotas.",
          "Tier 2 & Tier 3 reach: Sourced localized candidates with local language fluency."
        ],
        storeDeployment: "High-street retail outlets, district commercial markets, and regional shopping arcades."
      }
    },
    {
      id: "allen-solly",
      name: "Allen Solly",
      category: "Apparel & Lifestyle",
      accentColor: "#D97706",
      image: allenSollyStoreImg,
      tagline: "Store Operations & Brand Experience",
      rolesFilled: "Store Managers, Fashion Consultants",
      rolesList: [
        "Store Managers",
        "Fashion Consultants",
        "Customer Experience Execs",
        "Billing & POS Operators",
        "Visual Merchandising Leads"
      ],
      shortDescription: "Fulfilling specialized retail floor staffing, assistant managers, and stylish brand advisors for lifestyle retail stores.",
      fullDescription: "Allen Solly's vibrant work-casual aesthetic demands well-spoken, charismatic showroom personnel who elevate the shopper experience. We screen candidates for modern retail etiquette, digital billing competency, and brand enthusiasm.",
      metrics: [
        { label: "Fulfillment SLA", value: "Under 5 Days" },
        { label: "Screening Standard", value: "Role-Play Verified" },
        { label: "Outlets Covered", value: "Exclusive Brand Outlets" },
        { label: "Background Checks", value: "ID & Police Verified" }
      ],
      focusAreas: ["Customer Experience", "Fashion Advisory", "EBO Operations", "Daily Sales Reporting"],
      locationsSupported: "Metro & Emerging Commercial Centers",
      engagementType: "Store Staffing & EBO Operations",
      workDetails: {
        mandateTitle: "Lifestyle Retail & EBO Operations Recruitment",
        scopeOfWork: "Recruiting fashionable, energetic showroom staff and leadership for Exclusive Brand Outlets (EBOs), emphasizing smart-casual styling advisory and customer delight.",
        rolesDelivered: [
          { role: "Store Managers & Leads", details: "Complete store P&L monitoring, staff scheduling, customer issue resolution." },
          { role: "Fashion Style Advisors", details: "Smart-casual styling, color coordination tips, fitting room assistance." },
          { role: "Billing & POS Specialists", details: "Quick checkout processing, CRM data entry, and payment reconciliations." },
          { role: "Visual Merchandisers", details: "Mannequin styling, display lighting checks, and promotional banner placement." }
        ],
        hiringProcess: [
          "1. Fashion Sensibility & Style Awareness Interview",
          "2. In-Person Communication & Etiquette Check",
          "3. Problem-Solving & Customer Service Assessment",
          "4. Final Employer In-Store Review & Placement"
        ],
        operationalHighlights: [
          "Leadership placement: Successfully recruited experienced assistant store managers.",
          "Rapid staffing: Fulfilled store launch hiring mandates in under 5 business days.",
          "Zero-shrinkage compliance: All staff vetted through ID and criminal background checks.",
          "Repeat partnership: Consistently chosen for store expansion staffing in North India."
        ],
        storeDeployment: "Exclusive Brand Outlets (EBOs), premium shopping malls, and lifestyle avenues."
      }
    },
    {
      id: "natuf",
      name: "NATUF",
      category: "Specialty Retail & Food",
      accentColor: "#059669",
      image: natufStoreImg,
      mobileImage: natufStoreMobileImg,
      tagline: "Specialty Retail & Food Operations",
      rolesFilled: "Customer Service, Retail Staff",
      rolesList: [
        "Specialty Retail Associates",
        "Food Counter Specialists",
        "Store Attendants",
        "Inventory & Expiry Controllers",
        "Customer Relationship Execs"
      ],
      shortDescription: "Providing customer-focused retail specialists, food presentation staff, and outlet attendants for boutique specialty stores.",
      fullDescription: "Specialty and boutique food & retail concepts require staff with deep product familiarity, high hygiene compliance, and personalized customer care. PINCOF supplies trained talent equipped to represent distinctive specialty brands.",
      metrics: [
        { label: "Product Training", value: "Fast Adaptability" },
        { label: "Hygiene Compliance", value: "FSSAI Aware" },
        { label: "Customer Rating", value: "High Feedback Score" },
        { label: "Ramp-up Capacity", value: "Single & Multi-Outlet" }
      ],
      focusAreas: ["Specialty Product Guidance", "Food Safety Hygiene", "Inventory Rotation", "Warm Hospitality"],
      locationsSupported: "Premium High-Street & Destination Retail",
      engagementType: "Specialty Staffing & Counter Management",
      workDetails: {
        mandateTitle: "Boutique Specialty Retail & Counter Staffing",
        scopeOfWork: "Supplying dedicated customer service staff, counter attendants, and inventory controllers for specialty food and gourmet retail stores.",
        rolesDelivered: [
          { role: "Specialty Counter Associates", details: "Product sampling, gourmet storytelling, and customer relationship building." },
          { role: "Outlet Attendants", details: "Store cleanliness, shelf presentation, product expiry date audits." },
          { role: "Inventory & Stock Controllers", details: "Stock intake, temperature checking, and hygiene compliance." },
          { role: "Customer Service Reps", details: "Customer feedback collection, loyalty rewards, phone order taking." }
        ],
        hiringProcess: [
          "1. Food Hygiene & Safety Protocol Screening",
          "2. Customer Warmth & Hospitality Assessment",
          "3. Background Verification & Medical Fitness Verification",
          "4. On-site Outlet Placement"
        ],
        operationalHighlights: [
          "Specialized staff: Recruited candidates with high culinary and hygiene standards.",
          "Product mastery: Selected personnel capable of learning product nuances quickly.",
          "Client satisfaction: Maintained continuous 100% staffing fulfillment with zero store outages.",
          "Punctuality & discipline: Verified attendance tracking with 96%+ on-time shifts."
        ],
        storeDeployment: "Gourmet destination outlets, upscale shopping districts, and boutique specialty counters."
      }
    },
    {
      id: "other-enterprises",
      name: "Multi-Unit Retail",
      category: "Franchise & Outlets",
      accentColor: "#A6192E",
      image: multiUnitStoreImg,
      tagline: "Franchise & Outlet Locations",
      rolesFilled: "Operations, Kitchen, Front-of-House",
      rolesList: [
        "QSR Crew Members",
        "Kitchen Assistants & Line Cooks",
        "Front-of-House Executives",
        "Multi-Store Supervisors",
        "Warehouse & Dispatch Handlers"
      ],
      shortDescription: "End-to-end recruitment support across independent food chains, quick-service restaurants (QSR), and multi-outlet retail enterprises.",
      fullDescription: "Beyond marquee national brands, PINCOF actively powers growing independent franchises, QSR operators, local retail chains, and hospitality ventures. We provide turnkey talent solutions from ground-level crew to store leadership.",
      metrics: [
        { label: "Active Roles", value: "50+ Positions/Mo" },
        { label: "Flexibility", value: "Permanent & Shift-Based" },
        { label: "Candidate Pipeline", value: "1,200+ Verified CVs" },
        { label: "Fulfillment Rate", value: "98.5% Client Satisfaction" }
      ],
      focusAreas: ["Speed of Service", "Franchise SOP Adherence", "Team Coordination", "Multi-Shift Flexibility"],
      locationsSupported: "Jaipur & Across Rajasthan Regions",
      engagementType: "Turnkey Multi-Store Hiring",
      workDetails: {
        mandateTitle: "Turnkey Multi-Unit Franchise & QSR Staffing",
        scopeOfWork: "Managing comprehensive hiring pipelines for independent food franchises, retail store chains, and quick-service restaurant networks across multi-store expansions.",
        rolesDelivered: [
          { role: "QSR Crew Members", details: "Counter service, kitchen prep, order assembly, POS billing." },
          { role: "Kitchen Line Assistants", details: "Food prep, recipe adherence, kitchen hygiene, dishwashing." },
          { role: "Multi-Outlet Supervisors", details: "Roving store supervision, quality control, cashier cash audits." },
          { role: "Dispatch & Logistics Staff", details: "Delivery driver coordination, parcel packing, inventory dispatch." }
        ],
        hiringProcess: [
          "1. Mass Sourcing & Walk-in Recruitment Drives",
          "2. Shift Flexibility & Reliability Auditing",
          "3. Background Check & Identity Verification",
          "4. Immediate Multi-Store Dispatch"
        ],
        operationalHighlights: [
          "High volume capacity: Able to staff 30+ crew members for new outlet openings in 7 days.",
          "Shift reliability: Zero-loss shift coverage with pre-scheduled backup rosters.",
          "Cost efficiency: Reduced client recruitment cost per hire by over 40%.",
          "Local community sourcing: Recruited near-store candidates ensuring low transport absenteeism."
        ],
        storeDeployment: "QSR food outlets, multi-city franchise branches, cloud kitchens, and retail store chains."
      }
    }
  ]
};
