import fs from 'fs';
import path from 'path';
import currentContent from '../src/content/siteContent.js';

const updatedContent = {
  blocks: { ...currentContent.blocks },
  pages: { ...currentContent.pages }
};

// =========================================================================
// 1. ABOUT PAGE
// =========================================================================
updatedContent.pages.About = `<main>
    <!-- Start Page Header Section -->
    <section class="cs_page_header_style_1 cs_bg_filed cs_gray_bg position-relative" data-src="/assets/img/page-header-bg1.webp">
      <div class="cs_overlay cs_primary_bg position-absolute"></div>
      <div class="container">
        <div class="cs_page_header_content text-center">
          <h1 class="cs_page_header_title cs_fs_80 cs_bold cs_white_color cs_mb_16">ABOUT GFRC</h1>
          <ol class="breadcrumb cs_center mb-0">
            <li class="breadcrumb-item"><a href="/" aria-label="Back to home button">Home</a></li>
            <li class="breadcrumb-item active">About GFRC</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Page Header Section -->
    <!-- Start Sliding Text Section -->
    <div class="cs_horizontal_slider cs_type_1 cs_accent_bg cs_primary_font">
      <div class="cs_slider_inner">
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
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
        </div>
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
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
        </div>
      </div>
    </div>
    <!-- End Sliding Text Section -->
    <!-- Start About Section -->
    <section class="cs_about_style_7">
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="row cs_gap_y_40">
          <div class="col-lg-5 order-lg-2">
            <div class="cs_about_img_wrapper position-relative">
              <div class="cs_about_img1 cs_radius_10">
                <img src="/assets/img/about-img10.webp" alt="GFRC Panel Cladding">
              </div>
              <div class="cs_about_img2">
                <img src="/assets/img/about-img11.webp" alt="GFRC Facade Architecture">
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="cs_about_text">
              <div class="cs_section_heading_style_1 cs_mb_18">
                <p class="cs_section_subtitle cs_bold cs_accent_color cs_mb_10">ABOUT GFRC</p>
                <h2 class="cs_section_title cs_fs_53 cs_semibold mb-0">LIGHTWEIGHT ARCHITECTURAL CONCRETE FOR TIMELESS DESIGN.</h2>
              </div>
              <div class="cs_about_desc cs_mb_30">
                Glass Fiber Reinforced Concrete (GFRC) is an advanced cementitious composite comprising Portland cement, fine aggregate, acrylic co-polymer, and alkali-resistant glass fibers. Delivering high flexural and tensile strength, GFRC enables thin-wall architectural casting, intricate mould reproduction, and durable facades that are 50% lighter than conventional precast concrete.
              </div>
              <div class="cs_about_features cs_mb_40">
                <div class="cs_about_feature cs_gray_bg cs_radius_10">
                  <div class="cs_feature_header cs_mb_12">
                    <h3 class="cs_feature_title cs_fs_24 cs_bold mb-0">OUR MISSION</h3>
                    <span class="cs_feature_icon">
                    <img src="/assets/img/icons/innovation.svg" alt="Mission icon">
                    </span>
                  </div>
                  <p class="cs_feature_desc">Delivering lightweight, high-performance architectural GFRC elements that combine artistic grandeur with structural efficiency and rapid installation.</p>
                </div>
                <div class="cs_about_feature cs_gray_bg cs_radius_10">
                  <div class="cs_feature_header cs_mb_12">
                    <h3 class="cs_feature_title cs_fs_24 cs_bold mb-0">OUR VISION</h3>
                    <span class="cs_feature_icon">
                    <img src="/assets/img/icons/design.svg" alt="Vision icon">
                    </span>
                  </div>
                  <p class="cs_feature_desc">Pioneering custom prefabricated GFRC technologies for modern high-rises, heritage restorations, and sustainable green building envelopes.</p>
                </div>
              </div>
              <a href="/services" aria-label="Explore GFRC products" class="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50 text-uppercase">
              <span>EXPLORE GFRC SOLUTIONS</span>
              <span class="cs_btn_icon cs_radius_100 cs_center"><i class="fa-solid fa-arrow-right"></i></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_120 cs_height_lg_80"></div>
    </section>
    <!-- End About Section -->
    <!-- Start Service Section -->
    <section class="cs_gray_bg">
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container-fluid">
        <div class="cs_section_heading_style_1 cs_center_column text-center">
          <p class="cs_section_subtitle cs_bold cs_accent_color cs_mb_20 text-uppercase">OUR GFRC CAPABILITIES</p>
          <h2 class="cs_section_title cs_fs_60 cs_semibold mb-0">PRECISION ARCHITECTURAL MANUFACTURING</h2>
        </div>
        <div class="cs_height_60 cs_height_lg_50"></div>
        <div class="px-3 overflow-hidden">
          <div class="cs_grid_style_8">
            <div class="cs_card_style_12">
              <a href="/service-details" class="cs_card_thumbnail cs_radius_10 cs_mb_45" aria-label="View details about Panel Cladding">
              <img src="/assets/img/service-img-21.webp" alt="Panel Cladding">
              </a>
              <div class="cs_card_info">
                <h3 class="cs_card_title cs_fs_24 cs_semibold cs_mb_10 text-uppercase">
                  <a href="/service-details">PANEL CLADDING</a>
                </h3>
                <p class="cs_card_subtitle mb-0">Thin-wall exterior and interior wall cladding offering high weather protection, thermal buffering, and fire resistance.</p>
              </div>
            </div>
            <div class="cs_card_style_12">
              <a href="/service-details" class="cs_card_thumbnail cs_radius_10 cs_mb_45" aria-label="View details about Screens and Jali">
              <img src="/assets/img/service-img-22.webp" alt="Screens and Jali">
              </a>
              <div class="cs_card_info">
                <h3 class="cs_card_title cs_fs_24 cs_semibold cs_mb_10 text-uppercase">
                  <a href="/service-details">SCREENS & JALI</a>
                </h3>
                <p class="cs_card_subtitle mb-0">Custom perforated ornamental screens, sunshades, and utility duct covers with intricate geometric patterns.</p>
              </div>
            </div>
            <div class="cs_card_style_12">
              <a href="/service-details" class="cs_card_thumbnail cs_radius_10 cs_mb_45" aria-label="View details about Columns and Capitals">
              <img src="/assets/img/service-img-23.webp" alt="Columns and Capitals">
              </a>
              <div class="cs_card_info">
                <h3 class="cs_card_title cs_fs_24 cs_semibold cs_mb_10 text-uppercase">
                  <a href="/service-details">COLUMNS & CAPITALS</a>
                </h3>
                <p class="cs_card_subtitle mb-0">Hollow classical and modern columns, capitals, and bases that reduce structural dead-load on supporting slabs.</p>
              </div>
            </div>
            <div class="cs_card_style_12">
              <a href="/service-details" class="cs_card_thumbnail cs_radius_10 cs_mb_45" aria-label="View details about Cornices and Brackets">
              <img src="/assets/img/service-img-24.webp" alt="Cornices and Brackets">
              </a>
              <div class="cs_card_info">
                <h3 class="cs_card_title cs_fs_24 cs_semibold cs_mb_10 text-uppercase">
                  <a href="/service-details">CORNICES & BRACKETS</a>
                </h3>
                <p class="cs_card_subtitle mb-0">Intricate horizontal cornices, brackets, and jharokhas with rapid 24-hour demoulding turnaround.</p>
              </div>
            </div>
            <div class="cs_card_style_12">
              <a href="/service-details" class="cs_card_thumbnail cs_radius_10 cs_mb_45" aria-label="View details about Domes and Planters">
              <img src="/assets/img/service-img-25.webp" alt="Domes and Planters">
              </a>
              <div class="cs_card_info">
                <h3 class="cs_card_title cs_fs_24 cs_semibold cs_mb_10 text-uppercase">
                  <a href="/service-details">DOMES & PLANTERS</a>
                </h3>
                <p class="cs_card_subtitle mb-0">Custom architectural domes, modular window frames, large planters, and landscape elements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_120 cs_height_lg_80"></div>
    </section>
    <!-- End Service Section -->
    <!-- Start Why Choose Us Section -->
    <section class="cs_about_style_1 cs_type_1">
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="row cs_gap_y_40">
          <div class="col-lg-6 order-lg-2">
            <div class="cs_about_img_wrapper position-relative">
              <div class="cs_about_img1 cs_radius_10">
                <img src="/assets/img/about-img1.webp" alt="GFRC Arch element">
              </div>
              <div class="cs_about_img2">
                <img src="/assets/img/about-img2.webp" alt="GFRC Bracket element">
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="cs_skill_info">
              <div class="cs_section_heading_style_1 cs_mb_40">
                <p class="cs_section_subtitle cs_bold cs_accent_color cs_mb_10 text-uppercase">WHY CHOOSE SUMERU GFRC</p>
                <h2 class="cs_section_title cs_fs_53 cs_semibold cs_mb_20 text-uppercase">UNMATCHED STRENGTH, VERSATILITY & PRECISION.</h2>
                <p class="cs_mb_20">Alkali-resistant glass fibers distributed throughout the matrix eliminate the need for heavy steel rebar, enabling practical thin sections, reduced rigging costs, and unlimited 3D geometric freedom.</p>
                <p class="mb-0">Whether for modern commercial high-rises, luxury residential villas, or intricate heritage restoration projects, our GFRC delivers high impact resistance, non-combustibility, and low maintenance durability.</p>
              </div>
              <div class="cs_skill_progress_wrapper">
                <div class="cs_skill_progress">
                  <div class="cs_progress_head cs_fs_24 cs_semibold cs_primary_color cs_primary_font cs_mb_20 text-uppercase">WEIGHT REDUCTION (VS PRECAST)</div>
                  <div class="cs_progress cs_type_1" data-progress="50">
                    <div class="cs_progress_in"><span class=" cs_fs_24 cs_semibold cs_primary_color cs_primary_font">50% Lighter</span></div>
                  </div>
                </div>
                <div class="cs_skill_progress">
                  <div class="cs_progress_head cs_fs_24 cs_semibold cs_primary_color cs_primary_font cs_mb_20 text-uppercase">DEMOULDING SPEED & ACCURACY</div>
                  <div class="cs_progress cs_type_1" data-progress="95">
                    <div class="cs_progress_in"><span class=" cs_fs_24 cs_semibold cs_primary_color cs_primary_font">24h Demould</span></div>
                  </div>
                </div>
                <div class="cs_skill_progress">
                  <div class="cs_progress_head cs_fs_24 cs_semibold cs_primary_color cs_primary_font cs_mb_40 text-uppercase">TESTED GRADE 10P & 18P COMPLIANCE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Why Choose Us Section -->
    <!-- Start Team Section -->
    <section class="cs_service_layout_1">
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="cs_section_heading_style_1">
          <p class="cs_section_subtitle cs_bold cs_accent_color cs_mb_20 text-uppercase">OUR GFRC LEADERSHIP</p>
          <h2 class="cs_section_title cs_fs_53 cs_bold text-uppercase mb-0">Expert GFRC Specialists</h2>
        </div>
        <div class="cs_height_60 cs_height_lg_50"></div>
        <div class="row cs_gap_y_24">
          <div class="col-lg-4">
            <div class="cs_team_style_1 cs_gray_bg cs_radius_10">
              <div class="cs_team_thumbnail cs_radius_10 cs_mb_20 position-relative">
                <img src="/assets/img/team-img-1.webp" alt="Neeta Sharma - GFRC Unit-Head">
                <div class="cs_thumboverlay position-absolute"></div>
                <div class="cs_social_btns_style_1 position-absolute">
                  <a href="/contact-us" aria-label="Contact GFRC team">
                  <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                  </a>
                  <a href="/contact-us" aria-label="Contact GFRC unit on WhatsApp">
                  <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div class="cs_team_info text-center">
                <h3 class="cs_team_title cs_fs_24 cs_bold cs_mb_10 text-uppercase"><a href="/team-details">Neeta Sharma</a></h3>
                <p class="cs_team_designation cs_mb_10">GFRC Unit-Head</p>
                <p class="cs_team_description cs_mb_20">Over 14 years of specialized expertise leading high-profile architectural GFRC facade design, manufacturing, and turnkey execution at Sri Sumeru Realty.</p>
                <div class="cs_team_social_links cs_fs_14 cs_semibold cs_primary_font mt-auto">
                  <a href="/team-details">VIEW PROFILE</a>
                  <a href="/contact-us">GET IN TOUCH</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="cs_team_style_1 cs_gray_bg cs_radius_10">
              <div class="cs_team_thumbnail cs_radius_10 cs_mb_20 position-relative">
                <img src="/assets/img/team-img-2.webp" alt="Mould & Pattern Specialist">
                <div class="cs_thumboverlay position-absolute"></div>
                <div class="cs_social_btns_style_1 position-absolute">
                  <a href="/contact-us" aria-label="Contact GFRC team">
                  <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div class="cs_team_info text-center">
                <h3 class="cs_team_title cs_fs_24 cs_bold cs_mb_10 text-uppercase"><a href="/team-details">Mould & Pattern Engineering</a></h3>
                <p class="cs_team_designation cs_mb_10">Production & Pattern Specialist</p>
                <p class="cs_team_description cs_mb_20">Master pattern makers and mould specialists ensuring micrometer precision in complex 3D rubber and timber moulds for GFRC casting.</p>
                <div class="cs_team_social_links cs_fs_14 cs_semibold cs_primary_font mt-auto">
                  <a href="/team-details">VIEW PROFILE</a>
                  <a href="/contact-us">GET IN TOUCH</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="cs_team_style_1 cs_gray_bg cs_radius_10">
              <div class="cs_team_thumbnail cs_radius_10 cs_mb_20 position-relative">
                <img src="/assets/img/team-img-3.webp" alt="Site Erection Lead">
                <div class="cs_thumboverlay position-absolute"></div>
                <div class="cs_social_btns_style_1 position-absolute">
                  <a href="/contact-us" aria-label="Contact GFRC team">
                  <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div class="cs_team_info text-center">
                <h3 class="cs_team_title cs_fs_24 cs_bold cs_mb_10 text-uppercase"><a href="/team-details">Site & Structural Erection</a></h3>
                <p class="cs_team_designation cs_mb_10">Erection Engineering Supervisor</p>
                <p class="cs_team_description cs_mb_20">Certified engineers directing safe on-site rigging, seismic anchoring, and seamless installation across commercial and residential structures.</p>
                <div class="cs_team_social_links cs_fs_14 cs_semibold cs_primary_font mt-auto">
                  <a href="/team-details">VIEW PROFILE</a>
                  <a href="/contact-us">GET IN TOUCH</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_120 cs_height_lg_80"></div>
    </section>
    <!-- End Team Section -->
    <!-- Start CTA Section -->
    <section class="cs_cta_style_1 cs_bg_filed" data-src="/assets/img/cta-bg1.webp">
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="cs_cta_content text-center">
          <h2 class="cs_cta_title cs_fs_60 cs_bold cs_white_color cs_mb_30">ELEVATE YOUR ARCHITECTURE WITH LIGHTWEIGHT GFRC</h2>
          <p class="cs_cta_desc cs_white_color cs_mb_40">Partner with Sri Sri Sumeru Realty for custom GFRC screens, cladding, cornices, domes, and architectural elements built to highest durability standards.</p>
          <a href="/contact-us" class="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50 text-uppercase">
          <span>REQUEST A GFRC QUOTE</span>
          <span class="cs_btn_icon cs_radius_100 cs_center"><i class="fa-solid fa-arrow-right"></i></span>
          </a>
        </div>
      </div>
      <div class="cs_height_120 cs_height_lg_80"></div>
    </section>
    <!-- End CTA Section -->
</main>`;

