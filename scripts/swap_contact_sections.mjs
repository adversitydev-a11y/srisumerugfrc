import fs from 'fs';

const filePath = 'src/content/siteContent.js';
let content = fs.readFileSync(filePath, 'utf8');

const startKey = '"Contact": "';
const startIndex = content.indexOf(startKey);
const endKey = '",\n    "Faq":';
const altEndKey = '",\r\n    "Faq":';
let endIndex = content.indexOf(endKey, startIndex);
if (endIndex === -1) endIndex = content.indexOf(altEndKey, startIndex);

const contactHtmlRaw = content.substring(startIndex + startKey.length, endIndex);

const contactSecStart = '<!-- Start Contact Section -->';
const contactSecEnd = '<!-- End Contact Section -->';
const formSecStart = '<!-- Start Contact Form Section -->';
const formSecEnd = '<!-- End Contact Form Section -->';

const idxContactStart = contactHtmlRaw.indexOf(contactSecStart);
const idxContactEnd = contactHtmlRaw.indexOf(contactSecEnd) + contactSecEnd.length;
const idxFormStart = contactHtmlRaw.indexOf(formSecStart);
const idxFormEnd = contactHtmlRaw.indexOf(formSecEnd) + formSecEnd.length;

const before = contactHtmlRaw.substring(0, idxContactStart);
let contactSec = contactHtmlRaw.substring(idxContactStart, idxContactEnd);
let formSec = contactHtmlRaw.substring(idxFormStart, idxFormEnd);
const after = contactHtmlRaw.substring(idxFormEnd);

// Add top and bottom spacers to formSec if not present
if (!formSec.includes('<div class=\\"cs_height_120 cs_height_lg_80\\"></div>\\n      <div class=\\"container\\">')) {
  formSec = formSec.replace(
    '<section class=\\"cs_gray_bg\\">\\n      <div class=\\"container\\">',
    '<section class=\\"cs_gray_bg\\">\\n      <div class=\\"cs_height_120 cs_height_lg_80\\"></div>\\n      <div class=\\"container\\">'
  );
}
if (!formSec.includes('</div>\\n      <div class=\\"cs_height_120 cs_height_lg_80\\"></div>\\n    </section>')) {
  formSec = formSec.replace(
    '</div>\\n      </div>\\n    </section>',
    '</div>\\n      </div>\\n      <div class=\\"cs_height_120 cs_height_lg_80\\"></div>\\n    </section>'
  );
}

// Reorder: formSec first, then contactSec (the 3 cards)
const newContactHtml = before + formSec + '\\n\\n    ' + contactSec + after;

// Replace in content
const newFullContent = content.substring(0, startIndex + startKey.length) + newContactHtml + content.substring(endIndex);

fs.writeFileSync(filePath, newFullContent, 'utf8');
console.log('Successfully swapped contact sections!');
