import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { mockRestaurants } from "@/lib/mock-data";
import { Restaurant } from "@/lib/types";
import { motion, Variants } from "framer-motion";

// تعريف إعدادات الألوان المخصصة والتأثيرات لكل حالة
const STATUS_CONFIG: Record<
  Restaurant["subscriptionStatus"],
  {
    label: string;
    color: string;
    bg: string;
    border: string;
    hoverBg: string;
    glow: string;
  }
> = {
  active: {
    label: "Active",
    color: "#4caf50",
    bg: "rgba(76, 175, 80, 0.12)",
    border: "rgba(76, 175, 80, 0.3)",
    hoverBg: "rgba(76, 175, 80, 0.22)",
    glow: "0 0 12px rgba(76, 175, 80, 0.5)",
  },
  trial: {
    label: "Trial",
    color: "#ff9800",
    bg: "rgba(255, 152, 0, 0.12)",
    border: "rgba(255, 152, 0, 0.3)",
    hoverBg: "rgba(255, 152, 0, 0.22)",
    glow: "0 0 12px rgba(255, 152, 0, 0.5)",
  },
  suspended: {
    label: "Suspended",
    color: "#f44336",
    bg: "rgba(244, 67, 54, 0.12)",
    border: "rgba(244, 67, 54, 0.3)",
    hoverBg: "rgba(244, 67, 54, 0.22)",
    glow: "0 0 12px rgba(244, 67, 54, 0.5)",
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

export function RestaurantsDirectoryTable() {
  return (
    <Box component="section" aria-label="Restaurants directory">
      {/* عنوان المكون */}
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
          Restaurants directory
        </Typography>
      </motion.div>

      {/* حاوية الجدول بتصميم Glassmorphism */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <TableContainer
          sx={{
            borderRadius: "16px",
            background: "rgba(22, 26, 30, 0.55)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
            overflow: "hidden",
          }}
        >
          <Table size="medium">
            <TableHead>
              <TableRow
                sx={{
                  borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                  background: "rgba(255, 255, 255, 0.03)",
                }}
              >
                {["Restaurant", "Address", "Contact", "Status", "Staff", "Orders"].map((header) => (
                  <TableCell
                    key={header}
                    sx={{
                      color: "rgba(255, 255, 255, 0.5)",
                      fontSize: 11,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      borderBottom: "none",
                      py: 2,
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody
              component={motion.tbody}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {mockRestaurants.map((restaurant) => {
                const status = STATUS_CONFIG[restaurant.subscriptionStatus];

                return (
                  <TableRow
                    key={restaurant.id}
                    component={motion.tr}
                    variants={rowVariants}
                    sx={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                      transition: "background-color 0.25s ease",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                        "& .restaurant-name": {
                          color: "#90caf9",
                          textShadow: "0 0 10px rgba(144, 202, 249, 0.3)",
                        },
                        "& .restaurant-cell": {
                          color: "rgba(255, 255, 255, 0.95)",
                        },
                      },
                    }}
                  >
                    {/* اسم المطعم */}
                    <TableCell
                      className="restaurant-name"
                      sx={{
                        color: "#ffffff",
                        fontWeight: 600,
                        fontSize: 14,
                        borderBottom: "none",
                        transition: "color 0.25s ease, text-shadow 0.25s ease",
                        py: 2,
                      }}
                    >
                      {restaurant.name}
                    </TableCell>

                    {/* العنوان */}
                    <TableCell
                      className="restaurant-cell"
                      sx={{
                        color: "rgba(255, 255, 255, 0.5)",
                        fontSize: 13,
                        borderBottom: "none",
                        transition: "color 0.25s ease",
                      }}
                    >
                      {restaurant.address}
                    </TableCell>

                    {/* معلومات الاتصال */}
                    <TableCell
                      className="restaurant-cell"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: 12,
                        borderBottom: "none",
                        transition: "color 0.25s ease",
                      }}
                    >
                      {restaurant.contact}
                    </TableCell>

                    {/* حالة الاشتراك المعدلة بالكامل */}
                    <TableCell sx={{ borderBottom: "none" }}>
                      <Chip
                        size="small"
                        label={status.label}
                        sx={{
                          color: status.color,
                          backgroundColor: status.bg,
                          border: `1px solid ${status.border}`,
                          fontWeight: 600,
                          fontSize: 11,
                          borderRadius: "8px",
                          letterSpacing: "0.03em",
                          cursor: "pointer",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            backgroundColor: status.hoverBg,
                            boxShadow: status.glow,
                            borderColor: status.color,
                            transform: "scale(1.05)",
                          },
                        }}
                      />
                    </TableCell>

                    {/* عدد الموظفين */}
                    <TableCell
                      className="restaurant-cell"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: 13,
                        borderBottom: "none",
                        transition: "color 0.25s ease",
                      }}
                    >
                      {restaurant.staffCount}
                    </TableCell>

                    {/* عدد الطلبات */}
                    <TableCell
                      className="restaurant-cell"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: 13,
                        borderBottom: "none",
                        transition: "color 0.25s ease",
                      }}
                    >
                      {restaurant.ordersCount.toLocaleString()}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </motion.div>
    </Box>
  );
}