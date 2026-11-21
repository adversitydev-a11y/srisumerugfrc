import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const baseHtmlPath = path.join(distDir, "index.html");

const SITE_URL = "https://srisumeru.com";

const ROUTES = [
  {
    path: "about-us",
    canonical: `${SITE_URL}/about-us`,
    title: "About SRI SUMERU GFRC & FRP | Architectural Facade Manufacturer",
    description:
      "Sri Sumeru Realty's GFRC & FRP Department specializes in architectural elevation, façade cladding, decorative elements, and customized fabrication for residential, commercial, and institutional projects.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "About Us", item: `${SITE_URL}/about-us` },
    ],
  },
  {
    path: "gfrc-products",
    canonical: `${SITE_URL}/gfrc-products`,
    title: "GFRC Architectural Products & Cladding Panels | SRI SUMERU",
    description:
      "Explore our range of high-performance GFRC architectural products, including facade cladding panels, decorative jalis, columns, cornices, balusters, and domes.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "GFRC Products", item: `${SITE_URL}/gfrc-products` },
    ],
  },
  {
    path: "frp-products",
    canonical: `${SITE_URL}/frp-products`,
    title: "FRP Architectural Products & Mouldings | SRI SUMERU",
    description:
      "Discover lightweight FRP architectural products, cornices, domes, planters, and customized composite elements engineered for weather resistance and high-elevation installation.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "FRP Products", item: `${SITE_URL}/frp-products` },
    ],
  },
  {
    path: "projects",
    canonical: `${SITE_URL}/projects`,
    title: "GFRC Projects Portfolio & Case Studies | SRI SUMERU",
    description:
      "View our portfolio of executed GFRC and FRP facade cladding, decorative screens, restoration domes, and commercial projects across Karnataka and India.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Projects", item: `${SITE_URL}/projects` },
    ],
  },
  {
    path: "projects/purva-aerocity",
    canonical: `${SITE_URL}/projects/purva-aerocity`,
    title: "Purva Aerocity Commercial Project | Sri Sumeru GFRC & FRP",
    description:
      "Explore Purva Aerocity's contemporary commercial architecture, featuring glazed elevations, distinctive façade detailing, and coordinated exterior finishes.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Projects", item: `${SITE_URL}/projects` },
      { name: "Purva Aerocity", item: `${SITE_URL}/projects/purva-aerocity` },
    ],
  },
  {
    path: "projects/jst-param",
    canonical: `${SITE_URL}/projects/jst-param`,
    title: "JST Param Ongoing Project | Sri Sumeru GFRC & FRP",
    description:
      "Explore JST Param's ongoing contemporary high-rise façade project, featuring expansive glazed elevations, vertical accents, and coordinated exterior finishes.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Projects", item: `${SITE_URL}/projects` },
      { name: "JST Param", item: `${SITE_URL}/projects/jst-param` },
    ],
  },
  {
    path: "projects/bougainville",
    canonical: `${SITE_URL}/projects/bougainville`,
    title: "Parva Bougainville Architectural Project | Sri Sumeru GFRC & FRP",
    description:
      "Explore the Parva Bougainville architectural project featuring decorative arches, classical columns, ornamental mouldings, and refined exterior detailing.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Projects", item: `${SITE_URL}/projects` },
      { name: "Parva Bougainville", item: `${SITE_URL}/projects/bougainville` },
    ],
  },
  {
    path: "projects/harivishram",
    canonical: `${SITE_URL}/projects/harivishram`,
    title: "Harivishram Residential Project | Sri Sumeru GFRC & FRP",
    description:
      "Explore the Harivishram residential project featuring contemporary apartment architecture, vertical façade detailing, coordinated balconies, and refined exterior finishes.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Projects", item: `${SITE_URL}/projects` },
      { name: "Harivishram", item: `${SITE_URL}/projects/harivishram` },
    ],
  },
  {
    path: "projects/kaivalya",
    canonical: `${SITE_URL}/projects/kaivalya`,
    title: "Kaivalya Architectural Project | Sri Sumeru GFRC & FRP",
    description:
      "Explore Kaivalya, featuring ornate architectural detailing, decorative columns, refined exterior finishes, and elegant traditional-inspired design.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Projects", item: `${SITE_URL}/projects` },
      { name: "Kaivalya", item: `${SITE_URL}/projects/kaivalya` },
    ],
  },
  {
    path: "projects/basava-hall",
    canonical: `${SITE_URL}/projects/basava-hall`,
    title: "Basava Hall Architectural Project | Sri Sumeru GFRC & FRP",
    description:
      "Explore Basava Hall, featuring traditional architectural detailing, decorative columns, refined roof elements, and a welcoming veranda design.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Projects", item: `${SITE_URL}/projects` },
      { name: "Basava Hall", item: `${SITE_URL}/projects/basava-hall` },
    ],
  },
  {
    path: "projects/secretariat-office",
    canonical: `${SITE_URL}/projects/secretariat-office`,
    title: "Secretariat Office Project | Sri Sumeru GFRC & FRP",
    description:
      "Explore the Secretariat Office architectural project featuring an ornamental domed pavilion, decorative columns, and refined architectural detailing.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Projects", item: `${SITE_URL}/projects` },
      { name: "Secretariat Office", item: `${SITE_URL}/projects/secretariat-office` },
    ],
  },
  {
    path: "project-details",
    canonical: `${SITE_URL}/project-details`,
    title: "Dhyan Mandir Architectural Project | Sri Sumeru GFRC & FRP",
    description:
      "Explore the Dhyan Mandir architectural project, featuring ornate entrance detailing, decorative columns, domes, and a refined architectural composition.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Projects", item: `${SITE_URL}/projects` },
      { name: "Dhyan Mandir", item: `${SITE_URL}/project-details` },
    ],
  },
  {
    path: "projects/dhyan-mandir",
    canonical: `${SITE_URL}/projects/dhyan-mandir`,
    title: "Dhyan Mandir Architectural Project | Sri Sumeru GFRC & FRP",
    description:
      "Explore the Dhyan Mandir architectural project, featuring ornate entrance detailing, decorative columns, domes, and a refined architectural composition.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Projects", item: `${SITE_URL}/projects` },
      { name: "Dhyan Mandir", item: `${SITE_URL}/projects/dhyan-mandir` },
    ],
  },
  {
    path: "projects/shankara",
    canonical: `${SITE_URL}/projects/shankara`,
    title: "Shankara Residential Project | Sri Sumeru GFRC & FRP",
    description:
      "Explore the Shankara residential apartment project, featuring coordinated architectural detailing, decorative balcony profiles, and a refined exterior design.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Projects", item: `${SITE_URL}/projects` },
      { name: "Shankara", item: `${SITE_URL}/projects/shankara` },
    ],
  },
  {
    path: "faq",
    canonical: `${SITE_URL}/faq`,
    title: "Frequently Asked Questions (FAQ) | SRI SUMERU GFRC & FRP",
    description:
      "Frequently asked questions regarding GFRC and FRP architectural elements, design consultation, manufacturing lead times, structural anchoring, and installation.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "FAQ", item: `${SITE_URL}/faq` },
    ],
    faqs: [
      {
        q: "WHAT IS GFRC AND WHAT ARE ITS PRIMARY RAW MATERIAL INGREDIENTS?",
        a: "GFRC (Glass Fiber Reinforced Concrete) is an engineered cementitious composite composed of high-strength white or grey Portland cement, graded silica sand, alkali-resistant (AR) glass fibers (with minimum 16.7% zirconia content), acrylic polymers, and specialized admixtures.",
      },
      {
        q: "WHY IS GFRC APPROXIMATELY 50% LIGHTER THAN TRADITIONAL PRECAST CONCRETE?",
        a: "Traditional precast concrete requires substantial wall thickness (often 75mm to 150mm) to provide adequate concrete cover and prevent embedded steel rebar from rusting. GFRC eliminates steel rebar in favor of dispersed glass fibers, enabling high-flexural thin-wall casting (12mm to 25mm thickness).",
      },
      {
        q: "WHAT ARE THE TECHNICAL SPECIFICATIONS OF GRADE 10P AND GRADE 18P GFRC?",
        a: "Grade 10P (typically premix-cast for decorative mouldings, balusters, and planters) provides Characteristic MOR of 10 N/mm² and Limit of Proportionality (LOP) of 5 N/mm². Grade 18P (utilizing multi-directional spray-up AR fibers for exterior facade cladding panels) achieves MOR of 18–22 N/mm² and LOP of 7–9 N/mm².",
      },
      {
        q: "HOW DOES GFRC PERFORM AGAINST MOISTURE, FIRE, UV RADIATION, AND ATMOSPHERIC POLLUTANTS?",
        a: "GFRC is completely non-combustible (Class A1/Class 0 fire spread rating) and does not emit toxic smoke when exposed to flame. Its dense polymer-modified matrix yields very low water absorption (< 6%), resisting monsoon rains, freeze-thaw cracking, coastal salt-air efflorescence, and UV breakdown.",
      },
      {
        q: "HOW FAST IS THE PRODUCTION AND DEMOULDING TURNAROUND FOR CUSTOM ARCHITECTURAL ORDERS?",
        a: "Using precision rubber/FRP tooling and rapid-curing acrylic-modified matrices in climate-controlled manufacturing bays, GFRC components achieve initial handling strength and are demoulded within 16 to 24 hours.",
      },
    ],
  },
  {
    path: "blog",
    canonical: `${SITE_URL}/blog`,
    title: "Our Blog & Architectural Insights | SRI SUMERU GFRC & FRP",
    description:
      "Read the latest articles, engineering whitepapers, and technical case studies on modern GFRC facade technology, passive solar jalis, and heritage restoration.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Blog", item: `${SITE_URL}/blog` },
    ],
  },
  {
    path: "contact-us",
    canonical: `${SITE_URL}/contact-us`,
    title: "Contact Us | SRI SUMERU GFRC & FRP Bangalore Plant",
    description:
      "Get in touch with SRI SUMERU GFRC & FRP. Visit our facility at The Art of Living International Centre, Bangalore, call our direct lines, or submit your architectural drawings for a project quotation.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Contact Us", item: `${SITE_URL}/contact-us` },
    ],
  },
];

