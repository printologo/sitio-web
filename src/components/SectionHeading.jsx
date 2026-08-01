import "./SectionHeading.css";

/**
 * Encabezado de sección reutilizable: eyebrow + título + subtítulo.
 * align: "left" | "center"
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Heading = "h2",
  light = false,
}) {
  return (
    <div className={`section-heading section-heading-${align} ${light ? "section-heading-light" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Heading className="section-heading-title">{title}</Heading>
      {subtitle && <p className="section-heading-subtitle">{subtitle}</p>}
    </div>
  );
}
