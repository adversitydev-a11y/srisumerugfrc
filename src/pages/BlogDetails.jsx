import React, { useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getBlogPostData, getOtherBlogPosts } from "../data/blogData.js";
import TechKnowledgeFaq from "../components/TechKnowledgeFaq.jsx";
import NotFound from "./NotFound.jsx";

export default function BlogDetails() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const postSlug = slug || searchParams.get("post");
  const post = getBlogPostData(postSlug);
  const otherPosts = post ? getOtherBlogPosts(post.slug) : [];

  useEffect(() => {
    if (post?.seo?.title) {
      document.title = post.seo.title;
    }
    if (post?.seo?.description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", post.seo.description);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [post]);

  if (!post) {
    return <NotFound />;
  }

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
            <h1 className="cs_page_header_title cs_fs_80 cs_bold cs_white_color cs_mb_16">
              ARTICLE DETAILS
            </h1>
            <ol className="breadcrumb cs_center mb-0">
              <li className="breadcrumb-item">
                <Link to="/" aria-label="Back to home">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/blog" aria-label="Back to blog">Blog</Link>
              </li>
              <li className="breadcrumb-item active">{post.cardTitle}</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Dynamic Moving Ticker Line */}
      <div className="cs_horizontal_slider cs_type_1 cs_accent_bg cs_primary_font">
        <div className="cs_slider_inner">
          <div className="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
            {(post.movingLineItems || [
              post.cardTitle || post.articleTitle,
              post.category || "ARCHITECTURAL TOPIC",
              "Glass Fibre Reinforced Concrete & Composite Architecture",
              "Architectural Knowledge & Industry Insights",
              "Sri Sumeru GFRC & FRP"
            ]).map((item, idx) => (
              <React.Fragment key={idx}>
                <span>{item}</span>
                <img src="/assets/img/star-shape.svg" alt="Star shape" />
              </React.Fragment>
            ))}
          </div>
          <div className="cs_sliding_content cs_fs_24 cs_bold cs_white_color">
            {(post.movingLineItems || [
              post.cardTitle || post.articleTitle,
              post.category || "ARCHITECTURAL TOPIC",
              "Glass Fibre Reinforced Concrete & Composite Architecture",
              "Architectural Knowledge & Industry Insights",
              "Sri Sumeru GFRC & FRP"
            ]).map((item, idx) => (
              <React.Fragment key={`dup-${idx}`}>
                <span>{item}</span>
                <img src="/assets/img/star-shape.svg" alt="Star shape" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Details Section */}
      <div className="container">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="row cs_gap_y_40">
          <div className="col-lg-4 order-lg-2">
            <aside className="cs_sidebar_style_1">
              <div className="cs_sidebar_widget cs_gray_bg cs_radius_10">
                <div className="cs_author_card cs_center_column text-center">
                  <div className="cs_author_thumbnail cs_center cs_radius_100 cs_mb_30">
                    <img src="/assets/img/avatar-13.webp" alt={post.author} />
                  </div>
                  <div className="cs_author_bio">
                    <h2 className="cs_author_title cs_fs_24 cs_bold cs_mb_8">{post.author}</h2>
                    <p className="cs_author_subtitle cs_mb_20">GFRC Unit-Head</p>
                    <p className="cs_author_summery cs_mb_30">
                      Over 14 years of architectural GFRC experience across facade design, mould
                      making, and high-rise structural installation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cs_sidebar_widget cs_gray_bg cs_radius_10">
                <h3 className="cs_sidebar_widget_title cs_fs_18 cs_bold cs_mb_10">Categories</h3>
                <ul className="cs_service_category_list cs_primary_color cs_primary_font cs_mp_0">
                  <li><a href="/blog"><span>Facade Cladding</span><span>08</span></a></li>
                  <li><a href="/blog"><span>Jali &amp; Screens</span><span>06</span></a></li>
                  <li><a href="/blog"><span>Heritage Restoration</span><span>04</span></a></li>
                  <li><a href="/blog"><span>Technical Specs</span><span>03</span></a></li>
                </ul>
              </div>
              {otherPosts.length > 0 && (
                <div className="cs_sidebar_widget cs_gray_bg cs_radius_10">
                  <h3 className="cs_sidebar_widget_title cs_fs_18 cs_bold cs_mb_10">
                    Recent Articles
                  </h3>
                  <div className="cs_recent_post_wrapper">
                    {otherPosts.map((p) => (
                      <div className="cs_post_style_6" key={p.slug}>
                        <Link
                          aria-label={`Read article: ${p.articleTitle}`}
                          className="cs_post_thumb cs_radius_10"
                          to={`/blog-details/${p.slug}`}
                        >
                          <img src={p.thumbImage} alt={p.articleTitle} />
                        </Link>
                        <div className="cs_post_info">
                          <div className="cs_post_meta cs_fs_10 cs_semibold cs_primary_font cs_mb_10">
                            <i className="fa-regular fa-calendar-days"></i>
                            {p.category}
                          </div>
                          <h3 className="cs_post_title cs_fs_20 cs_semibold mb-0">
                            <Link
                              aria-label={`Read article: ${p.articleTitle}`}
                              to={`/blog-details/${p.slug}`}
                            >
                              {p.articleTitle}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
          <div className="col-lg-8">
            <article className="cs_blog_details">
              <div className="cs_blog_banner cs_radius_10 cs_mb_30">
                <img src={post.bannerImage} alt={post.articleTitle} />
              </div>
              <div className="cs_blog_meta cs_fs_14 cs_bold cs_accent_color cs_mb_16">
                <span>BY {post.author.toUpperCase()}</span> / <span>{post.category}</span>
              </div>
              <h1 className="cs_fs_48 cs_bold cs_mb_24">{post.articleTitle}</h1>
              {post.intro.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
              {post.detailImage && (
                <div className="cs_details_img cs_radius_10 my-4">
                  <img src={post.detailImage} alt={post.detailImageAlt || post.articleTitle} />
                </div>
              )}
              <h2>{post.subheading}</h2>
              <p>{post.body2}</p>
            </article>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>

      <TechKnowledgeFaq pageTitle="ADVANCED COMPOSITE ENGINEERING & FAQS" questions={post.faqs} />
    </main>
  );
}
