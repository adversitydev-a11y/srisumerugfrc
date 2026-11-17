// brand_replace.mjs – selectively replace copy with the full brand name only on high‑impact headings
// Run with: node src/scripts/brand_replace.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ------------------------------------------------------------------
// 1️⃣  Define the exact places that should show the full brand name
//    For JSON‑style files we use an object‑path; for JSX we use a regex.
const targets = [
  // siteContent – hero eyebrow and title, plus footer alt/aria
  { file: 'content/siteContent.js',   type: 'json', path: ['blocks', 'hero', 'eyebrow'] },
  { file: 'content/siteContent.js',   type: 'json', path: ['blocks', 'hero', 'title'] },
  { file: 'content/siteContent.js',   type: 'json', path: ['footer', 'brandAlt'] },


];

// ------------------------------------------------------------------
// Helper: set a nested property given an array path
function setByPath(obj, pathArray, newValue) {
  const leaf = pathArray.pop();
  const parent = pathArray.reduce((o, k) => o && o[k], obj);
  if (parent && leaf) parent[leaf] = newValue;
}

// ------------------------------------------------------------------
// 2️⃣  Apply the replacements
(async () => {
  for (const t of targets) {
    const absPath = path.join(__dirname, '..', t.file);
    if (t.type === 'jsx') {
      // Simple regex replace – only the first heading match is altered
      let txt = fs.readFileSync(absPath, 'utf8');
      const newTxt = txt.replace(t.regex, t.replace);
      if (newTxt !== txt) {
        fs.writeFileSync(absPath, newTxt, 'utf8');
        console.log(`✅ Updated JSX ${t.file}`);
      }
    } else if (t.type === 'json') {
      // Import the module via file URL, modify the export object, write back as JS
      const moduleUrl = pathToFileURL(absPath).href;
      const mod = await import(moduleUrl);
      const exportedName = Object.keys(mod)[0]; // e.g., siteContent
      const dataObj = mod[exportedName];
      // Retrieve current string value
      const leafKey = t.path[t.path.length - 1];
      const parentPath = t.path.slice(0, -1);
      const parent = parentPath.reduce((o, k) => o && o[k], dataObj);
      if (parent && typeof parent[leafKey] === 'string') {
        const original = parent[leafKey];
        const updated = original
          .replace(/(?:Sri\s+Sumeru\s+)?GFRC\s*(?:&|and)\s*(?:Sri\s+Sumeru\s+)?FRP(?:\s+PRODUCTS)?/gi, (match) => {
            if (/products$/i.test(match)) {
              if (match === match.toUpperCase()) return 'SRI SUMERU GFRC & FRP PRODUCTS';
              if (/Products$/.test(match)) return 'Sri Sumeru GFRC & FRP Products';
              return 'Sri Sumeru GFRC & FRP products';
            }
            if (match === match.toUpperCase()) return 'SRI SUMERU GFRC & FRP';
            return 'Sri Sumeru GFRC & FRP';
          });
        if (updated !== original) {
          parent[leafKey] = updated;
          // Serialize back to a JS file preserving the original export name
          const serialized = `export const ${exportedName} = ${JSON.stringify(dataObj, null, 2)};`;
          fs.writeFileSync(absPath, serialized, 'utf8');
          console.log(`✅ Updated ${t.file}`);
        }
      }
    }
  }
  console.log('✅ Brand replacement (high‑impact only) finished.');
})();
