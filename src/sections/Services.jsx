import { services } from "../data/services";
import { Icon } from "../components/icons";
import { SectionHeading } from "../components/SectionHeading";
import "./Services.css";

export function Services() {
  return (
    <section id="servicios" className="section section-alt services">
      <div className="container">
        <SectionHeading
          eyebrow="Servicios"
          title="Técnicas de personalización para cada proyecto"
          subtitle="Elegimos contigo la técnica correcta según el diseño, el material y el uso que le darás al producto."
        />

        <div className="services-grid">
          {services.map((service) => (
            <article className="services-card" key={service.id}>
              <div className="services-card-icon">
                <Icon name={service.icon} size={24} aria-hidden="true" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
