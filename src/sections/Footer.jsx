import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, siteConfig, getWhatsappLink } from "../config/site";
import logoIcon from "../assets/Printologo icon.png";
import "./Footer.css";

// Iconos de redes sociales minimalistas (lucide-react no incluye iconos de marca).
// Reemplaza los enlaces "#" por tus perfiles reales.
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M14 8.5h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3.5h2V21h3.5v-6.5H16l.5-3.5h-3V9c0-.55.45-1 1-1z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#inicio" className="footer-logo">
            <img src={logoIcon} alt="" className="footer-logo-mark" width={32} height={32} />
            {siteConfig.brandName}
          </a>
          <p>{siteConfig.tagline}. Impresión DTF, bordado, serigrafía y sublimación en Panamá.</p>
          <div className="footer-social">
            <a href="https://instagram.com/printologo" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Printólogo">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/printologo" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Printólogo">
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Navegación</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>
          <ul>
            <li>
              <Phone size={16} aria-hidden="true" />
              <a href={getWhatsappLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <Mail size={16} aria-hidden="true" />
              <a href="mailto:printologo@gmail.com">printologo@gmail.com</a>
            </li>
            <li>
              <MapPin size={16} aria-hidden="true" />
              <span>Ciudad de Panamá, Panamá</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>
            © {new Date().getFullYear()} {siteConfig.brandName}. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
