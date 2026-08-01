import { ArrowRight } from "lucide-react";
import { getWhatsappLink } from "../config/site";
import { Button } from "../components/Button";
import "./FinalCTA.css";

export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <h2>¿Listo para convertir tu idea en un producto real?</h2>
        <p>
          Cuéntanos qué necesitas y te ayudamos a elegir la técnica, el material y la
          cantidad correcta para tu proyecto.
        </p>
        <Button
          href={getWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          icon={ArrowRight}
        >
          Solicita tu cotización
        </Button>
      </div>
    </section>
  );
}
