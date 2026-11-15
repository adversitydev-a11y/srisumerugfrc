const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../src/content/siteContent.js');
let content = fs.readFileSync(targetPath, 'utf8');

const replacements = [
  // GFRC Cards
  { from: '<a href="/service-details">ARCHITECTURAL SCREENS</a>', to: '<a href="/service-details?product=screens">ARCHITECTURAL SCREENS</a>' },
  { from: 'aria-label="Explore details for ARCHITECTURAL SCREENS"', to: 'aria-label="Explore details for ARCHITECTURAL SCREENS" href="/service-details?product=screens"' },
  { from: '<a href="/service-details">DECORATIVE JALIS</a>', to: '<a href="/service-details?product=jalis">DECORATIVE JALIS</a>' },
  { from: 'aria-label="Explore details for DECORATIVE JALIS"', to: 'aria-label="Explore details for DECORATIVE JALIS" href="/service-details?product=jalis"' },
  { from: '<a href="/service-details">WALL CLADDING PANELS</a>', to: '<a href="/service-details?product=cladding">WALL CLADDING PANELS</a>' },
  { from: 'aria-label="Explore details for WALL CLADDING PANELS"', to: 'aria-label="Explore details for WALL CLADDING PANELS" href="/service-details?product=cladding"' },
  { from: '<a href="/service-details">ARCHITECTURAL COLUMNS</a>', to: '<a href="/service-details?product=columns">ARCHITECTURAL COLUMNS</a>' },
  { from: 'aria-label="Explore details for ARCHITECTURAL COLUMNS"', to: 'aria-label="Explore details for ARCHITECTURAL COLUMNS" href="/service-details?product=columns"' },
  { from: '<a href="/service-details">COLUMN CAPITALS</a>', to: '<a href="/service-details?product=columns">COLUMN CAPITALS</a>' },
  { from: 'aria-label="Explore details for COLUMN CAPITALS"', to: 'aria-label="Explore details for COLUMN CAPITALS" href="/service-details?product=columns"' },
  { from: '<a href="/service-details">EXTERIOR CORNICES</a>', to: '<a href="/service-details?product=cornices">EXTERIOR CORNICES</a>' },
  { from: 'aria-label="Explore details for EXTERIOR CORNICES"', to: 'aria-label="Explore details for EXTERIOR CORNICES" href="/service-details?product=cornices"' },
  { from: '<a href="/service-details">DECORATIVE CORBELS</a>', to: '<a href="/service-details?product=cornices">DECORATIVE CORBELS</a>' },
  { from: 'aria-label="Explore details for DECORATIVE CORBELS"', to: 'aria-label="Explore details for DECORATIVE CORBELS" href="/service-details?product=cornices"' },
  { from: '<a href="/service-details">ARCHES &amp; SURROUNDS</a>', to: '<a href="/service-details?product=brackets">ARCHES &amp; SURROUNDS</a>' },
  { from: 'aria-label="Explore details for ARCHES &amp; SURROUNDS"', to: 'aria-label="Explore details for ARCHES &amp; SURROUNDS" href="/service-details?product=brackets"' },
  { from: '<a href="/service-details">DOMES &amp; CEILING VAULTS</a>', to: '<a href="/service-details?product=domes">DOMES &amp; CEILING VAULTS</a>' },
  { from: 'aria-label="Explore details for DOMES &amp; CEILING VAULTS"', to: 'aria-label="Explore details for DOMES &amp; CEILING VAULTS" href="/service-details?product=domes"' },
  { from: '<a href="/service-details">BALUSTRADES &amp; PARAPETS</a>', to: '<a href="/service-details?product=domes">BALUSTRADES &amp; PARAPETS</a>' },
  { from: 'aria-label="Explore details for BALUSTRADES &amp; PARAPETS"', to: 'aria-label="Explore details for BALUSTRADES &amp; PARAPETS" href="/service-details?product=domes"' },
  { from: '<a href="/service-details">ARCHITECTURAL PLANTERS</a>', to: '<a href="/service-details?product=domes">ARCHITECTURAL PLANTERS</a>' },
  { from: 'aria-label="Explore details for ARCHITECTURAL PLANTERS"', to: 'aria-label="Explore details for ARCHITECTURAL PLANTERS" href="/service-details?product=domes"' },
  { from: '<a href="/service-details">CUSTOM FACADE GEOMETRY</a>', to: '<a href="/service-details?product=cladding">CUSTOM FACADE GEOMETRY</a>' },
  { from: 'aria-label="Explore details for CUSTOM FACADE GEOMETRY"', to: 'aria-label="Explore details for CUSTOM FACADE GEOMETRY" href="/service-details?product=cladding"' },

  // FRP Cards
  { from: '<a href="/service-details">FRP ARCHITECTURAL SCREENS</a>', to: '<a href="/service-details?product=screens">FRP ARCHITECTURAL SCREENS</a>' },
  { from: 'aria-label="Explore details for FRP ARCHITECTURAL SCREENS"', to: 'aria-label="Explore details for FRP ARCHITECTURAL SCREENS" href="/service-details?product=screens"' },
  { from: '<a href="/service-details">FRP DECORATIVE JALIS</a>', to: '<a href="/service-details?product=jalis">FRP DECORATIVE JALIS</a>' },
  { from: 'aria-label="Explore details for FRP DECORATIVE JALIS"', to: 'aria-label="Explore details for FRP DECORATIVE JALIS" href="/service-details?product=jalis"' },
  { from: '<a href="/service-details">FRP WALL CLADDING PANELS</a>', to: '<a href="/service-details?product=cladding">FRP WALL CLADDING PANELS</a>' },
  { from: 'aria-label="Explore details for FRP WALL CLADDING PANELS"', to: 'aria-label="Explore details for FRP WALL CLADDING PANELS" href="/service-details?product=cladding"' },
  { from: '<a href="/service-details">FRP ARCHITECTURAL COLUMNS</a>', to: '<a href="/service-details?product=columns">FRP ARCHITECTURAL COLUMNS</a>' },
  { from: 'aria-label="Explore details for FRP ARCHITECTURAL COLUMNS"', to: 'aria-label="Explore details for FRP ARCHITECTURAL COLUMNS" href="/service-details?product=columns"' },
  { from: '<a href="/service-details">FRP COLUMN CAPITALS</a>', to: '<a href="/service-details?product=columns">FRP COLUMN CAPITALS</a>' },
  { from: 'aria-label="Explore details for FRP COLUMN CAPITALS"', to: 'aria-label="Explore details for FRP COLUMN CAPITALS" href="/service-details?product=columns"' },
  { from: '<a href="/service-details">FRP EXTERIOR CORNICES</a>', to: '<a href="/service-details?product=cornices">FRP EXTERIOR CORNICES</a>' },
  { from: 'aria-label="Explore details for FRP EXTERIOR CORNICES"', to: 'aria-label="Explore details for FRP EXTERIOR CORNICES" href="/service-details?product=cornices"' },
  { from: '<a href="/service-details">FRP DECORATIVE CORBELS</a>', to: '<a href="/service-details?product=cornices">FRP DECORATIVE CORBELS</a>' },
  { from: 'aria-label="Explore details for FRP DECORATIVE CORBELS"', to: 'aria-label="Explore details for FRP DECORATIVE CORBELS" href="/service-details?product=cornices"' },
  { from: '<a href="/service-details">FRP ARCHES &amp; SURROUNDS</a>', to: '<a href="/service-details?product=brackets">FRP ARCHES &amp; SURROUNDS</a>' },
  { from: 'aria-label="Explore details for FRP ARCHES &amp; SURROUNDS"', to: 'aria-label="Explore details for FRP ARCHES &amp; SURROUNDS" href="/service-details?product=brackets"' },
  { from: '<a href="/service-details">FRP DOMES &amp; CUPOLAS</a>', to: '<a href="/service-details?product=domes">FRP DOMES &amp; CUPOLAS</a>' },
  { from: 'aria-label="Explore details for FRP DOMES &amp; CUPOLAS"', to: 'aria-label="Explore details for FRP DOMES &amp; CUPOLAS" href="/service-details?product=domes"' },
  { from: '<a href="/service-details">FRP BALUSTRADES &amp; RAILINGS</a>', to: '<a href="/service-details?product=domes">FRP BALUSTRADES &amp; RAILINGS</a>' },
  { from: 'aria-label="Explore details for FRP BALUSTRADES &amp; RAILINGS"', to: 'aria-label="Explore details for FRP BALUSTRADES &amp; RAILINGS" href="/service-details?product=domes"' },
  { from: '<a href="/service-details">FRP ARCHITECTURAL PLANTERS</a>', to: '<a href="/service-details?product=domes">FRP ARCHITECTURAL PLANTERS</a>' },
  { from: 'aria-label="Explore details for FRP ARCHITECTURAL PLANTERS"', to: 'aria-label="Explore details for FRP ARCHITECTURAL PLANTERS" href="/service-details?product=domes"' },
  { from: '<a href="/service-details">FRP CUSTOM FACADE PANELS</a>', to: '<a href="/service-details?product=cladding">FRP CUSTOM FACADE PANELS</a>' },
  { from: 'aria-label="Explore details for FRP CUSTOM FACADE PANELS"', to: 'aria-label="Explore details for FRP CUSTOM FACADE PANELS" href="/service-details?product=cladding"' },
];

let changedCount = 0;
for (const r of replacements) {
  if (content.includes(r.from)) {
    content = content.split(r.from).join(r.to);
    changedCount++;
  }
}

fs.writeFileSync(targetPath, content, 'utf8');
console.log(`Updated ${changedCount} product links in siteContent.js`);
