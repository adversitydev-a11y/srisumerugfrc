import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, "../src/content/siteContent.js");

let fileContent = fs.readFileSync(filePath, "utf8");

// Locate Card 5 (Bougainville)
const bougainvilleTitle = `BOUGAINVILLE — ORNAMENTAL ARCHITECTURAL DETAILING`;
if (!fileContent.includes(bougainvilleTitle)) {
  console.error("ERROR: Bougainville card not found in siteContent.js");
  process.exit(1);
}

const card6 = `          <div class=\\"cs_card_style_13\\" role=\\"listitem\\">\\n            <a href=\\"/projects/harivishram\\" class=\\"cs_card_thumbnail cs_radius_10\\" aria-label=\\"View project: Harivishram — Contemporary Residential Facade\\">\\n            <img src=\\"/assets/img/Projects/Harivishram/Modern Beige Apartment Towers with Landscaped Grounds.png\\" alt=\\"Harivishram contemporary residential apartment towers and landscaped grounds\\">\\n            </a>\\n            <div class=\\"cs_card_info\\">\\n              <p class=\\"cs_card_subtitle cs_primary_color cs_mb_20\\">\\n                <time datetime=\\"2025-03-18\\">RESIDENTIAL ARCHITECTURE & FACADE DETAILING</time>\\n              </p>\\n              <h3 class=\\"cs_card_title cs_fs_53 cs_semibold cs_mb_20\\">\\n                <a href=\\"/projects/harivishram\\">\\n                HARIVISHRAM — CONTEMPORARY RESIDENTIAL FACADE\\n                </a>\\n              </h3>\\n              <a href=\\"/projects/harivishram\\" class=\\"cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50\\">\\n              <span>EXPLORE CASE STUDY</span>\\n              <span class=\\"cs_btn_icon cs_radius_100 cs_center\\" aria-hidden=\\"true\\">\\n              <i class=\\"fa-solid fa-arrow-right\\" aria-hidden=\\"true\\"></i>\\n              </span>\\n              </a>\\n            </div>\\n          </div>`;

// Find end of cards wrapper
const endOfCardsWrapper = `</a>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\"cs_height_120 cs_height_lg_80\\"></div>\\n    </section>\\n    <!-- End Team Section -->`;

if (!fileContent.includes(endOfCardsWrapper)) {
  console.error("ERROR: endOfCardsWrapper pattern not found in siteContent.js");
  process.exit(1);
}

const replacement = `</a>\\n            </div>\\n          </div>\\n${card6}\\n        </div>\\n      </div>\\n      <div class=\\"cs_height_120 cs_height_lg_80\\"></div>\\n    </section>\\n    <!-- End Team Section -->`;

fileContent = fileContent.replace(endOfCardsWrapper, replacement);
console.log("✓ Card 6 (Harivishram) appended successfully");

fs.writeFileSync(filePath, fileContent, "utf8");
console.log("✓ Saved siteContent.js");
