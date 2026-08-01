import "./Button.css";

/**
 * Botón/enlace reutilizable.
 * variant: "primary" | "secondary" | "outline" | "ghost"
 * as: "a" | "button" (por defecto "a" si recibe href)
 */
export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon: IconCmp,
  iconPosition = "right",
  className = "",
  target,
  rel,
  ...rest
}) {
  const classes = ["btn", `btn-${variant}`, `btn-${size}`, className].filter(Boolean).join(" ");
  const content = (
    <>
      {IconCmp && iconPosition === "left" && <IconCmp className="btn-icon" size={18} aria-hidden="true" />}
      <span>{children}</span>
      {IconCmp && iconPosition === "right" && <IconCmp className="btn-icon" size={18} aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
