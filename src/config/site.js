// ---------------------------------------------------------------------------
// Configuración central del sitio. Edita aquí el número de WhatsApp, el
// mensaje por defecto, el nombre de marca y los enlaces de navegación.
// ---------------------------------------------------------------------------

export const siteConfig = {
  brandName: "Printólogo",
  tagline: "Personalización textil y productos promocionales",

  // Reemplaza por el número real en formato internacional, sin "+", "espacios" ni guiones.
  // Ejemplo Panamá: 507 6123 4567 -> "50761234567"
  whatsappNumber: "50763457040",

  whatsappDefaultMessage:
    "Hola, vi la página de Printólogo y quiero solicitar una cotización.",
};

/**
 * Construye un enlace de WhatsApp (wa.me) con un mensaje opcional.
 * Si no se pasa mensaje, usa el mensaje por defecto de siteConfig.
 */
export function getWhatsappLink(message) {
  const text = encodeURIComponent(message || siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Productos", href: "#productos" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Preguntas", href: "#preguntas" },
];
