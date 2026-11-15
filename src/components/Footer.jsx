import { useLocation } from "react-router-dom";
import siteContent from "../content/siteContent.js";
import HtmlBlock from "./HtmlBlock.jsx";

const darkFooterRoutes = new Set(["/"]);

export default function Footer() {
  const { pathname } = useLocation();

  const footerLogoSrc = darkFooterRoutes.has(pathname)
    ? "/assets/img/footer-logo.webp"
    : "/assets/img/footer-logo2.webp";

  let html = siteContent.blocks.footer.replace('/assets/img/footer-logo.webp', footerLogoSrc);

  const isContactPage = pathname === "/contact-us" || pathname === "/contact";

  if (isContactPage) {
    html = html.replace(
      'cs_footer_style_1 cs_gray_bg',
      'cs_footer_style_1 cs_gray_bg cs_contact_page_footer'
    );
    html = html.replace(
      /<p class="cs_section_subtitle[\s\S]*?<\/div>\s*(?=<\/div>)/,
      ''
    );
  }

  return <HtmlBlock html={html} />;
}
