import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getGfrcProducts } from "../data/productsData.js";
import TechKnowledgeFaq from "../components/TechKnowledgeFaq.jsx";

const gfrcFaqQuestions = [
  {
    q: "WHAT IS THE ADVANTAGE OF USING Sri Sumeru GFRC JALIS AND SCREENS OVER METAL OR STONE?",
    a: "Sri Sumeru GFRC jalis provide deep relief, authentic monolithic stone texture, and zero corrosion, unlike metal jalis which can rust, or natural sandstone which is brittle and significantly heavier."
  },
  {
    q: "HOW ARE LARGE Sri Sumeru GFRC FACADE CLADDING PANELS ANCHORED TO BUILDING STRUCTURES?",
    a: "Panels incorporate engineered stainless steel or galvanized steel anchor brackets embedded during casting. These mount onto sub-framing channels with adjustable slotted connections to accommodate seismic and thermal movement."
  },
  {
    q: "CAN Sri Sumeru GFRC COLUMNS BE USED AS BOTH DECORATIVE CLADDING AND STRUCTURAL ENCASEMENTS?",
    a: "Yes, our hollow Sri Sumeru GFRC column covers are supplied as fluted or smooth half-round segments that encase structural steel stanchions or RCC pillars, providing monumental classical aesthetics with rapid dry assembly."
  },
  {
    q: "HOW ARE JOINTS BETWEEN Sri Sumeru GFRC FACADE PANELS WEATHER-SEALED?",
    a: "Joints typically feature 10–15mm engineered gaps backed by closed-cell polyethylene foam backer rods and sealed with high-performance neutral-cure silicone or polyurethane elastomeric sealants."
  },
  {
    q: "WHAT CUSTOMIZED ARCHITECTURAL ELEMENTS CAN BE FABRICATED FOR TEMPLE AND HERITAGE PROJECTS?",
    a: "We specialize in classical shikhara cupolas, fluted arches, floral corbels, jharokhas, and decorative kalash assemblies that faithfully replicate heritage temple craftsmanship with lifetime durability."
  }
];

export default function GfrcProducts() {
  const products = getGfrcProducts();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main>
      {/* 1. Page Header Banner */}
      <section
        className="cs_page_header_style_1 cs_bg_filed cs_gray_bg position-relative"
        style={{
          backgroundImage: "url('/assets/img/page-header-bg1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="cs_overlay cs_primary_bg position-absolute"></div>
        <div className="container">
          <div className="cs_page_header_content text-center">
            <h1 className="cs_page_header_title cs_fs_80 cs_bold cs_white_color cs_mb_16">
              Sri Sumeru GFRC ARCHITECTURAL PRODUCTS
            </h1>
            <ol className="breadcrumb cs_center mb-0">
              <li className="breadcrumb-item">
                <Link to="/" aria-label="Back to home">Home</Link>
              </li>
              <li className="breadcrumb-item active">Sri Sumeru GFRC Architectural Products</li>
            </ol>
          </div>
        </div>
      </section>

      {/* 2. Sliding Marquee Text */}
      <div className="cs_horizontal_slider cs_type_1 cs_accent_bg cs_primary_font">
        <div className="cs_slider_inner">
          <div className="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
            <span>ARCHITECTURAL MOULDINGS</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>BALUSTERS &amp; RAILINGS</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>BRACKETS &amp; CORBELS</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>COLUMN WORKS</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>FACADE CLADDING WORKS</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>JHALI SCREENS</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>PLANTER BOXES</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>WINDOW ARCHES</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
          </div>
          <div className="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
            <span>ARCHITECTURAL MOULDINGS</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>BALUSTERS &amp; RAILINGS</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>BRACKETS &amp; CORBELS</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>COLUMN WORKS</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>FACADE CLADDING WORKS</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>JHALI SCREENS</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>PLANTER BOXES</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>WINDOW ARCHES</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
          </div>
        </div>
      </div>

      {/* 3. Architectural Catalog Section */}
      <section className="cs_prod_catalog_section position-relative">
        <div className="cs_leaf_shadow_overlay" aria-hidden="true"></div>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="cs_prod_catalog_heading text-center">
            <div className="cs_prod_catalog_eyebrow cs_center">
              <span className="cs_eyebrow_line"></span>
              <span className="cs_eyebrow_dot">•</span>
              <span className="cs_eyebrow_text">OUR CORE Sri Sumeru GFRC PRODUCT OFFERINGS</span>
              <span className="cs_eyebrow_dot">•</span>
              <span className="cs_eyebrow_line"></span>
            </div>
            <h2 className="cs_prod_catalog_title text-uppercase">
              ARCHITECTURAL Sri Sumeru GFRC PRODUCT CATALOG
            </h2>
          </div>
          <div className="cs_height_60 cs_height_lg_40"></div>
          
          <div className="cs_prod_cards_grid" role="list">
            {products.map((item, idx) => (
              <div className="cs_prod_card_item" role="listitem" key={item.id}>
                <div className="cs_prod_card_thumb">
                  <img src={item.heroImg} alt={item.title} loading="lazy" />
                </div>
                <div className="cs_prod_card_body">
                  <div className="cs_prod_card_meta">
                    <span className="cs_prod_card_idx">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="cs_prod_card_line"></span>
                  </div>
                  <h3 className="cs_prod_card_title">
                    <Link to={`/product-details?product=${item.id}`}>
                      {item.title.toUpperCase()}
                    </Link>
                  </h3>
                  <p className="cs_prod_card_desc">{item.desc}</p>
                  <Link
                    to={`/product-details?product=${item.id}`}
                    className="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50 text-uppercase"
                    aria-label={`Explore details for ${item.title}`}
                  >
                    <span>EXPLORE DETAILS</span>
                    <span className="cs_btn_icon cs_radius_100 cs_center" aria-hidden="true">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Sri Sumeru GFRC TECHNICAL KNOWLEDGE FAQ Section (5 Questions before CTA) */}
      <TechKnowledgeFaq
        pageTitle="TECHNICAL SPECIFICATIONS FOR Sri Sumeru GFRC PRODUCTS"
        questions={gfrcFaqQuestions}
      />
    </main>
  );
}
