import Link from "next/link";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Meal } from "@/lib/types";

export function MealCard({ meal }: { meal: Meal }) {
  const imageUrl = meal.imageUrl || "/res3.jpg";

  return (
    <Card
      sx={{
        borderRadius: 3.5,
        bgcolor: "rgba(18, 22, 31, 0.75)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: "rgba(255, 255, 255, 0.3)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
          "& .meal-card-image": {
            transform: "scale(1.08)",
          },
          "& .meal-title": {
            color: "primary.main",
          },
        },
      }}
    >
      <CardActionArea component={Link} href={`/meals/${meal.id}`}>
        {/* سكشن الصورة مع الأنيميشن */}
        <Box
          sx={{
            height: 180,
            width: "100%",
            position: "relative",
            overflow: "hidden",
            bgcolor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <Box
            component="img"
            className="meal-card-image"
            src={imageUrl}
            alt={meal.imageAlt || meal.name}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
          
          {/* طبقة تظليل ناعمة متدرجة أسفل الصورة لتسهيل القراءة */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(18, 22, 31, 0.9) 0%, transparent 60%)",
            }}
          />
        </Box>

        {/* تفاصيل الوجبة */}
        <CardContent sx={{ p: 2.5 }}>
          <Typography
            variant="h6"
            component="h3"
            className="meal-title"
            sx={{
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "#ffffff",
              mb: 1,
              lineHeight: 1.3,
              transition: "color 0.25s ease",
            }}
          >
            {meal.name}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1.5,
            }}
          >
            <Typography
              sx={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "rgba(255, 255, 255, 0.4)",
                letterSpacing: "0.05em",
              }}
            >
              #{meal.id.replace("meal-", "")}
            </Typography>

            <Typography
              sx={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "1.05rem",
                color: "#22c55e", // لون أخضر جذاب للسعر
                bgcolor: "rgba(34, 197, 94, 0.1)",
                px: 1.2,
                py: 0.4,
                borderRadius: 1.5,
                border: "1px solid rgba(34, 197, 94, 0.2)",
              }}
            >
              {meal.price} EGP
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}