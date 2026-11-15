import { useEffect } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import HtmlBlock from "../components/HtmlBlock.jsx";
import { getProjectData, getProjectHtml } from "../data/projectsData.js";

export default function ProjectDetails() {
  const [searchParams] = useSearchParams();
  const { slug } = useParams();
  const projectSlug = slug || searchParams.get("project") || "bougainville";
  const project = getProjectData(projectSlug);
  const html = getProjectHtml(project);

  useEffect(() => {
    if (project?.seo?.title) {
      document.title = project.seo.title;
    }
    if (project?.seo?.description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", project.seo.description);
    }
    window.scrollTo(0, 0);
  }, [project]);

  return <HtmlBlock html={html} />;
}
