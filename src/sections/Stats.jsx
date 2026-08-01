import { stats } from "../data/stats";
import "./Stats.css";

export function Stats() {
  return (
    <section className="stats" aria-label="Cifras de Printólogo">
      <div className="container stats-inner">
        {stats.map((stat) => (
          <div className="stats-item" key={stat.id}>
            <span className="stats-value">{stat.value}</span>
            <span className="stats-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
