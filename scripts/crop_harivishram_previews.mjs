import sharp from "sharp";
import path from "node:path";

const artifactDir = "C:\\Users\\Rakshitha\\.gemini\\antigravity\\brain\\0e5a4700-e2e9-455b-86b5-3c6b355e3899";

// 1. Projects listing - Card 6 (Harivishram)
// Near bottom of listing page (approx y: 3200 to 4500)
await sharp(path.join(artifactDir, "projects_all_six_cards.png"))
  .extract({ left: 0, top: 3250, width: 1280, height: 1100 })
  .toFile(path.join(artifactDir, "preview_projects_card6_harivishram.png"));

// 2. Harivishram detail page - Upper
await sharp(path.join(artifactDir, "harivishram_detail_page.png"))
  .extract({ left: 0, top: 250, width: 1280, height: 1100 })
  .toFile(path.join(artifactDir, "preview_harivishram_upper.png"));

// 3. Harivishram detail page - Lower
await sharp(path.join(artifactDir, "harivishram_detail_page.png"))
  .extract({ left: 0, top: 1350, width: 1280, height: 1200 })
  .toFile(path.join(artifactDir, "preview_harivishram_lower.png"));

console.log("Harivishram crops created!");