// =========================================================================
// 2. SERVICES PAGE
// =========================================================================
updatedContent.pages.Services = `<main>
    <!-- Start Page Header Section -->
    <section class="cs_page_header_style_1 cs_bg_filed cs_gray_bg position-relative" data-src="/assets/img/page-header-bg1.webp">
      <div class="cs_overlay cs_primary_bg position-absolute"></div>
      <div class="container">
        <div class="cs_page_header_content text-center">
          <h1 class="cs_page_header_title cs_fs_80 cs_bold cs_white_color cs_mb_16">GFRC PRODUCTS & SERVICES</h1>
          <ol class="breadcrumb cs_center mb-0">
            <li class="breadcrumb-item"><a href="/" aria-label="Back to home button">Home</a></li>
            <li class="breadcrumb-item active">Products & Services</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Page Header Section -->
    <!-- Start Sliding Text Section -->
    <div class="cs_horizontal_slider cs_type_1 cs_accent_bg cs_primary_font">
      <div class="cs_slider_inner">
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>FACADE CLADDING PANELS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>JALI & SUNSCREENS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>COLUMNS & CAPITALS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>CORNICES & CORBELS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>BRACKETS & ARCHES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>HERITAGE DOMES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>PLANTERS & LANDSCAPING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>FACADE CLADDING PANELS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>JALI & SUNSCREENS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>COLUMNS & CAPITALS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>CORNICES & CORBELS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>BRACKETS & ARCHES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>HERITAGE DOMES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>PLANTERS & LANDSCAPING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
      </div>
    </div>
    <!-- End Sliding Text Section -->
    <!-- Start Service Section -->
    <section class="cs_service_layout_1">
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="cs_section_heading_style_1 cs_center_column text-center">
          <p class="cs_section_subtitle cs_bold cs_accent_color cs_mb_20 text-uppercase">OUR CORE PRODUCT OFFERINGS</p>
          <h2 class="cs_section_title cs_fs_53 cs_semibold mb-0">ARCHITECTURAL GFRC CATALOG</h2>
        </div>
        <div class="cs_height_60 cs_height_lg_50"></div>
        <div class="cs_grid_style_1" role="list">
          <div class="cs_iconbox_style_6 cs_gray_bg cs_radius_10 text-center" role="listitem">
            <span class="cs_iconbox_icon cs_center cs_accent_color cs_mb_20" aria-hidden="true">
            <img src="/assets/img/icons/innovation.svg" alt="GFRC Screens icon">
            </span>
            <div class="cs_iconbox_info">
              <h3 class="cs_iconbox_title cs_fs_24 cs_bold cs_mb_16 text-uppercase">
                <a href="/service-details">SCREENS & JALI</a>
              </h3>
              <p class="cs_iconbox_subtitle cs_mb_30">Decorative facade screens, sunscreens, and utility duct covers providing aesthetic ventilation and daylight diffusion.</p>
              <a href="/service-details" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color text-uppercase">
              <span>EXPLORE DETAILS</span>
              <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
              </a>
            </div>
          </div>
          <div class="cs_iconbox_style_6 cs_gray_bg cs_radius_10 text-center" role="listitem">
            <span class="cs_iconbox_icon cs_center cs_accent_color cs_mb_20" aria-hidden="true">
            <img src="/assets/img/icons/pen-icon.svg" alt="Panel Cladding icon">
            </span>
            <div class="cs_iconbox_info">
              <h3 class="cs_iconbox_title cs_fs_24 cs_bold cs_mb_16 text-uppercase">
                <a href="/service-details">PANEL CLADDING</a>
              </h3>
              <p class="cs_iconbox_subtitle cs_mb_30">External & interior wall cladding engineered for high weather resistance, thermal buffering, and fire-spread protection.</p>
              <a href="/service-details" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color text-uppercase">
              <span>EXPLORE DETAILS</span>
              <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
              </a>
            </div>
          </div>
          <div class="cs_iconbox_style_6 cs_gray_bg cs_radius_10 text-center" role="listitem">
            <span class="cs_iconbox_icon cs_center cs_accent_color cs_mb_20" aria-hidden="true">
            <img src="/assets/img/icons/design.svg" alt="Columns & Capitals icon">
            </span>
            <div class="cs_iconbox_info">
              <h3 class="cs_iconbox_title cs_fs_24 cs_bold cs_mb_16 text-uppercase">
                <a href="/service-details">COLUMNS & CAPITALS</a>
              </h3>
              <p class="cs_iconbox_subtitle cs_mb_30">Columns, fluted capitals, decorative bases, and structural encasements for pavilions, porticos, and grand lobbies.</p>
              <a href="/service-details" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color text-uppercase">
              <span>EXPLORE DETAILS</span>
              <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
              </a>
            </div>
          </div>
          <div class="cs_iconbox_style_6 cs_gray_bg cs_radius_10 text-center" role="listitem">
            <span class="cs_iconbox_icon cs_center cs_accent_color cs_mb_20" aria-hidden="true">
            <img src="/assets/img/icons/decor.svg" alt="Cornices & Corbels icon">
            </span>
            <div class="cs_iconbox_info">
              <h3 class="cs_iconbox_title cs_fs_24 cs_bold cs_mb_16 text-uppercase">
                <a href="/service-details">CORNICES & CORBELS</a>
              </h3>
              <p class="cs_iconbox_subtitle cs_mb_30">External and internal continuous decorative cornices with arches and sharp geometric profiles at all building heights.</p>
              <a href="/service-details" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color text-uppercase">
              <span>EXPLORE DETAILS</span>
              <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
              </a>
            </div>
          </div>
          <div class="cs_iconbox_style_6 cs_gray_bg cs_radius_10 text-center" role="listitem">
            <span class="cs_iconbox_icon cs_center cs_accent_color cs_mb_20" aria-hidden="true">
            <img src="/assets/img/icons/unmatched.svg" alt="Brackets & Arches icon">
            </span>
            <div class="cs_iconbox_info">
              <h3 class="cs_iconbox_title cs_fs_24 cs_bold cs_mb_16 text-uppercase">
                <a href="/service-details">BRACKETS & ARCHES</a>
              </h3>
              <p class="cs_iconbox_subtitle cs_mb_30">Designer brackets, jharokhas, and entryway archways with fine surface texture and intricate cantilever styling.</p>
              <a href="/service-details" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color text-uppercase">
              <span>EXPLORE DETAILS</span>
              <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
              </a>
            </div>
          </div>
          <div class="cs_iconbox_style_6 cs_gray_bg cs_radius_10 text-center" role="listitem">
            <span class="cs_iconbox_icon cs_center cs_accent_color cs_mb_20" aria-hidden="true">
            <img src="/assets/img/icons/chair.svg" alt="Domes & Planters icon">
            </span>
            <div class="cs_iconbox_info">
              <h3 class="cs_iconbox_title cs_fs_24 cs_bold cs_mb_16 text-uppercase">
                <a href="/service-details">DOMES & PLANTERS</a>
              </h3>
              <p class="cs_iconbox_subtitle cs_mb_30">Sturdy architectural domes, modular window frames, large-scale planters, balustrades, and landscape sound barriers.</p>
              <a href="/service-details" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color text-uppercase">
              <span>EXPLORE DETAILS</span>
              <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_120 cs_height_lg_80"></div>
    </section>
    <!-- End Service Section -->
    <!-- Start Projects Section -->
    <section class="cs_horizontal_slider cs_type_6 cs_primary_bg cs_bg_filed position-relative" data-src="/assets/img/project-bg1.webp">
      <div class="cs_slider_inner">
        <div class="cs_sliding_content" role="region">
          <div class="cs_card_style_10" role="group">
            <div class="cs_card_content">
              <h2 class="cs_card_title cs_fs_24 cs_bold cs_white_color cs_mb_16">
                <a href="/portfolio-details">FACADE CLADDING & PANELS</a>
              </h2>
              <div class="cs_card_desc">
                <p class="cs_card_subtitle cs_white_color cs_mb_30">High-performance Grade 18P GFRC exterior cladding engineered for superior wind load resistance and thermal insulation.</p>
                <a href="/portfolio-details" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color">
                <span>VIEW CASE STUDY</span>
                <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </a>
              </div>
            </div>
          </div>
          <div class="cs_card_style_10" role="group">
            <div class="cs_card_content">
              <h2 class="cs_card_title cs_fs_24 cs_bold cs_white_color cs_mb_16">
                <a href="/portfolio-details">JALI & SUNSCREEN SCREENS</a>
              </h2>
              <div class="cs_card_desc">
                <p class="cs_card_subtitle cs_white_color cs_mb_30">Lightweight perforated concrete screens offering privacy, natural airflow, and dynamic geometric shading.</p>
                <a href="/portfolio-details" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color">
                <span>VIEW CASE STUDY</span>
                <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </a>
              </div>
            </div>
          </div>
          <div class="cs_card_style_10" role="group">
            <div class="cs_card_content">
              <h2 class="cs_card_title cs_fs_24 cs_bold cs_white_color cs_mb_16">
                <a href="/portfolio-details">DOMES & ARCH RESTORATION</a>
              </h2>
              <div class="cs_card_desc">
                <p class="cs_card_subtitle cs_white_color cs_mb_30">Intricate reproduction of historical domes, cornices, and jharokhas with zero excess dead-weight on building foundations.</p>
                <a href="/portfolio-details" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color">
                <span>VIEW CASE STUDY</span>
                <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </a>
              </div>
            </div>
          </div>
          <div class="cs_card_style_10" role="group">
            <div class="cs_card_content">
              <h2 class="cs_card_title cs_fs_24 cs_bold cs_white_color cs_mb_16">
                <a href="/portfolio-details">COLUMNS & CORNICE BANDS</a>
              </h2>
              <div class="cs_card_desc">
                <p class="cs_card_subtitle cs_white_color cs_mb_30">Seamless architectural columns, continuous horizontal cornices, and bracket accents demoulded in 24 hours.</p>
                <a href="/portfolio-details" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color">
                <span>VIEW CASE STUDY</span>
                <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="cs_sliding_content" role="region">
          <div class="cs_card_style_10" role="group">
            <div class="cs_card_content">
              <h2 class="cs_card_title cs_fs_24 cs_bold cs_white_color cs_mb_16">
                <a href="/portfolio-details">FACADE CLADDING & PANELS</a>
              </h2>
              <div class="cs_card_desc">
                <p class="cs_card_subtitle cs_white_color cs_mb_30">High-performance Grade 18P GFRC exterior cladding engineered for superior wind load resistance and thermal insulation.</p>
                <a href="/portfolio-details" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color">
                <span>VIEW CASE STUDY</span>
                <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </a>
              </div>
            </div>
          </div>
          <div class="cs_card_style_10" role="group">
            <div class="cs_card_content">
              <h2 class="cs_card_title cs_fs_24 cs_bold cs_white_color cs_mb_16">
                <a href="/portfolio-details">JALI & SUNSCREEN SCREENS</a>
              </h2>
              <div class="cs_card_desc">
                <p class="cs_card_subtitle cs_white_color cs_mb_30">Lightweight perforated concrete screens offering privacy, natural airflow, and dynamic geometric shading.</p>
                <a href="/portfolio-details" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color">
                <span>VIEW CASE STUDY</span>
                <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </a>
              </div>
            </div>
          </div>
          <div class="cs_card_style_10" role="group">
            <div class="cs_card_content">
              <h2 class="cs_card_title cs_fs_24 cs_bold cs_white_color cs_mb_16">
                <a href="/portfolio-details">DOMES & ARCH RESTORATION</a>
              </h2>
              <div class="cs_card_desc">
                <p class="cs_card_subtitle cs_white_color cs_mb_30">Intricate reproduction of historical domes, cornices, and jharokhas with zero excess dead-weight on building foundations.</p>
                <a href="/portfolio-details" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color">
                <span>VIEW CASE STUDY</span>
                <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </a>
              </div>
            </div>
          </div>
          <div class="cs_card_style_10" role="group">
            <div class="cs_card_content">
              <h2 class="cs_card_title cs_fs_24 cs_bold cs_white_color cs_mb_16">
                <a href="/portfolio-details">COLUMNS & CORNICE BANDS</a>
              </h2>
              <div class="cs_card_desc">
                <p class="cs_card_subtitle cs_white_color cs_mb_30">Seamless architectural columns, continuous horizontal cornices, and bracket accents demoulded in 24 hours.</p>
                <a href="/portfolio-details" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color">
                <span>VIEW CASE STUDY</span>
                <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Projects Section -->
    <!-- Start Portfolio Section -->
    <section class="cs_tabs">
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="cs_section_heading_style_1 cs_center_column text-center">
          <p class="cs_section_subtitle cs_bold cs_accent_color cs_mb_20 text-uppercase">GALLERY HIGHLIGHTS</p>
          <h2 class="cs_section_title cs_fs_60 cs_bold mb-0">PROVEN GFRC INSTALLATIONS</h2>
        </div>
        <div class="cs_height_40 cs_height_lg_40"></div>
        <div class="cs_grid_style_2">
          <div class="cs_card_style_1 cs_radius_10 position-relative">
            <a href="/portfolio-details" class="cs_card_thumbnail cs_custom_pointer_wrap position-relative">
            <span class="cs_mouse_point cs_center cs_white_bg cs_radius_100 cs_fs_18 cs_bold cs_primary_color cs_primary_font text-center">VIEW PROJECT</span>
            <img src="/assets/img/portfolio-img-1.webp" alt="Commercial GFRC Facade">
            </a>
            <div class="cs_card_info cs_gray_bg">
              <h3 class="cs_card_title cs_fs_18 cs_bold mb-0">
                <a href="/portfolio-details">COMMERCIAL FACADE</a>
              </h3>
              <p class="mb-0">GFRC Cladding Panels</p>
              <a href="/portfolio-details" class="cs_arrow_btn cs_center cs_radius_100 position-absolute"><i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
          </div>
          <div class="cs_card_style_1 cs_radius_10 position-relative">
            <a href="/portfolio-details" class="cs_card_thumbnail cs_custom_pointer_wrap position-relative">
            <span class="cs_mouse_point cs_center cs_white_bg cs_radius_100 cs_fs_18 cs_bold cs_primary_color cs_primary_font text-center">VIEW PROJECT</span>
            <img src="/assets/img/portfolio-img-2.webp" alt="Architectural Jali Facade">
            </a>
            <div class="cs_card_info cs_gray_bg">
              <h3 class="cs_card_title cs_fs_18 cs_bold mb-0">
                <a href="/portfolio-details">SUMERU TOWER JALI</a>
              </h3>
              <p class="mb-0">Sunscreens & Duct Covers</p>
              <a href="/portfolio-details" class="cs_arrow_btn cs_center cs_radius_100 position-absolute"><i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
          </div>
          <div class="cs_card_style_1 cs_radius_10 position-relative">
            <a href="/portfolio-details" class="cs_card_thumbnail cs_custom_pointer_wrap position-relative">
            <span class="cs_mouse_point cs_center cs_white_bg cs_radius_100 cs_fs_18 cs_bold cs_primary_color cs_primary_font text-center">VIEW PROJECT</span>
            <img src="/assets/img/portfolio-img-3.webp" alt="GFRC Classical Dome">
            </a>
            <div class="cs_card_info cs_gray_bg">
              <h3 class="cs_card_title cs_fs_18 cs_bold mb-0">
                <a href="/portfolio-details">HERITAGE DOME</a>
              </h3>
              <p class="mb-0">Domes & Historical Elements</p>
              <a href="/portfolio-details" class="cs_arrow_btn cs_center cs_radius_100 position-absolute"><i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
          </div>
          <div class="cs_card_style_1 cs_radius_10 position-relative">
            <a href="/portfolio-details" class="cs_card_thumbnail cs_custom_pointer_wrap position-relative">
            <span class="cs_mouse_point cs_center cs_white_bg cs_radius_100 cs_fs_18 cs_bold cs_primary_color cs_primary_font text-center">VIEW PROJECT</span>
            <img src="/assets/img/portfolio-img-4.webp" alt="Classical GFRC Columns">
            </a>
            <div class="cs_card_info cs_gray_bg">
              <h3 class="cs_card_title cs_fs_18 cs_bold mb-0">
                <a href="/portfolio-details">GRAND ENTRANCE COLUMNS</a>
              </h3>
              <p class="mb-0">Columns, Capitals & Bases</p>
              <a href="/portfolio-details" class="cs_arrow_btn cs_center cs_radius_100 position-absolute"><i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_120 cs_height_lg_80"></div>
    </section>
    <!-- End Portfolio Section -->
</main>`;