function generateSeoShells() {
  if (!fs.existsSync(baseHtmlPath)) {
    throw new Error(`Base build output not found at: ${baseHtmlPath}. Run vite build first.`);
  }

  const baseHtml = fs.readFileSync(baseHtmlPath, "utf8");

  if (!baseHtml.includes('<div id="root"></div>')) {
    throw new Error("Base HTML is missing root mount element (<div id=\"root\"></div>). Aborting for safety.");
  }

  console.log("Generating route-specific metadata HTML shells in dist/...");

  for (const route of ROUTES) {
    if (!route.title || !route.description || !route.canonical) {
      throw new Error(`Route ${route.path} is missing required metadata.`);
    }

    let html = baseHtml;

    // 1. Replace Document Title
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`);

    // 2. Replace Meta Description
    html = html.replace(
      /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="description" content="${route.description}" />`,
    );

    // 3. Prepare Route-Specific Structured Data & Canonical Link
    const schemas = [];

    if (route.breadcrumbs && route.breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: route.breadcrumbs.map((b, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: b.name,
          item: b.item,
        })),
      });
    }

    if (route.faqs && route.faqs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: route.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      });
    }

    const canonicalTag = `    <link rel="canonical" href="${route.canonical}" />\n`;
    const schemaTag = `    <script id="route-schema" type="application/ld+json">\n${JSON.stringify(
      schemas.length === 1 ? schemas[0] : schemas,
      null,
      2,
    )}\n    </script>\n`;

    // Inject canonical and route schema before </head>
    html = html.replace("</head>", `${canonicalTag}${schemaTag}  </head>`);

    // Target directory: dist/[route.path]/index.html
    const targetDir = path.join(distDir, route.path);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetFile = path.join(targetDir, "index.html");
    fs.writeFileSync(targetFile, html, "utf8");
    console.log(`✓ Generated: dist/${route.path}/index.html`);
  }

  console.log(`Successfully generated metadata HTML shells for ${ROUTES.length} routes.`);
}

try {
  generateSeoShells();
} catch (err) {
  console.error("SEO Shell Generation failed:", err);
  process.exit(1);
}
