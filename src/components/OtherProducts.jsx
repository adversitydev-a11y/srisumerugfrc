import React from "react";
import { Link } from "react-router-dom";
import { getOtherProducts } from "../data/productsData.js";

export default function OtherProducts({ currentSlug = "cladding", limit = 4 }) {
  const otherProducts = getOtherProducts(currentSlug);
  const displayedProducts = limit ? otherProducts.slice(0, limit) : otherProducts;

  if (!displayedProducts || displayedProducts.length === 0) return null;

  const isFrp = currentSlug && currentSlug.toLowerCase().startsWith("frp");
  const allLink = isFrp ? "/frp-products" : "/gfrc-products";
  const allLabel = isFrp ? "ALL FRP PRODUCTS" : "ALL GFRC PRODUCTS";

  return (
    <section className="cs_other_products_section">
      <div className="container">
        {/* Section Header */}
        <div className="cs_other_products_header align-items-center">
          <div className="cs_other_products_header_left">
            <div className="cs_demo_eyebrow">
              <span className="cs_demo_eyebrow_line"></span>
              <span className="cs_demo_eyebrow_text">OUR CORE PRODUCT OFFERINGS</span>
            </div>
            <h2 className="cs_demo_section_heading mb-0">View Other Products</h2>
          </div>

          <div className="cs_other_products_header_right">
            <Link
              to={allLink}
              className="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50 text-uppercase"
              aria-label={allLabel}
            >
              <span>{allLabel}</span>
              <span className="cs_btn_icon cs_radius_100 cs_center" aria-hidden="true">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>

        {/* 4 Horizontal Cards Grid - Exactly matching Services page card design */}
        <div className="cs_prod_cards_grid" role="list">
          {displayedProducts.map((item, idx) => (
            <div
              key={item.id}
              className="cs_prod_card_item"
              role="listitem"
            >
              <div className="cs_prod_card_thumb">
                <img
                  src={item.heroImg}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
              <div className="cs_prod_card_body">
                <div className="cs_prod_card_meta">
                  <span className="cs_prod_card_idx">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="cs_prod_card_line"></span>
                </div>
                <h3 className="cs_prod_card_title">
                  <Link to={`/product-details?product=${item.id}`}>
                    {item.title.toUpperCase()}
                  </Link>
                </h3>
                <p className="cs_prod_card_desc">{item.desc || item.subtitle}</p>
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
    </section>
  );
}
