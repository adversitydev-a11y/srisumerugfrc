import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imgDir = path.resolve('public/assets/img');

// All target slot definitions with their exact dimensions and GFRC source image
const slotMappings = [
  // ABOUT PAGE
  { target: 'about-img10.webp', source: 'gfrc-panel-geometry.webp', width: 525, height: 783 },
  { target: 'about-img11.webp', source: 'gfrc-cladding-hero.webp', width: 525, height: 783 },
  { target: 'about-img1.webp', source: 'gfrc-arch.webp', width: 789, height: 846 },
  { target: 'about-img2.webp', source: 'gfrc-bracket.webp', width: 370, height: 370 },
  
  // SERVICES MINI CARDS (ABOUT & SERVICES)
  { target: 'service-img-21.webp', source: 'gfrc-cladding-detail.webp', width: 225, height: 225 },
  { target: 'service-img-22.webp', source: 'gfrc-screen-facade.webp', width: 225, height: 225 },
  { target: 'service-img-23.webp', source: 'gfrc-column.webp', width: 225, height: 225 },
  { target: 'service-img-24.webp', source: 'gfrc-cornice.webp', width: 225, height: 225 },
  { target: 'service-img-25.webp', source: 'gfrc-dome.webp', width: 225, height: 225 },
  
  // SERVICE DETAILS
  { target: 'service-img-26.webp', source: 'gfrc-cladding-hero.webp', width: 848, height: 570 },
  { target: 'service-img-1.webp', source: 'gfrc-bracket.webp', width: 636, height: 480 },
  { target: 'service-img-2.webp', source: 'gfrc-screen-pattern.webp', width: 636, height: 480 },
  { target: 'contact-img1.webp', source: 'gfrc-arch.webp', width: 612, height: 900 },
  
  // PORTFOLIO TABS (HOME, SERVICES, PORTFOLIO)
  { target: 'portfolio-img-1.webp', source: 'gfrc-cladding-hero.webp', width: 636, height: 480 },
  { target: 'portfolio-img-2.webp', source: 'gfrc-screen-facade.webp', width: 636, height: 480 },
  { target: 'portfolio-img-3.webp', source: 'gfrc-dome.webp', width: 636, height: 480 },
  { target: 'portfolio-img-4.webp', source: 'gfrc-column.webp', width: 636, height: 480 },
  
  // PORTFOLIO PAGE
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
  { target: 'team-img-11.webp', source: 'neeta-sharma.jpg', width: 800, height: 947 },
  
  // FAQ
  { target: 'faq-img-3.webp', source: 'gfrc-screen-pattern.webp', width: 467, height: 525 },
  
  // BLOG & BLOG DETAILS
  { target: 'post-img-1.webp', source: 'gfrc-cladding-hero.webp', width: 468, height: 600 },
  { target: 'post-img-2.webp', source: 'gfrc-screen-facade.webp', width: 468, height: 600 },
  { target: 'post-img-3.webp', source: 'gfrc-arch.webp', width: 468, height: 600 },
  { target: 'post-img-8.webp', source: 'gfrc-cladding-hero.webp', width: 636, height: 525 },
  { target: 'post-img-10.webp', source: 'gfrc-screen-facade.webp', width: 636, height: 675 },
  { target: 'post-img-11.webp', source: 'gfrc-arch.webp', width: 424, height: 573 },
  { target: 'post-img-12.webp', source: 'gfrc-bracket.webp', width: 636, height: 675 },
  { target: 'post-img-22.webp', source: 'gfrc-cladding-hero.webp', width: 110, height: 80 },
  { target: 'post-img-23.webp', source: 'gfrc-screen-facade.webp', width: 110, height: 80 },
  { target: 'post-img-24.webp', source: 'gfrc-arch.webp', width: 110, height: 80 },
  { target: 'post-img-25.webp', source: 'gfrc-cladding-hero.webp', width: 872, height: 522 },
  { target: 'post-img-26.webp', source: 'gfrc-screen-pattern.webp', width: 555, height: 420 },
  { target: 'post-img-27.webp', source: 'gfrc-arch.webp', width: 555, height: 420 },
  { target: 'avatar-13.webp', source: 'neeta-sharma.jpg', width: 120, height: 120 },
  { target: 'avatar-14.webp', source: 'neeta-sharma.jpg', width: 180, height: 180 }
];

async function generateSlotImages() {
  console.log('Generating exact-slot GFRC images...');
  for (const item of slotMappings) {
    const srcPath = path.join(imgDir, item.source);
    const destPath = path.join(imgDir, item.target);
    
    if (!fs.existsSync(srcPath)) {
      console.warn(`Source missing: ${item.source}`);
      continue;
    }
    
    await sharp(srcPath)
      .resize(item.width, item.height, {
        fit: 'cover',
        position: item.source.includes('neeta') ? 'north' : 'center'
      })
      .webp({ quality: 90 })
      .toFile(destPath);
      
    console.log(`[GENERATED] ${item.target.padEnd(24)} -> ${item.width}x${item.height} (from ${item.source})`);
  }
}

generateSlotImages().then(() => {
  console.log('\nAll exact-slot image files have been generated perfectly!');
}).catch(console.error);
