import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { SessionOrder } from "@/lib/types";
import { OrderItemCard } from "./OrderItemCard";

export function OrderHistoryList({ orders }: { orders: SessionOrder[] }) {
  const closedOrders = orders.filter((order) => order.status === "closed");

  return (
    <Box component="section" aria-label="Order history" sx={{ mt: 4 }}>
      {/* عنوان السجل */}
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: 700,
          color: "#ffffff",
          mb: 3,
          letterSpacing: "-0.01em",
        }}
      >
        Past Orders
      </Typography>

      {/* حالة عدم وجود طلبات سابقة */}
      {closedOrders.length === 0 ? (
        <Fade in timeout={600}>
          <Box
            sx={{
              py: 4,
              px: 3,
              textAlign: "center",
              borderRadius: 3,
              bgcolor: "rgba(255, 255, 255, 0.02)",
              border: "1px dashed rgba(255, 255, 255, 0.12)",
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                color: "rgba(255, 255, 255, 0.5)",
                fontFamily: "var(--font-body)",
              }}
            >
              No completed sessions yet.
            </Typography>
          </Box>
        </Fade>
      ) : (
        /* شبكة الكروت: عمود واحد للموبايل وعمودين للشاشات الأكبر */
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // عمود واحد على الشاشات الصغيرة (الموبايل)
              sm: "repeat(2, 1fr)", // عمودين ابتداءً من الشاشات المتوسطة (Tablets & Desktops)
            },
            gap: 2.5, // المسافة بين الكروت
            alignItems: "stretch", // توحيد ارتفاع الكروت في نفس الصف
          }}
        >
          {closedOrders.map((order, index) => (
            <Slide
              key={order.id}
              direction="up"
              in
              timeout={500 + index * 100} // تأخير تدريجي لكل كارت
            >
              <Box sx={{ height: "100%" }}>
                <OrderItemCard
                  orderId={order.id}
                  items={order.items}
                  openedAt={order.openedAt}
                  closedAt={order.closedAt}
                />
              </Box>
            </Slide>
          ))}
        </Box>
      )}
    </Box>
  );
}