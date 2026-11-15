import fs from 'fs';
import siteContent from '../src/content/siteContent.js';

const gfrcProducts = [
  {
    idx: '01',
    title: 'ARCHITECTURAL SCREENS',
    desc: 'Perforated sunscreen panels designed for solar heat reduction, natural airflow, and modern exterior facade depth.',
    img: '/assets/img/gfrc-screen-facade.webp',
    alt: 'Architectural Screens Facade'
  },
  {
    idx: '02',
    title: 'DECORATIVE JALIS',
    desc: 'Intricate geometric and traditional filigree latticework engineered for facade screens, boundary walls, and duct coverings.',
    img: '/assets/img/gfrc-screen-pattern.webp',
    alt: 'Decorative Jalis Pattern'
  },
  {
    idx: '03',
    title: 'WALL CLADDING PANELS',
    desc: 'Lightweight high-strength exterior and interior cladding panels featuring superior weather protection and smooth or textured finishes.',
    img: '/assets/img/gfrc-cladding-detail.webp',
    alt: 'Wall Cladding Panels'
  },
  {
    idx: '04',
    title: 'ARCHITECTURAL COLUMNS',
    desc: 'Full structural encasements and decorative columns in fluted, smooth, tapered, or rectangular profiles for grand building portals.',
    img: '/assets/img/gfrc-column.webp',
    alt: 'Architectural Columns'
  },
  {
    idx: '05',
    title: 'COLUMN CAPITALS',
    desc: 'Distinctive Corinthian, Ionic, Doric, and customized column capitals manufactured with sharp relief details and lightweight composition.',
    img: '/assets/img/gfrc-bracket.webp',
    alt: 'Column Capitals'
  },
  {
    idx: '06',
    title: 'EXTERIOR CORNICES',
    desc: 'Continuous architectural roofline mouldings, parapet trims, and horizontal facade bands offering weather protection and classic aesthetics.',
    img: '/assets/img/gfrc-cornice.webp',
    alt: 'Exterior Cornices'
  },
  {
    idx: '07',
    title: 'DECORATIVE CORBELS',
    desc: 'High-relief wall support corbels, eave brackets, and under-balcony architectural details cast with precision moulds.',
    img: '/assets/img/gfrc-bracket.webp',
    alt: 'Decorative Corbels'
  },
  {
    idx: '08',
    title: 'ARCHES & SURROUNDS',
    desc: 'Classical and contemporary structural door surrounds, arched window portals, and customized precast entrance jambs.',
    img: '/assets/img/gfrc-arch.webp',
    alt: 'Arches and Surrounds'
  },
  {
    idx: '09',
    title: 'DOMES & CEILING VAULTS',
    desc: 'Segmental, hemispherical, and ribbed architectural domes engineered for temple architecture, civic monuments, and heritage landmarks.',
    img: '/assets/img/gfrc-dome.webp',
    alt: 'Domes and Ceiling Vaults'
  },
  {
    idx: '10',
    title: 'BALUSTRADES & PARAPETS',
    desc: 'Cast architectural baluster spindles, handrails, base rails, and decorative terrace parapets engineered for durability and wind resistance.',
    img: '/assets/img/gfrc-baluster.webp',
    alt: 'Balustrades and Parapets'
  },
  {
    idx: '11',
    title: 'ARCHITECTURAL PLANTERS',
    desc: 'Monolithic landscape planters, geometric urban planters, and tree tubs custom-cast with integrated waterproofing and drainage outlets.',
    img: '/assets/img/gfrc-planter.webp',
    alt: 'Architectural Planters'
  },
  {
    idx: '12',
    title: 'CUSTOM GEOMETRIC PANELS',
    desc: 'Three-dimensional parametric facade panels, sculpted exterior features, and bespoke geometric wall installations engineered to design.',
    img: '/assets/img/gfrc-panel-geometry.webp',
    alt: 'Custom Geometric Panels'
  }
];

