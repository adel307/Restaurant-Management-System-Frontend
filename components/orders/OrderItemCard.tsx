import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { OrderItem } from "@/lib/types";
import { orderItemsTotal } from "@/lib/mock-data";
import { PriceLine } from "@/components/ui/PriceLine";
import { TicketRail } from "@/components/ui/TicketRail";

interface OrderItemCardProps {
  orderId: string;
  items: OrderItem[];
  openedAt: string;
  closedAt?: string;
}

export function OrderItemCard({ orderId, items, openedAt, closedAt }: OrderItemCardProps) {
  const total = orderItemsTotal(items);

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: 0.5 }}>
          <Typography variant="h6" sx={{ fontSize: 18 }}>
            Order #{orderId.replace("ord-", "")}
          </Typography>
          <Typography sx={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "text.secondary" }}>
            {new Date(openedAt).toLocaleDateString()}
          </Typography>
        </Box>
        {closedAt && (
          <Typography sx={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "text.secondary", mb: 1.5 }}>
            {new Date(openedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            {" – "}
            {new Date(closedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </Typography>
        )}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, my: 1.5 }}>
          {items.map((item) => (
            <PriceLine
              key={item.mealId}
              label={`${item.quantity}× ${item.name}`}
              value={`${item.quantity * item.unitPrice} EGP`}
            />
          ))}
        </Box>
        <TicketRail className="my-3" />
        <PriceLine label="Total" value={`${total} EGP`} emphasize />
      </CardContent>
    </Card>
  );
}
