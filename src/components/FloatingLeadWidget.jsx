import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FaqConsultationForm from "./FaqConsultationForm.jsx";

export default function FloatingLeadWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close popup when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.search]);

  // Handle Escape key listener
  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen]);

  const waUrl =
    "https://wa.me/919686237878?text=" +
    encodeURIComponent(
      "Hi Sri Sumeru GFRC & FRP, I have an architectural facade project inquiry."
    );

  return (
    <>
      {/* Click-outside backdrop when corner form is open */}
      {isOpen && (
        <div
          className="cs_corner_lead_backdrop"
          onClick={() => setIsOpen(false)}
          role="presentation"
          aria-hidden="true"
        />
      )}

      {/* Floating Buttons Stack - Aligned Strictly in One Vertical Column */}
      <div className="cs_floating_dock" id="global-floating-dock">
        {/* 1. SEPARATE WHATSAPP FLOATING BUTTON */}
        <div className="cs_floating_dock_item">
          <span className="cs_floating_dock_tooltip" aria-hidden="true">
            WhatsApp Chat
          </span>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cs_floating_wa_btn"
            aria-label="Direct WhatsApp Chat with Bangalore Plant"
            title="Chat on WhatsApp"
          >
            <i className="fa-brands fa-whatsapp"></i>
            <span className="cs_floating_btn_ripple" aria-hidden="true"></span>
          </a>
        </div>

        {/* 2. SEPARATE LEADS FORM FLOATING BUTTON (Strictly underneath WhatsApp) */}
        <div className="cs_floating_dock_item">
          {!isOpen && (
            <button
              type="button"
              className="cs_floating_lead_badge"
              onClick={() => setIsOpen(true)}
              aria-label="Open Instant Quote and Consultation Form"
            >
              <span className="cs_floating_pulse_dot" aria-hidden="true"></span>
              <span className="cs_floating_lead_text">
                <span className="cs_floating_lead_sub">Instant Quote</span>
                <span className="cs_floating_lead_main">Inquire Now</span>
              </span>
            </button>
          )}
          <button
            type="button"
            className={`cs_floating_lead_btn ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close Project Inquiry Form" : "Open Project Inquiry Form"}
            aria-expanded={isOpen}
            title={isOpen ? "Close Inquiry Form" : "Get Quote / Inquiry"}
          >
            {isOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-file-signature"></i>
            )}
            <span className="cs_floating_lead_ripple" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      {/* 3. CORNER POPUP FORM (Anchored in the bottom-right corner where clicked) */}
      {isOpen && (
        <div
          className="cs_corner_lead_card"
          role="dialog"
          aria-modal="true"
          aria-label="Direct Factory Consultation & Lead Form"
        >
          {/* Card Close Button */}
          <button
            type="button"
            className="cs_corner_lead_close_btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close Inquiry Form"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* Corner Body: Exact FAQ Consultation Form */}
          <div className="cs_corner_lead_body">
            <FaqConsultationForm
              idPrefix="corner-lead"
              isModal={true}
              onClose={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
