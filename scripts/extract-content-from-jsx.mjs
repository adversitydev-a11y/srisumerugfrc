import fs from "node:fs";
import path from "node:path";

const root = path.resolve(".");
const srcDir = path.join(root, "src");
const pagesDir = path.join(srcDir, "pages");
const componentsDir = path.join(srcDir, "components");
const contentDir = path.join(srcDir, "content");

const pages = [
  "Home",
  "HomeV2",
  "HomeV3",
  "HomeV4",
  "HomeV5",
  "HomeV6",
  "About",
  "Services",
  "ServiceDetails",
  "Portfolio",
  "PortfolioDetails",
  "Blog",
  "BlogDetails",
  "Contact",
  "Faq",
  "Team",
  "TeamDetails",
  "Pricing",
];

const componentBlocks = [
  ["preloader", "Preloader"],
  ["header", "Header"],
  ["search", "SearchModal"],
  ["footer", "Footer"],
  ["scrollTop", "ScrollTop"],
];

function readSource(folder, name) {
  return fs.readFileSync(path.join(folder, `${name}.jsx`), "utf8");
}

function extractFragment(source) {
  const start = source.indexOf("<>");
  const end = source.lastIndexOf("</>");
  if (start < 0 || end < 0 || end <= start) {
    throw new Error("Could not find React fragment markup.");
  }
  return source.slice(start + 2, end).trim();
}

function jsxToHtml(jsx) {
  return jsx
    .replace(/\{\/\*([\s\S]*?)\*\/\}/g, "<!--$1-->")
    .replace(/className=/g, "class=")
    .replace(/htmlFor=/g, "for=")
    .replace(/autoComplete=/g, "autocomplete=")
    .replace(/tabIndex=/g, "tabindex=")
    .replace(/maxLength=/g, "maxlength=")
    .replace(/minLength=/g, "minlength=")
    .replace(/defaultChecked/g, "checked")
    .replace(/defaultSelected/g, "selected")
    .replace(/readOnly/g, "readonly")
    .replace(/fillRule=/g, "fill-rule=")
    .replace(/clipRule=/g, "clip-rule=")
    .replace(/strokeLinecap=/g, "stroke-linecap=")
    .replace(/strokeLinejoin=/g, "stroke-linejoin=")
    .replace(/strokeWidth=/g, "stroke-width=")
    .replace(/httpEquiv=/g, "http-equiv=")
    .replace(/src=\{logoSrc\}/g, 'src="__HEADER_LOGO__"')
    .replace(/src=\{footerLogoSrc\}/g, 'src="__FOOTER_LOGO__"');
}

function contentString(value) {
  return JSON.stringify(value);
}

fs.mkdirSync(contentDir, { recursive: true });

const blocks = {};
for (const [key, component] of componentBlocks) {
  blocks[key] = jsxToHtml(extractFragment(readSource(componentsDir, component)));
}

const pageContent = {};
for (const page of pages) {
  pageContent[page] = jsxToHtml(extractFragment(readSource(pagesDir, page)));
}

const contentLines = [
  "const siteContent = {",
  "  blocks: {",
  ...Object.entries(blocks).map(([key, value]) => `    ${key}: ${contentString(value)},`),
  "  },",
  "  pages: {",
  ...Object.entries(pageContent).map(([key, value]) => `    ${key}: ${contentString(value)},`),
  "  },",
  "};",
  "",
  "export default siteContent;",
  "",
];

fs.writeFileSync(path.join(contentDir, "siteContent.js"), contentLines.join("\n"));

for (const page of pages) {
  fs.writeFileSync(
    path.join(pagesDir, `${page}.jsx`),
    `import siteContent from "../content/siteContent.js";
import HtmlBlock from "../components/HtmlBlock.jsx";

export default function ${page}() {
  return <HtmlBlock html={siteContent.pages.${page}} />;
}
`,
  );
}

fs.writeFileSync(
  path.join(componentsDir, "Preloader.jsx"),
  `import { useEffect } from "react";
import siteContent from "../content/siteContent.js";
import HtmlBlock from "./HtmlBlock.jsx";

export default function Preloader() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.style.display = "none";
      }
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  return <HtmlBlock html={siteContent.blocks.preloader} />;
}
`,
);

fs.writeFileSync(
  path.join(componentsDir, "Header.jsx"),
  `import { useLocation } from "react-router-dom";
import siteContent from "../content/siteContent.js";
import HtmlBlock from "./HtmlBlock.jsx";

const lightHeaderRoutes = new Set(["/", "/home-v2", "/home-v3", "/home-v4", "/home-v6"]);

export default function Header() {
  const { pathname } = useLocation();
  const logoSrc = lightHeaderRoutes.has(pathname) ? "/assets/img/logo.svg" : "/assets/img/logo2.svg";
  const html = siteContent.blocks.header.replace("__HEADER_LOGO__", logoSrc);

  return <HtmlBlock html={html} />;
}
`,
);

fs.writeFileSync(
  path.join(componentsDir, "SearchModal.jsx"),
  `import siteContent from "../content/siteContent.js";
import HtmlBlock from "./HtmlBlock.jsx";

export default function SearchModal() {
  return <HtmlBlock html={siteContent.blocks.search} />;
}
`,
);

fs.writeFileSync(
  path.join(componentsDir, "Footer.jsx"),
  `import { useLocation } from "react-router-dom";
import siteContent from "../content/siteContent.js";
import HtmlBlock from "./HtmlBlock.jsx";

const darkFooterRoutes = new Set(["/", "/home-v2", "/home-v4"]);

export default function Footer() {
  const { pathname } = useLocation();
  const footerLogoSrc = darkFooterRoutes.has(pathname)
    ? "/assets/img/footer-logo.webp"
    : "/assets/img/footer-logo2.webp";
  const html = siteContent.blocks.footer.replace("__FOOTER_LOGO__", footerLogoSrc);

  return <HtmlBlock html={html} />;
}
`,
);

fs.writeFileSync(
  path.join(componentsDir, "ScrollTop.jsx"),
  `import siteContent from "../content/siteContent.js";
import HtmlBlock from "./HtmlBlock.jsx";

export default function ScrollTop() {
  return <HtmlBlock html={siteContent.blocks.scrollTop} />;
}
`,
);

console.log("Extracted website markup into src/content/siteContent.js.");
