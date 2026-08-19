"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { Meal } from "@/lib/types";

export function MealDescription({ meal }: { meal: Meal }) {
  return (
    <Box sx={{ width: "100%" }}>
      {/* وصف الوجبة */}
      <Typography
        sx={{
          fontFamily: "var(--font-body)",
          fontSize: { xs: "0.938rem", sm: "1rem" },
          color: "rgba(255, 255, 255, 0.8)",
          lineHeight: 1.65,
          mb: { xs: 2.5, sm: 3 },
        }}
      >
        {meal.description}
      </Typography>

      {/* قائمة المكونات مع تأثير الإضاءة (Glow) عند مرور الماوس */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 1, sm: 1.25 },
          mb: { xs: 2.5, sm: 3 },
        }}
      >
        {meal.ingredients.map((ingredient) => (
          <Box
            key={ingredient}
            sx={{
              px: { xs: 1.5, sm: 1.75 },
              py: { xs: 0.5, sm: 0.75 },
              borderRadius: 5,
              fontSize: { xs: 11, sm: 12 },
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.75)",
              bgcolor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(8px)",
              transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "default",
              userSelect: "none",

              /* تأثير الإضاءة وتغيير اللون عند الـ Hover */
              "&:hover": {
                color: "#60a5fa", // لون نص مضيء (Sky Blue)
                bgcolor: "rgba(96, 165, 250, 0.12)",
                borderColor: "rgba(96, 165, 250, 0.5)",
                boxShadow:
                  "0 0 12px rgba(96, 165, 250, 0.35), 0 0 4px rgba(96, 165, 250, 0.2)",
                transform: "translateY(-1.5px)",
              },
            }}
          >
            {ingredient}
          </Box>
        ))}
      </Box>

      {/* عدد السعرات الحرارية */}
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 0.75,
          px: 1.5,
          py: 0.5,
          borderRadius: 2,
          bgcolor: "rgba(249, 115, 22, 0.1)",
          border: "1px solid rgba(249, 115, 22, 0.25)",
          "&:hover": {
            color: "rgb(249, 115, 22)",
            bgcolor: "rgba(249, 115, 22,0.12)",
            borderColor: "rgba(249, 115, 22,0.5)",
            boxShadow:
              "0 0 12px rgba(249, 115, 22,0.35), 0 0 4px rgba(249, 115, 22,0.2)",
            transform: "translateY(-1.5px)",
          },
        }}
      >
        <LocalFireDepartmentIcon
          sx={{ 
            fontSize: 16, color: "#f97316" }}
        />
        <Typography
          sx={{
            fontFamily: "var(--font-mono)",
            fontSize: { xs: 11, sm: 12 },
            fontWeight: 600,
            color: "#f97316",
            
          }}
        >
          {meal.calories} kcal
        </Typography>
      </Box>
    </Box>
  );
}