// =========================================================================
// 3. SERVICE DETAILS PAGE
// =========================================================================
updatedContent.pages.ServiceDetails = `<main>
    <!-- Start Page Header Section -->
    <section class="cs_page_header_style_1 cs_bg_filed cs_gray_bg position-relative" data-src="/assets/img/page-header-bg1.webp">
      <div class="cs_overlay cs_primary_bg position-absolute"></div>
      <div class="container">
        <div class="cs_page_header_content text-center">
          <h1 class="cs_page_header_title cs_fs_80 cs_bold cs_white_color cs_mb_16">GFRC SERVICE DETAILS</h1>
          <ol class="breadcrumb cs_center mb-0">
            <li class="breadcrumb-item"><a href="/" aria-label="Back to home button">Home</a></li>
            <li class="breadcrumb-item active">Service Details</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Page Header Section -->
    <!-- Start Sliding Text Section -->
    <div class="cs_horizontal_slider cs_type_1 cs_accent_bg cs_primary_font">
      <div class="cs_slider_inner">
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>SPRAY-UP & PREMIX FABRICATION</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>THIN-WALL ARCHITECTURAL CASTING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>GRADE 10P & 18P CERTIFIED</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>CUSTOM 3D MOULD ENGINEERING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>FAST 24-HOUR DEMOULDING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>SPRAY-UP & PREMIX FABRICATION</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>THIN-WALL ARCHITECTURAL CASTING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>GRADE 10P & 18P CERTIFIED</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>CUSTOM 3D MOULD ENGINEERING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>FAST 24-HOUR DEMOULDING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
      </div>
    </div>
    <!-- End Sliding Text Section -->
    <!-- Start Service Details Section -->
    <section>
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="row cs_gap_y_40">
          <div class="col-xl-4 col-lg-5">
            <aside class="cs_sidebar_style_3">
              <div class="cs_sidebar_widget">
                <div class="cs_service_list_wrapper cs_gray_bg cs_radius_10">
                  <h2 class="cs_widget_title cs_fs_30 cs_semibold cs_mb_40 cs_mb_lg_30">GFRC PRODUCT LINES</h2>
                  <ul class="cs_service_list cs_mp_0 cs_fs_18 cs_bold cs_primary_font cs_primary_color text-uppercase">
                    <li>
                      <a href="/service-details">
                      <span>PANEL CLADDING</span>
                      <span><i class="fa-solid fa-arrow-right"></i></span>
                      </a>
                    </li>
                    <li>
                      <a href="/service-details">
                      <span>SCREENS & JALI</span>
                      <span><i class="fa-solid fa-arrow-right"></i></span>
                      </a>
                    </li>
                    <li>
                      <a href="/service-details">
                      <span>COLUMNS & CAPITALS</span>
                      <span><i class="fa-solid fa-arrow-right"></i></span>
                      </a>
                    </li>
                    <li>
                      <a href="/service-details">
                      <span>CORNICES & CORBELS</span>
                      <span><i class="fa-solid fa-arrow-right"></i></span>
                      </a>
                    </li>
                    <li>
                      <a href="/service-details">
                      <span>BRACKETS & ARCHES</span>
                      <span><i class="fa-solid fa-arrow-right"></i></span>
                      </a>
                    </li>
                    <li>
                      <a href="/service-details">
                      <span>DOMES & PLANTERS</span>
                      <span><i class="fa-solid fa-arrow-right"></i></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="cs_sidebar_widget">
                <div class="cs_contact_card cs_accent_bg cs_radius_10">
                  <div class="cs_contact_card_inner cs_bg_filed text-center" data-src="/assets/img/contact-img1.webp">
                    <span class="cs_contact_icon cs_center cs_mb_24">
                    <img src="/assets/img/icons/cell.svg" alt="Phone icon">
                    </span>
                    <div class="cs_contact_info">
                      <h3 class="cs_contact_title cs_fs_30 cs_semibold cs_white_color cs_mb_16">ENQUIRE GFRC TEAM</h3>
                      <p class="cs_contact_subtitle cs_white_color cs_mb_16">Contact Sri Sri Sumeru Realty GFRC division for design consulting, shop drawings, and quotation.</p>
                      <a href="/contact-us" class="cs_fs_18 cs_bold cs_white_color cs_primary_font">GET IN TOUCH NOW</a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <div class="col-xl-8 col-lg-7">
            <div class="cs_service_details">
              <div class="cs_service_banner cs_radius_10">
                <img src="/assets/img/service-img-26.webp" alt="GFRC Facade Cladding Banner">
              </div>
              <article>
                <h2>ADVANCED GFRC COMPOSITE TECHNOLOGY</h2>
                <p>Glass Fiber Reinforced Concrete (GFRC) represents the pinnacle of modern architectural facade engineering. Composed of high-grade Portland cement, carefully graded silica aggregates, acrylic thermoplastic polymers, and high-zirconia alkali-resistant (AR) glass fibers, GFRC achieves high tensile and flexural strength without traditional steel reinforcement bars.</p>
                <p>This allows architectural components to be cast with practical thin-wall sections between 12mm and 25mm. The result is a lightweight composite that reduces building structural dead loads by up to 50%, dramatically lowering foundation requirements, crane rigging costs, and transport overheads while allowing unlimited geometric design freedom.</p>
              </article>
              <article>
                <h2>PRECISION MANUFACTURING PROCESSES</h2>
                <p>Our Sumeru GFRC production facility operates both industry-leading manufacturing techniques:</p>
              </article>
            </div>
            <div class="cs_design_features_wrapper">
              <div class="cs_iconbox_style_3">
                <span class="cs_iconbox_icon cs_center cs_mb_20">
                  <img src="/assets/img/icons/3dart.svg" alt="Spray-up icon">
                </span>
                <div class="cs_iconbox_info">
                  <h3 class="cs_iconbox_title cs_fs_24 cs_semibold cs_mb_16 text-uppercase">
                    <a href="/service-details">SPRAY-UP PROCESS</a>
                  </h3>
                  <p class="cs_iconbox_subtitle cs_mb_21">High-pressure spray gun simultaneously deposits slurry and chopped AR glass fibers into moulds, creating optimum multi-directional fiber orientation for maximum flexural strength (Grade 18P).</p>
                  <a href="/contact-us" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color text-uppercase">
                    <span>Enquire Spray-Up</span>
                    <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                  </a>
                </div>
              </div>
              <div class="cs_iconbox_style_3">
                <span class="cs_iconbox_icon cs_center cs_mb_20">
                  <img src="/assets/img/icons/tailored.svg" alt="Premix icon">
                </span>
                <div class="cs_iconbox_info">
                  <h3 class="cs_iconbox_title cs_fs_24 cs_semibold cs_mb_16 text-uppercase">
                    <a href="/service-details">PREMIX CASTING</a>
                  </h3>
                  <p class="cs_iconbox_subtitle cs_mb_21">Slurry and premixed glass fibers are poured or vibration-cast into intricate 3D moulds for hollow decorative brackets, ornamental jalis, balusters, and planters.</p>
                  <a href="/contact-us" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color text-uppercase">
                    <span>Enquire Premix</span>
                    <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="cs_service_details_img">
              <div class="row cs_gap_y_24">
                <div class="col-md-6">
                  <div class="cs_details_img cs_radius_10">
                    <img src="/assets/img/service-img-1.webp" alt="GFRC Decorative Bracket detail">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="cs_details_img cs_radius_10">
                    <img src="/assets/img/service-img-2.webp" alt="GFRC Screen Pattern detail">
                  </div>
                </div>
              </div>
            </div>
            <div class="cs_service_faq">
              <h2>TECHNICAL SPECIFICATIONS & FAQ</h2>
              <div class="cs_accordians_wrapper_2">
                <div class="cs_accordian cs_style_2">
                  <div class="cs_accordian_head position-relative">
                    <h3 class="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">WHAT ARE THE MECHANICAL PROPERTIES OF GRADE 10P AND 18P?</h3>
                    <span class="cs_accordian_toggler"></span>
                  </div>
                  <div class="cs_accordian_body">Grade 10/10P provides a Characteristic LOP of 7 N/mm² and MOR of 10 N/mm² with bulk dry density of 1800 kg/m³. Grade 18/18P achieves a high MOR of 18 N/mm² for high wind-load facade panels and seismic resilience.</div>
                </div>
                <div class="cs_accordian cs_style_2">
                  <div class="cs_accordian_head position-relative">
                    <h3 class="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">HOW FAST CAN GFRC COMPONENTS BE DEMOULDED?</h3>
                    <span class="cs_accordian_toggler"></span>
                  </div>
                  <div class="cs_accordian_body">Thanks to high early strength development from acrylic polymer curing agents, GFRC elements can typically be demoulded in around 24 hours, ensuring fast turnaround for large architectural projects.</div>
                </div>
                <div class="cs_accordian cs_style_2">
                  <div class="cs_accordian_head position-relative">
                    <h3 class="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">IS GFRC WEATHER AND FIRE RESISTANT?</h3>
                    <span class="cs_accordian_toggler"></span>
                  </div>
                  <div class="cs_accordian_body">Yes, GFRC is non-combustible and demonstrates excellent resistance against freeze-thaw cycles, UV exposure, salt air corrosion, mold/fungi, and industrial atmospheric pollution.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_120 cs_height_lg_80"></div>
    </section>
    <!-- End Service Details Section -->
</main>`;

