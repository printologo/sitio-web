import { MessageCircle } from "lucide-react";
import { getWhatsappLink } from "../config/site";
import "./MobileStickyCta.css";

export function MobileStickyCta() {
  return (
    <div className="mobile-sticky-cta">
      <a href={getWhatsappLink()} target="_blank" rel="noopener noreferrer">
        <MessageCircle size={20} aria-hidden="true" />
        Solicita tu cotización
      </a>
    </div>
  );
}
