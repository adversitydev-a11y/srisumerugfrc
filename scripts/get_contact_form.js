import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const siteContentPath = path.resolve(__dirname, '..', 'src', 'content', 'siteContent.js');
const s = fs.readFileSync(siteContentPath, 'utf8');

const cIdx = s.indexOf('"Contact":');
const formIdx = s.indexOf('cs_contact_form', cIdx);

console.log(s.substring(formIdx, formIdx + 1600));
