import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const artifactDir = "C:\\Users\\Rakshitha\\.gemini\\antigravity\\brain\\0e5a4700-e2e9-455b-86b5-3c6b355e3899";
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

console.log("=== 1. Inspecting Live DOM of /about-us ===");
const dom = execSync(
  `"${chromePath}" --headless=new --dump-dom http://127.0.0.1:5173/about-us`,
  { encoding: "utf8", maxBuffer: 15 * 1024 * 1024 }
);

const checks = [
  // Section 1
  { name: "S1: Page Title", pass: dom.includes("ABOUT SRI SUMERU GFRC & FRP") },
  { name: "S1: Breadcrumb", pass: dom.includes("Home") && (dom.includes("About SRI SUMERU GFRC &amp; FRP") || dom.includes("About SRI SUMERU GFRC & FRP")) },

  // Section 2
  { name: "S2: Marquee 1 (GFRC ARCHITECTURAL ELEVATION & CLADDING)", pass: dom.includes("GFRC ARCHITECTURAL ELEVATION &amp; CLADDING") || dom.includes("GFRC ARCHITECTURAL ELEVATION & CLADDING") },
  { name: "S2: Marquee 2 (LIGHTWEIGHT ARCHITECTURAL SOLUTIONS)", pass: dom.includes("LIGHTWEIGHT ARCHITECTURAL SOLUTIONS") },
  { name: "S2: Marquee 3 (FRP DECORATIVE ELEMENTS & MOULDINGS)", pass: dom.includes("FRP DECORATIVE ELEMENTS &amp; MOULDINGS") || dom.includes("FRP DECORATIVE ELEMENTS & MOULDINGS") },
  { name: "S2: Marquee 4 (CUSTOMIZED ARCHITECTURAL DESIGNS)", pass: dom.includes("CUSTOMIZED ARCHITECTURAL DESIGNS") },
  { name: "S2: Marquee 5 (FABRICATION & INSTALLATION)", pass: dom.includes("FABRICATION &amp; INSTALLATION") || dom.includes("FABRICATION & INSTALLATION") },
  { name: "S2: Marquee 6 (QUANTITY ESTIMATION & BOQ)", pass: dom.includes("QUANTITY ESTIMATION &amp; BOQ") || dom.includes("QUANTITY ESTIMATION & BOQ") },
  { name: "S2: Marquee 7 (SITE SUPERVISION & QUALITY CONTROL)", pass: dom.includes("SITE SUPERVISION &amp; QUALITY CONTROL") || dom.includes("SITE SUPERVISION & QUALITY CONTROL") },

  // Section 3
  { name: "S3: Eyebrow", pass: dom.includes("GFRC &amp; FRP ARCHITECTURAL SOLUTIONS") || dom.includes("GFRC & FRP ARCHITECTURAL SOLUTIONS") },
  { name: "S3: Headline", pass: dom.includes("LIGHTWEIGHT ARCHITECTURAL SOLUTIONS.") && dom.includes("TIMELESS DESIGN.") },
  { name: "S3: Overview Narrative", pass: dom.includes("Sri Sumeru Realty's GFRC &amp; FRP Department specializes in architectural elevation") || dom.includes("Sri Sumeru Realty's GFRC & FRP Department specializes in architectural elevation") },
  { name: "S3: Mission", pass: dom.includes("To deliver quality GFRC and FRP architectural solutions through innovative design, precise fabrication, and professional execution for diverse building projects.") },
  { name: "S3: Vision", pass: dom.includes("To be a trusted partner in architectural innovation, creating customized building elements that enhance design, functionality, and lasting value.") },
  { name: "S3: CTA Button", pass: dom.includes("EXPLORE GFRC SOLUTIONS") && dom.includes("/frp-products") },
  { name: "S3: Image 1", pass: dom.includes("classical-lion-fountain-courtyard.webp") },
  { name: "S3: Image 2", pass: dom.includes("classical-caryatids-lakeside.webp") },

  // Section 4
  { name: "S4: Eyebrow", pass: dom.includes("WHAT DEFINES US") },
  { name: "S4: Headline", pass: dom.includes("Our <span class=\"cs_accent_core\">Core</span> Values") || dom.includes("Our Core Values") },
  { name: "S4: Subtitle", pass: dom.includes("United by purpose. Driven by values.") },
  { name: "S4: Belongingness", pass: dom.includes("We foster an inclusive culture where everyone is valued, connected, and empowered.") },
  { name: "S4: Ownership", pass: dom.includes("We take initiative, act with accountability, and deliver on our commitments.") },
  { name: "S4: Speed", pass: dom.includes("We work efficiently, adapt to changing needs, and focus on timely execution.") },
  { name: "S4: Excellence", pass: dom.includes("We pursue quality, precision, and craftsmanship in every architectural solution.") },

  // Section 5
  { name: "S5: Eyebrow", pass: dom.includes("WHY CHOOSE SRI SUMERU GFRC &amp; FRP") || dom.includes("WHY CHOOSE SRI SUMERU GFRC & FRP") },
  { name: "S5: Headline", pass: dom.includes("QUALITY CRAFTSMANSHIP.") && dom.includes("ARCHITECTURAL DISTINCTION.") },
  { name: "S5: Intro", pass: dom.includes("We deliver customized GFRC and FRP architectural solutions that combine design flexibility, refined detailing, and practical installation.") },
  { name: "S5: Pillar 1 Title & Desc", pass: dom.includes("LIGHTWEIGHT &amp; DURABLE") && dom.includes("Architectural solutions designed to combine practical installation with lasting visual appeal.") },
  { name: "S5: Pillar 2 Title & Desc", pass: dom.includes("CUSTOMIZED DESIGN &amp; DETAILING") && dom.includes("Distinctive shapes, decorative patterns, mouldings, and finishes tailored to architectural concepts.") },
  { name: "S5: Pillar 3 Title & Desc", pass: dom.includes("PRECISION FABRICATION &amp; QUALITY CONTROL") && dom.includes("Careful fabrication, coordinated execution, and attention to detailing and finishing consistency.") },
  { name: "S5: Pillar 4 Title & Desc", pass: dom.includes("COMPLETE PROJECT SUPPORT") && dom.includes("Support for quantity estimation, BOQ preparation, fabrication, installation, site supervision, and quality control.") },

  // Section 6
  { name: "S6: Eyebrow", pass: dom.includes("TRUSTED CLIENTS") },
  { name: "S6: Headline", pass: dom.includes("OUR CLIENTS &amp; PARTNERS") || dom.includes("OUR CLIENTS & PARTNERS") },
  { name: "S6: Desc", pass: dom.includes("We work with project owners, architects, consultants, and construction teams to support customized GFRC and FRP architectural requirements.") },

  // Section 7
  { name: "S7: Eyebrow", pass: dom.includes("TESTIMONIALS") },
  { name: "S7: Headline", pass: dom.includes("WHAT OUR CLIENTS SAY") },
  { name: "S7: Subtitle", pass: dom.includes("Perspectives from project collaborators on architectural detailing, fabrication, and project execution.") },

  // Section 8
  { name: "S8: Eyebrow", pass: dom.includes("GFRC &amp; FRP TECHNICAL KNOWLEDGE") || dom.includes("GFRC & FRP TECHNICAL KNOWLEDGE") },
  { name: "S8: Headline", pass: dom.includes("ARCHITECTURAL CAPABILITIES &amp; QUALITY ASSURANCE") || dom.includes("ARCHITECTURAL CAPABILITIES & QUALITY ASSURANCE") },
  { name: "S8: FAQ 1 Q&A", pass: dom.includes("WHERE DOES SRI SUMERU PROVIDE GFRC AND FRP ARCHITECTURAL SOLUTIONS?") && dom.includes("Sri Sumeru Realty's GFRC &amp; FRP Department supports architectural requirements") },
  { name: "S8: FAQ 2 Q&A", pass: dom.includes("WHAT ARCHITECTURAL SERVICES DO YOU PROVIDE?") && dom.includes("Our services include GFRC architectural elevation and cladding, FRP decorative elements") },
  { name: "S8: FAQ 3 Q&A", pass: dom.includes("CAN ARCHITECTURAL ELEMENTS BE CUSTOMIZED FOR INDIVIDUAL PROJECTS?") && dom.includes("Yes. Architectural designs and decorative elements can be discussed") },
  { name: "S8: FAQ 4 Q&A", pass: dom.includes("DO YOU PROVIDE QUANTITY ESTIMATION AND INSTALLATION SUPPORT?") && dom.includes("Yes. Quantity estimation, BOQ preparation, fabrication, installation, site supervision") },
  { name: "S8: FAQ 5 Q&A", pass: dom.includes("HOW DO YOU MAINTAIN QUALITY IN ARCHITECTURAL FABRICATION?") && dom.includes("We emphasize workmanship, dimensional coordination, finishing consistency") },
  { name: "S8: Form Slot Preserved", pass: dom.includes("cs_faq_form_slot") }
];

