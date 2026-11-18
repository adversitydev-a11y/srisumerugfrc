import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getFrpProducts } from "../data/productsData.js";
import TechKnowledgeFaq from "../components/TechKnowledgeFaq.jsx";

const frpFaqQuestions = [
  {
    q: "WHY ARE ARCHITECTURAL Sri Sumeru FRP MOULDINGS PREFERRED FOR HIGH-LEVEL CORNICES AND CANOPIES?",
    a: "Sri Sumeru FRP (Fiber Reinforced Polymer) is exceptionally lightweight (approx. 4–8 kg/m²), reducing cantilever loads on structural framing while facilitating fast, safe installation on high-rise rooflines."
  },
  {
    q: "WHAT IS THE WEIGHT ADVANTAGE OF Sri Sumeru FRP PANELS COMPARED TO Sri Sumeru GFRC AND NATURAL STONE?",
    a: "Sri Sumeru FRP composite panels weigh up to 75% less than natural stone and 50% less than standard Sri Sumeru GFRC panels, making them the ideal choice for retrofitting older buildings and lightweight roof structures."
  },
  {
    q: "HOW DO SRI SUMERU FRP PRODUCTS RESIST UV DEGRADATION AND CHEMICAL CORROSION?",
    a: "Our Sri Sumeru FRP products are formulated with premium isophthalic resins and UV-stabilized gel coats that prevent chalking, yellowing, water ingress, and atmospheric corrosion even in marine environments."
  },
  {
    q: "CAN Sri Sumeru FRP ELEMENTS BE MANUFACTURED WITH FIRE-RETARDANT RESIN SYSTEMS?",
    a: "Yes, we formulate fire-retardant (FR) resin composites incorporating alumina trihydrate (ATH) fillers to achieve Class 1 / Class A flame-spread ratings according to ASTM E84 standards."
  },
  {
    q: "WHAT SURFACE FINISHES AND PAINT SYSTEMS ARE APPLIED TO ARCHITECTURAL Sri Sumeru FRP PRODUCTS?",
    a: "Sri Sumeru FRP elements can receive molded-in gelcoat colors, automotive-grade polyurethane (PU) topcoats, textured stone-effect finishes, or metallic patinas matching any architectural palette."
  }
];

export default function FrpProducts() {
  const products = getFrpProducts();

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
              FRP ARCHITECTURAL PRODUCTS
            </h1>
            <ol className="breadcrumb cs_center mb-0">
              <li className="breadcrumb-item">
                <Link to="/" aria-label="Back to home">Home</Link>
              </li>
              <li className="breadcrumb-item active">FRP Architectural Products</li>
            </ol>
          </div>
        </div>
      </section>

      {/* 2. Sliding Marquee Text */}
      <div className="cs_horizontal_slider cs_type_1 cs_accent_bg cs_primary_font">
        <div className="cs_slider_inner">
          <div className="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
            <span>FRP CORNICES</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>FRP DOME WORK</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>FRP PLANTER BOXES</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>FEATHERLIGHT CANTILEVERS</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>UV &amp; MONSOON IMMUNITY</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>ZERO CRACKING COMPOSITES</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
          </div>
          <div className="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
            <span>FRP CORNICES</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>FRP DOME WORK</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>FRP PLANTER BOXES</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>FEATHERLIGHT CANTILEVERS</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>UV &amp; MONSOON IMMUNITY</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>ZERO CRACKING COMPOSITES</span>
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
              <span className="cs_eyebrow_text">OUR CORE FRP PRODUCT OFFERINGS</span>
              <span className="cs_eyebrow_dot">•</span>
              <span className="cs_eyebrow_line"></span>
            </div>
            <h2 className="cs_prod_catalog_title text-uppercase">
              ARCHITECTURAL FRP PRODUCT CATALOG
            </h2>
          </div>
          <div className="cs_height_60 cs_height_lg_40"></div>
          
          <div className="cs_prod_cards_grid cs_prod_cards_grid_3col" role="list">
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

      {/* Sri Sumeru GFRC & FRP TECHNICAL KNOWLEDGE FAQ Section (5 Questions before CTA) */}
      <TechKnowledgeFaq
        pageTitle="Sri Sumeru FRP COMPOSITE TECHNICAL SPECIFICATIONS &amp; DURABILITY"
        questions={frpFaqQuestions}
      />
    </main>
  );
}
