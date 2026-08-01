import { useCases } from "../data/useCases";
import { Icon } from "../components/icons";
import { SectionHeading } from "../components/SectionHeading";
import "./UseCases.css";

export function UseCases() {
  return (
    <section className="section usecases">
      <div className="container">
        <SectionHeading
          eyebrow="Para quién trabajamos"
          title="Soluciones para cada tipo de proyecto"
        />

        <div className="usecases-grid">
          {useCases.map((useCase) => (
            <div className="usecases-card" key={useCase.id}>
              <Icon name={useCase.icon} size={26} aria-hidden="true" />
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
