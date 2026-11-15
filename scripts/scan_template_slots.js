import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const templateDir = path.resolve('..', 'Axisbuilt - Template');
const pages = [
  'index.html', 'home-v2.html', 'home-v3.html', 'home-v4.html', 'home-v5.html', 'home-v6.html',
  'about-us.html', 'services.html', 'service-details.html', 'portfolio.html', 'portfolio-details.html',
  'blog.html', 'blog-details.html', 'contact-us.html', 'faq.html', 'team.html', 'team-details.html', 'pricing.html'
];

async function scan() {
  console.log('--- SCANNING ORIGINAL TEMPLATE IMAGE SLOTS & DIMENSIONS ---');
  const slotMap = new Map();

  for (const page of pages) {
    const filePath = path.join(templateDir, page);
    if (!fs.existsSync(filePath)) continue;
    const html = fs.readFileSync(filePath, 'utf8');
    const matches = [...html.matchAll(/(src|data-src)=["']([^"']+)["']/g)];
    
    for (const match of matches) {
      const src = match[2];
      if (src.startsWith('http') || src.startsWith('#') || src.includes('logo') || src.includes('icon') || src.includes('partner') || src.includes('star-shape') || src.includes('arrow')) continue;
      
      const cleanPath = src.replace(/^\.\//, '').replace(/^\//, '');
      const localFile = path.resolve('public', cleanPath);
      
      if (fs.existsSync(localFile) && !slotMap.has(cleanPath)) {
        try {
          const meta = await sharp(localFile).metadata();
          slotMap.set(cleanPath, { width: meta.width, height: meta.height, pages: [page] });
        } catch (e) {
          slotMap.set(cleanPath, { error: e.message, pages: [page] });
        }
      } else if (slotMap.has(cleanPath)) {
        slotMap.get(cleanPath).pages.push(page);
      }
    }
  }

  for (const [img, data] of slotMap.entries()) {
    console.log(`${img.padEnd(35)} : ${data.width}x${data.height} (used in: ${data.pages.join(', ')})`);
  }
}

scan().catch(console.error);
