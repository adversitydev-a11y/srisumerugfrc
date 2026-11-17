import { useEffect } from "react";
import siteContent from "../content/siteContent.js";
import HtmlBlock from "../components/HtmlBlock.jsx";

export default function Projects() {
  useEffect(() => {
    document.title = "Sri Sumeru GFRC Projects Portfolio & Case Studies | SRI SUMERU";
    window.scrollTo(0, 0);
  }, []);

  return <HtmlBlock html={siteContent.pages.Portfolio} />;
}
