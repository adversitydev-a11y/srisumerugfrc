import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const masterPath = 'public/assets/img/brand/Sri Sumeru Gold Lotus Logo.png';

async function main() {
  const master = sharp(masterPath).trim();
  const rawMaster = await master.raw().toBuffer({ resolveWithObject: true });
  const { data, info } = rawMaster;

  console.log('Trimmed master dimensions:', info.width, 'x', info.height);

  // 1. Standard / Dark Logo (for light backgrounds: footer, sticky header, open graph)
  // Transparent bg, Gold lotus, Black text, Gold subtext
  const darkLogoBuf = await sharp(masterPath).trim().png().toBuffer();

  // 2. White Text Logo (for dark hero header)
  // Transparent bg, Gold lotus, White "SRI SUMERU", Gold "GFRC & FRP"
  const whiteData = Buffer.from(data);
  for (let y = 640; y < 860; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * info.channels;
      const r = whiteData[idx];
      const g = whiteData[idx + 1];
      const b = whiteData[idx + 2];
      const a = whiteData[idx + 3];

      if (a > 0 && r < 100 && g < 100 && b < 100) {
        whiteData[idx] = 255;
        whiteData[idx + 1] = 255;
        whiteData[idx + 2] = 255;
      }
    }
  }

  const whiteLogoBuf = await sharp(whiteData, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels
    }
  }).png().toBuffer();

  // 3. Lotus Emblem for Site Icon / Favicon
  // Bounding box: x: 222 to 1222, y: 0 to 634
  const lotusEmblem = await sharp(masterPath).trim().extract({
    left: 222,
    top: 0,
    width: 1001,
    height: 635
  }).trim().toBuffer();

  const lotusMeta = await sharp(lotusEmblem).metadata();
  const maxDim = Math.max(lotusMeta.width, lotusMeta.height);
  const pad = Math.round(maxDim * 0.08);
  const sq = maxDim + pad * 2;

  // 512x512 Site Icon (PNG)
  const siteIcon512 = await sharp(lotusEmblem)
    .extend({
      top: Math.round((sq - lotusMeta.height) / 2),
      bottom: sq - lotusMeta.height - Math.round((sq - lotusMeta.height) / 2),
      left: Math.round((sq - lotusMeta.width) / 2),
      right: sq - lotusMeta.width - Math.round((sq - lotusMeta.width) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .resize(512, 512)
    .png()
    .toBuffer();

  // 192x192 Site Icon (PNG)
  const siteIcon192 = await sharp(siteIcon512).resize(192, 192).png().toBuffer();

  // 180x180 Apple Touch Icon (WebP and PNG)
  const appleTouch180 = await sharp(siteIcon512).resize(180, 180).png().toBuffer();
  const appleTouchWebp = await sharp(siteIcon512).resize(180, 180).webp({ quality: 100 }).toBuffer();

  // 32x32 Favicon (WebP and PNG)
  const favicon32Webp = await sharp(siteIcon512).resize(32, 32).webp({ quality: 100 }).toBuffer();
  const favicon32Png = await sharp(siteIcon512).resize(32, 32).png().toBuffer();

  // 4. Footer WebP Logos (for footer-logo.webp and footer-logo2.webp)
  const footerLogoWebp = await sharp(darkLogoBuf)
    .resize({ width: 700, fit: 'inside' })
    .webp({ quality: 100 })
    .toBuffer();

  // Write all to public directories safely!
  const outputs = [
    // Brand folder
    { path: 'public/assets/img/brand/sumeru-gfrc-logo.png', buf: darkLogoBuf },
    { path: 'public/assets/img/brand/sumeru-gfrc-logo-white.png', buf: whiteLogoBuf },
    { path: 'public/assets/img/brand/ssrpl-logo.png', buf: darkLogoBuf },
    { path: 'public/assets/img/brand/site-icon.png', buf: siteIcon512 },
    { path: 'public/assets/img/brand/site-icon-192.png', buf: siteIcon192 },

    // Root favicons & icons
    { path: 'public/favicon.ico', buf: favicon32Png },
    { path: 'public/favicon.png', buf: favicon32Png },
    { path: 'public/assets/img/favicon.webp', buf: favicon32Webp },
    { path: 'public/assets/img/apple-touch-icon.webp', buf: appleTouchWebp },
    { path: 'public/assets/img/apple-touch-icon.png', buf: appleTouch180 },

    // Standard logo fallbacks
    { path: 'public/assets/img/logo.png', buf: darkLogoBuf },
    { path: 'public/assets/img/footer-logo.webp', buf: footerLogoWebp },
    { path: 'public/assets/img/footer-logo2.webp', buf: footerLogoWebp },
  ];

  for (const item of outputs) {
    fs.mkdirSync(path.dirname(item.path), { recursive: true });
    fs.writeFileSync(item.path, item.buf);
    console.log('✓ Wrote:', item.path, `(${item.buf.length} bytes)`);
  }

  // Also write SVG wrappers for logo.svg and logo2.svg so any legacy SVG reference renders the new logo!
  const darkLogoBase64 = darkLogoBuf.toString('base64');
  const darkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${info.width} ${info.height}" width="${info.width}" height="${info.height}">
  <image href="data:image/png;base64,${darkLogoBase64}" width="${info.width}" height="${info.height}" />
</svg>`;
  fs.writeFileSync('public/assets/img/logo.svg', darkSvg, 'utf8');
  fs.writeFileSync('public/assets/img/logo2.svg', darkSvg, 'utf8');
  console.log('✓ Updated logo.svg and logo2.svg with new brand logo');
}

main().catch(console.error);
