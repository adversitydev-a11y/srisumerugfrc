import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { sendInquiry } from "../services/emailService.js";

const PRODUCT_OPTIONS = [
  { value: "GFRC Architectural Cladding Panels", label: "GFRC Architectural Cladding Panels" },
  { value: "GFRC Jhali / Decorative Screens", label: "GFRC Jhali / Decorative Screens" },
  { value: "GFRC Columns & Classical Pillars", label: "GFRC Columns & Classical Pillars" },
  { value: "GFRC Architectural Mouldings & Cornices", label: "GFRC Architectural Mouldings & Cornices" },
  { value: "GFRC Window Arches & Portals", label: "GFRC Window Arches & Portals" },
  { value: "GFRC Balusters & Railings", label: "GFRC Balusters & Railings" },
  { value: "GFRC Planter Boxes", label: "GFRC Planter Boxes" },
  { value: "GFRC Brackets", label: "GFRC Brackets" },
  { value: "FRP Cornices & Architectural Mouldings", label: "FRP Cornices & Architectural Mouldings" },
  { value: "FRP Domes & Cupolas", label: "FRP Domes & Cupolas" },
  { value: "FRP Planter Boxes & Pots", label: "FRP Planter Boxes & Pots" },
  { value: "Temple GFRC & Heritage Elements", label: "Temple GFRC & Heritage Elements" },
  { value: "Custom Architectural Facade Solutions", label: "Custom Architectural Facade Solutions" },
  { value: "Others", label: "Others (Specify Custom Product)" },
];

function detectCategoryFromLocation(pathname, search) {
  const normalizedPath = (pathname || "").toLowerCase();
  const searchParams = new URLSearchParams(search || "");
  const productParam = (searchParams.get("product") || "").toLowerCase();

  // 1. Detailed product view via query param ?product=...
  if (productParam) {
    if (productParam.includes("jhali")) return "GFRC Jhali / Decorative Screens";
    if (productParam.includes("column-works") || productParam.includes("pillar")) return "GFRC Columns & Classical Pillars";
    if (productParam.includes("facade-works") || productParam.includes("cladding")) return "GFRC Architectural Cladding Panels";
    if (productParam.includes("moulding") || (productParam.includes("cornice") && productParam.startsWith("gfrc"))) {
      return "GFRC Architectural Mouldings & Cornices";
    }
    if (productParam.includes("baluster")) return "GFRC Balusters & Railings";
    if (productParam.includes("window-arch")) return "GFRC Window Arches & Portals";
    if (productParam.includes("bracket")) return "GFRC Brackets";
    if (productParam.includes("planter") && productParam.startsWith("gfrc")) return "GFRC Planter Boxes";

    if (productParam.includes("cornice") && productParam.startsWith("frp")) return "FRP Cornices & Architectural Mouldings";
    if (productParam.includes("dome")) return "FRP Domes & Cupolas";
    if (productParam.includes("planter") && productParam.startsWith("frp")) return "FRP Planter Boxes & Pots";
  }

  // 2. Main route-level detection
  if (normalizedPath.includes("gfrc-products")) return "GFRC Architectural Cladding Panels";
  if (normalizedPath.includes("frp-products")) return "FRP Cornices & Architectural Mouldings";
  if (normalizedPath.includes("projects") || normalizedPath.includes("portfolio")) {
    return "Custom Architectural Facade Solutions";
  }

  // 3. Default
  return "GFRC Architectural Cladding Panels";
}