// =========================================================================
// 4. PORTFOLIO PAGE
// =========================================================================
updatedContent.pages.Portfolio = `<main>
    <!-- Start Page Header Section -->
    <section class="cs_page_header_style_1 cs_bg_filed cs_gray_bg position-relative" data-src="/assets/img/page-header-bg1.webp">
      <div class="cs_overlay cs_primary_bg position-absolute"></div>
      <div class="container">
        <div class="cs_page_header_content text-center">
          <h1 class="cs_page_header_title cs_fs_80 cs_bold cs_white_color cs_mb_16">GFRC PROJECTS PORTFOLIO</h1>
          <ol class="breadcrumb cs_center mb-0">
            <li class="breadcrumb-item"><a href="/" aria-label="Back to home button">Home</a></li>
            <li class="breadcrumb-item active">Portfolio</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Page Header Section -->
    <!-- Start Sliding Text Section -->
    <div class="cs_horizontal_slider cs_type_1 cs_accent_bg cs_primary_font">
      <div class="cs_slider_inner">
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>FACADE CLADDING PROJECTS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>ORNAMENTAL JALI SCREENS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>HERITAGE DOMES & RESTORATION</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>LUXURY VILLA CORNICES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>COMMERCIAL HIGH-RISE ELEVATIONS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>FACADE CLADDING PROJECTS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>ORNAMENTAL JALI SCREENS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>HERITAGE DOMES & RESTORATION</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>LUXURY VILLA CORNICES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>COMMERCIAL HIGH-RISE ELEVATIONS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
      </div>
    </div>
    <!-- End Sliding Text Section -->
    <!-- Start Team Section -->
    <section class="cs_service_layout_1">
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="cs_section_heading_style_1 cs_center_column text-center">
          <p class="cs_section_subtitle cs_bold cs_accent_color cs_mb_20 text-uppercase">FEATURED WORK</p>
          <h2 class="cs_section_title cs_fs_53 cs_semibold text-uppercase mb-0">PROVEN GFRC ARCHITECTURAL EXCELLENCE</h2>
        </div>
        <div class="cs_height_60 cs_height_lg_50"></div>
        <div class="cs_cards_wrapper_2" role="list" aria-label="Portfolio projects">
          <div class="cs_card_style_13" role="listitem">
            <a href="/portfolio-details" class="cs_card_thumbnail cs_radius_10" aria-label="View project: Custom GFRC Facade Screen & Jali">
            <img src="/assets/img/portfolio-img-21.webp" alt="Custom GFRC Facade Screen and Jali installation">
            </a>
            <div class="cs_card_info">
              <p class="cs_card_subtitle cs_primary_color cs_mb_20">
                <time datetime="2025-08-15">SUMERU DEVELOPMENTS - COMMERCIAL FACADE</time>
              </p>
              <h3 class="cs_card_title cs_fs_53 cs_semibold cs_mb_20">
                <a href="/portfolio-details">
                CUSTOM GFRC SCREEN FAÇADE & GEOMETRIC JALI
                </a>
              </h3>
              <a href="/portfolio-details" class="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50">
              <span>EXPLORE CASE STUDY</span>
              <span class="cs_btn_icon cs_radius_100 cs_center" aria-hidden="true">
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </span>
              </a>
            </div>
          </div>
          <div class="cs_card_style_13" role="listitem">
            <a href="/portfolio-details" class="cs_card_thumbnail cs_radius_10" aria-label="View project: GFRC Panel Cladding Commercial Tower">
            <img src="/assets/img/portfolio-img-22.webp" alt="GFRC Panel Cladding Commercial Elevation">
            </a>
            <div class="cs_card_info">
              <p class="cs_card_subtitle cs_primary_color cs_mb_20">
                <time datetime="2025-05-10">ARCHITECTURAL TOWER - EXTERIOR CLADDING</time>
              </p>
              <h3 class="cs_card_title cs_fs_53 cs_semibold cs_mb_20">
                <a href="/portfolio-details">
                HIGH-STRENGTH GFRC EXTERNAL WALL CLADDING
                </a>
              </h3>
              <a href="/portfolio-details" class="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50">
              <span>EXPLORE CASE STUDY</span>
              <span class="cs_btn_icon cs_radius_100 cs_center" aria-hidden="true">
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </span>
              </a>
            </div>
          </div>
          <div class="cs_card_style_13" role="listitem">
            <a href="/portfolio-details" class="cs_card_thumbnail cs_radius_10" aria-label="View project: Heritage Dome & Classical Cornices">
            <img src="/assets/img/portfolio-img-23.webp" alt="GFRC Classical Dome and Architectural Elements">
            </a>
            <div class="cs_card_info">
              <p class="cs_card_subtitle cs_primary_color cs_mb_20">
                <time datetime="2024-11-20">HERITAGE COMPLEX - RESTORATION & DOMES</time>
              </p>
              <h3 class="cs_card_title cs_fs_53 cs_semibold cs_mb_20">
                <a href="/portfolio-details">
                CLASSICAL GFRC DOMES, JHAROKHAS & CORNICE PROFILES
                </a>
              </h3>
              <a href="/portfolio-details" class="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50">
              <span>EXPLORE CASE STUDY</span>
              <span class="cs_btn_icon cs_radius_100 cs_center" aria-hidden="true">
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_120 cs_height_lg_80"></div>
    </section>
    <!-- End Team Section -->
</main>`;

