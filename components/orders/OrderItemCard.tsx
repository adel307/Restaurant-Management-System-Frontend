import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
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

export function OrderItemCard({
  orderId,
  items,
  openedAt,
  closedAt,
}: OrderItemCardProps) {
  const total = orderItemsTotal(items);

  return (
    <Card
      sx={{
        bgcolor: "rgba(22, 27, 38, 0.65)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: { xs: 2.5, sm: 3.5 },
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
        transition: "transform 0.2s ease, border-color 0.2s ease",
        height: { xs: 450, sm: 500 }, // ارتفاع متجاوب يناسب الشاشات الصغيره
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          transform: "translateY(-2px)",
          borderColor: "rgba(255, 255, 255, 0.22)",
        },
      }}
    >
      <CardContent
        sx={{
          p: { xs: 2, sm: 3 }, // padding أقل للموبايل لمساحة أكبر
          height: "100%",
          display: "flex",
          flexDirection: "column",
          "&:last-child": { pb: { xs: 2, sm: 3 } },
        }}
      >
        {/* الهيدر: رقم الطلب والتاريخ والشارة مع استجابة للشاشات الصغيرة */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: 1, sm: 0 },
            mb: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: 16, sm: 18 },
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.01em",
              }}
            >
              Order #{orderId.replace("ord-", "")}
            </Typography>
            <Chip
              label="Closed"
              size="small"
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.08)",
                color: "rgba(255, 255, 255, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                fontSize: 10,
                fontWeight: 600,
                height: 18,
              }}
            />
          </Box>
          <Typography
            sx={{
              fontFamily: "var(--font-mono)",
              fontSize: { xs: 11, sm: 12 },
              color: "rgba(255, 255, 255, 0.5)",
            }}
          >
            {new Date(openedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </Typography>
        </Box>

        {/* أوقات فتح وإغلاق الطلب */}
        {closedAt && (
          <Typography
            sx={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "rgba(255, 255, 255, 0.4)",
              mb: 1.5,
            }}
          >
            {new Date(openedAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
            {" – "}
            {new Date(closedAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        )}

        {/* تفاصيل الوجبات والأسعار + Scrollbar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            my: 1,
            flexGrow: 1,
            overflowY: "auto",
            pr: 0.5,
            "&::-webkit-scrollbar": { width: 3 },
            "&::-webkit-scrollbar-thumb": {
              bgcolor: "rgba(255, 255, 255, 0.2)",
              borderRadius: 2,
            },
          }}
        >
          {items.map((item) => (
            <Box
              key={item.mealId}
              sx={{
                p: { xs: 0.85, sm: 1 },
                borderRadius: 1.5,
                bgcolor: "rgba(255, 255, 255, 0.02)",
                flexShrink: 0,
              }}
            >
              <PriceLine
                label={`${item.quantity}× ${item.name}`}
                value={`${item.quantity * item.unitPrice} EGP`}
                dark
              />
            </Box>
          ))}
        </Box>

        {/* الجزء السفلي المثبت في قاع الكارت */}
        <Box sx={{ mt: "auto", pt: 0.5 }}>
          {/* الفاصل الزخرفي */}
          <TicketRail dark className="my-2 opacity-30" />

          {/* إجمالي السعر */}
          <Box
            sx={{
              p: { xs: 1.25, sm: 1.5 },
              borderRadius: 2,
              bgcolor: "rgba(34, 197, 94, 0.08)",
              border: "1px solid rgba(34, 197, 94, 0.2)",
            }}
          >
            <PriceLine label="Total" value={`${total} EGP`} dark emphasize />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}