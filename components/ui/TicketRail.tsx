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
    <div
      className={`ticket-rail ${dark ? "ticket-rail--dark" : ""} ${className}`}
      role="separator"
    />
  );
}
