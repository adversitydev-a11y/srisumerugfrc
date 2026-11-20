import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getProductData } from "../data/productsData.js";
import ProductGallery from "../components/ProductGallery.jsx";
import OtherProducts from "../components/OtherProducts.jsx";
import TechKnowledgeFaq from "../components/TechKnowledgeFaq.jsx";
import NotFound from "./NotFound.jsx";

function getProductDetailsFaq(product) {
  const isFrp = product.material && product.material.toLowerCase().includes("frp");
  return [
    {
      q: `WHAT ARE THE STRUCTURAL & SPECIFICATION ADVANTAGES OF ${product.title.toUpperCase()}?`,
      a: `${product.title} is precision engineered using high-performance ${isFrp ? "fiber reinforced polymer composites with UV-stable gelcoats" : "alkali-resistant glass fiber reinforced concrete (Sri Sumeru GFRC) matrices"}, delivering superior flexural strength, high impact resistance, and zero structural rusting.`
    },
    {
      q: `HOW ARE CUSTOM SIZES, CURVES, AND ARCHITECTURAL PROFILES FABRICATED FOR THIS PRODUCT?`,
      a: `Every unit is custom fabricated at our facility at The Art of Living International Centre, Bangalore, using precision CNC tooling and high-definition silicone/rubber master moulds to achieve exact architectural CAD dimensions within ±2mm tolerance.`
    },
    {
      q: `HOW IS ${product.title.toUpperCase()} SAFELY ANCHORED AND INSTALLED ON SITE?`,
      a: `Components feature integrated factory-cast stainless steel or galvanized mounting brackets and slotted alignment inserts. Dry mechanical anchoring to sub-framing channels allows thermal and seismic movement.`
    },
    {
      q: `WHAT SURFACE TEXTURES, PIGMENTATIONS, AND COATINGS ARE AVAILABLE?`,
      a: `Available in natural stone textures, smooth limestone, acid-etched, fluted, sandblasted, or custom integral UV-stable mineral oxide pigments throughout the composite thickness.`
    },
    {
      q: `WHAT IS THE EXPECTED SERVICE LIFE AND MAINTENANCE PROTOCOL FOR ${product.title.toUpperCase()}?`,
      a: `Engineered for 50+ years of exterior architectural service life with Class A fire resistance and minimal maintenance—requiring only periodic low-pressure water rinsing every few years.`
    }
  ];
}

