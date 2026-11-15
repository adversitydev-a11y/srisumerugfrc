import fs from 'fs';

const sc = fs.readFileSync('./src/content/siteContent.js', 'utf8');
const regex = /data-src="([^"]*(?:testimonial|testimonail)[^"]*)"/gi;
let match;
while ((match = regex.exec(sc)) !== null) {
  console.log('siteContent match:', match[0]);
}

const css = fs.readFileSync('./src/assets/css/custom.css', 'utf8');
css.split('\n').forEach((line, i) => {
  if (line.toLowerCase().includes('testimonial') || line.toLowerCase().includes('testimonail')) {
    console.log(`custom.css line ${i+1}: ${line}`);
  }
});
