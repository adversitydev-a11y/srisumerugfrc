import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProductData } from "../data/productsData.js";

const SITE_URL = "https://srisumeru.com";

const ROUTE_DATA = {
  "/": {
    canonical: `${SITE_URL}/`,
    title: "Leading GFRC & FRP Manufacturer in India | Facade, Cladding & Architectural Elements",
    description:
      "SRI SUMERU GFRC & FRP is a leading GFRC and FRP manufacturer in Bangalore, India, specializing in facade cladding, domes, arches, columns, jalis, balustrades, and custom architectural solutions for commercial, residential, temple, and heritage projects.",
    breadcrumbs: null,
  },
  "/about-us": {
    canonical: `${SITE_URL}/about-us`,
    title: "About SRI SUMERU GFRC & FRP | Architectural Facade Manufacturer",
    description:
      "Recognized as a leading GFRC and FRP manufacturer in Bangalore, India, SRI SUMERU delivers turnkey facade engineering, custom moulds, and precast architectural products.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "About Us", item: `${SITE_URL}/about-us` },
    ],
  },
  "/gfrc-products": {
    canonical: `${SITE_URL}/gfrc-products`,
    title: "GFRC Architectural Products & Cladding Panels | SRI SUMERU",
    description:
      "Explore our range of high-performance GFRC architectural products, including facade cladding panels, decorative jalis, columns, cornices, balusters, and domes.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "GFRC Products", item: `${SITE_URL}/gfrc-products` },
    ],
  },
  "/frp-products": {
    canonical: `${SITE_URL}/frp-products`,
    title: "FRP Architectural Products & Mouldings | SRI SUMERU",
    description:
      "Discover lightweight FRP architectural products, cornices, domes, planters, and customized composite elements engineered for weather resistance and high-elevation installation.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "FRP Products", item: `${SITE_URL}/frp-products` },
    ],
  },
  "/projects": {
    canonical: `${SITE_URL}/projects`,
    title: "GFRC Projects Portfolio & Case Studies | SRI SUMERU",
    description:
      "View our portfolio of executed GFRC and FRP facade cladding, decorative screens, restoration domes, and commercial projects across Karnataka and India.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Projects", item: `${SITE_URL}/projects` },
    ],
  },
  "/faq": {
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
  "/blog": {
    canonical: `${SITE_URL}/blog`,
    title: "Our Blog & Architectural Insights | SRI SUMERU GFRC & FRP",
    description:
      "Read the latest articles, engineering whitepapers, and technical case studies on modern GFRC facade technology, passive solar jalis, and heritage restoration.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Blog", item: `${SITE_URL}/blog` },
    ],
  },
  "/contact-us": {
    canonical: `${SITE_URL}/contact-us`,
    title: "Contact Us | SRI SUMERU GFRC & FRP Bangalore Plant",
    description:
      "Get in touch with SRI SUMERU GFRC & FRP. Visit our facility at The Art of Living International Centre, Bangalore, call our direct lines, or submit your architectural drawings for a project quotation.",
    breadcrumbs: [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Contact Us", item: `${SITE_URL}/contact-us` },
    ],
  },
};

const ALIAS_MAP = {
  "/about": "/about-us",
  "/products": "/frp-products",
  "/services": "/frp-products",
  "/portfolio": "/projects",
  "/contact": "/contact-us",
  "/service-details": "/product-details",
  "/portfolio-details": "/project-details",
};

export default function RouteMetadata() {
  const location = useLocation();

  useEffect(() => {
    const rawPath = location.pathname.toLowerCase().replace(/\/+$/, "") || "/";
    const resolvedPath = ALIAS_MAP[rawPath] || rawPath;

    let meta = ROUTE_DATA[resolvedPath];

    // Handle product details dynamically from productsData
    if (resolvedPath === "/product-details") {
      const searchParams = new URLSearchParams(location.search);
      const productSlug = searchParams.get("product");
      if (productSlug) {
        const product = getProductData(productSlug);
        if (product && product.title) {
          const isFrp = product.category && product.category.includes("FRP");
          meta = {
            canonical: `${SITE_URL}/product-details?product=${encodeURIComponent(productSlug)}`,
            title: `${product.title} | SRI SUMERU GFRC & FRP`,
            description:
              product.desc ||
              `Custom ${product.title} manufactured by SRI SUMERU GFRC & FRP in Bangalore, India. Precision moulding and architectural fabrication.`,
            breadcrumbs: [
              { name: "Home", item: `${SITE_URL}/` },
              {
                name: isFrp ? "FRP Products" : "GFRC Products",
                item: isFrp ? `${SITE_URL}/frp-products` : `${SITE_URL}/gfrc-products`,
              },
              {
                name: product.title,
                item: `${SITE_URL}/product-details?product=${encodeURIComponent(productSlug)}`,
              },
            ],
          };
        }
      }
      if (!meta) {
        meta = {
          canonical: `${SITE_URL}/gfrc-products`,
          title: "Architectural Products | SRI SUMERU GFRC & FRP",
          description: "Explore custom GFRC and FRP architectural products manufactured by SRI SUMERU.",
          breadcrumbs: [
            { name: "Home", item: `${SITE_URL}/` },
            { name: "Products", item: `${SITE_URL}/gfrc-products` },
          ],
        };
      }
    }

    // Fallback to Home if unknown route
    if (!meta) {
      meta = ROUTE_DATA["/"];
    }

    // 1. Update Document Title
    if (meta.title) {
      document.title = meta.title;
    }

    // 2. Update or Create Meta Description
    if (meta.description) {
      let descEl = document.querySelector('meta[name="description"]');
      if (!descEl) {
        descEl = document.createElement("meta");
        descEl.setAttribute("name", "description");
        document.head.appendChild(descEl);
      }
      descEl.setAttribute("content", meta.description);
    }

    // 3. Update or Create Canonical Link
    if (meta.canonical) {
      let canonEl = document.querySelector('link[rel="canonical"]');
      if (!canonEl) {
        canonEl = document.createElement("link");
        canonEl.setAttribute("rel", "canonical");
        document.head.appendChild(canonEl);
      }
      canonEl.setAttribute("href", meta.canonical);
    }

    // 4. Update or Create Route-Specific Structured Data
    const schemas = [];

    // BreadcrumbList Schema
    if (meta.breadcrumbs && meta.breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: meta.breadcrumbs.map((b, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: b.name,
          item: b.item,
        })),
      });
    }

    // FAQPage Schema (for FAQ route)
    if (meta.faqs && meta.faqs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: meta.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      });
    }

    let schemaEl = document.getElementById("route-schema");
    if (schemas.length > 0) {
      if (!schemaEl) {
        schemaEl = document.createElement("script");
        schemaEl.id = "route-schema";
        schemaEl.type = "application/ld+json";
        document.head.appendChild(schemaEl);
      }
      schemaEl.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas, null, 2);
    } else if (schemaEl) {
      schemaEl.remove();
    }
  }, [location.pathname, location.search]);

  return null;
}