// =========================================================================
// 5. PORTFOLIO DETAILS PAGE
// =========================================================================
updatedContent.pages.PortfolioDetails = `<main>
    <!-- Start Page Header Section -->
    <section class="cs_page_header_style_1 cs_bg_filed cs_gray_bg position-relative" data-src="/assets/img/page-header-bg1.webp">
      <div class="cs_overlay cs_primary_bg position-absolute"></div>
      <div class="container">
        <div class="cs_page_header_content text-center">
          <h1 class="cs_page_header_title cs_fs_80 cs_bold cs_white_color cs_mb_16">PROJECT DETAILS</h1>
          <ol class="breadcrumb cs_center mb-0">
            <li class="breadcrumb-item"><a href="/" aria-label="Back to home button">Home</a></li>
            <li class="breadcrumb-item active">Portfolio Details</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Page Header Section -->
    <!-- Start Sliding Text Section -->
    <div class="cs_horizontal_slider cs_type_1 cs_accent_bg cs_primary_font">
      <div class="cs_slider_inner">
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>ENGINEERED GFRC FACADES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>50% STRUCTURAL WEIGHT REDUCTION</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>PRECISION 3D MOULD MAKING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>SPRAY-UP MIST COAT FINISH</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>ENGINEERED GFRC FACADES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>50% STRUCTURAL WEIGHT REDUCTION</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>PRECISION 3D MOULD MAKING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>SPRAY-UP MIST COAT FINISH</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
      </div>
    </div>
    <!-- End Sliding Text Section -->
    <!-- Start Portfolio Details Section -->
    <section>
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="row cs_gap_y_40">
          <div class="col-lg-8">
            <div class="cs_portfolio_details">
              <div class="cs_portfolio_banner cs_radius_10 cs_mb_20">
                <img src="/assets/img/portfolio-img-24.webp" alt="GFRC Facade Project Banner">
              </div>
              <p class="cs_portfolio_category">ARCHITECTURAL GFRC FACADE & CLADDING</p>
              <h2>Sumeru Horizon Commercial GFRC Elevation</h2>
              <p>This project required custom-moulded Glass Fiber Reinforced Concrete (GFRC) panels to create a continuous sculptural facade with integrated solar shading jalis and lightweight cornice bands. Standard precast concrete would have exceeded the cantilever load limits of the upper structural slabs, making GFRC composite the ideal lightweight, high-tensile material solution.</p>
              <p>Through our dedicated in-house mould making and spray-up fabrication, we produced large-format Grade 18P panels with minimal seams, superior crack resistance, and a smooth architectural sandstone finish that will withstand severe weather without requiring frequent repainting or maintenance.</p>
              <div class="cs_construction_feature">
                <h3>Technical Execution & Quality Control</h3>
                <div class="row cs_gap_y_30">
                  <div class="col-xl-6">
                    <div class="cs_feature_img cs_radius_10">
                      <img src="/assets/img/portfolio-img-25.webp" alt="GFRC Screen Pattern Execution">
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <ul class="cs_feature_list cs_fs_24 cs_semibold cs_primary_color cs_primary_font list-unstyled">
                      <li>
                        <img src="/assets/img/icons/checkmark2.svg" alt="Checkmark icon">
                        <span>50% lighter than traditional precast</span>
                      </li>
                      <li>
                        <img src="/assets/img/icons/checkmark2.svg" alt="Checkmark icon">
                        <span>Alkali-resistant glass fiber matrix</span>
                      </li>
                      <li>
                        <img src="/assets/img/icons/checkmark2.svg" alt="Checkmark icon">
                        <span>Rapid 24-hour demould turnaround</span>
                      </li>
                      <li>
                        <img src="/assets/img/icons/checkmark2.svg" alt="Checkmark icon">
                        <span>Non-combustible & weather-tight</span>
                      </li>
                      <li>
                        <img src="/assets/img/icons/checkmark2.svg" alt="Checkmark icon">
                        <span>Grade 18 / 18P high-flexural strength</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <article>
                <h3>Site Erection & Anchoring Excellence</h3>
                <p>Lower weight allowed faster on-site hoisting and erection without heavy mobile cranes. Custom embedded stainless-steel anchors allowed precision alignment and thermal movement compensation across all building stories.</p>
              </article>
              <div class="cs_portfolio_gallery">
                <div class="row cs_gap_y_24">
                  <div class="col-md-6">
                    <div class="cs_portfolio_img cs_radius_10">
                      <img src="/assets/img/portfolio-img-26.webp" alt="GFRC Arch element">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="cs_portfolio_img cs_radius_10">
                      <img src="/assets/img/portfolio-img-27.webp" alt="GFRC Bracket element">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <aside class="cs_sidebar_style_2">
              <div class="cs_sidebar_widget">
                <div class="cs_clients_list_container cs_gray_bg cs_radius_10">
                  <h3 class="cs_widget_heading cs_fs_24 cs_bold cs_mb_30">Project Information</h3>
                  <ul class="cs_clients_list cs_mp_0">
                    <li>
                      <div class="cs_avata_style_1">
                        <span class="cs_avatar_icon cs_center cs_radius_100">
                        <img src="/assets/img/team-img-1.webp" alt="Neeta Sharma">
                        </span>
                        <div class="cs_avatar_info">
                          <p class="cs_avatar_subtitle cs_mb_5 lh-1">Unit Head :</p>
                          <h3 class="cs_avatar_title cs_fs_20 cs_semibold mb-0 lh-1">Neeta Sharma</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="cs_avata_style_1">
                        <span class="cs_avatar_icon cs_center cs_radius_100">
                        <img src="/assets/img/icons/innovation.svg" alt="Material Icon">
                        </span>
                        <div class="cs_avatar_info">
                          <p class="cs_avatar_subtitle cs_mb_5 lh-1">Material :</p>
                          <h3 class="cs_avatar_title cs_fs_20 cs_semibold mb-0 lh-1">GFRC Grade 18P</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="cs_avata_style_1">
                        <span class="cs_avatar_icon cs_center cs_radius_100">
                        <img src="/assets/img/icons/decor.svg" alt="Category Icon">
                        </span>
                        <div class="cs_avatar_info">
                          <p class="cs_avatar_subtitle cs_mb_5 lh-1">Scope :</p>
                          <h3 class="cs_avatar_title cs_fs_20 cs_semibold mb-0 lh-1">Cladding & Jalis</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="cs_avata_style_1">
                        <span class="cs_avatar_icon cs_center cs_radius_100">
                        <img src="/assets/img/icons/location.svg" alt="Company Icon">
                        </span>
                        <div class="cs_avatar_info">
                          <p class="cs_avatar_subtitle cs_mb_5 lh-1">Company :</p>
                          <h3 class="cs_avatar_title cs_fs_20 cs_semibold mb-0 lh-1">Sri Sumeru Realty</h3>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="cs_sidebar_widget">
                <div class="cs_contact_card cs_accent_bg cs_radius_10">
                  <div class="cs_contact_card_inner cs_bg_filed text-center" data-src="/assets/img/contact-img1.webp">
                    <span class="cs_contact_icon cs_center cs_mb_24">
                    <img src="/assets/img/icons/cell.svg" alt="Phone icon">
                    </span>
                    <div class="cs_contact_info">
                      <h3 class="cs_contact_title cs_fs_30 cs_semibold cs_white_color cs_mb_16">Need Help ? Enquire Now</h3>
                      <p class="cs_contact_subtitle cs_white_color cs_mb_16">Speak with our GFRC technical team for architectural consultations and custom mould estimation.</p>
                      <a href="/contact-us" class="cs_fs_18 cs_bold cs_white_color cs_primary_font">GET IN TOUCH</a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <div class="cs_height_120 cs_height_lg_80"></div>
    </section>
    <!-- End Portfolio Details Section -->
</main>`;

// =========================================================================
// 6. TEAM PAGE
// =========================================================================
updatedContent.pages.Team = `<main>
    <!-- Start Page Header Section -->
    <section class="cs_page_header_style_1 cs_bg_filed cs_gray_bg position-relative" data-src="/assets/img/page-header-bg1.webp">
      <div class="cs_overlay cs_primary_bg position-absolute"></div>
      <div class="container">
         <div class="cs_page_header_content text-center">
          <h1 class="cs_page_header_title cs_fs_80 cs_bold cs_white_color cs_mb_16">GFRC TEAM</h1>
          <ol class="breadcrumb cs_center mb-0">
            <li class="breadcrumb-item"><a href="/" aria-label="Back to home button">Home</a></li>
            <li class="breadcrumb-item active">Our Team</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Page Header Section -->
    <!-- Start Sliding Text Section -->
    <div class="cs_horizontal_slider cs_type_1 cs_accent_bg cs_primary_font">
      <div class="cs_slider_inner">
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>GFRC UNIT LEADERSHIP</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>PATTERN & MOULD SPECIALISTS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>STRUCTURAL ERECTION ENGINEERS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>14+ YEARS INDUSTRY EXPERIENCE</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>GFRC UNIT LEADERSHIP</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>PATTERN & MOULD SPECIALISTS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>STRUCTURAL ERECTION ENGINEERS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>14+ YEARS INDUSTRY EXPERIENCE</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
      </div>
    </div>
    <!-- End Sliding Text Section -->
    <!-- Start Team Section -->
    <section class="cs_service_layout_1">
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="cs_section_heading_style_1 cs_center_column text-center">
          <p class="cs_section_subtitle cs_bold cs_accent_color cs_mb_20 text-uppercase">OUR GFRC SPECIALISTS</p>
          <h2 class="cs_section_title cs_fs_53 cs_bold text-uppercase mb-0">Expert GFRC Engineering Team</h2>
        </div>
        <div class="cs_height_60 cs_height_lg_50"></div>
        <div class="row cs_gap_y_30">
          <div class="col-lg-4">
            <div class="cs_team_style_1 cs_gray_bg cs_radius_10">
              <div class="cs_team_thumbnail cs_radius_10 cs_mb_20 position-relative">
                <img src="/assets/img/team-img-1.webp" alt="Neeta Sharma - GFRC Unit-Head">
                <div class="cs_thumboverlay position-absolute"></div>
                <div class="cs_social_btns_style_1 position-absolute">
                  <a href="/contact-us" aria-label="Contact Neeta Sharma">
                  <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                  </a>
                  <a href="/contact-us" aria-label="WhatsApp GFRC unit">
                  <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div class="cs_team_info text-center">
                <h3 class="cs_team_title cs_fs_24 cs_bold cs_mb_10 text-uppercase"><a href="/team-details">Neeta Sharma</a></h3>
                <p class="cs_team_designation cs_mb_10">GFRC Unit-Head</p>
                <p class="cs_team_description cs_mb_20">Over 14 years of leadership across GFRC facade design, advanced manufacturing techniques, and high-profile architectural execution at Sri Sumeru Realty.</p>
                <div class="cs_team_social_links cs_fs_14 cs_semibold cs_primary_font mt-auto">
                  <a href="/team-details">VIEW PROFILE</a>
                  <a href="/contact-us">CONTACT</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="cs_team_style_1 cs_gray_bg cs_radius_10">
              <div class="cs_team_thumbnail cs_radius_10 cs_mb_20 position-relative">
                <img src="/assets/img/team-img-2.webp" alt="Production Supervisor">
                <div class="cs_thumboverlay position-absolute"></div>
                <div class="cs_social_btns_style_1 position-absolute">
                  <a href="/contact-us" aria-label="Contact Production team">
                  <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div class="cs_team_info text-center">
                <h3 class="cs_team_title cs_fs_24 cs_bold cs_mb_10 text-uppercase"><a href="/team-details">Production Supervisor</a></h3>
                <p class="cs_team_designation cs_mb_10">Mould & Casting Management</p>
                <p class="cs_team_description cs_mb_20">Supervises spray-up mist coat application, batch mixing ratios, AR glass fiber dispersion, and rapid 24-hour demoulding protocols.</p>
                <div class="cs_team_social_links cs_fs_14 cs_semibold cs_primary_font mt-auto">
                  <a href="/team-details">VIEW PROFILE</a>
                  <a href="/contact-us">CONTACT</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="cs_team_style_1 cs_gray_bg cs_radius_10">
              <div class="cs_team_thumbnail cs_radius_10 cs_mb_20 position-relative">
                <img src="/assets/img/team-img-3.webp" alt="Erection Lead">
                <div class="cs_thumboverlay position-absolute"></div>
                <div class="cs_social_btns_style_1 position-absolute">
                  <a href="/contact-us" aria-label="Contact Site team">
                  <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div class="cs_team_info text-center">
                <h3 class="cs_team_title cs_fs_24 cs_bold cs_mb_10 text-uppercase"><a href="/team-details">Site & Structural Erection</a></h3>
                <p class="cs_team_designation cs_mb_10">Erection Engineering Supervisor</p>
                <p class="cs_team_description cs_mb_20">Directs precision bracket fixing, wind-load anchoring, joint sealing, and elevation alignment for multi-story facade installations.</p>
                <div class="cs_team_social_links cs_fs_14 cs_semibold cs_primary_font mt-auto">
                  <a href="/team-details">VIEW PROFILE</a>
                  <a href="/contact-us">CONTACT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_120 cs_height_lg_80"></div>
    </section>
    <!-- End Team Section -->
</main>`;

// =========================================================================
// 7. TEAM DETAILS PAGE
// =========================================================================
updatedContent.pages.TeamDetails = `<main>
    <!-- Start Page Header Section -->
    <section class="cs_page_header_style_1 cs_bg_filed cs_gray_bg position-relative" data-src="/assets/img/page-header-bg1.webp">
      <div class="cs_overlay cs_primary_bg position-absolute"></div>
      <div class="container">
        <div class="cs_page_header_content text-center">
          <h1 class="cs_page_header_title cs_fs_80 cs_bold cs_white_color cs_mb_16">LEADERSHIP PROFILE</h1>
          <ol class="breadcrumb cs_center mb-0">
            <li class="breadcrumb-item"><a href="/" aria-label="Back to home button">Home</a></li>
            <li class="breadcrumb-item active">Team Details</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Page Header Section -->
    <!-- Start Sliding Text Section -->
    <div class="cs_horizontal_slider cs_type_1 cs_accent_bg cs_primary_font">
      <div class="cs_slider_inner">
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>NEETA SHARMA - GFRC UNIT-HEAD</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>14+ YEARS SECTOR LEADERSHIP</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>ADVANCED GFRC MANUFACTURING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>SRI SUMERU REALTY PVT LTD</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>NEETA SHARMA - GFRC UNIT-HEAD</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>14+ YEARS SECTOR LEADERSHIP</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>ADVANCED GFRC MANUFACTURING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>SRI SUMERU REALTY PVT LTD</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
      </div>
    </div>
    <!-- End Sliding Text Section -->
    <!-- Start Team Details Section -->
    <section>
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="cs_team_details">
          <div class="row cs_gap_y_30">
            <div class="col-lg-5">
              <div class="cs_team_thumbnail cs_radius_10">
                <img src="/assets/img/team-img-11.webp" alt="Neeta Sharma - GFRC Unit-Head">
              </div>
            </div>
            <div class="col-lg-7">
              <div class="cs_team_summery">
                <div class="cs_section_heading_style_1 cs_mb_40 cs_mb_lg_30">
                  <p class="cs_section_subtitle cs_bold cs_accent_color cs_mb_20 text-uppercase">GFRC UNIT-HEAD</p>
                  <h2 class="cs_section_title cs_fs_60 cs_bold cs_mb_20">Neeta Sharma</h2>
                  <hr class="cs_mb_20 mt-0">
                  <p class="cs_team_desc mb-0">With over fourteen years of dedicated leadership in Glass Fiber Reinforced Concrete (GFRC) manufacturing and architectural precast innovation, Neeta Sharma directs the GFRC unit at Sri Sumeru Realty Pvt Ltd. Spearheading advanced spray-up and premix techniques, she ensures rapid turnaround, Grade 18P strength compliance, and bespoke aesthetic fidelity across high-profile facades and heritage monuments.</p>
                </div>
                <div class="cs_experience_box cs_mb_40 cs_mb_lg_30">
                  <h3 class="cs_experience_title cs_fs_24 cs_bold cs_mb_20">Key Sector Experience</h3>
                  <ul class="cs_list_style_1 list-unstyled cs_fs_18 cs_semibold cs_primary_color p-0">
                    <li class="cs_mb_10">
                      <img src="/assets/img/icons/check.svg" alt="Check icon">
                      <span>Spearheaded advanced GFRC manufacturing techniques, improving efficiency and surface finish.</span>
                    </li>
                    <li class="cs_mb_10">
                      <img src="/assets/img/icons/check.svg" alt="Check icon">
                      <span>Led cross-functional engineering teams for high-profile facades, heritage domes, and intricate sculptures.</span>
                    </li>
                    <li class="cs_mb_10">
                      <img src="/assets/img/icons/check.svg" alt="Check icon">
                      <span>Directed R&D on sustainable cementitious matrices and high-performance Grade 18P formulations.</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/check.svg" alt="Check icon">
                      <span>Established robust quality assurance and supplier networks ensuring timely, certified site delivery.</span>
                    </li>
                  </ul>
                </div>
                <div class="cs_skills_box">
                  <h3 class="cs_skills_title cs_fs_24 cs_bold cs_mb_20">Core Technical Expertise</h3>
                  <div class="cs_skill_progress_wrapper">
                    <div class="cs_skill_progress">
                      <div class="cs_progress_head cs_fs_18 cs_semibold cs_primary_color cs_mb_10">GFRC Architectural Facades & Cladding</div>
                      <div class="cs_progress cs_type_1" data-progress="95">
                        <div class="cs_progress_in"><span class="cs_fs_18 cs_semibold cs_primary_color">95%</span></div>
                      </div>
                    </div>
                    <div class="cs_skill_progress">
                      <div class="cs_progress_head cs_fs_18 cs_semibold cs_primary_color cs_mb_10">Custom 3D Mould & Pattern Engineering</div>
                      <div class="cs_progress cs_type_1" data-progress="92">
                        <div class="cs_progress_in"><span class="cs_fs_18 cs_semibold cs_primary_color">92%</span></div>
                      </div>
                    </div>
                    <div class="cs_skill_progress">
                      <div class="cs_progress_head cs_fs_18 cs_semibold cs_primary_color cs_mb_10">Structural Quality Compliance (Grade 10P / 18P)</div>
                      <div class="cs_progress cs_type_1" data-progress="90">
                        <div class="cs_progress_in"><span class="cs_fs_18 cs_semibold cs_primary_color">90%</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-4">
                  <a href="/contact-us" class="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50 text-uppercase">
                  <span>CONNECT WITH GFRC TEAM</span>
                  <span class="cs_btn_icon cs_radius_100 cs_center"><i class="fa-solid fa-arrow-right"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_120 cs_height_lg_80"></div>
    </section>
    <!-- End Team Details Section -->
</main>`;

