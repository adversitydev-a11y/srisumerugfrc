import React, { useEffect } from "react";
import siteContent from "../content/siteContent.js";
import HtmlBlock from "../components/HtmlBlock.jsx";
import { sendInquiry } from "../services/emailService.js";

export default function Contact() {
  useEffect(() => {
    const form = document.getElementById("cs_form");
    if (!form) return;

    const productSelect = form.querySelector('select[name="product_required"]');
    const otherWrap = form.querySelector('#cs_contact_other_product_wrap');
    const otherInput = form.querySelector('input[name="other_product"]');

    const handleProductChange = () => {
      if (!productSelect || !otherWrap) return;
      if (productSelect.value === "Others") {
        otherWrap.style.display = "block";
        if (otherInput) {
          otherInput.setAttribute("required", "true");
          setTimeout(() => otherInput.focus(), 100);
        }
      } else {
        otherWrap.style.display = "none";
        if (otherInput) {
          otherInput.removeAttribute("required");
          otherInput.value = "";
        }
      }
    };

    if (productSelect) {
      productSelect.addEventListener("change", handleProductChange);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "";

      const nameInput = form.querySelector('input[name="name"]');
      const phoneInput = form.querySelector('input[name="phone"]');
      const emailInput = form.querySelector('input[name="email"]');
      const locationInput = form.querySelector('input[name="location"]');
      const messageInput = form.querySelector('textarea[name="message"]');

      const name = nameInput ? nameInput.value.trim() : "";
      const phone = phoneInput ? phoneInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";
      const selectedProduct = productSelect ? productSelect.value.trim() : "";
      const otherProduct = otherInput ? otherInput.value.trim() : "";
      const locationVal = locationInput ? locationInput.value.trim() : "";
      const message = messageInput ? messageInput.value.trim() : "";

      if (!name || !phone) {
        alert("Please enter name and contact number.");
        return;
      }

      if (selectedProduct === "Others" && !otherProduct) {
        alert("Please type the required product name.");
        if (otherInput) otherInput.focus();
        return;
      }

      const finalProduct =
        selectedProduct === "Others"
          ? `Other: ${otherProduct}`
          : selectedProduct || "General Architectural Inquiry";

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>SENDING ENQUIRY...</span> <span class="cs_btn_icon cs_radius_100 cs_center"><i class="fa-solid fa-spinner fa-spin"></i></span>`;
      }

      try {
        const result = await sendInquiry({
          name,
          phone,
          email,
          product_interest: finalProduct,
          location: locationVal,
          subject: `Contact Page Inquiry: [${finalProduct}] - ${name}`,
          message,
          source: "Contact Us Page Form",
          page_url: window.location.href,
        });

        if (result.success || result.notConfigured) {
          form.innerHTML = `
            <div class="cs_contact_success_box p-4 text-center" style="background: rgba(202, 160, 92, 0.08); border: 1px solid rgba(202, 160, 92, 0.35); border-radius: 16px; margin-top: 10px; width: 100%;">
              <div style="font-size: 42px; color: #caa05c; margin-bottom: 14px;"><i class="fa-solid fa-circle-check"></i></div>
              <h3 style="font-size: 24px; font-weight: 700; color: #181818; margin-bottom: 10px; font-family: var(--primary-font, sans-serif);">Thank You, ${name}!</h3>
              <p style="font-size: 15px; color: #555; margin-bottom: 18px; line-height: 1.6;">
                Your inquiry for <strong>${finalProduct}</strong> has been forwarded to our Bangalore plant engineering desk. We will contact you at <strong>${phone}</strong> shortly.
              </p>
              ${
                locationVal
                  ? `<p style="font-size: 13px; color: #777; margin-bottom: 20px;"><i class="fa-solid fa-location-dot me-1"></i> Location: <strong>${locationVal}</strong></p>`
                  : ""
              }
              <a href="https://wa.me/919686237878?text=${encodeURIComponent(
                `Hi Sri Sumeru GFRC & FRP, I just submitted an inquiry on your Contact page.\nName: ${name}\nContact: ${phone}\nProduct Required: ${finalProduct}${
                  locationVal ? `\nLocation: ${locationVal}` : ""
                }`
              )}" target="_blank" rel="noopener noreferrer" class="cs_btn_style_1 cs_fs_14 cs_bold cs_primary_font cs_radius_50 d-inline-flex align-items-center gap-2" style="padding: 12px 28px; background: #25d366; color: white; text-decoration: none;">
                <i class="fa-brands fa-whatsapp"></i> <span>CONNECT ON WHATSAPP</span>
              </a>
            </div>
          `;
        } else {
          alert(result.error || "Failed to send inquiry. Please call +91 9686237878.");
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHtml;
          }
        }
      } catch (err) {
        console.error("Contact form error:", err);
        alert("Network error. Please call +91 9686237878.");
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }
      }
    };

    form.addEventListener("submit", handleSubmit);
    return () => {
      form.removeEventListener("submit", handleSubmit);
      if (productSelect) {
        productSelect.removeEventListener("change", handleProductChange);
      }
    };
  }, []);

  return <HtmlBlock html={siteContent.pages.Contact} />;
}
