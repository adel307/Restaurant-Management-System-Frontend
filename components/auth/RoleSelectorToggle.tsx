import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { Role } from "@/lib/types";

interface RoleSelectorToggleProps {
  value: Role;
  onChange: (role: Role) => void;
}

const ROLES: { value: Role; label: string }[] = [
  { value: "client", label: "Client" },
  { value: "restaurant-admin", label: "Restaurant Admin" },
  { value: "website-admin", label: "Website Admin" },
];

export function RoleSelectorToggle({ value, onChange }: RoleSelectorToggleProps) {
  return (
    <Box sx={{ mb: 3 }}>
      <ToggleButtonGroup
        value={value}
        exclusive
        fullWidth
        aria-label="Sign in as"
        onChange={(_, next) => {
          if (next !== null) onChange(next);
        }}
        sx={{
          bgcolor: "rgba(15, 23, 42, 0.4)",
          backdropFilter: "blur(12px)",
          p: "5px",
          borderRadius: 3.5,
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.2)",
          display: "flex",
          gap: "4px",
          "& .MuiToggleButtonGroup-grouped": {
            border: 0,
            borderRadius: 2.5,
            mx: 0,
            color: "rgba(255, 255, 255, 0.65)",
            fontWeight: 500,
            position: "relative",
            zIndex: 1,
            transition: "color 0.2s ease, background-color 0.2s ease",
            "&.Mui-selected": {
              bgcolor: "primary.main",
              color: "#ffffff",
              fontWeight: 700,
              boxShadow: "0 4px 14px rgba(25, 118, 210, 0.45)",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            },
            "&:hover:not(.Mui-selected)": {
              bgcolor: "rgba(255, 255, 255, 0.08)",
              color: "#ffffff",
            },
          },
        }}
      >
        {ROLES.map((role) => (
          <ToggleButton
            key={role.value}
            value={role.value}
            aria-label={role.label}
            component={motion.button}
            whileTap={{ scale: 0.96 }}
            sx={{
              flex: 1,
              fontSize: { xs: "0.725rem", sm: "0.8125rem" },
              textTransform: "none",
              py: 1.1,
              px: 1,
              lineHeight: 1.2,
            }}
          >
            {role.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
}