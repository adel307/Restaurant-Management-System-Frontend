import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { mockRestaurants } from "@/lib/mock-data";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

export function SuperAdminDashboard() {
  const totalSales = mockRestaurants.reduce((sum, r) => sum + r.totalSales, 0);
  const totalOrders = mockRestaurants.reduce((sum, r) => sum + r.ordersCount, 0);
  const activeCount = mockRestaurants.filter((r) => r.subscriptionStatus === "active").length;

  const stats = [
    { label: "REGISTERED RESTAURANTS", value: `${mockRestaurants.length}` },
    { label: "ACTIVE SUBSCRIPTIONS", value: `${activeCount}` },
    { label: "PLATFORM SALES (ALL-TIME)", value: `${totalSales.toLocaleString()} EGP` },
    { label: "PLATFORM ORDERS (ALL-TIME)", value: `${totalOrders.toLocaleString()}` },
  ];

  return (
    <Box component="section" aria-label="Platform overview">
      {/* عنوان القطاع مع هوفر وتأثير انسيابي */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 2.5,
            fontWeight: 700,
            color: "#ffffff",
            fontSize: "1.35rem",
            letterSpacing: "-0.01em",
            display: "inline-block",
            cursor: "pointer",
            transition: "color 0.3s ease, transform 0.2s ease",
            "&:hover": {
              color: "#90caf9", // يتغير للون الأزرق الفاتح المعتمد في السمة
            },
          }}
        >
          Platform overview
        </Typography>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid container spacing={2.5}>
          {stats.map((stat) => (
            <Grid item xs={12} sm={6} lg={3} key={stat.label}>
              <motion.div variants={itemVariants} whileHover={{ y: -4, transition: { duration: 0.2 } }}>
                <Box
                  sx={{
                    p: 3,
                    height: "100%",
                    borderRadius: "16px",
                    background: "rgba(22, 26, 30, 0.55)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transition: "border-color 0.3s ease, background 0.3s ease",
                    "&:hover": {
                      borderColor: "rgba(255, 255, 255, 0.18)",
                      background: "rgba(30, 35, 42, 0.65)",
                    },
                  }}
                >
                  {/* عنوان المتر "Label" مع هوفر */}
                  <Typography
                    sx={{
                      fontSize: 11,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "rgba(255, 255, 255, 0.5)",
                      mb: 1.5,
                      cursor: "default",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "rgba(255, 255, 255, 0.9)", // يضيء النص عند وقوف الماوس عليه
                      },
                    }}
                  >
                    {stat.label}
                  </Typography>

                  {/* القيمة أو الرقم "Value" مع هوفر */}
                  <Typography
                    sx={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: { xs: 24, md: 28 },
                      fontWeight: 700,
                      color: "#ffffff",
                      letterSpacing: "-0.02em",
                      cursor: "default",
                      transition: "color 0.3s ease, text-shadow 0.3s ease",
                      "&:hover": {
                        color: "#90caf9", // يتغير لون الرقم إلى الأزرق عند الهوفر
                        textShadow: "0 0 12px rgba(144, 202, 249, 0.4)", // إضاءة خفيفة
                      },
                    }}
                  >
                    {stat.value}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}