"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { useSession } from "@/lib/session-context";
import { TopBar } from "@/components/ui/TopBar";
import { TicketRail } from "@/components/ui/TicketRail";
import { darkTheme } from "@/lib/theme";

import { HeroSection } from "@/components/home/client/HeroSection";
import { ScrollStory } from "@/components/home/client/ScrollStory";
import { MenuSection } from "@/components/home/client/MenuSection";
import { Footer } from "@/components/home/client/Footer";

import { AnalyticsDashboard } from "@/components/home/restaurant-admin/AnalyticsDashboard";
import { PopularMealsWidget } from "@/components/home/restaurant-admin/PopularMealsWidget";
import { StaffManagementSection } from "@/components/home/restaurant-admin/StaffManagementSection";

import { SuperAdminDashboard } from "@/components/home/website-admin/SuperAdminDashboard";
import { RestaurantsDirectoryTable } from "@/components/home/website-admin/RestaurantsDirectoryTable";
import { SystemControlPanel } from "@/components/home/website-admin/SystemControlPanel";

function LoggedOutPrompt() {
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
          <Typography
            variant="overline"
            sx={{ color: "primary.main", letterSpacing: "0.3em", fontFamily: "var(--font-mono)" }}
          >
            RMS
          </Typography>
          <Typography variant="h4">Sign in to see your view</Typography>
          <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
            This home page adapts to whoever&apos;s signed in — diner, restaurant
            admin, or platform admin.
          </Typography>
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

export default function HomePage() {
  const { role } = useSession();

  if (!role) {
    return <LoggedOutPrompt />;
  }

  if (role === "client") {
    return (
      <Box component="main" sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <TopBar />
        <HeroSection />
        <ScrollStory />
        <MenuSection />
        <Footer />
      </Box>
    );
  }

  if (role === "restaurant-admin") {
    return (
      <Box component="main" sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <TopBar />
        <Box sx={{ px: { xs: 3, sm: 5 }, py: 5, maxWidth: 1152, mx: "auto" }}>
          <Stack spacing={4}>
            <AnalyticsDashboard />
            <TicketRail />
            <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { lg: "1fr 1fr" } }}>
              <PopularMealsWidget />
              <StaffManagementSection />
            </Box>
          </Stack>
        </Box>
      </Box>
    );
  }

  // website-admin
  return (
    <ThemeProvider theme={darkTheme}>
      <Box component="main" sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <TopBar />
        <Box sx={{ px: { xs: 3, sm: 5 }, py: 5, maxWidth: 1152, mx: "auto" }}>
          <Stack spacing={4}>
            <SuperAdminDashboard />
            <TicketRail dark />
            <RestaurantsDirectoryTable />
            <SystemControlPanel />
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