const frpProducts = [
  {
    idx: '01',
    title: 'FRP ARCHITECTURAL SCREENS',
    desc: 'High-strength lightweight composite sunscreen panels offering superior corrosion resistance, ultraviolet stability, and modern facade depth.',
    img: '/assets/img/gfrc-screen-facade.webp',
    alt: 'FRP Architectural Screens'
  },
  {
    idx: '02',
    title: 'FRP DECORATIVE JALIS',
    desc: 'Intricate filigree and custom lattice panels cast in durable weather-resistant polymer composites for facades, privacy screens, and boundary walls.',
    img: '/assets/img/gfrc-screen-pattern.webp',
    alt: 'FRP Decorative Jalis'
  },
  {
    idx: '03',
    title: 'FRP WALL CLADDING PANELS',
    desc: 'Ultra-lightweight exterior facade cladding panels engineered with high flexural strength, seamless jointing, and custom molded textures.',
    img: '/assets/img/gfrc-cladding-detail.webp',
    alt: 'FRP Wall Cladding Panels'
  },
  {
    idx: '04',
    title: 'FRP ARCHITECTURAL COLUMNS',
    desc: 'Modular structural covers and hollow column casings fabricated in lightweight fiberglass composites for rapid on-site assembly and grand entrances.',
    img: '/assets/img/gfrc-column.webp',
    alt: 'FRP Architectural Columns'
  },
  {
    idx: '05',
    title: 'FRP COLUMN CAPITALS',
    desc: 'Classical Corinthian and bespoke column capitals molded with sharp relief details, high tensile strength, and minimal structural dead load.',
    img: '/assets/img/gfrc-bracket.webp',
    alt: 'FRP Column Capitals'
  },
  {
    idx: '06',
    title: 'FRP EXTERIOR CORNICES',
    desc: 'Lightweight continuous roofline mouldings and fascia profiles that eliminate heavy cantilever supports and resist harsh weathering.',
    img: '/assets/img/gfrc-cornice.webp',
    alt: 'FRP Exterior Cornices'
  },
  {
    idx: '07',
    title: 'FRP DECORATIVE CORBELS',
    desc: 'Precision-molded eave brackets, decorative modillions, and wall consoles engineered for zero moisture absorption and maintenance-free longevity.',
    img: '/assets/img/gfrc-bracket.webp',
    alt: 'FRP Decorative Corbels'
  },
  {
    idx: '08',
    title: 'FRP ARCHES & SURROUNDS',
    desc: 'Custom curved architraves, window surrounds, and entrance portals designed for high impact resistance and dimensional stability.',
    img: '/assets/img/gfrc-arch.webp',
    alt: 'FRP Arches and Surrounds'
  },
  {
    idx: '09',
    title: 'FRP DOMES & CUPOLAS',
    desc: 'Large-span lightweight hemispherical and fluted domes engineered for temple architecture, civic monuments, and skylight features.',
    img: '/assets/img/gfrc-dome.webp',
    alt: 'FRP Domes and Cupolas'
  },
  {
    idx: '10',
    title: 'FRP BALUSTRADES & RAILINGS',
    desc: 'Corrosion-proof balusters, decorative railings, and terrace parapet elements offering exceptional strength-to-weight performance.',
    img: '/assets/img/gfrc-baluster.webp',
    alt: 'FRP Balustrades and Railings'
  },
  {
    idx: '11',
    title: 'FRP ARCHITECTURAL PLANTERS',
    desc: 'Contemporary monolithic planters and landscape features with integrated waterproofing, frost resistance, and custom color finishes.',
    img: '/assets/img/gfrc-planter.webp',
    alt: 'FRP Architectural Planters'
  },
  {
    idx: '12',
    title: 'FRP CUSTOM FACADE PANELS',
    desc: 'Bespoke 3D parametric panels, sculptured facade elements, and complex geometric forms crafted through precision tooling moulds.',
    img: '/assets/img/gfrc-panel-geometry.webp',
    alt: 'FRP Custom Facade Panels'
  }
];

function generateCardsHtml(products) {
  return products.map(item => `
          <!-- Single Card ${item.idx}: ${item.title} -->
          <div class="cs_prod_card_item" role="listitem">
            <div class="cs_prod_card_thumb">
              <img src="${item.img}" alt="${item.alt}" loading="lazy">
            </div>
            <div class="cs_prod_card_body">
              <div class="cs_prod_card_meta">
                <span class="cs_prod_card_idx">${item.idx}</span>
                <span class="cs_prod_card_line"></span>
              </div>
              <h3 class="cs_prod_card_title">
                <a href="/service-details">${item.title}</a>
              </h3>
              <p class="cs_prod_card_desc">${item.desc}</p>
              <a href="/service-details" class="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50 text-uppercase" aria-label="Explore details for ${item.title}">
                <span>EXPLORE DETAILS</span>
                <span class="cs_btn_icon cs_radius_100 cs_center" aria-hidden="true">
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>`).join('\n');
}

