import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig, getWhatsappLink } from "../config/site";
import { Button } from "../components/Button";
import logoIcon from "../assets/Printologo icon.png";
import "./Header.css";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#inicio" className="header-logo">
          <img src={logoIcon} alt="" className="header-logo-mark" width={36} height={36} />
          {siteConfig.brandName}
        </a>

        <nav className="header-nav" aria-label="Navegación principal">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Button href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" size="sm">
            Cotiza por WhatsApp
          </Button>
        </div>

        <button
          type="button"
          className="header-menu-toggle"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="header-mobile-menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href={getWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="header-mobile-cta"
          >
            Solicita tu cotización
          </Button>
        </div>
      )}
    </header>
  );
}
