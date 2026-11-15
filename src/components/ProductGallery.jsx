import React, { useState } from "react";

export default function ProductGallery({ gallery = [], productTitle = "GFRC Architectural Products" }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Fallback authentic gallery using real GFRC architectural images
  const defaultGallery = [
    { code: "CL-01", src: "/assets/img/gfrc-cladding-hero.webp", alt: `${productTitle} architectural facade` },
    { code: "CL-02", src: "/assets/img/gfrc-cladding-detail.webp", alt: `${productTitle} exterior detail` },
    { code: "CL-03", src: "/assets/img/the-renovated-facade-of-the-old-spain-house-2026-03-25-23-48-54-utc.webp", alt: `${productTitle} stone facade cladding` },
    { code: "CL-04", src: "/assets/img/office-buildings-windows-glass-architecture-facad-2026-01-05-06-15-16-utc.webp", alt: `${productTitle} commercial building elevation` },
    { code: "CL-05", src: "/assets/img/gfrc-panel-geometry.webp", alt: `${productTitle} 3D architectural panel` },
    { code: "CL-06", src: "/assets/img/portfolio-img-1.webp", alt: `${productTitle} luxury residential installation` },
    { code: "CL-07", src: "/assets/img/portfolio-img-3.webp", alt: `${productTitle} wall cladding installation` }
  ];

  const items = gallery && gallery.length > 0 ? gallery : defaultGallery;
  const currentImage = items[activeIndex % items.length];

  // Helper to extract clean uppercase code name from item or filename (e.g. "ab-01.png" -> "AB-01")
  const getImageCode = (item) => {
    if (!item) return "";
    if (item.code) return String(item.code);
    const src = item.src || "";
    const filename = src.split("/").pop() || "";
    const cleanFilename = filename.split("?")[0];
    return cleanFilename.replace(/\.[^/.]+$/, "").toUpperCase();
  };

  const currentCode = getImageCode(currentImage);

  // Show up to 6 thumbnails on the right, directly mapped to the gallery items
  const thumbnails = items.length > 6 ? items.slice(0, 6) : items;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="cs_product_gallery_section">
      <div className="container">
        {/* Section Header */}
        <div className="cs_gallery_header text-center cs_mb_50">
          <div className="cs_demo_eyebrow justify-content-center">
            <span className="cs_demo_eyebrow_line"></span>
            <span className="cs_demo_eyebrow_text">PRODUCT GALLERY</span>
            <span className="cs_demo_eyebrow_line"></span>
          </div>
          <h2 className="cs_demo_section_heading mb-0">
            Architectural Details &amp; Surface Textures
          </h2>
        </div>

        {/* Gallery Showcase Card Wrapper */}
        <div className="cs_gallery_card_container">
          <div className="row g-3 g-lg-4 align-items-stretch">
            {/* Left Column: Big Featured Slider (1:1 Aspect Ratio) */}
            <div className="col-lg-6">
              <div className="cs_gallery_main_box position-relative">
                {/* Main Image Code Tag */}
                {currentCode && (
                  <div className="cs_gallery_main_tag" aria-label={`Product Code: ${currentCode}`}>
                    <i className="fa-solid fa-tag cs_gallery_main_tag_icon"></i>
                    <span className="cs_gallery_main_tag_code">{currentCode}</span>
                  </div>
                )}

                <img
                  src={currentImage.src}
                  alt={currentImage.alt || `${productTitle} showcase`}
                  className="cs_gallery_main_img"
                />

                {/* Left/Right Floating Navigation Buttons */}
                <button
                  type="button"
                  className="cs_gallery_nav_btn cs_gallery_nav_prev"
                  onClick={handlePrev}
                  aria-label="Previous image"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button
                  type="button"
                  className="cs_gallery_nav_btn cs_gallery_nav_next"
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>

                {/* Carousel Pagination Dots */}
                <div className="cs_gallery_dots" role="tablist">
                  {items.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`cs_gallery_dot ${idx === activeIndex % items.length ? "active" : ""}`}
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Show image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Grid of 1:1 Square Thumbnails */}
            <div className="col-lg-6">
              <div className={`cs_gallery_thumbs_grid ${thumbnails.length <= 4 ? "cs_thumbs_2col" : "cs_thumbs_3col"}`}>
                {thumbnails.map((thumb, idx) => {
                  const isCurrent = activeIndex % items.length === idx;
                  const thumbCode = getImageCode(thumb);
                  return (
                    <div
                      key={idx}
                      className={`cs_gallery_thumb_card ${isCurrent ? "active" : ""}`}
                      onClick={() => setActiveIndex(idx)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View ${thumb.alt || `${productTitle} detail ${idx + 1}`} (${thumbCode})`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setActiveIndex(idx);
                        }
                      }}
                    >
                      {/* Thumbnail Image Code Tag */}
                      {thumbCode && (
                        <div className="cs_gallery_thumb_tag" title={`Code: ${thumbCode}`}>
                          <i className="fa-solid fa-tag cs_gallery_thumb_tag_icon"></i>
                          <span>{thumbCode}</span>
                        </div>
                      )}

                      <img
                        src={thumb.src}
                        alt={thumb.alt || `${productTitle} detail ${idx + 1}`}
                        className="cs_gallery_thumb_img"
                        loading="lazy"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
