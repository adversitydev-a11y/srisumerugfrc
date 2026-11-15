import fs from "node:fs";
import path from "node:path";

const root = path.resolve("..", "Axisbuilt - Template");
const outRoot = path.resolve(".");
const srcDir = path.join(outRoot, "src");
const pagesDir = path.join(srcDir, "pages");
const componentsDir = path.join(srcDir, "components");
const contentDir = path.join(srcDir, "content");

const pages = [
  ["index.html", "Home"],
  ["home-v2.html", "HomeV2"],
  ["home-v3.html", "HomeV3"],
  ["home-v4.html", "HomeV4"],
  ["home-v5.html", "HomeV5"],
  ["home-v6.html", "HomeV6"],
  ["about-us.html", "About"],
  ["services.html", "Services"],
  ["service-details.html", "ServiceDetails"],
  ["portfolio.html", "Portfolio"],
  ["portfolio-details.html", "PortfolioDetails"],
  ["blog.html", "Blog"],
  ["blog-details.html", "BlogDetails"],
  ["contact-us.html", "Contact"],
  ["faq.html", "Faq"],
  ["team.html", "Team"],
  ["team-details.html", "TeamDetails"],
  ["pricing.html", "Pricing"],
];

const routeMap = new Map([
  ["index.html", "/"],
  ["home-v2.html", "/home-v2"],
  ["home-v3.html", "/home-v3"],
  ["home-v4.html", "/home-v4"],
  ["home-v5.html", "/home-v5"],
  ["home-v6.html", "/home-v6"],
  ["about-us.html", "/about-us"],
  ["services.html", "/services"],
  ["service-details.html", "/service-details"],
  ["portfolio.html", "/portfolio"],
  ["portfolio-details.html", "/portfolio-details"],
  ["blog.html", "/blog"],
  ["blog-details.html", "/blog-details"],
  ["contact-us.html", "/contact-us"],
  ["faq.html", "/faq"],
  ["team.html", "/team"],
  ["team-details.html", "/team-details"],
  ["pricing.html", "/pricing"],
]);

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function between(source, start, end) {
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end, startIndex);
  if (startIndex < 0 || endIndex < 0) {
    throw new Error(`Could not find block ${start} -> ${end}`);
  }
  return source.slice(startIndex, endIndex + end.length);
}

function mainContent(source) {
  const match = source.match(/<main>[\s\S]*?<\/main>/);
  if (!match) throw new Error("Could not find <main> block");
  return match[0];
}

function updateRoutes(html) {
  let output = html;
  for (const [file, route] of routeMap) {
    output = output.replaceAll(`href="${file}"`, `href="${route}"`);
  }
  output = output.replaceAll('href="/"', 'href="/"');
  output = output.replace(/(src|href|data-src)="assets\//g, '$1="/assets/');
  return output;
}

function serializeHtml(html) {
  return JSON.stringify(updateRoutes(html));
}

function pageFile(name) {
  return `export default function ${name}() {
  return <HtmlBlock html={siteContent.pages.${name}} />;
}
`;
}

fs.mkdirSync(pagesDir, { recursive: true });
fs.mkdirSync(componentsDir, { recursive: true });
fs.mkdirSync(contentDir, { recursive: true });

const index = read("index.html");
const header = between(index, "<!-- Start Header Section -->", "<!-- End Header Section -->");
const search = between(index, "<!-- Start Header Search -->", "<!-- End Header Search -->");
const scrollTop = between(index, "<!-- Start Scroll Top Button -->", "<!-- End Scroll Top Button -->");

const blocks = {
  preloader: between(index, "<!-- Start Preloader -->", "<!-- End Preloader -->"),
  header,
  search,
  footer: between(index, "<!-- Start Footer Section -->", "<!-- End Footer Section -->"),
  scrollTop,
};

const pageEntries = [];

for (const [file, name] of pages) {
  const source = read(file);
  pageEntries.push([name, mainContent(source)]);
  fs.writeFileSync(
    path.join(pagesDir, `${name}.jsx`),
    `import siteContent from "../content/siteContent.js";
import HtmlBlock from "../components/HtmlBlock.jsx";

${pageFile(name)}`,
  );
}

const contentLines = [
  "const siteContent = {",
  "  blocks: {",
  ...Object.entries(blocks).map(([key, html]) => `    ${key}: ${serializeHtml(html)},`),
  "  },",
  "  pages: {",
  ...pageEntries.map(([name, html]) => `    ${name}: ${serializeHtml(html)},`),
  "  },",
  "};",
  "",
  "export default siteContent;",
  "",
];

fs.writeFileSync(path.join(contentDir, "siteContent.js"), contentLines.join("\n"));

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
  const html = siteContent.blocks.header.replace('/assets/img/logo.svg', logoSrc);

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
  const html = siteContent.blocks.footer.replace('/assets/img/footer-logo.webp', footerLogoSrc);

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

console.log(`Generated content module, ${pages.length} pages, and shared content-backed components.`);
