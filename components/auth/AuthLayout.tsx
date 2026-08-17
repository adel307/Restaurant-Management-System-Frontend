import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import theme, { darkTheme } from "@/lib/theme";
import { TicketRail } from "@/components/ui/TicketRail";

export function AuthLayout({ children }: { children: ReactNode }) {
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
          px: 2,
          py: 8,
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 420 }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              variant="overline"
              sx={{ color: "primary.main", letterSpacing: "0.3em", fontFamily: "var(--font-mono)" }}
            >
              Order No. 001
            </Typography>
            <Typography variant="h3" sx={{ color: "text.primary", mt: 1 }}>
              RMS
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
              Restaurant Management System
            </Typography>
          </Box>
          <ThemeProvider theme={theme}>
            <Paper sx={{ p: 4 }}>{children}</Paper>
          </ThemeProvider>
          <TicketRail dark className="opacity-40" />
          <Typography
            align="center"
            sx={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "text.secondary" }}
          >
            Every screen starts as a ticket.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
