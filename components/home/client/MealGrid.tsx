import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Meal } from "@/lib/types";
import { MealCard } from "./MealCard";

export function MealGrid({ meals }: { meals: Meal[] }) {
  if (meals.length === 0) {
    return (
      <Typography sx={{ color: "text.secondary", textAlign: "center", py: 6 }}>
        Nothing in this section yet — try another category.
      </Typography>
    );
  }

  return (
    <Grid container spacing={2.5}>
      {meals.map((meal) => (
        <Grid item xs={12} sm={6} lg={4} key={meal.id}>
          <MealCard meal={meal} />
        </Grid>
      ))}
    </Grid>
  );
}
