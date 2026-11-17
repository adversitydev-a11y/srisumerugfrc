/**
 * EmailJS Configuration for Sri Sumeru GFRC & FRP
 * 
 * You can provide credentials in either:
 * 1. Root .env file (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY)
 * 2. Or directly edit the fallback values below.
 */

export const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id_here",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id_here",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key_here",
  recipientEmail: "gfrc@sumerurealty.com",
};

/**
 * Checks if real credentials have been provided instead of defaults
 */
export function isEmailJsConfigured() {
  const { serviceId, templateId, publicKey } = emailJsConfig;
  return (
    serviceId &&
    templateId &&
    publicKey &&
    serviceId !== "your_service_id_here" &&
    templateId !== "your_template_id_here" &&
    publicKey !== "your_public_key_here"
  );
}
