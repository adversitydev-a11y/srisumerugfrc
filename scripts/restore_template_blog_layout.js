import fs from 'fs';
import siteContent from '../src/content/siteContent.js';

const blogPageHtml = `<main>
    <!-- Start Page Header Section -->
    <section class="cs_page_header_style_1 cs_bg_filed cs_gray_bg position-relative" data-src="/assets/img/page-header-bg1.webp">
      <div class="cs_overlay cs_primary_bg position-absolute"></div>
      <div class="container">
        <div class="cs_page_header_content text-center">
          <h1 class="cs_page_header_title cs_fs_80 cs_bold cs_white_color cs_mb_16">OUR BLOG</h1>
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
                <button class="cs_search_button" type="button"><i class="fa-solid fa-magnifying-glass"></i></button>
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
            <div class="cs_sidebar_widget cs_gray_bg cs_radius_10">
              <div class="cs_sidebar_tags">
                <h3 class="cs_sidebar_widget_title cs_fs_18 cs_bold cs_mb_10">Tags</h3>
                <div class="cs_tags_links cs_fs_14 cs_semibold cs_primary_color cs_primary_font">
                  <a href="#" class="cs_tag_link cs_white_bg cs_radius_10"><span>#GFRC</span></a>
                  <a href="#" class="cs_tag_link cs_white_bg cs_radius_10"><span>#Cladding</span></a>
                  <a href="#" class="cs_tag_link cs_white_bg cs_radius_10"><span>#Jali</span></a>
                  <a href="#" class="cs_tag_link cs_white_bg cs_radius_10"><span>#Cornices</span></a>
                  <a href="#" class="cs_tag_link cs_white_bg cs_radius_10"><span>#Facades</span></a>
                  <a href="#" class="cs_tag_link cs_white_bg cs_radius_10"><span>#Domes</span></a>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <div class="col-lg-8">
          <div class="cs_posts_grid_3">
            
            <!-- Original Template Card 1 -->
            <article class="cs_post_style_5 cs_gray_bg cs_radius_10">
              <a href="/blog-details" aria-label="Read article: Why GFRC is Revolutionizing Modern High-Rise Facades" class="cs_post_thumbnail cs_mb_30 cs_radius_10">
              <img src="/assets/img/post-img-10.webp" alt="GFRC High-Rise Facade article thumbnail">
              </a>
              <div class="cs_post_info">
                <div class="cs_post_summery cs_mb_16">
                  <div class="cs_posted_by">
                    <img src="/assets/img/icons/user.svg" alt="User icon">
                    <span>By : Neeta Sharma</span>
                  </div>
                  <div class="cs_post_comment">
                    <img src="/assets/img/icons/comment.svg" alt="Comment icon">
                    <span>By : Technical Team</span>
                  </div>
                </div>
                <h3 class="cs_post_title cs_fs_20 cs_semibold cs_mb_16 text-uppercase">
                  <a href="/blog-details" aria-label="Read article: Why GFRC is Revolutionizing Modern High-Rise Facades">WHY GFRC IS REVOLUTIONIZING MODERN HIGH-RISE FACADES</a>
                </h3>
                <div class="cs_post_meta cs_mb_30">
                  <span class="cs_category">FACADE / ENGINEERING</span>
                  <span class="cs_date">JAN 19 2025</span>
                </div>
                <a href="/blog-details" aria-label="View more articles about GFRC facades" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color">
                <span>MORE ARTICLES</span>
                <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </a>
              </div>
            </article>

            <!-- Original Template Card 2 -->
            <article class="cs_post_style_5 cs_gray_bg cs_radius_10">
              <a href="/blog-details" aria-label="Read article: Designing Custom GFRC Jali Screens for Passive Cooling" class="cs_post_thumbnail cs_mb_30 cs_radius_10">
              <img src="/assets/img/post-img-11.webp" alt="GFRC Jali screen design article thumbnail">
              </a>
              <div class="cs_post_info">
                <div class="cs_post_summery cs_mb_16">
                  <div class="cs_posted_by">
                    <img src="/assets/img/icons/user.svg" alt="User icon">
                    <span>By : Neeta Sharma</span>
                  </div>
                  <div class="cs_post_comment">
                    <img src="/assets/img/icons/comment.svg" alt="Comment icon">
                    <span>By : Technical Team</span>
                  </div>
                </div>
                <h3 class="cs_post_title cs_fs_20 cs_semibold cs_mb_16 text-uppercase">
                  <a href="/blog-details" aria-label="Read article: Designing Custom GFRC Jali Screens for Passive Cooling">DESIGNING CUSTOM GFRC JALI SCREENS FOR PASSIVE COOLING</a>
                </h3>
                <div class="cs_post_meta cs_mb_30">
                  <span class="cs_category">SOLAR / SHADING</span>
                  <span class="cs_date">JAN 16 2025</span>
                </div>
                <a href="/blog-details" aria-label="View more articles about GFRC jalis" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color">
                <span>MORE ARTICLES</span>
                <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </a>
              </div>
            </article>

            <!-- Original Template Card 3 -->
            <article class="cs_post_style_5 cs_gray_bg cs_radius_10">
              <a href="/blog-details" aria-label="Read article: Spray-Up vs Premix Casting: Choosing the Ideal Workflow" class="cs_post_thumbnail cs_mb_30 cs_radius_10">
              <img src="/assets/img/post-img-12.webp" alt="Spray-Up vs Premix casting article thumbnail">
              </a>
              <div class="cs_post_info">
                <div class="cs_post_summery cs_mb_16">
                  <div class="cs_posted_by">
                    <img src="/assets/img/icons/user.svg" alt="User icon">
                    <span>By : Neeta Sharma</span>
                  </div>
                  <div class="cs_post_comment">
                    <img src="/assets/img/icons/comment.svg" alt="Comment icon">
                    <span>By : Technical Team</span>
                  </div>
                </div>
                <h3 class="cs_post_title cs_fs_20 cs_semibold cs_mb_16 text-uppercase">
                  <a href="/blog-details" aria-label="Read article: Spray-Up vs Premix Casting: Choosing the Ideal Workflow">SPRAY-UP VS PREMIX CASTING: CHOOSING THE IDEAL WORKFLOW</a>
                </h3>
                <div class="cs_post_meta cs_mb_30">
                  <span class="cs_category">FABRICATION / METHODS</span>
                  <span class="cs_date">JAN 12 2025</span>
                </div>
                <a href="/blog-details" aria-label="View more articles about GFRC fabrication" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color">
                <span>MORE ARTICLES</span>
                <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </a>
              </div>
            </article>

            <!-- Original Template Card 4 -->
            <article class="cs_post_style_5 cs_gray_bg cs_radius_10">
              <a href="/blog-details" aria-label="Read article: Restoring Historic Domes, Jharokhas & Ornate Cornices" class="cs_post_thumbnail cs_mb_30 cs_radius_10">
              <img src="/assets/img/post-img-13.webp" alt="Heritage dome restoration article thumbnail">
              </a>
              <div class="cs_post_info">
                <div class="cs_post_summery cs_mb_16">
                  <div class="cs_posted_by">
                    <img src="/assets/img/icons/user.svg" alt="User icon">
                    <span>By : Neeta Sharma</span>
                  </div>
                  <div class="cs_post_comment">
                    <img src="/assets/img/icons/comment.svg" alt="Comment icon">
                    <span>By : Technical Team</span>
                  </div>
                </div>
                <h3 class="cs_post_title cs_fs_20 cs_semibold cs_mb_16 text-uppercase">
                  <a href="/blog-details" aria-label="Read article: Restoring Historic Domes, Jharokhas & Ornate Cornices">RESTORING HISTORIC DOMES, JHAROKHAS & ORNATE CORNICES</a>
                </h3>
                <div class="cs_post_meta cs_mb_30">
                  <span class="cs_category">HERITAGE / RESTORATION</span>
                  <span class="cs_date">JAN 08 2025</span>
                </div>
                <a href="/blog-details" aria-label="View more articles about dome restoration" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color">
                <span>MORE ARTICLES</span>
                <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </a>
              </div>
            </article>

            <!-- Original Template Card 5 -->
            <article class="cs_post_style_5 cs_gray_bg cs_radius_10">
              <a href="/blog-details" aria-label="Read article: Grade 18P Specifications: Durability & Fire Resistance" class="cs_post_thumbnail cs_mb_30 cs_radius_10">
              <img src="/assets/img/post-img-14.webp" alt="Grade 18P GFRC specifications article thumbnail">
              </a>
              <div class="cs_post_info">
                <div class="cs_post_summery cs_mb_16">
                  <div class="cs_posted_by">
                    <img src="/assets/img/icons/user.svg" alt="User icon">
                    <span>By : Neeta Sharma</span>
                  </div>
                  <div class="cs_post_comment">
                    <img src="/assets/img/icons/comment.svg" alt="Comment icon">
                    <span>By : Technical Team</span>
                  </div>
                </div>
                <h3 class="cs_post_title cs_fs_20 cs_semibold cs_mb_16 text-uppercase">
                  <a href="/blog-details" aria-label="Read article: Grade 18P Specifications: Durability & Fire Resistance">GRADE 18P SPECIFICATIONS: DURABILITY & FIRE RESISTANCE</a>
                </h3>
                <div class="cs_post_meta cs_mb_30">
                  <span class="cs_category">TECHNICAL / COMPLIANCE</span>
                  <span class="cs_date">JAN 04 2025</span>
                </div>
                <a href="/blog-details" aria-label="View more articles about technical specifications" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color">
                <span>MORE ARTICLES</span>
                <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </a>
              </div>
            </article>

            <!-- Original Template Card 6 -->
            <article class="cs_post_style_5 cs_gray_bg cs_radius_10">
              <a href="/blog-details" aria-label="Read article: Seamless Column Encasements & Portico Erection" class="cs_post_thumbnail cs_mb_30 cs_radius_10">
              <img src="/assets/img/post-img-15.webp" alt="GFRC column encasements article thumbnail">
              </a>
              <div class="cs_post_info">
                <div class="cs_post_summery cs_mb_16">
                  <div class="cs_posted_by">
                    <img src="/assets/img/icons/user.svg" alt="User icon">
                    <span>By : Neeta Sharma</span>
                  </div>
                  <div class="cs_post_comment">
                    <img src="/assets/img/icons/comment.svg" alt="Comment icon">
                    <span>By : Technical Team</span>
                  </div>
                </div>
                <h3 class="cs_post_title cs_fs_20 cs_semibold cs_mb_16 text-uppercase">
                  <a href="/blog-details" aria-label="Read article: Seamless Column Encasements & Portico Erection">SEAMLESS COLUMN ENCASEMENTS & PORTICO ERECTION</a>
                </h3>
                <div class="cs_post_meta cs_mb_30">
                  <span class="cs_category">COLUMNS / PORTICOS</span>
                  <span class="cs_date">DEC 28 2024</span>
                </div>
                <a href="/blog-details" aria-label="View more articles about columns and porticos" class="cs_text_btn_style_1 cs_fs_14 cs_bold cs_accent_color">
                <span>MORE ARTICLES</span>
                <span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </a>
              </div>
            </article>

          </div>
          <div class="cs_height_80 cs_height_lg_50"></div>
          <div class="cs_center">
            <ul class="cs_pagination_box cs_mp_0">
              <li><a href="#" aria-label="Pagination arrow left" class="cs_pagination_arrow cs_center cs_secondary_color"><i class="fa-solid fa-arrow-left-long"></i></a></li>
              <li><a class="cs_pagination_item cs_center active" href="#">1</a></li>
              <li><a class="cs_pagination_item cs_center" href="#">2</a></li>
              <li><a class="cs_pagination_item cs_center" href="#">3</a></li>
              <li><a href="#" aria-label="Pagination arrow right" class="cs_pagination_arrow cs_center"><i class="fa-solid fa-arrow-right-long"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="cs_height_120 cs_height_lg_80"></div>
    </div>
    <!-- End Blog List Section -->
</main>`;

siteContent.pages.Blog = blogPageHtml;

const fileOutput = `const siteContent = ${JSON.stringify(siteContent, null, 2)};\n\nexport default siteContent;\n`;

fs.writeFileSync('./src/content/siteContent.js', fileOutput, 'utf-8');
console.log('Successfully restored exact original template layout (.cs_posts_grid_3 with .cs_post_style_5) for the Blog page!');
