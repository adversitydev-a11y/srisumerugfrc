import fs from 'fs';
import path from 'path';
import content from '../src/content/siteContent.js';

console.log('=== VERIFYING IMAGES AND CONTENT ===\n');

let totalBrokenImages = 0;
let totalCheckedImages = 0;
const checkedPaths = new Set();

function checkHtmlImages(pageName, html) {
  const imgMatches = [...html.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);
  const dataSrcMatches = [...html.matchAll(/data-src=["']([^"']+)["']/g)].map(m => m[1]);
  const allImages = [...imgMatches, ...dataSrcMatches];

  allImages.forEach(imgUrl => {
    if (imgUrl.startsWith('http://') || imgUrl.startsWith('https://') || imgUrl.startsWith('#') || imgUrl.startsWith('data:')) return;
    
    totalCheckedImages++;
    // Normalize path to public directory
    const cleanPath = imgUrl.startsWith('/') ? imgUrl.slice(1) : imgUrl;
    const fullFsPath = path.resolve('public', cleanPath);
    
    if (!fs.existsSync(fullFsPath)) {
      console.error(`[BROKEN 404] Page: ${pageName} -> Image not found: ${imgUrl} (Looking at: ${fullFsPath})`);
      totalBrokenImages++;
    } else {
      checkedPaths.add(imgUrl);
    }
  });
}

// Check blocks and all pages
for (const [blockName, html] of Object.entries(content.blocks)) {
  checkHtmlImages(`Block:${blockName}`, html);
}
for (const [pageName, html] of Object.entries(content.pages)) {
  checkHtmlImages(`Page:${pageName}`, html);
}

console.log(`Total images checked: ${totalCheckedImages}`);
console.log(`Unique valid image paths found: ${checkedPaths.size}`);
console.log(`Total broken images: ${totalBrokenImages}`);

// Check for placeholder strings in inner pages
console.log('\n=== CHECKING FOR DEMO PLACEHOLDER COPY IN INNER PAGES ===');
const placeholderWords = ['Lorem ipsum', 'Minimal Guests House', 'Savannah Nguyen', 'Leslie Alexander', 'Vehicle Manufacturing', 'Josefine H. Smith'];
const innerPages = ['About', 'Services', 'ServiceDetails', 'Portfolio', 'PortfolioDetails', 'Team', 'TeamDetails', 'Faq', 'Pricing', 'Blog', 'BlogDetails', 'Contact'];

innerPages.forEach(p => {
  const html = content.pages[p] || '';
  placeholderWords.forEach(w => {
    if (html.includes(w)) {
      console.warn(`[WARNING] Page ${p} still contains placeholder phrase: "${w}"`);
    }
  });
});

console.log('\n=== AUDIT COMPLETE ===');
