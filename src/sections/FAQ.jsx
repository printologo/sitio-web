import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/faqs";
import { SectionHeading } from "../components/SectionHeading";
import "./FAQ.css";

export function FAQ() {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  return (
    <section id="preguntas" className="section faq">
      <div className="container faq-container">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Antes de escribirnos, quizás esto te ayude"
          align="left"
        />

        <div className="faq-list">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div className="faq-item" key={faq.id}>
                <h3>
                  <button
                    type="button"
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${faq.id}`}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                  >
                    {faq.question}
                    <ChevronDown className={`faq-chevron ${isOpen ? "is-open" : ""}`} size={20} aria-hidden="true" />
                  </button>
                </h3>
                {isOpen && (
                  <div className="faq-panel" id={`faq-panel-${faq.id}`} role="region">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
