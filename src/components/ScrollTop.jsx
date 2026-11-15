import siteContent from "../content/siteContent.js";
import HtmlBlock from "./HtmlBlock.jsx";

export default function ScrollTop() {
  return <HtmlBlock html={siteContent.blocks.scrollTop} />;
}
