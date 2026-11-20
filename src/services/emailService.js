import emailjs from "@emailjs/browser";
import { emailJsConfig, isEmailJsConfigured } from "../config/emailjs.js";

/**
 * Sends an architectural project / consultation inquiry via EmailJS
 * 
 * @param {Object} inquiryData
 * @param {string} inquiryData.name - Client name / organization
 * @param {string} inquiryData.phone - Phone / WhatsApp number
 * @param {string} [inquiryData.email] - Client email address
 * @param {string} [inquiryData.product_interest] - Selected product / category
 * @param {string} [inquiryData.subject] - Inquiry subject / title
 * @param {string} [inquiryData.message] - Detailed project requirements / specs
 * @param {string} [inquiryData.page_url] - URL where the form was submitted
 * @param {string} [inquiryData.source] - Form origin ("FAQ Estimation", "Floating Modal", "Contact Us")
 * 
 * @returns {Promise<{success: boolean, response?: any, error?: string}>}
 */
export async function sendInquiry(inquiryData) {
  if (!isEmailJsConfigured()) {
    console.warn(
      "[EmailJS] Service credentials are not configured yet. Please update .env or src/config/emailjs.js."
    );
    return {
      success: false,
      error: "EmailJS credentials not configured yet. Please add Service ID, Template ID, and Public Key.",
      notConfigured: true,
    };
  }

  const { serviceId, templateId, publicKey, recipientEmail } = emailJsConfig;

  // Format template parameters expected by EmailJS template
  const templateParams = {
    to_email: recipientEmail,
    from_name: inquiryData.name ? inquiryData.name.trim() : "Valued Client",
    name: inquiryData.name ? inquiryData.name.trim() : "",
    phone: inquiryData.phone ? inquiryData.phone.trim() : "",
    email: inquiryData.email ? inquiryData.email.trim() : "Not provided",
    location: inquiryData.location ? inquiryData.location.trim() : "Not provided",
    product_interest: inquiryData.product_interest || inquiryData.subject || "General GFRC & FRP Inquiry",
    subject: inquiryData.subject || `Inquiry from ${inquiryData.name} - Sri Sumeru GFRC & FRP`,
    message: [
      inquiryData.message ? inquiryData.message.trim() : "",
      inquiryData.location ? `Client Location: ${inquiryData.location.trim()}` : "",
    ].filter(Boolean).join("\n\n") || "No specific message provided.",
    page_url: inquiryData.page_url || (typeof window !== "undefined" ? window.location.href : "Website"),
    source: inquiryData.source || "Website Inquiry Form",
    submitted_at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST",
  };

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    return {
      success: true,
      response,
    };
  } catch (err) {
    console.error("[EmailJS] Send Error:", err);
    return {
      success: false,
      error: err?.text || err?.message || "Failed to send email. Please check EmailJS configuration.",
    };
  }
}
