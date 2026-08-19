"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import Zoom from "@mui/material/Zoom";
import { ThemeProvider } from "@mui/material/styles";
import { useSession } from "@/lib/session-context";
import { TopBar } from "@/components/ui/TopBar";
import { TicketRail } from "@/components/ui/TicketRail";
import { darkTheme } from "@/lib/theme";

// Icons
import RestaurantIcon from "@mui/icons-material/Restaurant";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import GroupIcon from "@mui/icons-material/Group";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SecurityIcon from "@mui/icons-material/Security";

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
  const features = [
    {
      icon: <AnalyticsIcon sx={{ fontSize: 32, color: "primary.main" }} />,
      title: "تحليلات المبيعات لحظياً",
      description: "متابعة شاملة لجميع الطلبات والإيرادات وأداء المطبخ لحظة بلحظة.",
    },
    {
      icon: <RestaurantIcon sx={{ fontSize: 32, color: "primary.main" }} />,
      title: "إدارة القوائم والطلبات",
      description: "تجربة سلسة للعملاء لاستعراض المنيو والطلب مباشرة برمز QR.",
    },
    {
      icon: <GroupIcon sx={{ fontSize: 32, color: "primary.main" }} />,
      title: "إدارة الطاقم والصلاحيات",
      description: "تنظيم عمل الموظفين والطهاة مع تحديد الأدوار لكل مستخدم بدقة.",
    },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          // دمج الصورة مع طبقة تظليل داكنة (Overlay) لضمان وضوح النصوص
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(18, 18, 18, 0.85) 0%,
            rgba(18, 18, 18, 0.75) 50%,
            rgba(18, 18, 18, 0.95) 100%
          ), url('/res.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // تجعل الصورة ثابتة أثناء التمرير (Parallax Effect)
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 3, sm: 6 }, py: { xs: 6, md: 10 } }}>
          {/* Top Brand Tag */}
          <Fade in timeout={600}>
            <Stack direction="row" justifyContent="center" mb={3}>
              <Chip
                icon={<SecurityIcon fontSize="small" />}
                label="Restaurant Management System"
                variant="outlined"
                color="primary"
                sx={{
                  px: 1,
                  py: 2,
                  borderRadius: 8,
                  bgcolor: "rgba(18, 18, 18, 0.6)",
                  backdropFilter: "blur(10px)",
                  borderColor: "rgba(144, 202, 249, 0.4)",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                }}
              />
            </Stack>
          </Fade>

          {/* Hero Section */}
          <Slide direction="down" in timeout={800}>
            <Stack spacing={2} textAlign="center" alignItems="center" maxWidth={800} mx="auto" mb={8}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2.2rem", sm: "3.2rem", md: "4rem" },
                  background: "linear-gradient(135deg, #FFFFFF 40%, #90caf9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.2,
                  dropShadow: "0 4px 20px rgba(0,0,0,0.8)",
                }}
              >
                أفضل نظام لإدارة المطاعم والتعامل مع العملاء
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.85)",
                  maxWidth: 650,
                  fontWeight: 400,
                  fontSize: { xs: "0.95rem", sm: "1.15rem" },
                  lineHeight: 1.6,
                  textShadow: "0 2px 10px rgba(0,0,0,0.7)",
                }}
              >
                منظومة ذكية متكاملة تجمع بين تجربة العميل الممتعة، وإدارة التشغيل الداخلي، وتحليلات الأداء المتقدمة للمطاعم الحديثة.
              </Typography>

              {/* Action Area */}
              <Box sx={{ pt: 2 }}>
                <Zoom in timeout={1000}>
                  <Button
                    component={Link}
                    href="/login"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      px: 5,
                      py: 1.6,
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      borderRadius: 4,
                      backdropFilter: "blur(4px)",
                      boxShadow: "0 8px 25px rgba(25, 118, 210, 0.5)",
                      transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 12px 30px rgba(25, 118, 210, 0.7)",
                      },
                    }}
                  >
                    تسجيل الدخول للنظام
                  </Button>
                </Zoom>
              </Box>
            </Stack>
          </Slide>

          {/* Features Grid */}
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Fade in timeout={1000 + index * 200}>
                  <Card
                    sx={{
                      height: "100%",
                      bgcolor: "rgba(18, 18, 18, 0.65)", // خففنا الخصائص الشفافة لتناسب خلفية الصورة
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: 4,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        borderColor: "rgba(144, 202, 249, 0.5)",
                        bgcolor: "rgba(18, 18, 18, 0.8)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: "right" }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 3,
                          bgcolor: "rgba(25, 118, 210, 0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2.5,
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: "#fff" }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)", lineHeight: 1.7 }}>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>
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