function createServicesPageHtml(productType, isFrp = false) {
  const fullTitle = isFrp ? 'FRP PRODUCTS & SERVICES' : 'GFRC PRODUCTS';
  const breadcrumb = isFrp ? 'FRP Products' : 'GFRC Products';
  const catalogTitle = isFrp ? 'ARCHITECTURAL FRP PRODUCT CATALOG' : 'ARCHITECTURAL GFRC PRODUCT CATALOG';
  const galleryTitle = isFrp ? 'PROVEN FRP INSTALLATIONS' : 'PROVEN GFRC INSTALLATIONS';
  const products = isFrp ? frpProducts : gfrcProducts;
  const cardsHtml = generateCardsHtml(products);

  return `<main>
    <!-- Start Page Header Section -->
    <section class="cs_page_header_style_1 cs_bg_filed cs_gray_bg position-relative" data-src="/assets/img/page-header-bg1.webp">
      <div class="cs_overlay cs_primary_bg position-absolute"></div>
      <div class="container">
        <div class="cs_page_header_content text-center">
          <h1 class="cs_page_header_title cs_fs_80 cs_bold cs_white_color cs_mb_16">${fullTitle}</h1>
          <ol class="breadcrumb cs_center mb-0">
            <li class="breadcrumb-item"><a href="/" aria-label="Back to home button">Home</a></li>
            <li class="breadcrumb-item active">${breadcrumb}</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Page Header Section -->

    <!-- Start Sliding Text Section -->
    <div class="cs_horizontal_slider cs_type_1 cs_accent_bg cs_primary_font">
      <div class="cs_slider_inner">
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>FACADE CLADDING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>DECORATIVE JALIS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>ARCHITECTURAL SCREENS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>COLUMNS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>CAPITALS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>CORNICES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>CORBELS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>ARCHES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>DOMES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>PLANTERS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>BALUSTRADES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>FACADE CLADDING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>DECORATIVE JALIS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>ARCHITECTURAL SCREENS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>COLUMNS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>CAPITALS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>CORNICES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>CORBELS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>ARCHES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>DOMES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>PLANTERS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>BALUSTRADES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
      </div>
    </div>
    <!-- End Sliding Text Section -->

    <!-- Start Architectural Catalog Section -->
    <section class="cs_prod_catalog_section position-relative">
      <div class="cs_leaf_shadow_overlay" aria-hidden="true"></div>
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container position-relative" style="z-index: 2;">
        <div class="cs_prod_catalog_heading text-center">
          <div class="cs_prod_catalog_eyebrow cs_center">
            <span class="cs_eyebrow_line"></span>
            <span class="cs_eyebrow_dot">•</span>
            <span class="cs_eyebrow_text">OUR CORE PRODUCT OFFERINGS</span>
            <span class="cs_eyebrow_dot">•</span>
            <span class="cs_eyebrow_line"></span>
          </div>
          <h2 class="cs_prod_catalog_title text-uppercase">${catalogTitle}</h2>
        </div>
        <div class="cs_height_60 cs_height_lg_40"></div>
        <div class="cs_prod_cards_grid" role="list">
${cardsHtml}
        </div>
      </div>
      <div class="cs_height_120 cs_height_lg_80"></div>
    </section>
    <!-- End Architectural Catalog Section -->


</main>`;
}

siteContent.pages.Services = createServicesPageHtml('FRP', true);
siteContent.pages.GfrcProducts = createServicesPageHtml('GFRC', false);

const fileOutput = `const siteContent = ${JSON.stringify(siteContent, null, 2)};\n\nexport default siteContent;\n`;

fs.writeFileSync('./src/content/siteContent.js', fileOutput, 'utf-8');
console.log('Successfully updated Services & GFRC Products pages with exact reference card design!');
