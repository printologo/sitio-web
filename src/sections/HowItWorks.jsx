import { howItWorks } from "../data/howItWorks";
import { Icon } from "../components/icons";
import { SectionHeading } from "../components/SectionHeading";
import "./HowItWorks.css";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section section-dark how-it-works">
      <div className="container">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="De tu idea a tu producto en 3 pasos"
          light
        />

        <div className="how-it-works-grid">
          {howItWorks.map((item) => (
            <div className="how-it-works-item" key={item.step}>
              <span className="how-it-works-step">{item.step}</span>
              <Icon name={item.icon} size={22} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
