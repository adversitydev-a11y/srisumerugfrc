import fs from 'fs';
import path from 'path';

import siteContent from '../src/content/siteContent.js';
const homeHtml = siteContent.pages.Home;

console.log("Home HTML length:", homeHtml.length);

// Helper to read image dimensions without external library (png, jpg, webp, svg)
function getImageDimensions(buffer) {
  // PNG
  if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
      format: 'png'
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
          format: 'jpeg'
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
        format: 'webp'
      };
    } else if (vp8 === 'VP8L') {
      const b0 = buffer[21];
      const b1 = buffer[22];
      const b2 = buffer[23];
      const b3 = buffer[24];
      const width = 1 + (((b1 & 0x3F) << 8) | b0);
      const height = 1 + (((b3 & 0xF) << 10) | (b2 << 2) | ((b1 & 0xC0) >> 6));
      return { width, height, format: 'webp' };
    } else if (vp8 === 'VP8X') {
      const width = 1 + buffer.readUIntLE(24, 3);
      const height = 1 + buffer.readUIntLE(27, 3);
      return { width, height, format: 'webp' };
    }
  }
  // SVG
  if (buffer.toString('utf8', 0, 100).includes('<svg')) {
    const str = buffer.toString('utf8', 0, 1000);
    const wM = str.match(/width=["'](\d+)/);
    const hM = str.match(/height=["'](\d+)/);
    const vbM = str.match(/viewBox=["']\s*\d+\s+\d+\s+(\d+)\s+(\d+)/);
    if (wM && hM) return { width: parseInt(wM[1]), height: parseInt(hM[1]), format: 'svg' };
    if (vbM) return { width: parseInt(vbM[1]), height: parseInt(vbM[2]), format: 'svg' };
    return { width: 'Vector', height: 'Vector', format: 'svg' };
  }
  return null;
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function getSimplifiedRatio(w, h) {
  if (typeof w !== 'number' || typeof h !== 'number') return 'Vector';
  const divisor = gcd(w, h);
  const rW = w / divisor;
  const rH = h / divisor;
  const dec = (w / h).toFixed(2);
  
  const standardRatios = [
    { name: "1:1 (Square)", val: 1.0 },
    { name: "16:9 (Widescreen)", val: 16 / 9 },
    { name: "4:3 (Standard)", val: 4 / 3 },
    { name: "3:2 (Classic Photo)", val: 3 / 2 },
    { name: "2:1 (Univisium)", val: 2.0 },
    { name: "2.4:1 (Cinematic Banner)", val: 2.4 },
    { name: "21:9 (Ultrawide)", val: 21 / 9 },
    { name: "9:16 (Vertical Story)", val: 9 / 16 },
    { name: "3:4 (Vertical Portrait)", val: 3 / 4 },
    { name: "2:3 (Vertical Portrait)", val: 2 / 3 },
    { name: "5:4", val: 5 / 4 },
    { name: "4:5 (Instagram Portrait)", val: 4 / 5 },
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

  let approx = "";
  if (minDiff < 0.05) {
    approx = ` [≈ ${closest.name}]`;
  }

  // If simplified ratio is simple (< 30), show it, otherwise show decimal ratio
  if (rW <= 32 && rH <= 32) {
    return `${rW}:${rH} (${dec}:1)${approx}`;
  }
  return `${dec}:1${approx}`;
}

async function analyzeImages() {
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  const bgRegex = /url\(["']?([^"')]+)["']?\)/gi;

  const tags = [];
  let m;

  while ((m = imgRegex.exec(homeHtml)) !== null) {
    const fullTag = m[0];
    const src = m[1];
    const index = m.index;
    
    const contextBefore = homeHtml.substring(Math.max(0, index - 800), index);
    const commentMatch = [...contextBefore.matchAll(/<!--\s*([^-]+?)\s*-->/g)];
    const lastComment = commentMatch.length > 0 ? commentMatch[commentMatch.length - 1][1] : "Home Section";
    
    const altMatch = fullTag.match(/alt=["']([^"']*)["']/i);
    const alt = altMatch ? altMatch[1] : "";

    tags.push({ type: 'Image Tag (img)', src, alt, section: lastComment.trim(), index });
  }

  while ((m = bgRegex.exec(homeHtml)) !== null) {
    const src = m[1];
    const index = m.index;
    const contextBefore = homeHtml.substring(Math.max(0, index - 800), index);
    const commentMatch = [...contextBefore.matchAll(/<!--\s*([^-]+?)\s*-->/g)];
    const lastComment = commentMatch.length > 0 ? commentMatch[commentMatch.length - 1][1] : "Home Background";

    tags.push({ type: 'CSS Background (url)', src, alt: '(Background Image)', section: lastComment.trim(), index });
  }

  tags.sort((a, b) => a.index - b.index);

  const list = [];
  for (const item of tags) {
    let cleanSrc = item.src.split('?')[0].split('#')[0];
    if (cleanSrc.startsWith('/')) cleanSrc = cleanSrc.substring(1);

    const candidates = [
      path.resolve('public', cleanSrc),
      path.resolve('src', cleanSrc),
      path.resolve(cleanSrc)
    ];

    let foundPath = candidates.find(p => fs.existsSync(p));
    let meta = null;
    if (foundPath) {
      const buf = fs.readFileSync(foundPath);
      const dims = getImageDimensions(buf);
      if (dims) {
        meta = {
          width: dims.width,
          height: dims.height,
          format: dims.format,
          ratio: getSimplifiedRatio(dims.width, dims.height),
          fileSizeKb: (fs.statSync(foundPath).size / 1024).toFixed(1)
        };
      }
    }

    list.push({
      section: item.section,
      type: item.type,
      src: item.src,
      alt: item.alt,
      found: !!foundPath,
      meta
    });
  }

  console.log(JSON.stringify(list, null, 2));
}

analyzeImages();
