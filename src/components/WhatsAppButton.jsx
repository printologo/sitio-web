import { MessageCircle } from "lucide-react";
import { getWhatsappLink } from "../config/site";
import "./WhatsAppButton.css";

/**
 * Botón flotante de WhatsApp, fijo en la esquina inferior.
 * Se oculta cuando la barra fija de móvil (MobileStickyCta) está visible,
 * vía la clase "is-compact" controlada por la sección que lo use si hace falta.
 */
export function WhatsAppButton({ message }) {
  return (
    <a
      href={getWhatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Cotizar por WhatsApp"
    >
      <span className="whatsapp-float-ring" aria-hidden="true" />
      <MessageCircle size={26} strokeWidth={2.2} aria-hidden="true" />
    </a>
  );
}