let allPassed = true;
checks.forEach(c => {
  console.log(`${c.pass ? "✓ PASS" : "✗ FAIL"}: ${c.name}`);
  if (!c.pass) allPassed = false;
});

console.log(`\nAll content checks passed? ${allPassed ? "YES" : "NO"}`);

console.log("\n=== 2. Capturing Screenshots across Desktop, Tablet, and Mobile ===");

const desktopShot = path.join(artifactDir, "about_us_desktop.png");
const tabletShot = path.join(artifactDir, "about_us_tablet.png");
const mobileShot = path.join(artifactDir, "about_us_mobile.png");

execSync(`"${chromePath}" --headless=new --disable-gpu --window-size=1440,5800 --screenshot="${desktopShot}" http://127.0.0.1:5173/about-us`);
console.log("Captured Desktop screenshot (1440x5800)");

execSync(`"${chromePath}" --headless=new --disable-gpu --window-size=768,6800 --screenshot="${tabletShot}" http://127.0.0.1:5173/about-us`);
console.log("Captured Tablet screenshot (768x6800)");

execSync(`"${chromePath}" --headless=new --disable-gpu --window-size=375,7600 --screenshot="${mobileShot}" http://127.0.0.1:5173/about-us`);
console.log("Captured Mobile screenshot (375x7600)");

console.log("Verification finished successfully!");