// =========================================================================
// 8. FAQ PAGE
// =========================================================================
updatedContent.pages.Faq = `<main>
    <!-- Start Page Header Section -->
    <section class="cs_page_header_style_1 cs_bg_filed cs_gray_bg position-relative" data-src="/assets/img/page-header-bg1.webp">
      <div class="cs_overlay cs_primary_bg position-absolute"></div>
      <div class="container">
        <div class="cs_page_header_content text-center">
          <h1 class="cs_page_header_title cs_fs_80 cs_bold cs_white_color cs_mb_16">FREQUENTLY ASKED QUESTIONS</h1>
          <ol class="breadcrumb cs_center mb-0">
            <li class="breadcrumb-item"><a href="/" aria-label="Back to home button">Home</a></li>
            <li class="breadcrumb-item active">FAQ</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Page Header Section -->
    <!-- Start Sliding Text Section -->
    <div class="cs_horizontal_slider cs_type_1 cs_accent_bg cs_primary_font">
      <div class="cs_slider_inner">
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>CLEAR ANSWERS ON GFRC</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>WEIGHT COMPARISONS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>GRADE 10P & 18P SPECS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>CUSTOM SHAPES & TEXTURES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>DURABILITY & FIRE RESISTANCE</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>CLEAR ANSWERS ON GFRC</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>WEIGHT COMPARISONS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>GRADE 10P & 18P SPECS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>CUSTOM SHAPES & TEXTURES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>DURABILITY & FIRE RESISTANCE</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
      </div>
    </div>
    <!-- End Sliding Text Section -->
    <!-- Start FAQ Section -->
    <section>
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="cs_section_heading_style_1">
          <p class="cs_section_subtitle cs_bold cs_accent_color text-uppercase cs_mb_20">GFRC TECHNICAL KNOWLEDGE</p>
          <h2 class="cs_section_title cs_fs_53 cs_semibold text-uppercase mb-0">ANSWERS TO KEY QUESTIONS ABOUT GFRC</h2>
        </div>
        <div class="cs_height_60 cs_height_lg_50"></div>
        <div class="row cs_gap_y_30">
          <div class="col-lg-3 order-lg-2">
            <div class="cs_card_style_3 cs_radius_10 p-0">
              <div class="cs_card_thumbnail cs_radius_10 cs_mb_20">
                <img src="/assets/img/faq-img-3.webp" alt="GFRC Screen Pattern">
              </div>
              <div class="cs_card_info">
                <h3 class="cs_card_title cs_fs_24 cs_bold cs_mb_16">Have Specific Project Requirements?</h3>
                <p class="cs_card_subtitle mb-0">Our GFRC engineering team provides detailed design consultation, CAD drawings, and custom mould solutions.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="cs_accordians_wrapper_2">
              <div class="cs_accordian cs_style_2">
                <div class="cs_accordian_head position-relative">
                  <h3 class="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">WHAT IS GFRC AND WHAT ARE ITS PRIMARY INGREDIENTS?</h3>
                  <span class="cs_accordian_toggler"></span>
                </div>
                <div class="cs_accordian_body">GFRC (Glass Fiber Reinforced Concrete) is a cement-based composite comprised of Portland cement, fine aggregate, water, acrylic co-polymer, alkali-resistant (AR) glass fiber reinforcement, and performance additives. In international markets, it is also known as GRC (Glassfibre Reinforced Concrete).</div>
              </div>
              <div class="cs_accordian cs_style_2">
                <div class="cs_accordian_head position-relative">
                  <h3 class="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">WHY IS GFRC ABOUT 50% LIGHTER THAN TRADITIONAL PRECAST?</h3>
                  <span class="cs_accordian_toggler"></span>
                </div>
                <div class="cs_accordian_body">Because high-tensile alkali-resistant glass fibers provide structural reinforcement throughout the matrix, GFRC can be cast in practical thin-wall sections (12mm to 25mm). This eliminates the massive concrete thickness and bulky steel rebar required in traditional precast, reducing dead weight by approximately 50%.</div>
              </div>
              <div class="cs_accordian cs_style_2">
                <div class="cs_accordian_head position-relative">
                  <h3 class="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">WHAT PRODUCTS AND SHAPES CAN BE MANUFACTURED IN GFRC?</h3>
                  <span class="cs_accordian_toggler"></span>
                </div>
                <div class="cs_accordian_body">If a mould can be constructed, GFRC can reproduce it. Our catalog includes architectural jali screens, facade panel cladding, columns, capitals, bases, cornices, brackets, jharokhas, domes, modular window frames, balustrades, large planters, and acoustic sound barriers.</div>
              </div>
              <div class="cs_accordian cs_style_2">
                <div class="cs_accordian_head position-relative">
                  <h3 class="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">WHAT ARE THE TECHNICAL SPECIFICATIONS OF GRADE 10P AND GRADE 18P?</h3>
                  <span class="cs_accordian_toggler"></span>
                </div>
                <div class="cs_accordian_body">Grade 10/10P features a Characteristic Limit of Proportionality (LOP) of 7 N/mm² and Modulus of Rupture (MOR) of 10 N/mm² (minimum dry density 1800 kg/m³). Grade 18/18P achieves a Characteristic MOR of 18 N/mm² for high wind-load external facade panels and seismic requirements.</div>
              </div>
              <div class="cs_accordian cs_style_2">
                <div class="cs_accordian_head position-relative">
                  <h3 class="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">HOW DOES GFRC RESIST WEATHER, FIRE, ABRASION, AND FUNGI?</h3>
                  <span class="cs_accordian_toggler"></span>
                </div>
                <div class="cs_accordian_body">GFRC possesses high matrix density with low porosity. It is non-combustible (fire resistant), provides low thermal movement, resists moisture penetration, salt spray corrosion, UV degradation, fungal growth, and atmospheric freeze-thaw cycles with minimal maintenance.</div>
              </div>
              <div class="cs_accordian cs_style_2">
                <div class="cs_accordian_head position-relative">
                  <h3 class="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">HOW FAST IS THE PRODUCTION AND DEMOULDING TURNAROUND?</h3>
                  <span class="cs_accordian_toggler"></span>
                </div>
                <div class="cs_accordian_body">Thanks to high early strength polymers and controlled spray-up / premix curing environments, GFRC products are typically demoulded in around 24 hours, supporting rapid fabrication schedules and accelerated project handovers.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_120 cs_height_lg_80"></div>
    </section>
    <!-- End FAQ Section -->
</main>`;

