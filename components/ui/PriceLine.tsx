interface PriceLineProps {
  label: string;
  value: string;
  dark?: boolean;
  emphasize?: boolean;
}

export function PriceLine({ label, value, dark = false, emphasize = false }: PriceLineProps) {
  return (
    <div className="flex items-baseline">
      <span className={`font-body text-sm ${dark ? "text-cream/80" : "text-ink/80"}`}>
        {label}
      </span>
      <span className={`leader-line ${dark ? "leader-line--dark" : ""}`} />
      <span
        className={`font-mono text-sm ${emphasize ? "font-semibold" : ""} ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
