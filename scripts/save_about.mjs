import fs from 'fs';
import siteContent from '../src/content/siteContent.js';

const html = siteContent.pages.About;
fs.writeFileSync('scripts/current_about.html', html, 'utf8');
console.log('Saved scripts/current_about.html');