// =========================================================================
// 9. PRICING / ESTIMATION PAGE
// =========================================================================
updatedContent.pages.Pricing = `<main>
    <!-- Start Page Header Section -->
    <section class="cs_page_header_style_1 cs_bg_filed cs_gray_bg position-relative" data-src="/assets/img/page-header-bg1.webp">
      <div class="cs_overlay cs_primary_bg position-absolute"></div>
      <div class="container">
        <div class="cs_page_header_content text-center">
          <h1 class="cs_page_header_title cs_fs_80 cs_bold cs_white_color cs_mb_16">GFRC ESTIMATION & PACKAGES</h1>
          <ol class="breadcrumb cs_center mb-0">
            <li class="breadcrumb-item"><a href="/" aria-label="Back to home button">Home</a></li>
            <li class="breadcrumb-item active">Pricing & Estimation</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Page Header Section -->
    <!-- Start Sliding Text Section -->
    <div class="cs_horizontal_slider cs_type_1 cs_accent_bg cs_primary_font">
      <div class="cs_slider_inner">
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>CUSTOM GFRC MOULD ESTIMATION</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>ARCHITECTURAL SUPPLY CONTRACTS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>TURNKEY FACADE ERECTION</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>GRADE 10P & 18P CERTIFIED</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>CUSTOM GFRC MOULD ESTIMATION</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>ARCHITECTURAL SUPPLY CONTRACTS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>TURNKEY FACADE ERECTION</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>GRADE 10P & 18P CERTIFIED</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
      </div>
    </div>
    <!-- End Sliding Text Section -->
    <!-- Start Pricing Section -->
    <section>
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="row cs_gap_y_24">
          <div class="col-lg-4">
            <div class="cs_pricing_table_style_1">
              <div class="cs_pricing_table_inner">
                <div class="cs_pricing_table_font cs_gray_bg cs_radius_10">
                  <div class="cs_pricing_table_header cs_mb_20">
                    <h2 class="cs_plane_title cs_fs_24 cs_bold cs_mb_16 text-uppercase">PROTOTYPING & MOULDS</h2>
                    <p class="cs_pricing_plan_summery mb-0">Custom 3D CAD pattern making, test casting, and rubber/fiber mould development.</p>
                  </div>
                  <div class="cs_pricing_price cs_primary_color cs_primary_font cs_mb_20">
                    <span class="cs_pricing_vlauee cs_fs_48 cs_bold d-inline-block">SAMPLE</span>
                    <small class="cs_fs_14 cs_bold">/BATCH SCOPE</small>
                  </div>
                  <hr class="cs_mb_30 mt-0">
                  <ul class="cs_pricing_features_list cs_mp_0 cs_fs_18 cs_bold cs_primary_color cs_primary_font text-uppercase">
                    <li>
                      <img src="/assets/img/icons/checkmark.svg" alt="Checkmark icon">
                      <span>3D CAD PATTERN DEVELOPMENT</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/checkmark.svg" alt="Checkmark icon">
                      <span>RUBBER / FIBER MOULD CREATION</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/checkmark.svg" alt="Checkmark icon">
                      <span>PHYSICAL GFRC SAMPLE CASTING</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/checkmark.svg" alt="Checkmark icon">
                      <span>SURFACE TEXTURE & COLOR MATCH</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/checkmark.svg" alt="Checkmark icon">
                      <span>FAST 24H DEMOULD VALIDATION</span>
                    </li>
                  </ul>
                  <a href="/contact-us" class="cs_pricing_btn cs_accent_bg cs_center cs_fs_14 cs_bold cs_white_color cs_radius_50"><span>REQUEST PROTOTYPE</span></a>
                </div>
                <a href="/contact-us" class="cs_pricing_table_back cs_radius_10 cs_bg_filed" data-src="/assets/img/pricing-table-bg1.webp">
                  <h3 class="cs_company_quote cs_fs_30 cs_semibold cs_white_color mb-0">PRECISION <span class="cs_accent_color">MOULD ENGINEERING</span> FOR CUSTOM SHAPES.</h3>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="cs_pricing_table_style_1">
              <div class="cs_pricing_table_inner">
                <div class="cs_pricing_table_font cs_gray_bg cs_radius_10">
                  <div class="cs_pricing_table_header cs_mb_20">
                    <h2 class="cs_plane_title cs_fs_24 cs_bold cs_mb_16 text-uppercase">SUPPLY & FABRICATION</h2>
                    <p class="cs_pricing_plan_summery mb-0">High-volume factory spray-up or premix manufacturing for panels, screens, and cornices.</p>
                  </div>
                  <div class="cs_pricing_price cs_primary_color cs_primary_font cs_mb_20">
                    <span class="cs_pricing_vlauee cs_fs_48 cs_bold d-inline-block">SUPPLY</span>
                    <small class="cs_fs_14 cs_bold">/PER SQ.FT / UNIT</small>
                  </div>
                  <hr class="cs_mb_30 mt-0">
                  <ul class="cs_pricing_features_list cs_mp_0 cs_fs_18 cs_bold cs_primary_color cs_primary_font text-uppercase">
                    <li>
                      <img src="/assets/img/icons/checkmark.svg" alt="Checkmark icon">
                      <span>GRADE 10P / 18P GFRC PRODUCTION</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/checkmark.svg" alt="Checkmark icon">
                      <span>PANELS, JALIS, CORNICES & DOMES</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/checkmark.svg" alt="Checkmark icon">
                      <span>50% LIGHTER THAN PRECAST</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/checkmark.svg" alt="Checkmark icon">
                      <span>FACTORY CURING & QA TESTING</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/checkmark.svg" alt="Checkmark icon">
                      <span>PROTECTIVE CRATING & DISPATCH</span>
                    </li>
                  </ul>
                  <a href="/contact-us" class="cs_pricing_btn cs_accent_bg cs_center cs_fs_14 cs_bold cs_white_color cs_radius_50"><span>GET SUPPLY QUOTE</span></a>
                </div>
                <a href="/contact-us" class="cs_pricing_table_back cs_radius_10 cs_bg_filed" data-src="/assets/img/pricing-table-bg1.webp">
                  <h3 class="cs_company_quote cs_fs_30 cs_semibold cs_white_color mb-0">DURABLE <span class="cs_accent_color">LIGHTWEIGHT COMPOSITES</span> SHIPPED ON TIME.</h3>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="cs_pricing_table_style_1">
              <div class="cs_pricing_table_inner">
                <div class="cs_pricing_table_font cs_gray_bg cs_radius_10">
                  <div class="cs_pricing_table_header cs_mb_20">
                    <h2 class="cs_plane_title cs_fs_24 cs_bold cs_mb_16 text-uppercase">TURNKEY FACADE & ERECTION</h2>
                    <p class="cs_pricing_plan_summery mb-0">Complete end-to-end design, factory fabrication, structural anchoring, and on-site alignment.</p>
                  </div>
                  <div class="cs_pricing_price cs_primary_color cs_primary_font cs_mb_20">
                    <span class="cs_pricing_vlauee cs_fs_48 cs_bold d-inline-block">TURNKEY</span>
                    <small class="cs_fs_14 cs_bold">/FULL CONTRACT</small>
                  </div>
                  <hr class="cs_mb_30 mt-0">
                  <ul class="cs_pricing_features_list cs_mp_0 cs_fs_18 cs_bold cs_primary_color cs_primary_font text-uppercase">
                    <li>
                      <img src="/assets/img/icons/checkmark.svg" alt="Checkmark icon">
                      <span>STRUCTURAL DESIGN & SHOP DRAWINGS</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/checkmark.svg" alt="Checkmark icon">
                      <span>FACTORY SPRAY-UP / PREMIX CASTING</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/checkmark.svg" alt="Checkmark icon">
                      <span>ON-SITE RIGGING & HOISTING</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/checkmark.svg" alt="Checkmark icon">
                      <span>SEISMIC & WIND ANCHORING</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/checkmark.svg" alt="Checkmark icon">
                      <span>WEATHER SEALING & FINAL FINISH</span>
                    </li>
                  </ul>
                  <a href="/contact-us" class="cs_pricing_btn cs_accent_bg cs_center cs_fs_14 cs_bold cs_white_color cs_radius_50"><span>REQUEST TURNKEY RFQ</span></a>
                </div>
                <a href="/contact-us" class="cs_pricing_table_back cs_radius_10 cs_bg_filed" data-src="/assets/img/pricing-table-bg1.webp">
                  <h3 class="cs_company_quote cs_fs_30 cs_semibold cs_white_color mb-0">END-TO-END <span class="cs_accent_color">ARCHITECTURAL FACADE</span> EXECUTION.</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_120 cs_height_lg_80"></div>
    </section>
    <!-- End Pricing Section -->
</main>`;

// =========================================================================
// 10. BLOG & BLOG DETAILS PAGES
// =========================================================================
updatedContent.pages.Blog = `<main>
    <!-- Start Page Header Section -->
    <section class="cs_page_header_style_1 cs_bg_filed cs_gray_bg position-relative" data-src="/assets/img/page-header-bg1.webp">
      <div class="cs_overlay cs_primary_bg position-absolute"></div>
      <div class="container">
        <div class="cs_page_header_content text-center">
          <h1 class="cs_page_header_title cs_fs_80 cs_bold cs_white_color cs_mb_16">GFRC ARTICLES & INSIGHTS</h1>
          <ol class="breadcrumb cs_center mb-0">
            <li class="breadcrumb-item"><a href="/" aria-label="Back to home button">Home</a></li>
            <li class="breadcrumb-item active">Our Blog</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Page Header Section -->
    <!-- Start Sliding Text Section -->
    <div class="cs_horizontal_slider cs_type_1 cs_accent_bg cs_primary_font">
      <div class="cs_slider_inner">
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>ADVANCED COMPOSITE TECHNOLOGY</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>LIGHTWEIGHT FACADE ENGINEERING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>SPRAY-UP & PREMIX METHODOLOGY</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>HISTORIC RESTORATION CASE STUDIES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>ADVANCED COMPOSITE TECHNOLOGY</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>LIGHTWEIGHT FACADE ENGINEERING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>SPRAY-UP & PREMIX METHODOLOGY</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>HISTORIC RESTORATION CASE STUDIES</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
      </div>
    </div>
    <!-- End Sliding Text Section -->
    <!-- Start Blog List Section -->
    <div class="container">
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="row cs_gap_y_40">
        <div class="col-lg-4 order-lg-2">
          <aside class="cs_sidebar_style_1">
            <div class="cs_sidebar_widget cs_gray_bg cs_radius_10">
              <div class="cs_author_card cs_center_column text-center">
                <div class="cs_author_thumbnail cs_center cs_radius_100 cs_mb_30">
                  <img src="/assets/img/avatar-13.webp" alt="Neeta Sharma - GFRC Unit-Head">
                </div>
                <div class="cs_author_bio">
                  <h2 class="cs_author_title cs_fs_24 cs_bold cs_mb_8">Neeta Sharma</h2>
                  <p class="cs_author_subtitle cs_mb_20">GFRC Unit-Head</p>
                  <p class="cs_author_summery cs_mb_30">Over 14 years of architectural GFRC experience across facade design, mould making, and high-rise structural installation.</p>
                  <div class="cs_author_social_links">
                    <a href="/contact-us" aria-label="Contact via Email">
                    <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                    </a>
                    <a href="/contact-us" aria-label="Contact via WhatsApp">
                    <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="cs_sidebar_widget cs_gray_bg cs_radius_10">
              <h3 class="cs_sidebar_widget_title cs_fs_18 cs_bold cs_mb_10">Search Articles</h3>
              <form action="#" class="cs_search position-relative">
                <input type="text" placeholder="Search GFRC topics...">
                <button class="cs_search_button"><i class="fa-solid fa-magnifying-glass"></i></button>
              </form>
            </div>
            <div class="cs_sidebar_widget cs_gray_bg cs_radius_10">
              <h3 class="cs_sidebar_widget_title cs_fs_18 cs_bold cs_mb_10">Recent Articles</h3>
              <div class="cs_recent_post_wrapper">
                <div class="cs_post_style_6">
                  <a aria-label="Click to read post" class="cs_post_thumb cs_radius_10" href="/blog-details">
                  <img src="/assets/img/post-img-22.webp" alt="Recent Post Image">
                  </a>
                  <div class="cs_post_info">
                    <div class="cs_post_meta cs_fs_10 cs_semibold cs_primary_font cs_mb_10">
                      <i class="fa-regular fa-calendar-days"></i>TECHNICAL GUIDE
                    </div>
                    <h3 class="cs_post_title cs_fs_20 cs_semibold mb-0">
                      <a aria-label="Click to read post" href="/blog-details">Why GFRC is Revolutionizing Modern High-Rises</a>
                    </h3>
                  </div>
                </div>
                <div class="cs_post_style_6">
                  <a aria-label="Click to read post" class="cs_post_thumb cs_radius_10" href="/blog-details">
                  <img src="/assets/img/post-img-23.webp" alt="Recent Post Image">
                  </a>
                  <div class="cs_post_info">
                    <div class="cs_post_meta cs_fs_10 cs_semibold cs_primary_font cs_mb_10">
                      <i class="fa-regular fa-calendar-days"></i>FABRICATION
                    </div>
                    <h3 class="cs_post_title cs_fs_20 cs_semibold mb-0">
                      <a aria-label="Click to read post" href="/blog-details">Spray-Up vs Premix: Choosing the Ideal Workflow</a>
                    </h3>
                  </div>
                </div>
                <div class="cs_post_style_6">
                  <a aria-label="Click to read post" class="cs_post_thumb cs_radius_10" href="/blog-details">
                  <img src="/assets/img/post-img-24.webp" alt="Recent Post Image">
                  </a>
                  <div class="cs_post_info">
                    <div class="cs_post_meta cs_fs_10 cs_semibold cs_primary_font cs_mb_10">
                      <i class="fa-regular fa-calendar-days"></i>RESTORATION
                    </div>
                    <h3 class="cs_post_title cs_fs_20 cs_semibold mb-0">
                      <a aria-label="Click to read post" href="/blog-details">Restoring Historic Domes & Jharokhas</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="cs_sidebar_widget cs_gray_bg cs_radius_10">
              <h3 class="cs_sidebar_widget_title cs_fs_18 cs_bold cs_mb_10">Categories</h3>
              <ul class="cs_service_category_list cs_primary_color cs_primary_font cs_mp_0">
                <li><a href="#"><span>Facade Cladding</span><span>08</span></a></li>
                <li><a href="#"><span>Jali & Screens</span><span>06</span></a></li>
                <li><a href="#"><span>Heritage Restoration</span><span>04</span></a></li>
                <li><a href="#"><span>Columns & Cornices</span><span>05</span></a></li>
                <li><a href="#"><span>Technical Specs</span><span>03</span></a></li>
              </ul>
            </div>
          </aside>
        </div>
        <div class="col-lg-8">
          <div class="cs_post_list_wrapper">
            <article class="cs_post_style_7 cs_radius_10 cs_gray_bg cs_mb_40">
              <div class="cs_post_thumbnail cs_radius_10">
                <a href="/blog-details"><img src="/assets/img/post-img-10.webp" alt="GFRC High-Rise Facades"></a>
              </div>
              <div class="cs_post_content">
                <div class="cs_post_meta cs_fs_14 cs_bold cs_accent_color cs_mb_10">FACADE ENGINEERING</div>
                <h2 class="cs_post_title cs_fs_36 cs_bold cs_mb_16"><a href="/blog-details">Why GFRC is Revolutionizing Modern High-Rise Facades (50% Weight Advantage)</a></h2>
                <p class="cs_post_desc cs_mb_24">Discover how Glass Fiber Reinforced Concrete enables dramatic architectural cantilevers, lower foundation stress, and superior wind load performance compared to traditional heavy precast concrete.</p>
                <a href="/blog-details" class="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50 text-uppercase">
                <span>READ FULL ARTICLE</span>
                <span class="cs_btn_icon cs_radius_100 cs_center"><i class="fa-solid fa-arrow-right"></i></span>
                </a>
              </div>
            </article>
            <article class="cs_post_style_7 cs_radius_10 cs_gray_bg cs_mb_40">
              <div class="cs_post_thumbnail cs_radius_10">
                <a href="/blog-details"><img src="/assets/img/post-img-12.webp" alt="Spray-up vs Premix"></a>
              </div>
              <div class="cs_post_content">
                <div class="cs_post_meta cs_fs_14 cs_bold cs_accent_color cs_mb_10">MANUFACTURING METHODS</div>
                <h2 class="cs_post_title cs_fs_36 cs_bold cs_mb_16"><a href="/blog-details">Spray-Up vs Premix Casting: Which Process Fits Your Project?</a></h2>
                <p class="cs_post_desc cs_mb_24">An engineering comparison of spray-up mist coat techniques for large-format exterior cladding panels versus premix slurry casting for complex hollow decorative mouldings.</p>
                <a href="/blog-details" class="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50 text-uppercase">
                <span>READ FULL ARTICLE</span>
                <span class="cs_btn_icon cs_radius_100 cs_center"><i class="fa-solid fa-arrow-right"></i></span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <div class="cs_height_120 cs_height_lg_80"></div>
</main>`;

