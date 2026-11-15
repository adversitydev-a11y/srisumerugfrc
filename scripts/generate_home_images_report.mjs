import fs from 'fs';
import path from 'path';
import siteContent from '../src/content/siteContent.js';

const homeHtml = siteContent.pages.Home;

function getImageDimensions(buffer) {
  // PNG
  if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
      format: 'PNG'
    };
  }
  // JPEG
  if (buffer[0] === 0xFF && buffer[1] === 0xD8) {
    let offset = 2;
    while (offset < buffer.length) {
      if (buffer[offset] !== 0xFF) break;
      const marker = buffer[offset + 1];
      if (marker === 0xC0 || marker === 0xC1 || marker === 0xC2) {
        return {
          height: buffer.readUInt16BE(offset + 5),
          width: buffer.readUInt16BE(offset + 7),
          format: 'JPEG'
        };
      }
      const len = buffer.readUInt16BE(offset + 2);
      offset += 2 + len;
    }
  }
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
  // SVG
  if (buffer.toString('utf8', 0, 100).includes('<svg')) {
    const str = buffer.toString('utf8', 0, 1500);
    const wM = str.match(/width=["'](\d+)/);
    const hM = str.match(/height=["'](\d+)/);
    const vbM = str.match(/viewBox=["']\s*[\d\.\-]+\s+[\d\.\-]+\s+([\d\.\-]+)\s+([\d\.\-]+)/);
    if (wM && hM) return { width: parseInt(wM[1]), height: parseInt(hM[1]), format: 'SVG' };
    if (vbM) return { width: Math.round(parseFloat(vbM[1])), height: Math.round(parseFloat(vbM[2])), format: 'SVG' };
    return { width: 'Vector', height: 'Vector', format: 'SVG' };
  }
  return null;
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function getRatio(w, h) {
  if (typeof w !== 'number' || typeof h !== 'number') return 'Vector SVG';
  const divisor = gcd(w, h);
  const rW = w / divisor;
  const rH = h / divisor;
  const dec = (w / h).toFixed(2);

  const standardRatios = [
    { name: "1:1 (Square)", val: 1.0 },
    { name: "16:9 (Widescreen)", val: 16 / 9 },
    { name: "4:3", val: 4 / 3 },
    { name: "3:2", val: 3 / 2 },
    { name: "2:1", val: 2.0 },
    { name: "2.4:1 (Panoramic / Ultrawide)", val: 2.4 },
    { name: "21:9", val: 21 / 9 },
    { name: "9:16 (Vertical)", val: 9 / 16 },
    { name: "3:4 (Portrait)", val: 3 / 4 },
    { name: "2:3 (Portrait)", val: 2 / 3 },
    { name: "4:5 (Portrait)", val: 4 / 5 },
  ];

  let closest = standardRatios[0];
  let minDiff = Math.abs((w / h) - closest.val);
  for (const sr of standardRatios) {
    const diff = Math.abs((w / h) - sr.val);
    if (diff < minDiff) {
      minDiff = diff;
      closest = sr;
    }
  }

  let label = `${dec}:1`;
  if (rW <= 25 && rH <= 25) {
    label = `${rW}:${rH} (${dec}:1)`;
  }
  if (minDiff < 0.05) {
    label += ` [${closest.name}]`;
  }
  return label;
}

// Regex to capture sections cleanly
const sectionBlocks = homeHtml.split(/(?=<!--\s*Start\s+[\w\s]+Section\s*-->)/i);

const report = [];

for (const sec of sectionBlocks) {
  const commentMatch = sec.match(/<!--\s*Start\s+([\w\s]+?)\s*-->/i);
  const secName = commentMatch ? commentMatch[1].trim() : "Other Section";

  // Find all images in this block
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  const bgRegex = /(?:data-src|data-background|background(?:-image)?:\s*url)\(?["']?([^"')]+)["']?\)?/gi;

  let m;
  const seenInSec = new Set();
  
  while ((m = imgRegex.exec(sec)) !== null) {
    const src = m[1];
    if (seenInSec.has(src)) continue;
    seenInSec.add(src);

    const altMatch = m[0].match(/alt=["']([^"']*)["']/i);
    const alt = altMatch ? altMatch[1] : "";
    report.push({ secName, type: 'Image (<img>)', src, alt });
  }

  while ((m = bgRegex.exec(sec)) !== null) {
    const src = m[1];
    if (seenInSec.has(src)) continue;
    seenInSec.add(src);
    report.push({ secName, type: 'Background Image', src, alt: '(CSS / Data Background)' });
  }
}

// Also check Header and Footer logos/images
const headerHtml = siteContent.blocks.header;
const footerHtml = siteContent.blocks.footer;

const externalOrHeaderFooter = [
  { secName: "Header / Navigation", type: "Header Logo (Light Hero)", src: "/assets/img/brand/sumeru-gfrc-logo.png", alt: "Dark Brand Logo" },
  { secName: "Header / Navigation", type: "Header Logo (Dark Hero)", src: "/assets/img/brand/sumeru-gfrc-logo-white.png", alt: "White Brand Logo" },
  { secName: "Footer Section", type: "Footer Logo", src: "/assets/img/brand/sumeru-gfrc-logo.png", alt: "Footer Brand Logo" },
];

for (const item of [...report, ...externalOrHeaderFooter]) {
  let cleanSrc = item.src.split('?')[0].split('#')[0];
  if (cleanSrc.startsWith('/')) cleanSrc = cleanSrc.substring(1);

  const candidates = [
    path.resolve('public', cleanSrc),
    path.resolve('src', cleanSrc),
    path.resolve(cleanSrc)
  ];

  let foundPath = candidates.find(p => fs.existsSync(p));
  if (foundPath) {
    const buf = fs.readFileSync(foundPath);
    const dims = getImageDimensions(buf);
    if (dims) {
      item.dims = dims;
      item.ratio = getRatio(dims.width, dims.height);
      item.fileSize = (fs.statSync(foundPath).size / 1024).toFixed(1) + " KB";
    }
  } else {
    item.ratio = "External / Not Local";
  }
}

// Print formatted Markdown
console.log("\n## Home Page Images & Aspect Ratios\n");
let currentSec = "";
for (const item of [...report, ...externalOrHeaderFooter]) {
  if (item.secName !== currentSec) {
    currentSec = item.secName;
    console.log(`\n### ${currentSec}`);
    console.log(`| Image Source | Type / Role | Dimensions (W x H) | Aspect Ratio | Format | File Size |`);
    console.log(`| :--- | :--- | :--- | :--- | :--- | :--- |`);
  }
  const dimsStr = item.dims ? `${item.dims.width} × ${item.dims.height} px` : "—";
  const fmtStr = item.dims ? item.dims.format : "—";
  const sizeStr = item.fileSize || "—";
  console.log(`| \`${item.src}\` | ${item.alt || item.type} | **${dimsStr}** | **${item.ratio}** | ${fmtStr} | ${sizeStr} |`);
}