export default function FaqConsultationForm({ preselectedInterest, idPrefix = "faq", isModal = false, onClose }) {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    productRequired: preselectedInterest || detectCategoryFromLocation(location?.pathname, location?.search),
    otherProduct: "",
    location: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  // Automatically update interest dropdown when navigating between different product/service pages
  useEffect(() => {
    const autoInterest = preselectedInterest || detectCategoryFromLocation(location?.pathname, location?.search);
    setFormData((prev) => ({
      ...prev,
      productRequired: autoInterest,
    }));
  }, [location?.pathname, location?.search, preselectedInterest]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const effectiveProduct =
    formData.productRequired === "Others"
      ? formData.otherProduct.trim() || "Others"
      : formData.productRequired;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Name and Contact Number are required.");
      return;
    }

    if (formData.productRequired === "Others" && !formData.otherProduct.trim()) {
      setStatus("error");
      setErrorMessage("Please type the required product name.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const finalProduct =
      formData.productRequired === "Others"
        ? `Other: ${formData.otherProduct.trim()}`
        : formData.productRequired || "General Architectural Inquiry";

    try {
      const result = await sendInquiry({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        product_interest: finalProduct,
        location: formData.location,
        subject: `${isModal ? "Global Floating Inquiry" : "Project Inquiry"}: [${finalProduct}] - ${formData.name}`,
        message: formData.message,
        source: isModal ? "Global Floating Modal Form" : "Project Estimation & Consultation Form",
        page_url: typeof window !== "undefined" ? window.location.href : "Website",
      });

      if (result.success || result.notConfigured) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Submission failed. Please call +91 9686237878.");
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
      productRequired: preselectedInterest || detectCategoryFromLocation(location?.pathname, location?.search),
      otherProduct: "",
      location: "",
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
            Your inquiry for <strong>{effectiveProduct}</strong> has been received by our Bangalore plant engineering desk.
          </p>

          <div className="cs_thankyou_details_box">
            <div className="cs_thankyou_detail_row">
              <span className="cs_thankyou_label"><i className="fa-solid fa-user me-1"></i> Name:</span>
              <span className="cs_thankyou_val">{formData.name}</span>
            </div>
            <div className="cs_thankyou_detail_row">
              <span className="cs_thankyou_label"><i className="fa-solid fa-phone me-1"></i> Contact Number:</span>
              <span className="cs_thankyou_val">{formData.phone}</span>
            </div>
            {formData.email && (
              <div className="cs_thankyou_detail_row">
                <span className="cs_thankyou_label"><i className="fa-solid fa-envelope me-1"></i> Email:</span>
                <span className="cs_thankyou_val">{formData.email}</span>
              </div>
            )}
            <div className="cs_thankyou_detail_row">
              <span className="cs_thankyou_label"><i className="fa-solid fa-cubes me-1"></i> Product Required:</span>
              <span className="cs_thankyou_val">{effectiveProduct}</span>
            </div>
            {formData.location && (
              <div className="cs_thankyou_detail_row">
                <span className="cs_thankyou_label"><i className="fa-solid fa-location-dot me-1"></i> Location:</span>
                <span className="cs_thankyou_val">{formData.location}</span>
              </div>
            )}
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
                `Hi Sri Sumeru GFRC & FRP, I just submitted an inquiry on your website.\nName: ${formData.name}\nContact: ${formData.phone}\nProduct Required: ${effectiveProduct}${
                  formData.location ? `\nLocation: ${formData.location}` : ""
                }`
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
            {/* Field 1 & 2: Name * & Contact Number * (2-Column Grid) */}
            <div className="cs_faq_form_row_2col">
              <input
                id={`${idPrefix}-form-name`}
                type="text"
                name="name"
                required
                placeholder="name *"
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
                placeholder="contact number *"
                value={formData.phone}
                onChange={handleChange}
                className="cs_faq_compact_input"
                aria-required="true"
              />
            </div>

            {/* Field 3 & 4: Email & Location (2-Column Grid) */}
            <div className="cs_faq_form_row_2col">
              <input
                id={`${idPrefix}-form-email`}
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
                className="cs_faq_compact_input"
              />
              <input
                id={`${idPrefix}-form-location`}
                type="text"
                name="location"
                placeholder="location"
                value={formData.location}
                onChange={handleChange}
                className="cs_faq_compact_input"
              />
            </div>

            {/* Field 5: Product Required Dropdown */}
            <div className="cs_faq_compact_select_wrap">
              <select
                id={`${idPrefix}-form-product`}
                name="productRequired"
                value={formData.productRequired}
                onChange={handleChange}
                className="cs_faq_compact_input cs_faq_compact_select"
                required
                aria-label="product required"
              >
                <option value="" disabled>product required</option>
                {PRODUCT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <i className="fa-solid fa-chevron-down cs_faq_compact_caret" aria-hidden="true"></i>
            </div>

            {/* Field 5b: If "Others" is selected, input to type custom product name */}
            {formData.productRequired === "Others" && (
              <div className="cs_other_product_anim">
                <input
                  id={`${idPrefix}-form-other-product`}
                  type="text"
                  name="otherProduct"
                  required
                  placeholder="type the product name *"
                  value={formData.otherProduct}
                  onChange={handleChange}
                  className="cs_faq_compact_input"
                  aria-required="true"
                  autoFocus
                />
              </div>
            )}

            {/* Field 6: Message */}
            <textarea
              id={`${idPrefix}-form-message`}
              name="message"
              rows="3"
              placeholder="message"
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

            {/* Submit Button */}
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
              <i className="fa-solid fa-shield-halved me-1 text-success"></i>
              Your contact details are encrypted and used solely for architectural consultation.
            </div>
          </form>
        </>
      )}
    </div>
  );
}
