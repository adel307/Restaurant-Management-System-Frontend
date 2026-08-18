"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LogoutIcon from "@mui/icons-material/Logout";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "@/lib/theme";
import { useSession } from "@/lib/session-context";

export function TopBar() {
  const router = useRouter();
  const { role, logout } = useSession();

  function handleLogout() {
    logout();
    router.push("/login");
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          // خلفية أزرق داكن زجاجية تناسب الـ Hero بألوان الـ Mesh الزرقاء
          bgcolor: "rgba(1, 11, 38, 0.75)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(59, 130, 246, 0.15)", // Border ناعم بلون إضاءة الأزرق
          px: { xs: 1, sm: 2 },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: { xs: 60, sm: 70 },
          }}
        >
          {/* الزر الأول: My orders */}
          <Box>
            {role === "client" && (
              <Button
                component={Link}
                href="/my-orders"
                startIcon={<ReceiptLongIcon sx={{ fontSize: "1.1rem" }} />}
                sx={{
                  color: "#e2e8f0",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "0.925rem",
                  px: 2,
                  py: 0.8,
                  borderRadius: 2,
                  border: "1px solid rgba(59, 130, 246, 0.25)",
                  bgcolor: "rgba(30, 58, 138, 0.2)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    bgcolor: "rgba(37, 99, 235, 0.25)",
                    borderColor: "rgba(96, 165, 250, 0.5)",
                    color: "#fff",
                    boxShadow: "0 0 12px rgba(37, 99, 235, 0.3)",
                  },
                }}
              >
                My orders
              </Button>
            )}
          </Box>

          {/* الزر الثاني: Log out */}
          <Box>
            <Button
              onClick={handleLogout}
              startIcon={<LogoutIcon sx={{ fontSize: "1.1rem" }} />}
              sx={{
                color: "#94a3b8",
                textTransform: "none",
                fontWeight: 500,
                fontSize: "0.925rem",
                px: 2,
                py: 0.8,
                borderRadius: 2,
                transition: "all 0.25s ease",
                "&:hover": {
                  color: "#f87171",
                  bgcolor: "rgba(239, 68, 68, 0.12)",
                },
              }}
            >
              Log out
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}