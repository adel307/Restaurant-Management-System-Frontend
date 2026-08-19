import { motion, type Variants } from "framer-motion";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { mockAnalytics } from "@/lib/mock-data";

// Motion Wrappers
const MotionBox = motion.create(Box);
const MotionCard = motion.create(Card);

const STATS = [
  {
    label: "Sales today",
    value: `${mockAnalytics.totalSalesToday.toLocaleString()} EGP`,
    highlight: false,
  },
  {
    label: "Orders today",
    value: `${mockAnalytics.totalOrdersToday}`,
    highlight: false,
  },
  {
    label: "Avg. order value",
    value: `${mockAnalytics.averageOrderValue} EGP`,
    highlight: false,
  },
  {
    label: "7-day trend",
    value: `+${mockAnalytics.weeklyTrendPct}%`,
    highlight: true,
  },
];

// Variants للتتابع الزمني (Staggering)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function AnalyticsDashboard() {
  return (
    <Box component="section" aria-label="Analytics" sx={{ width: "100%" }}>
      {/* عنوان القسم */}
      <MotionBox
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: { xs: 2, sm: 2.5 },
            fontSize: { xs: 18, sm: 22 },
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.01em",
            fontFamily: "var(--font-body)",
          }}
        >
          Today at a glance
        </Typography>
      </MotionBox>

      {/* شبكة البطاقات مع Staggered Motion */}
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Grid container spacing={{ xs: 1.5, sm: 2, md: 2.5 }}>
          {STATS.map((stat) => (
            <Grid item xs={6} lg={3} key={stat.label}>
              <MotionCard
                variants={itemVariants}
                whileHover={{ y: -4 }}
                sx={{
                  height: "100%",
                  bgcolor: "rgba(18, 22, 31, 0.45)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: { xs: 2.5, sm: 3 },
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",

                  "&:hover": {
                    borderColor: "rgba(255, 255, 255, 0.25)",
                    boxShadow:
                      "0 12px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 255, 255, 0.08)",
                    "& .stat-value": {
                      color: stat.highlight ? "#4ade80" : "#ffffff",
                      textShadow: stat.highlight
                        ? "0 0 12px rgba(74, 222, 128, 0.4)"
                        : "0 0 10px rgba(255, 255, 255, 0.3)",
                    },
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: { xs: 2, sm: 2.5 },
                    "&:last-child": { pb: { xs: 2, sm: 2.5 } },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 11 },
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "rgba(255, 255, 255, 0.5)",
                      mb: { xs: 1, sm: 1.5 },
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {stat.label}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {stat.highlight && (
                      <TrendingUpIcon
                        sx={{
                          fontSize: { xs: 18, sm: 22 },
                          color: "#22c55e",
                        }}
                      />
                    )}
                    <Typography
                      className="stat-value"
                      sx={{
                        fontFamily: "var(--font-mono)",
                        fontSize: { xs: 18, sm: 22, md: 24 },
                        fontWeight: 700,
                        color: stat.highlight
                          ? "#22c55e"
                          : "rgba(255, 255, 255, 0.95)",
                        transition:
                          "color 0.25s ease, text-shadow 0.25s ease",
                        lineHeight: 1.2,
                      }}
                    >
                      {stat.value}
                    </Typography>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </MotionBox>
    </Box>
  );
}