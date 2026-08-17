import Link from "next/link";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Meal } from "@/lib/types";

export function MealCard({ meal }: { meal: Meal }) {
  return (
    <Card>
      <CardActionArea component={Link} href={`/meals/${meal.id}`}>
        <Box
          aria-label={meal.imageAlt}
          role="img"
          sx={{
            height: 144,
            background: "linear-gradient(135deg, rgba(138,90,68,0.25), rgba(47,95,224,0.15))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontStyle: "italic", color: "rgba(138,90,68,0.5)" }}
          >
            {meal.name.charAt(0)}
          </Typography>
        </Box>
        <CardContent>
          <Typography variant="h6" component="h3" sx={{ mb: 1.5, lineHeight: 1.3 }}>
            {meal.name}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <Typography
              sx={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "text.secondary" }}
            >
              #{meal.id.replace("meal-", "")}
            </Typography>
            <Typography sx={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>
              {meal.price} EGP
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
