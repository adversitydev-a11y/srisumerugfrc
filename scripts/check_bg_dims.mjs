import fs from 'fs';
import path from 'path';

const bgs = [
  '/assets/img/hero-bg1.webp',
  '/assets/img/text-bg1.webp',
  '/assets/img/gfrc/video-bg-window-frame.webp',
  '/assets/img/award-bg1.webp'
];

function getImageDimensions(buffer) {
  // WEBP
  if (buffer.toString('ascii', 0, 4) === 'RIFF' && buffer.toString('ascii', 8, 12) === 'WEBP') {
    const vp8 = buffer.toString('ascii', 12, 16);
    if (vp8 === 'VP8 ') {
      return {
        width: buffer.readUInt16LE(26) & 0x3fff,
        height: buffer.readUInt16LE(28) & 0x3fff,
        format: 'WEBP'
      };
    } else if (vp8 === 'VP8L') {
      const b0 = buffer[21];
      const b1 = buffer[22];
      const b2 = buffer[23];
      const b3 = buffer[24];
      const width = 1 + (((b1 & 0x3F) << 8) | b0);
      const height = 1 + (((b3 & 0xF) << 10) | (b2 << 2) | ((b1 & 0xC0) >> 6));
      return { width, height, format: 'WEBP' };
    } else if (vp8 === 'VP8X') {
      const width = 1 + buffer.readUIntLE(24, 3);
      const height = 1 + buffer.readUIntLE(27, 3);
      return { width, height, format: 'WEBP' };
    }
  }
  return null;
}

for (const bg of bgs) {
  let cleanSrc = bg.startsWith('/') ? bg.slice(1) : bg;
  const p = path.resolve('public', cleanSrc);
  if (fs.existsSync(p)) {
    const buf = fs.readFileSync(p);
    const d = getImageDimensions(buf);
    console.log(bg, d, (buf.length / 1024).toFixed(1) + " KB");
  } else {
    console.log("NOT FOUND:", p);
  }
}
