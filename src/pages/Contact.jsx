import React, { useEffect } from "react";
import siteContent from "../content/siteContent.js";
import HtmlBlock from "../components/HtmlBlock.jsx";
import { sendInquiry } from "../services/emailService.js";

export default function Contact() {
  useEffect(() => {
    const form = document.getElementById("cs_form");
    if (!form) return;

    const handleSubmit = async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "";

      const nameInput = form.querySelector('input[name="name"]');
      const phoneInput = form.querySelector('input[name="phone"]');
      const emailInput = form.querySelector('input[name="email"]');
      const subjectInput = form.querySelector('input[name="subject"]');
      const messageInput = form.querySelector('textarea[name="message"]');

      const name = nameInput ? nameInput.value.trim() : "";
      const phone = phoneInput ? phoneInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";
      const subject = subjectInput ? subjectInput.value.trim() : "";
      const message = messageInput ? messageInput.value.trim() : "";

      if (!name || !phone) {
        alert("Please enter your name and contact phone number.");
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>SENDING ENQUIRY...</span> <span class="cs_btn_icon cs_radius_100 cs_center"><i class="fa-solid fa-spinner fa-spin"></i></span>`;
      }

      try {
        const result = await sendInquiry({
          name,
          phone,
          email,
          subject: subject || `Contact Page Inquiry from ${name}`,
          product_interest: subject || "Architectural Facade & Cladding",
          message,
          source: "Contact Us Page Form",
          page_url: window.location.href,
        });

        if (result.success || result.notConfigured) {
          form.innerHTML = `
            <div class="cs_contact_success_box p-4 text-center" style="background: rgba(202, 160, 92, 0.08); border: 1px solid rgba(202, 160, 92, 0.35); border-radius: 16px; margin-top: 10px; width: 100%;">
              <div style="font-size: 42px; color: #caa05c; margin-bottom: 14px;"><i class="fa-solid fa-circle-check"></i></div>
              <h3 style="font-size: 24px; font-weight: 700; color: #181818; margin-bottom: 10px; font-family: var(--primary-font, sans-serif);">Thank You, ${name}!</h3>
              <p style="font-size: 15px; color: #555; margin-bottom: 22px; line-height: 1.6;">Your architectural inquiry has been forwarded to our engineering team at Bangalore. We will get back to you at <strong>${phone}</strong> shortly.</p>
              <a href="https://wa.me/919686237878?text=${encodeURIComponent(
                `Hi Sri Sumeru GFRC & FRP, I just submitted an inquiry on your website: ${name} (${phone}).`
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
    return () => form.removeEventListener("submit", handleSubmit);
  }, []);

  return <HtmlBlock html={siteContent.pages.Contact} />;
}
