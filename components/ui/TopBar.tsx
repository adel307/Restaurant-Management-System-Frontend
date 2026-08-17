"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import theme, { darkTheme } from "@/lib/theme";
import { useSession } from "@/lib/session-context";

const ROLE_LABELS = {
  client: "Client",
  "restaurant-admin": "Restaurant Admin",
  "website-admin": "Website Admin",
};

export function TopBar() {
  const router = useRouter();
  const { role, logout } = useSession();

  function handleLogout() {
    logout();
    router.push("/login");
  }

  const dark = role !== "client";

  return (
    <ThemeProvider theme={dark ? darkTheme : theme}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            component={Link}
            href="/"
            variant="h6"
            sx={{ textDecoration: "none", color: "text.primary" }}
          >
            RMS
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            {role === "client" && (
              <Button component={Link} href="/my-orders" color="inherit" size="small">
                My orders
              </Button>
            )}
            {role && (
              <Chip
                label={ROLE_LABELS[role]}
                size="small"
                color="primary"
                variant="outlined"
              />
            )}
            <Button onClick={handleLogout} color="inherit" size="small">
              Log out
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
