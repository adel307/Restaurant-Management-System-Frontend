import Box from "@mui/material/Box";

interface TicketRailProps {
  dark?: boolean;
  className?: string;
}

/**
 * The recurring visual signature of the RMS frontend: a perforated
 * receipt-edge rule. Used to separate sections on every role's view so the
 * client menu, the admin dashboards, and the orders pages all read as
 * different faces of the same underlying "ticket".
 */
export function TicketRail({ dark = false, className = "" }: TicketRailProps) {
  return (
    <Box
      role="separator"
      className={`ticket-rail ${dark ? "ticket-rail--dark" : ""} ${className}`}
      sx={{
        width: "100%",
        height: "2px",
        my: { xs: 1.5, sm: 2 },
        position: "relative",
        /* إنشاء النمط المنقط المقطوع الشبيه بالإيصال */
        backgroundImage: dark
          ? "radial-gradient(circle, rgba(255, 255, 255, 0.25) 1px, transparent 1.5px)"
          : "radial-gradient(circle, rgba(0, 0, 0, 0.2) 1px, transparent 1.5px)",
        backgroundSize: "8px 2px",
        backgroundRepeat: "repeat-x",
        opacity: dark ? 0.6 : 0.8,
        transition: "opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease",

        /* تأثير الإضاءة (Glow) المضيء والتسليط عند تحريك الماوس فوق الفاصل */
        "&:hover": {
          opacity: 1,
          filter: dark
            ? "drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))"
            : "drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))",
        },
      }}
    />
  );
}