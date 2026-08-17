import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { mockRestaurants } from "@/lib/mock-data";

export function SuperAdminDashboard() {
  const totalSales = mockRestaurants.reduce((sum, r) => sum + r.totalSales, 0);
  const totalOrders = mockRestaurants.reduce((sum, r) => sum + r.ordersCount, 0);
  const activeCount = mockRestaurants.filter((r) => r.subscriptionStatus === "active").length;

  const stats = [
    { label: "Registered restaurants", value: `${mockRestaurants.length}` },
    { label: "Active subscriptions", value: `${activeCount}` },
    { label: "Platform sales (all-time)", value: `${totalSales.toLocaleString()} EGP` },
    { label: "Platform orders (all-time)", value: `${totalOrders.toLocaleString()}` },
  ];

  return (
    <Box component="section" aria-label="Platform overview">
      <Typography variant="h5" sx={{ mb: 2 }}>
        Platform overview
      </Typography>
      <Grid container spacing={2}>
        {stats.map((stat) => (
          <Grid item xs={6} lg={3} key={stat.label}>
            <Card>
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "text.secondary",
                    mb: 1,
                  }}
                >
                  {stat.label}
                </Typography>
                <Typography
                  sx={{ fontFamily: "var(--font-mono)", fontSize: 24, fontWeight: 600 }}
                >
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
