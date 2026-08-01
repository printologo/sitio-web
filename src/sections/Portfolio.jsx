import { useRef, useState } from "react";
import { portfolioCategories, portfolioItems } from "../data/portfolio";
import { ProductVisual } from "../components/ProductVisual";
import { SectionHeading } from "../components/SectionHeading";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { getWhatsappLink } from "../config/site";
import "./Portfolio.css";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [selectedItem, setSelectedItem] = useState(null);
  const triggerRef = useRef(null);

  const filteredItems =
    activeCategory === "todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  function openItem(item, event) {
    triggerRef.current = event.currentTarget;
    setSelectedItem(item);
  }

  return (
    <section id="portafolio" className="section section-alt portfolio">
      <div className="container">
        <SectionHeading
          eyebrow="Portafolio"
          title="Trabajos que hemos hecho realidad"
          subtitle="Una muestra de las técnicas y productos con los que trabajamos. Haz clic en cualquier trabajo para verlo más grande."
        />

        <div className="portfolio-filters" role="group" aria-label="Filtrar por técnica">
          {portfolioCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`portfolio-filter ${activeCategory === category.id ? "is-active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="portfolio-card"
              onClick={(event) => openItem(item, event)}
            >
              <ProductVisual
                icon={item.icon}
                tag={item.tag}
                label={item.title}
                tone={item.tone}
                image={item.image}
              />
            </button>
          ))}
        </div>
      </div>

      <Modal
        isOpen={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title}
        triggerRef={triggerRef}
      >
        {selectedItem && (
          <div className="portfolio-modal">
            <ProductVisual
              icon={selectedItem.icon}
              tag={selectedItem.tag}
              label={selectedItem.title}
              tone={selectedItem.tone}
              image={selectedItem.image}
              size="lg"
            />
            <h3>{selectedItem.title}</h3>
            <p>Técnica utilizada: {selectedItem.tag}.</p>
            <Button href={getWhatsappLink(`Hola, me interesa un trabajo como "${selectedItem.title}".`)} target="_blank" rel="noopener noreferrer">
              Quiero algo similar
            </Button>
          </div>
        )}
      </Modal>
    </section>
  );
}
