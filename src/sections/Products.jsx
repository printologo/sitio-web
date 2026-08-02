import { products } from "../data/products";
import { Icon } from "../components/icons";
import { SectionHeading } from "../components/SectionHeading";
import "./Products.css";

export function Products() {
  return (
    <section id="productos" className="section products">
      <div className="container">
        <SectionHeading
          eyebrow="Productos"
          title="Personaliza el producto que tu proyecto necesita"
          subtitle="Estos son algunos de los artículos que trabajamos habitualmente. Si no ves el tuyo, pregúntanos por WhatsApp."
        />

        <ul className="products-grid">
          {products.map((product) => (
            <li className="products-item" key={product.id}>
              <span className="products-item-icon">
                <Icon name={product.icon} size={22} aria-hidden="true" />
              </span>
              <span className="products-item-label">{product.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
