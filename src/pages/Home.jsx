import siteContent from "../content/siteContent.js";
import HtmlBlock from "../components/HtmlBlock.jsx";

export default function Home() {
  return <HtmlBlock html={siteContent.pages.Home} />;
}
