"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { useSession } from "@/lib/session-context";
import { mockOrderHistory } from "@/lib/mock-data";
import { TopBar } from "@/components/ui/TopBar";
import { SessionOrderSummary } from "@/components/orders/SessionOrderSummary";
import { OrderHistoryList } from "@/components/orders/OrderHistoryList";
import { TicketRail } from "@/components/ui/TicketRail";
import { darkTheme } from "@/lib/theme";

export default function MyOrdersPage() {
  const { role, currentOrderItems } = useSession();

  if (role !== "client") {
    return (
      <ThemeProvider theme={darkTheme}>
        <Box
          component="main"
          sx={{
            minHeight: "100vh",
            bgcolor: "background.default",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 3,
          }}
        >
          <Stack spacing={2} sx={{ textAlign: "center", maxWidth: 380 }}>
            <Typography variant="h5">Sign in as a client to see your orders</Typography>
            <Box>
              <Button component={Link} href="/login" variant="contained" size="large">
                Go to sign in
              </Button>
            </Box>
          </Stack>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <Box component="main" sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <TopBar />
      <Box sx={{ maxWidth: 672, mx: "auto", px: { xs: 3, sm: 5 }, py: 5 }}>
        <SessionOrderSummary items={currentOrderItems} />
        <TicketRail className="my-8" />
        <OrderHistoryList orders={mockOrderHistory} />
      </Box>
    </Box>
  );
}
