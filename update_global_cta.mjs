import fs from 'fs';

let content = fs.readFileSync('src/content/siteContent.js', 'utf8');

const targetOldSubtitle = 'START YOUR SRI SUMERU GFRC PROJECT';
const targetOldTitle = 'READY TO CREATE CUSTOM GFRC ELEMENTS WITH SRI SUMERU REALTY?';
const targetOldDesc = 'Share your requirement with Sri Sumeru Realty Pvt. Ltd. for GFRC screens, cladding, columns, cornices, brackets, domes or custom architectural details. Our GFRC team will review your scope and guide you with the next steps.';
const targetOldBtn1 = 'ENQUIRE NOW';
const targetOldBtn2 = 'VIEW PRODUCTS';

const newSubtitle = 'LET’S BUILD SOMETHING EXCEPTIONAL';
const newTitle = 'Bring Your Architectural Vision to Life.';
const newDesc = 'Custom GFRC screens, cladding, columns and architectural details — crafted to suit your project.';
const newBtn1 = 'DISCUSS YOUR PROJECT';
const newBtn2 = 'EXPLORE OUR PRODUCTS';

if (!content.includes(targetOldSubtitle)) {
  console.error('targetOldSubtitle not found in siteContent.js');
  process.exit(1);
}

content = content.replace(targetOldSubtitle, newSubtitle);
content = content.replace(targetOldTitle, newTitle);
content = content.replace(targetOldDesc, newDesc);
content = content.replace(targetOldBtn1, newBtn1);
content = content.replace(targetOldBtn2, newBtn2);

fs.writeFileSync('src/content/siteContent.js', content, 'utf8');
console.log('Successfully updated global footer CTA in siteContent.js');