export default function ProductDetails() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSlug = searchParams.get("product") || "cladding";
  const product = getProductData(currentSlug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentSlug]);

  if (!product) {
    return <NotFound />;
  }

  return (
    <main className="cs_product_details_page">
      {/* 1. Restored Hero Image (Page Header Banner) */}
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
              {product.title.toUpperCase()}
            </h1>
            <ol className="breadcrumb cs_center mb-0">
              <li className="breadcrumb-item">
                <Link to="/" aria-label="Back to home">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={product.categoryLink || "/gfrc-products"}>
                  {product.category && product.category.includes("FRP") ? "FRP Architectural Products" : "GFRC Architectural Products"}
                </Link>
              </li>
              <li className="breadcrumb-item active">{product.title}</li>
            </ol>
          </div>
        </div>
      </section>

      {/* 2. Restored Hero Names Moving Bar (Sliding Marquee Text) */}
      <div className="cs_horizontal_slider cs_type_1 cs_accent_bg cs_primary_font">
        <div className="cs_slider_inner">
          <div className="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
            <span>SPRAY-UP &amp; PREMIX FABRICATION</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>THIN-WALL ARCHITECTURAL CASTING</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>GRADE 10P &amp; 18P CERTIFIED</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>CUSTOM 3D MOULD ENGINEERING</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>FAST 24-HOUR DEMOULDING</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
          </div>
          <div className="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
            <span>SPRAY-UP &amp; PREMIX FABRICATION</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>THIN-WALL ARCHITECTURAL CASTING</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>GRADE 10P &amp; 18P CERTIFIED</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>CUSTOM 3D MOULD ENGINEERING</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
            <span>FAST 24-HOUR DEMOULDING</span>
            <img src="/assets/img/star-shape.svg" alt="Star shape" />
          </div>
        </div>
      </div>

      {/* 3. Demo Page Items (Replacing the deleted sidebar, image, text & FAQ) */}

      {/* Section 1: Hero Section */}
      <section className="cs_demo_hero_section cs_detail_hero_section">
        <div className="container">
          <div className="row cs_demo_hero_row align-items-center">
            <div className="col-lg-6 cs_demo_hero_left_col">
              <div className="cs_demo_hero_content">
                <div className="cs_demo_eyebrow">
                  <span className="cs_demo_eyebrow_line"></span>
                  <span className="cs_demo_eyebrow_text">{product.category}</span>
                </div>
                <h1 className="cs_demo_hero_title">{product.title}</h1>
                <h2 className="cs_demo_hero_subtitle">{product.subtitle}</h2>
                <p className="cs_demo_hero_desc">{product.desc}</p>
                <div className="cs_demo_hero_cta">
                  <Link
                    to="/contact-us"
                    className="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50 text-uppercase"
                    aria-label="Request a quote"
                  >
                    <span>REQUEST A QUOTE</span>
                    <span className="cs_btn_icon cs_radius_100 cs_center" aria-hidden="true">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_demo_hero_media">
                <a
                  href={product.heroImg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs_demo_hero_link"
                  title="Click to view full-size original image"
                >
                  <img
                    src={product.heroImg}
                    alt={product.title}
                    className="cs_demo_hero_img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Product Overview */}
      <section className="cs_demo_overview_section">
        <div className="container">
          <div className="row align-items-center cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_demo_overview_media">
                <a
                  href={product.overviewImg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs_demo_overview_link"
                  title="Click to view full-size original image"
                >
                  <img
                    src={product.overviewImg}
                    alt={`${product.title} overview detail`}
                    className="cs_demo_overview_img"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_demo_overview_content">
                <div className="cs_demo_eyebrow">
                  <span className="cs_demo_eyebrow_line"></span>
                  <span className="cs_demo_eyebrow_text">PRODUCT OVERVIEW</span>
                </div>
                <h2 className="cs_demo_section_heading">{product.overviewTitle}</h2>
                <p className="cs_demo_text_body">{product.overviewDesc1}</p>
                <p className="cs_demo_text_body cs_mb_32">{product.overviewDesc2}</p>

                {/* 3 Key Feature Badges */}
                <div className="cs_demo_feature_badges">
                  {product.badges.map((badge, idx) => (
                    <div className="cs_demo_badge_item" key={idx}>
                      <div className="cs_demo_badge_icon">
                        {badge.type === "layers" && (
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                            <polyline points="2 17 12 22 22 17"></polyline>
                            <polyline points="2 12 12 17 22 12"></polyline>
                          </svg>
                        )}
                        {badge.type === "grid" && (
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                          </svg>
                        )}
                        {badge.type === "building" && (
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="20" x2="18" y2="10"></line>
                            <line x1="12" y1="20" x2="12" y2="4"></line>
                            <line x1="6" y1="20" x2="6" y2="14"></line>
                            <line x1="2" y1="20" x2="22" y2="20"></line>
                          </svg>
                        )}
                      </div>
                      <div className="cs_demo_badge_label">
                        {badge.label.split("\n").map((line, lIdx) => (
                          <React.Fragment key={lIdx}>
                            {line}
                            {lIdx < badge.label.split("\n").length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Product Advantages */}
      <section className="cs_demo_advantages_section">
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-5">
              <div className="cs_demo_adv_intro">
                <div className="cs_demo_eyebrow">
                  <span className="cs_demo_eyebrow_line"></span>
                  <span className="cs_demo_eyebrow_text">PRODUCT ADVANTAGES</span>
                </div>
                <h2 className="cs_demo_section_heading">
                  Designed for<br />Performance &amp; Aesthetics
                </h2>
                <p className="cs_demo_text_body cs_mt_20">
                  A combination of strength, flexibility and refined finishes makes {product.title} a preferred choice for modern architectural projects.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cs_demo_adv_list">
                {product.advantages.map((adv, idx) => (
                  <div className="cs_demo_adv_item" key={idx}>
                    <div className="cs_demo_adv_num">{adv.num}</div>
                    <div className="cs_demo_adv_info">
                      <h3 className="cs_demo_adv_title">{adv.title}</h3>
                      <p className="cs_demo_adv_desc">{adv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Product Gallery */}
      <ProductGallery
        gallery={product.gallery}
        productTitle={product.title}
      />

      {/* Section 5: View Other Products (Horizontal cards) */}
      <OtherProducts currentSlug={currentSlug} />

      {/* Sri Sumeru GFRC & FRP TECHNICAL KNOWLEDGE FAQ Section (5 Questions before CTA) */}
      <TechKnowledgeFaq
        pageTitle={`${product.title.toUpperCase()} TECHNICAL KNOWLEDGE &amp; SPECIFICATIONS`}
        questions={getProductDetailsFaq(product)}
      />
    </main>
  );
}
