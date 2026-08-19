import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Chip from "@mui/material/Chip";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { mockStaff } from "@/lib/mock-data";

// Motion Component Wrap
const MotionCard = motion.create(Card);
const MotionTableRow = motion.create(TableRow);

export function StaffManagementSection() {
  return (
    <Box component="section" sx={{ height: "100%" }}>
      <MotionCard
        aria-label="Staff"
        // Scroll & Initial Entry Animations
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        sx={{
          height: "100%",
          /* زيادة الشفافية: تم تقليل القيمة من 0.75 إلى 0.45 */
          bgcolor: "rgba(18, 22, 31, 0.45)", 
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: { xs: 2.5, sm: 3 },
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",

          /* تأثير Glow للكارت عند مرور الماوس */
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
          {/* Header Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: { xs: 2, sm: 2.5 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PeopleAltOutlinedIcon
                sx={{ color: "primary.main", fontSize: { xs: 20, sm: 22 } }}
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
                Staff on record
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "var(--font-mono)",
                fontSize: { xs: 11, sm: 12 },
                fontWeight: 600,
                color: "rgba(255, 255, 255, 0.5)",
                bgcolor: "rgba(255, 255, 255, 0.05)",
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              {mockStaff.length} people
            </Typography>
          </Box>

          {/* Table Container */}
          <TableContainer
            sx={{
              borderRadius: 2,
              border: "1px solid rgba(255, 255, 255, 0.08)",
              /* زياد الشفافية للخلفية داخل الجدول */
              bgcolor: "rgba(0, 0, 0, 0.1)",
              maxHeight: 340,
            }}
          >
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  {["Name", "Role", "Shift", "Status"].map((head) => (
                    <TableCell
                      key={head}
                      sx={{
                        /* جعل الهيدر أكثر شفافية */
                        bgcolor: "rgba(18, 22, 31, 0.75)",
                        color: "rgba(255, 255, 255, 0.6)",
                        fontWeight: 600,
                        fontSize: { xs: 11, sm: 12 },
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                        py: 1.5,
                      }}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {mockStaff.map((member, index) => (
                  <MotionTableRow
                    key={member.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + index * 0.06,
                      ease: "easeOut",
                    }}
                    sx={{
                      transition: "background-color 0.2s ease",
                      "&:hover": {
                        bgcolor: "rgba(255, 255, 255, 0.05)",
                        "& .MuiTableCell-root": {
                          color: "#ffffff",
                        },
                      },
                      "&:last-child .MuiTableCell-root": {
                        borderBottom: 0,
                      },
                    }}
                  >
                    <TableCell
                      sx={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontWeight: 600,
                        fontSize: { xs: 13, sm: 14 },
                        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                        py: 1.2,
                      }}
                    >
                      {member.name}
                    </TableCell>

                    <TableCell
                      sx={{
                        color: "rgba(255, 255, 255, 0.65)",
                        fontSize: { xs: 12, sm: 13 },
                        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                        py: 1.2,
                      }}
                    >
                      {member.role}
                    </TableCell>

                    <TableCell
                      sx={{
                        fontFamily: "var(--font-mono)",
                        fontSize: { xs: 11, sm: 12 },
                        color: "rgba(255, 255, 255, 0.6)",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                        py: 1.2,
                      }}
                    >
                      {member.shift}
                    </TableCell>

                    <TableCell
                      sx={{
                        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                        py: 1.2,
                      }}
                    >
                      <Chip
                        size="small"
                        label={member.active ? "On duty" : "Off duty"}
                        sx={{
                          fontSize: 11,
                          fontWeight: 600,
                          height: 22,
                          bgcolor: member.active
                            ? "rgba(34, 197, 94, 0.15)"
                            : "rgba(255, 255, 255, 0.06)",
                          color: member.active ? "#4ade80" : "rgba(255, 255, 255, 0.5)",
                          border: "1px solid",
                          borderColor: member.active
                            ? "rgba(34, 197, 94, 0.3)"
                            : "rgba(255, 255, 255, 0.12)",
                          boxShadow: member.active
                            ? "0 0 8px rgba(34, 197, 94, 0.2)"
                            : "none",
                        }}
                      />
                    </TableCell>
                  </MotionTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </MotionCard>
    </Box>
  );
}