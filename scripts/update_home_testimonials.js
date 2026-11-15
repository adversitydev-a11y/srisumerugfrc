import fs from 'fs';
import siteContent from '../src/content/siteContent.js';

let homeHtml = siteContent.pages.Home;

const oldSectionRegex = /<section class=["']cs_gfrc_testimonials_section[\s\S]*?<\/section>/i;

const newSectionHtml = `<!-- Start Testimonials Section -->
    <section class="cs_testimonials_section cs_gray_bg position-relative">
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="cs_section_heading_style_1 cs_center_column text-center">
          <p class="cs_section_subtitle cs_bold cs_accent_color cs_mb_20 text-uppercase">TESTIMONIALS</p>
          <h2 class="cs_section_title cs_fs_53 cs_bold mb-0">WHAT OUR CLIENTS SAY</h2>
          <p class="cs_section_desc cs_mt_20 mb-0">See what architects, developers, and partners have to say about our architectural solutions.</p>
        </div>
        <div class="cs_height_60 cs_height_lg_40"></div>
        <div class="cs_snip1390_wrapper">
          <figure class="snip1390">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="profile-sample3" class="profile" />
            <figcaption>
              <h2>Eleanor Crisp</h2>
              <h4>UX Design</h4>
              <blockquote>Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!</blockquote>
            </figcaption>
          </figure>
          <figure class="snip1390 hover">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" class="profile" />
            <figcaption>
              <h2>Gordon Norman</h2>
              <h4>Accountant</h4>
              <blockquote>Wormwood : Calvin, how about you? Calvin : Hard to say ma'am. I think my cerebellum has just fused. </blockquote>
            </figcaption>
          </figure>
          <figure class="snip1390">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" class="profile" />
            <figcaption>
              <h2>Sue Shei</h2>
              <h4>Public Relations</h4>
              <blockquote>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</blockquote>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="cs_height_120 cs_height_lg_80"></div>
    </section>
    <!-- End Testimonials Section -->`;

if (oldSectionRegex.test(homeHtml)) {
  homeHtml = homeHtml.replace(oldSectionRegex, newSectionHtml);
  siteContent.pages.Home = homeHtml;
  const output = 'const siteContent = ' + JSON.stringify(siteContent, null, 2) + ';\n\nexport default siteContent;\n';
  fs.writeFileSync('./src/content/siteContent.js', output, 'utf-8');
  console.log('Successfully replaced Testimonials section in Home page!');
} else {
  console.error('Could not find existing testimonials section in Home page!');
}
