import fs from 'fs';
import path from 'path';
import siteContent from '../src/content/siteContent.js';

const homeHtml = siteContent.pages.Home;

// Find all data-src, data-background, style="background...url(...)"
const dataSrcs = [...homeHtml.matchAll(/data-src=["']([^"']+)["']/g)].map(m => m[1]);
const dataBgs = [...homeHtml.matchAll(/data-background=["']([^"']+)["']/g)].map(m => m[1]);
const inlineStyles = [...homeHtml.matchAll(/url\(["']?([^"')]+)["']?\)/g)].map(m => m[1]);

console.log("data-src:", [...new Set(dataSrcs)]);
console.log("data-background:", [...new Set(dataBgs)]);
console.log("inline url():", [...new Set(inlineStyles)]);
