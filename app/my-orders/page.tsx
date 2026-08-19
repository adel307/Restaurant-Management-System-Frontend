"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { ThemeProvider } from "@mui/material/styles";
import { useSession } from "@/lib/session-context";
import { mockOrderHistory } from "@/lib/mock-data";
import { TopBar } from "@/components/ui/TopBar";
import { SessionOrderSummary } from "@/components/orders/SessionOrderSummary";
import { OrderHistoryList } from "@/components/orders/OrderHistoryList";
import { TicketRail } from "@/components/ui/TicketRail";
import darkTheme from "@/lib/theme";

export default function MyOrdersPage() {
  const { role, currentOrderItems } = useSession();

  // 1. واجهة تنبيه تسجيل الدخول في حال لم يكن المستخدم Client
  if (role !== "client") {
    return (
      <ThemeProvider theme={darkTheme}>
        <Box
          component="main"
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 3,
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.4) 0%,
              rgba(0, 0, 0, 0.65) 100%
            ), url('/res5.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Slide direction="up" in timeout={600}>
            <Card
              sx={{
                width: "100%",
                maxWidth: 420,
                bgcolor: "rgba(18, 22, 31, 0.8)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                borderRadius: 4,
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
              }}
            >
              <CardContent sx={{ p: { xs: 4, sm: 5 }, textAlign: "center" }}>
                <Stack spacing={3} alignItems="center">
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "#ffffff",
                      fontSize: { xs: "1.25rem", sm: "1.5rem" },
                    }}
                  >
                    Please, sign in to see your orders
                  </Typography>
                  <Button
                    component={Link}
                    href="/login"
                    variant="contained"
                    size="large"
                    sx={{
                      borderRadius: 2.5,
                      px: 4,
                      py: 1.2,
                      fontWeight: 600,
                      textTransform: "none",
                      boxShadow: "0 8px 20px rgba(34, 197, 94, 0.3)",
                    }}
                  >
                    Go to sign in
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Slide>
        </Box>
      </ThemeProvider>
    );
  }

  // 2. واجهة الطلبات الرئيسية للمستخدم المعتمد
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.35) 0%,
            rgba(0, 0, 0, 0.55) 100%
          ), url('/res5.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <TopBar />

        <Fade in timeout={900}>
          <Box
            sx={{
              maxWidth: 1020,
              mx: "auto",
              width: "100%",
              px: { xs: 2.5, sm: 5 },
              py: { xs: 4, sm: 6 },
            }}
          >
            <Slide direction="up" in timeout={800}>
              <Card
                sx={{
                  bgcolor: "rgba(18, 22, 31, 0.78)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  borderRadius: 4,
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
                  p: { xs: 2.5, sm: 4 },
                }}
              >
                {/* ملخص الجلسة الحالية والطلبات النشطة */}
                <SessionOrderSummary items={currentOrderItems} />

                {/* الفاصل الزخرفي */}
                <TicketRail className="my-8 opacity-40" />

                {/* سجّل الطلبات السابقة */}
                <OrderHistoryList orders={mockOrderHistory} />
              </Card>
            </Slide>
          </Box>
        </Fade>
      </Box>
    </ThemeProvider>
  );
}