import fs from 'fs';
import path from 'path';

// Helper to read WebP / JPG / PNG dimensions from buffer
function getDimensions(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    // PNG
    if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
      return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20), type: 'PNG' };
    }
    // JPEG
    if (buffer[0] === 0xFF && buffer[1] === 0xD8) {
      let offset = 2;
      while (offset < buffer.length) {
        if (buffer[offset] === 0xFF && (buffer[offset + 1] >= 0xC0 && buffer[offset + 1] <= 0xC3)) {
          return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7), type: 'JPG' };
        }
        offset += 2 + buffer.readUInt16BE(offset + 2);
      }
    }
    // WebP
    if (buffer.toString('ascii', 0, 4) === 'RIFF' && buffer.toString('ascii', 8, 12) === 'WEBP') {
      const type = buffer.toString('ascii', 12, 16);
      if (type === 'VP8 ') {
        const width = buffer.readUInt16LE(26) & 0x3fff;
        const height = buffer.readUInt16LE(28) & 0x3fff;
        return { width, height, type: 'WebP VP8' };
      }
      if (type === 'VP8L') {
        const b = buffer.readUInt32LE(21);
        const width = 1 + (b & 0x3fff);
        const height = 1 + ((b >> 14) & 0x3fff);
        return { width, height, type: 'WebP VP8L' };
      }
      if (type === 'VP8X') {
        const width = 1 + buffer.readUIntLE(24, 3);
        const height = 1 + buffer.readUIntLE(27, 3);
        return { width, height, type: 'WebP VP8X' };
      }
    }
  } catch (e) {
    return null;
  }
  return null;
}

const originalImages = [
  'about-img10.webp', 'about-img11.webp', 'about-img1.webp', 'about-img2.webp',
  'service-img-21.webp', 'service-img-22.webp', 'service-img-23.webp', 'service-img-24.webp', 'service-img-25.webp', 'service-img-26.webp',
  'portfolio-img-21.webp', 'portfolio-img-22.webp', 'portfolio-img-23.webp', 'portfolio-img-24.webp', 'portfolio-img-25.webp', 'portfolio-img-26.webp', 'portfolio-img-27.webp',
  'team-img-1.webp', 'team-img-2.webp', 'team-img-3.webp',
  'post-img-1.webp', 'post-img-2.webp', 'post-img-3.webp', 'faq-img-3.webp'
];

console.log('--- ORIGINAL TEMPLATE IMAGE DIMENSIONS ---');
for (const img of originalImages) {
  const p = path.resolve('public/assets/img', img);
  if (fs.existsSync(p)) {
    console.log(`${img.padEnd(25)} :`, getDimensions(p));
  }
}

console.log('\n--- NEW GFRC IMAGE DIMENSIONS ---');
const newImages = [
  'gfrc-cladding-hero.webp', 'gfrc-panel-geometry.webp', 'gfrc-cladding-detail.webp',
  'gfrc-screen-facade.webp', 'gfrc-column.webp', 'gfrc-cornice.webp', 'gfrc-dome.webp',
  'gfrc-arch.webp', 'gfrc-bracket.webp', 'gfrc-screen-pattern.webp', 'neeta-sharma.jpg'
];
for (const img of newImages) {
  const p = path.resolve('public/assets/img', img);
  if (fs.existsSync(p)) {
    console.log(`${img.padEnd(25)} :`, getDimensions(p));
  }
}
