import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PRODUCT_INTEREST_OPTIONS = [
  { value: "GFRC Architectural Products", label: "GFRC Architectural Products (General)" },
  { value: "GFRC Facade Cladding Panels", label: "GFRC Facade Cladding Panels" },
  { value: "GFRC Jhali / Decorative Screens", label: "GFRC Jhali / Decorative Screens" },
  { value: "GFRC Columns & Pillars", label: "GFRC Columns & Pillars" },
  { value: "GFRC Architectural Mouldings & Cornices", label: "GFRC Architectural Mouldings & Cornices" },
  { value: "GFRC Window Arches & Balusters", label: "GFRC Window Arches & Balusters" },
  { value: "FRP Architectural Products", label: "FRP Architectural Products (General)" },
  { value: "FRP Cornices & Mouldings", label: "FRP Cornices & Mouldings" },
  { value: "FRP Domes & Architectural Cupolas", label: "FRP Domes & Architectural Cupolas" },
  { value: "FRP Planter Boxes & Pots", label: "FRP Planter Boxes & Pots" },
  { value: "Custom Architectural Facade Solutions", label: "Custom Architectural Facade Solutions" },
  { value: "Temple GFRC & Heritage Restoration", label: "Temple GFRC & Heritage Restoration" },
];

function detectCategoryFromLocation(pathname, search) {
  const normalizedPath = (pathname || "").toLowerCase();
  const searchParams = new URLSearchParams(search || "");
  const productParam = (searchParams.get("product") || "").toLowerCase();

  // 1. Detailed product view via query param ?product=...
  if (productParam) {
    if (productParam.includes("jhali")) return "GFRC Jhali / Decorative Screens";
    if (productParam.includes("column-works") || productParam.includes("pillar")) return "GFRC Columns & Pillars";
    if (productParam.includes("facade-works") || productParam.includes("cladding")) return "GFRC Facade Cladding Panels";
    if (productParam.includes("moulding") || (productParam.includes("cornice") && productParam.startsWith("gfrc"))) {
      return "GFRC Architectural Mouldings & Cornices";
    }
    if (productParam.includes("baluster") || productParam.includes("window-arch")) return "GFRC Window Arches & Balusters";
    if (productParam.includes("bracket")) return "GFRC Architectural Mouldings & Cornices";
    if (productParam.includes("planter") && productParam.startsWith("gfrc")) return "GFRC Architectural Products";

    if (productParam.includes("cornice") && productParam.startsWith("frp")) return "FRP Cornices & Mouldings";
    if (productParam.includes("dome")) return "FRP Domes & Architectural Cupolas";
    if (productParam.includes("planter") && productParam.startsWith("frp")) return "FRP Planter Boxes & Pots";
    if (productParam.startsWith("frp-")) return "FRP Architectural Products";
    if (productParam.startsWith("gfrc-")) return "GFRC Architectural Products";
  }

  // 2. Main route-level detection
  if (normalizedPath.includes("gfrc-products")) return "GFRC Architectural Products";
  if (normalizedPath.includes("frp-products") || normalizedPath.includes("products") || normalizedPath.includes("services")) {
    return "FRP Architectural Products";
  }
  if (normalizedPath.includes("projects") || normalizedPath.includes("portfolio")) {
    return "Custom Architectural Facade Solutions";
  }

  // 3. General default for Home, About, Faq, Blog, Contact
  return "GFRC Architectural Products";
}

