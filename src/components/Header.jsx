import { useLocation } from "react-router-dom";
import siteContent from "../content/siteContent.js";
import HtmlBlock from "./HtmlBlock.jsx";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname || "/";
  
  const dualLogos = `
    <img src="/assets/img/brand/sumeru-gfrc-logo-white.png" alt="SRI SUMERU GFRC & FRP Logo" class="cs_brand_logo_white" />
    <img src="/assets/img/brand/sumeru-gfrc-logo.png" alt="SRI SUMERU GFRC & FRP Logo" class="cs_brand_logo_dark" />
  `.trim();

  let html = siteContent.blocks.header
    .replace(
      '<img src="/assets/img/logo.svg" alt="Brand logo">',
      dualLogos
    )
    .replace(/<button[^>]*class="cs_search_btn"[^>]*>[\s\S]*?<\/button>/gi, "");

  // Mark current route as active
  const targetHref = currentPath === "" ? "/" : currentPath;
  html = html.replace(
    new RegExp(`(<li><a href="${targetHref}")`, 'g'),
    `<li class="active"><a href="${targetHref}" class="active"`
  );

  // All pages have dark hero backgrounds (Home and Inner Pages)
  html = html.replace('class="cs_site_header ', 'class="cs_site_header cs_header_on_dark_hero ');

  return <HtmlBlock html={html} />;
}
