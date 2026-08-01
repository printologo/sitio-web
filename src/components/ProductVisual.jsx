import { Icon } from "./icons";
import "./ProductVisual.css";

/**
 * Visual de producto/trabajo terminado.
 * - Sin "image": placeholder con degradado de marca + icono grande centrado.
 *   Reemplázalo pasando la prop "image" apenas tengas la fotografía real.
 * - Con "image": muestra la foto a pantalla completa (el producto va centrado
 *   en la imagen) y superpone el icono + la etiqueta en una franja inferior
 *   con degradado oscuro, para no tapar el producto.
 *
 * tone: 1 a 5 (degradados de marca definidos en ProductVisual.css, usados solo
 * cuando no hay "image").
 */
export function ProductVisual({
  icon,
  label,
  tag,
  tone = 1,
  size = "md",
  showHint = true,
  image,
  alt,
  loading = "lazy",
}) {
  const hasImage = Boolean(image);

  return (
    <div
      className={`product-visual product-visual-${size} ${hasImage ? "product-visual-photo" : `tone-${tone}`}`}
    >
      {hasImage ? (
        <img className="product-visual-img" src={image} alt={alt || label || ""} loading={loading} />
      ) : (
        <div className="product-visual-pattern" aria-hidden="true" />
      )}

      {tag && <span className="product-visual-tag">{tag}</span>}

      {hasImage ? (
        <div className="product-visual-caption">
          {icon && <Icon name={icon} className="product-visual-caption-icon" size={18} aria-hidden="true" />}
          {label && <span className="product-visual-label">{label}</span>}
        </div>
      ) : (
        <>
          <Icon name={icon} className="product-visual-icon" size={size === "lg" ? 46 : 34} aria-hidden="true" />
          {label && <span className="product-visual-label">{label}</span>}
        </>
      )}

      {!hasImage && showHint && (
        <span className="product-visual-hint">Imagen de muestra — reemplazar</span>
      )}
    </div>
  );
}
