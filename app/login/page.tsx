"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "@/lib/theme";
import { Role } from "@/lib/types";
import { RoleSelectorToggle } from "@/components/auth/RoleSelectorToggle";
import { ClientLoginForm } from "@/components/auth/ClientLoginForm";
import { RestaurantAdminLoginForm } from "@/components/auth/RestaurantAdminLoginForm";
import { WebsiteAdminLoginForm } from "@/components/auth/WebsiteAdminLoginForm";

export default function LoginPage() {
  const [role, setRole] = useState<Role>("client");

  return (
    <ThemeProvider theme={darkTheme}>
      {/* 1. أنيميشن ظهور الخلفية وصورة المطعم الواضحة */}
      <Fade in timeout={1000}>
        <Box
          component="main"
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            px: 2,
            py: 6,
            // خلفية خفيفة جداً للحفاظ على وضوح صورة المطعم تماماً
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.25) 0%,
              rgba(0, 0, 0, 0.45) 100%
            ), url('/images.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* 2. سكشن إعلامي / كلام إنشائي عن نظام إدارة المطاعم */}
          <Fade in timeout={1200}>
            <Box
              textAlign="center"
              sx={{
                maxWidth: 600,
                mb: 4,
                color: "#ffffff",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.7)", // إضافة ظل للنص لضمان وضوح القراءة فوق الصورة
              }}
            >
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.8rem", sm: "2.4rem" },
                  letterSpacing: "-0.02em",
                  mb: 1.5,
                }}
              >
                Smart Restaurant Management
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.95rem", sm: "1.1rem" },
                  color: "rgba(255, 255, 255, 0.9)",
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                Streamline your operations, manage orders seamlessly, and elevate customer dining experiences with our all-in-one restaurant system.
              </Typography>
            </Box>
          </Fade>

          {/* 3. أنيميشن صعود كارت تسجيل الدخول */}
          <Slide direction="up" in timeout={800}>
            <Card
              sx={{
                width: "100%",
                maxWidth: 440,
                // خلفية الزجاج المعتم مع الحفاظ على وضوح الكارت نفسه
                bgcolor: "rgba(18, 22, 31, 0.75)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: 4,
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
                overflow: "hidden",
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 4.5 } }}>
                {/* Role Selector */}
                <Box mb={3}>
                  <RoleSelectorToggle value={role} onChange={setRole} />
                </Box>
                

                {/* Login Forms */}
                {role === "client" && <ClientLoginForm />}
                {role === "restaurant-admin" && <RestaurantAdminLoginForm />}
                {role === "website-admin" && <WebsiteAdminLoginForm />}
              </CardContent>
            </Card>
          </Slide>
        </Box>
      </Fade>
    </ThemeProvider>
  );
}