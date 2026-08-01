import { problems } from "../data/problems";
import { Icon } from "../components/icons";
import { SectionHeading } from "../components/SectionHeading";
import "./Problems.css";

export function Problems() {
  return (
    <section className="section problems" aria-label="Problemas frecuentes">
      <div className="container">
        <SectionHeading
          eyebrow="Te entendemos"
          title="¿Te suena alguna de estas situaciones?"
          subtitle="Antes de cotizar, es importante que sepas que no estás solo con estos problemas — para eso existe la asesoría."
        />

        <ul className="problems-grid">
          {problems.map((problem) => (
            <li className="problems-item" key={problem.id}>
              <Icon name={problem.icon} className="problems-icon" size={22} aria-hidden="true" />
              <p>{problem.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
