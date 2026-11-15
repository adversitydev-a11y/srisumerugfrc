import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const artifactDir = "C:\\Users\\Rakshitha\\.gemini\\antigravity\\brain\\0e5a4700-e2e9-455b-86b5-3c6b355e3899";

console.log("--- 1. Testing Projects page DOM for all 6 cards ---");
const domProjects = execSync(
  '"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless=new --dump-dom http://127.0.0.1:5173/projects',
  { encoding: "utf8", maxBuffer: 15 * 1024 * 1024 }
);

console.log("Card 1 Shankara present?", domProjects.includes("SHANKARA RESIDENTIAL APARTMENT COMPLEX"));
console.log("Card 2 Purva Aerocity present?", domProjects.includes("PURVA AEROCITY — CONTEMPORARY ARCHITECTURAL FACADE"));
console.log("Card 3 Dhyan Mandir present?", domProjects.includes("DHYAN MANDIR — ORNATE ARCHITECTURAL ENTRANCE"));
console.log("Card 4 JST Param present?", domProjects.includes("JST PARAM — ONGOING FACADE PROJECT"));
console.log("Card 5 Bougainville present?", domProjects.includes("BOUGAINVILLE — ORNAMENTAL ARCHITECTURAL DETAILING"));
console.log("Card 6 Harivishram present?", domProjects.includes("HARIVISHRAM — CONTEMPORARY RESIDENTIAL FACADE"));
console.log("Card 6 Category present?", domProjects.includes("RESIDENTIAL ARCHITECTURE &amp; FACADE DETAILING") || domProjects.includes("RESIDENTIAL ARCHITECTURE & FACADE DETAILING"));
console.log("Card 6 Image present?", domProjects.includes("Modern Beige Apartment Towers with Landscaped Grounds.png"));
console.log("Card 6 Link present?", domProjects.includes("/projects/harivishram"));

console.log("\n--- 2. Testing Harivishram Detailed Page DOM ---");
const domHarivishram = execSync(
  '"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless=new --dump-dom "http://127.0.0.1:5173/projects/harivishram"',
  { encoding: "utf8", maxBuffer: 15 * 1024 * 1024 }
);

console.log("Harivishram Title present?", domHarivishram.includes("HARIVISHRAM — CONTEMPORARY RESIDENTIAL FACADE"));
console.log("Harivishram Overview P1 present?", domHarivishram.includes("Harivishram showcases contemporary residential architecture through warm beige exterior finishes"));
console.log("Harivishram Overview P2 present?", domHarivishram.includes("The building's façade combines repetitive vertical elements, balcony detailing"));
console.log("Harivishram Tech Heading present?", domHarivishram.includes("TECHNICAL EXECUTION &amp; QUALITY CONTROL") || domHarivishram.includes("TECHNICAL EXECUTION & QUALITY CONTROL"));
console.log("Harivishram Tech Bullet 1 present?", domHarivishram.includes("Consistent vertical façade detailing and architectural proportions"));
console.log("Harivishram Tech Bullet 2 present?", domHarivishram.includes("Coordinated balcony profiles and window openings"));
console.log("Harivishram Tech Bullet 3 present?", domHarivishram.includes("Uniform exterior finishes and visual alignment"));
console.log("Harivishram Tech Bullet 4 present?", domHarivishram.includes("Attention to architectural detailing and finishing consistency"));
console.log("Harivishram Install Heading present?", domHarivishram.includes("SITE INSTALLATION &amp; ARCHITECTURAL FINISHING") || domHarivishram.includes("SITE INSTALLATION & ARCHITECTURAL FINISHING"));
console.log("Harivishram Install Desc present?", domHarivishram.includes("The residential façade requires careful coordination of vertical architectural elements"));
console.log("Harivishram Gallery 1 present?", domHarivishram.includes("Modern Beige Apartment Towers with Landscaped Grounds.png"));
console.log("Harivishram Gallery 2 present?", domHarivishram.includes("Modern Beige Apartment Facade Under Blue Skies.png"));
console.log("Harivishram Material present?", domHarivishram.includes("Architectural façade elements"));
console.log("Harivishram Scope present?", domHarivishram.includes("Residential façade and architectural detailing"));
console.log("Harivishram Company present?", domHarivishram.includes("SRI SUMERU GFRC &amp; FRP") || domHarivishram.includes("SRI SUMERU GFRC & FRP"));

console.log("\n--- 3. Capturing Screenshots ---");
const outProjects = path.join(artifactDir, "projects_all_six_cards.png");
const outHarivishram = path.join(artifactDir, "harivishram_detail_page.png");

execSync(`"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless=new --disable-gpu --window-size=1280,5200 --screenshot="${outProjects}" http://127.0.0.1:5173/projects`);
execSync(`"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless=new --disable-gpu --window-size=1280,3000 --screenshot="${outHarivishram}" "http://127.0.0.1:5173/projects/harivishram"`);
console.log("Screenshots captured successfully!");
