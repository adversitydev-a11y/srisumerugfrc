import fs from 'fs';
import sharp from 'sharp';

async function main() {
  const logoPath = './src/assets/img/SSRPL Logo.png';
  
  if (!fs.existsSync(logoPath)) {
    console.error('Logo file not found:', logoPath);
    return;
  }
  
  // 1. Process and save logo variants
  const sharpInstance = sharp(logoPath).trim();
  const meta = await sharpInstance.metadata();
  console.log('Processed SSRPL Logo:', meta.width, 'x', meta.height);
  
  // Save to public brand folder
  await sharp(logoPath).trim().toFile('./public/assets/img/brand/sumeru-gfrc-logo.png');
  await sharp(logoPath).trim().toFile('./public/assets/img/brand/ssrpl-logo.png');
  await sharp(logoPath).trim().toFile('./public/assets/img/logo.png');
  
  // Footer webp
  await sharp(logoPath)
    .trim()
    .resize({ width: 700, fit: 'inside' })
    .toFormat('webp', { quality: 100 })
    .toFile('./public/assets/img/footer-logo.webp');

  await sharp(logoPath)
    .trim()
    .resize({ width: 700, fit: 'inside' })
    .toFormat('webp', { quality: 100 })
    .toFile('./public/assets/img/footer-logo2.webp');

  // 2. Update siteContent.js footer to include the logo
  let siteContentRaw = fs.readFileSync('./src/content/siteContent.js', 'utf8');
  
  const targetStr = '<div class=\\"cs_footer_cta_content text-center\\">';
  const logoHtml = '<div class=\\"cs_footer_cta_content text-center\\">\\r\\n          <div class=\\"cs_footer_logo_wrap cs_mb_30\\">\\r\\n            <a href=\\"/\\" aria-label=\\"Sri Sumeru Realty Home\\">\\r\\n              <img src=\\"/assets/img/brand/sumeru-gfrc-logo.png\\" alt=\\"Sri Sumeru Realty Pvt Ltd Logo\\" class=\\"cs_footer_brand_logo\\">\\r\\n            </a>\\r\\n          </div>';
  
  if (siteContentRaw.includes(targetStr) && !siteContentRaw.includes('cs_footer_brand_logo')) {
    siteContentRaw = siteContentRaw.replace(targetStr, logoHtml);
    fs.writeFileSync('./src/content/siteContent.js', siteContentRaw, 'utf8');
    console.log('Added logo to footer CTA in siteContent.js');
  }
}

main().catch(console.error);
