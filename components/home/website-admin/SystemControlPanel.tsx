import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Box from "@mui/material/Box";
import { motion, Variants } from "framer-motion";

// إعدادات الحركة والتتابع عند التمرير (Scroll-triggered animation)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

const ACTIONS = [
  { label: "Add restaurant", description: "Register a new restaurant on the platform" },
  { label: "Edit restaurant", description: "Update details for an existing restaurant" },
  { label: "Freeze account", description: "Suspend a restaurant's access temporarily" },
  { label: "Manage permissions", description: "Adjust what a restaurant admin can do" },
];

export function SystemControlPanel() {
  return (
    <Box component="section" aria-label="System controls">
      {/* عنوان المكون مع تأثير الهوفر */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 2.5,
            fontWeight: 700,
            color: "#ffffff",
            fontSize: "1.25rem",
            letterSpacing: "-0.01em",
            display: "inline-block",
            cursor: "pointer",
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#90caf9",
            },
          }}
        >
          System controls
        </Typography>
      </motion.div>

      {/* الحاوية مع Framer Motion للأزرار */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid container spacing={2}>
          {ACTIONS.map((action) => (
            <Grid item xs={12} sm={6} key={action.label}>
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
              >
                <ButtonBase
                  sx={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    p: 2.5,
                    borderRadius: "14px",
                    background: "rgba(22, 26, 30, 0.55)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                    transition: "all 0.3s ease",
                    // استهداف النصوص والألوان عند الهوفر على الكارت
                    "&:hover": {
                      borderColor: "rgba(144, 202, 249, 0.4)",
                      background: "rgba(30, 35, 42, 0.75)",
                      boxShadow: "0 10px 35px 0 rgba(0, 0, 0, 0.45)",
                      "& .action-title": {
                        color: "#90caf9",
                        textShadow: "0 0 10px rgba(144, 202, 249, 0.3)",
                      },
                      "& .action-desc": {
                        color: "rgba(255, 255, 255, 0.85)",
                      },
                    },
                  }}
                >
                  <Box>
                    {/* عنوان الإجراء */}
                    <Typography
                      className="action-title"
                      sx={{
                        fontWeight: 600,
                        fontSize: 15,
                        mb: 0.5,
                        color: "#ffffff",
                        transition: "color 0.3s ease, text-shadow 0.3s ease",
                      }}
                    >
                      {action.label}
                    </Typography>

                    {/* وصف الإجراء */}
                    <Typography
                      className="action-desc"
                      sx={{
                        fontSize: 13,
                        color: "rgba(255, 255, 255, 0.5)",
                        transition: "color 0.3s ease",
                        lineHeight: 1.5,
                      }}
                    >
                      {action.description}
                    </Typography>
                  </Box>
                </ButtonBase>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}