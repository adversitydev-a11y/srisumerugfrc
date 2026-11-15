import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import FaqConsultationForm from "./FaqConsultationForm.jsx";

export default function HtmlBlock({ html }) {
  const containerRef = useRef(null);
  const location = useLocation();
  const [formSlots, setFormSlots] = useState([]);

  useEffect(() => {
    if (containerRef.current) {
      const slots = Array.from(containerRef.current.querySelectorAll(".cs_faq_form_slot"));
      setFormSlots(slots);
    }
  }, [html, location.pathname, location.search]);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href="#faq-consultation-form"]');
      if (target) {
        e.preventDefault();
        const formEl = document.getElementById("faq-consultation-form");
        if (formEl) {
          formEl.scrollIntoView({ behavior: "smooth", block: "center" });
          const firstInput = formEl.querySelector("#faq-form-name");
          if (firstInput) {
            setTimeout(() => firstInput.focus(), 500);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div ref={containerRef} style={{ display: "contents" }}>
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />
      {formSlots.map((slot, index) => createPortal(<FaqConsultationForm key={index} />, slot))}
    </div>
  );
}
