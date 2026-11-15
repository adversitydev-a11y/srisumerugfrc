import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scriptSources = [
  "/assets/js/jquery.min.js",
  "/assets/js/gsap.min.js",
  "/assets/js/lenis.min.js",
  "/assets/js/swiper.min.js",
  "/assets/js/odometer.min.js",
  "/assets/js/SplitText.min.js",
  "/assets/js/ScrollTrigger.min.js",
  "/assets/js/main.js",
];

let scriptsPromise;

function loadTemplateScripts() {
  if (scriptsPromise) return scriptsPromise;

  scriptsPromise = scriptSources.reduce((promise, src) => {
    return promise.then(
      () =>
        new Promise((resolve, reject) => {
          const existing = document.querySelector(`script[src="${src}"]`);
          if (existing) {
            resolve();
            return;
          }

          const script = document.createElement("script");
          script.src = src;
          script.defer = false;
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        }),
    );
  }, Promise.resolve());

  return scriptsPromise;
}

export default function TemplateScripts() {
  const location = useLocation();

  useEffect(() => {
    loadTemplateScripts().then(() => {
      if (window.gsapAnimationCleanup) {
        window.gsapAnimationCleanup();
      }
      const mainScript = document.querySelector('script[src="/assets/js/main.js"]');
      if (mainScript) {
        mainScript.remove();
      }
      scriptsPromise = null;
      loadTemplateScripts();
    });
  }, [location.pathname]);

  useEffect(() => {
    const handleProductRangeTabs = (event) => {
      const link = event.target.closest(".cs_gfrc_product_range .cs_tab_links a");
      if (!link) return;

      const section = link.closest(".cs_gfrc_product_range");
      const targetSelector = link.getAttribute("href");
      const targetTab = targetSelector ? section?.querySelector(targetSelector) : null;
      if (!section || !targetTab) return;

      event.preventDefault();

      section.querySelectorAll(".cs_tab_links li").forEach((item) => {
        item.classList.remove("active");
      });
      link.closest("li")?.classList.add("active");

      section.querySelectorAll(".cs_tab").forEach((tab) => {
        tab.classList.remove("active");
      });
      targetTab.classList.add("active");
    };

    const handleAccordions = (event) => {
      const head = event.target.closest(".cs_accordian_head");
      if (!head) return;

      // If the parent is a React-managed TechKnowledgeFaq item, React's own state handler already manages it
      if (head.getAttribute("role") === "button") return;

      const currentItem = head.closest(".cs_accordian");
      if (!currentItem) return;

      const wrapper = currentItem.closest(".cs_accordians_wrapper_2, .cs_accordians_wrapper, .cs_accordians");
      const currentBody = currentItem.querySelector(".cs_accordian_body");
      const willBeActive = !currentItem.classList.contains("active");

      if (wrapper) {
        wrapper.querySelectorAll(".cs_accordian").forEach((item) => {
          if (item !== currentItem) {
            item.classList.remove("active");
            const b = item.querySelector(".cs_accordian_body");
            if (b) b.style.display = "none";
          }
        });
      }

      if (willBeActive) {
        currentItem.classList.add("active");
        if (currentBody) currentBody.style.display = "block";
      } else {
        currentItem.classList.remove("active");
        if (currentBody) currentBody.style.display = "none";
      }
    };

    document.addEventListener("click", handleProductRangeTabs);
    document.addEventListener("click", handleAccordions);
    return () => {
      document.removeEventListener("click", handleProductRangeTabs);
      document.removeEventListener("click", handleAccordions);
    };
  }, []);

  return null;
}
