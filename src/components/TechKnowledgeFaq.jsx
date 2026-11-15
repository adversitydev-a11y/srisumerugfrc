import React, { useState } from "react";
import FaqConsultationForm from "./FaqConsultationForm.jsx";

export default function TechKnowledgeFaq({ pageTitle, questions }) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="cs_gfrc_tech_knowledge">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading_style_1">
          <p className="cs_section_subtitle cs_bold cs_accent_color text-uppercase cs_mb_20">
            GFRC TECHNICAL KNOWLEDGE
          </p>
          <h2 className="cs_section_title cs_fs_53 cs_semibold text-uppercase mb-0">
            {pageTitle}
          </h2>
        </div>
        <div className="cs_height_60 cs_height_lg_50"></div>
        <div className="row cs_gap_y_30">
          <div className="col-lg-6 order-lg-2">
            <FaqConsultationForm />
          </div>
          <div className="col-lg-6">
            <div className="cs_accordians_wrapper_2">
              {questions.map((item, idx) => {
                const isOpen = activeIdx === idx;
                return (
                  <div
                    className={`cs_accordian cs_style_2${isOpen ? " active" : ""}`}
                    key={idx}
                  >
                    <div
                      className="cs_accordian_head position-relative"
                      onClick={() => setActiveIdx(isOpen ? -1 : idx)}
                      style={{ cursor: "pointer" }}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isOpen}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveIdx(isOpen ? -1 : idx);
                        }
                      }}
                    >
                      <h3 className="cs_accordian_title cs_fs_24 cs_bold text-uppercase mb-0">
                        {item.q}
                      </h3>
                      <span className="cs_accordian_toggler"></span>
                    </div>
                    <div
                      className="cs_accordian_body"
                      style={{ display: isOpen ? "block" : "none" }}
                    >
                      {item.a}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
}
