import siteContent from "../content/siteContent.js";
import HtmlBlock from "../components/HtmlBlock.jsx";

export default function About() {
  return <HtmlBlock html={siteContent.pages.About} />;
}
