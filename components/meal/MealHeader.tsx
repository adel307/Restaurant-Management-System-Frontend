import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Meal } from "@/lib/types";

export function MealHeader({ meal }: { meal: Meal }) {
  return (
    <Box>
      <Box
        aria-label={meal.imageAlt}
        role="img"
        sx={{
          height: 256,
          borderRadius: 1,
          background: "linear-gradient(135deg, rgba(138,90,68,0.25), rgba(47,95,224,0.15))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
        }}
      >
        <Typography variant="h2" sx={{ fontStyle: "italic", color: "rgba(138,90,68,0.5)" }}>
          {meal.name.charAt(0)}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 2 }}>
        <Typography variant="h4">{meal.name}</Typography>
        <Typography
          sx={{ fontFamily: "var(--font-mono)", fontSize: 24, fontWeight: 600, whiteSpace: "nowrap" }}
        >
          {meal.price} EGP
        </Typography>
      </Box>
      <Typography sx={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "text.secondary", mt: 0.5 }}>
        Order #{meal.id.replace("meal-", "")} · ★ {meal.rating}
      </Typography>
    </Box>
  );
}
