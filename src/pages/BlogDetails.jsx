import React, { useEffect } from "react";
import siteContent from "../content/siteContent.js";
import HtmlBlock from "../components/HtmlBlock.jsx";

export default function BlogDetails() {
  return <HtmlBlock html={siteContent.pages.BlogDetails} />;
}
