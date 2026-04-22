export default function Button({ children, variant="gold", className="", ...props }) {
  const base = "px-6 py-3 text-xs uppercase font-semibold transition";

  const styles = {
    gold: "bg-gradient-to-r from-gold to-goldLight text-black",
    outline: "border border-gold text-gold",
    dark: "bg-card border border-border text-white",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}