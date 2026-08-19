import { ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { darkTheme } from "@/lib/theme";
import { OrderItem } from "@/lib/types";
import { orderItemsTotal } from "@/lib/mock-data";
import { PriceLine } from "@/components/ui/PriceLine";
import { TicketRail } from "@/components/ui/TicketRail";

export function SessionOrderSummary({ items }: { items: OrderItem[] }) {
  const total = orderItemsTotal(items);

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper component="section" aria-label="Current session order" sx={{ p: 3 }}>
        <Typography
          variant="overline"
          sx={{ color: "primary.main", letterSpacing: "0.3em", display: "block", fontFamily: "var(--font-mono)" }}
        >
          Open ticket
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          This all our orders
        </Typography>

        {items.length === 0 ? (
          <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
            Nothing added yet — browse the menu and add a meal to start this
            session&apos;s ticket.
          </Typography>
        ) : (
          <>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1, my: 1.5 }}>
              {items.map((item) => (
                <PriceLine
                  key={item.mealId}
                  label={`${item.quantity}× ${item.name}`}
                  value={`${item.quantity * item.unitPrice} EGP`}
                  dark
                />
              ))}
            </Box>
            <TicketRail dark className="my-3" />
            <PriceLine label="Total" value={`${total} EGP`} dark emphasize />
            <Typography sx={{ fontSize: 12, color: "text.secondary", mt: 2 }}>
              This ticket closes and saves to your order history when you log
              out.
            </Typography>
          </>
        )}
      </Paper>
    </ThemeProvider>
  );
}