updatedContent.pages.BlogDetails = `<main>
    <!-- Start Page Header Section -->
    <section class="cs_page_header_style_1 cs_bg_filed cs_gray_bg position-relative" data-src="/assets/img/page-header-bg1.webp">
      <div class="cs_overlay cs_primary_bg position-absolute"></div>
      <div class="container">
        <div class="cs_page_header_content text-center">
          <h1 class="cs_page_header_title cs_fs_80 cs_bold cs_white_color cs_mb_16">ARTICLE DETAILS</h1>
          <ol class="breadcrumb cs_center mb-0">
            <li class="breadcrumb-item"><a href="/" aria-label="Back to home button">Home</a></li>
            <li class="breadcrumb-item active">Blog Details</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Page Header Section -->
    <!-- Start Sliding Text Section -->
    <div class="cs_horizontal_slider cs_type_1 cs_accent_bg cs_primary_font">
      <div class="cs_slider_inner">
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>ADVANCED GFRC INSIGHTS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>50% STRUCTURAL WEIGHT SAVING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>ALKALI-RESISTANT GLASS FIBER MATRIX</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>ADVANCED GFRC INSIGHTS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>50% STRUCTURAL WEIGHT SAVING</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>ALKALI-RESISTANT GLASS FIBER MATRIX</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
      </div>
    </div>
    <!-- End Sliding Text Section -->
    <!-- Start Blog Details Section -->
    <div class="container">
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="row cs_gap_y_40">
        <div class="col-lg-4 order-lg-2">
          <aside class="cs_sidebar_style_1">
            <div class="cs_sidebar_widget cs_gray_bg cs_radius_10">
              <div class="cs_author_card cs_center_column text-center">
                <div class="cs_author_thumbnail cs_center cs_radius_100 cs_mb_30">
                  <img src="/assets/img/avatar-13.webp" alt="Neeta Sharma">
                </div>
                <div class="cs_author_bio">
                  <h2 class="cs_author_title cs_fs_24 cs_bold cs_mb_8">Neeta Sharma</h2>
                  <p class="cs_author_subtitle cs_mb_20">GFRC Unit-Head</p>
                  <p class="cs_author_summery cs_mb_30">Over 14 years of architectural GFRC experience across facade design, mould making, and high-rise structural installation.</p>
                </div>
              </div>
            </div>
            <div class="cs_sidebar_widget cs_gray_bg cs_radius_10">
              <h3 class="cs_sidebar_widget_title cs_fs_18 cs_bold cs_mb_10">Categories</h3>
              <ul class="cs_service_category_list cs_primary_color cs_primary_font cs_mp_0">
                <li><a href="#"><span>Facade Cladding</span><span>08</span></a></li>
                <li><a href="#"><span>Jali & Screens</span><span>06</span></a></li>
                <li><a href="#"><span>Heritage Restoration</span><span>04</span></a></li>
                <li><a href="#"><span>Technical Specs</span><span>03</span></a></li>
              </ul>
            </div>
          </aside>
        </div>
        <div class="col-lg-8">
          <article class="cs_blog_details">
            <div class="cs_blog_banner cs_radius_10 cs_mb_30">
              <img src="/assets/img/post-img-25.webp" alt="GFRC Article Banner">
            </div>
            <div class="cs_blog_meta cs_fs_14 cs_bold cs_accent_color cs_mb_16">
              <span>BY NEETA SHARMA</span> / <span>ARCHITECTURAL INSIGHTS</span>
            </div>
            <h1 class="cs_fs_48 cs_bold cs_mb_24">Why GFRC is Revolutionizing Modern High-Rise Facades (50% Weight Advantage)</h1>
            <p>Modern architectural design continuously pushes the boundaries of form, texture, and facade depth. However, traditional precast concrete imposes severe weight penalties on structural columns, cantilever slabs, and foundation designs. Glass Fiber Reinforced Concrete (GFRC) provides the definitive solution, combining the enduring beauty and solid feel of stone with the lightweight agility of composite engineering.</p>
            <p>Because high-zirconia alkali-resistant glass fibers reinforce the entire cementitious matrix, GFRC elements require no internal steel rebar, eliminating corrosion risks and allowing thin-wall casting down to 12mm-18mm. This reduces panel weight by approximately 50%, enabling larger seamless panels, lower lifting crane costs, and accelerated on-site erection schedules.</p>
            <div class="cs_details_img cs_radius_10 my-4">
              <img src="/assets/img/post-img-26.webp" alt="GFRC Geometric Screen Pattern">
            </div>
            <h2>Superior Environmental Durability & Fire Performance</h2>
            <p>Beyond structural weight savings, GFRC achieves exceptional durability under extreme climatic conditions. It is classified as non-combustible, exhibits minimal thermal movement, and prevents moisture ingress through dense matrix compaction. Whether exposed to tropical rains, intense solar UV radiation, or coastal salt atmospheres, GFRC elements maintain their structural integrity and crisp architectural contours for decades with virtually zero maintenance.</p>
          </article>
        </div>
      </div>
    </div>
    <div class="cs_height_120 cs_height_lg_80"></div>
</main>`;

// =========================================================================
// 11. CONTACT PAGE
// =========================================================================
updatedContent.pages.Contact = `<main>
    <!-- Start Page Header Section -->
    <section class="cs_page_header_style_1 cs_bg_filed cs_gray_bg position-relative" data-src="/assets/img/page-header-bg1.webp">
      <div class="cs_overlay cs_primary_bg position-absolute"></div>
      <div class="container">
        <div class="cs_page_header_content text-center">
          <h1 class="cs_page_header_title cs_fs_80 cs_bold cs_white_color cs_mb_16">CONTACT US</h1>
          <ol class="breadcrumb cs_center mb-0">
            <li class="breadcrumb-item"><a href="/" aria-label="Back to home button">Home</a></li>
            <li class="breadcrumb-item active">Contact Us</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Page Header Section -->
    <!-- Start Sliding Text Section -->
    <div class="cs_horizontal_slider cs_type_1 cs_accent_bg cs_primary_font">
      <div class="cs_slider_inner">
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>ENQUIRE ABOUT GFRC PRODUCTS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>CUSTOM ARCHITECTURAL MOULDS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>TURNKEY FACADE ESTIMATION</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>SRI SUMERU REALTY PVT LTD</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
        <div class="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
          <span>ENQUIRE ABOUT GFRC PRODUCTS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>CUSTOM ARCHITECTURAL MOULDS</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>TURNKEY FACADE ESTIMATION</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
          <span>SRI SUMERU REALTY PVT LTD</span>
          <img src="/assets/img/star-shape.svg" alt="Star shape">
        </div>
      </div>
    </div>
    <!-- End Sliding Text Section -->
    <!-- Start Contact Section -->
    <section>
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="cs_section_heading_style_1 cs_center_column text-center">
          <p class="cs_section_subtitle cs_bold cs_accent_color cs_mb_20">GET IN TOUCH WITH GFRC TEAM</p>
          <h2 class="cs_section_title cs_fs_53 cs_semibold mb-0 text-uppercase">Sri Sumeru Realty Pvt Ltd — GFRC Division</h2>
        </div>
        <div class="cs_height_60 cs_height_lg_50"></div>
        <div class="row cs_gap_y_24" role="list" aria-label="Contact information cards">
          <div class="col-lg-4" role="listitem">
            <div class="cs_iconbox_style_7 cs_gray_bg cs_radius_10">
              <span class="cs_iconbox_icon cs_center cs_accent_bg cs_white_color cs_radius_100" aria-hidden="true">
              <img src="/assets/img/icons/location.svg" alt="Location icon" aria-hidden="true">
              </span>
              <div class="cs_iconbox_info">
                <h3 class="cs_iconbox_title cs_fs_24 cs_semibold cs_mb_10">Production Facility</h3>
                <p class="cs_iconbox_subtitle mb-0">Sri Sumeru Realty Private Limited, GFRC Manufacturing & Design Facility, Bangalore, India.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4" role="listitem">
            <div class="cs_iconbox_style_7 cs_gray_bg cs_radius_10">
              <span class="cs_iconbox_icon cs_center cs_accent_bg cs_white_color cs_radius_100" aria-hidden="true">
              <img src="/assets/img/icons/cell.svg" alt="Phone icon" aria-hidden="true">
              </span>
              <div class="cs_iconbox_info">
                <h3 class="cs_iconbox_title cs_fs_24 cs_semibold cs_mb_10">Direct Lines</h3>
                <p class="cs_iconbox_subtitle cs_mb_10">
                  <a href="tel:+919876543210">+91 98765 43210 (GFRC Desk)</a>
                </p>
                <p class="cs_iconbox_subtitle mb-0">
                  <a href="tel:+918023456789">+91 80 2345 6789 (Office)</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4" role="listitem">
            <div class="cs_iconbox_style_7 cs_gray_bg cs_radius_10">
              <span class="cs_iconbox_icon cs_center cs_accent_bg cs_white_color cs_radius_100" aria-hidden="true">
              <img src="/assets/img/icons/envelop.svg" alt="Email icon" aria-hidden="true">
              </span>
              <div class="cs_iconbox_info">
                <h3 class="cs_iconbox_title cs_fs_24 cs_semibold cs_mb_10">Email Inquiries</h3>
                <p class="cs_iconbox_subtitle cs_mb_10">
                  <a href="mailto:gfrc@srisumeru.com">gfrc@srisumeru.com</a>
                </p>
                <p class="cs_iconbox_subtitle mb-0">
                  <a href="mailto:info@srisumeru.com">info@srisumeru.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_120 cs_height_lg_80"></div>
    </section>
    <!-- End Contact Section -->
    <!-- Start Contact Form Section -->
    <section class="cs_gray_bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="cs_contact_form_container">
              <h2 class="cs_contact_heading cs_fs_53 cs_semibold cs_mb_30">Enquire GFRC Products</h2>
              <form action="https://api.web3forms.com/submit" method="POST" class="cs_contact_form row cs_gap_y_30" id="cs_form">
                  <input type="hidden" name="access_key" value="cd98b256-0db3-478c-ab28-1ec94f80447c">
                <div class="col-12">
                  <div class="cs_input_wrapper">
                    <input type="text" name="name" placeholder="Your Name / Organization" class="cs_form_field cs_radius_50" aria-label="Name" required>
                  </div>
                </div>
                <div class="col-12">
                  <div class="cs_input_wrapper">
                    <input type="email" name="email" placeholder="Email Address" class="cs_form_field cs_radius_50" aria-label="Email address" required>
                  </div>
                </div>
                <div class="col-12">
                  <div class="cs_input_wrapper">
                    <input type="text" name="subject" placeholder="Product Interest (Screens, Cladding, Cornices, Domes)" class="cs_form_field cs_radius_50" aria-label="Subject">
                  </div>
                </div>
                <div class="col-12">
                  <div class="cs_input_wrapper">
                    <textarea name="message" rows="5" placeholder="Project details, estimated area/quantity, or drawing specifications..." class="cs_form_field cs_radius_20" aria-label="Message" required></textarea>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" aria-label="Submit contact form" class="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50 text-uppercase">
                  <span>SEND GFRC ENQUIRY</span>
                  <span class="cs_btn_icon cs_radius_100 cs_center" aria-hidden="true"><i class="fa-solid fa-arrow-right"></i></span>
                  </button>
                  <div class="mt-1" id="cs_result"></div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="cs_contact_map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8546194786727!2d77.5945627!3d12.9170246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15082a63270f%3A0xb31a980769a6b189!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1715421000000!5m2!1sen!2sin" loading="lazy" title="Google Maps showing Bangalore location" aria-label="Map of Bangalore location"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Contact Form Section -->
</main>`;

const jsStr = `const siteContent = ${JSON.stringify(updatedContent, null, 2)};\n\nexport default siteContent;\n`;
fs.writeFileSync(path.resolve('src/content/siteContent.js'), jsStr, 'utf-8');
console.log('Successfully re-written siteContent.js with exact template slot image mappings!');
