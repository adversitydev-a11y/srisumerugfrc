import fs from 'fs';
import content from '../src/content/siteContent.js';

fs.mkdirSync('scratch', { recursive: true });
for (const [k, v] of Object.entries(content.pages)) {
  fs.writeFileSync('scratch/' + k + '.html', v);
}
for (const [k, v] of Object.entries(content.blocks)) {
  fs.writeFileSync('scratch/block_' + k + '.html', v);
}
console.log('Successfully dumped all pages and blocks to scratch/');
