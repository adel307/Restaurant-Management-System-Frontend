import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { mockAnalytics } from "@/lib/mock-data";

const STATS = [
  { label: "Sales today", value: `${mockAnalytics.totalSalesToday.toLocaleString()} EGP` },
  { label: "Orders today", value: `${mockAnalytics.totalOrdersToday}` },
  { label: "Avg. order value", value: `${mockAnalytics.averageOrderValue} EGP` },
  { label: "7-day trend", value: `+${mockAnalytics.weeklyTrendPct}%` },
];

export function AnalyticsDashboard() {
  return (
    <Box component="section" aria-label="Analytics">
      <Typography variant="h5" sx={{ mb: 2 }}>
        Today at a glance
      </Typography>
      <Grid container spacing={2}>
        {STATS.map((stat) => (
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
