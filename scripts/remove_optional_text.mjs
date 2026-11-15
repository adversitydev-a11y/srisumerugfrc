import fs from 'fs';

const filePath = 'src/content/siteContent.js';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace('placeholder=\\"Email Address (Optional)\\"', 'placeholder=\\"Email Address\\"');
content = content.replace('placeholder=\\"Product Interest (Screens, Cladding, Cornices, Domes) (Optional)\\"', 'placeholder=\\"Product Interest (Screens, Cladding, Cornices, Domes)\\"');
content = content.replace('placeholder=\\"Project details, estimated area/quantity, or drawing specifications (Optional)...\\"', 'placeholder=\\"Project details, estimated area/quantity, or drawing specifications...\\"');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Removed (Optional) from siteContent.js successfully');
