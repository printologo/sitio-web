import "./Badge.css";

/** Pequeña etiqueta tipo pill. tone: "accent" | "dark" | "light" */
export function Badge({ children, icon: IconCmp, tone = "accent", className = "" }) {
  return (
    <span className={`badge badge-${tone} ${className}`}>
      {IconCmp && <IconCmp size={14} aria-hidden="true" />}
      {children}
    </span>
  );
}
