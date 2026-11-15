import fs from 'fs';
import siteContent from '../src/content/siteContent.js';

const fullHeader = `<!-- Start Header Section -->
    <header class="cs_site_header cs_style_1 cs_sticky_header" aria-label="Main header">
      <div class="cs_main_header">
        <div class="container-fluid">
          <div class="cs_main_header_in">
            <div class="cs_main_header_left">
              <a href="/" aria-label="Home page" class="cs_site_brand">
              <img src="/assets/img/logo.svg" alt="Brand logo">
              </a>
            </div>
            <div class="cs_main_header_center">
              <nav class="cs_nav" aria-label="Main navigation">
                <div class="cs_nav_list_wrapper">
                  <ul class="cs_nav_list cs_mp_0">
                    <li><a href="/" aria-label="Home">Home</a></li>
                    <li><a href="/about-us" aria-label="About Us">About Us</a></li>
                    <li><a href="/portfolio" aria-label="Projects">Projects</a></li>
                    <li><a href="/services" aria-label="FRP Products">FRP Products</a></li>
                    <li><a href="/gfrc-products" aria-label="GFRC Products">GFRC Products</a></li>
                    <li><a href="/blog" aria-label="Blog">Blog</a></li>
                    <li><a href="/contact-us" aria-label="Contact Us">Contact Us</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="cs_main_header_right">
              <div class="cs_header_btns_wrapper">
                <button type="button" aria-label="Search" class="cs_search_btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M23.7723 22.6943L17.5759 16.5969C19.1985 14.834 20.1955 12.5024 20.1955 9.93682C20.1947 4.44852 15.6742 0 10.0974 0C4.52055 0 0 4.44852 0 9.93682C0 15.4251 4.52055 19.8736 10.0974 19.8736C12.5069 19.8736 14.7169 19.0402 16.4529 17.6546L22.6733 23.776C22.9764 24.0746 23.4685 24.0746 23.7716 23.776C24.0754 23.4775 24.0754 22.9929 23.7723 22.6943ZM10.0974 18.3448C5.37877 18.3448 1.55362 14.5804 1.55362 9.93682C1.55362 5.29321 5.37877 1.52884 10.0974 1.52884C14.816 1.52884 18.6411 5.29321 18.6411 9.93682C18.6411 14.5804 14.816 18.3448 10.0974 18.3448Z" fill="currentColor"/>
                  </svg>
                </button>
                <a href="/contact-us" aria-label="Get in touch" class="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50">
                <span>GET IN TOUCH</span>
                <span class="cs_btn_icon cs_radius_100 cs_center" aria-hidden="true"><i class="fa-solid fa-arrow-right"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- End Header Section -->`;

siteContent.blocks.header = fullHeader;

const fileOutput = `const siteContent = ${JSON.stringify(siteContent, null, 2)};\n\nexport default siteContent;\n`;

fs.writeFileSync('./src/content/siteContent.js', fileOutput, 'utf-8');
console.log('Clean header written successfully!');
