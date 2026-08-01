import { Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";
import { SectionHeading } from "../components/SectionHeading";
import "./Testimonials.css";

// Nota: los testimonios en src/data/testimonials.js son contenido PROVISIONAL.
export function Testimonials() {
  return (
    <section className="section section-alt testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen quienes ya trabajaron con nosotros"
        />

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <figure className="testimonials-card" key={testimonial.id}>
              <Quote className="testimonials-quote-icon" size={22} aria-hidden="true" />
              <blockquote>“{testimonial.quote}”</blockquote>
              <figcaption>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
