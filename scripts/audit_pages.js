import content from '../src/content/siteContent.js';

console.log('--- PAGES OVERVIEW ---');
for (const [pageName, html] of Object.entries(content.pages)) {
  const imgMatches = [...html.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);
  const dataSrcMatches = [...html.matchAll(/data-src=["']([^"']+)["']/g)].map(m => m[1]);
  console.log(`Page: ${pageName.padEnd(18)} | imgs: ${imgMatches.length.toString().padStart(2)} | data-src: ${dataSrcMatches.length}`);
}
