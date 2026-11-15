import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const replacements = [
  {
    name: "Hero Left Card Image",
    source: "src/assets/img/architectural_extended_861x1140.png",
    target: "public/assets/img/home-prepared/hero-img-1.webp"
  },
  {
    name: "Hero Right Card Image",
    source: "src/assets/img/Golden Temple Dome Beneath a Dramatic Sky.png",
    target: "public/assets/img/home-prepared/hero-img-2.webp"
  },
  {
    name: "Main Large Showcase Image",
    source: "src/assets/img/Classical Ivory Archway Beneath Blue Skies.png",
    target: "public/assets/img/home-prepared/about-img1.webp"
  },
  {
    name: "Smaller Inset Card Image",
    source: "src/assets/img/AM-4_800x800.png",
    target: "public/assets/img/home-prepared/about-img2.webp"
  },
  {
    name: "Video Background Poster",
    source: "src/assets/img/Neoclassical Mansion Under Construction.png",
    target: "public/assets/img/gfrc/video-bg-window-frame.webp"
  }
];

async function run() {
  console.log("Starting safe image replacement...");

  for (const item of replacements) {
    const srcPath = path.resolve(item.source);
    const trgPath = path.resolve(item.target);

    if (!fs.existsSync(srcPath)) {
      console.error(`ERROR: Source not found: ${srcPath}`);
      continue;
    }

    // Backup original target
    const bakPath = trgPath + '.original.bak';
    if (!fs.existsSync(bakPath) && fs.existsSync(trgPath)) {
      fs.copyFileSync(trgPath, bakPath);
      console.log(`Backed up original to: ${bakPath}`);
    }

    // Convert source PNG to target WebP with high quality
    await sharp(srcPath)
      .webp({ quality: 92, effort: 4 })
      .toFile(trgPath);

    const meta = await sharp(trgPath).metadata();
    const stats = fs.statSync(trgPath);

    console.log(`[SUCCESS] ${item.name}`);
    console.log(`  Source: ${item.source}`);
    console.log(`  Target: ${item.target}`);
    console.log(`  Dimensions: ${meta.width} x ${meta.height} px`);
    console.log(`  Format: ${meta.format}`);
    console.log(`  Size: ${(stats.size / 1024).toFixed(1)} KB`);
    console.log('---');
  }

  console.log("All replacements completed safely!");
}

run().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
