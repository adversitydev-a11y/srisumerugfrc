import fs from 'fs';

// 1. Read siteContent.js
const siteContentFile = fs.readFileSync('src/content/siteContent.js', 'utf8');

// Extract line 11 (siteContent.pages.About)
const lines = siteContentFile.split('\n');
const aboutLineIndex = lines.findIndex(l => l.trim().startsWith('"About":'));

if (aboutLineIndex === -1) {
  console.error('Could not find "About": in src/content/siteContent.js');
  process.exit(1);
}

// Parse the HTML string from line
const lineContent = lines[aboutLineIndex].trim();
// Remove leading `"About": ` and trailing `,`
const jsonStr = lineContent.replace(/^"About":\s*/, '').replace(/,$/, '');
let aboutHtml = JSON.parse(jsonStr);

console.log('Original About HTML length:', aboutHtml.length);

// 2. Define replacements list: [target, replacement, expectedCount]
const replacements = [
  // Section 2: Marquee track (appears twice for continuous loop)
  [
    `<div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>GLASS FIBER REINFORCED CONCRETE</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>LIGHTWEIGHT ARCHITECTURAL CLADDING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>CUSTOM JALI SCREENS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>COLUMNS & CORNICES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>HERITAGE DOMES & ARCHES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>50% WEIGHT REDUCTION</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>WEATHER & FIRE RESISTANT</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>`,
    `<div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>GFRC ARCHITECTURAL ELEVATION &amp; CLADDING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>LIGHTWEIGHT ARCHITECTURAL SOLUTIONS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>FRP DECORATIVE ELEMENTS &amp; MOULDINGS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>CUSTOMIZED ARCHITECTURAL DESIGNS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>FABRICATION &amp; INSTALLATION</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>QUANTITY ESTIMATION &amp; BOQ</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>SITE SUPERVISION &amp; QUALITY CONTROL</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>`,
    2
  ],

  // Section 3: Eyebrow
  [
    `<p class="cs_section_subtitle cs_bold cs_accent_color cs_mb_10">BEST GFRC COMPANY IN BANGALORE</p>`,
    `<p class="cs_section_subtitle cs_bold cs_accent_color cs_mb_10">GFRC &amp; FRP ARCHITECTURAL SOLUTIONS</p>`,
    1
  ],

  // Section 3: Overview Narrative
  [
    `<div class="cs_about_desc cs_mb_30">
                Recognized as a top GFRC facade company in Bangalore, the best GFRC manufacturer in India, custom GFRC architectural elements manufacturer, and expert FRP decorative facade panel manufacturer, SRI SUMERU GFRC &amp; FRP delivers turnkey facade engineering services, custom mould development, and precast concrete fabrication. From high-rise commercial building facade solutions to sacred temple architectural elements and heritage restoration GFRC projects, our Grade 18P composite technology ensures exceptional durability and aesthetic excellence.
              </div>`,
    `<div class="cs_about_desc cs_mb_30">
                Sri Sumeru Realty's GFRC &amp; FRP Department specializes in architectural elevation, façade cladding, decorative elements, and customized fabrication. We provide innovative, lightweight, and durable architectural solutions for residential, commercial, and institutional projects, with a focus on quality workmanship, precision, and professional execution.
              </div>`,
    1
  ],

  // Section 3: Mission
  [
    `<p class="cs_feature_desc">To deliver high-quality, lightweight GFRC and FRP architectural elements that combine aesthetic excellence, durability, and practical installation for residential, commercial, and institutional projects.</p>`,
    `<p class="cs_feature_desc">To deliver quality GFRC and FRP architectural solutions through innovative design, precise fabrication, and professional execution for diverse building projects.</p>`,
    1
  ],

  // Section 3: Vision
  [
    `<p class="cs_feature_desc">To be a trusted partner in architectural innovation, creating distinctive, customized building elements that enhance modern structures while respecting design intent, functionality, and quality.</p>`,
    `<p class="cs_feature_desc">To be a trusted partner in architectural innovation, creating customized building elements that enhance design, functionality, and lasting value.</p>`,
    1
  ],

  // Section 4: Core Values - Belongingness
  [
    `<p class="cs_value_desc">We foster an inclusive culture where everyone is valued, connected and empowered.</p>`,
    `<p class="cs_value_desc">We foster an inclusive culture where everyone is valued, connected, and empowered.</p>`,
    1
  ],

  // Section 4: Core Values - Ownership
  [
    `<p class="cs_value_desc">We take initiative, act with accountability and deliver on our commitments.</p>`,
    `<p class="cs_value_desc">We take initiative, act with accountability, and deliver on our commitments.</p>`,
    1
  ],

  // Section 4: Core Values - Speed
  [
    `<p class="cs_value_desc">We move with speed, embrace change and focus on what matters most.</p>`,
    `<p class="cs_value_desc">We work efficiently, adapt to changing needs, and focus on timely execution.</p>`,
    1
  ],

  // Section 4: Core Values - Excellence
  [
    `<p class="cs_value_desc">We pursue the highest standards in everything we do, delivering impactful results.</p>`,
    `<p class="cs_value_desc">We pursue quality, precision, and craftsmanship in every architectural solution.</p>`,
    1
  ],

  // Section 5: Why Choose Us - Headline
  [
    `<h2 class="cs_section_title cs_fs_53 cs_bold text-uppercase cs_mb_20 cs_why_choose_2line_title"><span class="cs_why_choose_line1">ENGINEERED FOR STRENGTH.</span><span class="cs_why_choose_line2">DESIGNED FOR DISTINCTION.</span></h2>`,
    `<h2 class="cs_section_title cs_fs_53 cs_bold text-uppercase cs_mb_20 cs_why_choose_2line_title"><span class="cs_why_choose_line1">QUALITY CRAFTSMANSHIP.</span><span class="cs_why_choose_line2">ARCHITECTURAL DISTINCTION.</span></h2>`,
    1
  ],

  // Section 5: Why Choose Us - Introduction
  [
    `<p class="cs_about_desc cs_mb_0">We deliver customized GFRC architectural solutions that combine design flexibility, refined detailing, and lasting performance. From contemporary facades to intricate decorative elements, every solution is developed to complement your architectural vision.</p>`,
    `<p class="cs_about_desc cs_mb_0">We deliver customized GFRC and FRP architectural solutions that combine design flexibility, refined detailing, and practical installation. From façade cladding to decorative elements, our focus is on quality workmanship and solutions tailored to each project's architectural requirements.</p>`,
    1
  ],

  // Section 5: Pillar 1 Description
  [
    `<p class="cs_why_choose_desc">Elegant architectural elements designed for strength and practical installation.</p>`,
    `<p class="cs_why_choose_desc">Architectural solutions designed to combine practical installation with lasting visual appeal.</p>`,
    1
  ],

  // Section 5: Pillar 2 Title & Description
  [
    `<h3 class="cs_why_choose_title">CUSTOM DESIGN &amp; DETAILING</h3>
                    <span class="cs_why_choose_accent_line"></span>
                    <p class="cs_why_choose_desc">Bring unique architectural concepts to life with customized shapes, textures, patterns, and finishes.</p>`,
    `<h3 class="cs_why_choose_title">CUSTOMIZED DESIGN &amp; DETAILING</h3>
                    <span class="cs_why_choose_accent_line"></span>
                    <p class="cs_why_choose_desc">Distinctive shapes, decorative patterns, mouldings, and finishes tailored to architectural concepts.</p>`,
    1
  ],

  // Section 5: Pillar 3 Title & Description
  [
    `<h3 class="cs_why_choose_title">PRECISION CRAFTSMANSHIP</h3>
                    <span class="cs_why_choose_accent_line"></span>
                    <p class="cs_why_choose_desc">Consistent detailing and refined finishes through careful fabrication and quality control.</p>`,
    `<h3 class="cs_why_choose_title">PRECISION FABRICATION &amp; QUALITY CONTROL</h3>
                    <span class="cs_why_choose_accent_line"></span>
                    <p class="cs_why_choose_desc">Careful fabrication, coordinated execution, and attention to detailing and finishing consistency.</p>`,
    1
  ],

  // Section 5: Pillar 4 Title & Description
  [
    `<h3 class="cs_why_choose_title">VERSATILE APPLICATIONS</h3>
                    <span class="cs_why_choose_accent_line"></span>
                    <p class="cs_why_choose_desc">Solutions for facades, screens, columns, cornices, domes, cladding and decorative architectural elements.</p>`,
    `<h3 class="cs_why_choose_title">COMPLETE PROJECT SUPPORT</h3>
                    <span class="cs_why_choose_accent_line"></span>
                    <p class="cs_why_choose_desc">Support for quantity estimation, BOQ preparation, fabrication, installation, site supervision, and quality control.</p>`,
    1
  ],

  // Section 6: Trusted Clients Description
  [
    `<p class="cs_section_desc cs_mt_20 mb-0">Trusted by project owners, architects, consultants and construction teams for custom GFRC architectural solutions.</p>`,
    `<p class="cs_section_desc cs_mt_20 mb-0">We work with project owners, architects, consultants, and construction teams to support customized GFRC and FRP architectural requirements.</p>`,
    1
  ],

  // Section 7: Testimonials Subtitle
  [
    `<p class="cs_section_desc cs_mt_20 mb-0">Verified collaborator feedback from architects, facade consultants, and structural engineers on executed projects in Karnataka & South India.</p>`,
    `<p class="cs_section_desc cs_mt_20 mb-0">Perspectives from project collaborators on architectural detailing, fabrication, and project execution.</p>`,
    1
  ],

  // Section 8: Technical Knowledge Eyebrow
  [
    `<p class="cs_section_subtitle cs_bold cs_accent_color text-uppercase cs_mb_20">GFRC TECHNICAL KNOWLEDGE</p>`,
    `<p class="cs_section_subtitle cs_bold cs_accent_color text-uppercase cs_mb_20">GFRC &amp; FRP TECHNICAL KNOWLEDGE</p>`,
    1
  ],

  // Section 8: Technical Knowledge Headline
  [
    `<h2 class="cs_section_title cs_fs_53 cs_semibold text-uppercase mb-0">MANUFACTURING CAPABILITIES &amp; QUALITY ASSURANCE</h2>`,
    `<h2 class="cs_section_title cs_fs_53 cs_semibold text-uppercase mb-0">ARCHITECTURAL CAPABILITIES &amp; QUALITY ASSURANCE</h2>`,
    1
  ],

  // Section 8: FAQ 1
  [
    `<div class="cs_accordian cs_style_2 active">
                <div class="cs_accordian_head position-relative">
                  <h3 class="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">WHERE IS THE SRI SUMERU GFRC &amp; FRP MANUFACTURING FACILITY LOCATED?</h3>
                  <span class="cs_accordian_toggler"></span>
                </div>
                <div class="cs_accordian_body" style="display: block;">Our state-of-the-art manufacturing facility is located in Bengaluru, Karnataka, featuring high-shear mixer stations, pneumatic spray-up rigs, precision CNC pattern making, and temperature-controlled curing yards.</div>
              </div>`,
    `<div class="cs_accordian cs_style_2 active">
                <div class="cs_accordian_head position-relative">
                  <h3 class="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">WHERE DOES SRI SUMERU PROVIDE GFRC AND FRP ARCHITECTURAL SOLUTIONS?</h3>
                  <span class="cs_accordian_toggler"></span>
                </div>
                <div class="cs_accordian_body" style="display: block;">Sri Sumeru Realty's GFRC &amp; FRP Department supports architectural requirements for residential, commercial, and institutional projects. Contact our team to discuss project requirements, fabrication, installation, and execution support.</div>
              </div>`,
    1
  ],

  // Section 8: FAQ 2
  [
    `<div class="cs_accordian cs_style_2">
                <div class="cs_accordian_head position-relative">
                  <h3 class="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">WHAT QUALITY AND STRUCTURAL STANDARDS DO YOUR COMPOSITE ELEMENTS MEET?</h3>
                  <span class="cs_accordian_toggler"></span>
                </div>
                <div class="cs_accordian_body">All architectural elements comply with international PCI (Precast/Prestressed Concrete Institute) and GRCA guidelines, delivering Grade 10P and Grade 18P strength with Characteristic MOR up to 18 N/mm².</div>
              </div>`,
    `<div class="cs_accordian cs_style_2">
                <div class="cs_accordian_head position-relative">
                  <h3 class="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">WHAT ARCHITECTURAL SERVICES DO YOU PROVIDE?</h3>
                  <span class="cs_accordian_toggler"></span>
                </div>
                <div class="cs_accordian_body">Our services include GFRC architectural elevation and cladding, FRP decorative elements and mouldings, customized architectural designs, fabrication and installation, quantity estimation and BOQ, and site supervision and quality control.</div>
              </div>`,
    1
  ],

  // Section 8: FAQ 3
  [
    `<div class="cs_accordian cs_style_2">
                <div class="cs_accordian_head position-relative">
                  <h3 class="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">WHAT IS THE DIFFERENCE BETWEEN GRADE 10P AND GRADE 18P GFRC?</h3>
                  <span class="cs_accordian_toggler"></span>
                </div>
                <div class="cs_accordian_body">Grade 10P is typically premix-cast for hollow decorative elements like brackets, balusters, and planters. Grade 18P utilizes multi-directional spray-up AR fibers for external facade cladding panels subject to high wind loads and seismic forces.</div>
              </div>`,
    `<div class="cs_accordian cs_style_2">
                <div class="cs_accordian_head position-relative">
                  <h3 class="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">CAN ARCHITECTURAL ELEMENTS BE CUSTOMIZED FOR INDIVIDUAL PROJECTS?</h3>
                  <span class="cs_accordian_toggler"></span>
                </div>
                <div class="cs_accordian_body">Yes. Architectural designs and decorative elements can be discussed and tailored to the project's design intent, dimensions, detailing, and finish requirements, subject to technical feasibility.</div>
              </div>`,
    1
  ],

  // Section 8: FAQ 4
  [
    `<div class="cs_accordian cs_style_2">
                <div class="cs_accordian_head position-relative">
                  <h3 class="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">DO YOU PROVIDE STRUCTURAL ENGINEERING SHOP DRAWINGS AND WIND-LOAD CALCULATIONS?</h3>
                  <span class="cs_accordian_toggler"></span>
                </div>
                <div class="cs_accordian_body">Yes, our in-house engineering team provides complete shop drawings, connection engineering, finite element analysis (FEA), and wind-load verification for commercial and residential elevations.</div>
              </div>`,
    `<div class="cs_accordian cs_style_2">
                <div class="cs_accordian_head position-relative">
                  <h3 class="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">DO YOU PROVIDE QUANTITY ESTIMATION AND INSTALLATION SUPPORT?</h3>
                  <span class="cs_accordian_toggler"></span>
                </div>
                <div class="cs_accordian_body">Yes. Quantity estimation, BOQ preparation, fabrication, installation, site supervision, and quality control are among our department's services. The scope is finalized according to the project requirements.</div>
              </div>`,
    1
  ],

  // Section 8: FAQ 5
  [
    `<div class="cs_accordian cs_style_2">
                <div class="cs_accordian_head position-relative">
                  <h3 class="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">HOW DOES SRI SUMERU ENSURE COLOR CONSISTENCY AND SURFACE TEXTURE FIDELITY?</h3>
                  <span class="cs_accordian_toggler"></span>
                </div>
                <div class="cs_accordian_body">We use UV-stable mineral oxide pigments, high-grade white Portland cement, and graded silica sands with automated batching to ensure exact color and texture consistency across entire building elevations.</div>
              </div>`,
    `<div class="cs_accordian cs_style_2">
                <div class="cs_accordian_head position-relative">
                  <h3 class="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">HOW DO YOU MAINTAIN QUALITY IN ARCHITECTURAL FABRICATION?</h3>
                  <span class="cs_accordian_toggler"></span>
                </div>
                <div class="cs_accordian_body">We emphasize workmanship, dimensional coordination, finishing consistency, and attention to architectural detailing throughout the agreed scope of work.</div>
              </div>`,
    1
  ]
];

// Perform replacements
let updatedHtml = aboutHtml;
for (let i = 0; i < replacements.length; i++) {
  const [target, replacement, expectedCount] = replacements[i];
  const count = (updatedHtml.split(target).length - 1);
  if (count !== expectedCount) {
    console.error(`Replacement #${i + 1} failed: expected ${expectedCount} occurrences, found ${count}`);
    process.exit(1);
  }
  // Replace all occurrences
  updatedHtml = updatedHtml.replaceAll(target, replacement);
  console.log(`Replacement #${i + 1} succeeded (${expectedCount} instance(s) replaced).`);
}

console.log('Updated About HTML length:', updatedHtml.length);

// Re-serialize line 11
lines[aboutLineIndex] = `    "About": ${JSON.stringify(updatedHtml)},`;

// Write back src/content/siteContent.js
fs.writeFileSync('src/content/siteContent.js', lines.join('\n'), 'utf8');
console.log('Successfully updated src/content/siteContent.js');