export default function FaqConsultationForm({ preselectedInterest, idPrefix = "faq", isModal = false, onClose }) {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: preselectedInterest || detectCategoryFromLocation(location?.pathname, location?.search),
    message: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  // Automatically update interest dropdown when navigating between different product/service pages
  useEffect(() => {
    const autoInterest = preselectedInterest || detectCategoryFromLocation(location?.pathname, location?.search);
    setFormData((prev) => ({
      ...prev,
      interest: autoInterest,
    }));
  }, [location.pathname, location.search, preselectedInterest]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Name and Contact Number are required.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const payload = {
        access_key: "cd98b256-0db3-478c-ab28-1ec94f80447c",
        subject: `${isModal ? "Global Floating Inquiry" : "FAQ Inquiry"}: [${formData.interest}] - ${formData.name}`,
        from_name: isModal ? "Sri Sumeru Floating Inquiry Form" : "Sri Sumeru FAQ Inquiry Form",
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || "Not provided",
        product_interest: formData.interest,
        message: formData.message.trim() || "No specific message provided.",
        page_url: typeof window !== "undefined" ? window.location.href : "Website",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success !== false) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Submission failed. Please call +91 9686237878.");
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setStatus("error");
      setErrorMessage("Network error. Please call +91 9686237878.");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      interest: preselectedInterest || detectCategoryFromLocation(location?.pathname, location?.search),
      message: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <div id={`${idPrefix}-consultation-form`} className={`cs_faq_inquiry_card cs_faq_square_box ${isModal ? "cs_faq_modal_mode" : ""}`}>
      {status === "success" ? (
        <div className="cs_thankyou_card">
          <div className="cs_thankyou_icon_wrap">
            <span className="cs_thankyou_circle">
              <i className="fa-solid fa-check"></i>
            </span>
          </div>

          <div className="cs_thankyou_badge">
            <i className="fa-solid fa-shield-halved me-1"></i> INQUIRY CONFIRMED
          </div>

          <h3 className="cs_thankyou_title">Thank You, {formData.name || "Valued Client"}!</h3>
          <p className="cs_thankyou_subtitle">
            Your technical consultation inquiry for <strong>{formData.interest}</strong> has been received by our Bangalore plant engineering desk.
          </p>

          <div className="cs_thankyou_details_box">
            <div className="cs_thankyou_detail_row">
              <span className="cs_thankyou_label"><i className="fa-solid fa-phone me-1"></i> Contact:</span>
              <span className="cs_thankyou_val">{formData.phone}</span>
            </div>
            {formData.email && (
              <div className="cs_thankyou_detail_row">
                <span className="cs_thankyou_label"><i className="fa-solid fa-envelope me-1"></i> Email:</span>
                <span className="cs_thankyou_val">{formData.email}</span>
              </div>
            )}
            <div className="cs_thankyou_detail_row">
              <span className="cs_thankyou_label"><i className="fa-solid fa-layer-group me-1"></i> Category:</span>
              <span className="cs_thankyou_val">{formData.interest}</span>
            </div>
            <div className="cs_thankyou_detail_row">
              <span className="cs_thankyou_label"><i className="fa-solid fa-clock me-1"></i> Response:</span>
              <span className="cs_thankyou_val cs_text_accent">Within 2 to 4 business hours</span>
            </div>
          </div>

          <p className="cs_thankyou_footer_note">
            Need immediate CAD drawings, custom mould guidance or sample dispatches? Contact us directly:
          </p>

          <div className="cs_thankyou_actions">
            <a
              href={`https://wa.me/919686237878?text=${encodeURIComponent(
                `Hi Sri Sumeru GFRC, I just submitted an inquiry for ${formData.interest}. My contact is ${formData.phone}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cs_thankyou_wa_btn"
            >
              <i className="fa-brands fa-whatsapp me-2"></i> Quick Connect on WhatsApp
            </a>

            <button
              type="button"
              onClick={handleReset}
              className="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50 cs_faq_submit_btn cs_thankyou_new_btn w-100"
            >
              <span>SUBMIT ANOTHER INQUIRY</span>
              <span className="cs_btn_icon cs_radius_100 cs_center">
                <i className="fa-solid fa-arrow-rotate-right"></i>
              </span>
            </button>

            {isModal && onClose && (
              <button
                type="button"
                onClick={onClose}
                className="cs_modal_done_close_btn w-100 mt-2"
              >
                <i className="fa-solid fa-check me-2"></i> Close Window
              </button>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="cs_faq_square_header">
            <span className="cs_faq_square_badge">
              <i className="fa-solid fa-headset me-1"></i> DIRECT FACTORY INQUIRY
            </span>
            <h3 className="cs_faq_square_title">Have Specific Project Requirements?</h3>
            <p className="cs_faq_square_subtitle mb-0">
              Connect with our engineering team for CAD drawings, custom moulds &amp; itemized estimates.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="cs_faq_form_grid" noValidate={false}>
            {/* Row 1: Name (Required) + Contact Number (Required) Side by Side */}
            <div className="cs_faq_form_row_2col">
              <input
                id={`${idPrefix}-form-name`}
                type="text"
                name="name"
                required
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                className="cs_faq_compact_input"
                aria-required="true"
              />
              <input
                id={`${idPrefix}-form-phone`}
                type="tel"
                name="phone"
                required
                placeholder="Phone / WA *"
                value={formData.phone}
                onChange={handleChange}
                className="cs_faq_compact_input"
                aria-required="true"
              />
            </div>

            {/* Row 2: Email (Optional) */}
            <input
              id={`${idPrefix}-form-email`}
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="cs_faq_compact_input"
            />

            {/* Row 3: Product Interest Dropdown (Auto-selected based on current page) */}
            <div className="cs_faq_compact_select_wrap">
              <select
                id={`${idPrefix}-form-interest`}
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="cs_faq_compact_input cs_faq_compact_select"
                required
              >
                {PRODUCT_INTEREST_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <i className="fa-solid fa-chevron-down cs_faq_compact_caret"></i>
            </div>

            {/* Row 4: Message (Optional) */}
            <textarea
              id={`${idPrefix}-form-message`}
              name="message"
              rows="4"
              placeholder="Tell us about your project requirements or drawings..."
              value={formData.message}
              onChange={handleChange}
              className="cs_faq_compact_input cs_faq_compact_textarea"
            ></textarea>

            {/* Error Message if any */}
            {status === "error" && (
              <div className="cs_faq_form_alert_error py-1 px-2 mb-1" role="alert">
                <i className="fa-solid fa-circle-exclamation me-1"></i>
                <span style={{ fontSize: "11px" }}>{errorMessage}</span>
              </div>
            )}

            {/* Row 5: Submit Button with Exact Header Button CSS (cs_btn_style_1) */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50 cs_faq_submit_btn w-100"
            >
              <span>{status === "submitting" ? "SENDING INQUIRY..." : "GET ESTIMATE & CONSULTATION"}</span>
              <span className="cs_btn_icon cs_radius_100 cs_center">
                {status === "submitting" ? (
                  <i className="fa-solid fa-spinner fa-spin"></i>
                ) : (
                  <i className="fa-solid fa-arrow-right"></i>
                )}
              </span>
            </button>

            <div className="cs_faq_privacy_note">
              <i className="fa-solid fa-shield-halved"></i>
              <span>100% confidential. Direct reply from Bangalore plant.</span>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
