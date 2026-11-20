import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | SRI SUMERU GFRC & FRP";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "The page you're looking for doesn't exist or may have moved. Explore SRI SUMERU GFRC & FRP's architectural products, projects, and contact information instead."
    );

    const robotsEl = document.createElement("meta");
    robotsEl.setAttribute("name", "robots");
    robotsEl.setAttribute("content", "noindex, follow");
    document.head.appendChild(robotsEl);

    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => {
      robotsEl.remove();
    };
  }, []);

  return (
    <main>
      {/* Page Header Banner */}
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
            <h1 className="cs_page_header_title cs_fs_80 cs_bold cs_white_color cs_mb_16">404</h1>
            <ol className="breadcrumb cs_center mb-0">
              <li className="breadcrumb-item">
                <Link to="/" aria-label="Back to home">Home</Link>
              </li>
              <li className="breadcrumb-item active">Page Not Found</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Not Found Content */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container text-center">
          <p className="cs_section_subtitle cs_bold cs_accent_color cs_mb_20 text-uppercase">
            Error 404
          </p>
          <h2 className="cs_section_title cs_fs_53 cs_semibold text-uppercase mb-0">
            Page Not Found
          </h2>
          <div className="cs_height_30 cs_height_lg_20"></div>
          <p className="mb-0" style={{ maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Explore our
            GFRC &amp; FRP architectural products, browse recent projects, or get in touch with
            our Bangalore plant team directly.
          </p>
          <div className="cs_height_50 cs_height_lg_40"></div>
          <div className="cs_center flex-wrap" style={{ gap: "16px" }}>
            <Link
              to="/"
              aria-label="Back to home"
              className="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50 text-uppercase"
            >
              <span>Back to Home</span>
              <span className="cs_btn_icon cs_radius_100 cs_center" aria-hidden="true">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
            <Link
              to="/gfrc-products"
              aria-label="View GFRC and FRP products"
              className="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50 text-uppercase"
            >
              <span>View Our Products</span>
              <span className="cs_btn_icon cs_radius_100 cs_center" aria-hidden="true">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
            <Link
              to="/contact-us"
              aria-label="Contact Sri Sumeru GFRC and FRP"
              className="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50 text-uppercase"
            >
              <span>Contact Us</span>
              <span className="cs_btn_icon cs_radius_100 cs_center" aria-hidden="true">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </main>
  );
}
