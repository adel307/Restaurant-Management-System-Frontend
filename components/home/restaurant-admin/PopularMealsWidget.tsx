import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { mockMeals } from "@/lib/mock-data";
import { PriceLine } from "@/components/ui/PriceLine";

// Motion Wrappers
const MotionCard = motion.create(Card);
const MotionBox = motion.create(Box);

export function PopularMealsWidget() {
  const topMeals = [...mockMeals]
    .sort((a, b) => b.orderCount - a.orderCount)
    .slice(0, 5);

  return (
    <Box component="section" sx={{ height: "100%" }}>
      <MotionCard
        aria-label="Popular meals"
        // Entry & Scroll Animations
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        sx={{
          height: "100%",
          /* الشفافية المخفضة المعتمدة */
          bgcolor: "rgba(18, 22, 31, 0.45)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: { xs: 2.5, sm: 3 },
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",

          /* تأثير Glow للكارت بالكامل عند الـ Hover */
          "&:hover": {
            borderColor: "rgba(255, 255, 255, 0.22)",
            boxShadow:
              "0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.08)",
          },
        }}
      >
        <CardContent
          sx={{
            p: { xs: 2, sm: 2.5 },
            "&:last-child": { pb: { xs: 2, sm: 2.5 } },
          }}
        >
          {/* الهيدر مع الأيقونة */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: { xs: 1.5, sm: 2 },
            }}
          >
            <LocalFireDepartmentIcon
              sx={{ color: "#f97316", fontSize: { xs: 20, sm: 22 } }}
            />
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: 16, sm: 18 },
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.01em",
                fontFamily: "var(--font-body)",
              }}
            >
              Most ordered this week
            </Typography>
          </Box>

          {/* قائمة الوجبات مع تأثير الحركة والإضاءة لكل عنصر */}
          <Stack spacing={1}>
            {topMeals.map((meal, index) => (
              <MotionBox
                key={meal.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 4 }} // انزلاق الـ Hover مع Framer Motion
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + index * 0.07,
                  ease: "easeOut",
                }}
                sx={{
                  p: { xs: 1, sm: 1.25 },
                  borderRadius: 2,
                  bgcolor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  transition:
                    "background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                  cursor: "default",

                  /* إضاءة عنصر الوجبة عند الـ Hover */
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.08)",
                    borderColor: "rgba(255, 255, 255, 0.18)",
                    boxShadow: "0 0 12px rgba(255, 255, 255, 0.08)",
                  },
                }}
              >
                <PriceLine
                  label={`${index + 1}. ${meal.name}`}
                  value={`${meal.orderCount} orders · ★ ${meal.rating}`}
                  dark
                />
              </MotionBox>
            ))}
          </Stack>
        </CardContent>
      </MotionCard>
    </Box>
  );
}