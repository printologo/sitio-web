import { ArrowRight, Sparkles, ShieldCheck, Star } from "lucide-react";
import { getWhatsappLink } from "../config/site";
import { Button } from "../components/Button";
import { Badge } from "../components/Badge";
import { ProductVisual } from "../components/ProductVisual";
import imgCamisetaFullColor from "../assets/camiseta full color header.PNG";
import imgGorraCorporativa from "../assets/gorra corporativa header.PNG";
import imgTermoMarca from "../assets/termo de marca header.PNG";
import "./Hero.css";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <Badge icon={Sparkles}>Impresión DTF · Bordado · Serigrafía · Sublimación</Badge>

          <h1 className="hero-title">
            Convertimos tus ideas en productos que puedes usar, regalar o vender
          </h1>

          <p className="hero-subtitle">
            Personalizamos camisetas, uniformes, gorras, tazas y termos con acabados
            profesionales. Te asesoramos para elegir la técnica correcta, sin importar si
            necesitas 5 unidades o 5,000.
          </p>

          <div className="hero-ctas">
            <Button
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              icon={ArrowRight}
            >
              Solicita tu cotización
            </Button>
            <Button href="#portafolio" variant="outline">
              Ver nuestros trabajos
            </Button>
          </div>

          <div className="hero-trust">
            <div className="hero-trust-avatars" aria-hidden="true">
              <span className="tone-1" />
              <span className="tone-2" />
              <span className="tone-4" />
            </div>
            <p>
              <strong>+500 proyectos</strong> entregados a empresas, marcas y emprendedores en
              Panamá.
            </p>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-main">
            <ProductVisual
              icon="shirt"
              tag="DTF"
              label="Camiseta full color"
              tone={1}
              size="lg"
              image={imgCamisetaFullColor}
              loading="eager"
            />
          </div>
          <div className="hero-visual-card hero-visual-card-1">
            <ProductVisual
              icon="crown"
              tag="Bordado"
              label="Gorra corporativa"
              tone={2}
              image={imgGorraCorporativa}
              loading="eager"
            />
          </div>
          <div className="hero-visual-card hero-visual-card-2">
            <ProductVisual
              icon="cup-soda"
              tag="Sublimación"
              label="Termo de marca"
              tone={4}
              image={imgTermoMarca}
              loading="eager"
            />
          </div>
          <div className="hero-visual-badge">
            <ShieldCheck size={18} aria-hidden="true" />
            Acabados garantizados
          </div>
          <div className="hero-visual-rating">
            <Star size={16} fill="currentColor" aria-hidden="true" />
            <Star size={16} fill="currentColor" aria-hidden="true" />
            <Star size={16} fill="currentColor" aria-hidden="true" />
            <Star size={16} fill="currentColor" aria-hidden="true" />
            <Star size={16} fill="currentColor" aria-hidden="true" />
            <span>Clientes satisfechos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
