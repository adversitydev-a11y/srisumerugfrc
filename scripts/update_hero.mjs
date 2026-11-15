import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/content/siteContent.js');
let content = fs.readFileSync(filePath, 'utf8');

const oldHeroMarkerStart = '<!-- Start Hero Section -->';
const oldHeroMarkerEnd = '<!-- End Hero Section -->';

const startIndex = content.indexOf(oldHeroMarkerStart);
const endIndex = content.indexOf(oldHeroMarkerEnd);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find hero markers in siteContent.js');
  process.exit(1);
}

const newHeroHtml = [
  '<!-- Start Hero Section -->',
  '    <section class="cs_hero_facade_section cs_bg_filed position-relative" data-src="/assets/img/grand-symmetrical-facade.webp" style="background-image: url(\'/assets/img/grand-symmetrical-facade.webp\'); background-size: cover; background-position: center right; background-repeat: no-repeat;">',
  '      <div class="cs_hero_facade_overlay position-absolute"></div>',
  '      <div class="container position-relative cs_zindex_2">',
  '        <div class="cs_hero_facade_main">',
  '          <div class="cs_hero_facade_content">',
  '            <div class="cs_hero_facade_eyebrow">',
  '              <span class="cs_eyebrow_line"></span>',
  '              <span class="cs_eyebrow_text">GFRC &amp; FRP PRODUCTS</span>',
  '              <span class="cs_eyebrow_line"></span>',
  '            </div>',
  '            <h1 class="cs_hero_facade_title">',
  '              Lightweight<br>',
  '              <span class="cs_gold_text">Solutions</span> for<br>',
  '              Modern Architecture',
  '            </h1>',
  '            <p class="cs_hero_facade_desc">',
  '              High-performance GFRC and FRP products for iconic, durable and sustainable structures.',
  '            </p>',
  '            <div class="cs_hero_facade_btn_wrap">',
  '              <a href="/projects" class="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50" aria-label="Explore our products">',
  '                <span>EXPLORE OUR PRODUCTS</span>',
  '                <span class="cs_btn_icon cs_radius_100 cs_center" aria-hidden="true"><i class="fa-solid fa-arrow-right"></i></span>',
  '              </a>',
  '            </div>',
  '          </div>',
  '        </div>',
  '        <div class="cs_hero_facade_bottom_bar">',
  '          <div class="cs_hero_facade_features">',
  '            <div class="cs_facade_feature_item">',
  '              <div class="cs_facade_icon">',
  '                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#CAA05C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">',
  '                  <path d="M11 20A7 7 0 0 1 4 13C4 8.5 8 3.5 20 2C18.5 14 13.5 18 11 20Z"></path>',
  '                  <path d="M4 21C7 17 11 13 14 10"></path>',
  '                </svg>',
  '              </div>',
  '              <div class="cs_facade_feature_text">',
  '                <h3 class="cs_facade_feature_title">LIGHTWEIGHT</h3>',
  '                <p class="cs_facade_feature_desc">Easy Installation</p>',
  '              </div>',
  '            </div>',
  '            <div class="cs_facade_feature_divider" aria-hidden="true"></div>',
  '            <div class="cs_facade_feature_item">',
  '              <div class="cs_facade_icon">',
  '                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#CAA05C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">',
  '                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
  '                  <path d="m9 12 2 2 4-4"></path>',
  '                </svg>',
  '              </div>',
  '              <div class="cs_facade_feature_text">',
  '                <h3 class="cs_facade_feature_title">DURABLE</h3>',
  '                <p class="cs_facade_feature_desc">Long-lasting Performance</p>',
  '              </div>',
  '            </div>',
  '            <div class="cs_facade_feature_divider" aria-hidden="true"></div>',
  '            <div class="cs_facade_feature_item">',
  '              <div class="cs_facade_icon">',
  '                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#CAA05C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">',
  '                  <path d="M7 20h10"></path>',
  '                  <path d="M10 20c0-4 1-6 2-10"></path>',
  '                  <path d="M12 10c1-3 3-5 6-5 0 3-2 5-6 5z"></path>',
  '                  <path d="M12 13c-2-2-4-3-6-3 0 3 2 4 6 3z"></path>',
  '                </svg>',
  '              </div>',
  '              <div class="cs_facade_feature_text">',
  '                <h3 class="cs_facade_feature_title">SUSTAINABLE</h3>',
  '                <p class="cs_facade_feature_desc">Eco-friendly Solutions</p>',
  '              </div>',
  '            </div>',
  '            <div class="cs_facade_feature_divider" aria-hidden="true"></div>',
  '            <div class="cs_facade_feature_item">',
  '              <div class="cs_facade_icon">',
  '                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#CAA05C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">',
  '                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>',
  '                  <line x1="9" y1="22" x2="9" y2="22.01"></line>',
  '                  <line x1="15" y1="22" x2="15" y2="22.01"></line>',
  '                  <line x1="9" y1="6" x2="9" y2="6.01"></line>',
  '                  <line x1="15" y1="6" x2="15" y2="6.01"></line>',
  '                  <line x1="9" y1="10" x2="9" y2="10.01"></line>',
  '                  <line x1="15" y1="10" x2="15" y2="10.01"></line>',
  '                  <line x1="9" y1="14" x2="9" y2="14.01"></line>',
  '                  <line x1="15" y1="14" x2="15" y2="14.01"></line>',
  '                  <line x1="9" y1="18" x2="9" y2="18.01"></line>',
  '                  <line x1="15" y1="18" x2="15" y2="18.01"></line>',
  '                </svg>',
  '              </div>',
  '              <div class="cs_facade_feature_text">',
  '                <h3 class="cs_facade_feature_title">ARCHITECTURAL FREEDOM</h3>',
  '                <p class="cs_facade_feature_desc">Custom Designs</p>',
  '              </div>',
  '            </div>',
  '          </div>',
  '        </div>',
  '      </div>',
  '    </section>',
  '    <!-- End Hero Section -->'
].join('\\r\\n');

const newHeroEscaped = newHeroHtml.replace(/"/g, '\\"');

const updatedContent = content.slice(0, startIndex) + newHeroEscaped + content.slice(endIndex + oldHeroMarkerEnd.length);

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log('Successfully updated siteContent.js with user reference hero section!');
