import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Source high-resolution GFRC images
const srcDir = path.resolve('public/assets/img');

const replacements = [
  // ABOUT PAGE
  { target: 'about-img10.webp', source: 'gfrc-panel-geometry.webp', width: 525, height: 783 },
  { target: 'about-img11.webp', source: 'gfrc-cladding-hero.webp', width: 525, height: 783 },
  { target: 'about-img1.webp', source: 'gfrc-arch.webp', width: 789, height: 846 },
  { target: 'about-img2.webp', source: 'gfrc-bracket.webp', width: 370, height: 370 },
  
  // SERVICES IN ABOUT & SERVICES PAGE
  { target: 'service-img-21.webp', source: 'gfrc-cladding-detail.webp', width: 225, height: 225 },
  { target: 'service-img-22.webp', source: 'gfrc-screen-facade.webp', width: 225, height: 225 },
  { target: 'service-img-23.webp', source: 'gfrc-column.webp', width: 225, height: 225 },
  { target: 'service-img-24.webp', source: 'gfrc-cornice.webp', width: 225, height: 225 },
  { target: 'service-img-25.webp', source: 'gfrc-dome.webp', width: 225, height: 225 },
  
  // SERVICE DETAILS
  { target: 'service-img-26.webp', source: 'gfrc-cladding-hero.webp', width: 848, height: 570 },
  { target: 'service-img-1.webp', source: 'gfrc-bracket.webp', width: 636, height: 480 },
  { target: 'service-img-2.webp', source: 'gfrc-screen-pattern.webp', width: 636, height: 480 },
  
  // PORTFOLIO
  { target: 'portfolio-img-1.webp', source: 'gfrc-cladding-hero.webp', width: 636, height: 480 },
  { target: 'portfolio-img-2.webp', source: 'gfrc-screen-facade.webp', width: 636, height: 480 },
  { target: 'portfolio-img-3.webp', source: 'gfrc-dome.webp', width: 636, height: 480 },
  { target: 'portfolio-img-4.webp', source: 'gfrc-column.webp', width: 636, height: 480 },
  { target: 'portfolio-img-21.webp', source: 'gfrc-screen-facade.webp', width: 972, height: 675 },
  { target: 'portfolio-img-22.webp', source: 'gfrc-cladding-hero.webp', width: 972, height: 675 },
  { target: 'portfolio-img-23.webp', source: 'gfrc-dome.webp', width: 972, height: 675 },
  
  // PORTFOLIO DETAILS
  { target: 'portfolio-img-24.webp', source: 'gfrc-cladding-hero.webp', width: 872, height: 540 },
  { target: 'portfolio-img-25.webp', source: 'gfrc-screen-pattern.webp', width: 848, height: 640 },
  { target: 'portfolio-img-26.webp', source: 'gfrc-arch.webp', width: 636, height: 480 },
  { target: 'portfolio-img-27.webp', source: 'gfrc-bracket.webp', width: 636, height: 480 },
  
  // TEAM
  { target: 'team-img-1.webp', source: 'neeta-sharma.jpg', width: 576, height: 576 },
  
  // FAQ
  { target: 'faq-img-3.webp', source: 'gfrc-screen-pattern.webp', width: 467, height: 525 },
  
  // BLOG
  { target: 'post-img-1.webp', source: 'gfrc-cladding-hero.webp', width: 468, height: 600 },
  { target: 'post-img-2.webp', source: 'gfrc-screen-facade.webp', width: 468, height: 600 },
  { target: 'post-img-3.webp', source: 'gfrc-arch.webp', width: 468, height: 600 },
  { target: 'post-img-22.webp', source: 'gfrc-cladding-hero.webp', width: 110, height: 80 },
  { target: 'post-img-23.webp', source: 'gfrc-screen-facade.webp', width: 110, height: 80 },
  { target: 'post-img-24.webp', source: 'gfrc-arch.webp', width: 110, height: 80 },
  { target: 'avatar-13.webp', source: 'neeta-sharma.jpg', width: 120, height: 120 }
];

async function run() {
  console.log('Generating pixel-perfect GFRC images to match exact template slots...\n');
  for (const item of replacements) {
    const srcPath = path.join(srcDir, item.source);
    const destPath = path.join(srcDir, item.target);
    
    if (!fs.existsSync(srcPath)) {
      console.warn(`Source image missing: ${item.source}`);
      continue;
    }
    
    await sharp(srcPath)
      .resize(item.width, item.height, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 90 })
      .toFile(destPath);
      
    console.log(`[OK] Generated: ${item.target} (${item.width}x${item.height}) from ${item.source}`);
  }
  console.log('\nAll slot images generated successfully!');
}

run().catch(console.error);
