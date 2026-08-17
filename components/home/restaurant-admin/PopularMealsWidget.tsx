import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { mockMeals } from "@/lib/mock-data";
import { PriceLine } from "@/components/ui/PriceLine";

export function PopularMealsWidget() {
  const topMeals = [...mockMeals]
    .sort((a, b) => b.orderCount - a.orderCount)
    .slice(0, 5);

  return (
    <Card component="section" aria-label="Popular meals">
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Most ordered this week
        </Typography>
        <Stack spacing={1.5}>
          {topMeals.map((meal, index) => (
            <PriceLine
              key={meal.id}
              label={`${index + 1}. ${meal.name}`}
              value={`${meal.orderCount} orders · ★ ${meal.rating}`}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
