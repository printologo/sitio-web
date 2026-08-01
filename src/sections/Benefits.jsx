import { benefits } from "../data/benefits";
import { Icon } from "../components/icons";
import { SectionHeading } from "../components/SectionHeading";
import "./Benefits.css";

export function Benefits() {
  return (
    <section className="section benefits">
      <div className="container">
        <SectionHeading
          eyebrow="Por qué Printólogo"
          title="Todo lo que necesitas para personalizar bien, en un solo lugar"
        />

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div className="benefits-item" key={benefit.id}>
              <Icon name={benefit.icon} className="benefits-icon" size={20} aria-hidden="true" />
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
