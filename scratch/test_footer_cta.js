import siteContent from './src/content/siteContent.js';

let html = siteContent.blocks.footer;
const isContactPage = true;
if (isContactPage) {
  html = html.replace('class="cs_footer_style_1', 'class="cs_footer_style_1 cs_contact_page_footer');
  html = html.replace(
    /(<div class="cs_footer_logo_wrap[^>]*>[\s\S]*?<\/div>)[\s\S]*?(<\/div>\s*<div class="cs_height_120)/,
    '$1\\n        $2'
  );
}

console.log('Result snippet:\n', html.substring(0, 700));
