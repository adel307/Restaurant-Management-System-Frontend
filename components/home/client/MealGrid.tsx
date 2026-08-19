import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { motion, Variants } from "framer-motion";
import { Meal } from "@/lib/types";
import { MealCard } from "./MealCard";

// تحديد النوع كـ Variants حيطير خطأ الـ TypeScript تماماً
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function MealGrid({ meals }: { meals: Meal[] }) {
  if (meals.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Box
          sx={{
            py: 8,
            px: 3,
            textAlign: "center",
            borderRadius: 4,
            bgcolor: "rgba(15, 23, 42, 0.35)",
            backdropFilter: "blur(12px)",
            border: "1px dashed rgba(255, 255, 255, 0.15)",
            my: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              fontWeight: 500,
              fontSize: "1rem",
            }}
          >
            Nothing in this section yet — try another category.
          </Typography>
        </Box>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Grid container spacing={3}>
        {meals.map((meal) => (
          <Grid item xs={12} sm={6} lg={4} key={meal.id}>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              style={{ height: "100%" }}
            >
              <MealCard meal={meal} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
}