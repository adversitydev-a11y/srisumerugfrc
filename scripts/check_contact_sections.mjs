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
const contactSec = contactHtmlRaw.substring(idxContactStart, idxContactEnd);
const between = contactHtmlRaw.substring(idxContactEnd, idxFormStart);
const formSec = contactHtmlRaw.substring(idxFormStart, idxFormEnd);
const after = contactHtmlRaw.substring(idxFormEnd);

console.log('--- BETWEEN ---');
console.log(JSON.stringify(between));
console.log('--- FORM SEC START ---');
console.log(formSec.substring(0, 300));
console.log('--- FORM SEC END ---');
console.log(formSec.substring(formSec.length - 200));
console.log('--- AFTER START ---');
console.log(after.substring(0, 200));
